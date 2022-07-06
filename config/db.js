import sequelize from "sequelize";

const db = new sequelize('viajes', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});


export default db;