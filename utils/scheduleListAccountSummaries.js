function addFormulaToRange() {
  // Replace "Sheet1" with the name of the sheet where you want to add the formula
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("GA4 Account Summaries");
  
  // Replace "A1:B10" with the range of cells where you want to add the formula
  var range = sheet.getRange("E2:E");
  
  // Replace the formula below with your desired formula
  var formula = '=IF(REGEXMATCH(TEXT(D2, "#"), "\\d+"), TRUE, FALSE)';
  
  // Apply the formula to the range
  range.setFormula(formula);
}

function scheduleListAccountSummaries() {
  writeGA4AccountSummariesToSheet()
  addFormulaToRange()
}