const express = require('express');
const session = require('express-session');
const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Calendar = require('../views/Calendar/Calendar');

router.get('/', (req, res) => {
    renderTemplate(Calendar, {}, res);
});




module.exports = router;
