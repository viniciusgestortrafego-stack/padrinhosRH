const SPREADSHEET_ID = "1ApbTuU_6q36prUFFWPx3Ri0zqm5Q4CbXYkDiYToFI_c";
const SHEET_NAME = "Leads do site";
const HEADERS = ["Data e hora", "Nome", "E-mail", "Telefone", "Empresa", "Origem"];

function doPost(e) {
  try {
    const payload = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    const lead = validateAndNormalizeLead_(payload);
    appendLead_(lead);
    return jsonResponse_({ ok: true });
  } catch (error) {
    return jsonResponse_({ ok: false, error: String(error.message || error) });
  }
}

function doGet() {
  return jsonResponse_({ ok: true, service: "Padrinhos RH Leads" });
}

function validateAndNormalizeLead_(payload) {
  const lead = {
    name: cleanValue_(payload.name, 120),
    email: cleanValue_(payload.email, 160),
    phone: cleanValue_(payload.phone, 24),
    company: cleanValue_(payload.company, 120),
    source: cleanValue_(payload.source || "site-padrinhos-rh", 80)
  };

  if (!lead.name || !lead.email || !lead.phone || !lead.company) {
    throw new Error("Todos os campos são obrigatórios.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    throw new Error("E-mail inválido.");
  }
  if (lead.phone.replace(/\D/g, "").length < 10) {
    throw new Error("Telefone inválido.");
  }
  return lead;
}

function cleanValue_(value, maxLength) {
  let result = String(value == null ? "" : value).trim().slice(0, maxLength);
  if (/^[=+\-@]/.test(result)) result = "'" + result;
  return result;
}

function appendLead_(lead) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([new Date(), lead.name, lead.email, lead.phone, lead.company, lead.source]);
    sheet.getRange(sheet.getLastRow(), 1).setNumberFormat("dd/MM/yyyy HH:mm:ss");
  } finally {
    lock.releaseLock();
  }
}

function jsonResponse_(body) {
  return ContentService.createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
