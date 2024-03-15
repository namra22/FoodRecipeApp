import { createContext, useState } from "react";

export const GlobalContext= createContext(null);
export default function GlobalState({children}){
    const[searchItems,setSearchItems]=useState('');
    const[pending,setPending]=useState(false);
    const[recipeList,setRecipeList]=useState([]);
    const[recepieDetails,setRecepieDetails]=useState(null);
    const[favouritesList,setFavouritesList]=useState([]);
    async function handleSubmit(event){
        event.preventDefault();
        try{
            setPending(true);
            const response=await fetch( `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchItems}`);
            const data=await response.json();
            if(data?.data?.recipes){
                setRecipeList(data?.data?.recipes);
                setPending(false);
                setSearchItems('');
            }
        }catch(e){

        }
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