import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pydantic import BaseModel
from api.models import LeadRequest, LeadResponse
from api.lead_agent import qualify_lead
from api.sheets_service import update_lead_status

load_dotenv()

app = FastAPI(
    title="Hermann AI API",
    description="API de qualificação de leads com IA para Hermann Mallard Marketing de Resultado",
    version="1.0.0",
)

# Modelos para novos endpoints
class UpdateLeadStatusRequest(BaseModel):
    whatsapp: str
    status: str


class StatusResponse(BaseModel):
    sucesso: bool
    mensagem: str

app = FastAPI(
    title="Hermann AI API",
    description="API de qualificação de leads com IA para Hermann Mallard Marketing de Resultado",
    version="1.0.0",
)

# CORS — permite chamadas do site
ALLOWED_ORIGINS = os.getenv(
    "ALLOWED_ORIGINS",
    "https://hermannmallard.com.br,http://localhost:3000"
).split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    return {"status": "ok", "service": "Hermann AI API"}


@app.post("/api/qualify-lead", response_model=LeadResponse)
def qualify_lead_endpoint(lead: LeadRequest):
    if not os.getenv("ANTHROPIC_API_KEY"):
        raise HTTPException(status_code=500, detail="ANTHROPIC_API_KEY não configurada")
    try:
        return qualify_lead(lead)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/leads/update-status", response_model=StatusResponse)
def update_lead_status_endpoint(request: UpdateLeadStatusRequest):
    """Atualiza o status de um lead no Google Sheets"""
    result = update_lead_status(request.whatsapp, request.status)
    return StatusResponse(
        sucesso=result["sucesso"],
        mensagem=result["mensagem"]
    )
