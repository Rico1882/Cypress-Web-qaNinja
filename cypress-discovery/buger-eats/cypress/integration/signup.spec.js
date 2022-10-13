import SignupFatory from '../factories/SignupFatory'
import signup from '../pages/SignupPage'
import signupPage from '../pages/SignupPage'

describe('Signup', () => {

    //beforeEach(function () {
    //  cy.fixture('deliver').then(function (d) {
    //    this.deliver = d
    // })
    // })

    it('User shold be deliver', function () {

        var deliver = SignupFatory.deliver()

        signup.go()
        signup.fillform(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })

    it('Incorrect document', function () {

        var deliver = SignupFatory.deliver()

        deliver.cpf = '000000141aa'

        signup.go()
        signup.fillform(deliver)
        signup.submit()
        signup.alertMessageShoulBe('Oops! CPF inválidu')
    })

    it('Incorrect email', function () {

        var deliver = SignupFatory.deliver()

        deliver.email = 'ricoricardo.com.br'

        signup.go()
        signup.fillform(deliver)
        signup.submit()
        signup.alertMessageShoulBe('Oops! Email com formato inválido.')
    })

    context('Require fields', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function () {
            signupPage.go()
            signupPage.submit()

        })

        messages.forEach(function (msg) {
            it(`${msg.field} is required`, function () {
                signupPage.alertMessageShoulBe(msg.output)
            })

        })

    })

   })


