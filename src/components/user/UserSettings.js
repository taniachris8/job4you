import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { useAuth } from "../../services/AuthContext";
import "./UserSettings.css";
import Button from "../Buttons/Button";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { ApiService } from "../../services/ApiService";
import { API_URL } from "../../consts/general";

function UserSettings() {
  const userApiService = new ApiService(API_URL);
  const { user, setUser, login, logout } = useAuth();
  const [isEditing, setIsEditing] = useState({
    name: false,
    familyName: false,
    password: false,
    email: false,
  });
  const [updatedUser, setUpdatedUser] = useState({
    name: user.name,
    familyName: user.familyName,
    email: user.email,
  });
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);

  const navigate = useNavigate();

  const handleEditClick = (field) => {
    setIsEditing({ ...isEditing, [field]: true });
  };

  const handleSaveClick = async (field) => {
    try {
      // const response = await axios.put(
      //   `http://localhost:8080/users/${user.id}`,
      //   { ...updatedUser },

      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );
      const response = await userApiService.updateUser(user._id, updatedUser);
      if (response.status === 200) {
        login({ ...user, [field]: updatedUser[field] }); // Update the specific field in AuthContext
        setIsEditing({ ...isEditing, [field]: false });
      } else {
        console.error("Failed to update user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleDeleteAccount = async () => {
    try {
      //
      // const response = await axios.delete(
      //   `http://localhost:8080/users/${user.id}`
      // );
      const response = await userApiService.deleteUser(user._id);

      if (response.status === 200) {
        logout(); // Log the user out after deletion
        alert("Your account has been deleted.");
        navigate("/login");
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCloseDeleteModal = () => setShowDeleteConfirmModal(false);
  const handleShowDeleteModal = () => setShowDeleteConfirmModal(true);

  const handlePasswordRecovery = () => {
    navigate("/password-recovery");
  };

  return (
    <>
      <div className="users-settings-container">
        <h1 className="settings-title">Settings</h1>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                {isEditing.name ? (
                  <input
                    type="text"
                    name="name"
                    value={updatedUser.name}
                    onChange={handleInputChange}
                  />
                ) : (
                  `${user.name}`
                )}
              </td>
              <td>
                {isEditing.name ? (
                  <Button
                    variant="save"
                    onClick={() => handleSaveClick("name")}
                  >
                    Save
                  </Button>
                ) : (
                  <i
                    className="fa-solid fa-pen-to-square edit-btn"
                    onClick={() => handleEditClick("name")}
                  ></i>
                )}
              </td>
            </tr>
            <tr>
              <td>Family Name</td>
              <td>
                {isEditing.familyName ? (
                  <input
                    type="text"
                    name="familyName"
                    value={updatedUser.familyName}
                    onChange={handleInputChange}
                  />
                ) : (
                  `${user.familyName}`
                )}
              </td>
              <td>
                {isEditing.familyName ? (
                  <Button
                    variant="save"
                    onClick={() => handleSaveClick("familyName")}
                  >
                    Save
                  </Button>
                ) : (
                  <i
                    className="fa-solid fa-pen-to-square edit-btn"
                    onClick={() => handleEditClick("familyName")}
                  ></i>
                )}
              </td>
            </tr>

            <tr>
              <td>Email</td>
              <td>
                {isEditing.email ? (
                  <input
                    type="email"
                    name="email"
                    value={updatedUser.email}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {isEditing.email ? (
                  <Button
                    variant="save"
                    onClick={() => handleSaveClick("email")}
                  >
                    Save
                  </Button>
                ) : (
                  <i
                    className="fa-solid fa-pen-to-square edit-btn"
                    onClick={() => handleEditClick("email")}
                  ></i>
                )}
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="reset-password-wrapper">
          <p>
            If you want to change your password, we will send you an email to
            reset it. To proceed click the button below.
          </p>
          <Button variant="secondary" onClick={handlePasswordRecovery}>
            Reset
          </Button>
        </div>
        <div className="delete-account-wrapper">
          <p>If you want to delete your account, click the button below.</p>
          <Button variant="delete" onClick={handleShowDeleteModal}>
            Delete account
          </Button>
          <DeleteConfirmModal
            handleDeleteAccount={handleDeleteAccount}
            showDeleteConfirmModal={showDeleteConfirmModal}
            handleCloseDeleteModal={handleCloseDeleteModal}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserSettings;
