"use client";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";
export default function Menu(){
    const router=useRouter();
     return(
        <div className=" bg-gray-100 dark:bg-zinc-900 ">

            <div className="flex flex-row items-center px-30 py-10 border-b-gray-600 border-b-1  justify-between bg-black">
               
                <img className=" w-28 mr-8" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"/>
                <div className="md:flex flex-row font-bold text-lg px-8 space-x-10 hidden md:block text-white">
                  <div onClick={()=>router.push("/")}>Home</div>
                  <div>Pages</div>
                  <div>Menu</div>
                  <div>Blog</div>
                  <div>Shop</div>
                  <img className="size-12 rounded-full mx-10  " src="https://tse1.mm.bing.net/th/id/OIP.JRBIv4WXa_jQW7MLYOe06wHaHa?pid=Api&P=0&h=180"/>
                  
                  </div>

                
                  <div className="border-2 border-white flex items-center justify-center w-70 h-14 text-lg font-bold  hover:bg-white hover:text-black transition hidden md:block text-white">Reservation</div>

        </div>
        <div className="relative bg-[url('https://i.pinimg.com/1200x/53/10/f2/5310f24f0f5ba2776ad6eb390fdd4fa9.jpg')] md:bg-cover md:bg-center bg-contain bg-no-repeat text-white text-center py-60  ">
     
        <div className="absolute inset-0 md:bg-black/60"></div>

      
      <div className="relative z-10 md:-mt-40 -mt-45">
        <h1 className="md:text-5xl text-4xl font-bold  ">Food Menu</h1>
        <p className="text-lg mt-5 font-semibold">
          Home <span className="text-gray-300"></span> Menu
        </p>
      </div>
    </div>
    <div className="relative flex flex-row">
        <img className="w-1/2  md:h-220 h-180 w-full md:px-20 px-5 py-50 md:mt-0 -mt-110 "src="https://d26czciiy2b0rz.cloudfront.net/uploads/images/trio-breakfast--main-1750860174.png"/>
        <div className="absolute hidden md:block md:top-[6rem] md:left-100 bg-[#7b6749] shadow-lg  w-44 px-10 py-10 justify-center items-center menu-star rounded-full">
<h2 className="text-4xl font-bold text-amber-300 mb-2 mt-5 ">
        Menu
      </h2>
      <h3>
        Breakfast
      </h3>
        </div>
   <div className="md:w-1/2 w-full px-10 py-30">
   

    <div className="flex flex-row space-x-2 mb-6 md:mx-98 md:ml-145 -ml-50">
      <div className="border border-gray-400 px-4 py-1 text-black dark:text-white">Half</div>
      <div className="border border-gray-400 px-4 py-1 text-black dark:text-white">Full</div>
  </div>
    
    
    <div className="md:flex items-center flex flex-row md:justify-between mb-6  md:ml-0 -ml-95">
      <div className=" flex items-center md:space-x-4 space-x-2 ">
        <img
          src="https://i.pinimg.com/1200x/67/1c/d3/671cd30d7445eccad0c6ebe10ef2239a.jpg"
          
          className="md:w-20 w-17 h-20 rounded-full object-cover hidden md:block "
        />
        <div>

          <h3 className="text-xl font-bold text-black dark:text-white">Chicken Alfredo</h3>
          <p className="text-gray-600 dark:text-gray-100">Ricotta / Goat Cheese / Beetroot</p>

          <p className="text-gray-400 text-sm">Free Drinks</p>
        </div>
      </div>
      <div className="flex items-center md:space-x-4 space-x-2 ">
        <p className="text-lg font-bold text-yellow-800 md:ml-0 ml-9">$20</p>
        <p className="text-lg font-bold text-yellow-800">$40</p>
      </div>
    </div>

    
    <div class="md:flex items-center flex flex-row md:justify-between mb-6 md:ml-0 -ml-95">
      <div class="flex items-center md:space-x-4 space-x-2">
        <img
          src="https://i.pinimg.com/1200x/3a/6d/c3/3a6dc3a6f04b8231dbb55eee182fdc73.jpg"
          
          className="w-20 h-20 rounded-full object-cover hidden md:block"
        />
        <div>

       
          <h3 class="text-xl font-bold text-black dark:text-white">Fish Chips</h3>
          <p class="text-gray-600 dark:text-gray-100">Atlantic / Chips / Salad / Tartare</p>

          <p class="text-gray-400 text-sm">Free Drinks</p>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <p class="text-lg font-bold text-yellow-800 md:ml-0 ml-9">$36</p>
        <p class="text-lg font-bold text-yellow-800">$70</p>
      </div>
    </div>

    
    <div class="md:flex items-center flex flex-row md:justify-between mb-6 md:ml-0 -ml-95">
      <div class="flex items-center md:space-x-4 space-x-2">
        <img src="https://i.pinimg.com/736x/3c/b2/6e/3cb26eb0b32e52171c70c89b3eefc8c5.jpg" className="w-20 h-20 rounded-full object-cover hidden md:block"
        />
        <div>

         
          <h3 class="text-xl font-bold text-black dark:text-white">Ebony Fillet Steak</h3>
          <p class="text-gray-600 dark:text-gray-100">Truffle mash / pepper sauce</p>

          <p class="text-gray-400 text-sm">Free Drinks</p>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <p class="text-lg font-bold text-yellow-800  md:ml-0 ml-15">$44</p>
        <p class="text-lg font-bold text-yellow-800">$85</p>
      </div>
    </div>
    <div class="md:flex items-center flex flex-row md:justify-between mb-6 md:ml-0 -ml-95">
      <div class="flex items-center md:space-x-4 space-x-2">
        <img src="https://i.pinimg.com/1200x/d3/07/2a/d3072adbd91ba3094777720a1337a34a.jpg" className="w-20 h-20 rounded-full object-cover hidden md:block"/>
        <div>

         

          <h3 class="text-xl font-bold text-black dark:text-white">Chicken grill</h3>
          <p class="text-gray-600 dark:text-gray-100">Ricotta / goat cheese / beetroot</p>

          <p class="text-gray-400 text-sm">Free Drinks</p>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <p class="text-lg font-bold text-yellow-800">$20</p>
        <p class="text-lg font-bold text-yellow-800">$40</p>
      </div>
    </div>
  </div>
    </div>
     <div className="relative md:flex flex-row flex-col  my-[-100px]">
       
   <div class="md:w-1/2 w=full md:px-10 px-5">
   

    <div class="flex flex-row  space-x-2 mb-6 md:mx-98 mx-40  md:ml-145 ml-20">
      <div class="border border-gray-400 px-4 py-1 text-black dark:text-white">Half</div>
      <div class="border border-gray-400 px-4 py-1 text-black dark:text-white">Full</div>

   
</div>
    
    <div class="md:flex items-center  md:justify-between md:mb-6 ">
      <div class="md:flex items-center md:space-x-4 ">
        <img
          src="https://i.pinimg.com/1200x/04/6f/11/046f1140c8d118c0539c5faadd41a782.jpg" class="w-20 h-20 rounded-full object-cover hidden md:block"
        />
        <div >

        

          <h3 class="text-xl font-bold text-black md:mt-0 mt-85 dark:text-white">Brownies</h3>
          <p class="text-gray-600 dark:text-gray-100  ">Ricotta / Goat Cheese / Beetroot</p>

          <p class="text-gray-400 text-sm ">Extra Free Drinks</p>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <p class="text-lg font-bold text-yellow-800 md:mt-0 -mt-17 md:ml-0 ml-63 ">$34</p>
        <p class="text-lg font-bold text-yellow-800 md:mt-0 -mt-17 ">$65</p>
      </div>
    </div>

    
    <div class="md:flex items-center justify-between mb-6">
      <div class="flex items-center space-x-4">
        <img
          src="https://i.pinimg.com/1200x/26/a0/d9/26a0d95731c01c292be0f3510b3b13fc.jpg "
          
          className="w-20 h-20 rounded-full object-cover hidden md:block"
        />
        <div>

       

          <h3 class="text-xl font-bold text-black md:mt-0 mt-10 dark:text-white">Cheesecakes</h3>
          <p class="text-gray-600 dark:text-gray-100">Atlantic / Chips / Salad / Tartare</p>

          <p class="text-gray-400 text-sm">Extra Free Drinks</p>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <p class="text-lg font-bold text-yellow-800 md:ml-0 ml-63 md:mt-0 -mt-21">$55</p>
        <p class="text-lg font-bold text-yellow-800 md:mt-0 -mt-21">$100</p>
      </div>
    </div>

    
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center space-x-4">
        <img src="https://i.pinimg.com/736x/b0/fd/ed/b0fdedcc415ee9ef12528f01c7366326.jpg" className="w-20 h-20 rounded-full object-cover hidden  md:block"
        />
        <div>


          <h3 class="text-xl font-bold text-black dark:text-white">Muffins</h3>
          <p class="text-gray-600 dark:text-gray-100">Truffle mash / pepper sauce</p>

          <p class="text-gray-400 text-sm">Extra Free Drinks</p>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <p class="text-lg font-bold text-yellow-800">$66</p>
        <p class="text-lg font-bold text-yellow-800">$120</p>
      </div>
    </div>
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center space-x-4">
        <img src="https://i.pinimg.com/736x/3b/6c/4e/3b6c4edfcc5c9abafb88f25f7bb0181d.jpg" className="w-20 h-20 rounded-full object-cover hidden md:block"
        />
        <div>

        

          <h3 class="text-xl font-bold text-black dark:text-white">Cupcakes</h3>
          <p class="text-gray-600 dark:text-gray-100">Ricotta / goat cheese / beetroot</p>

          <p class="text-gray-400 text-sm">Extra Free Drinks</p>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <p class="text-lg font-bold text-yellow-800">$20</p>
        <p class="text-lg font-bold text-yellow-800">$40</p>
      </div>
    </div>
  </div>
  <img className="md:w-1/2 md:px-20 px-5 py-10 md:h-150 h-90 md:w-200 md:mt-0 -mt-185 w-full "src="https://i.pinimg.com/1200x/dc/7f/0a/dc7f0aca9f8fd611fd2aa44560e315f3.jpg"/>
        <div className="absolute hidden md:block top-[-3rem] left-200 bg-[#7b6749] shadow-lg  w-44 px-10 py-10 justify-center items-center menu-star rounded-full">
<h2 className="text-4xl font-bold text-amber-300 mb-2 mt-5 ">
        Menu
      </h2>
      <h3>
        Lunch
      </h3>
        </div>
    </div>
     <div className="relative bg-[url('https://i.pinimg.com/736x/46/a4/6b/46a46bbfaf387ef48273e60e3ed31c5a.jpg')] md:bg-cover md:bg-center bg-contain text-white md:mt-30 mt-130 md:h-[70vh] h-130 flex flex-col justify-center pl-32">
  
  <div className="absolute inset-0 bg-black/60"></div>

  
  <div className="relative z-10 ">
    <h1 className="md:text-6xl text-4xl md:font-extrabold font-bold md:w-1/2 w-full md:mt-0 mt-5 md:ml-0 -ml-30">30 MINUTES DELIVERY!</h1>
    <p className="md:text-[18px] mt-5  md:w-3/4 w-full  md:ml-0 -ml-30 text-gray-300">
     A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.
    </p>
    <div className="mt-10 bg-[#7b6749] w-27 h-13 px-3 py-3  md:ml-0 -ml-30">
        Order Now
    </div>
  </div>
</div>
<div className="md:flex flex-row flex-col">
<div class="md:w-1/2 w-full md:px-10 px-5 py-40 ">
   <div className="text-[#7b6749] text-[30px] md:pl-30 pl-10 md:mt-0 -mt-15">Fresh From Ocean</div>

   <div className="text-black mb-10 text-[44px] md:pl-37 pl-18 dark:text-white">Sea Food</div>
    <div class="flex  space-x-2 mb-6 md:mx-145 mx-45">
      <div class="border border-gray-400 px-4 py-1 text-black dark:text-white">Half</div>
      <div class="border border-gray-400 px-4 py-1 text-black dark:text-white">Full</div>
</div>
   
    
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center space-x-4">
        <img
          src="https://i.pinimg.com/1200x/97/32/38/9732384f1992220f2b5fc4e630ccdf51.jpg"
          
          class="w-20 h-20 rounded-full object-cover hidden md:block"
        />
        <div>

         

          <h3 class="text-xl font-bold text-black dark:text-white">Salmon Fry</h3>
          <p class="text-gray-600 dark:text-gray-100">Ricotta / Goat Cheese / Beetroot</p>

          <p class="text-gray-400 text-sm">Extra Free Drinks</p>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <p class="text-lg font-bold text-yellow-800">$40</p>
        <p class="text-lg font-bold text-yellow-800">$80</p>
      </div>
    </div>

    
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center space-x-4">
        <img
          src="https://i.pinimg.com/736x/b5/d3/25/b5d325ceec91507ec3ebba0873b50b1b.jpg"
          
          className="w-20 h-20 rounded-full object-cover hidden md:block"
        />
        <div>

        

          <h3 class="text-xl font-bold text-black dark:text-white">Pangasius or Basa</h3>
          <p class="text-gray-600 dark:text-gray-100">Atlantic / Chips / Salad / Tartare</p>

          <p class="text-gray-400 text-sm">Extra Free Drinks</p>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <p class="text-lg font-bold text-yellow-800">$15</p>
        <p class="text-lg font-bold text-yellow-800">$30</p>
      </div>
    </div>

    
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center space-x-4">
        <img src="https://i.pinimg.com/736x/84/0c/75/840c75d2794e2c10336b8cd42aaa893f.jpg" className="w-20 h-20 rounded-full object-cover hidden md:block"
        />
        <div>

          <h3 class="text-xl font-bold text-black dark:text-white">Clams</h3>
          <p class="text-gray-600 dark:text-gray-100">Truffle mash / pepper sauce</p>

          <p class="text-gray-400 text-sm">Extra Free Drinks</p>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <p class="text-lg font-bold text-yellow-800">$45</p>
        <p class="text-lg font-bold text-yellow-800">$90</p>
      </div>
    </div>
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center space-x-4">
        <img src="https://i.pinimg.com/736x/82/b4/59/82b459784464e248df731ee11076dcca.jpg" className="w-20 h-20 rounded-full object-cover hidden md:block"
        />
        <div>

        

          <h3 class="text-xl font-bold text-black dark:text-white">Red Crab</h3>

          <p class="text-gray-400 text-sm">Extra Free Drinks</p>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <p class="text-lg font-bold text-yellow-800">$20</p>
        <p class="text-lg font-bold text-yellow-800">$40</p>
      </div>
    </div>
  </div>
 
  <div class="md:w-1/2 w-full md:px-10 px-5 py-40 ">
   <div className="text-[#7b6749] text-[30px] md:pl-30 pl-10 md:mt-0 -mt-65">DRINKS & WINE</div>

   <div className="text-black mb-10 text-[44px] md:pl-37 pl-16 dark:text-white">Beverage</div>
    <div class="flex  space-x-2 mb-6 md:mx-140 mx-45">
      <div class="border border-gray-400 px-4 py-1 text-black dark:text-white">Half</div>
      <div class="border border-gray-400 px-4 py-1 text-black dark:text-white">Full</div>
 </div>
   
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center space-x-4">
        <img
          src="https://i.pinimg.com/736x/9e/e8/97/9ee8971fdda74b00d3403f79be9a7fe4.jpg"
          
          class="w-20 h-20 rounded-full object-cover hidden md:block"
        />
        <div>

         

          <h3 class="text-xl font-bold text-black dark:text-white">Wine</h3>
          <p class="text-gray-600 dark:text-gray-100">Ricotta / Goat Cheese / Beetroot</p>

          <p class="text-gray-400 text-sm">Extra Free Drinks</p>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <p class="text-lg font-bold text-yellow-800">$34</p>
        <p class="text-lg font-bold text-yellow-800">$65</p>
      </div>
    </div>

    
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center space-x-4">
        <img
          src="https://i.pinimg.com/736x/f8/56/1e/f8561ea80e14bd1989b4fe87736e1468.jpg"
          
          className="w-20 h-20 rounded-full object-cover hidden md:block"
        />
        <div>

        
          <h3 class="text-xl font-bold text-black dark:text-white">Coffee</h3>
          <p class="text-gray-600 dark:text-gray-100">Atlantic / Chips / Salad / Tartare</p>

          <p class="text-gray-400 text-sm">Extra Free Drinks</p>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <p class="text-lg font-bold text-yellow-800">$45</p>
        <p class="text-lg font-bold text-yellow-800">$90</p>
      </div>
    </div>

    
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center space-x-4">
        <img src="https://i.pinimg.com/736x/42/6c/7c/426c7cf03cd06e36dae8c20e04b646e3.jpg" className="w-20 h-20 rounded-full object-cover hidden md:block"
        />
        <div>


          <h3 class="text-xl font-bold text-black dark:text-white">Hot Chocolate</h3>
          <p class="text-gray-600 dark:text-gray-100">Truffle mash / pepper sauce</p>

          <p class="text-gray-400 text-sm">Extra Free Drinks</p>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <p class="text-lg font-bold text-yellow-800">$66</p>
        <p class="text-lg font-bold text-yellow-800">$120</p>
      </div>
    </div>
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center space-x-4">
        <img src="https://i.pinimg.com/736x/87/17/4a/87174a7f303abed8af3f85a138dc4176.jpg" className="w-20 h-20 rounded-full object-cover hidden md:block"
        />
        <div>

        
          <h3 class="text-xl font-bold text-black dark:text-white">Milk Shake</h3>
          <p class="text-gray-600 dark:text-gray-100">Ricotta / goat cheese / beetroot</p>

          <p class="text-gray-400 text-sm">Extra Free Drinks</p>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <p class="text-lg font-bold text-yellow-800">$20</p>
        <p class="text-lg font-bold text-yellow-800">$40</p>
      </div>
    </div>
 </div></div>

  
  <div className="bg-gray-200 md:py-20 py-10 md:mt-0 -mt-18 dark:bg-zinc-800">
    <div className="text-[#82704e] text-2xl font-bold text-center dark:text-amber-100 ">HAPPY CUSTOMERS</div>
  <div className="text-black text-4xl font-bold text-center mt-5 dark:text-white">Our Customers Feedback</div>

  <div className="md:flex flex-row flex-col">
    <div >
        <img className="menu-star h-[400px]  md:mt-20 mt-15 md:mx-40 rounded-full"src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F4.jpg&w=640&q=75"/>
    </div>
    <div className="md:w-1/2 w-full">

<div className="text-gray-400 text-[30px] mx-20  mt-20">5/5</div>
<div className="text-black text-3xl font-bold md:mx-20 mx-18 dark:text-white">Best Food Ever</div>
<div className="text-gray-500 md:text-2xl text-xl md:mx-20 mx-10 leading-normal">"Targeting consultation discover apartments,ndulgence off under folly death wrote cause her way spite.Plan upon yet way get cold spot its week.Almost do am or limits hearts,Resolve parties but why she shewing."</div>
<div className="text-black md:text-3xl text-2xl  mx-20 font-bold mt-10 dark:text-white">Matthew J. Wyman</div>



<div className="text-[#82704e] md:text-2xl  md:mx-20 mx-25 mt-3 font-bold">SENIOR CONSULTANT</div>
    </div>
  </div>
  </div>
  <div className="relative bg-[url('https://i.pinimg.com/736x/43/b7/f3/43b7f3d43071e3b9942cc0b78e2515b9.jpg')] bg-cover bg-center text-white md:mt-0 mt-30 h-[150vh] md:flex  justify-center md:pl-32 pl-10">
  
  <div className="absolute inset-0 bg-black/60 md:flex flex-row flex-col"></div>

  
  <div className="relative ">
   <div> <h1 className="text-2xl font-bold font-serif w-1/2 mt-10 md:py-0 py-15">RESERVATION</h1>
    <div className="md:text-6xl text-4xl font-extrabold font-serif md:w-1/2 w-full md:mt-0 -mt-10">Reserve your favorite private table</div>
    <p className="text-[18px] mt-5  md:w-1/2 w-full text-gray-300">
A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.    </p>
    <div className="mt-10  font-bold md:font-3xl  ">
        Lunch Menu |  Dinner Menu
    </div>
   
  </div></div>
<div className="md:w-1/2 w-full relative z-10 md:ml-0 -ml-5">
<div className="md:flex justify-items-normal md:w-[400px] w-full ">
  <form className="bg-gray-400 md:mt-20 mt-10 rounded-2xl md:p-8 p-4  ">
    <h2 className="text-2xl font-bold text-center mb-6 text-black">
      Book Your Table
    </h2>

   
    <div className="mb-4">
      <label className=" text-black font-semibold mb-2">Phone Number</label>
      <input
        type="number"
        placeholder="Enter your phone number"
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
    </div>

   
    <div className="mb-4">
      <label className=" text-black font-semibold mb-2">Number of Persons</label>
      <input
        type="number"
        min="1"
       
        className="w-full p-3 border border-gray-300 rounded-lg "
      />
    </div>

    
    <div className="mb-4">
      <label className=" text-black font-semibold mb-2">Date</label>
      <input
        type="date"
        className="w-full p-3 border border-gray-300 rounded-lg "
      />
    </div>

   
    <div className="mb-6">
      <label className=" text-black font-semibold mb-2">Time</label>
      <input
        type="time"
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
    </div>

   
    <button
      type="submit"
      className="w-full bg-[#82704e] hover:bg-white hover:text-black text-white font-semibold py-3 rounded-lg "
    >
      Book A Table
    </button>
  </form>
</div>
</div>
</div>

<div><Footer/></div>




    </div>)}