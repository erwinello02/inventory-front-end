import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { MdOutlineInventory } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import { useState } from "react";
import React from "react";
import { Menus } from "./Menus";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import Logout from "../logout/Logout";

const Sidebar = ({ setIsAuthenticated }) => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`bg-dark-purple  h-screen p-5 pt-8 ${
        open ? "w-72" : "w-20"
      } duration-300 relative`}
    >
      <BsArrowLeftShort
        className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex">
        <MdOutlineInventory
          className={`bg-cyan-400 text-4xl rounded cursor-pointer float-left mr-3 duration-500 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-2xl ${
            !open && "scale-0"
          }`}
        >
          Inventory
        </h1>
      </div>
      <div
        className={`flex items-center rounded-md bg-light-white mt-6 ${
          !open ? "px-2.5" : "px-4"
        } py-2`}
      >
        <BsSearch
          className={`text-white text-lg block float-left cursor-pointer ${
            open && "mr-2"
          }`}
        />
        <input
          type={"search"}
          placeholder="Search"
          className={`text-base bg-transparent w-full text-white focus:outline-none ${
            !open && "hidden"
          }`}
        />
      </div>
      <ul className="pt-2">
        {Menus.map((menu, index) => (
          <>
            <Link to={menu.path}>
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
              >
                <span className="text-base block float-left">
                  {menu.icon ? (
                    menu.icon
                  ) : (
                    <RiDashboardFill
                      className={`text-white text-lg block float-left cursor-pointer ${
                        open && "mr-2"
                      }`}
                    />
                  )}
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          </>
        ))}
        <li
          className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-9`}
        >
          <span className="text-base block float-left">
            <AiOutlineLogout
              className={`text-white text-lg block float-left cursor-pointer ${
                open && "mr-2"
              }`}
            />
          </span>
          <span
            className={`text-base font-medium flex-1 duration-200 ${
              !open && "hidden"
            }`}
          >
            <Logout setIsAuthenticated={setIsAuthenticated} />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
