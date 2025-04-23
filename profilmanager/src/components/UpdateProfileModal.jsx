import { useState } from 'react';
import '../UpdateProfileModal.css';

export default function UpdateProfileModal({ onClose, onUpdate,data }) {
  const [username, setUsername] = useState(data.username);
  const [email, setEmail] = useState(data.email);
  const id =data.id; 
  const handleSubmit = () => {
    if (username && email) {
        console.log('ok button clicked');
        onUpdate({id,username,email});
    } else {
      alert('Tous les champs sont requis !');
    }
  };

  return (
    <div className="modal-backdrop-custom d-flex justify-content-center align-items-center">
      <div className="modal-dialog-custom shadow p-4 bg-white rounded">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-teal fw-bold">Modifier un profil</h5>
          <button className="btn-close" onClick={onClose}></button>
        </div>
        <div className="modal-body">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Nom d'utilisateur"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-outline-secondary" onClick={onClose}>
            Annuler
          </button>
          <button className="btn btn-custom" onClick={handleSubmit}>
            modifier
          </button>
        </div>
      </div>
    </div>
  );
}
