import React, { useState } from 'react';


const Login= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Email:', email); // Muestra el email ingresado en la consola
    console.log('Contraseña:', password); // Muestra la contraseña ingresada en la consola
    // Tu lógica de autenticación
  };

  return (
    <div className="container">
      <div className="w3l-signinform">
        <h1>¡Bienvenido!</h1>
        <p>Estamos emocionados de tenerte aquí. Por favor, introduce tus credenciales para acceder.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email o Nombre de usuario"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Iniciar sesión</button>
          </div>
        </form>
        <a href="ingresar url del olvidaste tu contraseña" className="forgot">
          ¿Olvidaste tu contraseña?
        </a>
        <a href="ingresar url del registro" className="forgot">
          Registrarme
        </a>
        
        <div className="footer">
          <p>&copy; 2023 CineFlix </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
