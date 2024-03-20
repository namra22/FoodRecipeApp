import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/Context";

export default function Navbar(){
   const{searchItems,setSearchItems,handleSubmit}=useContext(GlobalContext);
   
return(
   <nav className="flex justify-between items-center py-6 lg:py-6 px-4 lg:px-8 container mx-auto flex-col lg:flex-row lg:items-center gap-5 lg:gap-0 bg-green-100 rounded-full">
   <h2 className="text-3xl font-bold text-black">
     <NavLink to={'/'} className='hover:text-green-700 transition duration-300'>Food Recipes</NavLink>
   </h2>
   <form onSubmit={handleSubmit} className="flex items-center">
     <input
       className="bg-white/80 p-3 px-8 rounded-full outline-none shadow-lg focus:shadow-green-200"
       type="text"
       name="search"
       placeholder="Search for recipes..."
       value={searchItems}
       onChange={(e)=>setSearchItems(e.target.value)}
     />
     <button type="submit" className="ml-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300">
       Search
     </button>
   </form>
   <ul className="flex gap-5">
     <li>
       <NavLink to={'/'} className='text-black hover:text-green-700 hover:bg-green-300 duration-300' >Home</NavLink>
     </li>
     <li>
       <NavLink to={'/favourites'} className='text-black hover:text-green-700 hover:bg-green-300 duration-300'>Favourites</NavLink>
     </li>
   </ul>
 </nav>
 
)
}