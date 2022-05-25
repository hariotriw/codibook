const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    res.json('Ini Route Home');
})

// Api Routes
const userRoutes = require('./api/user.js')
// const authRoutes = require('./api/auth.js')
route.use('/api/users', userRoutes)
// route.use('/api/', authRoutes)

module.exports = route;