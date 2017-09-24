var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BreedSchema   = new Schema({
    name: String
});

mongoose.model('Breed', BreedSchema);

module.exports = mongoose.model('Breed');