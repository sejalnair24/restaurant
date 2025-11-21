"use client";
import { useRouter } from "next/navigation";
import { login, createAccount, resetEmail,logout } from "../core/auth";

import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../components/About";
export default function Login()
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
         const router=useRouter();
    return(
     
                  <div className=" flex flex-col">
                    <div className=" bg-gray-100 dark:bg-gray-600 dark:bg-black w-full">
            
                    <div className=" bg-gray-100 dark:bg-gray-600 ">
                      <div><Navbar/></div>
                        <div className="relative bg-[url('https://i.pinimg.com/1200x/53/10/f2/5310f24f0f5ba2776ad6eb390fdd4fa9.jpg')] md:bg-cover md:bg-center bg-contain bg-no-repeat text-white text-center md:py-60 py-50 ">
            
                 
                
                    <div className="md:absolute md:inset-0 md:bg-black/60"></div>
            
            
                  <div className="relative z-10 -mt-40">
                    <h1 className="md:text-6xl text-4xl font-bold font-[marcellus] ">Login Page</h1>
                    <p className="text-lg mt-5 font-semibold">
                      Home <span className="text-gray-300"></span> login
                    </p>
                  </div>
                </div>
                </div>   </div>
                <div className="md:flex flex-row flex-col bg-white dark:bg-black md:h-130  md:mt-10 -mt-40 md:ml-40">
                    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F14.jpg&w=3840&q=75"className="md:h-130 h-100 md:w-140 w-100 md:px-0 px-2  rounded-[20px]"/>
                       <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"className="  h-15 w-25 md:-ml-127 md:mt-12 -mt-90 ml-7"/>
                     <div className="md:ml-130 ml-10">  <h1 className="text-black dark:text-white text-3xl font-bold  md:mt-25 mt-90 font-[marcellus] ">WELCOME BACK</h1></div>
                   <div className="md:-ml-63 ml-11"> <h6 className="text-gray-700 dark:text-gray-500 md:mt-38 mt-5  font-[lato]">Enter your email and password</h6></div>
                    <div className="flex flex-col md:-ml-56 ml-10">
                        <input className="md:w-90 w-70 h-13 bg-gray-300 text-black rounded-[5px] md:mt-50 mt-5 px-7 "type="email"placeholder="Email*" onChange={(e) => setEmail(e.target.value)}
                        />
                         <input className="md:w-90 w-70 h-13 bg-gray-300 text-black rounded-[5px] mt-5 items-center justify-center px-7 " type="password"placeholder="xxxxxx"onChange={(e)=>setPassword(e.target.value)}
                       />
                        <button className="md:w-50 w-40 h-13 bg-gray-800 rounded-[5px] mt-5 text-white  justify-center items-center md:mx-20  hover:bg-[#7b4c2b]"onClick={async(event)=>{
                          console.log(email,password);
                          await login (email,password);
                        }}>Login
                      </button>
                      <button className="md:w-50 w-40 h-13 bg-gray-800 rounded-[5px] mt-5 text-white  justify-center items-center md:mx-20   hover:bg-[#7b4c2b]"onClick={async(event)=>{
                          console.log(email,password);
                          await createAccount (email,password);
                        }}>Sign Up
                      </button>
                      <button className="md:w-50 w-50 h-13 bg-gray-800 rounded-[5px] mt-5  text-white justify-center items-center md:mx-20 hover:bg-[#7b4c2b]"onClick={async(event)=>{
                          console.log(email,password);
                          await resetEmail(email,password);
                        }}>Send Reset Email
                      </button>
                       <div className=" flex flex-row ">  <h6 className="text-gray-700 dark:text-gray-500 md:ml-0 ml-2 mt-5 "> Don't have an account?</h6><h6 className="text-red-500 underline mt-5 ml-2"> Register Now!</h6></div>
                    </div>
           </div>
     <div >
     <div className="md:mt-18"><About/></div>
      <div className="mt-32"><Footer/></div> 
</div>
        </div>
    )
}