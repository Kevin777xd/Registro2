function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function () {
// Obtener valores de los campos
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const terminos = document.getElementById("terminos").checked;

    // Validaciones
    if (nombre == "" || apellido == "" || email == "" || password1 == "" || password2 == "" || password1 !== password2 || password1.length < 6 || !terminos) {
        showAlertError();
    } else {
        // Si pasa todas las validaciones
        showAlertSuccess();
    }
});
