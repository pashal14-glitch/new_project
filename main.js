const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1400,
        height: 900,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: false,
            devTools: true
        }
    });
    
    // טוען את הקובץ הראשי
    win.loadFile('miluim_calculator.html');
    
    // מסתיר את התפריט העליון
    win.setMenuBarVisibility(false);
    
    // פתיחת DevTools עם Ctrl+Shift+I
    win.webContents.on('before-input-event', (event, input) => {
        if (input.control && input.shift && input.key === 'I') {
            win.webContents.toggleDevTools();
        }
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    app.quit();
});
