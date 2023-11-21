// app.jsx
import React from 'react';
import './app.css';

function App() {
  return (
    <div className="element">
      <h2>Recuperar contraseña</h2>
      <div className="element-main">
        <h1>Ingrese sus Datos</h1>
        <p>¿Olvidaste tu contraseña? No te preocupes, estamos aquí para ayudarte a recuperar el acceso a tu cuenta. Ingresa tu dirección de correo electrónico y te enviaremos las instrucciones necesarias para restablecer tu contraseña de forma segura y sencilla.</p>
        <form>
          <input type="text" placeholder="Ingresa tu e-mail" />
          <input type="submit" value="Recuperar mi contraseña" />
        </form>
      </div>
      <div className="copy-right">
        <p>© 2023 </p>
      </div>
    </div>
  );
}

export default App;
