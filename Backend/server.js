
import fs from 'fs';
import { startServer, onEvent } from 'soquetic';

//MARTIN
onEvent("contadordecalorias", (data) => {
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].calorias = data.caloriasactuales; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});

onEvent("contadordedinero", (data) => {
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].dinero = data.dineroactual; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});

onEvent("contadormusculo", (data) => {
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].musculo = data.musculoactual; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});

onEvent("logros", (data) => {
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].logros = data.logrosactuales; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});

onEvent("comidas", (data) => {
    console.log(data);
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].comidas = data.comidaactuales; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});

onEvent("cantidades", (data) => {
    console.log(data);
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].cantidades = data.cantidadesactuales; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});

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
