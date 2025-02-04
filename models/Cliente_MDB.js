import mongoose, { model } from "mongoose";
import { conexion } from "../helpers/conexion.js";

conexion();
const clienteSchema = new mongoose.Schema(
    {
        nombre: String,
        cedula: String,
        saldo_ant: Number,
        monto_compra: Number,
        pago_deposito: Number
    }
);

const Cliente = model('Cliente', clienteSchema);

export class ClienteModel {
    static async getAll() {
        try {
            return Cliente.find();
        } catch (e) {
            console.log(e);
        }
    }

    static async getOneByID(cedula) {
        try {
            return await Cliente.findOne({ cedula : cedula });
        } catch (e) {
            console.log(cedula);
            console.log(e);
        }
    }

    static async delete(id) {
        try {
            return Cliente.deleteOne({ cedula: id  });
        } catch (e) {
            console.log(e);
        }
    }

    static async create(cliente) {
        if (!cliente.success) {
            return Error;
        }

        const nuevoCliente = {
            ...cliente.data
        };

        const clienteGuardar = new Cliente(nuevoCliente);
        try {
            await clienteGuardar.save();
            return nuevoCliente;
        } catch (e) {
            console.log(e);
        }
    }

    static async update(id, cliente) {
        if (!cliente.success) {
            return Error;
        }

        const nuevoCliente = {
            ...cliente.data
        };

        try {
            await Cliente.updateOne({ cedula: id }, nuevoCliente);
            return nuevoCliente;
    
        } catch (e) {
            console.log(id);
        }
    }
}