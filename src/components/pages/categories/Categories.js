import React, { useEffect, useState } from "react";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";
import ApiCategoryRepository from "../../../apiRepository/ApiCategoryRepository";
import Swal from "sweetalert2";

const Categories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  useEffect(() => {
    ApiCategoryRepository.getAllCategories({
      headers: {
        "X-USER-NAME": "user1",
        "Content-Type": "application/json",
      },
      params: {
        pageNumber: 1,
        pageSize: 200,
        sort: "DESC",
      },
    })
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      })
      .catch((error) => console.error("Error fetching resources:", error));
  }, []);

  const handleEdit = (categoryUuid) => {
    ApiCategoryRepository.getCategoryByUuid(categoryUuid, {
      headers: {
        "X-USER-NAME": "user1",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.data);
        setSelectedCategory(response.data);
        setIsModalEditOpen(true);
      })
      .catch((error) => console.error("Error fetching resources:", error));
  };

  const handleDelete = (categoryUuid) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        ApiCategoryRepository.deleteCategory(categoryUuid, {
          headers: {
            "X-USER-NAME": "user1",
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            console.log(response.data);
            const category = response.data;
            Swal.fire({
              icon: "success",
              title: "Deleted!",
              text: `${category.categoryName}'s data has been deleted.`,
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => console.error("Error fetching resources:", error));
      }
    });
  };

  return (
    <div className="categories">
      <div className="p-7">
        <div className="container shadow-lg mb-5">
          <h1 className="text-2xl pt-2 pl-5 pb-2 font-semibold">
            Category Management
          </h1>
          <div className="pt-1 pl-5 pb-5">
            <button
              class="bg-dark-purple hover:bg-cyan-700 text-white font-bold rounded py-2 px-7"
              onClick={() => setIsModalOpen(true)}
            >
              Add Category
            </button>
            <AddCategory
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
        <div class="relative w-full flex flex-col shadow-lg md-6 overflow-x-auto">
          <table class="w-auto">
            <thead>
              <tr class="bg-gray-200">
                <th class="border text-md px-5 py-1.5">ID</th>
                <th class="border text-md px-5 py-1.5">Category Name</th>
                <th class="border text-md px-5 py-1.5">Category Code</th>
                <th class="border text-md px-5 py-1.5">Description</th>
                <th class="border text-md px-5 py-1.5">Image</th>
                <th class="border text-md px-5 py-1.5">Status</th>
                <th class="border text-md px-5 py-1.5">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.results ? (
                categories.results.map((cat) => (
                  <tr key={cat.categoryId}>
                    <td class="border text-md px-5 py-1.5">{cat.categoryId}</td>
                    <td class="border text-md px-5 py-1.5">
                      {cat.categoryName}
                    </td>
                    <td class="border text-md px-5 py-1.5">{cat.code}</td>
                    <td class="border text-md px-5 py-1.5">
                      {cat.description}
                    </td>
                    <td class="border text-md px-5 py-1.5">{cat.image}</td>
                    <td class="border text-md px-5 py-1.5">{cat.status}</td>
                    <td class="border text-md px-5 py-1.5">
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3.5 mr-2"
                        onClick={() => handleEdit(cat.categoryUuid)}
                      >
                        Edit
                      </button>
                      {isModalEditOpen && (
                        <EditCategory
                          isOpen={isModalEditOpen}
                          onClose={() => setIsModalEditOpen(false)}
                          selectedCategory={selectedCategory}
                          setIsModalEditOpen={setIsModalEditOpen}
                        />
                      )}
                      <button
                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-1.5 px-3.5"
                        onClick={() => handleDelete(cat.categoryUuid)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" class="text-center py-1.5">
                    No categories found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Categories;
