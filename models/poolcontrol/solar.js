const mongoose = require('mongoose');


const SolarSchema = mongoose.Schema({
    isOn: {
        type: Boolean
    },
    justSwitched: {
        type: Boolean
    }
})


//User extern verfügbar machen
const Solar = module.exports = mongoose.model('Solar', SolarSchema);