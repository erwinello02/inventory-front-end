import { useState } from "react";
import Swal from "sweetalert2";
import ApiUserRepository from "../../../apiRepository/ApiUserRepository";

const AddUser = ({ isOpen, onClose, setIsModalOpen }) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [userName, setUserName] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (
      !firstName ||
      !middleName ||
      !lastName ||
      !email ||
      !age ||
      !dob ||
      !gender ||
      !userName
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    let newUser = {
      firstName,
      middleName,
      lastName,
      email,
      age: Number(age),
      dob: new Date(dob),
      gender,
      userName,
    };

    ApiUserRepository.createUser(newUser, {
      headers: {
        "X-USER-NAME": "user1",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        Swal.fire({
          icon: "success",
          title: "Added!",
          text: `${firstName} ${middleName} ${lastName}'s data has been Added.`,
          showConfirmButton: false,
          timer: 1500,
        });
        setIsModalOpen(false);
      })
      .catch((error) =>
        console.error("Error fetching resources:", error.response)
      );
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
              <h1 className="text-lg font-semibold mb-4">Add User</h1>
              <form onSubmit={handleAdd}>
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
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
                  <label
                    htmlFor="middleName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Middle Name
                  </label>
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
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
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
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
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
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Age
                  </label>
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
                  <label
                    htmlFor="dob"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date of birth
                  </label>
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
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-md border-gray-300 h-7"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="userName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
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
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Add
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

export default AddUser;
