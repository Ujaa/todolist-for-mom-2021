const plusBtnForExercise = document.querySelector(".health__excercise-plus"),
    plusIconExercise = plusBtnForExercise.querySelector(".fa-plus"),
    MinusBtnForExercise = document.querySelector(".health__excercise-minus"),
    minusIconExercise = MinusBtnForExercise.querySelector(".fa-minus"),
    exerciseText = document.querySelector(".health__text_exercise");

const EXERCISE_LS = "exercise",
    EXERCISECOUNT_LS = "exerciseCount";

let exercise = 0;
let exerciseCountArr = [];

function saveExercise(){
    localStorage.setItem(EXERCISE_LS, JSON.stringify(exercise));
}

function updateExercise(){
    exerciseText.innerHTML = `${exercise}/30<span>(min)</span>`;
    saveExercise();
}

function handleExercise(event){
    const icon = event.target;
    if(icon === plusIconExercise){
        if(exercise>=0 && exercise <30){
            exercise+=5;
        }
    }
    if(icon === minusIconExercise){
        if(exercise>0 && exercise <=30){
            exercise-=5;
        }
    }
    updateExercise();
    changeExerciseCount();
    updateExerciseRecords();
}

function loadExercise(){
    const localExercise = localStorage.getItem(EXERCISE_LS);
    if(localExercise !== null){
        exercise = JSON.parse(localExercise);
    }
    updateExercise();
}

function changeExerciseCount(){
    exerciseCountArr[0]=exercise;
    saveExerciseCount();
}


function saveExerciseCount(){
    localStorage.setItem(EXERCISECOUNT_LS, JSON.stringify(exerciseCountArr));
}

function loadExerciseCount(){
    const loadedExerCountArr = localStorage.getItem(EXERCISECOUNT_LS);
    if(loadedExerCountArr !== null){
        exerciseCountArr = JSON.parse(loadedExerCountArr);
    }else{
        for(i=1; i<=13; i++){
            exerciseCountArr.push(0);
          }
          saveExerciseCount();
    }
}

function init(){
    loadExercise();
    loadExerciseCount();
    plusIconExercise.addEventListener("click",handleExercise);
    minusIconExercise.addEventListener("click",handleExercise);
}

init();