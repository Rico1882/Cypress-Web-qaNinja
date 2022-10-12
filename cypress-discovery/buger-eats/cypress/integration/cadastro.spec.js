import signup from '../pages/SignupPage'

describe('cadastro', () => {

    it('Usuário deve ser tornar um entregador', () => {

        var deliver = {
            name: 'João Ricardo',
            cpf: '00942438592',
            email: 'joaodasilva@bol.com.br',
            whatsapp: '21742854783',
            address: {
                postalcode: '24120191',
                street: 'Alameda São Boaventura',
                number: '1000',
                details: 'apto 1050',
                district: 'Fonseca',
                city_state: 'Niterói/RJ'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }



        signup.go()
        signup.fillform(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it('CPF incorreto', () => {

        var deliver = {
            name: 'João Ricardo',
            cpf: '123456789aa',
            email: 'joaodasilva@bol.com.br',
            whatsapp: '21742854783',
            address: {
                postalcode: '24120191',
                street: 'Alameda São Boaventura',
                number: '1000',
                details: 'apto 1050',
                district: 'Fonseca',
                city_state: 'Niterói/RJ'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        signup.go()
        signup.fillform(deliver)
        signup.submit()
        signup.alertMessageShoulBe('Oops! CPF inválido')


    })

})
