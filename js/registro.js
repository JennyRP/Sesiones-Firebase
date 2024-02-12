import { createUserWithEmailAndPassword, auth, signInWithEmailAndPassword } from "./firebase.js";

const registroForm = document.querySelector("#formRegistro");

registroForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");

    const email = emailInput.value;
    const password = passwordInput.value;

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Usuario registrado correctamente
    const user = userCredential.user;
    console.log(`Usuario registrado: ${user.email}`);
    alert('¡Usuario registrado correctamente!');
  } catch (error) {
    // Manejo de errores
    const errorCode = error.code;
    console.error(errorCode);

    switch (errorCode) {
      case 'auth/weak-password':
        console.log("Contraseña demasiado débil. Debe tener al menos 6 caracteres.");
        break;
      case 'auth/email-already-in-use':
        console.log("Correo electrónico ya en uso. Prueba con otro.");
        break;
      case 'auth/invalid-email':
        console.log("Formato de correo electrónico no válido. Introduce un correo válido.");
        break;
      default:
        console.error('Error desconocido:', error.message);
    }
  } finally {
    // Limpiar los campos del formulario
    e.target.reset();
  }
});
