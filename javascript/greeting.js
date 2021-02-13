const greeting = document.querySelector(".js-greetings");

function setGreetingText(){
    const date = new Date();
    const hours = date.getHours();
    if(hours >= 7 && hours < 12){
        return "Good morning";
    }else if(hours >= 12 && hours < 18){
        return "Good afternoon";
    }else{
        return "You must be exhausted";
    }
}

function loadName(){
    greeting.innerText = `${setGreetingText()}, Mom`;
}

function init(){
    loadName();
}

init();