import { signOut, auth } from "./firebase.js";

const cerrarSesionBtn = document.getElementById('cerrar');

cerrarSesionBtn.addEventListener('click', async () => {
  try {
    await signOut(auth);
    alert("Sesión cerrada correctamente");
    window.location.href = './index.html';
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    alert("Error al cerrar sesión. Por favor, inténtalo de nuevo.");
  }
});
