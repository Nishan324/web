import React, { useState } from 'react';
import Navbar1 from "./navbar";
import Footer from "./footer";
import Panel from "./panel";
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget odio ac lectus vestibulum faucibus eget in metus.',
    profilePicture: 'https://via.placeholder.com/150'
  });

  const handleFieldChange = (field, value) => {
    setUserData({
      ...userData,
      [field]: value
    });
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData({
          ...userData,
          profilePicture: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateProfile = () => {
    // Add logic to handle profile update
    console.log('Updated profile:', userData);
  };

  return (
    <div>
      <Navbar1 />
      <Panel />

      <div className="container mt-4">
        <h2>User Profile</h2>

        <div className="row">
          <div className="col-md-4">
            {/* Profile Picture */}
            <img
              src={userData.profilePicture}
              alt="Profile"
              className="img-fluid rounded-circle mb-3"
            />
          </div>
          <div className="col-md-8">
            {/* Basic Information */}
            <div className="mb-3">
              <strong>Full Name:</strong>
              <input
                type="text"
                className="form-control"
                value={userData.fullName}
                onChange={(e) => handleFieldChange('fullName', e.target.value)}
              />
            </div>
            <div className="mb-3">
              <strong>Email:</strong>
              <input
                type="email"
                className="form-control"
                value={userData.email}
                onChange={(e) => handleFieldChange('email', e.target.value)}
              />
            </div>

            {/* Bio */}
            <div className="mb-3">
              <strong>Bio:</strong>
              <textarea
                className="form-control"
                value={userData.bio}
                onChange={(e) => handleFieldChange('bio', e.target.value)}
              />
            </div>

            {/* Update Button */}
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleUpdateProfile}
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserProfile;
