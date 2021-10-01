import React, { useState } from "react";

function NewDrink() {
  const [recipeList, setRecipeList] = useState([
    { ingredientName: "", qty: 0, qtyType: "" },
  ]);

  const [stepList, setStepList] = useState([{ step: "" }]);

  
  // Add input to state
  const handleInputChange = (e, index, state, setState) => {
    const { name, value } = e.target;
    const list = [...state];
    list[index][name] = value;
    setState(list);
  };

  // Add empty state
  const handleAddClick = (x, state, stateAction) => {
    const keys = Object.keys(x);
    let newObj = {};
    keys.forEach((key) => {
      newObj[key] =
        typeof key === String
          ? ""
          : typeof key === Number
          ? 0
          : typeof key === Array
          ? []
          : "";
    });
    stateAction([...state, newObj]);
  };

  const handleRemoveClick = (state, setState, index) => {
    const list = [...state];
    list.splice(index, 1);
    setState(list);
    console.log(state);
  };

  // TODO Add recipe form

  return (
    <div className="flex min-h-screen justify-center content-center pt-28 sm:pt-32">
      <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-4 max-w-6xl gap-2 md:gap-5 w-full mx-5 ">
        <div className="col-span-full lg:col-span-2 row-span-2 md:row-span-3 order-last lg:order-first">
          <div className="shadow-lg rounded-2xl border-t border-l border-r border-gray-200 w-full h-full p-5">
            <div className="flex ">
              <span className="text-lg">
                <i className="fa-solid fa-pen-to-square"></i>
              </span>
              <h3 className="font-body font-semibold text-3xl text-gray-700">
                Welcome
              </h3>
            </div>

            <form action="" onSubmit={null} className="mt-5">
              <div className="">
                <label htmlFor="email" className="">
                  <span className="">Author</span>
                </label>
                <input
                  className="border border-gray-200 rounded-md shadow-sm pt-2 outline-none"
                  type="text"
                  id="username"
                  required
                  onChange={null}
                />
              </div>
              <div className="">
                <label for="files">Image:</label>
                <input
                  className="border border-gray-200 rounded-md shadow-sm pt-2 outline-none"
                  type="file"
                  id="files"
                  name="files"
                  multiple
                />
              </div>
              <div className="">
                <label htmlFor="recipe" className="">
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
                          handleInputChange(e, i, recipeList, setRecipeList)
                        }
                      />

                      <input
                        className="border border-gray-200 py-2 px-2 rounded-md shadow-sm outline-none mr-2 w-16"
                        name="qty"
                        value={x.qty}
                        type="number"
                        min="0"
                        placeholder="Qty."
                        onChange={(e) =>
                          handleInputChange(e, i, recipeList, setRecipeList)
                        }
                      />

                      <input
                        className="border border-gray-200 py-2 px-2 rounded-md shadow-sm outline-none mr-2 w-16"
                        name="qtyType"
                        value={x.qtyType}
                        type="text"
                        placeholder="ml."
                        onChange={(e) =>
                          handleInputChange(e, i, recipeList, setRecipeList)
                        }
                      />
                      {recipeList.length !== 1 && (
                        <button
                          className="btn-round mr-2 "
                          onClick={() =>
                            handleRemoveClick(recipeList, setRecipeList, i)
                          }
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                      )}
                      {recipeList.length - 1 === i && (
                        <button
                          className="btn-round "
                          onClick={() =>
                            handleAddClick(x, recipeList, setRecipeList)
                          }
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      )}
                      {console.log(recipeList)}
                    </div>
                  );
                })}
              </div>
              <div className="">
                <label htmlFor="recipe" className="">
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
                          handleInputChange(e, i, stepList, setStepList)
                        }
                      />

                      {stepList.length !== 1 && (
                        <button
                          className="btn-round mr-2 "
                          onClick={() =>
                            handleRemoveClick(stepList, setStepList, i)
                          }
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                      )}
                      {stepList.length - 1 === i && (
                        <button
                          className="btn-round "
                          onClick={() =>
                            handleAddClick(x, stepList, setStepList)
                          }
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </form>
          </div>
        </div>

        <div className="col-span-full lg:col-span-1 md:row-span-2 hidden md:block">
          <div className="shadow-lg rounded-2xl border-t border-l border-r border-gray-200 w-full h-full">
            add total details here
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewDrink;
