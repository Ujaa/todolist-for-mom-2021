const plusBtnForWater = document.querySelector(".health__water-plus"),
    plusIconWater = plusBtnForWater.querySelector(".fa-plus"),
    MinusBtnForWater = document.querySelector(".health__water-minus"),
    minusIconWater = MinusBtnForWater.querySelector(".fa-minus"),
    water = document.querySelector(".water"),
    waterText = document.querySelector(".health__text_water");

const WATER_LS = "water",
    WATERCOUNT_LS = "waterCount";

let waterCup = 0;
let waterCountArr = [];

function saveWater(){
    localStorage.setItem(WATER_LS, JSON.stringify(waterCup));
}

function updateWater(){
    water.style.height = `${Math.floor(waterCup/8*100)}%`;
    waterText.innerHTML = `${waterCup}/8<span>(cup)</span>`;
    saveWater();
}

function handleWater(event){
    const icon = event.target;
    console.log(icon);
    if(icon === plusIconWater){
        if(waterCup>=0 && waterCup <8){
            waterCup+=1;
        }
    }
    if(icon === minusIconWater){
        if(waterCup>0 && waterCup <=8){
            waterCup-=1;
        }
    }
    updateWater();
    changeWaterCount();
    updateWaterRecords();
}

function loadWater(){
    const localWater = localStorage.getItem(WATER_LS);
    if(localWater !== null){
        waterCup = JSON.parse(localWater);
    }
    updateWater();
}

function changeWaterCount(){
    waterCountArr[0]=waterCup;
    saveWaterCount();
}

function saveWaterCount(){
    localStorage.setItem(WATERCOUNT_LS, JSON.stringify(waterCountArr));
}

function loadWaterCount(){
    const loadedWaterCountArr = localStorage.getItem(WATERCOUNT_LS);
    if(loadedWaterCountArr !== null){
        waterCountArr = JSON.parse(loadedWaterCountArr);
    }else{
        for(i=1; i<=13; i++){
            waterCountArr.push(0);
          }
          saveWaterCount();
    }
}
function init(){
    loadWater();
    loadWaterCount();
    plusIconWater.addEventListener("click",handleWater);
    minusIconWater.addEventListener("click",handleWater);
}

init();