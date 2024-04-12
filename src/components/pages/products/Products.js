import React, { useEffect, useState } from "react";
import { productsData } from "./productsData";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import Swal from "sweetalert2";

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState(productsData);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products_data"));
    if (data !== null && Object.keys(data).length !== 0) setProducts(data);
  }, []);

  const handleEdit = (id) => {
    const [product] = products.filter((product) => product.id === id);
    setSelectedProduct(product);
    setIsModalEditOpen(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [product] = products.filter((product) => product.id === id);

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${product.productName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const productsCopy = products.filter((product) => product.id !== id);
        localStorage.setItem("users_data", JSON.stringify(productsCopy));
        setProducts(productsCopy);
      }
    });
  };

  return (
    <div className="products">
      <div className="p-7">
        <div className="container shadow-lg mb-5">
          <h1 className="text-2xl pt-2 pl-5 pb-2 font-semibold">
            Product Management
          </h1>
          <div className="pt-1 pl-5 pb-5">
            <button
              class="bg-dark-purple hover:bg-cyan-700 text-white font-bold rounded py-2 px-7"
              onClick={() => setIsModalOpen(true)}
            >
              Add Product
            </button>
            <AddProduct
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              products={products}
              setProducts={setProducts}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
        <div class="relative shadow-lg">
          <table class="w-auto">
            <thead>
              <tr class="bg-gray-200">
                <th class="border text-md px-2.5 py-1">ID</th>
                <th class="border text-md px-2.5 py-1">Product Name</th>
                <th class="border text-md px-2.5 py-1">Category</th>
                <th class="border text-md px-2.5 py-1">Sub Category</th>
                <th class="border text-md px-2.5 py-1">Unit</th>
                <th class="border text-md px-2.5 py-1">Stock</th>
                <th class="border text-md px-2.5 py-1">Minimun Qty</th>
                <th class="border text-md px-2.5 py-1">Quantity</th>
                <th class="border text-md px-2.5 py-1">Description</th>
                <th class="border text-md px-2.5 py-1">Tax</th>
                <th class="border text-md px-2.5 py-1">Discount type</th>
                <th class="border text-md px-2.5 py-1">Price</th>
                <th class="border text-md px-2.5 py-1">Status</th>
                <th class="border text-md px-2.5 py-1">Image</th>
                <th class="border text-md px-2.5 py-1">Action</th>
              </tr>
            </thead>
            <tbody>
              {productsData.map((product, i) => (
                <tr key={product.id}>
                  <td class="border text-md px-2.5 py-1">{i + 1}</td>
                  <td class="border text-md px-2.5 py-1">
                    {product.productName}
                  </td>
                  <td class="border text-md px-2.5 py-1">{product.category}</td>
                  <td class="border text-md px-2.5 py-1">
                    {product.subCategory}
                  </td>
                  <td class="border text-md px-2.5 py-1">{product.unit}</td>
                  <td class="border text-md px-2.5 py-1">{product.stock}</td>
                  <td class="border text-md px-2.5 py-1">
                    {product.minimumQty}
                  </td>
                  <td class="border text-md px-2.5 py-1">{product.quantity}</td>
                  <td class="border text-md px-2.5 py-1">
                    {product.description}
                  </td>
                  <td class="border text-md px-2.5 py-1">{product.tax}</td>
                  <td class="border text-md px-2.5 py-1">
                    {product.discountType}
                  </td>
                  <td class="border text-md px-2.5 py-1">{product.price}</td>
                  <td class="border text-md px-2.5 py-1">{product.status}</td>
                  <td class="border text-md px-2.5 py-1">{product.image}</td>
                  <td class="border text-md px-2.5 py-1">
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-2.5"
                      onClick={() => handleEdit(product.id)}
                    >
                      Edit
                    </button>
                    {isModalEditOpen && (
                      <EditProduct
                        isOpen={isModalEditOpen}
                        onClose={() => setIsModalEditOpen(false)}
                        products={products}
                        selectedProduct={selectedProduct}
                        setProducts={setProducts}
                        setIsModalEditOpen={setIsModalEditOpen}
                      />
                    )}
                    <button
                      class="bg-red-500 hover:bg-red-700 text-white font-bold py-1.5 px-2.5"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
