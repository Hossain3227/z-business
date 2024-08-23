
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slides from './slides';


export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Slides image={'https://i.ibb.co/xhCPzxx/liz-pullan-pattathy-r-Pt-PNAltx-Yw-unsplash.jpg'}
            text= 'Welcome to our site' ptext='we have the best collection of your desired items'></Slides>
        </SwiperSlide>
        <SwiperSlide>
        <Slides image={'https://i.ibb.co/hgSjWYt/liz-pullan-pattathy-X-o3-Hz-Cwp-Vs-unsplash.jpg'}
            text= 'Special Offer is Going On!!!' ptext='check out our featured items which are top sale and do not miss discount'></Slides>
        </SwiperSlide>
        <SwiperSlide>
        <Slides image={'https://i.ibb.co/f15vTRJ/liz-pullan-pattathy-DSQIsi-DYTkc-unsplash.jpg'}
            text= 'Regular customers get special discount' ptext='get your desired item before it gets sold out'></Slides>
        </SwiperSlide>
        
       
      </Swiper>
    </>
  );
}