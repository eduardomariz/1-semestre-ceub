    function calcularNumeros(operacao) {
    let primeiroNumero = Number(document.getElementById('primeiro-numero').value)
    let segundoNumero = Number(document.getElementById('segundo-numero').value)
    let resultado 
    switch (operacao) {
        case '+':
            resultado = primeiroNumero + segundoNumero
            break;
        case '-':
            resultado = primeiroNumero - segundoNumero
            break;
        case '*':
            resultado = primeiroNumero * segundoNumero
            break;
        case '/':
            resultado = primeiroNumero / segundoNumero
            break;
        default:
            console.log('ta tirando ne mano mo trabalho fazer isso...');
            break;
    }
   document.getElementById('resultado').innerHTML = `<p> O resultado é ${resultado}</p>`
}