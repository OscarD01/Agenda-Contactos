(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    var btnAddContacto = document.getElementById("btnAddContacto").onclick = openAddContacto;
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
}

function openAddContacto(){
	location.href = "addContact.html";
}
