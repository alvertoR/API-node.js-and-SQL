import sequelize    from 'sequelize';
import dbConnection from '../config/connection';

const carros = dbConnection.define('carros', {
    id: {
        type: sequelize.UUID,
        primaryKey: true,
        defaultValue: sequelize.UUIDV4
    },
    modelo: {
        type: sequelize.STRING
    },
    color: {
        type: sequelize.STRING
    },
    año: {
        type: sequelize.BIGINT
    },
    precio: {
        type: sequelize.BIGINT
    },
    email: {
        type: sequelize.STRING
    },
    descripcion: {
        type: sequelize.TEXT
    },
});

export default carros;