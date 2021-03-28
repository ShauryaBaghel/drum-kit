
//code for clicks
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
    makeAnimation(this.innerHTML);
  });
}
//code for keys
document.addEventListener('keydown',function  (event){
  makeSound(event.key);
  makeAnimation(event.key);
});

// animation function

function makeAnimation(key)
{
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("."+key).classList.remove("pressed");}
  ,100);
}

//ladder for different sounds
function makeSound(key)
{
  switch (key) {
    case 'w':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
      case 'a':
      var kick = new Audio('sounds/kick.mp3');
      kick.play();
      break;
      case 's':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
      case 'd':
      var tom1 = new Audio('sounds/tom1.mp3');
      tom1.play();
      break;
      case 'j':
      var tom2 = new Audio('sounds/tom2.mp3');
      tom2.play();
      break;
      case 'k':
      var tom3 = new Audio('sounds/tom3.mp3');
      tom3.play();
      break;
      case 'l':
      var tom4 = new Audio('sounds/tom4.mp3');
      tom4.play();
      break;
    default:
      console.log(key);
  }
}
