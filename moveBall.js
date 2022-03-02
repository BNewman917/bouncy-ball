


//Ball------
var velocityX = 15;
var velocityY = 10;
var positionX = 0;
var positionY = 0;
const ball = document.getElementById('ball');
let width = ball.style.width;
let height = ball.style.height;
let xmouse,ymouse;

//Random Size------
function setSize(){
    (ball.style.height = Math.floor(Math.random() * 100)+20);
    (ball.style.width = ball.style.height);
  }

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

//Bounce------
function bounceX() {
    setRandomColor();
        setSize();
        velocityX = -velocityX;
}

function bounceY() {
    setRandomColor();
        setSize();
        velocityY = -velocityY;
}

function myFunction(){
    if (positionX >= (window.innerWidth-100) || positionX < 0) {
        bounceX()
        }
    if (positionY >= (window.innerHeight-100) || positionY < 0) {
        bounceY()
    }
    positionX = positionX + velocityX;
    positionY = positionY + velocityY;
    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';

}
setInterval(myFunction, 50);
//------
//Working on making new balls
/* function factory(e) {
var mouse = function (e) {
    ymouse = e.clientY;
    xmouse = e.clientX;
    makeBall(xmouse, ymouse, randomColor());
    totalFactoryOutput++; // one more made
  };
  if (window.addEventListener) {
    document.addEventListener("mousedown", mouse, false);
  }
}
*/