import userServiceApi from "./UserServiceApi";

const userService = {
  registerUser: async (username, password) => {
    var response = await userServiceApi.getUserByName(username);
    if (response.length > 0) {
      console.log("Username already exists");
      return Promise.reject(new Error("Username already exists"));
    }
    return userServiceApi.create({ username, password });
  },
  loginUser: async (username, password) => {
    var response = await userServiceApi.getUserByName(username);
    if (response.length === 0) {
      console.log("User not found");
      return Promise.reject(new Error("User not found"));
    }
    if (response[0].password !== password) {
      console.log("Invalid password");
      return Promise.reject(new Error("Invalid password"));
    }
    return response[0];
  }
};

export default userService;
