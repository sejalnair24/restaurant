"use client";
  import { useRouter } from "next/navigation";
  export default function Master(){
    return(
<div className="dark:bg-black w-full">
     <div className="text-[#82704e] font-bold text-2xl md:mt-0 mt-165 md:mx-160 mx-13 pt-20 ">
  ---MASTER CHEFS---
</div>
<div className="text-black font-bold text-[#82704e] md:text-4xl text-2xl md:mt-0 mt-5 md:mx-140 mx-15 dark:text-white">
  MEET OUR SPECIAL CHEFS
</div>
<div className=" py-20 flex justify-center ">
      <div className="flex flex-wrap justify-center gap-16">
        
        
        <div className="relative flex flex-col items-center">
        
          <div className="relative w-72 h-72 rounded-full border-[3px]  border-[#7b6749] overflow-hidden  ">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.jpg&w=640&q=75"
              alt="Chef"
              className="object-cover w-full h-full"
            />
          </div>

          
          <div className="absolute bottom-[-35px] bg-[#7b6749] text-white px-10 py-3 text-center text-lg font-semibold clip-ribbon">
            <p className="text-xl">Alexander Petllo</p>
            <p className="text-sm font-normal tracking-wide">
              ASSISTANT CHEF
            </p>
          </div>
        </div>

       
        <div className="relative flex flex-col items-center">
         
          <div className="relative w-72 h-72 rounded-full border-[3px] border-[#7b6749] overflow-hidden">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F2.jpg&w=640&q=75"
              alt="Chef"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute bottom-[-35px] bg-[#7b6749] text-white px-10 py-3 text-center text-lg font-semibold clip-ribbon">
            <p className="text-xl">Mendia Juxef</p>
            <p className="text-sm font-normal tracking-wide">
              BURGER KING
            </p>
          </div>
        </div>
   
     <div className="relative flex flex-col items-center">
         
          <div className="relative w-72 h-72 rounded-full border-[3px] border-[#7b6749] overflow-hidden">
            <img
              src="/image/food.jpg"
              alt="Chef"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute bottom-[-35px] bg-[#7b6749] text-white px-10 py-3 text-center text-lg font-semibold clip-ribbon">
            <p className="text-xl">Petro William</p>
            <p className="text-sm font-normal tracking-wide">
              MAIN CHEF
            </p>
          </div>
          
        </div>
       </div>
    </div>
</div>);}