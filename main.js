// In the main process.
const {BrowserWindow} = require('electron')

// Or use `remote` from the renderer process.
// const {BrowserWindow} = require('electron').remote

let win = new BrowserWindow({width: 800, height: 600})
win.on('closed', () => {
  win = null
})

// Load a remote URL
win.loadURL('https://github.com')

// Or load a local HTML file
win.loadURL(`file://${/Users/mlam/Documents/Meki/P3/Doku/Konzeptdoku/P3_161117_KonzeptdokumentationTeamCargo_Gruppe2}/app/index.html`)

