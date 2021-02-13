const form = document.querySelector(".js-greetingForm"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "daughterName",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function setGreetingText(){
    const date = new Date();
    const hours = date.getHours();
    if(hours >= 7 && hours < 12){
        return "Good morning";
    }else if(hours >= 12 && hours < 6){
        return "Good afternoon";
    }else{
        return "You must be exhausted";
    }
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `${setGreetingText()}, mom`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){   // user is not
        askForName();
    }else {     // user is
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();