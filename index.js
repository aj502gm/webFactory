const htmlTxt = document.getElementById('htmlTxt'); //input html
const cssTxt = document.getElementById('cssTxt');
const jsTxt = document.getElementById('jsTxt');//input js
const outputTxt = document.getElementById('outputTxt').contentWindow.document;
//outputTxt.open();
//-----------------
var cssTemplate = '<style type="text/css"></style>';
var jsTemplate = '<script></script>';
var bdTemplate = `<body><script></script></body>`; //El script tag debería ir dentro del cuerpo??
//HTML TEMPLATE SERÁ EL NUEVO CONTENIDO DEL OUTPUT
let htmlTemplate = 
`<!doctype html>
<html lang="en"> 
    <head> 
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css"></style>
    </head>
    <body><script></script></body>
</html>`;

htmlTxt.addEventListener('input', (event) => { //SI FUNCIONA
    htmlTemplate = htmlTemplate.replace(bdTemplate, `<body>${htmlTxt.value}${jsTemplate}</body>`); //DENTRO DEL BODY VAN LAS TAGS Y HASTA DESPUÉS EL SCRIPT
    bdTemplate = `<body>${htmlTxt.value}${jsTemplate}</body>`;
    updateIframe(htmlTemplate);
});
cssTxt.addEventListener('input', () => { //SI FUNCIONA 
    htmlTemplate = htmlTemplate.replace(cssTemplate,`<style type="text/css">${cssTxt.value}</style>`);
    cssTemplate = `<style type="text/css">${cssTxt.value}</style>`;  
    updateIframe(htmlTemplate);
});

jsTxt.addEventListener('input', () => {
    htmlTemplate =  htmlTemplate.replace(jsTemplate,`<script>${jsTxt.value}</script>`);
    jsTemplate =  `<script>${jsTxt.value}</script>`;
    updateIframe(htmlTemplate);
});
/* DOWNLOAD FILES INTO USER'S PC*/
function getAndDownloadData(event){
    const zip = new JSZip(); //ZIP COMPRESSOR
    
    zip.file("index.html", htmlTemplate);
    zip.file("styles.css",cssTxt.value); //default file names
    zip.file("app.js", jsTxt.value); 

    zip.generateAsync({type: "blob"}).then( (files) => saveAs(files, "myProject.zip")); //.zip
}
function updateIframe(origin){ //REFRESHES IFRAME 
    const myFrame = $("#outputTxt").contents().find('body');
    myFrame.html(origin); 
}
function  displayDialog(e){
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = (e.id === 'htmlSelector')? '.html': (e.id === 'cssSelector')? '.css' : ".js";
    let outputTxt = (e.id === 'htmlSelector')? 'htmlTxt': (e.id === 'cssSelector')? 'cssTxt' : "jsTxt";
    input.click();
    input.onchange = _ => {
        let files =   Array.from(input.files);
        let reader = new FileReader();
        reader.onload = () => document.getElementById(outputTxt).value = reader.result;
        reader.readAsText(files[0]);
        alert("Archivo cargado con éxito!");
        switch(outputTxt){
            case 'htmlTxt':
                htmlTemplate =  htmlTemplate.replace(bdTemplate, `<body>${htmlTxt.value}${jsTemplate}</body>`); //DENTRO DEL BODY VAN LAS TAGS Y HASTA DESPUÉS EL SCRIPT
                bdTemplate = `<body>${htmlTxt.value}${jsTemplate}</body>`;
               
                break;
            case 'cssTxt':
                htmlTemplate = htmlTemplate.replace(cssTemplate,`<style type="text/css">${cssTxt.value}</style>`);
                cssTemplate = `<style type="text/css">${cssTxt.value}</style>`;
                
                break;
            case 'jsTxt':
                htmlTemplate =  htmlTemplate.replace(jsTemplate,`<script>${jsTxt.value}</script>`);
                jsTemplate =  `<script>${jsTxt.value}</script>`;
                //jsTxt.value = "";
                break;
        }
        updateIframe(htmlTemplate);
    };}
