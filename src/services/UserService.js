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
};

export default userService;
