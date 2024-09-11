// Simulação de banco de dados de carros (pode ser substituído por uma chamada de API)
const carDatabase = [
    { modelo: 'Carro A', eficiencia: 10 },
    { modelo: 'Carro B', eficiencia: 12 },
    { modelo: 'Carro C', eficiencia: 15 },
];

function carregarModelosDeCarros() {
    const selectModeloCarro = document.getElementById('modelo-carro');
    carDatabase.forEach(carro => {
        const opcao = document.createElement('option');
        opcao.value = carro.eficiencia;
        opcao.text = carro.modelo;
        selectModeloCarro.add(opcao);
    });
}

function calcularCombustivel() {
    const eficienciaModelo = document.getElementById('modelo-carro').value;
    const eficienciaCombustivel = document.getElementById('tipo-combustivel').value;
    const distancia = document.getElementById('distancia').value;
    const precoCombustivel = document.getElementById('preco-combustivel').value;

    if (distancia && precoCombustivel) {
        const eficienciaCombinada = (eficienciaModelo * eficienciaCombustivel) / 10;
        const consumo = (distancia / eficienciaCombinada).toFixed(2);
        const custo = (consumo * precoCombustivel).toFixed(2);
        
        document.getElementById('resultado').innerText = `O consumo será de ${consumo} litros e o custo será de R$ ${custo}.`;
    } else {
        document.getElementById('resultado').innerText = "Por favor, preencha todos os campos.";
    }
}

function logar() {
    const usuario = document.getElementById('usuario').value;

    if (usuario) {
        document.getElementById('usuario-logado').innerText = `Bem-vindo, ${usuario}!`;
        document.getElementById('login-form').style.display = 'none';
    } else {
        alert("Por favor, insira um nome de usuário.");
    }
}

// Carrega os modelos de carro quando a página é carregada
window.onload = carregarModelosDeCarros;
