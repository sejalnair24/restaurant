
"use client";
import {useRouter}  from "next/navigation";
import Master from "../components/Master";
import Video from "../components/Video";
import Footer from "../components/Footer";
export default function AboutUs(){
  const router=useRouter();
    return(
        <div className=" bg-gray-100 dark:bg-gray-600 dark:bg-black w-full">
            <div className="flex flex-row md:items-center px-30 md:py-10 py-5 border-b-gray-600 border-b-1  md:justify-between bg-black text-white  md:w-full ">
               
                <img className=" md:w-28 w-24 mr-8 " src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"/>
                <div className="md:flex flex-row hidden md:block font-bold text-lg px-8 space-x-10  ">
                  <div onClick={()=>router.push("/")} >Home</div>
                  <div>Pages</div>
                  <div>Menu</div>
                  <div>Blog</div>
                  <div>Shop</div>
                  <img className="size-12 rounded-full mx-10  " src="https://tse1.mm.bing.net/th/id/OIP.JRBIv4WXa_jQW7MLYOe06wHaHa?pid=Api&P=0&h=180"/>
                  
                  </div>
                  <div className="border-2 border-white flex items-center justify-center w-70 h-14 text-lg font-bold  hover:bg-white hover:text-black transition hidden md:block">Reservation</div>
            </div>
            <div className="relative bg-[url('https://i.pinimg.com/1200x/53/10/f2/5310f24f0f5ba2776ad6eb390fdd4fa9.jpg')] md:bg-cover md:bg-center bg-contain bg-no-repeat text-white text-center md:py-60 py-50 ">
     
        <div className="md:absolute md:inset-0 md:bg-black/60"></div>


      <div className="relative z-10 -mt-40">
        <h1 className="md:text-5xl text-4xl font-bold  ">About Us</h1>
        <p className="text-lg mt-5 font-semibold">
          Home <span className="text-gray-300">›</span> about-us
        </p>
      </div>
    </div>
       
       <div className="text-[#82704e] text-2xl text-center md:mt-[0px] mt-[-220px] bg-amber-50 dark:bg-amber-950"><div className="py-10" >
  ---OUR TRUSTED 8K HAPPY PARTNER---
</div>
<div className="flex flex-row  md:overflow-x-auto md:space-x-8 md:p-6 p-3 scrollbar-hide bg-contain">
<img
  src="https://restan-nextjs.vercel.app/assets/img/brand/1.png"
  
  className="md:mx-10 mx-3 my-10 md:h-30 h-15"
/>
<img
  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F2.png&w=1080&q=75"
  
  className="md:mx-10 my-10 md:h-30 h-15"
/>
<img
  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F3.png&w=1080&q=75"
  
  className="md:mx-10 my-10 md:h-30 h-15"
/>
<img
  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F4.png&w=1080&q=75"
  
  className="md:mx-10 my-10 md:h-30 hidden md:block "
/>
<img
  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F5.png&w=1080&q=75"
  
  className="md:mx-10 my-10 md:h-30 hidden md:block"
/>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-center bg-white dark:bg-black px-8 py-16 gap-10 ">
  <div className="flex flex-col md:flex-row gap-6 w-full md:w-1/2 justify-center">
    <img src="https://images.unsplash.com/photo-1751810105833-001843080aa1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc3RhdXJhbnQlMjB3YWl0ZXIlMjBnaXZpbmclMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" className="rounded-xl shadow-lg md:w-[250px] md:h-[350px] h-[200px] w-full  object-cover"/>
     <img
      src="https://images.unsplash.com/photo-1750943082012-efe6d2fd9e45?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJlc3RhdXJhbnQlMjB3YWl0ZXIlMjBzZXJ2aW5nJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
       className="rounded-xl shadow-lg md:w-[250px] md:h-[350px] h-[200px] w-full object-cover"
    />
  </div>
<div className="w-full md:w-3/4 text-left  bg-amber-50 dark:bg-amber-950 px-8 py-10">
<img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F2.png&w=3840&q=75" className="w-30 h-25 object-contain"/>
    <h3 className="text-[#82704e] font-semibold text-xl flex items-center ">
      <span className="mr-2">ABOUT US</span>
      <span className="w-16 h-[1px] bg-[#82704e] inline-block"></span>
    </h3>
    <h1 className="md:text-5xl text-4xl font-bold leading-tight text-black dark:text-white">
      We Invite You To Visit Our Restaurant
    </h1>
    <p className="text-gray-600 dark:text-gray-100 text-lg">
      A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.


    </p>
    <button className="mt-4 bg-[#82704e] text-white px-6 py-3  hover:bg-[black] transition">
      Discover More
    </button>
  </div>
</div>
<div className="relative  md:top-0 md:h-170 -top-170 h-180 dark:bg-black w-full"><Master/></div>
<div className="relative dark:bg-black w-full ">
 
  <div className="text-gray-300 text-8xl md:mt-0 -mt-15 md:mx-30 dark:bg-black w-full">RESTAN</div>

 
  <div className="md:flex flex-row flex-col items-start md:justify-self-start relative ">
 
    <div ><Video/></div>
   
      </div>   
 
</div>
<div className="relative z-10 md:mt-0 mt-150 "><Footer/></div>

 </div>

    )
}
