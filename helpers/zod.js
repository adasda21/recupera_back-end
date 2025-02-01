import zod from 'zod';

const clienteSchema=zod.object({
    nombre: zod.string(),
    cedula: zod.string(),
    saldo_ant: zod.number(),
    monto_compra: zod.number(),
    pago_deposito: zod.number(),

})

export const validarCliente =(cliente)=>{
    return clienteSchema.safeParse(cliente);
 }
 export const validarParcialCliete=(cliente)=>{
    return  clienteSchema.partial().safeParse(cliente);
 }
