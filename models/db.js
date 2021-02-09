const mongoose = require('mongoose')
const key = require('../config/keys')

const DB_URL = key.mongodb.dbURI

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
    console.log('DB Connected')
})

require('./user-model')