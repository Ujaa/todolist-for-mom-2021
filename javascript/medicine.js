const medicinesContainer = document.querySelectorAll(".health__medicine"),
moriningMedicine = medicinesContainer[0],
eveningMedicine = medicinesContainer[1];

const MEDICINE_CN = 'medicine',
    MEDICINEEAT_CN ='health__medicine--ate';

let medicines = {
    morining: false,
    evening: false
};

function saveMedicine(){
    localStorage.setItem(MEDICINE_CN, JSON.stringify(medicines));
}

function handleMedicineClick(event){
    const button = event.target;
    button.classList.toggle(MEDICINEEAT_CN);
    if(button === moriningMedicine){
        medicines.morining = !medicines.morining;
    }
    if(button === eveningMedicine){
        medicines.evening = !medicines.evening;
    }
    saveMedicine();
}

function updateMedicine(){
    if(medicines.morining){
        moriningMedicine.classList.add(MEDICINEEAT_CN);
    }
    if(medicines.evening){
        eveningMedicine.classList.add(MEDICINEEAT_CN);
    }
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
    moriningMedicine.addEventListener("click",handleMedicineClick);
    eveningMedicine.addEventListener("click",handleMedicineClick);
}

init();