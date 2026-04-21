from pydantic import BaseModel
from typing import Optional


class LeadRequest(BaseModel):
    nome: str
    whatsapp: str
    negocio: str
    desafio: str
    investimento: str


class LeadResponse(BaseModel):
    score: int                    # 1-10
    perfil: str                   # quente / morno / frio
    mensagem_personalizada: str   # mensagem para o WhatsApp
    notas: str                    # resumo interno para Hermann
    whatsapp_url: str             # link wa.me pronto
