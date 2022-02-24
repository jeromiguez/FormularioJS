function divNombre(texto) {
    document.getElementById("valNombre").innerHTML = texto;
}
function divApe(texto) {
    document.getElementById("valApe").innerHTML = texto;
}
function divEmail(texto) {
    document.getElementById("valEmail").innerHTML = texto;
}
function divTel(texto) {
    document.getElementById("valTel").innerHTML = texto;
}
    function divNac(texto) {
        document.getElementById("valNac").innerHTML = texto;
}
function divPass(texto) {
    document.getElementById("valPass").innerHTML = texto;
}


function formularioVal() {
    var campoNombre = document.getElementById("nombre");
    var campoApe = document.getElementById("apellido");
    var campoEmail = document.getElementById("email");
    var campoTel = document.getElementById("telefono");
    var campoNac = document.getElementById("nacimiento");
    var campoClave = document.getElementById("pass");
    var valido = true;

    if(campoNombre.value.trim() == "") {
        divNombre("Debe ingresar un nombre");
        valido = false;
    }else{
        if(campoNombre.value.length < 4) {
            divNombre("El nombre debe tener mas de 4 caracteres");
            valido = false;
        }else{
            if(campoApe.value.trim() == "") {
                divApe("Debe ingresar un apellido");
                valido = false;
            }else{
                if(campoApe.value.length < 4) {
                    divApe("El apellido debe tener mas de 4 caracteres")
                }else{
                    if(validarEmail(campoEmail.value) == false){
                        divEmail("El E-MAIL no es valido");
                        valido = false;
                    }else{
                        if(campoTel.value.length < 6){
                            divTel("El teléfono ingresado es incorrecto, debe contener mas de 6 carateres (puede no incluir el codigo de area)")
                            valido = false;
                        }else{
                            if(validarNacimiento(campoNac.value) == false){
                                divNac("Debe ser mayor de 18 años");
                                valido = false;
                            
                            }else{
                                if(validarClave(campoClave.value) == false){
                                    divPass("La clave debe contener al menos 1 numero, 1 mayuscula, 1 minuscula y tener al menos 8 caracteres");
                                    valido = false;
                                }
                            }
                        }
                    }
                }
            }
        }
    }



    return valido;
}

function validarEmail(emailVal){
    var patron = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    if(patron.test(emailVal))
    {
        return true;
    }else{
        return false;
    }
}

  function validarNacimiento(años){
	var optimizar = años.replace(/-/g, "/");
	var miCumple = new Date(optimizar);
	var fechaActual = new Date().toJSON().slice(0,10)+' 01:00:00';
	var miEdad = ~~((Date.now(fechaActual) - miCumple) / (31557600000));

	if(miEdad < 18) {
     	    return false;
        }else{
	    return true;
	}

}

function validarClave(passVal) {
    var passPatron = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if(passPatron.test(passVal)) {
        return true;
    }else{
        return false;
    }
}