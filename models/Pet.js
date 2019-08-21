const db = require('../db');

module.exports = db.defineModel('pets', {
    birth: db.Sequelize.STRING(100),
    name: db.Sequelize.STRING(10),
    gender: db.Sequelize.BOOLEAN
});
