const medicinesContainer = document.querySelectorAll(".health__medicine"),
moriningMedicine = medicinesContainer[0],
moriningMedicineIcon = moriningMedicine.querySelector("i"),
eveningMedicine = medicinesContainer[1],
eveningMedicineIcon = eveningMedicine.querySelector("i"),
medicineText = document.querySelector(".health__text_medicine");

const MEDICINE_CN = 'medicine',
    MEDICINEEAT_CN ='health__medicine--ate',
    MEDICINECOUNT_LS = 'medicineCount';

let medicines = {
    morining: false,
    evening: false
};

let medicinesCountArr = [];

function changeMedicineCount(){
    medicinesCountArr[0]=returnSumOfMedicine();
    saveMedicineCount();
}

function saveMedicineCount(){
    localStorage.setItem(MEDICINECOUNT_LS, JSON.stringify(medicinesCountArr));
}

function loadMedicineCount(){
    const loadedMedicineCountArr = localStorage.getItem(MEDICINECOUNT_LS);
    if(loadedMedicineCountArr !== null){
        medicinesCountArr = JSON.parse(loadedMedicineCountArr);
    }else{
        for(i=1; i<=13; i++){
            medicinesCountArr.push(0);
          }
          saveMedicineCount();
    }
}

function saveMedicine(){
    localStorage.setItem(MEDICINE_CN, JSON.stringify(medicines));
}

function returnSumOfMedicine(){
    if(medicines.morining && medicines.evening){
        return 2;
    }else if(medicines.morining || medicines.evening){
        return 1;
    }else{
        return 0;
    }
}

function updateMedicineText(){
    medicineText.innerText = `${returnSumOfMedicine()}/2`;
}

function handleMedicineClickForIcon(event){
    const icon = event.target;
    const button = icon.parentNode;
    console.log(button);
    button.classList.toggle(MEDICINEEAT_CN);
    if(button === moriningMedicine){
        medicines.morining = !medicines.morining;
    }
    if(button === eveningMedicine){
        medicines.evening = !medicines.evening;
    }
    updateMedicineText();
    saveMedicine();
    changeMedicineCount();
    updateMedicineRecords();
}

function handleMedicineClickForBtn(event){
    const button = event.target;
    button.classList.toggle(MEDICINEEAT_CN);
    if(button === moriningMedicine){
        medicines.morining = !medicines.morining;
    }
    if(button === eveningMedicine){
        medicines.evening = !medicines.evening;
    }
    updateMedicineText();
    saveMedicine();
    changeMedicineCount();
}

function updateMedicine(){
    if(medicines.morining){
        moriningMedicine.classList.add(MEDICINEEAT_CN);
    }
    if(medicines.evening){
        eveningMedicine.classList.add(MEDICINEEAT_CN);
    }
    updateMedicineText();
}

function loadMedicine(){
    const loadedMedi = localStorage.getItem(MEDICINE_CN);
    if(loadedMedi !== null){
        medicines = JSON.parse(loadedMedi);
        updateMedicine();
    }else{
        saveMedicine();
    }
}

function init(){
    loadMedicine();
    loadMedicineCount();
    moriningMedicine.addEventListener("click",handleMedicineClickForBtn);
    eveningMedicine.addEventListener("click",handleMedicineClickForBtn);
    moriningMedicineIcon.addEventListener("click",handleMedicineClickForIcon);
    eveningMedicineIcon.addEventListener("click",handleMedicineClickForIcon);
}

init();