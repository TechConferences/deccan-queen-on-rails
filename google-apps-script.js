/**
 * Google Apps Script for Waitlist
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com and create a new project
 * 2. Paste this code
 * 3. Replace SPREADSHEET_ID with your Google Sheet ID
 * 4. Click Deploy > New deployment > Web app
 * 5. Set "Execute as" to "Me" and "Who has access" to "Anyone"
 * 6. Copy the Web app URL and use it in WaitlistForm.tsx
 */

const SPREADSHEET_ID = '1JKCO3PIHyS30qMFfQgf3m31xQhoQU8NaaDP-sfzftJE';
const SHEET_NAME = 'Waitlist';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const email = data.email;

    if (!email) {
      return ContentService.createTextOutput(JSON.stringify({ success: false, error: 'Email is required' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

    if (!sheet) {
      // Create sheet if it doesn't exist
      const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
      ss.insertSheet(SHEET_NAME);
      const newSheet = ss.getSheetByName(SHEET_NAME);
      newSheet.appendRow(['Date', 'Name']);
    }

    const targetSheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    // Columns: Date, Name (email)
    targetSheet.appendRow([new Date().toISOString(), email]);

    const count = targetSheet.getLastRow() - 1; // Subtract header row

    return ContentService.createTextOutput(JSON.stringify({ success: true, count: count }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const action = e.parameter.action;

    if (action === 'count') {
      const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
      const count = sheet ? sheet.getLastRow() - 1 : 0; // Subtract header row

      return ContentService.createTextOutput(JSON.stringify({ success: true, count: Math.max(0, count) }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService.createTextOutput(JSON.stringify({ success: false, error: 'Invalid action' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
