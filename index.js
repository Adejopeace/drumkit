
/**function clickHandler (){
    //var audio = new Audio("./sounds/tom-1.mp3");
   // audio.play();
   
    var buttonInnerHTML= this.innerHTML;
    switch (buttonInnerHTML) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
   crash.play();
            break;
            
   case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
   kick.play();
   case "s":
            var snare = new Audio("./sounds/snare.mp3");
   snare.play();
   case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
   tom1.play();
   case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
   tom2.play();
   case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
   tom3.play();
   case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
   tom4.play();
    
        default: console.log(buttonInnerHTML);
            break;
    }
   
    
    
}

/*document.querySelectorAll("button")[0].addEventListener("click",clickHandler);
document.querySelectorAll("button")[1].addEventListener("click",clickHandler);
document.querySelectorAll("button")[2].addEventListener("click",clickHandler);
document.querySelectorAll("button")[3].addEventListener("click",clickHandler);
document.querySelectorAll("button")[4].addEventListener("click",clickHandler);
document.querySelectorAll("button")[5].addEventListener("click",clickHandler);
document.querySelectorAll("button")[6].addEventListener("click",clickHandler);*/
/**for (let i = 0; i <document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",
    clickHandler);
    
}
document.addEventListener("keypress",function (event) {
   
    var key = event.key;
    switch ( key) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            
            break;
            case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
   kick.play();
   case "s":
            var snare = new Audio("./sounds/snare.mp3");
   snare.play();
   case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
   tom1.play();
   case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
   tom2.play();
   case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
   tom3.play();
   case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
   tom4.play();
    
    
        default:console.log(key)
            break;
    }
})**/
for (let i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
      var  buttonInnerHTML= this.innerHTML;
      clickHandler(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    })
    
}
document.addEventListener("keypress", function (event) {
    clickHandler(event.key);
    buttonAnimation(event.key);
})

function clickHandler(key) {
    switch (key) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
   crash.play();
            break;
            
   case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
   kick.play();
            break;
   case "s":
            var snare = new Audio("./sounds/snare.mp3");
   snare.play();
        break;
   case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
   tom1.play();
        break;
   case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
   tom2.play();
        break;
   case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
   tom3.play();
        break;
   case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
   tom4.play();
        break;
        default: console.log(buttonInnerHTML);
            break;
    }
   
    
    

}
function buttonAnimation(currentKey) {
    var activeButton= "."+currentKey;
    document.querySelector(activeButton).classList.add("pressed");
    setTimeout(function () {
        document.querySelector(activeButton).classList.remove("pressed");
    }, 100);
}
