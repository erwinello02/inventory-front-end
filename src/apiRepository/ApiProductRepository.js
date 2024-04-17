import axios from "axios";

const BASE_URL = "http://localhost:8080/inventory";

const api = axios.create({
  baseURL: BASE_URL,
});

const ApiProductRepository = {
  // Function for creating a new product
  createProduct: (data, headers) => {
    return api.post("/product/add", data, headers);
  },

  // Function for retrieving all product
  getAllProducts: (data) => {
    return api.get("/product", data);
  },

  // Function for retrieving a single product by ID
  getProductByUuid: (productUuid, headers) => {
    return api.get(`/product/${productUuid}`, headers);
  },

  // Function for updating a product
  updateProduct: (data, headers) => {
    return api.patch("/product/update", data, headers);
  },

  // Function for deleting a product
  deleteProduct: (productUuid, headers) => {
    return api.delete(`/product/de-activate/${productUuid}`, headers);
  },
};

export default ApiProductRepository;
