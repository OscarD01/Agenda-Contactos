(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    //var returnMenu = document.getElementById("btnBack").onclick = returnMenu;
    var btnBackIndex = document.getElementById("returnIndex").onclick = returnIndex;
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version + "maricon");
    console.log("Mariccccon");
    //location.href = "index.html";
    //document.getElementById('deviceready').classList.add('ready');
}


function returnIndex(){
	location.href = "index.html";
}
