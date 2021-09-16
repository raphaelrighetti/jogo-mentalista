var numeroSecreto = parseInt(Math.random() * 31)

function chutaNumero() {
    var valor = parseInt(document.getElementById("valor").value);
    var elementoResultado = document.getElementById("resultado");
    if(valor == numeroSecreto) {
        elementoResultado.innerHTML = "Acertou, miserável!"
    }
    else if (valor > 30 || valor < 0) {
        elementoResultado.innerHTML = "É de 0 a 30, filho(a)"
    }
    else if (valor > numeroSecreto) {
        elementoResultado.innerHTML = "Errrrrrou! O número que está na minha mente é menor que " + valor
    }
    else if (valor < numeroSecreto) {
        elementoResultado.innerHTML = "Errrrrrou! O número que está na minha mente é maior que " + valor
    }
}