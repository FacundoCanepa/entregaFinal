inicioSesion.addEventListener("submit" , e=>{
    e.preventDefault()
    let warnings = "";
    let validarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
    let validarTelefono = /^((\+549|\+54 9|549) (221| 11 ) (\d{3}) (\d{4}))|((\+549|549)(221| 11)(\d{7}))|((221| 11)(\d{7}))$/
    let entrar = false 
    if(username.value.length <6 ){
        warnings += "El nombre es icorrecto <br>"
        entrar = true
    }
    if (!/^[a-zA-Z\s]+$/.test(username.value)) {
        warnings += "El nombre no puede contener <br> números ni caracteres especiales.<br>";
        entrar = true;
    }
    if(!validarEmail.test(gmail.value)) {
        warnings += "El gmail es icorrecto <br>"
        entrar = true
    }
    if (!validarTelefono.test(telefono.value)) {
        warnings += "El telefono es icorrecto <br>"
    }
    if (entrar){
        parrafo.innerHTML = warnings
    }
    else{
        alert("iniciaste sesion")
    }

})