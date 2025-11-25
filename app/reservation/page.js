"use client";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import Book from "../components/Book";

export default function Reservation(){
     const router=useRouter();
    return(
         <div>
            <div><Navbar/></div>
              <div className="relative bg-[url('https://i.pinimg.com/1200x/53/10/f2/5310f24f0f5ba2776ad6eb390fdd4fa9.jpg')] md:bg-cover md:bg-center bg-contain bg-no-repeat  text-white text-center md:py-60 py-50 ">
                       <div className="md:absolute md:inset-0 md:bg-black/60  "></div>
         <div className="relative z-10 -mt-40">
        <h1 className="md:text-6xl text-4xl font-bold font-[marcellus] ">Online Reservation</h1>
        <p className="text-lg mt-5 font-semibold">
          Home <span className="text-gray-300"></span>reservation
        </p>
  </div>
                </div>
                <div className=" flex flex-row ">
                 
                    
    
    <iframe src="https://www.youtube.com/embed/F3zw1Gvn4Mk?controls=0&amp;loop=1&amp;preload=metadata&amp;enablejsapi=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1" frameBorder="0" width="100%" height="100%" allow="accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture" id="widget6" title="Mr Fox Restaurant Promo Video" className="h-130 w-190 mt-60 ml-20"></iframe>

                <div className="md:-ml-35 h-200 mt-30"><Book/></div> 
                </div>
                <div ><About/></div>
                <div className="mt-25"> <Footer/></div>
        </div>
    )
}