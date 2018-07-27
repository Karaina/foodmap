/*let options = {
    enableHighAccuracy: true,
    timeout: 6000,
    maximumAge: 0
};

navigator.geolocation.getCurrentPosition( succes, error, options );


function succes(position){
let coordenadas = position.coords;

console.log("Tu posición actual es: ");
console.log("Latitud : " + coordenadas.latitude);
console.log("Longitud" + coordenadas.longitude);
console.log("Más o menos " + coordenadas.accuracy + " metros.");
};

function error(error) {
    console.warn("ERROR (" + error.code + "): " + error.message);
} */

//splash

/*<button onclick="restaurantes()"></button>
<div id="restoDiv">

</div>*/




//trayendo datos de api
/*
function restaurantes(){
    let xhttp = new XMLHttpRequest(); //Objeto que representa la petición (request)
    xhttp.onreadystatechange = function() { //Evento cuando el estado haya cambiado (cuando esté listo) Se ejecutará cuando esté lista, cuando reciba la respuesta
        if (this.readyState == 4 && this.status == 200) { //Todas las respuestas “200 y algo” serán respuestas satisfactorias
            const restoResp = JSON.parse(this.responseText); //No usar funciones flechas cuando usamos this.  usar json punto stringify cuando tratemos con objetos 
            const restoRespDiv = document.getElementById("restoDiv");
            for(let i=0; i < restoResp.length; i++){
                const infoApi = document.createElement('div'); //Aquí "almaceno" las imágenes
                infoApi.src = restoDiv[i];
                restoRespDiv.appendChild(infoApi);
            }
        }
    };
    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true", true); //Con GET sólo se accede a datos, NO se envían (Cuando se hace Login, se debería hacer con POST, no con GET). Va el verbo (GET) y luego la petición (URL)
    xhttp.send(); //Aquí se ejecuta la petición
}
*/

//splash
(function(){ 
    var preload = document.getElementById("preload"); 
    var loading = 0; var id = setInterval(frame, 64); 
    function frame(){ 
        if(loading == 100) { 
            clearInterval(id); 
            window.open("welcome.html", "_self"); 
        } else { loading = loading + 1; 
            if(loading == 90) {
             preload.style.animation = "fadeout 1s ease"; 
            }
         }
        }
        
})();





















