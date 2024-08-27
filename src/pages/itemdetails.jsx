import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";



const Itemdetails = () => {
    
    // const {user} = useContext(AuthContext)
    const item = useLoaderData()
    const navigate = useNavigate()
    
   
  



    return (
        <div className="flex md:flex-row flex-col gap-4 my-12">

            <div className="md:w-1/2 w-full p-4">
             <img className="rounded-lg" src={item.image} alt="" />

             <div className=" mt-4 flex items-center justify-between">
              
            </div>
            </div>
            
            <div className="md:w-1/2 w-full p-4">
                <h2 className="text-4xl mb-4"> Item details: </h2>
                <h2 className="text-2xl mb-2">Title: {item.title}</h2>
                <p className="mb-4">Details: {item.description}</p>

                
                
                <div className="flex justify-between text-[18px] mb-4">
            <span className="bg-blue-200 text-blue-800 text-xs px-4 py-2 rounded-lg w-[40%]">Category: {item.category}</span>
            <span> Item availability : {item.status}</span>
        </div>


        

        

       
            </div>
            
        </div>
    );
};

export default Itemdetails;