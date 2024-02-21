import { useEffect, useState } from "react";

const Switcher = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("isDarkMode");
    return storedTheme ? storedTheme === "true" : false;
  });

  useEffect(() => {
    if (toggleDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("isDarkMode", String(toggleDarkMode));
  }, [toggleDarkMode]);

  return (
    <>
      <label className="relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={toggleDarkMode}
          onChange={() => setToggleDarkMode((prev) => !prev)}
          className="sr-only"
          id="toggleDark"
        />
        <div className="ring-1 ring-gray-300 flex h-[35px] w-[70px] items-center justify-center rounded-full bg-white">
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              !toggleDarkMode ? "bg-orange-600 text-white" : "text-black"
            }`}
          >
            <i className="fa-regular fa-sun"></i>
          </span>
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              toggleDarkMode ? "bg-blue-900 text-white" : "text-black"
            }`}
          >
            <i className="fa-regular fa-moon"></i>
          </span>
        </div>
      </label>
    </>
  );
};

export default Switcher;
