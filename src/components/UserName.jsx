import { useEffect, useState } from "react";
import { getUserData } from "../api/api.js";
import PropTypes from "prop-types";


function UserName({ userId }) {
  const [userName, setUserName] = useState(""); // State to store the user's name

  useEffect(() => {
    const fetchUserName = async () => {
      const data = await getUserData(userId); // Fetch user data by ID
      setUserName(data.data.userInfos.firstName); // Set the user's name
    };

    fetchUserName(); // Call the function when the component mounts
  }, [userId]); // Re-run when userId changes


  return <h2>{userName}</h2>; // Display the user's name
}

export default UserName;

UserName.propTypes = {
  userId: PropTypes.number.isRequired, // userId должен быть числом и является обязательным
};
