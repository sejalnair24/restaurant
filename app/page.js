"use client";
import { useRouter } from "next/navigation";
import { useState } from 'react';
import FoodCard from "./components/FoodCard";
import { food } from "./items";
import Footer from "./components/Footer";
export default function Land(){
  const router=useRouter();
  const handleChange=(e)=>{const selected=e.target.value; if(selected){router.push(selected);}};
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    let cart=JSON.parse(localStorage.getItem("cart"))||[];
    cart.push(item);
    localStorage.setItem("cart",JSON.stringify(cart));
   alert("Item added to cart");
  }; 
   return(
       <div >
         <div className="bg-gray-800 md:h-[50px] h-[40px] w-full flex flex-row">
          <h2 className="md:ml-[40px] ml-[10px] font-bold relative z-10  mt-[10px] text-white">envato</h2><h2 className="relative z-10  mt-[10px] text-white">market</h2>
        <div className=" ml-[10px] relative z-10 md:mt-[10px] mt-[5px]"><h2 className="bg-green-700 w-[90px] h-[30px] md:ml-[1100px] ml-[160px] flex justify-center items-center">Buy now </h2></div>  
         </div>
          <div className="flex flex-row bg-[#7b4c2b]">  <h2 className=" font-bold relative z-10 md:h-[35px] h-[20px] md:ml-[300px] ml-[20px] hidden md:block text-white  mt-[10px]">Phone:+4733378901</h2><h2 className="relative  hidden md:block z-10 md:ml-[300px] ml-[300px]font-bold  mt-[10px] text-white ">Email: food@restan.com</h2></div>
         
         
          <div className=" md:h-screen h-[290px] flex flex-col  bg-no-repeat bg-center w-full md:bg-cover bg-contain " style={{backgroundImage:"url('https://restan-nextjs.vercel.app/assets/img/banner/14.jpg')"}} >
            
         
         <div className="h-[50px] w-[160px]  mx-150px flex flex-row  ml-[2px] md:mt-[40px] md:space-x-20 space-x-3 md:font-bold" >
          <div className=" md:mt-[6px] md:ml-[80px] ml-[10px] text-white hidden md:block drop-shadow-lg relative z-10  mt-[50px]">Home  </div>
         
           <div htmlFor="pages" className=" hidden md:block  text-white relative z-10 ">
                 <select id="pages" onChange={handleChange} className="mt-[7px] pr-10"defaultValue="">
                  <option value="" disabled>Pages</option>
                   <option value="/aboutus" className="text-black p-2">AboutUs</option>
                    <option value="/chef"className="text-black">Chef</option>
                      <option value="/login"className="text-black">Login</option>
                      <option value="/cart"className="text-black">Cart</option>
                   </select></div>
                   <div className=" md:mt-[6px] ml-[10px] text-white  drop-shadow-lg relative z-10 hidden md:block mt-[50px]"onClick={()=>router.push("/menu")}>Menu </div>
         
             <div ><img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75" className="relative z-10 md:ml-[90px] ml-30 md:mt-[4px] mt-[5px] md:h-15 h-9 md:w-150 w-30 0"/></div>

          <div className=" text-white hidden md:block relative z-10 md:absolute top-23  md:ml-[900px]  mt-[50px]"onClick={()=>router.push("/cart")}>Shop  </div>
          <div className="text-white  hidden md:block md:mt-[6px] relative z-10 md:ml-[350px] mt-[50px]" >Blog </div>
          <div className=" text-white hidden md:block md:mt-[6px] relative z-10  mt-[50px]">Contact  </div>
       
          </div>     
  <div className=" absolute inset-0 bg-black/40 flex items-center justify-center"></div>
          <div className=" md:mt-[200px] mt-[60px] md:ml-[450px] ml-[80px] space-x-4 relative z-10 ">
           <h1 className=" font-bold  md:text-7xl text-3xl drop-shadow-lg text-white "> Best Restaurant</h1>  
           <div className="md:w-50 md:h-50 w-20 h-20 border-2 border-[#b8860b] rounded-full md:ml-[130px] ml-[80px] md:mt-[50px] mt-[10px] ">
          
         <h3 className="md:text-2xl text-sm font-bold md:ml-14 ml-3 mt-6 md:mt-14 text-white">Restan</h3>   
         <h2 className="text-white md:ml-14 md:mt-3 hidden md:block">Best Food<br></br> since-1865S</h2>
           </div>
       
               </div>   
               
             
       
        <div className="md:flex flex-row flex-col">
         <div className="h-130 md:mt-0 mt-10 rounded-[40px] flex flex-col bg-white md:border-2 md:border-black md:ml-[100px]  md:w-[400px] w-full  relative z-10 p-2 " >
      
          <h1  className="text-black font-bold ml-[60px] md:text-3xl text-2xl md:mt-22 mt-18">Book a Table</h1>
    
                      <div className=" bg-white w-65 rounded-[5px] h-11 items-center border-2 border-gray-300 ml-[60px] mt-6 " >
                  <h2 className="mt-[7px] ml-[20px] text-gray-400 ">Phone</h2></div>
            
            
               <div htmlFor="people" className=" ml-[60px]  mt-5 bg-white w-65 rounded-[5px] h-11  border-2 border-gray-300  text-gray-600 ">
                 <select id="people" className="ml-[20px] mt-[7px] pr-35"defaultValue="3 person">
                  <option value=" 1 Person space-x-10">1 Person</option>
                      <option value="2 Person">2 Person</option>
                          <option value="3 Person">3 Person</option>
                              <option value="4 Person">4 Person</option>
                                  <option value="5 Person">5 Person</option>
                 </select>
                 </div>
                  <div className=" ml-[60px]  mt-[17px] bg-white w-65 rounded-[5px] h-11  border-2 border-gray-300  text-gray-600 "><h2 className="ml-[20px] mt-[7px]">Date</h2></div>  
                  
                  <div  className=" ml-[60px]  mt-[17px] bg-white w-65 rounded-[5px] h-11  border-2 border-gray-300  text-gray-600 "><h2 className="ml-[20px] mt-[7px]">12:00pm</h2></div>  
                   <div  className=" ml-[60px]  mt-7 bg-[#7b4c2b] hover:bg-black w-[180px] rounded-[10px] border-2 border-gray-300  text-white "> <h2 className="ml-[20px] mt-[10px]  h-[40px]  ">Book A Table</h2>
                        </div>
                        </div> 
                           
                   <div className="md:flex flex-row flex-col">
                   <div > <h1 className="text-black text-3xl font-bold md:ml-100 ml-10 w-full absolute md:mt-[180px] -mt-25">Our Popular Menu</h1></div>  
                
                 <div className="md:flex flex-row flex-col md:mt-[250px] mt-40 md:h-[200px] md:w-[200px] md:ml-45 md:gap-5 ">
                 < img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F2.png&w=1080&q=75"className=" border-2 border-black rounded-[10px] hidden md:block"/>  
                   < img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F4.png&w=1080&q=75"className=" border-2 border-black rounded-[10px] ml-[20px] hidden md:block"/>
                   < img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F1.jpg&w=1920&q=75"className="border-2 border-black rounded-[10px] md:ml-[20px]  "/>
                     </div>    
                        </div>  
                         </div>
                        </div>
                       
                        
    <div className="flex flex-col  h-[500px]">
            <div className="  md:mt-[500px] mt-240  md:flex flex-row flex-col  md:mt-0 mt-5">
       <div> <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=640&q=75"className="h-[90px] w-[100px] md:ml-[100px] ml-20"/><h2 className="flex flex-col text-black md:ml-[110px] text-2xl mt-[25px] ml-20 font-bold">Quality foods</h2><h4 className="text-black md:ml-[110px] ml-20">Belonging sir curiosity discovery extremity yet<br></br> forfeited prevailed own off. Traveling by<br></br> introduced of mr terminated.</h4></div> 
        <div> <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F14.png&w=640&q=75"className="h-[90px] w-[100px] md:ml-[100px] ml-20 md:mt-0 mt-10"/><h2 className="flex flex-col text-black md:ml-[110px] text-2xl md:mt-[25px] mt-5 ml-20 font-bold">Fast Delivery</h2><h4 className="text-black md:ml-[110px] ml-20">Belonging sir curiosity discovery extremity yet<br></br> forfeited prevailed own off. Traveling by<br></br> introduced of mr terminated.</h4></div> 
          <div>  <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F15.png&w=640&q=75"className="h-[90px] w-[100px] md:ml-[100px] ml-20  md:mt-0 mt-10"/><h2 className="flex flex-col text-black md:ml-[110px] text-2xl md:mt-[25px] mt-5 ml-20 font-bold">Delicious Recipes</h2><h4 className="text-black md:ml-[110px] ml-20">Belonging sir curiosity discovery extremity yet<br></br> forfeited prevailed own off. Traveling by<br></br> introduced of mr terminated.</h4></div> 
          </div>
         <div>
          
         </div>
          </div>
         
         
      <div >
            <div className="flex md:flex-row flex-col">
             
           <img src="https://restan-nextjs.vercel.app/assets/img/shape/4.jpg" className="md:h-[600px] h-250 md:w-[1200px] w-full md:ml-[70px] md:mt-[300px] mt-330 rounded-[50px]"/>

           
             <div className="flex md:flex-row flex-col md:ml-[150px] ml-15 absolute"> 
             <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F1.png&w=1080&q=75"className="h-[200px] w-[200px] md:mt-[400px] mt-99 md:ml-[20px] hidden md:block"/>
              <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F12.png&w=1080&q=75"className="h-[150px] w-[150px] md:mt-[650px] mt-100 flex flex-col absolute ml-[40px] hidden md:block"/>
             <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F15.png&w=1080&q=75"className="h-[250px] w-[250px] md:mt-[480px] mt-370 "/>
       <div> <h2 className="flex flex-row text-black md:mt-[450px] mt-15 md:ml-[90px] -ml-7 text-2xl font-bold ">Today Special Offer</h2>
           <h1 className="flex flex-row text-black mt-[30px] md:ml-[90px] -ml-7 text-4xl font-bold ">Explore Irresistible<br></br> Promotions!</h1>
           <h6 className="text-black mt-[20px] md:ml-[90px] -ml-7">Contrasted dissimilar get joy you instrument out reasonably. Again keeps<br></br> at no meant stuff. To perpetual do existence northward as difficult<br></br> preserved daughters. Continued at up to zealously necessary.
         </h6>
           <div className=" md:ml-[90px] mt-[30px] relative z-10"><h2 className="bg-[#7b4c2b] hover:bg-[#4b2a14] text-white w-[90px] h-[50px] w-[150px] rounded-[30px]  flex items-center justify-center">Order Today </h2></div> 
         </div>
          </div>
             
           </div> 
          </div> 
    
          
          
          
            <div className="flex flex-col ">
              <h1 className="text-[#7b4c2b] md:ml-0 mt-[80px] font-bold text-2xl flex items-center justify-center mt-[20px]">FOOD MENU</h1>
                   
                    <h1 className="text-black font-bold  md:text-5xl text-4xl md:ml-140 ml-8 mt-[20px]  w-full"> Our Specials Menu</h1> 
                  
              <div className=" bg-white md:w-[600px] w-full rounded-[5px] md:h-[80px] h-90 items-center border-2  border-black md:ml-120 md:mt-10  mt-5 md:flex flex-row flex flex-col md:text-xl text-2xl text-black" >
                 <h2 className=" absolute md:ml-[30px] ml-27 md:mt-0 -mt-50 ">Main Dishes</h2>
                 <h2 className="absolute md:ml-50 ml-27 md:mt-0 -mt-19">Desserts</h2>
                  <h2 className="absolute md:ml-[320px] ml-27 md:mt-0 mt-14">Sea Food</h2>
                    <h2 className="absolute md:ml-[460px] ml-27 md:mt-0 mt-47">Beverages</h2>
                  </div>

             </div>
             
         <div className=" md:grid grid-cols-3 w-full grid-rows-2  md:gap-5 md:ml-4  md:px-0 px-5 md:mt-10 mt-5  ">
          {food.map((element,index)=> (
            <FoodCard
            key={index}
            title={element.title}
            price={element.price}
            foodimg={element.image}
            description={element.description}

            buttontext={"Add to Cart"}
            
            onBorrowClick={()=>
              addToCart(element)}
            />
          ))}
        
           
           
            </div> 
         
          
           
           
             
           
                <div className="md:h-[600px] h-220  rounded-[40px]  bg-black  md:flex flex-row flex-col md:w-[1160px] w-full md:px-0 px-2 md:ml-[100px] md:mt-20" >
                    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F16.png&w=2048&q=75" className="md:h-[450px] md:w-[400px] h-100 w-60 md:ml-[80px] ml-15 md:mt-[80px] md:py-0 py-20"/>
                  <div className="flex flex-col">
                     <h1 className="text-white md:ml-[60px] ml-5 md:mt-[180px] md:mt-20 mt-3 font-bold md:ml-40 md:text-5xl text-3xl">Are you Ready to Start<br></br> your online Order?</h1>
                <h6 className=" text-gray-400 md:ml-[60px] ml-5 mt-[40px] drop-shadow-lg relative z-10">Bndulgence diminution so discovered mr apartments. Are off under folly death<br></br> wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am<br></br> or limits hearts. Resolve parties but why she shewing. She sang know now</h6>   
                <h2 className="bg-white hover:bg-black hover:border-2 hover:border-white text-black hover:text-white h-[50px] w-[180px] rounded-[30px] border-2 border-black flex items-center justify-center md:ml-[60px] ml-22  mt-[50px]">App Store</h2>
                             <h2 className="bg-[#7b4c2b] hover:bg-white text-white hover:text-black h-[50px] w-[180px] rounded-[30px] flex items-center justify-center md:ml-[260px] ml-22 absolute md:mt-[440px] mt-95 ">Play Store</h2>
                </div>  
           
       </div>  
<div className="relative ">
 


 
  <div className="md:flex flex-row flex-col items-start justify-self-start relative bg-white">
 
    <div className="absolute md:mt-[100px] mt-130 md:left-180 bg-white shadow-lg  md:w-140 w-full md:px-10 px-3 py-10 ">
      <h3 className="text-4xl font-bold text-gray-800 mb-2 mt-5 ">
        Opening Hours
      </h3>
    
      <p className="my-4 md:w-100 w-85 text-gray-600">
        A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center..
      </p>
      <div>
        <ol >
          <li className="flex items-start mb-2 text-[20px] text-black text-bold ">Sunday to Tuesday: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   10:00 - 09:00</li>
                                              
 <li className="flex items-start mb-2 text-[20px] text-black text-bold">Wednesday to Thursday:&nbsp;
11:30 - 10:30</li>
<li className="flex items-start mb-2 text-[20px] text-black text-bold">Friday & Saturday:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
10:30 - 12:00</li>
        </ol>

      </div>
      <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
  <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://tse1.mm.bing.net/th/id/OIP.dRLdfGBeZTZkhsVOumBI-gAAAA?pid=Api&P=0&h=180"  />
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-[#7b6749]">Call Anytime</p>
      <p className="text-2xl font-bold italic text-gray-900">+964733-378901</p>
    </div>
    
  </div>
</div>
    </div>
    
    <iframe width="560" height="315"className="md:w-[700px] w-90 h-[450px] object-cover mx-10 rounded-lg md:ml-[90px] ml-2  md:px-0 px-4 md:mt-[200px] mt-20" src="https://www.youtube.com/embed/F3zw1Gvn4Mk?si=0ftxkCNJCcWesXoS" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
<div><img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F4.png&w=3840&q=75" className=" h-[250px] w-[500px] mt-[550px] hidden md:block"/></div>
   
  </div>
</div>
    <div className="text-[#82704e] font-bold text-2xl md:mt-0 mt-165 md:mx-110 mx-13 md:ml-150 pt-20 ">
  ---MASTER CHEFS---
</div>
<div className="text-black font-bold text-[#82704e] md:text-4xl text-2xl md:mt-0 mt-5 md:mx-80 mx-15 md:ml-120 md:mt-2">
  MEET OUR SPECIAL CHEFS
</div>
<div className=" py-20 flex justify-center">
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
              src="/food.jpg"
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
<div className="md:flex flex-row flex-col">
  <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75"className="h-[350px] md:w-[550px] w-100 md:px-0 px-5 md:ml-50 mt-[50px]" /> 


   
  
    
   
 <div className="flex flex-row">
   <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75"className="h-[350px] md:w-[550px] w-100 md:ml-[60px] md:mt-[50px] mt-60 md:px-0 px-5 " />   </div> </div>
   
   <div className="md:flex flex-row flex-col md:mt-0 -mt-150 md:gap-[150px] ">
      <div className=" md:ml-50 ml-5 bg-white shadow-lg  md:w-[450px] w-full h-[200px] md:px-4 py-5 flex flex-col ">
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
 
    
  <div >
              
                <div className="md:h-[500px] h-275 rounded-[40px]  bg-black  md:flex flex-row flex-col md:mt-0 mt-20 md:w-[1200px] w-full md:ml-40 relative z-10 -mb-40" >
                        
   
                  <div className="flex flex-col">
                     <h1 className="text-white md:ml-[80px] md:mt-[100px] mt-25 font-bold md:ml-[120px] ml-10 text-2xl">About Us</h1>
                <h6 className=" text-gray-400 md:ml-[80px] mt-[40px] ml-10 drop-shadow-lg relative z-10">Continued at zealously<br></br> necessary is Surrounded sir<br></br> motionless she end literature.<br></br>Gay direction neglected.</h6>   
                                </div> 
                                  <div className="flex flex-col">
                     <h1 className="text-white md:ml-[80px] md:mt-[100px] mt-15 font-bold md:ml-[120px] ml-10 text-2xl">Explore</h1>
                <h6 className=" text-gray-400 md:ml-[80px] ml-10 mt-[40px] drop-shadow-lg relative z-10 md:space-y-15 space-y-10">Company Profile<br></br>About<br></br>Help Center<br></br>Career<br></br>Features<br></br>Contact</h6>   
                                </div>  
                                
           

        <div className="flex flex-col">
        <h1 className="text-white md:ml-[80px] md:mt-[100px] mt-15 font-bold md:ml-[120px] ml-10 text-2xl">Contact Info</h1>
        <h6 className=" text-gray-400 md:ml-[80px] ml-10 mt-[40px] drop-shadow-lg relative z-10">175 10h Street, Office 375<br></br> Berlin, De 21562<br></br>+123 34598768<br></br>+554 34598734<br></br>food@restan.com</h6>   
         </div> 
       
        <div className="flex flex-col ">
                     <h1 className="text-white md:ml-[80px] md:mt-[100px] mt-15 font-bold md:ml-[120px] ml-10 text-2xl">Newsletter</h1>
                <h6 className=" text-gray-400 md:ml-[80px] ml-10 mt-[40px] drop-shadow-lg relative z-10">Join our subscribers list to get the<br></br> latest news and special offers.<br></br> motionless she end literature.<br></br>Gay direction neglected.</h6>   
       </div> 
        
    
<div className="md:flex flex-row  md:mt-140 top-60  mt-54 ml-10 text-white md:-ml-50 "><h5 > Copyright 2025. Restan. All Rights Reserved</h5></div>

        </div>
        <div className="md:mt-32 mt-28"><Footer/></div>
         

</div>
</div>
      

           
    
          
           
    
    )
  }
        
  

       
        