const express = require('express');
const router = express.Router();
const User = require('../models/User'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const SECRET = process.env.SECRET_KEY;
if (!SECRET) {
  console.error("SECRET_KEY indefinido! Verifique seu .env");
}


router.post('/cad', async (req, res) => {
  const { name, email, password, rua, numero, bairro } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email já cadastrado" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, rua, numero, bairro, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (err) {
    console.error("Erro no cadastro:", err);
    res.status(500).json({ message: "Erro no servidor" });
  }
});


router.post('/log', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Email ou senha incorretos" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Email ou senha incorretos" });

    if (!SECRET) {
      return res.status(500).json({ message: "Erro no servidor: SECRET_KEY indefinido" });
    }

    const token = jwt.sign({ id: user._id.toString() }, SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    console.error("Erro no login:", err);
    res.status(500).json({ message: "Erro no servidor" });
  }
});

module.exports = router;
