const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({message:'Hello Cypress Discovery'})
})

app.get('/avengers', function (req, res){
    var avengers = ['Tony Stark', 'Clint Barton', 'Natasha Romanoff', 'Steve Rogers', 'Bruce Banner', 'Scot Lang']
    return res.json({data: avengers})
})

app.get('/cnh', function (req, res){
    const idade = req.query.idade
    if (!idade) {
        return res.json({message:'Campo idade é obrigatório.'})
        
    }

    var idadeNum = parseInt(idade)

    if (idadeNum >= 18) {
        return res.json({message:'OK, você poderá tirar sua CNH.'})
    } else if (idadeNum > 4) {
        return res.json({message:'Você é menor de idade, sugiro andar de bike.'})
    } else {
        return res.json({message:'Melhor você ir tomar leite...'})
    }

   })

app.listen(3000)