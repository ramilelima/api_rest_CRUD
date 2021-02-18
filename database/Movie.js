const Sequelize = require("sequelize");
const connection = require("./connection");

const Movie = connection.define('movies', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    director: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    storyline: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Movie.sync({force: false});

module.exports = Movie;