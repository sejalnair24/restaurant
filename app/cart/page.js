"use client";

import { useRouter } from "next/navigation";
import { useEffect,useState } from 'react';
import Footer from "../components/Footer";
export default function CartPage(){
const router=useRouter();
const [cart ,setCart] = useState([]);
useEffect(() => {
  const savedCart=JSON.parse(localStorage.getItem("cart")) || [];
  setCart(savedCart);
}, []);
const removeItem =(index)=>{
  const updatedCart=cart.filter((_,i)=>i!==index);
  setCart (updatedCart);
  localStorage.setItem("cart",JSON.stringify (updatedCart));
};
    return(
        <div className=" bg-gray-100 ">
         <div className="flex flex-row md:items-center px-30 py-10 border-b-gray-600 border-b-1  md:justify-between bg-black">
               
                <img className=" md:w-28 w-24 mr-8" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"/>
                <div className="md:flex flex-row font-bold text-lg px-8 space-x-10 hidden md:block text-white">
                  <div onClick={()=>router.push("/")}>Home</div>
                  <div>Pages</div>
                  <div onClick={()=>router.push("/menu")}>Menu</div>
                  <div>Blog</div>
                  <div>Shop</div>
                  <img className="size-12 rounded-full mx-10  " src="https://tse1.mm.bing.net/th/id/OIP.JRBIv4WXa_jQW7MLYOe06wHaHa?pid=Api&P=0&h=180"/>
                  
                  </div>
 <div className="border-2 border-white flex items-center justify-center w-70 h-14 text-lg font-bold  bg-white text-black transition hidden md:bloc">Reservation</div>


        </div>
         <div className="relative bg-[url('https://i.pinimg.com/1200x/53/10/f2/5310f24f0f5ba2776ad6eb390fdd4fa9.jpg')] md:bg-cover bg-contain bg-no-repeat md:bg-center text-white text-center py-60  ">
     
        <div className="md:absolute inset-0 md:bg-black/60"></div>

      
      <div className="relative z-10 md:-mt-40 -mt-45">
        <h1 className="md:text-5xl text-4xl font-bold  ">Cart Page</h1>
        <p className="text-lg md:mt-5 mt-3 font-semibold">
          Home <span className="text-gray-300">›</span> Cart
        </p>
      </div>
    </div>
    {cart.length === 0 ? (
        <div className="text-gray-500">Your cart is empty.</div>
      ) : (
        <table className="md:w-3/4  w-full border-collapse border border-gray-400 md:mt-15  md:mx-30 -mt-62 my-[25px]">
          <thead className="bg-[#efdecd] ">
            <tr>
              <th className="border border-gray-400 px-4 py-2 text-black">Remove </th>
              <th className="border border-gray-400 px-4 py-2 text-black">Thumbnail</th>
              <th className="border border-gray-400 px-4 py-2 text-black"><h2 className="md:-ml-25">Product</h2></th>
              <th className="border border-gray-400 px-4 py-2 text-black">Price</th>
            </tr>
          </thead>
          <tbody className="bg-white text-amber-900">
            {cart.map((element, index) => (
              <tr key={index}>
                <td className="border border-gray-400 px-4 py-2">
                  <button
                    className="bg-[#e47d72] hover:bg-red-700 text-white font-bold py-2 px-4  rounded-full  md:ml-15"
                    onClick={() => {
                      removeItem(index);
                     
                    }}>X</button>
                </td>
                <td className="border border-gray-400 md:px-10 px-4 py-2">
                  <img src={element.image} alt={element.title} className="h-20 w-20 object-cover md:ml-27" />
                </td>
                <td className="border border-gray-400 md:px-4 py-2 font-bold text-lg md:md-130"><h2 className="md:ml-15">{element.title}</h2></td>
                <td className="border border-gray-400 px-4 py-2 text-[#7b6749] font-bold "><h2 className="md:ml-4">${element.price}</h2></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}<Footer/>
        </div>
        
        )
}