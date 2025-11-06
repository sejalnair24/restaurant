"use client";
import { useRouter } from "next/navigation";
import Book from "./components/Book";
import Master from "./components/Master";
import News from "./components/News";
import Video from "./components/Video";
export default function Land(){
  const router=useRouter();
  const handleChange=(e)=>{const selected=e.target.value; if(selected){router.push(selected);}};
    return(
       <div >
         <div className="bg-gray-800 md:h-[50px] h-[40px] w-full flex flex-row">
          <h2 className="md:ml-[40px] ml-[10px] font-bold relative z-10  mt-[10px]">envato</h2><h2 className="relative z-10  mt-[10px]">market</h2>
        <div className=" ml-[10px] relative z-10 md:mt-[10px] mt-[5px]"><h2 className="bg-green-700 w-[90px] h-[30px] md:ml-[1100px] ml-[160px] flex justify-center items-center">Buy now </h2></div>  
         </div>
          <div className="flex flex-row bg-[#7b4c2b]">  <h2 className=" font-bold relative z-10 md:h-[35px] h-[20px] md:ml-[300px] ml-[20px] hidden md:block  mt-[10px]">Phone:+4733378901</h2><h2 className="relative  hidden md:block z-10 md:ml-[300px] ml-[300px]font-bold  mt-[10px]">Email: food@restan.com</h2></div>
        <div className=" md:h-screen h-[290px] flex flex-col  bg-no-repeat bg-center w-full md:bg-cover bg-contain " style={{backgroundImage:"url('https://restan-nextjs.vercel.app/assets/img/banner/14.jpg')"}} >
       <div className="fixed md:top-17 md:left-0 h-[50px] w-[160px]  mx-150px flex flex-row  ml-[2px] md:mt-[40px] md:space-x-20 space-x-3 md:font-bold z-50" >
          <div className=" md:mt-[6px] md:ml-[80px] ml-[10px] text-white hidden md:block drop-shadow-lg relative z-10  mt-[50px]">Home  </div>
          <div htmlFor="pages" className=" hidden md:block  text-white relative z-10 ">
                 <select id="pages" onChange={handleChange} className="mt-[7px] pr-10 "defaultValue="">
                  <option value="" disabled>Pages</option>
                   <option value="/aboutus" className="text-black p-2">AboutUs</option>
                    <option value="/chef"className="text-black">Chef</option>
                      <option value="/login"className="text-black">Login</option>
                   </select></div>
                   <div className=" md:mt-[6px] ml-[10px] text-white  drop-shadow-lg relative z-10 hidden md:block mt-[50px]"onClick={()=>router.push("/menu")}>Menu </div>
         
             <div ><img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75" className="relative z-10 md:ml-[90px] ml-30 md:mt-[4px] mt-[5px] md:h-15 h-9 md:w-150 w-30 0"/></div>

          <div className=" text-white hidden md:block relative z-10 md:absolute top-23  md:ml-[900px]  -mt-20">Shop  </div>
          <div className="text-white  hidden md:block md:mt-[6px] relative z-10 md:ml-[350px] mt-[50px]" >Blog </div>
          <div className=" text-white hidden md:block md:mt-[6px] relative z-10  mt-[50px]">Contact  </div>
       
          </div>     
  <div className=" absolute inset-0 bg-black/40 flex items-center justify-center"></div>
          <div className=" md:mt-[200px] mt-[60px] md:ml-125 ml-[80px]  relative z-10 ">
           <h1 className=" font-bold  md:text-7xl text-3xl drop-shadow-lg text-white md:mt-20 "> Best Restaurant</h1>  
           <div className="md:w-50 relative z-10 md:h-50 w-25 h-25 border-2 border-[#b8860b] rounded-full md:ml-50 ml-[60px] md:mt-20 mt-[10px] ">
         
         <h2 className="md:ml-15 md:mt-12 mt-3 md:text-2xl ml-5 font-bold">Restan</h2>
        <h2 className="md:mt-5 mt-1 md:ml-13 ml-4 md:text-xl w-full text-sm">  Best food <br></br>since-1865</h2>
      </div>
     </div>   
   <Book/>
   </div>
     <div className="flex flex-col  h-[500px]">
            <div className="  md:mt-[500px] mt-240  md:flex flex-row flex-col  md:mt-0 mt-5">
       <div> <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=640&q=75"className="h-[90px] w-[100px] md:ml-[100px] ml-8"/><h2 className="flex flex-col text-black md:ml-[110px] text-2xl mt-[25px] ml-8 font-bold  dark:text-white">Quality foods</h2><h4 className="text-black md:ml-[110px] ml-8 dark:text-white">Belonging sir curiosity discovery extremity yet<br></br> forfeited prevailed own off. Traveling by<br></br> introduced of mr terminated.</h4></div> 
        <div> <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F14.png&w=640&q=75"className="h-[90px] w-[100px] md:ml-[100px] ml-8 md:mt-0 mt-10"/><h2 className="flex flex-col text-black md:ml-[110px] text-2xl md:mt-[25px] mt-5 ml-8 font-bold  dark:text-white">Fast Delivery</h2><h4 className="text-black md:ml-[110px] ml-8 dark:text-white">Belonging sir curiosity discovery extremity yet<br></br> forfeited prevailed own off. Traveling by<br></br> introduced of mr terminated.</h4></div> 
          <div>  <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F15.png&w=640&q=75"className="h-[90px] w-[100px] md:ml-[100px] ml-8  md:mt-0 mt-10"/><h2 className="flex flex-col text-black md:ml-[110px] text-2xl md:mt-[25px] mt-5 ml-8 font-bold dark:text-white ">Delicious Recipes</h2><h4 className="text-black md:ml-[110px] ml-8 dark:text-white">Belonging sir curiosity discovery extremity yet<br></br> forfeited prevailed own off. Traveling by<br></br> introduced of mr terminated.</h4></div> 
          </div>
         <div>
          
         </div>
          </div>
            <div >
            <div className="flex md:flex-row flex-col">
             
           <img src="https://restan-nextjs.vercel.app/assets/img/shape/4.jpg" className="md:h-[600px] h-250 md:w-[1200px] w-full md:ml-[70px] md:mt-[300px] mt-330 rounded-[50px]"/>

            <div className="flex md:flex-row flex-col md:ml-[150px] ml-15 absolute"> 
             <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F1.png&w=1080&q=75"className="h-[200px] w-[200px] md:mt-[400px] mt-340 md:ml-[20px] "/>
              <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F12.png&w=1080&q=75"className="h-[150px] w-[150px] md:mt-[650px] mt-100 flex flex-col absolute ml-[40px] hidden md:block"/>
             <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F15.png&w=1080&q=75"className="h-[250px] w-[250px] md:mt-[480px] -mt-2"/>
       <div> <h2 className="flex flex-row text-black md:mt-[450px] mt-15 md:ml-[90px] ml-0 text-2xl font-bold ">Today Special Offer</h2>
           <h1 className="flex flex-row text-black mt-[30px] md:ml-[90px] ml-0 text-4xl font-bold ">Explore Irresistible<br></br> Promotions!</h1>
           <h6 className="text-black mt-[20px] md:ml-[90px] ">Contrasted dissimilar get joy you instrument out reasonably. Again keeps<br></br> at no meant stuff. To perpetual do existence northward as difficult<br></br> preserved daughters. Continued at up to zealously necessary.
         </h6>
           <div className=" md:ml-[90px] mt-[30px] relative z-10"><h2 className="bg-[#7b4c2b] hover:bg-[#4b2a14] text-white w-[90px] h-[50px] w-[150px] rounded-[30px]  flex items-center justify-center">Order Today </h2></div> 
         </div>
          </div>
             
           </div> 
          </div> 
      <div className="flex flex-col ">
              <h1 className="text-[#7b4c2b] md:ml-[40px] mt-[80px] font-bold text-2xl flex items-center justify-center mt-[20px]">FOOD MENU</h1>
                   
                    <h1 className="text-black font-bold  md:text-5xl text-4xl md:ml-140 ml-8 mt-[20px]  w-full dark:text-white"> Our Specials Menu</h1> 
                  
              <div className=" bg-white md:w-[600px] w-full rounded-[5px] md:h-[80px] h-90 items-center border-2 border-black md:ml-125 md:mt-10  mt-1 md:flex flex-row flex flex-col dark:bg-black" >
                 <h2 className=" absolute md:ml-[30px] text-black text-xl bg-pink-300 w-30 h-10 flex justify-center items-center rounded-[5px] md:mt-0 -mt-50 ml-14">Main Dishes</h2>
                 <h2 className="absolute md:ml-44 text-black text-xl bg-pink-300 w-30 h-10 flex justify-center items-center rounded-[5px] md:mt-0 -mt-15 ml-14">Desserts</h2>
                  <h2 className="absolute md:ml-[320px] text-black text-xl  bg-pink-300 w-30 h-10 flex justify-center items-center rounded-[5px] md:mt-0 mt-20 ml-14">Sea Food</h2>
                    <h2 className="absolute md:ml-[460px] text-black text-xl  bg-pink-300 w-30 h-10 flex justify-center items-center rounded-[5px] md:mt-0 mt-57 ml-14">Beverages</h2>
                  </div>

             </div>
          <div className=" md:flex flex-row flex-col mt-[60px] ">
          <div className="h-[500px] md:w-[400px] w-full  bg-white md:ml-[50px]">   <img className="h-[300px] w-full   border-1 border-black" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F1.jpg&w=1920&q=75"/><h2 className="text-black text-2xl font-bold md:ml-[30px] ml-3 md:mt-[30px] mt-3">Braised Chicken Legs </h2><br></br><h3 className="text-gray-600 md:ml-[30px] ml-4 font-bold">4 chicken legs *  Chilli Sauce * Soft Drinks</h3>
           <div className=" md:ml-[30px] ml-4 mt-3 mt-[15px] relative z-10"><h2 className="bg-white hover:bg-[#4b2a14] text-black hover:text-white h-[50px] w-[320px] rounded-[30px] border-2 border-black flex items-center justify-center">Add to Cart</h2></div> 
          </div>
          
          
           <div className=" md:ml-[30px]  h-[500px] md:w-[400px] w-full bg-white"> <img className="h-[300px] w-full  border-1 border-black" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F2.jpg&w=1920&q=75"/><h2 className="text-black text-2xl font-bold md:ml-[30px] ml-3 mt-[30px]">Bone Steak </h2><br></br><h3 className="text-gray-600 md:ml-[30px] ml-4 font-bold">4 chicken legs *  Chilli Sauce * Soft Drinks</h3>
           <div className=" md:ml-[30px] ml-4 mt-[15px] relative z-10"><h2 className="bg-white hover:bg-[#4b2a14] text-black hover:text-white h-[50px] w-[320px] rounded-[30px] border-2 border-black flex items-center justify-center">Add to Cart</h2></div> 
           </div> 
            <div className="md:ml-[30px] h-[500px] w-[400px]  bg-white">   <img className="h-[300px] w-full border-1 border-black "src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F3.jpg&w=1920&q=75"/><h2 className="text-black text-2xl font-bold md:ml-[20px] ml-3 mt-[30px]"> Fish Tacos with Chipotle Crema</h2><br></br><h3 className="text-gray-600 md:ml-[30px] ml-4 font-bold">4 chicken legs *  Chilli Sauce * Soft Drinks</h3>
           <div className=" md:ml-[30px] ml-4 mt-[15px] relative z-10"><h2 className="bg-white hover:bg-[#4b2a14] text-black hover:text-white h-[50px] w-[320px] rounded-[30px] border-2 border-black flex items-center justify-center">Add to Cart</h2></div> 
            </div> 
            </div> 
            <div  className=" md:flex flex-row flex-col mt-[60px]">
            <div className="h-[500px] md:w-[400px] w-full  bg-white md:ml-[50px]">   <img className="h-[300px] w-full   border-1 border-black" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F4.jpg&w=1920&q=75"/><h2 className="text-black text-2xl font-bold md:ml-[30px] ml-3 mt-[30px]"> Broken Lasagna & Parmesan</h2><br></br><h3 className="text-gray-600 md:ml-[30px] ml-4 font-bold">4 chicken legs *  Chilli Sauce * Soft Drinks</h3>
           <div className=" md:ml-[30px] ml-4 mt-[15px] relative z-10"><h2 className="bg-white hover:bg-[#4b2a14] text-black hover:text-white h-[50px] w-[320px] rounded-[30px] border-2 border-black flex items-center justify-center">Add to Cart</h2></div> 
          </div>
          
          
           <div className=" md:ml-[30px]  h-[500px] md:w-[400px]  bg-white"> <img className="h-[300px] w-full  border-1 border-black" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F5.jpg&w=1920&q=75"/><h2 className="text-black text-2xl font-bold md:ml-[30px] ml-3 mt-[30px]">Seared Scallops with Butter </h2><br></br><h3 className="text-gray-600 md:ml-[30px] ml-4 font-bold">4 chicken legs *  Chilli Sauce * Soft Drinks</h3>
           <div className=" md:ml-[30px] ml-4 mt-[15px] relative z-10"><h2 className="bg-white hover:bg-[#4b2a14] text-black hover:text-white h-[50px] w-[320px] rounded-[30px] border-2 border-black flex items-center justify-center">Add to Cart</h2></div> 
           </div> 
            <div className=" md:ml-[30px] h-[500px] md:w-[400px] w-full  bg-white">   <img className="h-[300px] w-full border-1 border-black "src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F6.jpg&w=1920&q=75"/><h2 className="text-black text-2xl font-bold md:ml-[30px] ml-3 mt-[30px]">Double-Stack Mushroom </h2><br></br><h3 className="text-gray-600 md:ml-[30px] ml-4 font-bold">4 chicken legs *  Chilli Sauce * Soft Drinks</h3>
           <div className=" md:ml-[30px] ml-4 mt-[15px] relative z-10"><h2 className="bg-white hover:bg-[#4b2a14] text-black hover:text-white h-[50px] w-[320px] rounded-[30px] border-2 border-black flex items-center justify-center">Add to Cart</h2></div> 
            </div> 
           </div>
             
           
                <div className="md:h-[600px] h-220  rounded-[40px]  bg-black  md:flex flex-row flex-col md:w-[1160px] w-full md:px-0 px-2 md:ml-[100px] md:mt-[100px]" >
                    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F16.png&w=2048&q=75" className="md:h-[450px] md:w-[400px] h-100 w-60 md:ml-[80px] ml-15 md:mt-[80px] md:py-0 py-20"/>
                  <div className="flex flex-col">
                     <h1 className="text-white md:ml-[60px] ml-5 md:mt-[180px] md:mt-20 mt-3 font-bold md:ml-[60px] md:text-5xl text-3xl">Are you Ready to Start<br></br> your online Order?</h1>
                <h6 className=" text-gray-400 md:ml-[60px] ml-5 mt-[40px] drop-shadow-lg relative z-10">Bndulgence diminution so discovered mr apartments. Are off under folly death<br></br> wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am<br></br> or limits hearts. Resolve parties but why she shewing. She sang know now</h6>   
                <h2 className="bg-white hover:bg-black hover:border-2 hover:border-white text-black hover:text-white h-[50px] w-[180px] rounded-[30px] border-2 border-black flex items-center justify-center md:ml-[60px] ml-22  mt-[50px]">App Store</h2>
                             <h2 className="bg-[#7b4c2b] hover:bg-white text-white hover:text-black h-[50px] w-[180px] rounded-[30px] flex items-center justify-center md:ml-[260px] ml-22 absolute md:mt-[440px] mt-95 ">Play Store</h2>
                </div>  
           </div>  
           <div>  <Video/></div>
<div>
<Master/></div>
<div><News/></div>
     <div className="relative">
              
                <div className="md:h-[500px] h-275 rounded-[40px]  bg-black  md:flex flex-row flex-col md:mt-30 mt-20 md:w-[1200px] w-full md:ml-[80px] relative z-10 -mb-40" >
                        
   
                  <div className="flex flex-col">
                     <h1 className="text-white md:ml-[80px] md:mt-[100px] mt-25 font-bold md:ml-[80px] ml-10 text-2xl">About Us</h1>
                <h6 className=" text-gray-400 md:ml-[80px] mt-[40px] ml-10 drop-shadow-lg relative z-10">Continued at zealously<br></br> necessary is Surrounded sir<br></br> motionless she end literature.<br></br>Gay direction neglected.</h6>   
                                </div> 
                                  <div className="flex flex-col">
                     <h1 className="text-white md:ml-[80px] md:mt-[100px] mt-15 font-bold md:ml-[80px] ml-10 text-2xl">Explore</h1>
                <h6 className=" text-gray-400 md:ml-[80px] ml-10 mt-[40px] drop-shadow-lg relative z-10 md:space-y-15 space-y-10">Company Profile<br></br>About<br></br>Help Center<br></br>Career<br></br>Features<br></br>Contact</h6>   
                                </div>  
                                
            <div className="flex flex-col">
        <h1 className="text-white md:ml-[80px] md:mt-[100px] mt-15 font-bold md:ml-[80px] ml-10 text-2xl">Contact Info</h1>
        <h6 className=" text-gray-400 md:ml-[80px] ml-10 mt-[40px] drop-shadow-lg relative z-10">175 10h Street, Office 375<br></br> Berlin, De 21562<br></br>+123 34598768<br></br>+554 34598734<br></br>food@restan.com</h6>   
         </div> 
        <div className="flex flex-col ">
                     <h1 className="text-white md:ml-[80px] md:mt-[100px] mt-15 font-bold md:ml-[80px] ml-10 text-2xl">Newsletter</h1>
                <h6 className=" text-gray-400 md:ml-[80px] ml-10 mt-[40px] drop-shadow-lg relative z-10">Join our subscribers list to get the<br></br> latest news and special offers.<br></br> motionless she end literature.<br></br>Gay direction neglected.</h6>   
       </div> 
       </div>
         <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"className="md:h-40 h-18 w-37 md:w-130 relative md:ml-0 ml-30 top-50  z-30 md:top-45 md:px-45 md:py-10 md:mt-20"/>
<div className="md:flex flex-row relative z-100 md:top-25 top-60 ml-5 text-white md:ml-240"><h5 >© Copyright 2025. Restan. All Rights Reserved</h5></div>

</div>
</div>
  )
 }
        
  

       
        