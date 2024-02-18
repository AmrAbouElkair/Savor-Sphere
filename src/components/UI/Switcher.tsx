import { useEffect, useState } from "react";

const Switcher = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      if (isChecked) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    const toggleDark = document.getElementById("toggleDark")!;
    toggleDark.addEventListener("change", handleClick);

    return () => {
      toggleDark.removeEventListener("change", handleClick);
    };
  }, [isChecked]);

  return (
    <>
      <label className="relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className="sr-only"
          id="toggleDark"
        />
        <div className="ring-1 ring-gray-300 flex h-[35px] w-[70px] items-center justify-center rounded-full bg-white">
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              !isChecked ? "bg-orange-600 text-white" : "text-black"
            }`}
          >
            <i className="fa-regular fa-sun"></i>
          </span>
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              isChecked ? "bg-blue-900 text-white" : "text-black"
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
