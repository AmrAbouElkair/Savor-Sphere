import { categories } from "../../assets/Data/Data";

const Category = () => {
  return (
    <div className="max-container">
      <h1 className="text-4xl font-bold text-center text-orange-600">
        Top Rated Menu Categories
      </h1>
      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
        {categories.map((item) => (
          <div
            key={item.id}
            className="shadow-lg rounded-xl cursor-pointer duration-200 p-4 hover:scale-105 flex justify-between items-center bg-gray-100 dark:bg-black dark:ring-1 dark:ring-zinc-900"
          >
            <h2 className="font-bold sm:text-xl dark:text-white">
              {item.name}
            </h2>
            <img src={item.image} alt={item.name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
