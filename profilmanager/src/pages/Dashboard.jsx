import { useState, useMemo } from 'react';
import AddProfileModal from '../components/AddProfileModal';
import '../Dashboard.css';
import ViewProfileModal from '../components/ViewProfileModal';
import UpdateProfileModal from '../components/UpdateProfileModal';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {

  const [profiles, setProfiles] = useState([]);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showEditModal, setShowEditModal] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const navigate = useNavigate();

  const itemsPerPage = 5;


  const handleAddProfile = (profile) => {
    setProfiles([...profiles, { ...profile, id: Date.now() }]);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setProfiles(profiles.filter(p => p.id !== id));
  };

  const handleLogout = () => {
    navigate('/');
  };


  const handleEditProfile = (profile) => {
    console.log(profile);
    setProfiles(profiles.map(p => (p.id === profile.id ? { ...p, ...profile } : p)));
    setShowEditModal(null);
  };

  const filteredProfiles = useMemo(() => {
    return profiles.filter(p =>
      p.username.toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, profiles]);


  const totalPages = Math.ceil(filteredProfiles.length / itemsPerPage);
  const paginatedProfiles = filteredProfiles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="dashboard-container container mt-5 p-4 shadow rounded ">
      <button
      className="btn btn-outline-secondary btn-sm btn-danger mb-3 text-white"
       onClick={handleLogout}>
      Deconnection
    </button>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-teal">Gestion des Profils</h2>
        <button className="btn btn-custom" onClick={() => setShowModal(true)}>
          Ajouter un profil
        </button>
      </div>

      <input
        type="text"
        placeholder="Rechercher par nom ou email..."
        className="form-control mb-3"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1); // Reset pagination
        }}
      />

      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-teal text-white">
            <tr>
              <th>Photo</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProfiles.length > 0 ? (
              paginatedProfiles.map(profile => (
                <tr key={profile.id}>
                  <td>
                    <img
                      src={`https://i.pravatar.cc/50?u=${profile.email}`}
                      alt="avatar"
                      className="rounded-circle"
                    />
                  </td>
                  <td>{profile.username}</td>
                  <td>{profile.email}</td>
                  <td>
                    <button
                      className="btn btn-outline-info btn-sm me-2"
                      onClick={() => setSelectedProfile(profile)}
                    >
                      Voir
                    </button>
                    <button
                      className="btn btn-outline-danger btn-sm me-2"
                      onClick={() => handleDelete(profile.id)}
                    >
                      Supprimer
                    </button>
                    <button
                      className="btn btn-outline-warning btn-sm"
                      onClick={() => setShowEditModal(profile)}
                    >
                      Modifier
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="4" className="text-center">Aucun profil trouvé.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-3">
          <nav>
            <ul className="pagination">
              {Array.from({ length: totalPages }, (_, i) => (
                <li key={i} className={`page-item ${i + 1 === currentPage ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                    {i + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {showModal && <AddProfileModal onClose={() => setShowModal(false)} onAdd={handleAddProfile} />}
      {selectedProfile && (
        <ViewProfileModal
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}
      {showEditModal && (
        <UpdateProfileModal
          data={showEditModal}
          onClose={() => setShowEditModal(null)}
          onUpdate={handleEditProfile}
        />
      )}
      
    </div>
  );
}
