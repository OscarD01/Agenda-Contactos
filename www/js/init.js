(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    var schedule;

    if(JSON.parse(localStorage.getItem("schedule")) == undefined) {
        schedule = {
            "644011136": {
                "nombre":"Oscar",
                "apellidos":"Domingez Losa",
            },
        } 
        localStorage.setItem("schedule",JSON.stringify(schedule))
    } else {

    	console.log(schedule);
        schedule = JSON.parse(localStorage.getItem("schedule"))
        console.log(schedule);
    }

    showContacts;

    var btnAddContacto = document.getElementById("btnAddContacto").onclick = openAddContacto;
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
}

function openAddContacto(){
	location.href = "addContact.html";
}

function appendContacts(){
	console.log('Showing contatcs in screen');
}
