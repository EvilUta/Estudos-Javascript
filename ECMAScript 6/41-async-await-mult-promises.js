
async function getUsers() {
    const Renan = fetch('https://api.github.com/users/EvilUta').then(r => r.json());     // ao inves de usar o await 
    const Wiliam = fetch('https://api.github.com/users/willianjusten').then(r => r.json()); // para identificar como JSON
    const promises = await Promise.all([Renan, Wiliam]) // vai resolver todas as promises de dentro -> e pode se passar um array
    // ele vai jogar apenas quando os dois forem resolvidos
    console.log(promises)
}

getUsers();