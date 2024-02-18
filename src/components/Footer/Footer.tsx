import Burger from "../../assets/burger.png";

const Footer = () => {
  return (
    <footer className="bg-black/80 dark:bg-black border-t-[1px] border-zinc-900 dark:duration-300">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <h1 className="flex justify-center items-center gap-1 mb-4 sm:mb-0 text-3xl sm:text-3xl px-2 text-white/90">
            Savor
            <img src={Burger} className="h-8" alt="SavorSphere Logo" />
            <span className="font-bold">Sphere</span>
          </h1>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white/90 sm:mb-0 max-sm:justify-center">
            <li className="duration-100 hover:-translate-y-1 cursor-pointer">
              <a href="/" className="mr-4 md:mr-6 ">
                About
              </a>
            </li>
            <li className="duration-100 hover:-translate-y-1 cursor-pointer">
              <a href="/" className="mr-4 md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li className="duration-100 hover:-translate-y-1 cursor-pointer">
              <a href="/" className="mr-4 md:mr-6 ">
                Licensing
              </a>
            </li>
            <li className="duration-100 hover:-translate-y-1 cursor-pointer">
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white/90 text-center">
          © 2023 Savor Sphere™ . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
