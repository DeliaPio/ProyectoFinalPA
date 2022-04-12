const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const { finished } = require('stream');
let ventana;

function createWindow(){
    ventana = new BrowserWindow({
        width: 300,
        height: 300,
        webPreferences:{
            preload: path.join(app.getAppPath(), 'preload.js')
        }
    });
    ventana.loadFile('index.html')
    
}

let ventana2
function createWindow2(){
    ventana2 = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            preload: path.join(app.getAppPath(),'preload.js')
        }
    })
    ventana2.loadFile('segundo.html')
}

let ventana3
function createWindow3(){
    ventana3 = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            preload: path.join(app.getAppPath(),'preload.js')
        }
    })
    ventana3.loadFile('tercero.html')
}

let ventana4
function createWindow4(){
    ventana4 = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            preload: path.join(app.getAppPath(),'preload.js')
        }
    })
    ventana4.loadFile('cuarto.html')
}

let ventana5
function createWindow5(){
    ventana5 = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            preload: path.join(app.getAppPath(),'preload.js')
        }
    })
    ventana5.loadFile('quinto.html')
}

ipcMain.on('registroValido', function(event, args){
    console.log(args)
    createWindow2()
    ventana2.webContents.on("did-finish-load", function(){
        ventana.webContents.send('inicioCorrecto', 'Bienvenido')
    })
})

app.whenReady().then(createWindow)
