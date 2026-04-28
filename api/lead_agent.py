import os
import json
import anthropic
from api.models import LeadRequest, LeadResponse
from api.sheets_service import save_lead_to_sheets
from urllib.parse import quote

HERMANN_WA = "5521967472172"

SYSTEM_PROMPT = """Você é o assistente de qualificação de leads de Hermann Mallard,
especialista em Marketing de Resultado para negócios locais no Brasil.

Hermann oferece: captação estratégica, funis de conversão, IA para atendimento 24h,
CRM e pipeline, conteúdo com propósito e otimização contínua.

Seu trabalho é analisar os dados de um lead que preencheu o formulário do site
e retornar um JSON com a qualificação e a mensagem personalizada para Hermann
enviar pelo WhatsApp.

Regras:
- Score 8-10: lead quente (investimento alto, desafio claro, negócio estabelecido)
- Score 5-7: lead morno (potencial mas precisa de nutrição)
- Score 1-4: lead frio (pouco investimento ou negócio muito inicial)

Peso por desafio declarado (some ao score base):
- "Tráfego pago": +2 (alta intenção de compra, serviço core de Hermann)
- "Gerar mais leads": +2 (desafio direto, alta conversão)
- "Converter mais leads": +2 (desafio direto, alta conversão)
- "Automatizar atendimento": +1 (serviço de IA, bom ticket)
- "Produzir conteúdo": +1 (serviço complementar, ticket médio)
- "Medir resultados": +0 (desafio analítico, menor urgência)
- "Criar presença digital": +0 (pode ser negócio muito inicial)
- "Outro": +0 (avaliar com atenção)

- A mensagem_personalizada deve ser calorosa, humana e específica ao negócio do lead
- As notas são para uso interno de Hermann (resumo estratégico)

Retorne APENAS um JSON válido com os campos:
{
  "score": <número 1-10>,
  "perfil": "<quente|morno|frio>",
  "mensagem_personalizada": "<mensagem para WhatsApp, máx 300 chars>",
  "notas": "<resumo interno para Hermann, máx 200 chars>"
}"""


def qualify_lead(lead: LeadRequest) -> LeadResponse:
    client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

    user_message = f"""Qualifique este lead:

Nome: {lead.nome}
WhatsApp: {lead.whatsapp}
Negócio/Segmento: {lead.negocio}
Principal desafio: {lead.desafio}
Investimento mensal disponível: {lead.investimento}"""

    message = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=512,
        system=SYSTEM_PROMPT,
        messages=[{"role": "user", "content": user_message}],
    )

    raw = message.content[0].text.strip()

    # Remove possível markdown code block
    if raw.startswith("```"):
        raw = raw.split("```")[1]
        if raw.startswith("json"):
            raw = raw[4:]
    raw = raw.strip()

    data = json.loads(raw)

    msg = data["mensagem_personalizada"]
    wa_url = f"https://wa.me/{HERMANN_WA}?text={quote(msg)}"

    # Salva lead no Google Sheets
    sheets_result = save_lead_to_sheets({
        "nome": lead.nome,
        "whatsapp": lead.whatsapp,
        "negocio": lead.negocio,
        "desafio": lead.desafio,
        "investimento": lead.investimento,
        "score": data["score"],
        "perfil": data["perfil"],
        "notas": data["notas"]
    })
    
    print(f"[SHEETS] {sheets_result['mensagem']}")

    return LeadResponse(
        score=data["score"],
        perfil=data["perfil"],
        mensagem_personalizada=msg,
        notas=data["notas"],
        whatsapp_url=wa_url,
    )
