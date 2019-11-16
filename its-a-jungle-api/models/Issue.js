const mongoose = require('mongoose');
const {Schema} = mongoose;

const issueSchema = new Schema({
    name: String,
    description: String,
})

mongoose.model('issues', issueSchema);
