    function calculadora(){
        let numero1= parseInt(prompt ("Introduce el 1er valor"));
        let numero2= parseInt(prompt ("Introduce el 2o valor"));
        let operador = prompt ("Indica la operación que quieres realizar (+, -, *, /)");
        let resultado;
    
        switch(operador){
            case '+':
                suma (numero1, numero2);
                break;
            case '-':
                resta (numero1, numero2);
                break;
            case '*':
                multiplicacion (numero1, numero2);
                break;
            case '/':
                division (numero1, numero2);
                break;
            default:
                resultado = "La operación no es correcta!"
    }
}

function suma(numero1, numero2){
    alert(numero1+numero2);
}

function resta(numero1, numero2){
    alert(numero1-numero2);
}

function multiplicacion(numero1, numero2){
    alert(numero1*numero2);
}

function division(numero1, numero2){
    let resultado;
    if(numero2 == 0){
        resultado = "El divisor no puede ser 0";
    }else{
        resultado = numero1/numero2;
    }
    alert(resultado)
}
