

describe('cadastro', ()=>{
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

        cy.get('input[ name="name"]').type(deliver.name)
        cy.get('input[ name="cpf"]').type(deliver.cpf)
        cy.get('input[ name="email"]').type(deliver.email)
        cy.get('input[ name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        cy.contains('.delivery-method li', deliver.delivery_method).click()

        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

            cy.get('form button[type="submit"]').click()

            const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

            cy.get('.swal2-container .swal2-html-container')
                .should('have.text', expectedMessage)
                

        })

        it('CPF incorreto', ()=>{
            cy.viewport(1440, 900)
            cy.visit('https://buger-eats.vercel.app')
    
            cy.get('a[href="/deliver"]').click()
            cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    
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
    
                cy.get('input[ name="name"]').type(deliver.name)
                cy.get('input[ name="cpf"]').type(deliver.cpf)
                cy.get('input[ name="email"]').type(deliver.email)
                cy.get('input[ name="whatsapp"]').type(deliver.whatsapp)
    
                cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
                cy.get('input[type=button][value="Buscar CEP"]').click()
                cy.get('input[name="address-number"]').type(deliver.address.number)
                cy.get('input[name="address-details"]').type(deliver.address.details)
    
                cy.get('input[name="address"]').should('have.value', deliver.address.street)
                cy.get('input[name="district"]').should('have.value', deliver.address.district)
                cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)
    
                cy.contains('.delivery-method li', deliver.delivery_method).click()
    
                cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)
    
                cy.get('form button[type="submit"]').click()
    
                cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')
                    
    
            })    

    })
