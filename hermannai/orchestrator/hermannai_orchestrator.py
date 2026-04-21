from crewai import Crew, Agent, Task
from langchain_anthropic import ChatAnthropic
import os
from dotenv import load_dotenv

load_dotenv()

# Configurar o LLM (Claude via Anthropic)
llm = ChatAnthropic(
    model="claude-3-5-sonnet-20241022",
    api_key=os.getenv("ANTHROPIC_API_KEY")
)

class HermannAIOrchestrator:
    def __init__(self):
        self.agents = {}
        self.crew = None

    def add_agent(self, name, role, goal, backstory, tools=None):
        agent = Agent(
            role=role,
            goal=goal,
            backstory=backstory,
            llm=llm,
            tools=tools or [],
            verbose=True
        )
        self.agents[name] = agent
        return agent

    def create_crew(self, agents_list, tasks):
        self.crew = Crew(
            agents=agents_list,
            tasks=tasks,
            verbose=True
        )

    def run_crew(self, inputs):
        if self.crew:
            return self.crew.kickoff(inputs)
        else:
            raise ValueError("Crew not created. Add agents and tasks first.")

# Exemplo de uso
if __name__ == "__main__":
    orchestrator = HermannAIOrchestrator()

    # Adicionar agentes
    research_agent = orchestrator.add_agent(
        name="Researcher",
        role="Pesquisador",
        goal="Coletar informações relevantes sobre tópicos específicos.",
        backstory="Você é um especialista em pesquisa, capaz de encontrar dados precisos e atualizados."
    )

    coder_agent = orchestrator.add_agent(
        name="Coder",
        role="Desenvolvedor",
        goal="Escrever código limpo e eficiente baseado em requisitos.",
        backstory="Você é um programador experiente, focado em melhores práticas e qualidade de código."
    )

    # Criar tarefas
    research_task = Task(
        description="Pesquisar sobre agentes de IA multi-agente e melhores práticas.",
        agent=research_agent,
        expected_output="Um relatório resumido sobre agentes multi-agente."
    )

    code_task = Task(
        description="Implementar um exemplo simples de agente usando Python.",
        agent=coder_agent,
        expected_output="Código Python funcional para um agente básico."
    )

    # Criar crew
    orchestrator.create_crew([research_agent, coder_agent], [research_task, code_task])

    # Executar
    result = orchestrator.run_crew({})
    print(result)