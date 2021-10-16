import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createRecipes } from "../../redux/actions/recipeActions";

function NewDrink() {
  const [recipe, setRecipe] = useState({
    recipeName: "",
    image: "",
    ingredients: [],
    steps: [],
    description: "",
  });
  const [recipeList, setRecipeList] = useState([
    { ingredientName: "", qty: Number, qtyType: "" },
  ]);
  const [stepList, setStepList] = useState([{ step: "" }]);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createRecipes(recipe));

    console.log(recipe);
  };

  const onChangeHandler = (event, fieldName) => {
    setRecipe((prevState) => {
      return { ...prevState, [fieldName]: event.target.value };
    });
  };
  // for array functions
  const handleInputChange = (e, index, state, setState, fieldName) => {
    const { name, value, type } = e.target;
    const list = [...state];
    list[index][name] = type === "number" ? Number(value) : value;
    setState(list);
    setRecipe((prevState) => {
      return { ...prevState, [fieldName]: state };
    });
  };
  // Add empty state
  const handleAddClick = (x, state, stateAction, fieldName) => {
    const keys = Object.keys(x);
    let newObj = {};
    keys.forEach((key) => {
      newObj[key] = "";
    });
    stateAction([...state, newObj]);
    setRecipe((prevState) => {
      return { ...prevState, [fieldName]: state };
    });
  };
  const handleRemoveClick = (state, setState, index, fieldName) => {
    const list = [...state];
    list.splice(index, 1);
    setState(list);
    setRecipe((prevState) => {
      return { ...prevState, [fieldName]: list };
    });
  };

  return (
    <div className="flex min-h-screen justify-center content-center pt-28 sm:pt-32">
      <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-4 max-w-6xl gap-2 md:gap-5 w-full mx-5 ">
        <div className="col-span-full lg:col-span-2 row-span-2 md:row-span-3 order-last lg:order-first">
          <div className="shadow-lg rounded-2xl border-t border-l border-r border-gray-200 w-full h-full p-5">
            <div className="flex items-center">
              <span className=" text-red-500 text-3xl mr-2">
                <i className="fa-solid fa-square-pen"></i>
              </span>
              <h3 className="font-main font-bold text-3xl text-gray-700 tracking-tighter">
                Welcome
              </h3>
            </div>

            <form action="" onSubmit={handleSubmit} className="mt-5 font-body ">
              <div className="mt-4">
                <label htmlFor="recipeName" className="form-label">
                  <span className="">Recipe Name</span>
                </label>

                <input
                  className="block border border-gray-200 py-2 px-2 rounded-md shadow-sm pt-2 outline-none"
                  type="text"
                  id="recipeName"
                  placeholder="Cowboy"
                  required
                  onChange={(e) => onChangeHandler(e, "recipeName")}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="files" className="form-label">
                  <span className="">Image</span>
                </label>
                <input
                  className="block mt-2"
                  type="file"
                  id="files"
                  name="files"
                  value={recipe.image}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="recipe" className="form-label">
                  <span className="">Ingredients</span>
                </label>
                {recipeList.map((x, i) => {
                  return (
                    <div className="flex items-center mt-2">
                      <input
                        className="border border-gray-200 py-2 px-2 rounded-md shadow-sm outline-none mr-2"
                        name="ingredientName"
                        value={x.ingredientName}
                        type="text"
                        maxLength="25"
                        required
                        placeholder="Name"
                        onChange={(e) =>
                          handleInputChange(
                            e,
                            i,
                            recipeList,
                            setRecipeList,
                            "ingredients"
                          )
                        }
                      />

                      <input
                        className="border border-gray-200 py-2 px-2 rounded-md shadow-sm outline-none mr-2 w-16"
                        name="qty"
                        value={x.qty}
                        type="number"
                        min="0"
                        // pattern="^(([1-9]*)|(([1-9]*)\.([0-9]*)))$"
                        placeholder="Qty."
                        onChange={(e) =>
                          handleInputChange(
                            e,
                            i,
                            recipeList,
                            setRecipeList,
                            "ingredients"
                          )
                        }
                      />

                      <input
                        className="border border-gray-200 py-2 px-2 rounded-md shadow-sm outline-none mr-2 w-16"
                        name="qtyType"
                        value={x.qtyType}
                        type="text"
                        placeholder="ml."
                        onChange={(e) =>
                          handleInputChange(
                            e,
                            i,
                            recipeList,
                            setRecipeList,
                            "ingredients"
                          )
                        }
                      />
                      {recipeList.length !== 1 && (
                        <button
                          className="btn-round mr-2 "
                          onClick={() =>
                            handleRemoveClick(
                              recipeList,
                              setRecipeList,
                              i,
                              "ingredients"
                            )
                          }
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                      )}
                      {recipeList.length - 1 === i && (
                        <button
                          className="btn-round "
                          onClick={() =>
                            handleAddClick(
                              x,
                              recipeList,
                              setRecipeList,
                              "ingredients"
                            )
                          }
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="mt-4">
                <label htmlFor="recipe" className="form-label">
                  <span className="">Steps</span>
                </label>
                {stepList.map((x, i) => {
                  return (
                    <div className="flex items-center mt-2">
                      <input
                        className="border border-gray-200 py-2 px-2 rounded-md shadow-sm outline-none mr-2"
                        name="step"
                        value={x.step}
                        type="text"
                        maxLength="25"
                        required
                        placeholder={`${i + 1}`}
                        onChange={(e) =>
                          handleInputChange(
                            e,
                            i,
                            stepList,
                            setStepList,
                            "steps"
                          )
                        }
                      />

                      {stepList.length !== 1 && (
                        <button
                          className="btn-round mr-2 "
                          onClick={() =>
                            handleRemoveClick(stepList, setStepList, i, "steps")
                          }
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                      )}
                      {stepList.length - 1 === i && (
                        <button
                          className="btn-round "
                          onClick={() =>
                            handleAddClick(x, stepList, setStepList, "steps")
                          }
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="form-label">
                  <span className="">Description</span>
                </label>
                <textarea
                  className="border border-gray-200 py-2 px-2 rounded-md shadow-sm outline-none w-full"
                  value={recipe.description}
                  onChange={(e) => onChangeHandler(e, "description")}
                  rows="3"
                />
              </div>
              <div className="flex-grow align-baseline text-lg text-center px-4 py-2  border rounded-full shadow-md  bg-red-500 text-white hover:bg-red-600 hover:shadow-lg mt-4 transition duration-300 ease-in-out">
                <button className="font-body font-semibold " type="submit">
                  Create Recipe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-span-full lg:col-span-1 md:row-span-2 hidden md:block ">
          <div className="shadow-lg rounded-2xl border-t border-l border-r border-gray-200 w-full h-full"></div>
        </div>
      </div>
    </div>
  );
}

export default NewDrink;
