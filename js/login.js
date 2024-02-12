import { auth, signInWithEmailAndPassword } from "./firebase.js";

const formLogin = document.querySelector("#formLogin");

formLogin.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    
    const cred = await signInWithEmailAndPassword(auth, email, password);
    
    console.log("Credenciales correctas");
    window.location.href = "./home.html";
  } catch (error) {
    const errorCode = error.code;
    
    switch (errorCode) {
      case 'auth/invalid-credential':
        console.log('Correo o contraseña incorrecta');
        alert("Credenciales incorrectas");
        break;
      case 'auth/user-disabled':
        console.log('Cuenta deshabilitada');
        break;
      default:
        console.error('Error desconocido:', error.message);
    }
  }
});
