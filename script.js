document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario() {
    if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("mensagem").value != "") {
        alert("Mensagem enviada com sucesso! Responderemos assim que possível ;)")
    }else{
        alert("Por favor, preencha todos os campos.")
    }
}        

