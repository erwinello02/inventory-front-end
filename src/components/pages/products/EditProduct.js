import { useState } from "react";
import Swal from "sweetalert2";

const EditProduct = ({
  isOpen,
  onClose,
  products,
  selectedProduct,
  setProducts,
  setIsModalEditOpen,
}) => {
  const id = selectedProduct.id;
  const [productName, setProductName] = useState(selectedProduct.productName);
  const [category, setCategory] = useState(selectedProduct.category);
  const [subCategory, setSubCategory] = useState(selectedProduct.subCategory);
  const [unit, setUnit] = useState(selectedProduct.unit);
  const [stock, setStock] = useState(selectedProduct.stock);
  const [minimumQty, setMinimumQty] = useState(selectedProduct.minimumQty);
  const [quantity, setQuantity] = useState(selectedProduct.quantity);
  const [description, setDescription] = useState(selectedProduct.description);
  const [tax, setTax] = useState(selectedProduct.tax);
  const [discountType, setDiscountType] = useState(
    selectedProduct.discountType
  );
  const [price, setPrice] = useState(selectedProduct.price);
  const [status, setStatus] = useState(selectedProduct.status);
  const [image, setImage] = useState(selectedProduct.image);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (
      !productName ||
      !category ||
      !subCategory ||
      !unit ||
      !stock ||
      !minimumQty ||
      !quantity ||
      !description ||
      !tax ||
      !discountType ||
      !price ||
      !status ||
      !image
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const product = {
      id,
      productName,
      category,
      subCategory,
      unit,
      stock,
      minimumQty,
      quantity,
      description,
      tax,
      discountType,
      price,
      status,
      image,
    };

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        products.splice(i, 1, product);
        break;
      }
    }

    localStorage.setItem("products_data", JSON.stringify(products));
    setProducts(products);
    setIsModalEditOpen(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${productName}'s data has been Edited.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      {isOpen && (
        <div className="fixed shadow-lg z-20 inset-1 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="relative bg-gray-200 w-1/3 p-5 shadow-lg">
              <button
                className="absolute top-0 right-0 mt-3 mr-3 text-gray-500 hover:text-gray-700"
                onClick={onClose}
              >
                Close
              </button>
              <h1 className="text-lg font-semibold mb-4">Edit Product</h1>
              <form onSubmit={handleUpdate}>
                <div className="mb-4">
                  <label
                    htmlFor="productName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="productName"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                    name="productName"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Category
                  </label>
                  <input
                    type="text"
                    id="category"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="subCategory"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Sub Category
                  </label>
                  <input
                    type="text"
                    id="subCategory"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                    name="subCategory"
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="unit"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Unit
                  </label>
                  <input
                    type="number"
                    id="unit"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                    name="unit"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="stock"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Stock
                  </label>
                  <input
                    type="number"
                    id="stock"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                    name="stock"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="minimumQty"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Minimum Qty
                  </label>
                  <input
                    type="number"
                    id="minimumQty"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                    name="minimumQty"
                    value={minimumQty}
                    onChange={(e) => setMinimumQty(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="tax"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tax
                  </label>
                  <input
                    type="number"
                    id="tax"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                    name="tax"
                    value={tax}
                    onChange={(e) => setTax(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="discountType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Discount Type
                  </label>
                  <input
                    type="text"
                    id="discountType"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                    name="discountType"
                    value={discountType}
                    onChange={(e) => setDiscountType(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Status
                  </label>
                  <input
                    type="text"
                    id="status"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Image
                  </label>
                  <input
                    type="text"
                    id="image"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                    name="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProduct;
