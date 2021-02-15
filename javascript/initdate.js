const TODAY_LS = 'today';
   


function saveCurrentDate(todayDate){
    localStorage.setItem(TODAY_LS, JSON.stringify(todayDate));
}

function updateCurrentDate(year,month,date){
    const todayDate = {
        year,
        month,
        date
    };
    saveCurrentDate(todayDate);
}

function checkDate(){
    const loadSavedDate = localStorage.getItem(TODAY_LS);
    const date = new Date();
    if(loadSavedDate !== null){

        /*현재 날짜와 저장된 날짜 비교
        ->다르다 
        어레이 앞에 0,0추가 뒤에 하나삭제
        todo 초기화
        현재날짜 갱신 */
        if(loadSavedDate.year !== date.getFullYear() || loadSavedDate.month !== date.getMonth()+1 || loadSavedDate.date !== date.getDate()){
                toDosCountArr.unshift({
                    total: 0,
                    done: 0
                });
                medicinesCountArr.unshift(0);
                exerciseCountArr.unshift(0);
                waterCountArr.unshift(0);

                toDosCountArr.pop();
                medicinesCountArr.pop();
                exerciseCountArr.pop();
                waterCountArr.pop();

                toDos = [];
                saveToDos();
        }
    }
    updateCurrentDate(date.getFullYear(), date.getMonth()+1, date.getDate());
}

function init(){
    checkDate();
}

init();