function start (){

    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var imcClass = document.querySelector('#imc-class');

    inputWeight.addEventListener('input', handleButtonClick);
    inputHeight.addEventListener('input', handleButtonClick);
    imcClass.addEventListener('input', handleButtonClick);

    handleButtonClick();
}

function calculateImc(weight, height){
    return weight / (height*height)
}

function handleButtonClick(){
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var imcResult = document.querySelector('#imc-result');
    var imcClass = document.querySelector('#imc-class');



    var weight = Number(inputWeight.value);
    var height = Number(inputHeight.value);

    var imc = calculateImc(weight, height);
    var formattedImc = imc.toFixed(2).replace('.',',')

    imcResult.textContent = formattedImc;
        
        if (imc<=16.9){
        imcClass.textContent ='Muito abaixo do peso';
        } else if (imc<=18.4){
            imcClass.textContent = 'Abaixo do peso';
        } else if (imc<=24.9){
            imcClass.textContent = 'Peso normal';
        } else if (imc<=29.9){
            imcClass.textContent = 'Acima do peso';
        } else if (imc<=34.9){
            imcClass.textContent = 'Obesidade grau I';
        } else if (imc<=40){
            imcClass.textContent = 'Obesidade grau II';
        } else {
            imcClass.textContent = 'Obesidade grau III';
        };
    
}


start();