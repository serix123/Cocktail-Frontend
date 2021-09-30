import React, { useState } from 'react';

function DynamicForm() {

  const [recipeList, setRecipeList] = useState([
    {ingredientName: "", qty: 0, qtyType: "" }
  ]);

  const [stepList, setStepList] = useState([
    {step: ""}
  ]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...recipeList];
    list[index][name] = value;
    setRecipeList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...recipeList];
    list.splice(index, 1);
    setRecipeList(list);
  };

  const handleAddClick = () => {
    setRecipeList([...recipeList, {ingredientName: "", qty: Number, qtyType: "" }]);
  };

  const handleAddClick2 = (state, stateAction) => {
    stateAction([...state, {ingredientName: "", qty: Number, qtyType: "" }]);
  };

  const handleRemoveClick2 = (index) => {
    const list = [...recipeList];
    list.splice(index, 1);
    setRecipeList(list);
  };

  // TODO Add recipe form

  return (
    <div className="flex min-h-screen justify-center content-center pt-28 sm:pt-32">
      <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-4 max-w-6xl gap-2 md:gap-5 w-full mx-5 ">
        <div className="col-span-full lg:col-span-2 row-span-2 md:row-span-3 order-last lg:order-first">       
          <div className="shadow-lg rounded-2xl border-t border-l border-r border-gray-200 w-full h-full p-5">
            <div className="flex ">
              <span className="text-lg"><i className="fa-solid fa-pen-to-square"></i></span>
              <h3 className="font-body font-semibold text-3xl text-gray-700"> Welcome</h3>
            </div>

            <form action="" onSubmit={null} className="mt-5">
              
              <div className="">
                <label htmlFor="email" className="">
                  <span className="">Ingredients</span>
                </label>
                {recipeList.map((x, i) => {
                  return (
                    <div className="flex items-center mt-2">
                                        
                      <input className="border border-gray-200 py-2 px-2 rounded-md shadow-sm outline-none mr-2"
                        name="ingredientName"
                        value={x.ingredientName}
                        type="text"
                        required
                        placeholder="Name"
                        onChange={e => handleInputChange(e, i)}
                      />

                      <input className="border border-gray-200 py-2 px-2 rounded-md shadow-sm outline-none mr-2 w-16"
                        name="qty"
                        value={x.qty}
                        type="number"
                        min="0"
                        placeholder="Qty."
                        onChange={e => handleInputChange(e, i)}
                      />

                      <input className="border border-gray-200 py-2 px-2 rounded-md shadow-sm outline-none mr-2 w-16"
                        name="qtyType"
                        value={x.qtyType}
                        type="text"
                        placeholder="ml."
                        onChange={e => handleInputChange(e, i)}
                      />
                      {recipeList.length !== 1 && 
                      <button className="btn-round mr-2 " onClick={() => handleRemoveClick(i)}><i className="fa-solid fa-minus"></i></button>}
                      {recipeList.length - 1 === i && 
                      <button className="btn-round " onClick={handleAddClick}><i className="fa-solid fa-plus"></i></button>}
                      
                    </div>
                  );
                })}
                 
              </div>
              {console.log(Object.keys(recipeList[0]))}

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
  )
}

export default DynamicForm
