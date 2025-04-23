import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../Login.css';

export default function Login() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === 'admin' && username === 'admin') {
      navigate('/dashboard');
    } else {
      alert('Nom d\'utilisateur ou mot de passe incorrect');
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center vh-100">
      <div className="row align-items-center login-card shadow bg-white rounded overflow-hidden">
        
        {/* ILLUSTRATION SVG */}
        <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center bg-light p-4">
          <svg width="90%" height="90%" viewBox="0 0 640 512" fill="#009688" xmlns="http://www.w3.org/2000/svg">
            <path d="M96 128a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm64 32H32C14.3 160 0 174.3 0 192v16c0 26.5 21.5 48 48 48h48v16c0 13.3 10.7 24 24 24s24-10.7 24-24v-16h48c26.5 0 48-21.5 48-48v-16c0-17.7-14.3-32-32-32zm480 0h-96c-17.7 0-32 14.3-32 32v16c0 26.5 21.5 48 48 48h48v16c0 13.3 10.7 24 24 24s24-10.7 24-24v-16h48c26.5 0 48-21.5 48-48v-16c0-17.7-14.3-32-32-32zm-144-32a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM320 224a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-96 32h192c35.3 0 64 28.7 64 64v16c0 44.2-35.8 80-80 80H240c-44.2 0-80-35.8-80-80v-16c0-35.3 28.7-64 64-64z" />
          </svg>
        </div>

        {/* FORMULAIRE DE CONNEXION */}
        <div className="col-md-6 p-5">
          <h2 className="mb-4 text-center text-teal fw-bold">Connexion Admin</h2>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="form-control mb-4"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-custom w-100" onClick={handleLogin}>
            Se connecter
          </button>
        </div>
      </div>
    </div>
  );
}
