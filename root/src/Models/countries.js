const mongoose = require('mongoose');

const CountrySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    
});


module.exports = mongoose.model('countries', CountrySchema);