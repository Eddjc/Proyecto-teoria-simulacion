var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');

class Orden extends Model { }

Orden.init({
    nombre: DataTypes.STRING,
    tipo: DataTypes.STRING,
    fecha: DataTypes.DATE
    
},
    {
        sequelize,
        modelName: 'orden',
        timestamps: false
    }
);


module.exports = Orden;