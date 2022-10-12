import signup from '../pages/SignupPage'

describe('cadastro', () => {

    beforeEach(function () {
        cy.fixture('deliver').then(function (d) {
            this.deliver = d
        })
    })

    it('Usuário deve ser tornar um entregador', function () {
        signup.go()
        signup.fillform(this.deliver.signup)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })

    it('CPF incorreto', function () {
        signup.go()
        signup.fillform(this.deliver.cpf_inv)
        signup.submit()
        signup.alertMessageShoulBe('Oops! CPF inválido')
    })
})
