import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import RecepieItem from "../../components/RecepieItem";

export default function Home() {
  const { recipeList, pending } = useContext(GlobalContext);
  console.log(recipeList);
  return (
    <div className="container mx-auto mt-8">
      {pending ? (
        <div className="text-center text-gray-600">Loading...</div>
      ) : recipeList?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {recipeList.map((item) => (
            <RecepieItem key={item.recipe_id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600">Nothing to Show. Try Searching for any Recipe</div>
      )}
    </div>
  );
}
