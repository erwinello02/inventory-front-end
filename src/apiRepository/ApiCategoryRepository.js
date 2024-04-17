import axios from "axios";

const BASE_URL = "http://localhost:8080/inventory";

const api = axios.create({
  baseURL: BASE_URL,
});

const ApiCategoryRepository = {
  // Function for creating a new category
  createCategory: (data, headers) => {
    return api.post("/category/add", data, headers);
  },

  // Function for retrieving all category
  getAllCategories: (data) => {
    return api.get("/category", data);
  },

  // Function for retrieving a single category by ID
  getCategoryByUuid: (categoryUuid, headers) => {
    return api.get(`/category/${categoryUuid}`, headers);
  },

  // Function for updating a category
  updateCategory: (data, headers) => {
    return api.patch("/category/update", data, headers);
  },

  // Function for deleting a category
  deleteCategory: (categoryUuid, headers) => {
    return api.delete(`/category/de-activate/${categoryUuid}`, headers);
  },
};

export default ApiCategoryRepository;
