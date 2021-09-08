let zip = new JSZip(); //ZIP COMPRESSOR
const htmlTxt = document.getElementById('htmlTxt');
const cssTxt = document.getElementById('cssTxt');
const jsTxt = document.getElementById('jsTxt');

const outputTxt = document.getElementById('outputTxt');
//-----------------
let cssTemplate = '<style type="text/css"></style>';
let jsTemplate = '<script type = "text/javascript"></script>';
let bdTemplate = `<body><script type = "text/javascript"></script></body>`;
let htmlTemplate = 
`<!doctype html>
<html lang="en"> 
    <head> 
        <meta charset="utf-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <style type="text/css"></style>
    </head>
    <body><script type = "text/javascript"></script></body>
</html>`;

htmlTxt.addEventListener('input', () => {
    htmlTemplate = htmlTemplate.replace(bdTemplate, `<body>${htmlTxt.value} ${jsTemplate}</body>`);
    bdTemplate = `<body>${htmlTxt.value} ${jsTemplate}</body>`;
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
    htmlTemplate = htmlTemplate.replace(jsTemplate,`<script type = "text/javascript">${jsTxt.value}</script>`);
    jsTemplate = `<script type = "text/javascript">${jsTxt.value}</script>`;
    outputTxt.innerHTML = htmlTemplate;
    console.log(htmlTemplate);
   // document.getElementById
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
