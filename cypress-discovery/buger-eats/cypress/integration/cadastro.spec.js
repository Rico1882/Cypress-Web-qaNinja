

describe('cadastro', ()=>{
    it('Usuário deve ser tornar um entregador', ()=>{
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'João Ricardo',
            cpf: '012458247521',
            email: 'joaodasilva@bol.com.br',
            whatsapp:'21742854783',
            endereco: {
                cep: '24120191',
                rua: 'Alameda São Boaventura',
                numero: '1000',
                complemento: 'apto 1050',
                bairro: 'Fonseca',
                cidade_uf: 'Niterói/RJ'
            },
            metodo_entrega:'Moto'
        }

            cy.get('input[ name="name"]').type(entregador.nome)
            cy.get('input[ name="cpf"]').type(entregador.cpf)
            cy.get('input[ name="email"]').type(entregador.email)
            cy.get('input[ name="whatsapp"]').type(entregador.whatsapp)

            cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
            cy.get('input[type=button][value="Buscar CEP"]').click()
            cy.get('input[name="address-number"]').type(entregador.endereco.numero)
            cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

            cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
            cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
            cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)

            cy.contains('.delivery-method li', entregador.metodo_entrega).click()

        })

    })
