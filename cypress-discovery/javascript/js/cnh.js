function verificarIdade() {

    var nome = document.querySelector('input[name=nome]')
    var idade = document.querySelector('input[name=idade]')

    if (idade.value.length == 0) {
        alert('Campo idade é obrigatório.')
        return
    }

    var idadeNum = parseInt(idade.value)

    if (idadeNum >= 18) {
        alert('OK, você poderá tirar sua CNH.')
    } else if (idadeNum > 4) {
        alert('Você é menor de idade, sugiro andar de bike.')
    } else {
        alert('Melhor você ir tomar leite...')
    }
}