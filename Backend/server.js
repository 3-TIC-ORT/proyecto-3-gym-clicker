
import fs from 'fs';
import { startServer, onEvent } from 'soquetic';
import { readFileSync, writeFileSync } from 'fs';

//MARTIN
onEvent("contadordecalorias", (data) => {
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].calorias = data; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});

onEvent("contadordedinero", (data) => {
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].dinero = data; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});

onEvent("contadormusculo", (data) => {
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].musculo = data; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});

onEvent("logros", (data) => {
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].logros = data.logros; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});

onEvent("comidas", (data) => {
    console.log(data);
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].comidas = data.comidas; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
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
});





let usuarios = JSON.parse(fs.readFileSync('datos.json', 'utf-8'));


onEvent('login', (data) => {
  const { nombre, password } = data;
  let usuarioExistente = false;

  // Recorremos el array de usuarios manualmente
  for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].nombre === nombre && usuarios[i].contraseña === password) {
          usuarioExistente = true;
          break;
      }
  }

  if (usuarioExistente = true) {
      return { message: "Inicio de sesión exitoso." };
  } else {
      return {
          
          message: "Nombre de usuario o contraseña incorrectos.",
      };
  }
});

// Evento para el registro sin `.find()`
onEvent('register', (data) => {
  const { nombre, password } = data;

  // Leer los datos del archivo JSON y parsearlos
  let usuarios = JSON.parse(fs.readFileSync('datos.json', 'utf-8'));
  let usuarioExistente = false;

  // Recorremos el array de usuarios manualmente
  for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].nombre === nombre) {
          usuarioExistente = true;
          break;
      }
  }

  if (usuarioExistente) {
      console.log("El nombre de usuario ya existe.");
  } else {
      // Crear un nuevo array de usuarios manualmente
      const nuevoUsuario = { nombre, contraseña: password };
      const usuariosActualizados = [...usuarios, nuevoUsuario];

      // Guardar el nuevo array en el archivo JSON
      fs.writeFileSync('datos.json', JSON.stringify(usuariosActualizados, null, 2));
      console.log("Registro exitoso.");
  }
});


startServer();

