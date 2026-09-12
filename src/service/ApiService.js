import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

const apiService = {
  registerUser: async (username, password) => {
    console.log("Registering user 1:", username);
    return await axios
      .post(`${API_BASE_URL}/users`, { username, password })
      .then((response) => {
        console.log("User registered successfully:", response.data);
        return response.data;
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        throw error;
      });
  },
};

export default apiService;
