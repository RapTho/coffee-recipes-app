import React, { createContext, useContext, useState } from "react";

const RecipeContext = createContext();
const RecipeContextUpdate = createContext();

export const useRecipe = () => useContext(RecipeContext);
export const useRecipeUpdate = () => useContext(RecipeContextUpdate);

export const RecipeContextProvider = ({ children }) => {
  const [recipe, setRecipe] = useState({
    id: "",
    readOnly: false,
  });

  const updateRecipe = (id, readOnly) => {
    console.log(id);
    console.log(readOnly);
    setRecipe({
      id: id,
      readOnly: readOnly,
    });
  };

  return (
    <RecipeContext.Provider value={recipe}>
      <RecipeContextUpdate.Provider value={updateRecipe}>
        {children}
      </RecipeContextUpdate.Provider>
    </RecipeContext.Provider>
  );
};
