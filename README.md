# Tenda dos Pequenos

Este repositório contém uma estrutura inicial para o projeto **Tenda dos Pequenos**, uma série infantil baseada em histórias bíblicas. A pasta `apps_script` possui arquivos modelo de Apps Script que automatizam a criação de personagens, episódios e cenas utilizando serviços de IA.

## Estrutura `apps_script`
- `main.gs` - Funções principais para gerar personagens, ideias de episódios e processar cenas.
- `apis.gs` - Integrações com OpenAI, PIAPI (Midjourney e Kling) e TopMediai.
- `utils.gs` - Funções auxiliares para cálculos e organização no Google Drive.
- `config.gs` - Chaves de API e configurações de acesso.
- `triggers.gs` - Disparo automático de ações ao editar o Google Sheets.

Algumas funções já trazem chamadas reais às APIs, mas o fluxo ainda demanda ajustes e integração com o Google Sheets.
