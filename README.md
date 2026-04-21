# site-hermann
Desenvolvimento do site institucional Hermann

## HermannAI - Sistema de Agentes Multi-Agente

Este projeto inclui um sistema organizado de agentes de IA, com um orquestrador central chamado HermannAI e agentes especializados com skills definidas.

### Estrutura
- `hermannai/orchestrator/`: Orquestrador central
- `hermannai/agents/`: Agentes especializados
- `hermannai/skills/`: Skills e ferramentas específicas
- `hermannai/utils/`: Utilitários

### Setup
1. Instale as dependências:
   ```
   pip install -r requirements.txt
   ```

2. Configure a chave da API do Anthropic:
   - Copie `.env.example` para `.env`
   - Adicione sua chave `ANTHROPIC_API_KEY`

3. Execute o exemplo:
   ```
   python main.py
   ```

### Adicionando Novos Agentes
- Defina skills em `hermannai/skills/`
- Crie agentes em `hermannai/agents/`
- Integre no orquestrador em `hermannai/orchestrator/`

Para mais detalhes, consulte a documentação de cada módulo.
