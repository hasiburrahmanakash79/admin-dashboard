import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaUser, FaHome, FaComment, FaAngleDown } from "react-icons/fa";
import { AiFillNotification } from "react-icons/ai";
import {
  FaImages,
  FaMagnifyingGlass,
  FaRegBell,
  FaRegMessage,
} from "react-icons/fa6";
import { MdHomeWork } from "react-icons/md";
import { IconContext } from "react-icons";
import arrow from "../../assets/arrow.png";
import { Avatar, FormControlLabel, Switch } from "@mui/material";

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  const isAdmin = true;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const iconMappings = {
    RoleHome: MdHomeWork,
    Users: FaUser,
    Home: FaHome,
    Photos: FaImages,
    Blog: FaComment,
    Notice: AiFillNotification,
  };

  const Menus = [
    {
      title: "Dashboard",
      path: "/",
      icon: iconMappings.RoleHome,
      role: "admin",
      gap: true,
    },
    {
      title: "Users",
      path: "/dashboard/manageUsers",
      icon: iconMappings.Users,
      role: "admin",
    },
    {
      title: "Create Features",
      path: "/dashboard/createFeature",
      icon: iconMappings.Notice,
      role: "admin",
    },
    {
      title: "Add Blog",
      path: "/dashboard/addBlog",
      icon: iconMappings.Blog,
      role: "admin",
    },
    {
      title: "Add Photo Gallery",
      path: "/dashboard/addPhoto",
      icon: iconMappings.Photos,
      role: "admin",
    },
    {
      title: "Home ",
      path: "/",
      icon: iconMappings.Home,
      role: "general",
      gap: true,
    },
  ];

  const adminMenus = Menus.filter((menu) => menu.role === "admin");
  const userMenus = Menus.filter((menu) => menu.role === "user");
  const generalMenus = Menus.filter((menu) => menu.role === "general");

  return (
    <div className="flex">
      {/* Dashboard Sidebar content */}
      <div
        className={` ${
          open ? "w-56 p-4" : "w-14 text-center"
        }   h-screen text-white fixed left-0 top-0 bottom-0 bg-gray-900 z-50 pt-8  duration-500 transition-all`}
      >
        <img
          src={arrow}
          className={`absolute cursor-pointer -right-3 top-9 w-7  
			 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <ul
          className={` ${
            open ? "" : "flex flex-col items-center justify-center"
          }`}
        >
          {isAdmin
            ? adminMenus.map((Menu, index) => (
                <Link
                  to={Menu.path}
                  key={index}
                  className={`flex rounded-md p-2 cursor-pointer hover: hover:bg-slate-800 text-sm items-center gap-x-4 ${
                    Menu.gap ? "mt-9" : "mt-2"
                  } ${index === 0 && " hover:bg-blue-400"}`}
                >
                  <li className="flex items-center gap-x-4">
                    <IconContext.Provider value={{ className: "react-icon" }}>
                      <Menu.icon />
                    </IconContext.Provider>
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200`}
                    >
                      {Menu.title}
                    </span>
                  </li>
                </Link>
              ))
            : // User menus
              userMenus.map((Menu, index) => (
                <Link
                  to={Menu.path}
                  key={index}
                  className={`flex rounded-md p-2 cursor-pointer hover: hover:bg-primary text-sm items-center gap-x-4 ${
                    Menu.gap ? "mt-9" : "mt-2"
                  } ${index === 0 && " hover:bg-blue-400"}`}
                >
                  <li className="flex items-center gap-x-4">
                    <IconContext.Provider value={{ className: "react-icon" }}>
                      <Menu.icon />
                    </IconContext.Provider>
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200`}
                    >
                      {Menu.title}
                    </span>
                  </li>
                </Link>
              ))}
          {generalMenus.map((Menu, index) => (
            <Link
              to={Menu.path}
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover: hover:bg-slate-800  text-sm items-center gap-x-4 ${
                Menu.gap ? "mt-9" : "mt-2"
              } ${index === 0 && " hover:bg-primary"}`}
            >
              <li className="flex items-center gap-x-4">
                <IconContext.Provider value={{ className: "react-icon" }}>
                  <Menu.icon />
                </IconContext.Provider>
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* Dashboard main content */}
      <div
        className={` ${
          open ? "pl-56" : "pl-14"
        }  flex-1  overflow-y-auto  duration-500 transition-all h-[100vh] ${
          isAdmin ? "" : ""
        }`}
      >
        <div className="p-5 shadow-lg border-b flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <FaMagnifyingGlass />
            <input type="text" placeholder="Type here" />
          </div>
          <div className="flex items-center gap-5">
            <FormControlLabel control={<Switch defaultChecked />} />
            <FaRegBell className="link hover:scale-150 duration-500"/>
            <FaRegMessage className="mx-5 link hover:scale-150 duration-500"/>
            <Link to='/dashboard/profile' className="flex items-center gap-4 link no-underline">
              <div className="text-end">
                <h1 className="font-semibold text-sm">Hasibur Rahman</h1>
                <p className="text-xs">Web Developer</p>
              </div>
              <Avatar
                alt="Akash"
                src="https://i.ibb.co/10p5JRc/1704294431371.jpg"
                sx={{ width: 40, height: 40 }}
              />
              <FaAngleDown/>
            </Link>
          </div>
        </div>
        <div className="bg-slate-100 h-full p-7">
        <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;