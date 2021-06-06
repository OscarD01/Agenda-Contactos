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
    var btnSaveContact = document.getElementById("btnSaveContact").onclick = saveContact;
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //location.href = "index.html";
    //document.getElementById('deviceready').classList.add('ready');
}


function returnIndex(){
	location.href = "index.html";
}

function saveContact(){
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var phoneNumber = document.getElementById("phoneNumber");
}
