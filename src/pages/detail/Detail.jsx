import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { GlobalContext } from "../../context/Context";

export default function Detail() {
  const { id } = useParams();
  const { recepieDetails, setRecepieDetails,handleAddToFavourite,favouritesList } = useContext(GlobalContext);
  console.log(recepieDetails)
  async function getRecepieDetails() {
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const result = await response.json();
      if (result?.data) {
        setRecepieDetails(result?.data);
      }
    } catch (e) {}
  }
  useEffect(() => {
    getRecepieDetails();
  }, []);
 
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="lg:row-start-auto ">
        <div className="h-96 overflow-hidden rounded-xl shadow-md group">
          <img
            src={recepieDetails?.recipe?.image_url}
            className="w-full h-full object-cover block transform transition-transform group-hover:scale-105 duration-300"
            alt="Recipe Image"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 bg-green-100 pl-4">
        <span className="text-sm text-cyan-700 font-medium">
          {recepieDetails?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recepieDetails?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavourite(recepieDetails?.recipe)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-green-700 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            {favouritesList && favouritesList.length > 0 && favouritesList.findIndex(
              (item) => item.id === recepieDetails?.recipe?.id
            ) !== -1
              ? "Remove from Favourites"
              : "Add to Favourites"}
          </button>
        </div>
        <div>
          <h4 className="text-2xl font-semibold text-green-700">Ingredients:</h4>
          <ul className="flex flex-col gap-3">
            {recepieDetails?.recipe?.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span className="text-lg font-semibold text-black">
                  {ingredient.quantity} {ingredient.unit} - {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
  
}
