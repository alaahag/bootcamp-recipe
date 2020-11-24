const express = require('express');
const urllib = require('urllib');
const router = express.Router();

router.get('/sanity', function(req, res){
    //200 = OK
    res.send(200);
});

router.get('/recipes/:ingredient', function(req, res){
    //we need to get: ingredients, title, thumbnail, href
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${req.params.ingredient}`, function(err, data){
        const parsedData = JSON.parse(data);

        //test if we have valid data
        if (parsedData.results.length !== 0){
            const filteredRecipes = parsedData.results.map(r => ({'ingredients': r.ingredients, 'title': r.title, 'thumbnail': r.thumbnail, 'href': r.href}));
            res.send(filteredRecipes);
        }
        else
            res.send(null);
    });
});

module.exports = router;