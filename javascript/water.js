const plusBtnForWater = document.querySelector(".health__water-plus"),
    plusIconWater = plusBtnForWater.querySelector(".fa-plus"),
    MinusBtnForWater = document.querySelector(".health__water-minus"),
    minusIconWater = MinusBtnForWater.querySelector(".fa-minus"),
    water = document.querySelector(".water");

const WATER_LS = "water";

let waterCup = 0;

function saveWater(){
    localStorage.setItem(WATER_LS, JSON.stringify(waterCup));
}

function updateWater(){
    water.style.height = `${Math.floor(waterCup/8*100)}%`;
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
}

function loadWater(){
    const localWater = localStorage.getItem(WATER_LS);
    if(localWater !== null){
        waterCup = JSON.parse(localWater);
    }
    updateWater();
}

function init(){
    loadWater();
    plusIconWater.addEventListener("click",handleWater);
    minusIconWater.addEventListener("click",handleWater);
}

init();