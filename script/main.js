const myHeading = document.querySelector('h1');
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/ball.png') {
      myImage.setAttribute ('src','image/mozi.png');
    } else {
      myImage.setAttribute ('src','image/ball.png');
    }
}