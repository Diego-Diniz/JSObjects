const clientes = require("./clientes.json");

function encontrar (lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
};

const encontrado = encontrar(clientes, "nome", "Oralle");

const encontrado2 = encontrar(clientes, "telefone", "4775323087");

console.log(encontrado);
