import { useState } from "react";
import { navSidebar } from "../../assets/Data/Data";
import Switcher from "../UI/Switcher";

import Burger from "../../assets/burger.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className="absolute padding-x !px-2 z-10 w-full ">
      <nav className="max-container flex justify-between items-center py-4 dark:border-b-[1px] dark:border-zinc-900 dark:rounded-b-lg dark:duration-300">
        <div className="flex justify-center items-center">
          <i
            className="fa-solid fa-bars fa-lg cursor-pointer dark:text-white"
            onClick={() => setNav(!nav)}
          ></i>
          <h1 className="flex justify-center items-center gap-1 sm:mb-0 text-2xl sm:text-3xl px-2 dark:text-white/90 ">
            Best
            <img src={Burger} className="h-8" alt="BestEats Logo" />
            <span className="font-bold">Eats</span>
          </h1>
          <div className="hidden lg:flex justify-center items-center bg-gray-200 rounded-full pr-[10px] ">
            <p className="p-2 bg-black dark:bg-orange-600 text-white rounded-full mr-1">
              Delivery
            </p>
            <p>Pickup</p>
          </div>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-gray-200 rounded-full flex items-center px-2 w-[100px] sm:w-[250px] lg:w-[450px]"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            className="bg-transparent p-2 focus:outline-none max-[450px]:text-[8px] max-[450px]:font-bold"
            placeholder="Search Foods"
            type="search"
            name="searchMeal"
            id="searchMeal"
          />
        </form>
        <div className="flex gap-4">
          <button
            type="button"
            className="bg-black text-white hidden md:flex justify-center items-center rounded-full text-[20px] hover:scale-[1.15] duration-300 dark:bg-white dark:text-black"
          >
            <i className="fa-solid fa-cart-shopping fa-sm mr-1"></i>
            Cart
          </button>
          <Switcher />
        </div>
        {/* Side Drawer & Overlay */}
        {nav && (
          <div
            onClick={() => setNav(!nav)}
            className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"
          ></div>
        )}
        {nav && (
          <div
            className={`fixed w-[350px] max-[450px]:w-[250px] h-screen left-0 top-0 bg-white z-10 duration-200 dark:bg-black ${
              nav ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-row-reverse items-center justify-between mt-2">
              <i
                className="fa-solid fa-xmark fa-xl mr-4 cursor-pointer dark:text-white"
                onClick={() => setNav(!nav)}
              ></i>
              <h2 className="text-2xl ml-4 dark:text-white">
                Best <span className="font-bold">Eats</span>
              </h2>
            </div>
            <div className="hidden max-sm:flex justify-start items-center my-5 ml-3">
              <button
                type="button"
                className="bg-black text-white flex justify-center items-center rounded-full text-[20px] hover:scale-[1.15] duration-300 dark:bg-white dark:text-black"
              >
                <i className="fa-solid fa-cart-shopping fa-sm mr-1"></i>
                Cart
              </button>
            </div>
            <ul className="flex flex-col text-gray-800 dark:text-gray-200">
              {navSidebar.map((el) => (
                <li
                  key={el.id}
                  className="cursor-pointer text-xl flex items-center p-4 gap-8 transition-all duration-300 hover:translate-x-4 hover:text-gray-950"
                >
                  <i className={`fa-solid fa-${el.icon} fa-lg w-[20px]`}></i>
                  <p>{el.text}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Side Drawer & Overlay */}
      </nav>
    </header>
  );
};

export default NavBar;
