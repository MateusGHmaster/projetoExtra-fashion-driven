let userName = '';
let url = null;
let validURL = null;
let workingButton = null;
let item = null;

function askUserName () {
    while (userName === '') {
        userName = prompt("Por favor, informe-nos o seu nome de usuário.             (／・ω・)／");
    }
}


function selectShirtStyle (type, element) {
    console.log(type);
    const sModel = document.querySelector(`#s-${type}`);
    item = sModel.querySelector('.selected');
    console.log(item!==null, element);
    if (item !== null) {
        item.classList.remove('selected'); 
        item.querySelector('.item-background').style.borderColor = "transparent";
    } 
    element.classList.add('selected');
    element.querySelector('.item-background').style.borderColor = "blue";
} 

function checkURL () {
    url = document.querySelector('.image-url').value;
    console.log(url);
    if ((url !== null) &&  (url.startsWith("https://") || url.startsWith("http://"))) {
        validURL = true;    
    } else {
        validURL = false;
    }
}

function confirmOrder () {
    let button = document.querySelector('.confirm-button');
    console.log(validURL);
    if (validURL === true) {
        button.classList.remove('deactivated');
        button.classList.add('activated');
        alert("Encomenda realizada. Obrigado pela preferência. Volte sempre!  (づ ￣ ³￣)づ");
    } else {
        button.classList.add('deactivated');
    }
}

/* function postLastShirt () {
    const promise = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");
    promise.then();
} */

function getLastShirts () {
    const promise = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");
    console.log(promise);
    promise.then(renderLastShirts);
}

function renderLastShirts (data) {
    for (let i of data.data) {
        const lastShirts = document.querySelector('.api-shirts-test');
        lastShirts.innerHTML += `
        
        <div class="api-shirt">
            <img class="last-shirts-images" src="${i.image}" alt="últimas-camisas" height="180" width="180">
            <p class="owner"><span class="shirt-owner">Criador:&nbsp;</span>${i.owner}</p>
        </div>    
        
        `
    }
}




askUserName();
getLastShirts ();
confirmOrder ();