

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
        }

            cy.get('input[ name="name"]').type(entregador.nome)
            cy.get('input[ name="cpf"]').type(entregador.cpf)
            cy.get('input[ name="email"]').type(entregador.email)
            cy.get('input[ name="whatsapp"]').type(entregador.whatsapp)
        })

    })
