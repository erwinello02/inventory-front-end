import { useState } from "react";
import Swal from "sweetalert2";

const EditCategory = ({
  isOpen,
  onClose,
  categories,
  selectedCategory,
  setCategories,
  setIsModalEditOpen,
}) => {
  const id = selectedCategory.id;
  const [categoryName, setCategoryName] = useState(
    selectedCategory.categoryName
  );
  const [categoryCode, setCategoryCode] = useState(
    selectedCategory.categoryCode
  );
  const [categoryDesc, setCategoryDesc] = useState(
    selectedCategory.categoryDesc
  );
  const [image, setImage] = useState(selectedCategory.image);
  const [status, setStatus] = useState(selectedCategory.status);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!categoryName || !categoryCode || !categoryDesc || !image || !status) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const category = {
      id,
      categoryName,
      categoryCode,
      categoryDesc,
      image,
      status,
    };

    for (let i = 0; i < categories.length; i++) {
      if (categories[i].id === id) {
        categories.splice(i, 1, category);
        break;
      }
    }

    localStorage.setItem("categories_data", JSON.stringify(categories));
    setCategories(categories);
    setIsModalEditOpen(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${categoryName}'s data has been Edited.`,
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
              <h1 className="text-lg font-semibold mb-4">Add Category</h1>
              <form onSubmit={handleUpdate}>
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Category Name
                  </label>
                  <input
                    type="text"
                    id="categoryName"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                    name="categoryName"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="categoryCode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Category Code
                  </label>
                  <input
                    type="text"
                    id="categoryCode"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                    name="categoryCode"
                    value={categoryCode}
                    onChange={(e) => setCategoryCode(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="categoryDesc"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Category Description
                  </label>
                  <input
                    type="text"
                    id="categoryDesc"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                    name="categoryDesc"
                    value={categoryDesc}
                    onChange={(e) => setCategoryDesc(e.target.value)}
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

export default EditCategory;
