$(document).ready(function(){
            
    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(__) _____-___'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    })

    $('#cep').mask('000000-00', {
        placeholder: '_____-___'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            tel: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
        },
        
        messages: {
            nome: 'Campo obrigatório',
            email: 'Campo obrigatório',
            tel: 'Campo obrigatório',
            cpf: 'Campo obrigatório',
            adress: 'Campo obrigatório',
            cep: 'Campo obrigatório',
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    })
})