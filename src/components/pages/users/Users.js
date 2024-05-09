import React, { useState, useEffect } from "react";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import Swal from "sweetalert2";
import ApiUserRepository from "../../../apiRepository/ApiUserRepository";

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);

  const handleEdit = (userUuid) => {
    ApiUserRepository.getUserByUuid(userUuid, {
      headers: {
        "X-USER-NAME": "user1",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.data);
        setSelectedUser(response.data);
        setIsModalEditOpen(true);
      })
      .catch((error) => console.error("Error fetching resources:", error));
  };

  const handleDelete = (userUuid) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        ApiUserRepository.deleteUser(userUuid, {
          headers: {
            "X-USER-NAME": "user1",
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            console.log(response.data);
            const user = response.data;
            Swal.fire({
              icon: "success",
              title: "Deleted!",
              text: `${user.firstName} ${user.middleName} ${user.lastName}'s data has been deleted.`,
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => console.error("Error fetching resources:", error));
      }
    });
  };

  const fetchUsers = async () => {
    try{
      const response = ApiUserRepository.getAllUsers({
          headers: {
            "X-USER-NAME": "user1",
            "Content-Type": "application/json",
          },
          params: {
            pageNumber: 1,
            pageSize: 200,
            sort: "DESC",
          },
        });
        console.log((await response).data);
        setUsers((await response).data);

    } catch(error){
      console.error("Error fetching resources:", error)
    }
  }

  useEffect(() => {
    fetchUsers();
    // // Get all users API
    // ApiUserRepository.getAllUsers({
    //   headers: {
    //     "X-USER-NAME": "user1",
    //     "Content-Type": "application/json",
    //   },
    //   params: {
    //     pageNumber: 1,
    //     pageSize: 200,
    //     sort: "DESC",
    //   },
    // })
    //   .then((response) => {
    //     console.log(response.data);
    //     setUsers(response.data);
    //   })
    //   .catch((error) => console.error("Error fetching resources:", error));
  }, []);

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
              setIsModalOpen={setIsModalOpen}
              fetchUser={fetchUsers}
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
                <th class="border text-md px-3.5 py-1.5">Status</th>
                <th class="border text-md px-3.5 py-1.5">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.results ? (
                users.results.map((user) => (
                  <tr key={user.userId}>
                    <td class="border text-md px-3.5 py-1.5">{user.userId}</td>
                    <td class="border text-md px-3.5 py-1.5">
                      {user.firstName}
                    </td>
                    <td class="border text-md px-3.5 py-1.5">
                      {user.middleName}
                    </td>
                    <td class="border text-md px-3.5 py-1.5">
                      {user.lastName}
                    </td>
                    <td class="border text-md px-3.5 py-1.5">{user.email}</td>
                    <td class="border text-md px-3.5 py-1.5">{user.age}</td>
                    <td class="border text-md px-3.5 py-1.5">{user.dob}</td>
                    <td class="border text-md px-3.5 py-1.5">{user.gender}</td>
                    <td class="border text-md px-3.5 py-1.5">
                      {user.userName}
                    </td>
                    <td class="border text-md px-3.5 py-1.5">{user.status}</td>
                    <td class="border text-md px-3.5 py-1.5">
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3.5 mr-2"
                        onClick={() => handleEdit(user.userUuid)}
                      >
                        Edit
                      </button>
                      {isModalEditOpen && (
                        <EditUser
                          isOpen={isModalEditOpen}
                          onClose={() => setIsModalEditOpen(false)}
                          selectedUser={selectedUser}
                          setIsModalEditOpen={setIsModalEditOpen}
                          fetchUser={fetchUsers}
                        />
                      )}
                      <button
                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-1.5 px-3.5"
                        onClick={() => handleDelete(user.userUuid)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="12" class="text-center py-1.5">
                    No users found
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

export default Users;
