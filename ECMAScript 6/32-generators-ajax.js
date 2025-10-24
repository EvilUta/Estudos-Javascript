function ajax(url, label) {
    return fetch(url)
        .then(response => response.json())
        .then(data => console.log(`${label}:`, data))
        .catch(error => console.error(`Erro ao buscar ${label}:`, error));
}

function* ajaxGen() { // * para definir um generator
    console.log('Buscando post...');
    yield ajax('https://jsonplaceholder.typicode.com/posts/1', 'Post');

    console.log('Buscando usuário...');
    yield ajax('https://jsonplaceholder.typicode.com/users/1', 'Usuário');
}

const dados = ajaxGen();
dados.next(); // executa a primeira busca
dados.next(); // avança o generator para a segunda busca
