const form = document.getElementById('formCadastro');
const btnSubmit = document.getElementById('btnSubmit');

function verificarFormulario(){
    const formularioValido = form.checkValidity();
    btnSubmit.disabled= !formularioValido;

    if(formularioValido)
    {
        btnSubmit.classList.remove("btn-secondary");
        btnSubmit.classList.add("btn-primary");
    }
    else
    {
        btnSubmit.classList.remove("btn-primary");
        btnSubmit.classList.add("btn-secondary");
    }
}

// // Dispara os eventos no input de informação do formulário ou em alguma alteração
form.addEventListener("input", verificarFormulario);
form.addEventListener("change", verificarFormulario);