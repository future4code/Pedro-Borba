function Enviar() {

    var email = document.getElementById("emailFuncao");

    if (email.value != "") {
        alert('Obrigado sr(a) ' + email.value + ' os seus dados foram encaminhados com sucesso');
    } else (email != "") {
        alert('Email' + email + 'Invalido')
    }

}