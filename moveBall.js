


//Ball------
var velocityX = 3.5;
var velocityY = 2.5;
var positionX = 0;
var positionY = 0;
const ball = document.getElementById('ball');
let width = ball.style.width;
let height = ball.style.height;

//Random Size------
function setSize(){
    (ball.style.height = Math.floor(Math.random() * 100)+20);
    (ball.style.width = Math.floor(Math.random() * 100)+20);
  }

function myFunction(){
    if (positionX >= (window.innerWidth-100)) {
        setRandomColor();
        setSize();
        velocityX = -velocityX;
        }
    else if (positionX < 0) {
        setRandomColor();
        setSize();
        velocityX = -velocityX;
    }
    positionX = positionX + velocityX;
    if (positionY >= (window.innerHeight-100)) {
        setRandomColor();
        setSize();
        velocityY = -velocityY;
    }
    else if (positionY < 0) {
        setRandomColor();
        setSize();
        velocityY = -velocityY;
    }
    positionY = positionY + velocityY;
    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';

}
setInterval(myFunction, 3);
//------
//Random Color------
function getRandomColor() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
}
return color;
}
function setRandomColor() {
(ball.style.background = getRandomColor());
}

//