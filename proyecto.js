var ejerciciosInfo = {
    'ejerciciosmancuernas': { costo: 5, produccion: 1, cantidad:0 },
    'ejerciciosbicicleta': { costo: 50, produccion: 10, cantidad:0 },
    'ejerciciospresbanca': { costo: 500, produccion: 100, cantidad:0 },
    'ejercicioscaminadora': { costo: 5000, produccion: 1000, cantidad:0 },
    'ejerciciossentadilla': { costo: 50000, produccion: 10000, cantidad:0 }
};


var comidasInfo = {
    'Arroz': { costo: 500, potenciador: 1.10, duracion: 5000 },
    'Chukistrukis': { costo: 500, potenciador: 1.20, duracion: 5000 },
    'Avena': { costo: 500, potenciador: 1.30, duracion: 5000 },
    'Proteinaenpolvo': { costo: 500, potenciador: 1.40, duracion: 5000 },
    'farmacity': { costo: 500, potenciador: 1.50, duracion: 5000 }
};

var AllSkins = {

    1: {valor:1, desbloqueado:false},
    2: {valor:2, desbloqueado:true},
    3: {valor:3, desbloqueado:false},
    4: {valor:4, desbloqueado:false},
    5: {valor:5, desbloqueado:false},
    6: {valor:6, desbloqueado:false},
    7: {valor:7, desbloqueado:false},
    "Skin8": {valor:8, desbloqueado:false},
    "Skin9": {valor:9, desbloqueado:false},
    "Skin10": {valor:10, desbloqueado:false},
    "Skin11": {valor:11, desbloqueado:false},
    "Skin12": {valor:12, desbloqueado:false},
    "Skin13": {valor:13, desbloqueado:false},
    "Skin14": {valor:14, desbloqueado:false},


}



let calorias = 0;
let cantidaddedinero = 0;
let contadordecalorias = Number(document.getElementById("contadorDeCalorias").innerText);
let cantidaddemusculo = 0;
let contadordemusculo= Number(document.getElementById("contadorDeMusculo").innerText);
cantidaddedinero=Number(document.getElementById("titulodinero").innerText);

let contadordedinero = document.getElementById("titulodinero").innerText;

actualizacionDeIntervalos (ejerciciosInfo.ejerciciosmancuernas,"precio1");
actualizacionDeIntervalos (ejerciciosInfo.ejerciciosbicicleta,"precio2");
actualizacionDeIntervalos (ejerciciosInfo.ejerciciospresbanca,"precio3");
actualizacionDeIntervalos (ejerciciosInfo.ejercicioscaminadora,"precio4");
actualizacionDeIntervalos (ejerciciosInfo.ejerciciossentadilla,"precio5");


function click() {
    contadordecalorias += 1;
    console.log(contadordecalorias);
    document.getElementById("contadorDeCalorias").innerHTML = contadordecalorias;
}
document.getElementById("circulo").addEventListener("click", click);


function toggleMenu() {
   initWheel()

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

function actualizacionDeIntervalos (ejercicios, precios){
    var numero = 0;

    while (numero != ejercicios.cantidad) {
        setInterval(() => {  contadordemusculo = contadordemusculo+ ejercicios.produccion;
            document.getElementById("contadorDeMusculo").innerHTML = contadordemusculo;
            console.log("hola");
            }, 10000);
            numero ++;
    }
    document.getElementById(precios).innerHTML = ejercicios.costo;
   
}


function calculodeprecio (ejerciciosInfo,idejercicio){
   
    if (cantidaddedinero >= ejerciciosInfo.costo){
    console.log(cantidaddedinero);
    cantidaddedinero = cantidaddedinero - ejerciciosInfo.costo;
    ejerciciosInfo.costo = ejerciciosInfo.costo*1.5;
    cantidaddedinero = Math.floor(cantidaddedinero);
    document.getElementById("titulodinero").innerHTML = cantidaddedinero;
    console.log(ejerciciosInfo.costo);
    setInterval(() => {  contadordemusculo = contadordemusculo+ ejerciciosInfo.produccion;
    document.getElementById("contadorDeMusculo").innerHTML = contadordemusculo;
    console.log("hola");
    }, 10000);


    document.getElementById(idejercicio).innerHTML = Math.floor(ejerciciosInfo.costo);


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


function estructuras() {
    


}

document.getElementById("ejerciciosmancuernas").addEventListener("click",() => calculodeprecio(ejerciciosInfo.ejerciciosmancuernas,"precio1"));
document.getElementById("ejerciciosbicicleta").addEventListener("click",() => calculodeprecio(ejerciciosInfo.ejerciciosbicicleta,"precio2"));
document.getElementById("ejerciciospresbanca").addEventListener("click",() => calculodeprecio(ejerciciosInfo.ejerciciospresbanca,"precio3"));
document.getElementById("ejercicioscaminadora").addEventListener("click",() => calculodeprecio(ejerciciosInfo.ejercicioscaminadora,"precio4"));
document.getElementById("ejerciciossentadilla").addEventListener("click",() => calculodeprecio(ejerciciosInfo.ejerciciossentadilla,"precio5"));


function GuardadoAutomatico (){
    setInterval(() => {  
        postData("cantidades", ejerciciosInfo.ejerciciosmancuernas.cantidad);
        console.log(ejercicios.ejerciciosmancuernas.cantidad)
    }, 20000)
}   
GuardadoAutomatico()

const spanMancuernas = document.getElementById("cantidad")

function actualizarDatos (){fetchData("datos",(data)=>{
    console.log(data)
 ejerciciosInfo.ejerciciosmancuernas.cantidad = data[0].mancuernas
    spanMancuernas.textContent = cantidades.mancuernas
    console.log(cantidades)
})}
document.addEventListener("DOMContentLoaded",actualizarDatos)


// Backend


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
   

    var Mostrador = document.getElementById("Mostrador");
    var SkinDeMostrador = 1

    right.addEventListener('click', () => {
        skins = skins+1;
        console.log(skins);
        SkinDeMostrador = SkinDeMostrador + 1;
        console.log(SkinDeMostrador);



        if (skins >= 4){
            right.disabled = true;
              
   
         }


         if (skins == 2){
            left.disabled = false;


         }

         switch (SkinDeMostrador){
            case 1:
            
            Mostrador.className = "skindefaultMostrador";  



            break;

            case 2:
            
            Mostrador.className = "circulo2Mostrador";  



            break;

            case 3:
            
            Mostrador.className = "circulo3Mostrador";  



            break;

            case 4:
            
            Mostrador.className = "circulo4Mostrador";  



            break;


         }
       

    });


   
    left.addEventListener('click', () => {
        skins = skins-1;
        SkinDeMostrador = SkinDeMostrador - 1;
        console.log(SkinDeMostrador);
        console.log(skins);
         if (skins <= 1){
            left.disabled = true;

            


         }


         if (skins == 3){
            right.disabled = false;


         }
         
         switch (SkinDeMostrador){
            case 1:
            
            Mostrador.className = "skindefaultMostrador";  



            break;

            case 2:
            
            Mostrador.className = "circulo2Mostrador";  



            break;

            case 3:
            
            Mostrador.className = "circulo3Mostrador";  



            break;

            case 4:
            
            Mostrador.className = "circulo4Mostrador";  



            break;


         }




    });


    let botonaplicar = document.getElementById("botonaplicar")
    botonaplicar.addEventListener('click', () => {
        let skindefault = document.getElementById("circulo");
        console.log(skindefault.className)

        if (AllSkins[skins].desbloqueado == true) { 
            
        
        
        
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

    var resultadoderuleta = 0;

    function initWheel(){
        var $wheel = $('.roulette-wrapper .wheel'),
            row = "";
           
        row += "<div class='row'>";
        row += "  <div class='card red'>1<\/div>";
        row += "  <div class='card black'>14<\/div>";
        row += "  <div class='card red'>2<\/div>";
        row += "  <div class='card black'>13<\/div>";
        row += "  <div class='card red'>3<\/div>";
        row += "  <div class='card black'>12<\/div>";
        row += "  <div class='card red'>4<\/div>";
        row += "  <div class='card green'>0<\/div>";
        row += "  <div class='card black'>11<\/div>";
        row += "  <div class='card red'>5<\/div>";
        row += "  <div class='card black'>10<\/div>";
        row += "  <div class='card red'>6<\/div>";
        row += "  <div class='card black'>9<\/div>";
        row += "  <div class='card red'>7<\/div>";
        row += "  <div class='card black'>8<\/div>";
        row += "<\/div>";
       
        for(var x = 0; x < 29; x++){
          $wheel.append(row);
        }
      }
      
      
      document.getElementById("Rulet").addEventListener('click', () => {
      console.log("Ruleta")
      let roll = Math.floor(Math.random() * 15)
        console.log(roll)
        resultadoderuleta = roll;
            var $wheel = $('.roulette-wrapper .wheel'),
                order = [0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4],
                position = order.indexOf(roll);
                     
            var rows = 12,
                card = 75 + 3 * 2,
                landingPosition = (rows * 15 * card) + (position * card);
             
            var randomize = Math.floor(Math.random() * 75) - (75/2);
             
            landingPosition = landingPosition + randomize;
             
            var object = {
              x: Math.floor(Math.random() * 50) / 100,
              y: Math.floor(Math.random() * 20) / 100
            };
           
            $wheel.css({
              'transition-timing-function':'cubic-bezier(0,'+ object.x +','+ object.y + ',1)',
              'transition-duration':'6s',
              'transform':'translate3d(-'+landingPosition+'px, 0px, 0px)'
            });
           
            setTimeout(function(){
              $wheel.css({
                'transition-timing-function':'',
                'transition-duration':'',
              });
             
              var resetTo = -(position * card + randomize);
              $wheel.css('transform', 'translate3d('+resetTo+'px, 0px, 0px)');
            }, 6 * 1000);
          
            for (let skin in AllSkins) {
                if (AllSkins[skin].valor == roll) {
                    AllSkins[skin].desbloqueado = true       
                 }
            }
    
        
      });



      const barra = document.getElementById('BarContent');
      const boton = document.getElementById('circulo');
      let height = 0;
      const fillSpeed = 10;
      const drainSpeed = 0.5;
      
      
      boton.addEventListener('click', () => {
          if (height > 90) {

             contadordecalorias = contadordecalorias + 1;

          }


          if (height < 100) {
              height += fillSpeed;

          }
          barra.style.height = height + '%';
      });
      
      
      function drainBar() {
          if (height > 0) {
              height -= drainSpeed;
              height = Math.max(0, height);
              barra.style.height = height + '%';
          }
          requestAnimationFrame(drainBar);
      }
      
      
      drainBar();
      
      const cofre1 = document.getElementById('cofre1');
      const cofre2 = document.getElementById('cofre2');

      cofre1.addEventListener('click', () => {
        
        var jackpot = cantidaddedinero + cantidaddedinero/4;
        var Perder = cantidaddedinero - cantidaddedinero/4;
        

        var CalculoCasino = Math.random() 
        
        if ( CalculoCasino > 0.5){
            
            cantidaddedinero = jackpot;
            cantidaddedinero =  Math.floor(cantidaddedinero);
            document.getElementById("titulodinero").innerHTML = cantidaddedinero;
            console.log(cantidaddedinero);
        }

        if ( CalculoCasino <= 0.5){
            cantidaddedinero = Perder;
            cantidaddedinero =  Math.floor(cantidaddedinero);

            document.getElementById("titulodinero").innerHTML = cantidaddedinero;
            console.log(cantidaddedinero);

        }


    });

    cofre2.addEventListener('click', () => {
        
        var jackpot = cantidaddedinero + cantidaddedinero;
        var Perder = cantidaddedinero - cantidaddedinero;
        

        var CalculoCasino = Math.random() 
        
        if ( CalculoCasino > 0.5){
            
            cantidaddedinero = jackpot;
            cantidaddedinero =  Math.floor(cantidaddedinero);
            document.getElementById("titulodinero").innerHTML = cantidaddedinero;
            console.log(cantidaddedinero);
        }

        if ( CalculoCasino <= 0.5){
            cantidaddedinero = Perder;
            cantidaddedinero =  Math.floor(cantidaddedinero);

            document.getElementById("titulodinero").innerHTML = cantidaddedinero;
            console.log(cantidaddedinero);

        }


    });

    








