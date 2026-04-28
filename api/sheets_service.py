import gspread
import os
import json
from datetime import datetime
from google.oauth2.service_account import Credentials

# Escopo da API
SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive"
]

def get_sheets_client():
    """Conecta ao Google Sheets usando credenciais de service account"""
    
    # Tenta carregar credenciais do JSON file
    creds_path = os.getenv("GOOGLE_SHEETS_CREDENTIALS_PATH", "credentials.json")
    
    if not os.path.exists(creds_path):
        raise FileNotFoundError(
            f"❌ Arquivo de credenciais não encontrado: {creds_path}\n"
            f"Você precisa:\n"
            f"1. Criar service account no Google Cloud\n"
            f"2. Baixar JSON e salvar como credentials.json\n"
            f"3. Compartilhar planilha com o email da service account"
        )
    
    credentials = Credentials.from_service_account_file(
        creds_path, 
        scopes=SCOPES
    )
    
    client = gspread.authorize(credentials)
    return client


def save_lead_to_sheets(lead_data: dict) -> dict:
    """
    Salva um lead qualificado no Google Sheets
    
    Args:
        lead_data: {
            "nome": str,
            "whatsapp": str,
            "negocio": str,
            "desafio": str,
            "investimento": str,
            "score": int,
            "perfil": str,
            "notas": str
        }
    
    Returns:
        {
            "sucesso": bool,
            "mensagem": str,
            "row": int (número da linha salva)
        }
    """
    
    try:
        # Conecta ao Google Sheets
        client = get_sheets_client()
        
        # Abre a planilha
        spreadsheet_id = os.getenv("GOOGLE_SHEETS_ID")
        if not spreadsheet_id:
            raise ValueError("❌ GOOGLE_SHEETS_ID não configurado em .env")
        
        spreadsheet = client.open_by_key(spreadsheet_id)
        worksheet = spreadsheet.worksheet("Leads")  # Aba "Leads"
        
        # Prepara dados para inserir
        row_data = [
            lead_data.get("nome", ""),
            lead_data.get("whatsapp", ""),
            lead_data.get("negocio", ""),
            lead_data.get("desafio", ""),
            lead_data.get("investimento", ""),
            str(lead_data.get("score", "")),
            lead_data.get("perfil", ""),
            lead_data.get("notas", ""),
            datetime.now().strftime("%d/%m/%Y %H:%M"),  # Data/Hora
            "Novo"  # Status padrão
        ]
        
        # Insere linha
        worksheet.append_row(row_data)
        
        # Conta total de linhas (para retornar qual foi inserida)
        total_rows = len(worksheet.get_all_values())
        
        return {
            "sucesso": True,
            "mensagem": f"✅ Lead salvo em Sheets (linha {total_rows})",
            "row": total_rows
        }
    
    except FileNotFoundError as e:
        return {
            "sucesso": False,
            "mensagem": f"❌ Erro de configuração: {str(e)}",
            "row": None
        }
    except Exception as e:
        return {
            "sucesso": False,
            "mensagem": f"❌ Erro ao salvar em Sheets: {str(e)}",
            "row": None
        }


def update_lead_status(whatsapp: str, status: str) -> dict:
    """
    Atualiza o status de um lead já existente
    
    Args:
        whatsapp: numero do WhatsApp para identificar o lead
        status: novo status (contatado, reunião, fechado, etc)
    
    Returns:
        resultado da operação
    """
    
    try:
        client = get_sheets_client()
        spreadsheet_id = os.getenv("GOOGLE_SHEETS_ID")
        spreadsheet = client.open_by_key(spreadsheet_id)
        worksheet = spreadsheet.worksheet("Leads")
        
        # Encontra a linha com esse WhatsApp
        cell = worksheet.find(whatsapp)
        
        if cell:
            # Coluna Status é a 10ª (índice 10)
            worksheet.update_cell(cell.row, 10, status)
            return {
                "sucesso": True,
                "mensagem": f"✅ Status atualizado para '{status}'",
                "row": cell.row
            }
        else:
            return {
                "sucesso": False,
                "mensagem": f"❌ Lead com WhatsApp {whatsapp} não encontrado",
                "row": None
            }
    
    except Exception as e:
        return {
            "sucesso": False,
            "mensagem": f"❌ Erro ao atualizar: {str(e)}",
            "row": None
        }
