const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//Crear servidor
const app=express();

//Conectar a DB
conectarDB();

app.use(cors());

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

//Definir ruta principal
// app.get('/', (req,res)=>{
//     res.send('Hola mundo');
// })

app.listen(4000, ()=>{
    console.log('el servidor esta corriendo');
})