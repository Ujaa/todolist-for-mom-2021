const progress_bar = document.querySelector(".progress__mid"),
    progress_text = document.querySelector(".js-progressText");
    
function updateProgress(){
    const percent = Math.floor((toDosCountArr[i].done)/(toDosCountArr[i].total)*100);
    progress_text.innerText = `${percent}%`;
}

function init(){
    updateProgress();
}

init();