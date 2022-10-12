import SignupFatory from '../factories/SignupFatory'
import signup from '../pages/SignupPage'

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
        signup.alertMessageShoulBe('Oops! CPF inválido')
    })

    it('Incorrect email', function () {

        var deliver = SignupFatory.deliver()

        deliver.email = 'ricoricardo.com.br'

        signup.go()
        signup.fillform(deliver)
        signup.submit()
        signup.alertMessageShoulBe('Oops! Email com formato inválido.')
    })

})


