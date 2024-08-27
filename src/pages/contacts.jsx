import { FaPhoneAlt } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Contacts = () => {
    return (
        <div className="mt-6 md:px-0 px-4">
            <div className=" flex flex-col items-center justify-center space-y-4">

            <h2 className="text-4xl font-bold">Contact us</h2>
            <p className=" text-center " >get started today by contacting us and get to choose yur desirable home</p>
            </div>

            <div className="grid md:grid-cols-2 grid-col-1">
                <div className="">
                <h2 className="text-2xl mt-6 mb-6 text-center font-bold w-full">Get in touch</h2>
             <form className="flex flex-col" action="">
             <textarea placeholder="Enter your message" className="textarea textarea-bordered textarea-lg bg-gray-300 w-full" ></textarea>
             <div className="flex justify-between my-4 ">
             <input type="text" className="input input-bordered bg-gray-300 p-3 rounded-md w-[48%]" placeholder="enter your name" />
             <input type="text" className="input input-bordered bg-gray-300 p-3 rounded-md w-[48%]" placeholder="Email" />
             </div>
             
             <input type="text" className="input input-bordered bg-gray-300 p-3 rounded-md  my-4 " placeholder="Enter subject" />
             <button className="btn bg-blue-600 text-white">Send</button>
             </form>
                </div>
                   
                <div className=" flex flex-col items-center justify-center">
                   <p className="flex items-center  text-5xl my-6 text-blue-500"><FaHouse /><span className="ml-4 text-black text-[18px]">Jamal Khan,Chittagong.</span></p>
                   <p className="flex items-center  text-5xl my-6 text-blue-500"><FaPhoneAlt /><span className="ml-4 text-black text-[18px]">+1234563728</span></p>
                   <p className="flex items-center  text-5xl my-6 text-blue-500"><IoMdMail /><span className="ml-4 text-black text-[18px]">support@res.com</span></p>
                </div>
            
           </div>
        </div>

    );
};

export default Contacts;