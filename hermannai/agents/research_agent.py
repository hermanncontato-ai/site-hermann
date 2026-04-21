from crewai import Agent
from langchain_anthropic import ChatAnthropic
from hermannai.skills.search_skill import web_search
from langchain.tools import Tool
import os

llm = ChatAnthropic(model="claude-3-5-sonnet-20241022", api_key=os.getenv("ANTHROPIC_API_KEY"))

# Definir tools
search_tool = Tool(
    name="Web Search",
    func=web_search,
    description="Pesquisa informações na web."
)

def create_research_agent():
    return Agent(
        role="Pesquisador Especialista",
        goal="Fornecer informações precisas e atualizadas sobre qualquer tópico.",
        backstory="Você é um pesquisador incansável, sempre buscando fontes confiáveis e resumindo dados de forma clara.",
        llm=llm,
        tools=[search_tool],
        verbose=True
    )