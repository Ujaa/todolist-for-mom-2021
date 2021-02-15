const    TODOSCOUNT_LS = 'toDosCount',
    TODOFINISGED_CN = 'to-do-finished';

const progress_bar = document.querySelector(".progress__mid"),
    progress_text = document.querySelector(".progress__text ");

let toDos = [];
let newId = 0;
let toDosCountArr = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

function changeToDoStateWithSpan(event){
    const span = event.target;
    const li = span.parentNode;
    const icon = span.previousSibling;
    icon.classList.toggle("far");
    icon.classList.toggle("fas");
    span.classList.toggle(TODOFINISGED_CN);
    toDos.forEach(function(toDo){
        if(toDo.id === parseInt(li.id)){
            toDo.isDone = !toDo.isDone;
            changeToDosCount(toDo.isDone);
        } 
    });
    saveToDos();
    updateRecords();
    progress_text.innerText = `${
        Math.floor((toDosCountArr[0].done)/(toDosCountArr[0].total)*100) 
    }%`;
}

function changeToDoStateWithIcon(event){
    const icon = event.target;
    const li = icon.parentNode;
    const span = icon.nextSibling;
    icon.classList.toggle("far");
    icon.classList.toggle("fas");
    span.classList.toggle(TODOFINISGED_CN);
    toDos.forEach(function(toDo){
        if(toDo.id === parseInt(li.id)) {
            toDo.isDone = !toDo.isDone;
            changeToDosCount(toDo.isDone);
        } 
    });
    saveToDos();
    updateRecords();
    progress_text.innerText = `${
        Math.floor((toDosCountArr[0].done)/(toDosCountArr[0].total)*100) 
    }%`;
}

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        if(toDo.id !== parseInt(li.id)){
            return toDo.id;
        }else{
            console.log("here");
            if(toDo.isDone === true){
                changeToDosCount("doneDel");
            }else{
                changeToDosCount("doneNotDel");
            }
        }
    });
    toDos=cleanToDos;
    saveToDos();
    updateRecords();
    progress_text.innerText = `${
        Math.floor((toDosCountArr[0].done)/(toDosCountArr[0].total)*100) 
    }%`;
}

function isToDoDone(toDo){
    if(toDo.isDone){
        return true;
    }else{
        return false;
    }
}

function paintToDo(text, done, dateD){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const icon = document.createElement("i");

    li.classList.add("to-do__to-dos");
    delBtn.innerHTML='<i class="fas fa-times fa-xs"></i>';
    delBtn.classList.add("to-do__del-btn");
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    span.classList.add("to-do__text");
    span.addEventListener("click", changeToDoStateWithSpan);
    if(done){
        icon.classList.add("fas");
        span.classList.add(TODOFINISGED_CN);
    }else{
        icon.classList.add("far");
    }
    icon.classList.add("fa-check-circle");
    icon.addEventListener("click", changeToDoStateWithIcon);

    li.appendChild(icon);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        id: newId,
        text: text,
        isDone: done,
        date: {
            year: dateD[0],
            month: dateD[1],
            day: dateD[2]
        }
    };

    toDos.push(toDoObj);
    saveToDos();
    newId++;
}

function changeToDosCount(value){
    const todayCount = toDosCountArr[0];
    console.log(value);
    if(value === "add"){
        todayCount.total += 1;
    }else if(value === "doneDel"){
        todayCount.total -= 1;
        todayCount.done -= 1;
    }else if(value === "doneNotDel"){
        todayCount.total -= 1;
    }else if(value === true) {
        todayCount.done += 1;
    }else if(value === false) {
        todayCount.done -= 1;
    }else{
        console.log("bug");
    }
    saveToDosCount();
}

function handleSubmit(event){
    const today = new Date();
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue, false, [today.getFullYear(),today.getMonth()+1,today.getDate()]);
    changeToDosCount("add");
    updateRecords();
    progress_text.innerText = `${
        Math.floor((toDosCountArr[0].done)/(toDosCountArr[0].total)*100) 
    }%`;
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text,isToDoDone(toDo),toDo.date);
        });
    }
}

function saveToDosCount(){
    localStorage.setItem(TODOSCOUNT_LS, JSON.stringify(toDosCountArr));
}

function loadToDosCount(){
    const loadedToDosCountArr = localStorage.getItem(TODOSCOUNT_LS);
    if(loadedToDosCountArr !== null){
        toDosCountArr = JSON.parse(loadedToDosCountArr);
    }else{
        for(i=1; i<=13; i++){
            toDosCountArr.push({
                total: 0,
                done: 0
            });
          }
        saveToDosCount();
    }
}

function init(){
    loadToDos();
    loadToDosCount();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();