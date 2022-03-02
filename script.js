let userName = '';
let url = null;
let isValidURL = null;
let validURL = null;
let workingButton = null;
let item = null;
let shirtIsSelected = null;
let neckIsSelected = null;
let fabricIsSelected = null;
let shirt = null;
let neck = null;
let fabric = null;

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

function checkSelected () {
    let model = document.querySelector('.models').children;
    for (let checkModel of model) {
        for (let selectedClass of checkModel.children[0].classList) {
            console.log(selectedClass);
            if (selectedClass == 'selected') {
                shirtIsSelected = true;
                shirt = checkModel.children[0].children[0].alt;
                console.log(shirt);
            }
        }
    }
    let theNeck = document.querySelector('.necks').children;
    for (let checkNeck of theNeck) {
        for (let selectedClass of checkNeck.children[0].classList) {
            if (selectedClass == 'selected') {
                neckIsSelected = true;
                neck = checkNeck.children[0].children[0].alt;
                console.log(neck);
            }
        }
    }
    let theFabric = document.querySelector('.fabrics').children;
    for (let checkFabric of theFabric) {
        for (let selectedClass of checkFabric.children[0].classList) {
            if (selectedClass == 'selected') {
                fabricIsSelected = true;
                fabric = checkFabric.children[0].children[0].alt;
                console.log(fabric);
            }
        }
    }
}

function checkURL () {
    url = document.querySelector('.image-url').value;
    console.log(url);
    if ((url !== null) &&  (url.startsWith("https://") || url.startsWith("http://"))) {
        isValidURL = true;    
    } else {
        isValidURL = false;
    }
    checkSelected();
}

function confirmOrder () {
    let button = document.querySelector('.confirm-button');
    console.log(isValidURL);
    if (isValidURL === true) {
        button.classList.remove('deactivated');
        button.classList.add('activated');
        validURL = url;
        postLastShirts();
        alert("Encomenda realizada. Obrigado pela preferência. Volte sempre!  (づ ￣ ³￣)づ");
        window.location.reload();
    } else {
        button.classList.add('deactivated');
    }
}

function checkForPost () {
    if ((shirtIsSelected === 'true') && (neckIsSelected === 'true') && (fabricIsSelected === 'true')) {
        confirmOrder();
    }
}

function postLastShirts () {
    const promise = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts", 
    {model: shirt, neck: neck, material: fabric, image: validURL, owner: userName, author: userName});
    promise.then();
}   

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
checkForPost ();