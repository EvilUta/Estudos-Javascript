const currency = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ currency: 'euro', value: 3.50 });
    }, 2000);
});

const countries = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['ireland', 'england', 'scotland']);
    }, 600);
});

Promise
    .all([currency, countries]) // all serve para -> várias promessas (Promises) ao mesmo tempo e esperar que todas terminem. -> dentro vc passa um array da const resolvida
    .then((resultados) => {
        console.log(resultados);
        // resultados[0] -> { currency: 'euro', value: 3.50 }
        // resultados[1] -> ['ireland', 'england', 'scotland']
    })
    .catch((erro) => {
        console.error('Erro em uma das promessas:', erro);
    });

// depois que e passado o .all se passa o . then com a arrow functions dos resultados 
