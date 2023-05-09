document.addEventListener("DOMContentLoaded", function () {


    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const direccion = document.getElementById('direccion');
    const usuario = document.getElementById('usuario');
    const contrasena = document.getElementById('contrasena');
    const conf_contrasena = document.getElementById('conf_contrasena');
    const email = document.getElementById('email');
    const gustos = document.getElementById('gust');
    const gustos_si = document.getElementById('gustos_si');
    const gustos_no = document.getElementById('gustos_no');

    const errorNombre = document.getElementById('error-nombre');
    const errorApellido = document.getElementById('error-apellido');
    const errorDireccion = document.getElementById('error-direccion');
    const errorUsuario = document.getElementById('error-usuario');
    const errorContrasena = document.getElementById('error-contrasena');
    const errorConf_contrasena = document.getElementById('error-conf_contrasena');
    const errorEmail = document.getElementById('error-email');

    const valor = document.getElementById("valor");
    const rango = document.getElementById("rango");
    valor.textContent = rango.value;

    rango.addEventListener("input", (event) => {
    valor.textContent = event.target.value
    });

    nombre.addEventListener('input', function () {
        validarNombre();
    });

    apellido.addEventListener('input', function () {
        validarApellido();
    });

    direccion.addEventListener('input', function () {
        validarDireccion();
    });

    usuario.addEventListener('input', function () {
        validarUsuario();
    });

    contrasena.addEventListener('input', function () {
        validarContrasena();
    });

    conf_contrasena.addEventListener('input', function () {
        validarConf_contrasena();
    });

    email.addEventListener('input', function () {
        validarEmail();
    });

    gustos_si.addEventListener('input', function () {
        validarGustos_si();
    });

    gustos_no.addEventListener('input', function () {
        validarGustos_no();
    });


    function validarNombre() {
        if (nombre.value == null || nombre.value == '' || nombre.value.length > 25) {
            nombre.classList.add('error');
            errorNombre.classList.add('show');
        } else {
            nombre.classList.remove('error');
            errorNombre.classList.remove('show');
        }
    }

    function validarApellido() {
        if (apellido.value == null || apellido.value == '' || apellido.value.length > 25) {
            apellido.classList.add('error');
            errorApellido.classList.add('show');
        } else {
            apellido.classList.remove('error');
            errorApellido.classList.remove('show');
        }
    }

    function validarDireccion() {
        var dire = direccion.value.toLowerCase();
        console.log(dire);
        if (dire.startsWith('cll') || dire.startsWith('av') || dire.startsWith('cra') || dire.startsWith('anv') || dire.startsWith('trans')) {
            direccion.classList.remove('error');
            errorDireccion.classList.remove('show');
        } else {
            direccion.classList.add('error');
            errorDireccion.classList.add('show');
        }
    }

    function validarUsuario() {
        const alphanumericRegex = /^[a-zA-Z0-9]+$/;
        if (usuario.value.length > 20 || usuario.value.length < 10 || !alphanumericRegex.test(usuario.value)) {
            usuario.classList.add('error');
            errorUsuario.classList.add('show');
        } else {
            usuario.classList.remove('error');
            errorUsuario.classList.remove('show');
        }
    }

    function validarContrasena() {
        const expresion = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{15,20}$/;
        if (!expresion.test(contrasena.value)) {
            contrasena.classList.add('error');
            errorContrasena.classList.add('show');
        } else {
            contrasena.classList.remove('error');
            errorContrasena.classList.remove('show');
        }
    }

    function validarConf_contrasena() {
        if (contrasena.value !== conf_contrasena.value) {
            conf_contrasena.classList.add('error');
            errorConf_contrasena.classList.add('show');
        } else {
            conf_contrasena.classList.remove('error');
            errorConf_contrasena.classList.remove('show');
        }
    }

    function validarEmail() {
        if (email.value == null || email.value == '' || email.value.length > 120) {
            email.classList.add('error');
            errorEmail.classList.add('show');
        } else {
            email.classList.remove('error');
            errorEmail.classList.remove('show');
        }
    }

    function validarGustos_si() {
        if (gustos_si.value) {
            gust.classList.add('show');

        } else {
            gust.classList.remove('show');
        }
    }

    function validarGustos_no() {
        if (gustos_no.value) {
            gust.classList.remove('show');

        } else {
            gust.classList.add('show');
        }
    }
})