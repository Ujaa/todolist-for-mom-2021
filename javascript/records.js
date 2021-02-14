const icons = document.querySelectorAll(".record-btns i"),
    button = document.querySelector(".record-btns__btn");

const BTN1_CN = "record-btns__btn--move-1",
    BTN2_CN = "record-btns__btn--move-2",
    BTN3_CN = "record-btns__btn--move-3",
    BTN4_CN = "record-btns__btn--move-4",
    ICONSELECTED_CN = "record-btns__icon--selected";

function playRecordsAnimation() {

}

function loadRecords(){

}

function handleIconClassName(index){
    icons[index].classList.add(ICONSELECTED_CN);
    icons[1].classList.remove(ICONSELECTED_CN);
    icons[2].classList.remove(ICONSELECTED_CN);
    icons[3].classList.remove(ICONSELECTED_CN);
}

function handleBtnMove1(event){
    button.classList.add(BTN1_CN);
    button.classList.remove(BTN2_CN);
    button.classList.remove(BTN3_CN);
    button.classList.remove(BTN4_CN);

    icons[0].classList.add(ICONSELECTED_CN);
    icons[1].classList.remove(ICONSELECTED_CN);
    icons[2].classList.remove(ICONSELECTED_CN);
    icons[3].classList.remove(ICONSELECTED_CN);
}

function handleBtnMove2(event){
    button.classList.remove(BTN1_CN);
    button.classList.add(BTN2_CN);
    button.classList.remove(BTN3_CN);
    button.classList.remove(BTN4_CN);

    icons[0].classList.remove(ICONSELECTED_CN);
    icons[1].classList.add(ICONSELECTED_CN);
    icons[2].classList.remove(ICONSELECTED_CN);
    icons[3].classList.remove(ICONSELECTED_CN);
}

function handleBtnMove3(event){
    button.classList.remove(BTN1_CN);
    button.classList.remove(BTN2_CN);
    button.classList.add(BTN3_CN);
    button.classList.remove(BTN4_CN);

    icons[0].classList.remove(ICONSELECTED_CN);
    icons[1].classList.remove(ICONSELECTED_CN);
    icons[2].classList.add(ICONSELECTED_CN);
    icons[3].classList.remove(ICONSELECTED_CN);
}

function handleBtnMove4(event){
    button.classList.remove(BTN1_CN);
    button.classList.remove(BTN2_CN);
    button.classList.remove(BTN3_CN);
    button.classList.add(BTN4_CN);

    icons[0].classList.remove(ICONSELECTED_CN);
    icons[1].classList.remove(ICONSELECTED_CN);
    icons[2].classList.remove(ICONSELECTED_CN);
    icons[3].classList.add(ICONSELECTED_CN);
}

function init(){
    console.log(icons);
    icons[0].addEventListener("click",handleBtnMove1);
    icons[1].addEventListener("click",handleBtnMove2);
    icons[2].addEventListener("click",handleBtnMove3);
    icons[3].addEventListener("click",handleBtnMove4);
}

init();