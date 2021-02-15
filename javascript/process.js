function updateProgress(){
    const percent = Math.floor((toDosCountArr[0].done)/(toDosCountArr[0].total)*100);
    progress_text.innerText = `${percent}%`;
}

function init(){
    updateProgress();
}

init();

