const clockTitle = document.querySelector(".js-clock");

function formatHour(hour){
    if(hour>12){
        return hour - 12;
    }else if(hour<=12 && hour>=10){
        return hour;
    }else {
        return `0${hour}`;
    }
}

function getTime(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    console.log(year, month, day);
    clockTitle.innerText = `${year}/${month}/${day} ${
        formatHour(hours)}:${
        minutes < 10? `0${minutes}` : minutes} ${
            hours > 12? "pm" : "am"}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();