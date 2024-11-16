import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { path: "/", title: "Search" },
    { path: "/my-job", title: "My Job" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post a Job" },
  ];
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4 border-b-2 shadow-lg">
      <nav className="flex items-center justify-between py-6">
        <Link className="flex items-center gap-2 text-2xl text-black" to="/">
          <img
            className="w-10 h-auto bg-cover rounded-full"
            src="https://uploads.vw-mms.de/system/production/images/vwn/030/145/images/7a0d84d3b718c9a621100e43e581278433114c82/DB2019AL01950_web_1600.jpg?1649155356"
            alt=""
          />
          <span>Job Listing Portal</span>
        </Link>
        {/* nav item */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* signup & login  */}
        <div className="text-base font-medium space-x-5 hidden lg:block">
          <Link to="/login" className="py-2 px-5 border rounded">
            Login
          </Link>
          <Link
            to="/login"
            className="py-2 px-5 border rounded bg-blue text-white"
          >
            Sign Up
          </Link>
        </div>
        {/* small device */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggle}>
            {isMenuOpen ? (
              <FaXmark />
            ) : (
              <HiMiniBars3BottomRight className="w-7 h-7 text-primary border shadow-md" />
            )}
          </button>
        </div>
      </nav>
      {/* navitems for small device */}
      <div>
        <ul
          className={`px-4 bg-black py-5 rounded-sm ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-white first:text-white py-1"
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li className="text-white py-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
