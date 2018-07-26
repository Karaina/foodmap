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





















