function addHeart(){
    const heartCount = document.getElementById("heart-count");
    heartCount.innerText = parseInt(heartCount.innerText) + 1;
}

function getAllHearts(tag){
    return document.querySelectorAll(`${tag} .heart`);
}

function getAllCalls(tag){
    return document.querySelectorAll(`${tag} .call`);
}

function getService(event) {
    const serviceCard = event.target.closest('.card');
    const serviceName = serviceCard.querySelector('.service').innerText;
    return serviceName;
}

function getServiceNumber(event) {
    const serviceCard = event.target.closest('.card');
    const serviceNumber = serviceCard.querySelector('.number').innerText;
    return serviceNumber;
}

function getCoinCount(){
    const coinCount = document.getElementById("coin-count");
    return parseInt(coinCount.innerText);
}

function setCoinCount(newCount){
    const coinCount = document.getElementById("coin-count");
    coinCount.innerText = newCount;
}

function addCallHistory(serviceName, serviceNumber, time){
    const historyCard = document.createElement('div');
    historyCard.classList.add('history-card', 'flex', 'bg-neutral-100', 'p-5', 'justify-between', 'rounded-lg', 'mb-5');
    historyCard.innerHTML = `
        <div class="left">
            <h1 class="inter-semibold">${serviceName}</h1>
            <p class="hind-madurai-regular">${serviceNumber}</p>
        </div>
        <div class="right">
            <p class="hind-madurai-regular">${time}</p>
        </div>
    `;
    document.querySelector('.call-history').appendChild(historyCard);
}

const mainHearts = getAllHearts('main');

for(const heart of mainHearts){
    heart.addEventListener('click', function(){
        addHeart();
    });
}

const mainCalls = getAllCalls('main');

for(const call of mainCalls){
    call.addEventListener('click', function(event){
        if(getCoinCount() >= 2){
            const serviceName = getService(event);
            const serviceNumber = getServiceNumber(event);
            const date = new Date().toLocaleString();
            alert(`Calling ${serviceName} at ${serviceNumber} at ${date}`);
            setCoinCount(getCoinCount() - 2);
            addCallHistory(serviceName, serviceNumber, date);
        }else{
            alert("Not enough coins to make a call.");
        }
    });
}