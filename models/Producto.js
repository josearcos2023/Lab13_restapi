const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    precio: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        required: Date.now()
    },
});

module.exports = mongoose.model('Producto', ProductoSchema);