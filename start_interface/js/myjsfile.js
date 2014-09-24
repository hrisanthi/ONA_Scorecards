document.addEventListener("deviceread", onDeviceReady, false);

function onDeviceReady(){
    console.log("onDeviceReady()");
    navigator.geolocation.getCurrentPosition(generateMap, onError);
    console.log(position);
    
   // $("#qrScanBtn").click(function(){
     //   doScan();
        
    //});
}

//map
function initialize() {
        var mapOptions = {
          center: { lat: -34.397, lng: 150.644},
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);