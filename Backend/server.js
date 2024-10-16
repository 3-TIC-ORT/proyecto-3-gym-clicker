
import fs from 'fs';
import { startServer, onEvent } from 'soquetic';
import { readFileSync, writeFileSync } from 'fs';

//MARTIN
onEvent("contadordecalorias", (data) => {
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].calorias = data; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
    return data
});

onEvent("contadordedinero", (data) => {
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].dinero = data; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
    return data
});

onEvent("contadormusculo", (data) => {
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].musculo = data; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
    return data
});

onEvent("logros", (data) => {
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].logros = data.logros; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
    return data
});

onEvent("comidas", (data) => {
    console.log(data);
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].comidas = data.comidas; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
    return data
});

onEvent("cantidades", (data) => {
    console.log(data);
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].mancuernas = data.mancuernas; 
    datosjugador[0].bicicleta = data.bicicleta; 
    datosjugador[0].pressbanca = data.pressbanca;
    datosjugador[0].caminadora = data.caminadora; 
    datosjugador[0].sentadilla = data.sentadilla; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
    return data
});

onEvent("datos",()=>{
let datos = JSON.parse(readFileSync("datos.json", "utf-8"));
return datos
})

let usuarios = JSON.parse(fs.readFileSync('datos.json', 'utf-8'));


onEvent('login', (data) => {
    const { nombre, password } = data;

    const usuarioExistente = usuarios.find(
      (u) => u.nombre === nombre && u.contraseña === password
    );

    if (usuarioExistente) {
      return { success: true, message: "inicio de sesión exitoso." };
    } else {
      return {
        success: false,
        message: "nombre de usuario o contraseña incorrectos.",
      };
    }
});

startServer();
