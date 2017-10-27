const request = require("request");
const cheerio = require("cheerio");
const promisify = require('es6-promisify');
const requestFunction = promisify(request);

exports.makeRequest = async(req,res)=>{

const {body} = await requestFunction("https://www.tytnetwork.com/");
var $ = cheerio.load(body);
const articles = []

 $("div#x-section-2").each(function(i, element) {

        $("div.x-text").each(function(i, element) {
            console.log("1")
            var summary = $(element).find("div.rpwe-summary").text();

            var name = $(element).find("h3.rpwe-title").find("a").text();
            if (name || summary) {
                articles.push({
                    name,
                    summary
                });
            }
        })
        console.log("2")
    });
 console.log("3");
 res.render('articles',{articles,title:"articles"});
}

