import { saveAS } from 'file-saver';

const htmlTxt = document.getElementById('htmlTxt');
const cssTxt = document.getElementById('cssTxt');
const jsTxt = document.getElementById('jsTxt');

const outputTxt = document.getElementById('outputTxt');
//-----------------
let cssTemplate = '<style type="text/css"></style>';
let jsTemplate = '<script></script>';
let bdTemplate = '<body></body>';
let htmlTemplate = `<!doctype html> 
<html lang="en"> 
    <head> 
        <meta charset="utf-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <style type="text/css"></style>
    </head>
    <body></body>
    </html>`;

htmlTxt.addEventListener('input', () => {
    htmlTemplate = htmlTemplate.replace(bdTemplate, `<body>${htmlTxt.value}</body>`);
    bdTemplate =  `<body>${htmlTxt.value}</body>`;
    outputTxt.innerHTML = htmlTemplate;
    console.log(htmlTemplate);
});
cssTxt.addEventListener('input', () => {
    htmlTemplate = htmlTemplate.replace(cssTemplate,`<style type="text/css">${cssTxt.value}</style>`);
    cssTemplate = `<style type="text/css">${cssTxt.value}</style>`;
    outputTxt.innerHTML = htmlTemplate;
    console.log(htmlTemplate);
});
jsTxt.addEventListener('input', () => {
    htmlTemplate = htmlTemplate.replace(jsTemplate,`<script>${jsTxt.value}</script>`);
    outputTxt.innerHTML = htmlTemplate;
    console.log(htmlTemplate);
});
