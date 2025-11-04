  "use client";
  import { useRouter } from "next/navigation";
  export default function Book(){
    return(
<div>
        <div className="md:flex flex-row flex-col">
         <div className="h-[450px] md:mt-0 mt-10 rounded-[40px] flex flex-col bg-white md:border-2 md:border-black md:ml-[100px]  md:w-[400px] w-full py-[80px] relative z-10" >
      
          <h1  className="text-black font-bold ml-[60px] md:text-3xl">Book a Table</h1>
    
                      <div className=" bg-white w-[270px] rounded-[5px] h-[90px] items-center border-2 border-gray-300 ml-[60px] mt-[20px] " >
                  <h2 className="mt-[7px] ml-[20px] text-gray-400 ">Phone</h2></div>
            <div htmlFor="people" className=" ml-[60px]  mt-[17px] bg-white w-[270px] rounded-[5px] h-[50px]  border-2 border-gray-300  text-gray-600 ">
                 <select id="people" className="ml-[20px] mt-[7px] pr-35"defaultValue="3 person">
                  <option value=" 1 Person space-x-10">1 Person</option>
                      <option value="2 Person">2 Person</option>
                          <option value="3 Person">3 Person</option>
                              <option value="4 Person">4 Person</option>
                                  <option value="5 Person">5 Person</option>
                 </select>
                 </div>
                  <div className=" ml-[60px]  mt-[17px] bg-white w-[270px] rounded-[5px] h-[40px]  border-2 border-gray-300  text-gray-600 "><h2 className="ml-[20px] mt-[7px]">Date</h2></div>  
                  
                  <div  className=" ml-[60px]  mt-[17px] bg-white w-[270px] rounded-[5px] h-[40px]  border-2 border-gray-300  text-gray-600 "><h2 className="ml-[20px] mt-[7px]">12:00pm</h2></div>  
                   <div  className=" ml-[60px]  mt-[20px] bg-[#7b4c2b] hover:bg-black w-[180px] rounded-[10px] border-2 border-gray-300  text-white "> <h2 className="ml-[20px] mt-[10px]  h-[40px]  ">Book A Table</h2>
                        </div>
                        </div> 
                           
                   <div className="md:flex flex-row flex-col">
                   <div > <h1 className="text-black text-3xl font-bold md:ml-97 ml-12 w-full absolute md:mt-[180px] -mt-17 dark:text-white">Our Popular Menu</h1></div>  
                
                 <div className="md:flex flex-row flex-col md:mt-[250px] mt-43 md:h-[200px] md:w-[200px] md:ml-60 ">
                 < img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F2.png&w=1080&q=75"className=" border-2 border-black dark:border-white rounded-[10px] hidden md:block"/>  
                   < img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F4.png&w=1080&q=75"className=" border-2 border-black  dark:border-white rounded-[10px] ml-[20px] hidden md:block"/>
                   < img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F1.jpg&w=1920&q=75"className="border-2 border-black  dark:border-white rounded-[10px] md:ml-[20px]  "/>
                     </div>    
                        </div>  
                         </div>
                         </div>
    )}