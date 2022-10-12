var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
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

        return data
    }
}