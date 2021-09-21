let zip = new JSZip(); //ZIP COMPRESSOR
const htmlTxt = document.getElementById('htmlTxt'); //input html
const cssTxt = document.getElementById('cssTxt');
const jsTxt = document.getElementById('jsTxt');//input js
const outputTxt = document.getElementById('outputTxt').contentWindow.document;
//outputTxt.open();
//-----------------
let cssTemplate = '<style type="text/css"></style>';
let jsTemplate = '<script></script>';
let bdTemplate = `<body><script></script></body>`; //El script tag debería ir dentro del cuerpo??
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
    console.log(htmlTemplate);
});
cssTxt.addEventListener('input', () => { //SI FUNCIONA 
   
    htmlTemplate = htmlTemplate.replace(cssTemplate,`<style type="text/css">${cssTxt.value}</style>`);
    cssTemplate = `<style type="text/css">${cssTxt.value}</style>`;  
    updateIframe(htmlTemplate);
    console.log(htmlTemplate);
});

/*EN ESTA PARTE ES DONDE INTENTO INYECTAR EL SCRIPT DENTRO DEL HTMLTEMPLATE DEL OUTPUT*/
jsTxt.addEventListener('input', () => {
    htmlTemplate =  htmlTemplate.replace(jsTemplate,`<script>${jsTxt.value}</script>`);
    jsTemplate =  `<script>${jsTxt.value}</script>`;
    updateIframe(htmlTemplate);
    console.log(htmlTemplate); //SI AGREGA CORRECTAMENTE EL CONTENIDO PERO NO SE EJECUTA EL CODIGO
   
});
/* DOWNLOAD FILES INTO USER'S PC*/
function getAndDownloadData(event){
    zip.file("index.html", htmlTemplate);
    zip.file("styles.css",cssTxt.value);
    zip.file("app.js", jsTxt.value); 

    zip.generateAsync({type: "blob"}).then( (files) => saveAs(files, "myProject.zip"));
    // event.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(htmlTemplate) ); //encodeURIComponent(document.getElementById("htmlTxt").value)
    // event.download = "index" + ".html";
    // setTimeout(() => {e.setAttribute('href', '#') }, 1);
}
function updateIframe(origin){
    var myFrame = $("#outputTxt").contents().find('body');
    myFrame.html(origin);
}

function displayDialog(e){
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = (e.target.id === 'htmlSelector')? '.html': (e.target.id === 'cssSelector')? '.css' : '.js';
    input.onchange = _ => {
    // you can use this method to get file and perform respective operations
        let files =   Array.from(input.files);
        console.log(files);
    };
    input.click();
  
}