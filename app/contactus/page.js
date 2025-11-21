"use client";
import {useRouter}  from "next/navigation";
import Video from "../components/Video";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
export default function Contactus(){
    const router=useRouter();
    return(
        <div>
                <div className=" md:bg-gray-100 md:h-140 h-0 dark:bg-gray-600 dark:bg-black w-full">
                    <div><Navbar/></div>
                             <div className="relative bg-[url('https://i.pinimg.com/1200x/53/10/f2/5310f24f0f5ba2776ad6eb390fdd4fa9.jpg')] md:bg-cover md:bg-center bg-contain bg-no-repeat  text-white text-center md:py-60 py-50 ">
                       <div className="md:absolute md:inset-0 md:bg-black/60  "></div>
         <div className="relative z-10 -mt-40">
        <h1 className="md:text-6xl text-4xl font-bold font-[marcellus] ">Contact Us</h1>
        <p className="text-lg mt-5 font-semibold">
          Home <span className="text-gray-300"></span> contact us
        </p>
      </div>
                </div>

        </div>
         <div className="flex flex-col  h-[500px] md:mt-0 mt-70" >
            <div className="  md:mt-40 mt-20 md:flex flex-row flex-col  ">
       <div> <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fphone.png&w=640&q=75"className="h-[90px] w-[100px] md:ml-90 ml-20"/><h2 className="flex flex-col text-black md:ml-90 text-2xl mt-[25px] ml-20 font-bold dark:text-white">Hotline</h2><h4 className="text-black md:ml-90 ml-20 dark:text-white">+4733378901 </h4></div> 
        <div> <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fplaceholder.png&w=640&q=75"className="h-[90px] w-[100px] md:ml-50 ml-20 md:mt-0 mt-10"/><h2 className="flex flex-col text-black md:ml-50 text-2xl md:mt-[25px] mt-5 ml-20 font-bold dark:text-white">Our Location</h2><h4 className="text-gray-500 md:ml-50 ml-20 dark:text-white">55 Main Street,The <br></br>Grand Avenue 2nd Block,<br></br>New York City</h4></div> 
          <div>  <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Femail.png&w=640&q=75"className="h-[90px] w-[100px] md:ml-50 ml-20  md:mt-0 mt-10"/><h2 className="flex flex-col text-black md:ml-50 text-2xl md:mt-[25px] mt-5 ml-20 font-bold dark:text-white">Official Email</h2><h4 className="text-gray-500 md:ml-50 ml-20 dark:text-white">info@restan.com </h4></div> 
          </div>
         <div>
          
         </div>
          </div>
          <div className="md:w-300 w-full bg-white dark:bg-black md:mt-0 mt-75 h-150 border-1 border-black md:ml-40">
            <div className="text-[#82704e] font-bold font-[marcellus] text-2xl md:ml-125 md:mt-5 mt-10 ml-20">
                KEEP IN TOUCH
            </div>
            <div className="font-bold md:text-5xl text-4xl font-[lato] md:mt-5 md:ml-100 ml-7">Send us a Message</div>
            <form >
                <input type="text" placeholder=" Name" className="bg-gray-200 h-14 rounded-md p-3 mt-10 md:-py-10 md:w-200 w-70 md:ml-50 ml-10 dark:bg-gray-500  text-gray-900"/>
                <input type="email" placeholder=" Email" className="bg-gray-200 h-14 rounded-md p-3  md:w-95 w-70 md:ml-50 ml-10 dark:bg-black dark:bg-gray-500  md:mt-0 mt-3 text-gray-900"/>
                <input type="text" placeholder=" Phno" className="bg-gray-200 rounded-md h-14 p-3 md:mt-10 mt-3 md:w-95 w-70  ml-10 dark:bg-black  dark:bg-gray-500  text-gray-900"/>
                <br></br>
                <input type="text" placeholder=" Your Message" className="bg-gray-200 rounded-md p-3 md:mt-10 mt-3 md:w-200 w-70 h-32 md:ml-50 ml-10 dark:bg-black  text-gray-900 dark:bg-gray-500 "/><br></br>
                <button className="bg-[#82704e] text-white font-bold px-6 py-3 mt-10 mb-20 rounded-md md:ml-50 ml-20 hover:bg-black font-[marcellus]">Get In Touch</button>

            </form>
          </div>
          <div className="text-gray-300 text-8xl md:mt-10 md:ml-50 mt-12  w-full">RESTAN</div>
          
           
            <div className="md:flex flex-row flex-col md:mt-5 items-start md:justify-self-start relative ">
           
              <div className="md:-mt-20"><Video/></div>
             
                </div>  
                <div className="md:mt-25"><About/></div>
                <div className="md:mt-32 mt-28"><Footer/></div>
                
          </div>
    )
}