import mongoose  from "mongoose";

export const conexion=async () =>{
   try{
     await mongoose.connect("mongodb+srv://Matheo:Gerson1122@cluster0.fqwug.mongodb.net/Clientes?retryWrites=true&w=majority&appName=Cluster0");
     console.log ("conectado correctamente");
   }catch (e){
        console.log(e)
    }
}
