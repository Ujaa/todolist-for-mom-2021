const medicinesContainer = document.querySelectorAll(".health__medicine"),
moriningMedicine = medicinesContainer[0],
moriningMedicineIcon = moriningMedicine.querySelector("i"),
eveningMedicine = medicinesContainer[1],
eveningMedicineIcon = eveningMedicine.querySelector("i"),
medicineText = document.querySelector(".health__text_medicine");

const MEDICINE_CN = 'medicine',
    MEDICINEEAT_CN ='health__medicine--ate';

let medicines = {
    morining: false,
    evening: false
};

function saveMedicine(){
    localStorage.setItem(MEDICINE_CN, JSON.stringify(medicines));
}

function updateMedicineText(){
    if(medicines.morining && medicines.evening){
        medicineText.innerText = "2/2";
    }else if(medicines.morining || medicines.evening){
        medicineText.innerText = "1/2";
    }else{
        medicineText.innerText = "0/2";
    }
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
    moriningMedicine.addEventListener("click",handleMedicineClickForBtn);
    eveningMedicine.addEventListener("click",handleMedicineClickForBtn);
    moriningMedicineIcon.addEventListener("click",handleMedicineClickForIcon);
    eveningMedicineIcon.addEventListener("click",handleMedicineClickForIcon);
}

init();