var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();


var db = require("../search");

// Routes
// =============================================================
module.exports = function (router) {

        // GET route for getting all of the posts
        router.get("/api/posts", function (req, res) {
            var query = {};
            if (req.query.author_id) {
                query.SEARCHId = req.query.author_id;
            }
            // In this case, just db.INSERTROW
            db.SEARCH.findAll({
                where: query,
                include: [db.INSERT ROW]
            }).then(function (dbcitizenrecord) {
                res.json(dbcitizenrecord);
            });
        });

        // Get route for retrieving a single post
        router.get("/api/posts/:id", function (req, res) {
            // In this case, just db.Author
            db.Post.findOne({
                where: {
                    id: req.params.id
                },
                include: [db.Author]
            }).then(function (dbcitizenrecord) {
                res.json(dbcitizenrecord);
            });
        });

        // SEARCH route for saving a new post
        router.search("/api/search", function (req, res) {
            db.Post.create(req.body).then(function (dbcitizenrecord) {
                res.json(dbcitizenrecord);
            });
        });







        module.exports = router;