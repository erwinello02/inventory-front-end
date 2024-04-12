import React, { useState } from 'react'
import Swal from 'sweetalert2';

const EditUser = ({ isOpen, onClose, users, selectedUser, setUsers, setIsModalEditOpen }) => {

    const id = selectedUser.id;

    const [firstName, setFirstName] = useState(selectedUser.firstName);
    const [middleName, setMiddleName] = useState(selectedUser.middleName);
    const [lastName, setLastName] = useState(selectedUser.lastName);
    const [email, setEmail] = useState(selectedUser.email);
    const [age, setAge] = useState(selectedUser.age);
    const [dob, setDob] = useState(selectedUser.dob);
    const [gender, setGender] = useState(selectedUser.gender);
    const [userName, setUserName] = useState(selectedUser.userName);
  
    const handleUpdate = e => {
        e.preventDefault();
    
        if (!firstName || !lastName || !email || !age || !dob || !gender || !userName) {
          return Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'All fields are required.',
            showConfirmButton: true,
          });
        }
    
        const user = {
            id,
            firstName,
            middleName,
            lastName,
            email,
            age,
            dob,
            gender,
            userName,
          };

          for (let i = 0; i < users.length; i++) {
            if (users[i].id === id) {
              users.splice(i, 1, user);
              break;
            }
          }


        localStorage.setItem('users_data', JSON.stringify(users));
        setUsers(users);
        setIsModalEditOpen(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${firstName} ${middleName} ${lastName}'s data has been Edited.`,
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
                <h1 className="text-lg font-semibold mb-4">Edit User</h1>
                <form onSubmit={handleUpdate}>
                  <div className="mb-4">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                      name="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">Middle Name</label>
                    <input
                      type="text"
                      id="middleName"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                      name="middleName"
                      value={middleName}
                      onChange={(e) => setMiddleName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                      name="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                    <input
                      type="number"
                      id="age"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                      name="age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of birth</label>
                    <input
                      type="date"
                      id="dob"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                      name="dob"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                    <input
                      type="text"
                      id="gender"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                      name="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                      type="text"
                      id="userName"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                      name="userName"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Update</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

export default EditUser
