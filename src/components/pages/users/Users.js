import React, { useState } from "react";
import { usersData } from "./usersData";
import AddUser from "./AddUser";

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState(usersData);

  return (
    <div className="users">
      <div className="p-7">
        <div className="container shadow-lg mb-5">
          <h1 className="text-2xl pt-2 pl-5 pb-2 font-semibold">
            User Management
          </h1>
          <div className="pt-1 pl-5 pb-5">
            <button
              class="bg-dark-purple hover:bg-cyan-700 text-white font-bold rounded py-2 px-7"
              onClick={() => setIsModalOpen(true)}
            >
              Add User
            </button>
            <AddUser
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              users={users}
              setUsers={setUsers}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
        <div class="relative w-full flex flex-col shadow-lg md-6 overflow-x-auto">
          <table class="w-auto">
            <thead>
              <tr class="bg-gray-200">
                <th class="border text-md px-3.5 py-1.5">ID</th>
                <th class="border text-md px-3.5 py-1.5">First Name</th>
                <th class="border text-md px-3.5 py-1.5">Middle Name</th>
                <th class="border text-md px-3.5 py-1.5">Last Name</th>
                <th class="border text-md px-3.5 py-1.5">Email</th>
                <th class="border text-md px-3.5 py-1.5">Age</th>
                <th class="border text-md px-3.5 py-1.5">Date of Birth</th>
                <th class="border text-md px-3.5 py-1.5">Gender</th>
                <th class="border text-md px-3.5 py-1.5">Username</th>
                <th class="border text-md px-3.5 py-1.5">Action</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user, i) => (
                <tr key={user.id}>
                  <td class="border text-md px-3.5 py-1.5">{i + 1}</td>
                  <td class="border text-md px-3.5 py-1.5">{user.firstName}</td>
                  <td class="border text-md px-3.5 py-1.5">
                    {user.middleName}
                  </td>
                  <td class="border text-md px-3.5 py-1.5">{user.lastName}</td>
                  <td class="border text-md px-3.5 py-1.5">{user.email}</td>
                  <td class="border text-md px-3.5 py-1.5">{user.age}</td>
                  <td class="border text-md px-3.5 py-1.5">{user.dob}</td>
                  <td class="border text-md px-3.5 py-1.5">{user.gender}</td>
                  <td class="border text-md px-3.5 py-1.5">{user.userName}</td>
                  <td class="border text-md px-3.5 py-1.5">
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
  );
};

export default Users;
