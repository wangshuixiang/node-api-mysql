const db = require('../db');

module.exports = db.defineModel('users', {
    email: {
        type: db.Sequelize.STRING(100),
        unique: true
    },
    passwd: db.Sequelize.STRING(100),
    name: db.Sequelize.STRING(100),
    gender: db.Sequelize.BOOLEAN
});
