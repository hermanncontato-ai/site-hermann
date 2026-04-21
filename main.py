from hermannai.orchestrator.hermannai_orchestrator import HermannAIOrchestrator
from hermannai.agents.research_agent import create_research_agent
from crewai import Task

def main():
    # Inicializar orquestrador
    orchestrator = HermannAIOrchestrator()

    # Criar agentes
    research_agent = create_research_agent()

    # Adicionar mais agentes se necessário
    # coder_agent = ...

    # Definir tarefas
    task1 = Task(
        description="Pesquise sobre as melhores práticas para implementar agentes de IA multi-agente.",
        agent=research_agent,
        expected_output="Um resumo das melhores práticas."
    )

    # Criar crew
    orchestrator.create_crew([research_agent], [task1])

    # Executar
    result = orchestrator.run_crew({})
    print("Resultado da execução:")
    print(result)

if __name__ == "__main__":
    main()