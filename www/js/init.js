(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener('deviceready', onDeviceReady, false);

var schedule;
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    if(JSON.parse(localStorage.getItem("schedule")) == undefined) { // Si el json no existe se crea uno por defecto y se guarda en el local storage
        schedule = {
            "644011136": {
                "fname":"Oscar",
                "lname":"Domingez Losa",
            },
        } 
        localStorage.setItem("schedule",JSON.stringify(schedule))
    } else {	// En el caso de que si exista se recoge del local storage y se guarda en schedule

    	console.log(schedule);
        schedule = JSON.parse(localStorage.getItem("schedule"))
        console.log(schedule);
    }

    appendContacts();

    var btnAddContacto = document.getElementById("btnAddContacto").onclick = openAddContacto;
    var btnDeleteAllContacts = document.getElementById("btnDeleteAllContacts").onclick = deleteAllContacts;
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
}

function openAddContacto(){ // Redirige a la pagina de anadir contactos
	location.href = "addContact.html";
}

function appendContacts(){ // Inserta los contactos en la lista mostrando el nombre, el numero y dos botones los cuales actualmente no hacen nada
	for(key in schedule){ // aunque proximamente el de editar te llevara al editor de contactos y el de borrar te permitira borrar el contacto
		$('#contacts').append('<li class="collection-item" style="background-color:grey; border:2px solid black; padding-top: 2px">'+schedule[key]["fname"]+' - '+key+'<button id="btnBorrar" class="right btn-small waves-effect waves-light indigo">Borrar</button><button id="btnEditar" class="right btn-small waves-effect waves-light indigo">Editar</button></li>');
	}
}

function deleteAllContacts(){ //Borra todos los contactos y recarga la pagina
	console.log("entro");
	if(JSON.parse(localStorage.getItem("schedule")) == undefined) {
		alert("No hay ningun contacto para ser borrado");
	}
	else{
		localStorage.removeItem("schedule");
		alert("Todos los contactos han sido eliminados");
		console.log(schedule);
		location.reload();
	}
}
