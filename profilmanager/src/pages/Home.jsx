import { useNavigate } from 'react-router-dom';
import '../Home.css'; // CSS local

export default function Home() {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate('/login');
  };

  return (
    <div className="home-container d-flex align-items-center justify-content-center vh-100">
      <div className="home-box shadow rounded text-center p-5 animate__animated animate__fadeInUp">
        <div className="home-illustration mb-4">
          {/* SVG intégré localement */}
          <svg
            viewBox="0 0 640 512"
            width="100"
            height="100"
            fill="#009688"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M96 128a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm64 32H32C14.3 160 0 174.3 0 192v16c0 26.5 21.5 48 48 48h48v16c0 13.3 10.7 24 24 24s24-10.7 24-24v-16h48c26.5 0 48-21.5 48-48v-16c0-17.7-14.3-32-32-32zm480 0h-96c-17.7 0-32 14.3-32 32v16c0 26.5 21.5 48 48 48h48v16c0 13.3 10.7 24 24 24s24-10.7 24-24v-16h48c26.5 0 48-21.5 48-48v-16c0-17.7-14.3-32-32-32zm-144-32a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM320 224a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-96 32h192c35.3 0 64 28.7 64 64v16c0 44.2-35.8 80-80 80H240c-44.2 0-80-35.8-80-80v-16c0-35.3 28.7-64 64-64z" />
          </svg>
        </div>
        <h1 className="display-6 fw-bold text-teal">Bienvenue sur l'application de gestion de profils</h1>
        <p className="text-muted">Gérez vos utilisateurs de manière simple et efficace.</p>
        <button onClick={loginHandler} className="btn btn-lg btn-custom mt-4 px-5 py-2">
          Se connecter
        </button>
      </div>
    </div>
  );
}
