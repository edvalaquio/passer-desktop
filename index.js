const {app, BrowserWindow} = require('electron');
const components = require('./public/components.json');
// const express = require('express');
// const expressApp = express()
// const path = require('path');


// expressApp.use(express.static(path.join(__dirname, '/public')));

app.on('ready', function(){

    var win = new BrowserWindow(components);
    
    win.loadURL('file://' + __dirname + '/index.html');
    win.webContents.openDevTools({'mode': 'detach'})

    win.on('closed', function(){
        win = null
    })
    
})