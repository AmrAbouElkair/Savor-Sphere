import { useState } from "react";
import { data } from "../../assets/Data/Data";

const filteredData: { id: string; title?: string; price?: string }[][] = [
  [
    { id: "1", title: "all" },
    { id: "2", title: "burger" },
    { id: "3", title: "pizza" },
    { id: "4", title: "salad" },
    { id: "5", title: "chicken" },
  ],
  [
    { id: "1", price: "$" },
    { id: "2", price: "$$" },
    { id: "3", price: "$$$" },
    { id: "4", price: "$$$$" },
  ],
];

const Menu = () => {
  const [meals, setMeals] = useState(data);

  const filteredType = (category: string | undefined) => {
    setMeals(data.filter((item) => item.category === category));
  };
  const filterdPrice = (price: string | undefined) => {
    setMeals(data.filter((item) => item.price === price));
  };

  return (
    <div className="max-container">
      <h1 className="text-4xl font-bold text-center text-orange-600 max-sm:mb-10">
        Top Rated Menu Items
      </h1>
      <div className="flex flex-col gap-5 lg:flex-row lg:gap-0 justify-between">
        <div>
          <p className="font-semibold text-gray-700 mb-2 dark:text-white">
            Filter Type
          </p>
          <div className="flex gap-2 flex-wrap justify-between">
            {filteredData[0].map((el) => (
              <button
                onClick={() =>
                  el.title === "all" ? setMeals(data) : filteredType(el.title)
                }
                type="button"
                className="capitalize text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white hover:scale-110 hover:font-medium focus:bg-orange-500 focus:text-white focus:scale-110 focus:font-medium duration-100"
                key={el.id}
              >
                {el.title}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-gray-700 mb-2 dark:text-white">
            Filter Price
          </p>
          <div className="flex gap-2 flex-wrap justify-between">
            {filteredData[1].map((el) => (
              <button
                onClick={() => filterdPrice(el.price)}
                className=" text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white hover:scale-110 hover:font-medium focus:bg-orange-500 focus:text-white focus:scale-110 focus:font-medium duration-100"
                key={el.id}
                type="button"
              >
                {el.price}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
        {meals.map((meal) => (
          <div
            className="relative shadow-xl rounded-b-md cursor-pointer duration-200 hover:scale-105 dark:ring-1 dark:ring-zinc-900 dark:rounded-t-lg"
            key={meal.id}
          >
            <img
              src={meal.image}
              alt={meal.name}
              className="w-full h-[250px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between items-center p-4">
              <h3 className="font-extrabold dark:text-white">{meal.name}</h3>
              <p className="rounded-full text-white bg-orange-500 p-1">
                {meal.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
