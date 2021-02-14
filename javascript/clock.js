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
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth()+1;
    const date = currentDate.getDate();
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours();
    clockTitle.innerText = `${year}/${month}/${date} ${
        formatHour(hours)}:${
        minutes < 10? `0${minutes}` : minutes} ${
            hours >= 12? "pm" : "am"}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();