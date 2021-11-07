
    let formul = document.getElementById('formulario');
    let valorUsuario = document.getElementById('usuario');
    let valorClave = document.getElementById('clave');

 
    let usuario= /@/;
    let clave= /\S/; // Que no se encuentre vacio.


formul.addEventListener("submit", (e) =>{
    e.preventDefault();

    if(usuario.test(valorUsuario.value)){
        if(clave.test(valorClave.value)){
            formul.submit();
            alert("Formulario enviado correctamente");
        }
        else{
            alert("Falta completar el formulario")
        }
    }
    else{
        alert("Falta completar el formulario")
    }
})