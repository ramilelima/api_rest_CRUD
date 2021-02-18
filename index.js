const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/connection");

require('dotenv').config();

var Movie = require("./database/Movie");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connection
    .authenticate()
    .then(() => {
        console.log("connection to the database made successfully!");
    }).catch((err) => {
        console.log(err);
    })

app.get("/", (req, res) => {
    var movie = Movie.findAll().then(movies => {
        { movies: movies }
        res.status(200).json(movies);
    }).catch(error => {
        res.status(500).json({Error: "API unavailable"});
    })
});

app.get("/movie/:id", (req, res) => {
    var idParam = req.params.id;
    if (isNaN(idParam)) {
        res.status(400).json({Error: "Bad Request"});
    } else {
        var id = parseInt(idParam);
        var movie = Movie.findByPk(id).then(movies => {
            { movies: movies }
            if (movies != null) {             
                res.status(200).json(movies);
            } else {
                res.status(404).json({Error: "Not Found"});
            }
        });
    }
});

app.post("/movie", (req, res) => {
    var {title, year, director, category, storyline} = req.body;

    if (title == undefined || title.length < 3 || title == "") {
        var titleValid = "Title invalid";
        res.status(400).json({"Error" : (titleValid)});
    }
    if (isNaN(year)) {
        var yearValid = "Year invalid";
        res.status(400).json({Error: yearValid});
    }
    if (director == undefined || director == "") {
        var directorValid = "Director invalid";
        res.status(400).json({Error: directorValid});
    }
    if (category == undefined || category == "") {
        var categoryValid = "Category invalid";
        res.status(400).json({Error: categoryValid});
    }
    if (storyline == undefined || storyline == "") {
        var storylineValid = "Storyline invalid";
        res.status(400).json({Error: storylineValid});
    }
    if (titleValid != undefined || yearValid != undefined || directorValid != undefined || categoryValid != undefined || storylineValid != undefined) {
        res.status(400).json({Error: "One or more invalid parameters!"});
    } else {
        Movie.create({ title: title, year: year, director: director, category: category, storyline: storyline 
        }).then(() => {
            res.status(200).json({ title, year, director, category, storyline });
        })
    }
});

app.put("/movie/:id", (req, res) => {
    var idParam = req.params.id;
    if (isNaN(idParam)) {
        res.status(400).json({Error: "Bad Request"});
    } else {
        var id = parseInt(idParam);
        Movie.findByPk(id).then(movies => {
            if (movies != undefined) {
                var {title, year, director, category, storyline} = req.body;

                if (title == undefined || title.length < 3 || title == "") {
                    var titleValid = "Title invalid or incompleted";
                }
                if (isNaN(year)) {
                    var yearValid = "Year invalid";
                }
                if (director == undefined || director == "") {
                    var directorValid = "Director invalid";
                }
                if (category == undefined || category == "") {
                    var categoryValid = "Category invalid";
                }
                if (storyline == undefined || storyline == "") {
                    var storylineValid = "Storyline invalid";
                }
                if (titleValid != undefined || yearValid != undefined || directorValid != undefined || categoryValid != undefined || storylineValid != undefined) {
                    res.status(400).json({"Check invalid fields": + titleValid + ", " + yearValid + ", " + directorValid + ", " + categoryValid + ", " + storylineValid});
                } else {
                    Movie.update({ title: title, year: year, director: director, category: category, storyline: storyline }, {
                        where: {
                            id: id
                        }
                    }).then(() => {
                        res.status(200).json({ title, year, director, category, storyline });
                    });
                }
            } else {
                res.status(404).json({Error: "Not Found"});
            }
        });
    }
});

app.delete("/movie/:id", (req, res, next) => {
    var id = req.params.id;
    Movie.findByPk(id).then(movie => {
        if (movie != undefined) {
            Movie.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.status(200).json("Successfully deleted");
            }).catch(() => {
                res.status(400).json({Error: "Bad Request"});
            })
        } else {
            res.status(404).json({Error: "Not Found"});
        }
    })
});

app.listen(process.env.CONNECTION_PORT, () => {
    console.log("Server online");
})