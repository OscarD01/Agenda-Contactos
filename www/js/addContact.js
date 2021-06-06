(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener('deviceready', onDeviceReady, false);
var schedule = JSON.parse(localStorage.getItem("schedule"))
 
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
    var fname = document.getElementById("firstName");
    var lname = document.getElementById("lastName");
    var phoneNumber = document.getElementById("phoneNumber");

    if(fname.value.length != 0 && lname.value.length != 0 && phoneNumber.value.length != 0 ){
    	if(phoneNumber.value.length == 9){
    		schedule[phoneNumber.value] = {
    			"fname": fname.value,
    			"lname": lname.value
    		}
    	localStorage.setItem("schedule",JSON.stringify(schedule))

        alert("Contacto añadido correctamente");

        returnIndex();
    	}
    	else{
    		alert("El numero de telefono tienen que ser de 9 numeros");
    	}
    }
    else{
    	alert("Rellena todos los campos");
    }
}
