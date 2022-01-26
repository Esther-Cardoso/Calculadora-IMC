const botaoCalcular = document.querySelector('#calcular');
const botaoLimpar = document.querySelector('#limpar');


function imc() {
  const altura = document.querySelector('#altura').value;
  const peso = document.querySelector('#peso').value;
  const resultado = document.querySelector('#resultado');

  if(altura !== '' && peso !== '') {
    const soma = (peso / (altura * altura)).toFixed(2);

    let classificacao = '';

    if (soma < 18.5) {
      classificacao = 'abaixo do peso (Magreza)';
    } else if (soma < 25) {
      classificacao = 'com o peso ideal (Normal)';
    } else if (soma < 30) {
      classificacao = 'acima do peso (Sobrepeso grau I)';
    } else if (soma < 40) {
      classificacao = 'com obesidade (obesidade grau II)';
    } else {
      classificacao = 'com obesidade grave (obesidade grau III)';
    }

    resultado.textContent = `IMC: ${soma}. Você está ${classificacao}`;

  } else {
    resultado.textContent = 'Preencha todos os campos!!!';
  }
}

function limpar() {
  altura.value = '';
  peso.value = '';
  imc(); 
  resultado.textContent = 'Seu IMC:';
}

botaoCalcular.addEventListener('click', imc);
botaoLimpar.addEventListener('click', limpar);