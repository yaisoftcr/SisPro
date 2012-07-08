function PonerCursor(){
    frmDatos.txtID.focus();
    return true;
}
			
function Validar(formulario){
	var isAdmin = false;
	if (document.getElementById('login-username').value==""){
		alert("Debe introducir un nombre de usuario." );
		document.getElementById('login-username').focus();
		return false;
	}else if (document.getElementById('login-password').value==""){
		alert("Debe introducir una contrasena" );
		document.getElementById('login-password').focus();
		return false;
	}else if ((document.getElementById('login-username').value=="user") && (document.getElementById('login-password').value=="pass")) {
		isAdmin= false;
		load("index.html?", isAdmin);
		return false;
	}else if ((document.getElementById('login-username').value=="admin") && (document.getElementById('login-password').value=="pass")) {
		isAdmin = true;
		load("index.html?", isAdmin);
		return false;
	}else if (document.getElementById('login-username').value!="admin" || document.getElementById('login-username').value!="user") {
		alert("Usuario invalido");
		return false;
	}else if (document.getElementById('login-password').value!="pass") {
		alert("Contrasena invalida");
		return false;
	}			
}
			
function load(url, isAdmin) {
	window.location=url + isAdmin;
}