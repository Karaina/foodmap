/*class localizacion{

    constructor(callback){
        if (navigator.geolocation){
            
            navigator.geolocation.getCurrentPosition((position)=>{
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;ç

            callback();

            });
            }else{
                alert("Tu navegador no soporta geolocalización")
            }
    }
}

function initMap(){

    const ubicacion = new localizacion(()=>{

        const options = {
            center:{
                lat: ubicacion.latitude,
                lng: ubicacion.longitude
            },

            zoom: 15
        }

        var map = document.getElementById('map');
        const mapa = new google.maps.Map(map, options);
    });
}
*/