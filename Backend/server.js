

import fs from 'fs';
import { startServer, onEvent } from 'soquetic';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

//MARTIN
onEvent("contadordecalorias", (data) => {
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador.forEach((objeto) => {
    if(data.nombre===objeto.nombre && data.contraseña===contraseña){
        objeto.calorias=data.calorias
    };
    });
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
    return data
});


onEvent("contadordedinero", (data) => {
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador.forEach((objeto) => {
    if(data.nombre===objeto.nombre && data.contraseña===contraseña){
        objeto.dineri=data.dinero
    };
    });
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
    return data
});

onEvent("contadormusculo", (data) => {
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador.forEach((objeto) => {
        if(data.nombre===objeto.nombre && data.contraseña===contraseña){
            objeto.musculo=data.musculo
        };
        });
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
    return data
});
// onEvent("logros", (data) => {
//     let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
//     datosjugador.forEach((objeto) => {
//         if(data.nombre===objeto.nombre && data.contraseña===contraseña){
//             objeto.logros=data.logros
//         };
//         });
//     writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
//     return data
// });


onEvent("comidas", (data) => {
    console.log(data);
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador.forEach((objeto) => {
        if(data.nombre===objeto.nombre && data.contraseña===contraseña){
            objeto.comidas=data.comidas
        };
        });
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
    return data
});


onEvent("cantidades", (data) => {
    console.log(data);
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador.forEach((objeto) => {
        if(data.nombre===objeto.nombre && data.contraseña===contraseña){
            objeto.mancuernas=data.mancuernas
            objeto.bicicleta = data.bicicleta
            objeto.pressbanca = data.pressbanca
            objeto.caminadora = data.caminadora
            objeto.sentadilla = data.sentadilla
        };
        });
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
    return data
});


onEvent("datos",()=>{
let datos = JSON.parse(readFileSync("datos.json", "utf-8"));
datos.forEach((objeto) => {
    if(data.nombre===objeto.nombre && data.contraseña===contraseña){
        return datos
    };
    });
})




let usuarios = JSON.parse(fs.readFileSync('datos.json', 'utf-8'));


onEvent('login', (data) => {
  const { nombre, password } = data;
  let usuarioExistente = false;

  for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].nombre === nombre && usuarios[i].contraseña === password) {
          usuarioExistente = true;
          break;
      }
  }

  if (usuarioExistente = true) {
      return { message: "Inicio de sesión exitoso.", success: true};
  } else {
      return {
          message: "Nombre de usuario o contraseña incorrectos.",
          success: false
      };
  }
});


onEvent('register', (data) => {
  const { nombre, password } = data;

  let usuarios = JSON.parse(fs.readFileSync('datos.json', 'utf-8'));
  let usuarioExistente = false;

  for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].nombre === nombre) {
          usuarioExistente = true;
          break;
      }
  }

  if (usuarioExistente) {
      console.log("El nombre de usuario ya existe.");
      return {success: false};
  } else {
     
      const nuevoUsuario = { nombre, contraseña: password };
      const usuariosActualizados = [...usuarios, nuevoUsuario];

      fs.writeFileSync('datos.json', JSON.stringify(usuariosActualizados, null, 2));
      console.log("Registro exitoso.");
      return {success: true};
  }
});


startServer();

