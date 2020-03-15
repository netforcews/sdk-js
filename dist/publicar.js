#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const clc = require("cli-color");

// Carregar parametros
pathOrigem = path.resolve((process.argv.length >= 3) ? process.argv[2] : './dist');
pathDestino = path.resolve((process.argv.length >= 4) ? process.argv[3] : __dirname);

var fileSdk     = 'sdk-min.js';
var fileOrigem  = path.join(pathOrigem, fileSdk);
var fileDestino = path.join(pathDestino, fileSdk);

if (!fs.existsSync(fileOrigem)) {
    console.log(`Arquivo [${fileSdk}] nao foi encontrado`);
    return;
}

console.log(`Copiando lib [${fileSdk}] para: [${clc.green(fileDestino)}]`);
fs.copyFileSync(fileOrigem, fileDestino);

console.log(`Publicado!`);