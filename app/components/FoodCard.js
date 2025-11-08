"use client";

function FoodCard({foodimg,title,description,onBorrowClick,buttontext,price}){
    return (
         <div >
<div className="md:h-[500px] md:w-[400px] w-full rounded-3xl md:py-0 py-3 bg-white md:ml-7">
    <img
    src={foodimg}
    alt={title}
    className="md:h-[300px] h-60  w-250 border-1 border-black"/>
    <div className="text-black text-2xl font-bold md:ml-[30px] ml-1 md:mt-[30px]  mt-3 md:w-full w-65">{title} <h3 className="text-[#7b6749] md:ml-0 ml-70 md:mt-0 -mt-7">${price}</h3></div>
    <h3 className="text-gray-600 md:ml-[30px] ml-1 font-bold w-60">{description}</h3>
    <div className=" md:ml-[30px] ml-4 mt-3 mt-[15px] relative z-10">
        <button className="bg-white hover:bg-[#4b2a14] text-black hover:text-white md:h-[50px] md:w-[320px] h-13 w-80 rounded-[30px] border-2 border-black md:ml-0 -ml-4 flex items-center justify-center"onClick={onBorrowClick}>{buttontext}</button>
    </div>
     </div>
         </div>
    )
}
export default FoodCard;