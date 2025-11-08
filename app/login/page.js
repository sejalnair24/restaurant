"use client";
import { useRouter } from "next/navigation";
import { login, createAccount, logout, resetEmail } from "../core/auth";

import { useState } from "react";
import Footer from "../components/Footer";
export default function Login()
{const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
         const router=useRouter();
    return(
     
                  <div className=" flex flex-col">
                    <div className=" bg-gray-100 dark:bg-gray-600 dark:bg-black w-full">
            
                    <div className=" bg-gray-100 dark:bg-gray-600 ">
                        <div className="flex flex-row md:items-center px-30 md:py-10 py-5 border-b-gray-600 border-b-1  md:justify-between bg-black text-white  md:w-full ">
                           
                            <img className=" md:w-28 w-24 mr-8 " src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"/>
                            <div className="md:flex flex-row hidden md:block font-bold text-lg px-8 space-x-10  ">
                              <div onClick={()=>router.push("/")} >Home</div>
                              <div>Pages</div>
                              <div onClick={()=>router.push("/menu")}>Menu</div>
                              <div>Blog</div>
                              <div onClick={()=>router.push("/cart")}>Shop</div>
                              <img className="size-12 rounded-full mx-10  " src="https://tse1.mm.bing.net/th/id/OIP.JRBIv4WXa_jQW7MLYOe06wHaHa?pid=Api&P=0&h=180"onClick={()=>router.push("/cart")}/>
                              
                              </div>
                              <div className="border-2 border-white flex items-center justify-center w-70 h-14 text-lg font-bold  hover:bg-white hover:text-black transition hidden md:block ">Reservation</div>
                        </div>
                        <div className="relative bg-[url('https://i.pinimg.com/1200x/53/10/f2/5310f24f0f5ba2776ad6eb390fdd4fa9.jpg')] md:bg-cover md:bg-center bg-contain bg-no-repeat text-white text-center md:py-60 py-50 ">
            
                 
                
                    <div className="md:absolute md:inset-0 md:bg-black/60"></div>
            
            
                  <div className="relative z-10 -mt-40">
                    <h1 className="md:text-5xl text-4xl font-bold  ">Login Page</h1>
                    <p className="text-lg mt-5 font-semibold">
                      Home <span className="text-gray-300"></span> login
                    </p>
                  </div>
                </div>
                </div>   </div>
                <div className="md:flex flex-row flex-col bg-white md:h-130  md:mt-10 -mt-40 md:ml-40">
                    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F14.jpg&w=3840&q=75"className="md:h-130 h-100 md:w-140 w-100 md:px-0 px-2  rounded-[20px]"/>
                       <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"className="  h-15 w-25 md:-ml-127 md:mt-12 -mt-90 ml-7"/>
                    
                
                
                  <div className="md:ml-130 ml-10">  <h1 className="text-black text-3xl font-bold  md:mt-25 mt-90 ">WELCOME BACK</h1></div>
                   <div className="md:-ml-63 ml-11"> <h6 className="text-gray-700  md:mt-38 mt-5 ">Enter your email and password</h6></div>
                    <div className="flex flex-col md:-ml-56 ml-10">
                        <input className="md:w-90 w-70 h-13 bg-gray-300 text-black rounded-[5px] md:mt-50 mt-5 px-7 "type="email"placeholder="Email*" onChange={(e) => setEmail(e.target.value)}
                        />
                         <input className="md:w-90 w-70 h-13 bg-gray-300 text-black rounded-[5px] mt-5 items-center justify-center px-7 " type="password"placeholder="xxxxxx"onChange={(e)=>setPassword(e.target.value)}
                       />
                        <button className="md:w-50 w-50 h-13 bg-gray-800 rounded-[5px] mt-5   justify-center items-center mx-20   hover:bg-[#7b4c2b]"onClick={async(event)=>{
                          console.log(email,password);
                          await login (email,password);
                        }}>Login
                      </button>
                      <button className="md:w-50 w-70 h-13 bg-gray-800 rounded-[5px] mt-5   justify-center items-center mx-20  hover:bg-[#7b4c2b]"onClick={async(event)=>{
                          console.log(email,password);
                          await createAccount (email,password);
                        }}>Sign Up
                      </button>
                      <button className="md:w-50 w-70 h-13 bg-gray-800 rounded-[5px] mt-5   justify-center items-center mx-20  hover:bg-[#7b4c2b]"onClick={async(event)=>{
                          console.log(email,password);
                          await resetEmail(email,password);
                        }}>Send Reset Email
                      </button>
                       <div className=" flex flex-row ">  <h6 className="text-gray-700 md:ml-0 ml-2 mt-5 "> Don't have an account?</h6><h6 className="text-red-500 underline mt-5 ml-2"> Register Now!</h6></div>
                    </div>
                    
                 
                </div>
     <div >
              
                <div className="md:h-[500px] h-275 rounded-[40px]  bg-black  md:flex flex-row flex-col md:mt-3 mt-20 md:w-[1200px] w-full md:ml-40 relative z-10 -mb-40" >
                        
   
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
      <div className="mt-32"><Footer/></div> 
</div>
        </div>
    )
}