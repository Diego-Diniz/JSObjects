const cliente = {
    nome:  "Andre",
    idade: 32,
    cpf: "3141234124",
    email: "andre@dominio.com",

}

console.log(`O nome do cliente é: ${cliente.nome} e essa pessoa tem ${cliente.idade} anos`);

console.log(`Os 3 primeiros digitos do cfp são ${cliente.cpf.substring(0,3)}`);