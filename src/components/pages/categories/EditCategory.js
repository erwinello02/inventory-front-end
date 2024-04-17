import { useState } from "react";
import Swal from "sweetalert2";
import ApiCategoryRepository from "../../../apiRepository/ApiCategoryRepository";

const EditCategory = ({
  isOpen,
  onClose,
  selectedCategory,
  setIsModalEditOpen,
}) => {
  const categoryUuid = selectedCategory.categoryUuid;
  const [categoryName, setCategoryName] = useState(
    selectedCategory.categoryName
  );
  const [code, setCode] = useState(selectedCategory.code);
  const [description, setDescription] = useState(selectedCategory.description);
  const [image, setImage] = useState(selectedCategory.image);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!categoryName || !code || !description || !image) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const updateCategory = {
      categoryUuid,
      categoryName,
      code,
      description,
      image,
    };

    // for (let i = 0; i < categories.length; i++) {
    //   if (categories[i].id === id) {
    //     categories.splice(i, 1, category);
    //     break;
    //   }
    // }

    // localStorage.setItem("categories_data", JSON.stringify(categories));
    // setCategories(categories);
    // setIsModalEditOpen(false);

    console.log(updateCategory);
    ApiCategoryRepository.updateCategory(updateCategory, {
      headers: {
        "X-USER-NAME": "user1",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: `${categoryName}'s data has been Edited.`,
          showConfirmButton: false,
          timer: 1500,
        });
        setIsModalEditOpen(false);
      })
      .catch((error) => console.error("Error fetching resources:", error));
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
                    htmlFor="categoryName"
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
                    htmlFor="code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Category Code
                  </label>
                  <input
                    type="text"
                    id="code"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                    name="code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Category Description
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

export default EditCategory;
