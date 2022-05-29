let salarios = [
    {
      "quantil": 0,
      "limiteInferior": 0
    },
    {
      "quantil": 5,
      "limiteInferior": 146
    },
    {
      "quantil": 10,
      "limiteInferior": 252
    },
    {
      "quantil": 20,
      "limiteInferior": 396
    },
    {
      "quantil": 30,
      "limiteInferior": 527
    },
    {
      "quantil": 40,
      "limiteInferior": 673
    },
    {
      "quantil": 50,
      "limiteInferior": 836
    },
    {
      "quantil": 60,
      "limiteInferior": 1035
    },
    {
      "quantil": 70,
      "limiteInferior": 1263
    },
    {
      "quantil": 80,
      "limiteInferior": 1682
    },
    {
      "quantil": 90,
      "limiteInferior": 2646
    },
    {
      "quantil": 95,
      "limiteInferior": 4082
    },
    {
      "quantil": 99,
      "limiteInferior": 9832
    }
  ]

salarios.reverse()

let entrada = document.querySelector('input')
entrada.addEventListener('input',validar)

let saida = document.querySelector('output')

function validar (){
    let valor = entrada.value
    valor = parseInt(valor)

    if (valor>0){
        calcular(valor)
    }

    else{
        limpar()
    }
}

function calcular (valor){
    for (let salario of salarios){
            if (valor>salario.limiteInferior){
                mostrar(salario.quantil)
                break
            }
    }
}

function mostrar (quantil){
    saida.textContent = quantil + '%'
}

function limpar (){
    saida.textContent = '…%'
}