const express = require('express');
const router = express.Router();
const articlesController = require('./../controllers/articlesController');

const {
    catchErrors
} = require('./../handlers/errorHandlers');


// Do work here
router.get('/', catchErrors(articlesController.getArticles));
router.post('/addArticle', articlesController.addArticle);
router.get('/hearts', catchErrors(articlesController.getLikedArticles));
router.post('/addNote/:id',catchErrors(articlesController.addNote));
router.get('/scrape', catchErrors(articlesController.getArticles));



module.exports = router;