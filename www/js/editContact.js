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
    var btneditContact = document.getElementById("btnSaveContact").onclick = editContact;

    recivedata();
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //location.href = "index.html";
    //document.getElementById('deviceready').classList.add('ready');
}


function returnIndex(){
	location.href = "index.html";
}

function editContact(){
    var fname = document.getElementById("firstName");
    var lname = document.getElementById("lastName");
    var phoneNumber = document.getElementById("phoneNumber");
    var bool = true

    if(fname.value.length != 0 && lname.value.length != 0 && phoneNumber.value.length != 0 ){ //Mira si todos los campos estan rellenados
    	if(phoneNumber.value.length == 9){ //Mira si el telefono tiene 9 numeros
    		for(key in schedule) { //Mira en todos los contactos guardados si existe alguno con el mismo telefono que el introducido
            	console.log(key)
            	if(key == phoneNumber.value) {
                	alert("Ya existe un contacto con ese numero");
                	bool = false; //En el caso de que exista settea esta variable en false
                	console.log(bool);
                	break;
            	} 
            }
            if(bool){ //Si bool es falso no entrara por lo tanto no lo añadira
            	schedule[phoneNumber.value] = {
    			"fname": fname.value,
    			"lname": lname.value
    			}
    			localStorage.setItem("schedule",JSON.stringify(schedule))
    			alert("Contacto añadido correctamente");
            }
        returnIndex(); //Devuelve al menu
    	}
    	else{
    		alert("El numero de telefono tienen que ser de 9 numeros");
    	}
    }
    else{
    	alert("Rellena todos los campos");
    }
}

function reciveData(){
    // Codigo para recibir los datos del contacto seleccionado
}
