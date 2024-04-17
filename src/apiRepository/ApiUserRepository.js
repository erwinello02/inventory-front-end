import axios from "axios";

const BASE_URL = "http://localhost:8080/inventory";

const api = axios.create({
  baseURL: BASE_URL,
});

const ApiUserRepository = {
  // Function for creating a new User
  createUser: (data, headers) => {
    return api.post("/user/add", data, headers);
  },

  // Function for retrieving all User
  getAllUsers: (data) => {
    return api.get("/user", data);
  },

  // Function for retrieving a single User by ID
  getUserByUuid: (userUuid, headers) => {
    return api.get(`/user/${userUuid}`, headers);
  },

  // Function for updating a User
  updateUser: (data, headers) => {
    return api.patch("/user/update", data, headers);
  },

  // Function for deleting a User
  deleteUser: (userUuid, headers) => {
    return api.delete(`/user/de-activate/${userUuid}`, headers);
  },
};

export default ApiUserRepository;
