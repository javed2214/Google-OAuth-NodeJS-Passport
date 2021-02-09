const express = require('express')
const app = express()
const authRoutes = require('./routes/oauth-route')
const profileRoutes = require('./routes/profile-routes')
const passportSetup = require('./config/passport-setup')
const keys = require('./config/keys')
const cookieSession = require('cookie-session')
const passport = require('passport')

require('./models/db')

app.set('view engine', 'ejs')

// Cookie Session
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}))

// Initialize Passport
app.use(passport.initialize())
app.use(passport.session())

// Set up Auth Routes
app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)

const PORT = 3000

app.get('/', (req, res) => {
    res.render('home', {user: req.user})
})

app.listen(PORT, () => {
    console.log(`Server is Running at PORT: ${PORT}`)
})