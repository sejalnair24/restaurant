"use client";
import { useRouter } from "next/navigation";
import { useEffect,useState } from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
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
       <div><Navbar/></div>
         <div className="relative bg-[url('https://i.pinimg.com/1200x/53/10/f2/5310f24f0f5ba2776ad6eb390fdd4fa9.jpg')] md:bg-cover bg-contain bg-no-repeat md:bg-center text-white text-center py-60  ">
     
        <div className="md:absolute inset-0 md:bg-black/60"></div>

      
      <div className="relative z-10 md:-mt-40 -mt-45">
        <h1 className="md:text-6xl text-4xl font-bold font-[marcellus] ">Cart Page</h1>
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