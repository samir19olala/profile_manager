import { useState } from 'react';
import '../AddProfileModal.css';

export default function AddProfileModal({ onClose, onAdd }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (username && email) {
      onAdd({ username, email });
    } else {
      alert('Tous les champs sont requis !');
    }
  };

  return (
    <div className="modal-backdrop-custom d-flex justify-content-center align-items-center">
      <div className="modal-dialog-custom shadow p-4 bg-white rounded">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-teal fw-bold">Ajouter un profil</h5>
          <button className="btn-close" onClick={onClose}></button>
        </div>
        <div className="modal-body">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Nom d'utilisateur"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-outline-secondary" onClick={onClose}>
            Annuler
          </button>
          <button className="btn btn-custom" onClick={handleSubmit}>
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}
