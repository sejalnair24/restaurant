"use client";
  import { useRouter } from "next/navigation";
  export default function News(){
    return(
<div>
<div className="md:flex flex-row flex-col">
  <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75"className="h-[350px] md:w-[550px] w-100 md:px-0 px-5 md:ml-[80px] mt-[50px]" />  
 <div className="flex flex-row">
   <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75"className="h-[350px] md:w-[550px] w-100 md:ml-[60px] md:mt-[50px] mt-60 md:px-0 px-5 " />   </div> </div>
   
   <div className="md:flex flex-row flex-col md:mt-0 -mt-150 md:gap-[150px] ">
      <div className=" md:ml-[120px] ml-5 bg-white shadow-lg  md:w-[450px] w-full h-[200px] md:px-4 py-5 flex flex-col ">
    <h6 className="text-gray-800 py-3">By Md SohagBurger ,Food</h6>
      <h3 className="md:text-3xl text-2xl font-bold text-gray-800  ">
        Picked up a Brussels burger <br></br>Sprouts with ham
      </h3>
      <h5 className="text-yellow-500">Read More</h5>
   
  </div>
    <div className="  md:left-40 ml-5 bg-white shadow-lg  md:w-[450px] w-full h-[200px] md:mt-0 mt-100 md:px-4 py-5 flex flex-col ">
      <h6 className="text-gray-800 py-3">By Md SohagBurger ,Food</h6>
      <h3 className="md:text-3xl text-2xl font-bold text-gray-800 ">
        This prefabricated passive <br></br> house is highly sustainable
      </h3>
      <h5 className="text-yellow-500">Read More</h5>
    </div>
    </div>
</div>
    )}