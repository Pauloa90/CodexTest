// triggers.gs - Spreadsheet triggers for automation

/**
 * onEdit trigger to handle button clicks and status changes.
 * @param {Event} e
 */
function onEdit(e) {
  const sheet = e.source.getActiveSheet();
  const range = e.range;

  // Detect button clicks in row 1
  if (range.getRow() === 1 && range.getColumn() === 12) {
    if (sheet.getName() === 'Personagens') {
      gerarNovoPersonagem();
    }
  }

  // React to status changes in column G
  if (range.getColumn() === 7) {
    const novoStatus = range.getValue();
    if (novoStatus === 'Approved') {
      // TODO: trigger next step based on sheet context
    }
  }
}
