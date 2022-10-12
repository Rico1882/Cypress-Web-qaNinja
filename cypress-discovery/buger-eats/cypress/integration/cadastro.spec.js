import SignupPage from '../pages/SignupPage'

describe('cadastro', ()=>{

    before(function() {
        cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os cados de testes')
    })

    beforeEach(function(){
        cy.log('Tudo aqui é executado sempre ANTES de CADA caso de teste')
    })

    after(function() {
        cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os cados de testes')
    })

    afterEach(function(){
        cy.log('Tudo aqui é executado sempre ANTES de CADA caso de teste')
    })

    it('Usuário deve ser tornar um entregador', ()=>{
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var deliver = {
            name: 'João Ricardo',
            cpf: '00942438592',
            email: 'joaodasilva@bol.com.br',
            whatsapp:'21742854783',
            address: {
                postalcode: '24120191',
                street: 'Alameda São Boaventura',
                number: '1000',
                details: 'apto 1050',
                district: 'Fonseca',
                city_state: 'Niterói/RJ'
            },
            delivery_method:'Moto',
            cnh:'cnh-digital.jpg'
        }

        var signup = new SignupPage()

        signup.go()
        signup.fillform(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage) 

        })

        it('CPF incorreto', ()=>{
              
            var deliver = {
                name: 'João Ricardo',
                cpf: '123456789aa',
                email: 'joaodasilva@bol.com.br',
                whatsapp:'21742854783',
                address: {
                    postalcode: '24120191',
                    street: 'Alameda São Boaventura',
                    number: '1000',
                    details: 'apto 1050',
                    district: 'Fonseca',
                    city_state: 'Niterói/RJ'
                },
                delivery_method:'Moto',
                cnh:'cnh-digital.jpg'
            }
            var signup = new SignupPage()

            signup.go()
            signup.fillform(deliver)
            signup.submit()
            signup.alertMessageShoulBe('Oops! CPF inválido')

    
                
    
            })    

    })
