import fs from 'fs';
import { startServer, onEvent } from 'soquetic';

// Función para leer y escribir datos JSON
const leerDatos = () => JSON.parse(fs.readFileSync("datos.json", "utf-8"));
const guardarDatos = (datos) => fs.writeFileSync("datos.json", JSON.stringify(datos, null, 2));

// Validar que los datos enviados al servidor sean correctos
const validarDatos = (data, camposRequeridos) => {
    if (typeof data !== "object" || data === null) return false; // Verifica que data sea un objeto válido
    return camposRequeridos.every((campo) => campo in data);
};

// Actualiza propiedades específicas de un usuario
const actualizarPropiedad = (data, propiedad, valor) => {
    let datosjugador = leerDatos();
    datosjugador.forEach((objeto) => {
        if (data.nombre === objeto.nombre && data.contraseña === objeto.contraseña) {
            objeto[propiedad] = valor;
        }
    });
    guardarDatos(datosjugador);
};

// Eventos
onEvent("contadordecalorias", (data) => {
    if (!validarDatos(data, ["nombre", "contraseña", "calorias"])) {
        return { success: false, message: "Datos incompletos o mal formateados." };
    }
    actualizarPropiedad(data, "calorias", data.calorias);
    return { success: true };
});

onEvent("contadordedinero", (data) => {
    if (!validarDatos(data, ["nombre", "contraseña", "dinero"])) {
        return { success: false, message: "Datos incompletos o mal formateados." };
    }
    actualizarPropiedad(data, "dinero", data.dinero);
    return { success: true };
});

onEvent("contadormusculo", (data) => {
    if (!validarDatos(data, ["nombre", "contraseña", "musculo"])) {
        return { success: false, message: "Datos incompletos o mal formateados." };
    }
    actualizarPropiedad(data, "musculo", data.musculo);
    return { success: true };
});

onEvent("comidas", (data) => {
    if (!validarDatos(data, ["nombre", "contraseña", "comidas"])) {
        return { success: false, message: "Datos incompletos o mal formateados." };
    }
    actualizarPropiedad(data, "comidas", data.comidas);
    return { success: true };
});

onEvent("cantidades", (data) => {
    if (!validarDatos(data, ["nombre", "contraseña", "mancuernas", "bicicleta", "pressbanca", "caminadora", "sentadilla"])) {
        return { success: false, message: "Datos incompletos o mal formateados." };
    }
    let datosjugador = leerDatos();
    datosjugador.forEach((objeto) => {
        if (data.nombre === objeto.nombre && data.contraseña === objeto.contraseña) {
            objeto.mancuernas = data.mancuernas;
            objeto.bicicleta = data.bicicleta;
            objeto.pressbanca = data.pressbanca;
            objeto.caminadora = data.caminadora;
            objeto.sentadilla = data.sentadilla;
        }
    });
    guardarDatos(datosjugador);
    return { success: true };
});

onEvent("datos", (data) => {
    if (!validarDatos(data, ["nombre", "contraseña"])) {
        return { success: false, message: "Datos incompletos o mal formateados." };
    }

    let datos = leerDatos();
    const usuario = datos.find((objeto) => data.nombre === objeto.nombre && data.contraseña === objeto.contraseña);

    return usuario
        ? { success: true, datos: usuario }
        : { success: false, message: "Usuario no encontrado." };
});

// Login
onEvent("login", (data) => {
    if (!validarDatos(data, ["nombre", "password"])) {
        return { success: false, message: "Datos incompletos o mal formateados." };
    }

    const { nombre, password } = data;
    let usuarios = leerDatos();
    const usuarioExistente = usuarios.some(
        (usuario) => usuario.nombre === nombre && usuario.contraseña === password
    );

    return usuarioExistente
        ? { message: "Inicio de sesión exitoso.", success: true }
        : { message: "Nombre de usuario o contraseña incorrectos.", success: false };
});

// Registro
onEvent("register", (data) => {
    if (!validarDatos(data, ["nombre", "password"])) {
        return { success: false, message: "Datos incompletos o mal formateados." };
    }

    const { nombre, password } = data;
    let usuarios = leerDatos();
    const usuarioExistente = usuarios.some((usuario) => usuario.nombre === nombre);

    if (usuarioExistente) {
        return { message: "El nombre de usuario ya existe.", success: false };
    } else {
        const nuevoUsuario = {
            nombre,
            contraseña: password,
            calorias: 0,
            dinero: 0,
            musculo: 0,
            logros: [],
            comidas: 0,
            mancuernas: 0,
            bicicleta: 0,
        };
        usuarios.push(nuevoUsuario);
        guardarDatos(usuarios);
        return { message: "Registro exitoso.", success: true };
    }
});

startServer();
