function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse(e.postData.contents);
    if (!data.id || typeof data.id !== 'string' || data.id.length > 100 || e.postData.contents.length > 30000) throw new Error('Invalid record');
    const id = PropertiesService.getScriptProperties().getProperty('RESULTS_FILE_ID');
    if (!id) throw new Error('Missing RESULTS_FILE_ID');
    const file = DriveApp.getFileById(id);
    const records = JSON.parse(file.getBlob().getDataAsString());
    if (!Array.isArray(records)) throw new Error('Expected JSON array');
    if (!records.some(r => r.id === data.id)) {
      records.push(data);
      file.setContent(JSON.stringify(records));
    }
    return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
  } finally { lock.releaseLock(); }
}