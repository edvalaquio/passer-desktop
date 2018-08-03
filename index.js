const {app, BrowserWindow} = require('electron');
const express = require('express');

app.on('ready', function(){

    var components = require('./public/components.json');
    var win = new BrowserWindow(components);
    win.loadFile('index.html');
    // win.webContents.openDevTools()

    win.on('closed', function(){
        win = null
    })
})