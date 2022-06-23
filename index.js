const express = require('express');
const dbConnection = require('./database/config');
require('dotenv').config();

const cors = require('cors');

const app = express()

// Base de datos
dbConnection()

// CORS
app.use(cors())

//Directorio Publico
app.use(express.static('public'))


// Lectura y parseo del body
app.use(express.json())

// Rutas
app.use('/api/auth', require('./routes/auth'))
app.use('/api/noticias', require('./routes/noticias'))
app.use('/api/categoria', require('./routes/categoria'))
app.use('/api/buscar', require('./routes/buscar'))
app.use('/api/vistas', require('./routes/vistas'))
app.use('/api/etiqueta', require('./routes/etiqueta'))
app.use('/api/visitcounter', require('./routes/visitcounter'))

app.use('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})



app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
})