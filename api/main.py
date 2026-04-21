import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from api.models import LeadRequest, LeadResponse
from api.lead_agent import qualify_lead

load_dotenv()

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
