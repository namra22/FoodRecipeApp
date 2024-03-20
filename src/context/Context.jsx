import { createContext, useState,useEffect } from "react";

export const GlobalContext= createContext(null);
export default function GlobalState({children}){
    const[searchItems,setSearchItems]=useState('');
    const[pending,setPending]=useState(false);
    const[recipeList,setRecipeList]=useState([]);
    const[recepieDetails,setRecepieDetails]=useState(null);
    const[favouritesList,setFavouritesList]=useState([]);
    console.log(favouritesList);
    useEffect(() => {
      // Perform the initial search with a default term, e.g., "apple"
      fetchRecipes("Potato");
    }, []); // The empty array as the second argument ensures this effect runs only once, after the initial render
  
    async function fetchRecipes(searchTerm) {
      try {
        setPending(true);
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchTerm}`);
        const data = await response.json();
        if (data?.data?.recipes) {
          setRecipeList(data?.data?.recipes);
          setPending(false);
          setSearchItems('');
        }
      } catch (e) {
        // Handle the error (e.g., by setting an error state or logging the error)
        setPending(false);
      }
    }
  
    async function handleSubmit(event) {
      event.preventDefault();
      fetchRecipes(searchItems);
    }
    function handleAddToFavourite(currentRecepieId){
        const createFavouritesList=[...favouritesList];
        const index = createFavouritesList.findIndex(item=> item.id === currentRecepieId.id)

        if(index === -1) {
          createFavouritesList.push(currentRecepieId)
        } else {
          createFavouritesList.splice(index)
        }
    
        setFavouritesList(createFavouritesList);
      }
    
    
    return(
        <GlobalContext.Provider value={{searchItems,setSearchItems,handleSubmit,pending,recipeList,recepieDetails,setRecepieDetails,favouritesList,setFavouritesList,handleAddToFavourite}}>{children}</GlobalContext.Provider>
    )
}