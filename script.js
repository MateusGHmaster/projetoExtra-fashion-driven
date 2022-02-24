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
    if (item !== undefined) {
        item.classList.remove('selected')
    } 
    element.classList.add('selected');
}


function postLastShirt () {
    const promise = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");
    promise.then();
}

function getLastShirts () {
    const promise = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");
    promise.then((response) => {
        let lastShirt = document.querySelector('.shirts');
        lastShirt.innerHTML = `
        


        `;
    });
}





askUserName();