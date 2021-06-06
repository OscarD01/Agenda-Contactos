(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener('deviceready', onDeviceReady, false);

var schedule;
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    if(JSON.parse(localStorage.getItem("schedule")) == undefined) {
        schedule = {
            "644011136": {
                "fname":"Oscar",
                "lname":"Domingez Losa",
            },
        } 
        localStorage.setItem("schedule",JSON.stringify(schedule))
    } else {

    	console.log(schedule);
        schedule = JSON.parse(localStorage.getItem("schedule"))
        console.log(schedule);
    }

    appendContacts()

    var btnAddContacto = document.getElementById("btnAddContacto").onclick = openAddContacto;
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
}

function openAddContacto(){
	location.href = "addContact.html";
}

function appendContacts(){
	for(x in schedule){
		console.log("añadiendo contacto ")
		$('#contacts').append('<li class="collection-item" phoneNumber="'+x+'"><div>'+schedule[x]["fname"]+' - '+x+'<button id="btnBorrar" class="btn-small waves-effect waves-light indigo">Borrar</button><button id="btnEditar" class="btn-small waves-effect waves-light indigo">Editar</button></div></li>');
		
	}
}
