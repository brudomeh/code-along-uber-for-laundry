require('dotenv').config();

const mongoose = require("mongoose");
const User = require('../models/User');

const bcrypt = require('bcrypt');
const bcryptSalt = 10;

const dburl = process.env.DBURL;
mongoose.connect(dburl).then(() => console.log(`Connected to: ${dburl} DB`));

const salt = bcrypt.genSaltSync(bcryptSalt);
const hashedPass = bcrypt.hashSync(`1111`, salt);

User.create([
  {
    name: `Pedro`,
    email: `pedro@pedro.com`,
    password: hashedPass,
    isLaunderer: true,
    fee: 30
  },
  {
    name: `Luisa`,
    email: `luisa@gmail.com`,
    password: hashedPass,
    isLaunderer: true,
    fee: 20
  },
  {
    name: `Juan`,
    email: `juan@gmail.com`,
    password: hashedPass,
    isLaunderer: true,
    fee: 30
  }
])
.then( () => {
  console.log("User created");
  mongoose.disconnect();
})