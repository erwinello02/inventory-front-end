import React from 'react'
import { categoriesData } from './categoriesData'

function Categories() {
  return (
    <div className="categories">
      <div className="p-7">
        <div className="container shadow-lg mb-5">
            <h1 className="text-2xl pt-2 pl-5 pb-2 font-semibold">Category Management</h1>
            <div className="pt-1 pl-5 pb-5">
            <button class="bg-dark-purple hover:bg-cyan-700 text-white font-bold rounded py-2 px-7">
                Add Category
            </button>
            </div>
        </div>
        <div class="relative w-full flex flex-col shadow-lg md-6 overflow-x-auto">
          <table class="w-auto">
            <thead>
              <tr class="bg-gray-200">
                <th class="border text-md px-5 py-1.5">ID</th>
                <th class="border text-md px-5 py-1.5">Category code</th>
                <th class="border text-md px-5 py-1.5">Description</th>
                <th class="border text-md px-5 py-1.5">Image</th>
                <th class="border text-md px-5 py-1.5">Status</th>
                <th class="border text-md px-5 py-1.5">Action</th>
              </tr>
            </thead>
            <tbody>
              {categoriesData.map((cat, i) => (
                <tr key={cat.id}>
                  <td class="border text-md px-5 py-1.5">{i + 1}</td>
                  <td class="border text-md px-5 py-1.5">{cat.categoryCode}</td>
                  <td class="border text-md px-5 py-1.5">{cat.categoryDesc}</td>
                  <td class="border text-md px-5 py-1.5">{cat.image}</td>
                  <td class="border text-md px-5 py-1.5">{cat.status}</td>
                  <td class="border text-md px-5 py-1.5">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3.5 mr-2">
                      Edit
                    </button>
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1.5 px-3.5">
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
  )
}

export default Categories
