import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import { data } from './CustomerData'
const CustomerCarousal = () => {

  const responsive = {
    LargeDesktop: {
      breakpoint: { max: 9000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <Carousel swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={9000}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile",]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40"
      >


        {data.map((item, key) => (
          <>
            <div key={key} className='my-5 md:mb-0 md:grid grid-cols-2 gap-10 md:px-28  pb-16 '>
              <div className="mt-5 ">
                <img src={item.logo} width="150px" alt="error" className=" mx-auto md:mx-0 flex justify-center self-center content-center" loading="lazy" />
                <p className=' mt-1 text-white md:text-left text-3xl font-bold'>{item.heading}</p>
                <p className=' mt-1 text-white text-left'>{item.message}</p>
                <p className=' mt-2 text-themePink md:text-left'>{item.name}</p>
              </div>
              <div className="h-72 ">
                <iframe className=" mt-5 w-full h-full "
                  src={item.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </>
        ))}


      </Carousel>;
    </div>
  )
}

export default CustomerCarousal
