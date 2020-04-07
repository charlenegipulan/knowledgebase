var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
    title: {
        type: String,
        index: true,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    category: {
        type: String,
        index: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

var Article = module.exports = mongoose.model('Article', articleSchema);

//get all articles
module.exports.getArticles = function(callback){
    Article.find(callback);
}

//get article by ID
module.exports.getArticleById = function(id, callback) {
    Article.findById(id, callback);
}

//get category articles
module.exports.getArticlesByCategory = function(category, callback) {
    var query = {category: category};
    Article.find(query, callback);
}
