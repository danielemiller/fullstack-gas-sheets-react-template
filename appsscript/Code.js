function doGet() {
    const htmlServ = HtmlService.createTemplateFromFile('index');
    return htmlServ.evaluate()
}

function getData() {
        
    const ss = SpreadsheetApp.getActiveSpreadsheet()
    const sheet = ss.getSheetByName("Sheet1")
    const position = sheet.getRange("A2").getValue()
    const company = sheet.getRange("B2").getValue()
    
    const data = {
        position,
        company
    }

    return data
}