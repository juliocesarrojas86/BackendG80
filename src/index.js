const express = require('express');
const ConectarBD = require('../config/db');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// enlazar conexion con la base de datos
ConectarBD();
app.use(cors());

//habiltamos  express.json
app.use(express.json({extended:true}));

//rutas de mi aplicacion
app.use('/api/clientes', require('../routes/cliente'));
app.use('/api/proveedores', require('../routes/proveedor'));
app.use('/api/auth', require('../routes/auth'));
app.use('/api/usuarios', require('../routes/usuarios'));



app.get('/', (req, res) => {
  res.send("Bienvenidos estamos desde el navegador"); 
})

app.listen(port, () => console.log('estamos conectado el servidor con el puerto', port));