// main.gs - core functions for Tenda dos Pequenos

/**
 * Generate a new character using OpenAI Assistant and PIAPI Midjourney.
 * Saves assets to Drive and updates the spreadsheet.
 */
function gerarNovoPersonagem() {
  const prompt = 'Crie um personagem no formato especificado.';
  const result = chamarOpenAIAssistant(prompt, 'personagem');
  const personagem = result.personagens && result.personagens[0];
  if (!personagem) {
    Logger.log('Falha ao gerar personagem');
    return;
  }

  const imagem = chamarPIAPIMidjourney(personagem.prompt_midjourney, 'professional');
  // TODO: salvar imagem e dados no Drive/Sheets
  Logger.log({ personagem: personagem.nome, imagem: imagem });
}

/**
 * Generate five episode ideas with two scenes each.
 * Fills the Episodes sheet and calculates budgets.
 */
function gerar5Ideias() {
  const prompt = 'Gere 5 ideias de episodios com 2 cenas cada.';
  const ideias = chamarOpenAIAssistant(prompt, 'episodios');
  // TODO: adicionar ideias ao Sheets e calcular custos
  Logger.log(ideias);
}

/**
 * Approve a selected episode and trigger scene generation.
 * @param {number} linha Row index of the episode in the sheet.
 */
function aprovarEpisodio(linha) {
  // TODO: Verify required characters exist
  // TODO: Create Drive folder structure
  // TODO: Call gerarCenas when ready
}

/**
 * Generate two test scenes for an episode.
 * @param {number} episodioId Episode identifier.
 */
function gerarCenas(episodioId) {
  const prompt = `Crie 2 cenas para o episodio ${episodioId}`;
  const cenas = chamarOpenAIAssistant(prompt, 'cenas');
  // TODO: criar aba do episodio e iniciar producao
  Logger.log(cenas);
}

/**
 * Process a single scene: audio, images and video.
 * @param {string} aba Sheet name.
 * @param {number} linha Row index in the sheet.
 */
function processarCena(aba, linha) {
  // TODO: obter dados da cena a partir do sheet
  const fala = 'Texto de exemplo';
  const vozId = 'voz1';
  const velocidade = 'Normal';

  const audioUrl = chamarTopMediaiTTS(fala, vozId, velocidade);
  const personagemImg = chamarPIAPIMidjourney('prompt personagem');
  const backgroundImg = chamarPIAPIMidjourney('prompt background');

  const video = chamarPIAPIKling({
    prompt: 'acao',
    personagem: personagemImg.url,
    background: backgroundImg.url,
    audio: audioUrl
  });

  // TODO: salvar resultados e atualizar planilha
  Logger.log(video);
}
