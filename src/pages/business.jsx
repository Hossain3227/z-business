import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";


const Business = () => {
    useEffect(() => {
        // Initialize AOS when the component mounts
        AOS.init({ once: false });
      }, []);
  return (
    <div>
      <div className="mt-8">
        <h1 className="text-inherit text-5xl text-center font-roboto mb-4">
          Our Products<span className="text-5xl text-yellow-600"> Gallery</span>
        </h1>
        
      </div>
      <div className=" text-white">
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full " src="https://i.ibb.co/VY5qSCm/tom-crew-NUUj-Vj4-YQLA-unsplash.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://i.ibb.co/6r9GNr0/marco-j-haenssgen-crf8ebx-V0-HY-unsplash.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full " src="https://i.ibb.co/GdMvL6r/emteekay-rws83-X3-Jik-Q-unsplash.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://i.ibb.co/jkQ4j45/hoyoun-lee-yqw-TBPHbe-JQ-unsplash.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://i.ibb.co/PMm14vb/biao-yu-d-T1z-Egf8-Ft0-unsplash.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://i.ibb.co/bFH5VSC/product-03-217x215.png" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 row-start-2 row-span-2"
        >
          <img className="w-full" src="https://i.ibb.co/kKjYg4m/Dinner-Set-full-4.jpg" alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Business;