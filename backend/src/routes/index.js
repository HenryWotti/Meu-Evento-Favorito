const express = require('express')
const events = require('./event.routes.js')

const router = express()

router.use(events)

module.exports = router
