
const porta = 3031
const express= require('express')
const app = express()


app.use((req,res,next)=>{
  res.send({nome:'Notebook',preco:123.45})
})
app.post('/produtos',(req,res,next)=>{
  res.send({nome:'Notebook',preco:123.45})
})
app.listen(porta,()=>{
  console.log(`Servidor está funcionando na porta ${porta}.`)
})