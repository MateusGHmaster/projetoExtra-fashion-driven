let userName = '';

function askUserName () {
    while (userName === '') {
        userName = prompt("Por favor, informe-nos o seu nome de usuário.             (／・ω・)／");
    }
}


function selectShirtStyle (type, element) {
    console.log(type);
    const sModel = document.querySelector(`#s-${type}`);
    const item = sModel.querySelector('.selected');
    console.log(item!==null, element);
    if (item !== null) {
        item.classList.remove('selected'); 
        item.querySelector('.item-background-1').style.borderColor = "transparent";
    } 
    element.classList.add('selected');
    element.querySelector('.item-background-1').style.borderColor = "blue";
} 

/* function selectShirtStyleTest () {
    let shirtSelection = document.querySelector('.model-1');
    shirtSelection.addEventListener('click', function () {    
        shirtSelection.style.borderColor = "#404EED";
    });
} */


/* function postLastShirt () {
    const promise = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");
    promise.then();
} */

function getLastShirts () {
    const promise = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");
    promise.then(renderLastShirts);
}

function renderLastShirts (shirt) {
    let lastShirts = document.querySelector('.last-shirts-box');
    lastShirts.innerHTML = `
    
    <div class="last-shirts">
    
    </div>    
    
    `
}




askUserName();
getLastShirts ();