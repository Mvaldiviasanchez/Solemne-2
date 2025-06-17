document.getElementById("formRegistro").addEventListener("submit", async function (e) {
  e.preventDefault();

  const nombre = this.nombre.value.trim();
  const usuario = this.usuario.value.trim();
  const password = this.password.value.trim();
  const telefono = this.telefono.value.trim();
  const email = this.email.value.trim();
  const mensaje = document.getElementById("mensajeRegistro");

  try {
    const res = await fetch("http://localhost:3000/api/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nombre, usuario, password, telefono, email })
    });

    const data = await res.json();
    if (res.ok) {
      mensaje.textContent = "Registro exitoso. ¡Gracias por registrarte!";
      this.reset();
    } else {
      mensaje.textContent = `Error: ${data.message}`;
    }
  } catch (error) {
    mensaje.textContent = "Error al conectar con el servidor.";
    console.error(error);
  }
});
