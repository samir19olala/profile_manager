// src/components/ViewProfileModal.jsx
import '../ViewProfileModal.css';

export default function ViewProfileModal({ profile, onClose }) {
  return (
    <div className="modal-backdrop-custom d-flex justify-content-center align-items-center">
      <div className="modal-dialog-custom bg-white rounded shadow-lg p-4 animate-fadeIn">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-teal fw-bold">Détails du profil</h5>
          <button className="btn-close" onClick={onClose}></button>
        </div>
        <div className="text-center">
          <img
            src={`https://i.pravatar.cc/100?u=${profile.email}`}
            alt="Avatar"
            className="rounded-circle border border-teal p-1 mb-3"
          />
          <h4>{profile.username}</h4>
          <p className="text-muted">{profile.email}</p>
        </div>
      </div>
    </div>
  );
}
