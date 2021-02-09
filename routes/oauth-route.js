const express = require('express')
const router = express.Router()
const passport = require('passport')

// Auth Login
router.get('/login', (req, res) => {
    res.render('login', {user: req.user})
})

// Auth Logout
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

// Auth Google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}))


// Callback route for Google to Redirect
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/profile')
})

module.exports = router