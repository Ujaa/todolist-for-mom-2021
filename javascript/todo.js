const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos',
    TODOFINISGED_CN = 'to-do-finished';

let toDos = [];
let newId = 0;

function changeToDoState(event){
    const span = event.target;
    const li = span.parentNode;
    const icon = span.previousSibling;
    icon.classList.toggle("far");
    icon.classList.toggle("fas");
    span.classList.toggle(TODOFINISGED_CN);
    toDos.forEach(function(toDo){
        if(toDo.id === parseInt(li.id)) toDo.isDone = !toDo.isDone;
    });
    saveToDos();
}

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos=cleanToDos;
    console.log(toDos);
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function isToDoDone(toDo){
    console.log(toDo.isDone);
    console.log(typeof(toDo.isDone));
    if(toDo.isDone){
        return true;
    }else{
        return false;
    }
}

function paintToDo(text, done){
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
    span.addEventListener("click", changeToDoState);
    if(done){
        icon.classList.add("fas");
        span.classList.add(TODOFINISGED_CN);
    }else{
        icon.classList.add("far");
    }
    icon.classList.add("fa-check-circle");

    li.appendChild(icon);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        id: newId,
        text: text,
        isDone: false
    };

    toDos.push(toDoObj);
    saveToDos();
    newId++;
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue, false);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        console.log(parsedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text,isToDoDone(toDo));
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();