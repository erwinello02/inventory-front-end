import { AiOutlineUser } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { CgProductHunt } from "react-icons/cg";

export const Menus = [
  { title: "Dashboard", path: "/dashboard" },
  {
    title: "Users",
    path: "/users",
    icon: (
      <AiOutlineUser className="text-white text-lg block float-left cursor-pointer mr-2" />
    ),
  },
  {
    title: "Categories",
    path: "/categories",
    icon: (
      <BiCategory className="text-white text-lg block float-left cursor-pointer mr-2" />
    ),
  },
  {
    title: "Products",
    path: "/products",
    icon: (
      <CgProductHunt className="text-white text-lg block float-left cursor-pointer mr-2" />
    ),
  },
];
