const { response } = require('express');
const express = require('express');

const app = express();

app.use(express.json());

app.listen(3000, () =>{
    console.log("O servidor está ativo na porta 3000")
});


//CREATE
let nomes = [];// banco de dados(exemplo)
app.post("/testePOST", (req, res)=>{
    const {nome, sobrenome} = req.body;
    console.log(`Nome: ${nome} \nSobrenome: ${sobrenome}}`);
    nomes.push(nome);
    res.sendStatus(200);
});
//READ
app.get("/testeGET", (req,res)=>{
    res.send(nomes);
    console.log(nomes);
});
//UPDATE
app.put("/testePUT", (req,res) =>{

})
//DELETE
app.put("/testeDELETE", (req,res) =>{
    
})