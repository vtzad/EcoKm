    const form = document.getElementById("form");
    const campos = document.querySelectorAll('.conteudo input');
    const spans = document.querySelectorAll('.span-required');
    // const cep = document.querySelector('#cep')
    // const bairro = document.querySelector('#bairro')
    // const cidade = document.querySelector('#cidade')

    const senhaRegex = /^[a-zA-Z0-9]{8,}$/;
    const loginRegex = /^[a-zA-Z]{6}$/;
    const nomeRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{15,}$/;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const cpfRegex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
    const celular1Regex = /^\+55 \(\d{2}\)\d{5}-\d{4}$/;
    const celular2Regex = /^\+55 \(\d{2}\)\d{5}-\d{4}$/;
    const dataRegex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/;
    const nomeMaeRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{15,}$/;

    const cepRegex = /^[0-9]{5}-[0-9]{3}/;

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário
        validador(); // Função para validar os campos antes de enviar
    });

    function validador() {
        const isNameValid = nameValidate();
        const isEmailValid = emailValidate();
        const isCpfValid = cpfValidate();
        const isCelular1Valid = celular1Validate();
        const isCelular2Valid = celular2Validate();
        const isDateValid = dateValidate();
        const isNomeMaeValid = nomeMaeValidate();
        const isCepValid = cepValidate();
        const isEnderecoValid = enderecoValidate();
        const isBairroValid = bairroValidate();
        const isCidadeValid = cidadeValidate();
        const isLoginValid = loginValidate();
        const isMainPasswordValid = mainPasswordValidate();
        const isComparePasswordValid = comparePassword();
        const isSexoValid = sexoValidate();

        if (isNameValid && isEmailValid && isCpfValid && isCelular1Valid && isCelular2Valid && isDateValid && isNomeMaeValid
            && isCepValid && isEnderecoValid && isBairroValid && isCidadeValid && isLoginValid && isMainPasswordValid && 
            isComparePasswordValid && isSexoValid) {
            // form.submit(); // Envio do formulário se todos os campos forem válidos
            return true;
        } else {
            // alert('Por favor, preencha todos os campos corretamente.');
            return false;
        }
    }

    function setError(index) {
        campos[index].style.border = '2px solid #e63636';
        spans[index].style.display = 'block';
    }

    function removeError(index) {
        campos[index].style.border = '';
        spans[index].style.display = 'none';
    }

    function nameValidate() {
        if (!nomeRegex.test(campos[0].value.trim())) {
            setError(0);
            return false;
        } else {
            removeError(0);
            return true;
        }
    }

    function emailValidate() {
        if (!emailRegex.test(campos[1].value.trim())) {
            setError(1);
            return false;
        } else {
            removeError(1);
            return true;
        }
    }

    function cpfValidate() {
        if (!cpfRegex.test(campos[2].value.trim())) {
            setError(2);
            return false;
        } else {
            removeError(2);
            return true;
        }
    }

    function celular1Validate() {
        if (!celular1Regex.test(campos[3].value.trim())) {
            setError(3);
            return false;
        } else {
            removeError(3);
            return true;
        }
    }
    function celular2Validate() {
        if (!celular2Regex.test(campos[4].value.trim())) {
            setError(4);
            return false;
        } else {
            removeError(4);
            return true;
        }
    }

    function dateValidate() {
        if (!dataRegex.test(campos[5].value.trim())) {
            setError(5);
            return false;
        } else {
            removeError(5);
            return true;
        }
    }
    function nomeMaeValidate(){
        if (!nomeMaeRegex.test(campos[6].value.trim())){
            setError(6);
            return false;
        } else {
            removeError(6);
            return true;
        }
    }
    function cepValidate() {

            // const onlyNumbers = /^[0-9]+$/;
        if (!cepRegex.test(campos[7].value.trim())) {
            setError(7);
            return false;
        } else {
            removeError(7);
            return true;
        }
    }
    function enderecoValidate(){
        if (campos[8].value.trim().length < 3) {
            setError(8);
            return false;
        } else {
            removeError(8);
            return true;
        }
    }
    function bairroValidate(){
        if (campos[9].value.trim().length < 3) {
            setError(9);
            return false;
        } else {
            removeError(9);
            return true;
        }
    }
    function cidadeValidate(){
        if (campos[10].value.trim().length < 2) {
            setError(10);
            return false;
        } else {
            removeError(10);
            return true;
        }
    }
    
    function loginValidate() {
        if (loginRegex.test(campos[11].value.trim())) {
            removeError(11);
            return true;
        } else {
            setError(11);
            return false;
        }
    }
    function mainPasswordValidate() {
        if (!senhaRegex.test(campos[12].value.trim())) {
            setError(12);
            return false;
        } else {
            removeError(12);
            return true;
        }
    }

    
    function comparePassword() {
        const firstPassword = campos[12].value
        const secondPassword = campos[13].value
        console.log({
            firstPassword,
            secondPassword,
            equal: firstPassword === secondPassword
        })
        if (firstPassword == secondPassword && campos[13].value.length >= 8) {
            removeError(13);
            return true;
        }
        else {
            setError(13)
            return false;
        }
    }
    
    function sexoValidate() {
        const radios = document.querySelectorAll('input[name="sexo"]');
        let checked = false;
        for (const radio of radios) {
            if (radio.checked) {
                checked = true;
                break;
            }
        }
        if (!checked) {
            setError(14);
            return false;
        } else {
            removeError(14);
            return true;
        }
    }
// VALIDAÇÃO /\ //
// MASCARAS \/ //

cpf.addEventListener('keypress', () => {
    let cpflength = cpf.value.length

    if (cpflength === 3 || cpflength === 7) {
        cpf.value += '.'
    }else if (cpflength === 11) {
        cpf.value += '-'
    }
})

celular1.addEventListener('keypress', () => {
    let celular1length = celular1.value.length
    if (celular1length === 0){
        celular1.value += '+'
    }
    else if (celular1length === 3){
        celular1.value += ' ('
    }
    else if (celular1length === 7) {
        celular1.value += ')'
    }
    else if (celular1length === 13) {
        celular1.value += '-'
    }
})

celular2.addEventListener('keypress', () => {
    let celular2length = celular2.value.length
    if (celular2length === 0){
        celular2.value += '+'
    }
    else if (celular2length === 3){
        celular2.value += ' ('
    }
    else if (celular2length === 7) {
        celular2.value += ')'
    }
    else if (celular2length === 13) {
        celular2.value += '-'
    }
})


data_de_nascimento.addEventListener('keypress', () => {
    let data_de_nascimentolength = data_de_nascimento.value.length

    if (data_de_nascimentolength === 2 || data_de_nascimentolength === 5)
        data_de_nascimento.value += '/'
})

cep.addEventListener('keypress', () => {
    let ceplength = cep.value.length

    if (ceplength === 5)
        cep.value += '-'
})
cep.addEventListener('focusout', async () => {

const response = await fetch (`https://viacep.com.br/ws/${cep.value}/json/`);

if(!response.ok) {
    throw await response.json();
}
 const responseCep = await response.json();
 endereco.value = responseCep.logradouro;
 bairro.value = responseCep.bairro;
 cidade.value = responseCep.localidade;
})