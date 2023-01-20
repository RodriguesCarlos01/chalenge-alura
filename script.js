var entradaTexto = document.querySelector(".texto-area");
var textoSaida = document.querySelector(".mensagem");
var botaoCrip = document.querySelector(".btn-encriptar");
var botaoDescrip = document.querySelector(".btn-desencriptar");
var botaoCopiar = document.querySelector(".btn-copiar");




function criptografar() {
    var texto = entradaTexto.value

   var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

    return textoSaida.innerHTML = resultCripto 

}

function descriptografar() {
    var texto = entradaTexto.value

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")

    return textoSaida.innerHTML = resultDescripto

}

function copiar(){
    navigator.clipboard.writeText(textoSaida.innerHTML).then(()=> {
        alert("Mensagem Copiada")
        entradaTexto.value = null
        botaoCopiar.innerHTML = "Copiado"
        botaoCopiar.disable = true
    })
    .catch(()=> {alert("Erro")
    })
}

botaoCrip.onclick = criptografar;
botaoDescrip.onclick = descriptografar;
botaoCopiar.onclick = copiar;