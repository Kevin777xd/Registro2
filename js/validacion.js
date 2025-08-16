function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

let button = document.getElementById("regBtn");

button.addEventListener("click", function () {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let terminos = document.getElementById("terminos").checked;
    
    if (nombre == "" || apellido == ""  || email == "" || password1 == "" || password2 == "" || !terminos || password1 !== password2 || password1.length < 6) {
        showAlertError();
    } else {
        showAlertSuccess();
    }
});




