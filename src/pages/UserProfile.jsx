// src/pages/UserProfile.jsx
import { useParams } from "react-router-dom";
function UserProfile() {
  const { username } = useParams();
  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {username}</p>
      {/* You can add more logic here to fetch user data based on the username */}
    </div>
  );
}

export default UserProfile;
