import axios from "axios";
import { API_URL } from "../consts/general";

const login = async (username, password) => {
  try {
    const response = await axios.get(`${API_URL}/users`, {
      params: {
        username,
        password,
      },
    });

    if (response.data.length > 0) {
      return response.data[0]; // return user data
    } else {
      throw new Error("Invalid username or password");
    }
  } catch (error) {
    throw new Error("Error during login: " + error.message);
  }
};

export { login };
