const router = require('express').Router();
const Events = require('../views/Events');
const renderTemplate = require('../lib/RenderTemplate');
const  { Event } = require('../../db/models/');

router.get('/', async (req, res) => {
    try {
        const allEvents = await Event.findByPk(20, {raw: true});
        // console.log(allEvents)
        renderTemplate(Events, {allEvents}, res);
    } catch (err) {
        console.log(err, 'Ошибка!!');
    }
})

module.exports = router;

// let EventDate = Event.findByPK(20).date();
