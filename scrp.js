// Seleccionar elementos del DOM
const loginButton = document.querySelector("button");
const usernameInput = document.querySelector("input[type='text']");
const passwordInput = document.querySelector("input[type='password']");

// Evento para manejar el botón de login
loginButton.addEventListener("click", (event) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado del botón
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "" || password === "") {
        alert("Por favor, complete todos los campos.");
    } else {
        // Simular inicio de sesión
        console.log(`Usuario: ${username}, Contraseña: ${password}`);
        alert("Inicio de sesión exitoso!");
        // Aquí podrías redirigir al usuario o hacer una solicitud a un servidor
    }
});

// Manejar enlace "Forgot Password"
const forgotPasswordLink = document.querySelector("a[href='#']");
forgotPasswordLink.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Función de recuperación de contraseña no implementada.");
});
