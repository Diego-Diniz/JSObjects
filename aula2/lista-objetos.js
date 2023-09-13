const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1115443112", "4444431122"],
};

cliente.enderecos = [{
    rua: "Rua Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
},


];

cliente.enderecos.push({
    rua: "Rua Joao Quinto",
    numero: 404,
    apartamento: false,
})



const apenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(apenasApartamentos);
