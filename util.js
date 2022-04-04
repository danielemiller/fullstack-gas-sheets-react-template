const fs = require('fs');
const path = require('path');

const servDir = 'server';
const finalDir = 'appsscript';
const distDir = 'build';
const htmlFile = 'index.html';


fs.copyFileSync(path.resolve(__dirname,distDir,htmlFile), path.resolve(__dirname,finalDir,htmlFile));

const dir = fs.readdirSync(path.resolve(__dirname,servDir));

dir.forEach(f => {
    fs.copyFileSync(path.resolve(__dirname,servDir,f), path.resolve(__dirname,finalDir,f))
})