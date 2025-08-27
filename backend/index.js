
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/auth'); 

const app = express();


app.use(cors());
app.use(express.json());


const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("MONGO_URI indefinido! Verifique seu .env");
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => {
    console.error("Erro ao conectar MongoDB:", err);
    process.exit(1);
  });


app.use('/api/auth', authRoutes);


app.get('/api/checkout', authMiddleware, (req, res) => {
  res.json({ message: "Acesso ao checkout permitido" });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
