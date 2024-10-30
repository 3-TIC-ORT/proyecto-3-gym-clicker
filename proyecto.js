var ejerciciosInfo = {
    'ejerciciosmancuernas': { costo: 5, produccion: 1 },
    'ejerciciosbicicleta': { costo: 50, produccion: 10 },
    'ejerciciospresbanca': { costo: 500, produccion: 100 },
    'ejercicioscaminadora': { costo: 5000, produccion: 1000 },
    'ejerciciossentadilla': { costo: 50000, produccion: 10000 }
};


var comidasInfo = {
    'Arroz': { costo: 500, potenciador: 1.10, duracion: 5000 },
    'Chukistrukis': { costo: 500, potenciador: 1.20, duracion: 5000 },
    'Avena': { costo: 500, potenciador: 1.30, duracion: 5000 },
    'Proteinaenpolvo': { costo: 500, potenciador: 1.40, duracion: 5000 },
    'farmacity': { costo: 500, potenciador: 1.50, duracion: 5000 }
};


var cantidades = {
    "mancuernas":0,
    "bicicleta":0,
    "pressbanca":0,
    "caminadora":0,
    "sentadilla":0,


}




let cantidaddedinero = 0;
let contadordecalorias = Number(document.getElementById("contadorDeCalorias").innerText);
let cantidaddemusculo = 0;
let contadordemusculo= Number(document.getElementById("contadorDeMusculo").innerText);
cantidaddedinero=Number(document.getElementById("titulodinero").innerText);


function click() {
    contadordecalorias += 1;
    console.log(contadordecalorias);
    document.getElementById("contadorDeCalorias").innerHTML = contadordecalorias;
}
document.getElementById("circulo").addEventListener("click", click);


function toggleMenu() {
    var dropdown = document.getElementById("myDropdown");


    if (dropdown.classList.contains("show")) {
        dropdown.style.transition = 'none';
        dropdown.style.height = '0';
        dropdown.style.opacity = '0';
        dropdown.style.visibility = 'hidden';


        setTimeout(() => {
            dropdown.style.transition = '';
        }, 300);
    } else {
     
        dropdown.style.visibility = 'visible';
        dropdown.style.height = '100vh';
        dropdown.style.opacity = '1';


        dropdown.offsetHeight;


        dropdown.style.transition = 'height 0.3s ease, opacity 0.3s ease';
    }


   
    dropdown.classList.toggle("show");
}




document.getElementById("caja2").addEventListener("click", () => {
    let cambio = document.getElementById("cajanegra").textContent


    if ((contadordecalorias >= Number(cambio) * 5)&& (Number(cambio) >= 0)) {
        console.log(cantidaddedinero);
        contadordecalorias -= Number(cambio) * 5;
        console.log(cantidaddedinero);
       
        document.getElementById("contadorDeCalorias").textContent = contadordecalorias;
        cantidaddedinero += Number(document.getElementById("cajanegra").textContent);
   
        document.getElementById("input1").value = 0;
        document.getElementById("cajanegra").textContent = 0;
        document.getElementById("titulodinero").textContent = cantidaddedinero;
    }
});


document.getElementById("input1").addEventListener("input", () => {
    if (Number(document.getElementById("input1").textContent) >= 0) {
        document.getElementById("cajanegra").textContent = Math.floor(Number(document.getElementById("input1").value) / 5);
    }
});




function calculodeprecio (ejerciciosInfo,idejercicio){
   
    if (cantidaddedinero >= ejerciciosInfo.costo){
    console.log(cantidaddedinero);
    cantidaddedinero = cantidaddedinero - ejerciciosInfo.costo;
    ejerciciosInfo.costo = ejerciciosInfo.costo*1.15;
    document.getElementById("titulodinero").innerHTML = cantidaddedinero;
    console.log(ejerciciosInfo.costo);
    setInterval(() => {  contadordemusculo = contadordemusculo+ ejerciciosInfo.produccion;
    document.getElementById("contadorDeMusculo").innerHTML = contadordemusculo;
    console.log("hola");


    }, 10000);


    document.getElementById(idejercicio).innerHTML = Math.ceil(ejerciciosInfo.costo);


    switch (idejercicio){
    case "precio1":
        cantidades.mancuernas ++;    
        console.log ("mancuenas:" + cantidades.mancuernas );


        break
    case "precio2":
        cantidades.bicicleta ++;  
        console.log ("bicicleta:" + cantidades.bicicleta );


         
        break    
    case "precio3":
        cantidades.pressbanca ++;  
        console.log ("pressbanca:" + cantidades.pressbanca );
 
        break
    case "precio4":
        cantidades.caminadora ++;  
        console.log ("caminadora:" + cantidades.caminadora );
 
        break
    case "precio5":
        cantidades.sentadilla ++;    
        console.log ("sentadilla:" + cantidades.sentadilla );
       
        break
    default:
        console.log ("no se ha encontrado nada");    


    }


 }
 else {
    console.log("Dinero Insuficiente");
    console.log(cantidaddedinero);
 }
}




document.getElementById("ejerciciosmancuernas").addEventListener("click",() => calculodeprecio(ejerciciosInfo.ejerciciosmancuernas,"precio1"));
document.getElementById("ejerciciosbicicleta").addEventListener("click",() => calculodeprecio(ejerciciosInfo.ejerciciosbicicleta,"precio2"));
document.getElementById("ejerciciospresbanca").addEventListener("click",() => calculodeprecio(ejerciciosInfo.ejerciciospresbanca,"precio3"));
document.getElementById("ejercicioscaminadora").addEventListener("click",() => calculodeprecio(ejerciciosInfo.ejercicioscaminadora,"precio4"));
document.getElementById("ejerciciossentadilla").addEventListener("click",() => calculodeprecio(ejerciciosInfo.ejerciciossentadilla,"precio5"));


window.addEventListener("beforeunload", function(e){
    postData("Guardar infromacion", {
        cantidades:cantidades
      });    
 });






// Backend
// Carga de datos desde el almacenamiento local
function loadGameData() {
    let calorias = 0;
    cantidaddedinero = Number(localStorage.getItem("cantidaddedinero")) || 0;
    let contadorCalorias = document.getElementById("contadorDeCalorias");
    contadorCalorias.innerText = calorias;
}






function toggleVisibility(triggerSelector, targetSelector) {
    const triggerElement = document.querySelector(triggerSelector);
    const targetElement = document.querySelector(targetSelector);


    triggerElement.addEventListener('click', function() {
        if (targetElement.classList.contains('hidden')) {
            targetElement.classList.remove('hidden');
            targetElement.classList.add('visible');
        } else {
            targetElement.classList.remove('visible');
            targetElement.classList.add('hidden');
        }
    });
}


toggleVisibility('#trigger-div', '#target-div');


const dialogo = document.getElementById('miDialogo');
const abrirDialogo = document.getElementById('abrirDialogo');
const cerrarDialogo = document.getElementById('cerrarDialogo');


abrirDialogo.addEventListener('click', () => {
    dialogo.showModal();
});


cerrarDialogo.addEventListener('click', () => {
    dialogo.close();
});


// Get the modal
var modal = document.getElementById('id01');


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let skins = 1;






    let right = document.getElementById("right");
    let left = document.getElementById("left");
   


    right.addEventListener('click', () => {
        skins = skins+1;
        console.log(skins);
        if (skins >= 4){
            right.disabled = true;




         }


         if (skins == 2){
            left.disabled = false;


         }


    });


   
    left.addEventListener('click', () => {
        skins = skins-1;
        console.log(skins);
         if (skins <= 1){
            left.disabled = true;




         }


         if (skins == 3){
            right.disabled = false;


         }
         




    });


    let botonaplicar = document.getElementById("botonaplicar")
    botonaplicar.addEventListener('click', () => {
        let skindefault = document.getElementById("circulo");
        console.log(skindefault.className)
        switch (skins){
            case 1:
                let skin1 = document.getElementById("skindefault");
             


                skindefault.className = skin1.className;
                skindefault.style.display = "block";
                console.log(skindefault)


               break


            case 2:
                 let skin2 = document.getElementById("skin2");
                 console.log(skin2)


                 skindefault.className = skin2.className;
                 skindefault.style.display = "block";
                 console.log(skindefault)


                break
            case 3:
                let skin3 = document.getElementById("skin3");


             
                 console.log(skindefault)




                 skindefault.className = skin3.className;
                 skindefault.style.display = "block";
                 console.log(skindefault)
                break    
            case 4:
                let skin4 = document.getElementById("skin4");


             
                console.log(skindefault)




                skindefault.className = skin4.className;
                skindefault.style.display = "block";
                console.log(skindefault)


                break


             }
           
    });


    let RebornDialog = document.getElementById('RebornDialog');
    const OpenRebornDialog = document.getElementById('BotonReborn');
    const CloseRebornDialog = document.getElementById('cerrarDialogo');




    let Option2 = document.getElementById("Option2");
    Option2.addEventListener("click", () => {
        RebornDialog.close();
       
    })






    OpenRebornDialog.addEventListener("click", ()  => {
            if (cantidaddedinero > 5){
                RebornDialog.showModal()


               
            }


                   
      })






    function buff1(){


        cantidaddedinero = 0;
        cantidaddemusculo = 0;
        contadordecalorias = 0;


        ejerciciosInfo.ejerciciosmancuernas.produccion =   ejerciciosInfo.ejerciciosmancuernas.produccion * 1,5;
        ejerciciosInfo.ejerciciosbicicleta.produccion =   ejerciciosInfo.ejerciciosbicicleta.produccion * 1,5;
        ejerciciosInfo.ejerciciospresbanca.produccion =   ejerciciosInfo.ejerciciospresbanca.produccion * 1,5;
        ejerciciosInfo.ejercicioscaminadora.produccion =   ejerciciosInfo.ejercicioscaminadora.produccion * 1,5;
        ejerciciosInfo.ejerciciossentadilla.produccion =   ejerciciosInfo.ejerciciossentadilla.produccion * 1,5;


        document.getElementById('RebornDialog').close();


        RebornDialog.close();


        document.getElementById("titulodinero").innerHTML = cantidaddedinero;
        document.getElementById("contadorDeCalorias").innerHTML = cantidaddedinero;
        document.getElementById("contadorDeMusculos").innerHTML = cantidaddedinero;


   
    }


    function buff2 (){


    }


    function buff3 (){


    }






   








