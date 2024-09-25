import { readFileSync, writeFileSync } from 'fs';
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

onEvent("ejercicios", (data) => {
    console.log(data);
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].ejercicios = data.ejerciciosactuales; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});

//AARON

import readlineSync from 'readline-sync';
import fs from 'fs';

// Leer los usuarios existentes desde el archivo JSON
let usuarios = JSON.parse(fs.readFileSync('infoUsuario.json', "utf-8"));

// Solicita el nombre de usuario y la contraseña
let nombre = readlineSync.question("Iniciar sesión - Nombre de usuario: ");
let password = readlineSync.question("Iniciar sesión - Contraseña: ", { hideEchoBack: true });

// Busca el usuario en la lista
let usuarioExistente = usuarios.find(u => u.nombre === nombre && u.contraseña === password);

if (usuarioExistente) {
    console.log("Inicio de sesión exitoso. ¡Bienvenido!");
} else { 
    console.log("Nombre de usuario o contraseña incorrectos.");
}


import readlineSync from 'readline-sync';
import fs from 'fs';


// Leer los usuarios existentes desde el archivo JSON
 usuarios = JSON.parse(fs.readFileSync('infoUsuario.json', "utf-8"));

// Registrar un nuevo usuario
 nombre = readlineSync.question("Nombre de usuario: ");
 password = readlineSync.question("Contraseña: ", { hideEchoBack: true });

// Verifica si el usuario ya existe
 usuarioExistente = usuarios.find(u => u.nombre === nombre);

if (usuarioExistente) {
    console.log("El usuario ya existe. Intenta con otro nombre de usuario.");
} else {
    let usuario = {
        nombre: nombre,
        contraseña: password
    };

    usuarios.push(usuario);
    fs.writeFileSync('infoUsuario.json', JSON.stringify(usuarios, null, 2));
    console.log("Usuario registrado exitosamente.");
}
startServer();