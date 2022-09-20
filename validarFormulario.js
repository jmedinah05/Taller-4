function validarFormulario(){

    var formulario = document.addForm; 

    if(formulario.id.value == ""){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor ingrese su id.</div> ';
        formulario.id.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }

    if(formulario.nombre.value == ""){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor ingrese su nombre.</div> ';
        formulario.nombre.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }

    if(formulario.apellido.value == ""){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor ingrese sus apellidos.</div> ';
        formulario.apellido.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }

    if(formulario.direccion.value == ""){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor ingrese su direccion.</div> ';
        formulario.direccion.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }

    if(formulario.usuario.value == ""){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor ingrese su usuario.</div> ';
        formulario.usuario.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }

    if(formulario.password.value == ""){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor ingrese su contraseña.</div> ';
        formulario.password.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }

    if(formulario.confirmarPassword.value == ""){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor confirme su contraseña.</div> ';
        formulario.confirmarPassword.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }

    if(formulario.password.value != formulario.confirmarPassword.value){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor ingresar contraseña y confirmar contraseña iguales.</div> ';
        formulario.password.value="";
        formulario.confirmarPassword.value="";
        formulario.confirmarPassword.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }


    if(formulario.telefono.value == ""){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor ingrese su telefono.</div> ';
        formulario.telefono.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }

    if(formulario.email.value == ""){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor ingrese su correo.</div> ';
        formulario.telefono.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }

    var email=document.getElementById("email").value;
    var contador=0;
    var contador2=0;
    for(i=1;i<email.length; i++){
        if(email.charAt(i-1)=="@"){
            contador++;
        }
        if(contador==1){
            if(email.charAt(i-1)=="."){
                contador2++;
            }
        }
    }
    if(contador==1 && contador2==2 || contador==1){
    }else{
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor ingrese un correo valido.</div> ';
        formulario.email.focus();
        return false;
    }

    if(formulario.telefono.value <= "100000"){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor ingrese un numero de telefono valido.</div> ';
        formulario.telefono.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }

    formulario.submit();
}

