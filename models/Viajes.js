import sequelize from "sequelize";
import db from "../config/db.js";

export const Viajes = db.define('viajes', {
    titulo: {
        type: sequelize.STRING(100),
        allowNull: false
    },
    precio: {
        type: sequelize.STRING(100),
        allowNull: false
    },
    fecha_ida: {
        type: sequelize.DATE,
        allowNull: false
    },
    fecha_vuelta: {
        type: sequelize.DATE,
        allowNull: false
    },
    precio: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    imagen: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    descripcion: {
        type: sequelize.STRING,
        allowNull: false
    },
    disponibles: {
        type: sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: sequelize.STRING,
        allowNull: false
    }
});

