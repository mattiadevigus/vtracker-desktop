const path = require("path");
const server = require("./server");
const { app, BrowserWindow, dialog } = require("electron");
const isDev = require("electron-is-dev");

let mainWindow;

createWindow = () => {
    mainWindow = new BrowserWindow({
        minWidth: 1000,
        minHeight: 500,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
        }
    });

    mainWindow.loadURL(isDev ? "http://localhost:3000" : "http://localhost:9000");

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', () => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (mainWindow === null) createWindow();
});