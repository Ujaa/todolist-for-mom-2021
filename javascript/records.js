const icons = document.querySelectorAll(".record-btns i"),
    button = document.querySelector(".record-btns__btn"),
    recordBars = document.querySelectorAll(".records__bar"),
    recordBarsPainted = document.querySelectorAll(".records__bar-painted"),
    recordDate = document.querySelectorAll(".records__date");

    const BTN1_CN = "record-btns__btn--move-1",
    BTN2_CN = "record-btns__btn--move-2",
    BTN3_CN = "record-btns__btn--move-3",
    BTN4_CN = "record-btns__btn--move-4",
    ICONSELECTED_CN = "record-btns__icon--selected";

/*
    투두를 생성날짜 기준으로 !
    today 기록 -> 새로고침하면 체크
    오늘이 지나면 todo 초기화

    기록은 오늘부터로 시작
    해당 날짜로 생성된 아이템들 중 끝낸 것 / 총 개수
    개수 기록만! [끝낸 것/총개수]
    11개만
*/

function updateRecordDateText(){
    const date = new Date();
    const oneDayMilliSec = (24*60*60*1000);
    for (let i = 0; i < recordDate.length; i++) {
        date.setTime(date.getTime()-(oneDayMilliSec));
        recordDate[i].innerText = `${date.getMonth()+1}/${date.getDate()}`;
    }
}

function updateRecords(){
    for (let i = 0; i < toDosCountArr.length; i++) {
        if(toDosCountArr[i].total !== 0){
            const height = Math.floor((toDosCountArr[i].done)/(toDosCountArr[i].total)*100);
            recordBarsPainted[i].style.height = `${height}%`;
        }else {
            recordBarsPainted[i].style.height = "0%";
        }
    }
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
    icons[0].addEventListener("click",handleBtnMove1);
    icons[1].addEventListener("click",handleBtnMove2);
    icons[2].addEventListener("click",handleBtnMove3);
    icons[3].addEventListener("click",handleBtnMove4)
    updateRecords();
    updateRecordDateText();
}

init();