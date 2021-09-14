let zip = new JSZip(); //ZIP COMPRESSOR
const htmlTxt = document.getElementById('htmlTxt'); //input html
const cssTxt = document.getElementById('cssTxt');
const jsTxt = document.getElementById('jsTxt');//input js

const outputTxt = document.getElementById('outputTxt');
//-----------------
let cssTemplate = '<style type="text/css"></style>';
let jsTemplate = '<script type = "text/javascript"></script>';
let bdTemplate = `<body>${jsTemplate}</body>`; //El script tag debería ir dentro del cuerpo??
//HTML TEMPLATE SERÁ EL NUEVO CONTENIDO DEL OUTPUT
let htmlTemplate = 
`<!doctype html>
<html lang="en"> 
    <head> 
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css"></style>
    </head>
    <body><script type = "text/javascript"></script></body>
</html>`;

htmlTxt.addEventListener('input', () => { //SI FUNCIONA
    htmlTemplate = htmlTemplate.replace(bdTemplate, `<body>${htmlTxt.value}${jsTemplate}</body>`); //DENTRO DEL BODY VAN LAS TAGS Y HASTA DESPUÉS EL SCRIPT
    bdTemplate = `<body>${htmlTxt.value} ${jsTemplate}</body>`;
    outputTxt.innerHTML = htmlTemplate;
    console.log(htmlTemplate);
});
cssTxt.addEventListener('input', () => { //SI FUNCIONA 
    htmlTemplate = htmlTemplate.replace(cssTemplate,`<style type="text/css">${cssTxt.value}</style>`);
    cssTemplate = `<style type="text/css">${cssTxt.value}</style>`;
    outputTxt.innerHTML = htmlTemplate;
    console.log(htmlTemplate);
});

/*EN ESTA PARTE ES DONDE INTENTO INYECTAR EL SCRIPT DENTRO DEL HTMLTEMPLATE DEL OUTPUT*/
jsTxt.addEventListener('input', () => {
    htmlTemplate =  htmlTemplate.replace(jsTemplate,`<script type = "text/javascript">${jsTxt.value}</script>`);
    jsTemplate =  `<script type = "text/javascript">${jsTxt.value}</script>`;
    outputTxt.innerHTML =  htmlTemplate;
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