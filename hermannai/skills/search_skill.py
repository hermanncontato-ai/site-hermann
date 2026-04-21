from langchain.tools import DuckDuckGoSearchRun
from langchain.utilities import DuckDuckGoSearchAPIWrapper

# Skill de pesquisa web
def web_search(query: str) -> str:
    """
    Realiza uma pesquisa na web usando DuckDuckGo.

    Args:
        query (str): A consulta de pesquisa.

    Returns:
        str: Resultados da pesquisa.
    """
    search = DuckDuckGoSearchRun(api_wrapper=DuckDuckGoSearchAPIWrapper())
    return search.run(query)

# Outras skills podem ser adicionadas aqui
def code_analysis(code: str) -> str:
    """
    Analisa código para melhores práticas.

    Args:
        code (str): O código a ser analisado.

    Returns:
        str: Análise do código.
    """
    # Implementação simples
    if "print(" in code:
        return "Código contém prints. Considere logging para produção."
    return "Código parece limpo."