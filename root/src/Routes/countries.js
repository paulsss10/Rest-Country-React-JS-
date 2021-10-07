const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const Conutry = require('../Models/countries');

// Gets all contries ni
router.get('/', async (req, res) => {
    try {
        const fetchedCountries = await Post.find();
        res.json(fetchedCountries);
        
    } catch (err) {
        res.status(400).send(err)
    }
}); 