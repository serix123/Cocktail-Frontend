import React from "react";
import { useSelector } from "react-redux";
import DrinkSummary from "./DrinkSummary";

function DrinkDetails() {
  const recipes = useSelector((state) => state.recipe);
  console.log(recipes);

  return <div></div>;
}

export default DrinkDetails;
