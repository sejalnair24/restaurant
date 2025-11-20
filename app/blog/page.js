"use client";
import {useRouter}  from "next/navigation";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
export default function Blog(){
  const router=useRouter();
    return(
        <div>
        <div className=" md:bg-gray-100 dark:bg-gray-600 dark:bg-black w-full">

       
           <div><Navbar/></div>
         <div className="relative bg-[url('https://i.pinimg.com/1200x/53/10/f2/5310f24f0f5ba2776ad6eb390fdd4fa9.jpg')] md:bg-cover md:bg-center bg-contain bg-no-repeat  text-white text-center md:py-60 py-50 ">

           <div className="md:absolute md:inset-0 md:bg-black/60"></div>


      <div className="relative z-10 -mt-40">
        <h1 className="md:text-6xl text-4xl font-bold font-[marcellus] ">Blog</h1>
        <p className="text-lg mt-5 font-semibold">
          Home <span className="text-gray-300"></span> blog
        </p>
      </div>

           </div>
           </div>

        
           <div className="flex flex-col">
  <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75"className="md:h-130 h-50 md:w-210 w-100 md:px-0 px-5 md:ml-80 ml-4 md:mt-30 -mt-40" /> 
   <div className=" md:ml-80 ml-5 bg-white shadow-lg  md:w-210 w-full md:h-70 h-90 md:px-4 px-2 py-5 flex flex-col ">
  
      <h3 className="md:text-3xl text-2xl md:mt-7 md:ml-8 ml-4 font-bold text-gray-800 font-[marcellus]  ">
        Picked up a Brussels burger Sprouts.
      </h3>
      <h5 className="text-gray-700 md:mt-3 md:ml-8 ml-4 mt-3 font-[lato]">Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now</h5>
               <div className=" md:ml-8 mt-[30px] relative z-10 ml-4"><h2 className="bg-[#7b4c2b] hover:bg-black text-white  h-[50px] w-[150px] rounded-[30px]  flex items-center justify-center">Read More </h2></div> 
   
  </div>
  
  
  
  
   <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75"className="h-50 md:h-130 md:w-210 w-100 md:ml-80 md:mt-10 mt-10 md:px-0 px-5 " />   
   

     
    <div className="  md:ml-80  ml-5 bg-white shadow-lg  md:w-210 w-full md:h-70 h-90  md:px-4 px-2 py-5 flex flex-col ">

      <h3 className="md:text-3xl md:mt-7  md:ml-8 ml-4 text-2xl font-bold text-gray-800  font-[marcellus]">
        This prefabricated passive  house is highly sustainable
      </h3>
              <h5 className="text-gray-700 mt-3 md:ml-8 ml-4 font-[lato] ">Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now</h5>
        
        
         <div className=" md:ml-8 mt-[30px] relative z-10 ml-4"><h2 className="bg-[#7b4c2b] hover:bg-black text-white  h-[50px] w-[150px] rounded-[30px]  flex items-center justify-center">Read More </h2></div> 
   
    </div>
    

      



           <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3-full.jpg&w=3840&q=75"className="h-50 md:h-130 md:w-210 w-100 md:ml-80 md:mt-10 mt-10 md:px-0 px-5 " />   

    <div className="  md:ml-80  ml-5 bg-white shadow-lg  md:w-210 w-full md:h-70 h-90 px-2 md:px-4 py-5 flex flex-col ">

      <h3 className="md:text-3xl md:mt-7 md:ml-8 ml-4 text-2xl font-bold text-gray-800  font-[marcellus]">
  Overcame breeding point concerns has.
      </h3>
              <h5 className="text-gray-700 md:mt-3 md:ml-8 font-[lato] ml-4">Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now</h5>
        
        
         <div className=" md:ml-8 mt-[30px] relative z-10 ml-4"><h2 className="bg-[#7b4c2b] hover:bg-black text-white  h-[50px] w-[150px] rounded-[30px]  flex items-center justify-center">Read More </h2></div> 
   
    </div>
    




<div className="md:mt-25"><About/></div>
<div className="md:mt-32 mt-28"><Footer/></div>

</div>






           </div>
    )}