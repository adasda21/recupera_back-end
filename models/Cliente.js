import { clientes } from "../datos/clientes.js";
let clientesDevolver = clientes;
export class Cliente {
    static getAll() {
        return clientesDevolver;
    }
    static getOneByID(id) {
        return clientesDevolver.find(cliente => cliente.cedula == id);
    }
    static delete(id) {
        return clientesDevolver.filter(cliente => cliente.cedula != id);
    }
    static create(cliente) {
        if (!cliente.success) {
            return Error;
        }
        const nuevoCliente = {
            ...cliente.data
        };
        clientesDevolver = [...clientesDevolver, nuevoCliente];
        return nuevoCliente;
    }
    static update(id, cliente) {
        if (!cliente.success) {
            return Error;
        }
        const clienteIndice = clientesDevolver.findIndex(cliente => cliente.cedula == id);
        if (clienteIndice == -1) {
            return Error;
        }
        const nuevoCliente = {
            ...clientesDevolver[clienteIndice],
            ...cliente.data
        };
        clientesDevolver[clienteIndice] = nuevoCliente;
        return nuevoCliente;
    }
}