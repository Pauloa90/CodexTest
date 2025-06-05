// apis.gs - external API integrations for Tenda dos Pequenos

/**
 * Call OpenAI Assistant with a given prompt and type.
 * @param {string} prompt
 * @param {string} tipo
 * @return {*} API response
 */
function chamarOpenAIAssistant(prompt, tipo) {
  const url = 'https://api.openai.com/v1/chat/completions';
  const payload = {
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'Instruções do assistant...' },
      { role: 'user', content: prompt }
    ]
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: 'Bearer ' + getConfig('OPENAI_API_KEY')
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch(url, options);
  return JSON.parse(response.getContentText());
}

/**
 * Call PIAPI Midjourney in Professional mode for image generation.
 * @param {string} prompt
 * @param {string} mode
 * @return {*} Task response
 */
function chamarPIAPIMidjourney(prompt, mode) {
  if (!mode) mode = 'professional';
  const url = 'https://api.piapi.ai/api/v1/task';
  const payload = {
    model: 'midjourney',
    task_type: 'image_generation',
    input: {
      prompt: prompt,
      mode: mode,
      aspect_ratio: '16:9'
    }
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    headers: { 'x-api-key': getConfig('PIAPI_KEY') },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch(url, options);
  return JSON.parse(response.getContentText());
}

/**
 * Call PIAPI Kling to generate a video with lip sync.
 * @param {Object} config
 * @return {*} Task response
 */
function chamarPIAPIKling(config) {
  const url = 'https://api.piapi.ai/kling/videogen';
  const payload = {
    model: 'kling',
    task_type: 'video_generation',
    input: {
      prompt: config.prompt,
      mode: 'professional',
      duration: 5,
      image_url: config.personagem,
      background_url: config.background,
      audio_url: config.audio,
      lip_sync: true
    }
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    headers: { 'x-api-key': getConfig('PIAPI_KEY') },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch(url, options);
  return JSON.parse(response.getContentText());
}

/**
 * Generate speech audio using TopMediai service.
 * @param {string} texto
 * @param {string} vozId
 * @param {string} velocidade
 * @return {string} URL of generated audio
 */
function chamarTopMediaiTTS(texto, vozId, velocidade) {
  const url = 'https://api.topmediai.com/tts';
  const payload = {
    text: texto,
    voice_id: vozId,
    speed: velocidade
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    headers: { 'x-api-key': getConfig('TOPMEDIAI_KEY') },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch(url, options);
  const data = JSON.parse(response.getContentText());
  return data.url || '';
}
