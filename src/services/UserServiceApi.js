const API_BASE_URL = "http://localhost:3001";

const userServiceApi = {
  create: async (user) => {
    return await fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  },
  getUserByName: async (username) => {
    return await fetch(`${API_BASE_URL}/users?username=${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
  },
};

export default userServiceApi;
