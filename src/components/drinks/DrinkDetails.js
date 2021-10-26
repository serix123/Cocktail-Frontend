import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function DrinkDetails(props) {
  const RecipeId = props.match.params.id;

  const recipe = useSelector((state) =>
    RecipeId ? state.recipes.find((recipe) => recipe._id === RecipeId) : null
  );

  const [recipes, setRecipe] = useState({
    recipeName: "",
    image: "",
    ingredients: [],
    steps: [],
    description: "",
  });

  useEffect(() => {
    if (recipe) setRecipe(recipe);
  }, [recipe]);

  return (
    <div className="flex min-h-screen justify-center content-center pt-28 sm:pt-32">
      <div className="grid grid-rows-3 md:grid-cols-3 max-w-6xl gap-2 md:gap-5 w-full mx-5  ">
        <div className="col-span-full lg:col-span-2 row-span-2 md:row-span-2 order-last lg:order-first">
          <div className="shadow-lg rounded-2xl border-t border-l border-r border-gray-200 w-full h-full p-5">
            <div className="">
              <h3>{recipes.recipeName}</h3>
              <div className="">
                {recipes.ingredients.map((ingredient) => {
                  return (
                    <div className="flex justify-between">
                      <p className="">{ingredient.ingredientName}</p>
                      <p className="">
                        {ingredient.qty} {ingredient.qtyType}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="">
                {recipes.steps.map((item) => {
                  return (
                    <div className="flex justify-between">
                      <p className="">{item.step}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-full lg:col-span-1 md:row-span-2 hidden md:block ">
          <div className="shadow-lg rounded-2xl border-t border-l border-r border-gray-200 w-full h-full">
            <div className="flex flex-col justify-center p-5">
              <div className="w-80 self-center ">
                <img
                  src={recipes.image}
                  alt={recipes.recipeName}
                  className="w-full h-auto "
                />
              </div>
              <div className=" m-5">
                <p className="font-body tracking-tight text-md">{recipes.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrinkDetails;
