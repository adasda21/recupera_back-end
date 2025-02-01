import express from 'express';
import cors from 'cors';  
import dotenv from 'dotenv';  

import { EnrutadorCliente } from './routes/clientesRoutes.js';


import { Cliente } from './models/Cliente.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Middleware para imprimir en consola las peticiones GET
app.use((req, res, next) => {
    if (['GET', 'POST', 'PUT'].includes(req.method)) {
        console.log(`${req.method} request received:`, req.url);
    }
    next();
});


app.use('/api/clientes', EnrutadorCliente(Cliente));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
