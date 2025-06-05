// utils.gs - helper functions for Tenda dos Pequenos

/**
 * Create a folder structure for a new episode on Drive.
 * @param {string} nomeEpisodio
 * @return {string} URL of the created folder
 */
function criarEstruturaPastas(nomeEpisodio) {
  const pastaRaiz = DriveApp.getFoldersByName('TendaDosPequenos').next();
  const pastaEpisodio = pastaRaiz.createFolder(`TESTE_${nomeEpisodio}`);

  pastaEpisodio.createFolder('cenas');
  pastaEpisodio.createFolder('audio');
  pastaEpisodio.createFolder('metadados');

  return pastaEpisodio.getUrl();
}

/**
 * Calculate episode cost based on the number of scenes.
 * @param {number} numCenas
 * @return {number} Cost in dollars
 */
function calcularCustoEpisodio(numCenas) {
  if (!numCenas) numCenas = 2;
  const custoImagemPro = 0.45;
  const custoVideoPro = 0.45;
  const custoAudio = 0.02;
  return numCenas * (custoImagemPro * 2 + custoVideoPro + custoAudio);
}

/**
 * Update status cell and timestamp in a sheet.
 * @param {string} aba Sheet name
 * @param {number} linha Row index
 * @param {string} novoStatus
 */
function atualizarStatus(aba, linha, novoStatus) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(aba);
  sheet.getRange(linha, 17).setValue(novoStatus); // Coluna Q
  sheet.getRange(linha, 19).setValue(new Date()); // Timestamp
}
