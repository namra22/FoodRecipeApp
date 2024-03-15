import { Link } from "react-router-dom";

export default function RecepieItem({item}){
    return (
        <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white transition-transform transform hover:scale-105">
          <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl shadow-md">
            <img
              src={item?.image_url}
              alt="recipe item"
              className="block w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="mt-3">
            <span className="text-xs text-gray-500 font-semibold">
              {item?.publisher}
            </span>
            <h3 className="font-bold text-lg truncate text-gray-800">
              {item?.title}
            </h3>
            <Link to={`/recepie-details/${item?.id}`}  className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-green-600 text-white">Recepie Details</Link>
          </div>
        </div>
      );
      
}