const mongoose = require('mongoose');
const Article = mongoose.model('Article');
const requestModule = require('../request');

exports.getArticles = async(req, res) => {
    requestModule.makeRequest(req, res);
}

exports.addArticle = (req, res) => {
	console.log(req.body);
   new Article(req.body).save().then((article) => {
        res.redirect("/");
    }).catch((err)=>{
    	Article.find().remove({name:req.body.name}).exec();
    	res.redirect("/");
    })

}
exports.getLikedArticles = async (req, res) => {
  const articles = await Article.find();
  res.render("articles",{title:"liked articles",active:true,articles})
}
exports.addNote = async (req, res) => {
  const article = await Article.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true
    }).exec();
  res.redirect("/hearts")
}