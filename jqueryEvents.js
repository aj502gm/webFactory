
window.addEventListener('load',() => {
    document.querySelector('#html-check').checked = true;
    document.querySelector('#css-check').checked = true;
    document.querySelector('#js-check').checked = true;
})

document.querySelector('#html-check').addEventListener('change', ()=>{
    if(document.querySelector('#html-check').checked == false){
        $("#htmlDiv").fadeOut();
    } else {
        $("#htmlDiv").fadeIn();
    }
});

document.querySelector('#css-check').addEventListener('change', ()=>{
    if(document.querySelector('#css-check').checked == false){
        $("#cssDiv").fadeOut();
    } else {
        $("#cssDiv").fadeIn();
    }
});

document.querySelector('#js-check').addEventListener('change', ()=>{
    if(document.querySelector('#js-check').checked == false){
        $("#jsDiv").fadeOut();
    } else {
        $("#jsDiv").fadeIn();
    }
});

// document.querySelector('#out-check').addEventListener('change', ()=>{
//     if(document.querySelector('#outDiv').checked == false){
//         $("#outDiv").fadeOut();
//     } else {
//         $("#outDiv").fadeIn();
//     }
// });
