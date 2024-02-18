import { menu } from "../../assets/Data/Data";

const Hero = () => {
  return (
    <div className="max-container w-full max-sm:min-h-[120vh] max-sm:pt-7">
      <div className="relative max-h-[500px] dark:ring-1 dark:ring-zinc-900 dark:rounded-2xl">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] rounded-2xl bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
            <br />
            <span className="text-orange-500">Foods</span> Delivered
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover rounded-2xl"
          src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="heroImg"
        />
      </div>
      <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[500px]">
        {menu.map((el) => (
          <div
            className="relative dark:ring-1 dark:ring-zinc-900 dark:rounded-2xl"
            key={el.id}
          >
            <img
              src={el.img}
              alt={el.alt}
              className="w-full max-h-[200px] object-cover rounded-2xl brightness-50"
            />
            <div className="absolute top-0 ml-2 mt-2 text-white">
              <h3 className="font-bold text-xl">{el.header}</h3>
              <p className="font-medium text-base">{el.desc}</p>
            </div>
            <button
              type="button"
              className="absolute bg-white text-black font-medium bottom-0 ml-3 mb-3 border-0 rounded-full hover:scale-105 hover:bg-orange-500/75 hover:text-white duration-300"
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
