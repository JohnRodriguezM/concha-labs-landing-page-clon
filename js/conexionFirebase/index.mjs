// se importan elementos necesarios para el funcionamiento de firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";

import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

// se importa el popup que se despliega al enviar el formulario
import { aparecerModal } from "../modalAlert.mjs";

// configuracion del objeto
const firebaseConfig = {
  apiKey: "AIzaSyBfB1YbhSR2DQNMiAxMlT_VpQvgwtOEUeQ",
  authDomain: "concha-labs.firebaseapp.com",
  projectId: "concha-labs",
  storageBucket: "concha-labs.appspot.com",
  messagingSenderId: "193975282138",
  appId: "1:193975282138:web:16bd45fbe662343b6238e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// funcion para el envío de los datos a la base de datos creada en firebase
function envioLogin(e) {
  e.preventDefault(e);
  const envioDatos = async () => {
    try {
      const docRef = await addDoc(collection(db, "usuarios"), {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (err) {
      console.error("Error adding document: ", err);
    } 
  };
  // se ejecuta la funcion envioDatos
  envioDatos();
  // se ejecuta con un setTimeout la aparición del modal
  setTimeout(() => aparecerModal(), 400)
  document.getElementById("formInfo").reset();
}

// se declara una constante que almace la etiqueta de formulario
const envio1 = document.getElementById("formInfo")
// con el evento submit envio el formulario
envio1.addEventListener("submit", envioLogin);

