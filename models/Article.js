const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const articleSchema = new mongoose.Schema({

	name:{
		type:String,
		unique:true,
		dropDups:true,
		required:"you must supply an article name"
	},
	summary:{
		type:String,
		required:"you must supply a summary"
	},
	note:String

});


articleSchema.index({
name:"text",
});
module.exports = mongoose.model('Article', articleSchema);