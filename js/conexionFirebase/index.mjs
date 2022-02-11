/* import {respaldo} from './datosconfig.mjs' */

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";

import {getFirestore,collection,addDoc} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

import { aparecerModal } from "../modalAlert.mjs";


const firebaseConfig = {
  apiKey: "AIzaSyBfB1YbhSR2DQNMiAxMlT_VpQvgwtOEUeQ",
  authDomain: "concha-labs.firebaseapp.com",
  projectId: "concha-labs",
  storageBucket: "concha-labs.appspot.com",
  messagingSenderId: "193975282138",
  appId: "1:193975282138:web:16bd45fbe662343b6238e3",
};
console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



function envioLogin(e) {
  e.preventDefault(e);
  const envioDatos = async () => {
    try {
      const docRef = await addDoc(collection(db, "usuarios"), {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  if (envioDatos) {
    envioDatos();
  } else {
    return false;
  }
  aparecerModal();
  document.getElementById("formInfo").reset();
}


const envio1 = document.getElementById("formInfo")

envio1.addEventListener("submit", envioLogin);

  // debia traer el id del formulario,
/* function nombre(n) {
    let mensaje = document.getElementById('parragoSignIn').innerHTML = `Bienvenido(a) ${n}`
    return mensaje;
} */

/* export { firebaseConfig }; */
