"use client";
  import { useRouter } from "next/navigation";
  export default function Video(){
    return(
<div >
    <div className="relative ">
  <div className="md:flex flex-row flex-col md:mt-20 items-start justify-self-start relative bg-white w-full dark:bg-black">
 
    <div className="absolute md:mt-[100px] mt-130 md:left-180 bg-white shadow-lg  md:w-140 w-full md:px-10 px-3 py-10 dark:bg-black ">
      <h3 className="text-4xl font-bold text-gray-800 mb-2 mt-5 dark:text-white ">
        Opening Hours
      </h3>
    
      <p className="my-4 md:w-100 w-85 text-gray-600 dark:text-white">
        A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center..
      </p>
      <div>
        <ol >
          <li className="flex items-start mb-2 text-[20px] text-black text-bold dark:text-[#7b6749]">Sunday to Tuesday: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   10:00 - 09:00</li>
                                              
 <li className="flex items-start mb-2 text-[20px] text-black text-bold dark:text-[#7b6749]">Wednesday to Thursday:&nbsp;
11:30 - 10:30</li>
<li className="flex items-start mb-2 text-[20px] text-black text-bold dark:text-[#7b6749]">Friday & Saturday:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
10:30 - 12:00</li>
        </ol>

      </div>
      <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
  <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://tse1.mm.bing.net/th/id/OIP.dRLdfGBeZTZkhsVOumBI-gAAAA?pid=Api&P=0&h=180"  />
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-[#7b6749]">Call Anytime</p>
      <p className="text-2xl font-bold italic text-gray-900 dark:text-white">+964733-378901</p>
    </div>
    
  </div>
</div>
    </div>
     <iframe width="560" height="315"className="md:w-[700px] w-90 h-[450px] object-cover mx-10 rounded-lg md:ml-[90px] ml-2  md:px-0 px-4 md:mt-[200px] mt-20" src="https://www.youtube.com/embed/F3zw1Gvn4Mk?si=0ftxkCNJCcWesXoS" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>

<div><img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F4.png&w=3840&q=75" className=" h-[250px] w-[500px] mt-[550px] hidden md:block"/></div>
   
  </div>
</div>
   </div>)}
  