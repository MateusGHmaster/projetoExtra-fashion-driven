let userName = '';

function askUserName () {
    while (userName === '') {
        userName = prompt("Por favor, informe-nos o seu nome de usuário.             (／・ω・)／");
    }
}

function getLastShirts () {
    const promise = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");
    promise.then((response) => {
        let lastShirt = document.querySelector('.shirts');
        lastShirt.innerHTML = `
        


        `;
    });
}

function postLastShirt () {
    const promise = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");
    promise.then();
}



askUserName();