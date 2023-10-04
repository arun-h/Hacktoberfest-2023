const pics = [
    'url("1.jpg")',
    'url("2.jpg")',
    'url("3.jpg")',
    'url("4.jpg")',
    'url("5.jpg")',
    'url("6.jpg")',
    'url("7.jpg")',
    'url("8.jpg")',
    'url("9.jpg")',
    'url("10.jpg")',
    'url("11.jpg")',
    

];

const pic = document.querySelector('section');


function showImage(){
    var a = Math.floor(Math.random()*pics.length);
    console.log(a);
    var img = pics[a];
    console.log(img);
    pic.style.backgroundImage = img;
}

setInterval(showImage,1000);