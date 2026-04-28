# 📊 Setup: Google Sheets CRM

Este guia mostra como conectar a API Python com Google Sheets para salvar leads automaticamente.

---

## 🎯 O que vai acontecer?

```
1. Lead preenche formulário
2. IA qualifica
3. Dados salvos automaticamente em Google Sheets
4. Você gerencia os leads em uma planilha compartilhável
```

---

## 📋 PASSO 1: Preparar Google Sheets

### 1.1 Criar nova planilha
- Acesse [Google Drive](https://drive.google.com)
- Clique em **"Novo"** → **"Planilha Google"**
- Nomeie como: **"Hermann Leads CRM"**

### 1.2 Criar colunas (Header)
- Na primeira linha (linha 1), adicione estes cabeçalhos:
```
A: Nome
B: WhatsApp
C: Negócio
D: Desafio
E: Investimento
F: Score
G: Perfil
H: Notas
I: Data
J: Status
```

### 1.3 Copiar o ID da planilha
- A URL ficará assim:
```
https://docs.google.com/spreadsheets/d/AQUI_ESTÁ_O_ID/edit
```
- Copie `AQUI_ESTÁ_O_ID` (a parte longa entre `/d/` e `/edit`)
- Você precisará desse ID no `.env`

---

## 🔑 PASSO 2: Criar credenciais no Google Cloud

### 2.1 Acessar Google Cloud Console
- Acesse [Google Cloud Console](https://console.cloud.google.com)
- Crie um novo projeto: clique em **"Novo Projeto"**
- Nomeie: **"Hermann AI"**
- Espere criar

### 2.2 Ativar APIs
Depois que o projeto for criado:

1. Na barra de busca, procure por **"Google Sheets API"**
2. Clique em **"Ativar"**
3. Na barra de busca, procure por **"Google Drive API"**
4. Clique em **"Ativar"**

### 2.3 Criar Service Account
1. No menu lateral, vá em **"Credenciais"**
2. Clique em **"Criar credencial"** → **"Conta de Serviço"**
3. Preencha:
   - Nome: **"Hermann AI API"**
   - ID: autofill
   - Descrição: "API para salvar leads em Sheets"
4. Clique em **"Continuar"**
5. Clique em **"Criar e Continuar"** (skip das permissões por agora)
6. Clique em **"Concluído"**

### 2.4 Gerar chave JSON
1. Na lista de "Contas de Serviço", clique na que você criou
2. Vá na aba **"Chaves"**
3. Clique em **"Adicionar Chave"** → **"Criar nova chave"**
4. Escolha **"JSON"**
5. Clique em **"Criar"**
6. Um arquivo `JSON` será baixado

### 2.5 Copiar o arquivo JSON
1. O arquivo baixado tem um nome tipo: `hermann-ai-XXXXX.json`
2. **Copie este arquivo para a pasta do projeto:**
```
c:\Users\Admin\Desktop\Hermann Docs\GitHub\site-hermann\credentials.json
```

---

## 🔓 PASSO 3: Compartilhar planilha

1. Abra novamente o arquivo JSON que você baixou com bloco de notas
2. Procure pelo campo: `"client_email": "AQUI_TEM_UM_EMAIL@..."`
3. Copie todo esse email
4. Volte para a planilha Google Sheets
5. Clique em **"Compartilhar"** (canto superior direito)
6. Cole o email
7. Clique em **"Editor"** para dar permissão de edição
8. Clique em **"Compartilhar"**

---

## ⚙️ PASSO 4: Configurar .env local

1. Abra o arquivo `.env.local` na raiz do projeto
2. Atualize com:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
ANTHROPIC_API_KEY=sua_chave_anthropic_aqui

# Google Sheets
GOOGLE_SHEETS_ID=COPIE_O_ID_DA_SUA_PLANILHA_AQUI
GOOGLE_SHEETS_CREDENTIALS_PATH=credentials.json
```

Exemplo completo:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
ANTHROPIC_API_KEY=sk-ant-v7-XXXXX...

GOOGLE_SHEETS_ID=1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p
GOOGLE_SHEETS_CREDENTIALS_PATH=credentials.json
```

---

## 📦 PASSO 5: Instalar dependências

```bash
cd c:\Users\Admin\Desktop\Hermann\ Docs\GitHub\site-hermann

# Instale as novas dependências
pip install -r requirements.txt
```

A instalação vai adicionar:
- `gspread` (biblioteca para acessar Google Sheets)
- `google-auth-oauthlib` (autenticação)
- `google-auth-httplib2` (HTTP)
- `google-auth` (base de autenticação)

---

## 🧪 PASSO 6: Testar

### 6.1 Inicie o backend
```bash
python -m uvicorn api.main:app --reload --port 8000
```

Você deve ver:
```
INFO:     Uvicorn running on http://127.0.0.1:8000
```

### 6.2 Inicie o frontend
Em outro terminal:
```bash
npm run dev
```

### 6.3 Teste o formulário
1. Abra http://localhost:3000
2. Role até "Vamos construir sua Estrutura de Resultado"
3. Preencha o formulário com dados de teste:
   - Nome: `Teste Google Sheets`
   - WhatsApp: `21987654321`
   - Negócio: `Consultoria`
   - Desafio: `Gerar mais leads`
   - Investimento: `R$3.000 a R$6.000`
   - Marque os checkboxes
4. Clique em "Quero minha Estrutura de Resultado"

### 6.4 Verifique no Sheets
1. Volte para sua planilha Google Sheets
2. Atualize (Ctrl+R ou F5)
3. Você deve ver uma linha nova com:
   - Nome: Teste Google Sheets
   - WhatsApp: 21987654321
   - Score: (um número entre 1-10)
   - Perfil: quente/morno/frio
   - Data: data/hora atual
   - Status: Novo

---

## 🐛 Troubleshooting

### Erro: "Arquivo de credenciais não encontrado"
```
❌ Arquivo de credenciais não encontrado: credentials.json
```
**Solução:**
- Verifique se você copiou o `credentials.json` para a pasta raiz do projeto
- Caminho correto: `c:\Users\Admin\Desktop\Hermann Docs\GitHub\site-hermann\credentials.json`

### Erro: "GOOGLE_SHEETS_ID não configurado"
```
❌ GOOGLE_SHEETS_ID não configurado em .env
```
**Solução:**
- Abra `.env.local`
- Adicione: `GOOGLE_SHEETS_ID=AQUI_ESTÁ_O_ID_DA_PLANILHA`

### Erro: "Permissão negada"
```
❌ Erro ao salvar em Sheets: 403 Permission denied
```
**Solução:**
- Você não compartilhou a planilha com o email da service account
- Copie o email do arquivo JSON
- Compartilhe a planilha com esse email (permissão de Editor)

### Erro: "Range não encontrado"
```
❌ Erro ao salvar em Sheets: 'Leads'
```
**Solução:**
- A aba precisa se chamar exatamente **"Leads"** (com "L" maiúsculo)
- Ou modifique em `api/sheets_service.py` linha ~50:
```python
worksheet = spreadsheet.worksheet("Leads")  # ← Mude o nome aqui
```

### Backend está rodando mas não salva em Sheets
**Verifique:**
1. Terminal do backend mostra algum erro com Google Sheets?
2. As credenciais estão corretas?
3. O ID da planilha está certo?
4. A planilha foi compartilhada com o email da service account?

Se o terminal mostra:
```
[SHEETS] ✅ Lead salvo em Sheets (linha 2)
```
Está funcionando!

---

## ✅ Checklist Final

- [ ] Planilha Google Sheets criada
- [ ] Cabeçalhos adicionados (Nome, WhatsApp, Negócio, etc)
- [ ] Project Google Cloud criado
- [ ] Google Sheets API ativada
- [ ] Google Drive API ativada
- [ ] Service Account criada
- [ ] Chave JSON gerada e copiada para pasta
- [ ] Planilha compartilhada com email da service account
- [ ] `.env.local` atualizado com GOOGLE_SHEETS_ID
- [ ] `.env.local` atualizado com GOOGLE_SHEETS_CREDENTIALS_PATH
- [ ] `pip install -r requirements.txt` executado
- [ ] Backend rodando em localhost:8000
- [ ] Frontend rodando em localhost:3000
- [ ] Teste completo funciona (lead aparece no Sheets)

---

## 📊 Próximos Passos

Depois de confirmar que está funcionando:

1. **Monitorar leads chegando:**
   - Abra a planilha de vez em quando
   - Veja scores e perfis

2. **Atualizar status manualmente:**
   - Na coluna J (Status), mude de "Novo" para:
     - "Contatado" (você ligou)
     - "Reunião" (marcou encontro)
     - "Fechado" (virou cliente)
     - "Descartado" (não é fit)

3. **Próximo mês:**
   - Criar Dashboard no site para ver tudo em tempo real
   - Automação de notificações por WhatsApp
   - Relatórios automáticos

---

## 🆘 Precisa de ajuda?

Se alguma coisa não funcionar, verifique:

1. **Terminal do backend** - mostra erros?
2. **DevTools (F12) do navegador** - mostra erros de fetch?
3. **Google Sheets** - consegue abrir e editar?
4. **Credenciais JSON** - existe no lugar certo?

Cheque a pasta do projeto:
```
site-hermann/
├── credentials.json  ← AQUI DEVE ESTAR
├── api/
├── components/
└── ...
```
