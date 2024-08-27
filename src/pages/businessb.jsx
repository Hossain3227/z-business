import { Link } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaPersonRunning } from "react-icons/fa6";
import Business from "./business";

const Businessb = () => {
    return (
        
       <div className="mb-48">

<div className="hero relative md:h-[680px] h-[1100px] flex items-start md:justify-start md:items-center py-10 md:py-0 px-6 md:px-0">
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat md:blur-none blur-sm"
    style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),url(https://i.ibb.co/xhCPzxx/liz-pullan-pattathy-r-Pt-PNAltx-Yw-unsplash.jpg)' }}
  ></div>
  <div className="relative md:ml-6 z-10">
    <div className="text-black">
      <h1 className="mb-5 text-4xl text-white font-bold uppercase md:w-[60%] md:text-start text-center">
        Explore <br /> Our site
      </h1>
      <p className="mb-8 text-[18px] text-slate-400 md:w-[60%] md:text-start text-center">
        Hurry up and buy your desire items before they go out of stock
      </p>
      <div className="gap-4 flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start">
        <Link to={'/allitems'} className="btn w-[150px] h-[40px] text-white bg-red-500 rounded-3xl text-[16px] border-none">
          View items
        </Link>
        <button className="btn w-[150px] h-[40px] btn-outline border-white text-white rounded-3xl text-[16px]">
          Learn more
        </button>
      </div>
    </div>
  </div>
</div>


            
<div className="flex md:flex-row flex-col items-center justify-center gap-4 md:px-8 w-[75%] pt-4 absolute bottom-0 transform -translate-y-26  md:translate-y-24 px-6">
  <div className="flex flex-col py-8 pl-8 bg-red-500 text-white shadow-xl border w-[30%]">
    <span className="mb-2 transition-colors duration-500 group-hover:text-white">
      <span className="text-5xl"><FaThumbsUp /></span>
    </span>
    <h2 className="text-2xl mb-2">3k+ </h2>
    <p className="text-slate-300 w-[50%]">
      Our site is widely popular for our collection.
    </p>
  </div>

  <div className="flex flex-col py-8 pl-8 bg-red-500 text-white shadow-xl border w-[30%]">
    <span className="mb-2 transition-colors duration-500 group-hover:text-white">
      <span className="text-5xl"><FaCartShopping /></span>
    </span>
    <h2 className="text-2xl mb-2">900+</h2>
    <p className="text-slate-300 w-[80%]">
      We have various collection of all sorts of popular bd handicraft items
    </p>
  </div>

  <div className="flex flex-col py-8 pl-8 bg-red-500 text-white shadow-xl border w-[30%]">
    <span className="mb-2 transition-colors duration-500 group-hover:text-white">
      <span className="text-5xl"><FaPersonRunning /></span>
    </span>
    <h2 className="text-2xl mb-2">10+</h2>
    <p className="text-slate-300 w-[70%]">
      We're the oldest and most popular and still providing best services.
    </p>
  </div>
</div>

<div className="mt-40 mb-10">
        <Business></Business>
</div>


       </div>

    );
};

export default Businessb;