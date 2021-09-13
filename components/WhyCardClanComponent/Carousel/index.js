import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import { data } from './stepsData'
const CarouselContainer = () => {

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
      <Carousel swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={6000}
        keyBoardControl={true}
        // customTransition=""
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px">




        {data.map((item, key) => (
          <>
            <div key={key} className='w-11/12 mx-auto  md:mt-10 mt-5  mb-5 md:mb-0 md:grid grid-cols-2 gap-10 md:px-20 px-6 pb-16 '>
              <div>
                {/* <p className=' bg-lightPink text-themePink rounded-xl p-1 text-sm text-center w-52'>{item.pill}</p> */}
                <h1 className='text-gray-dark md:text-4xl text-3xl mt-1  '> {item.heading}</h1>
                {/* <span className='bg-long-pattern block bg-no-repeat absolute h-3 ml-36 w-4/12 left-0 right-0 z-10' ></span> */}
                <p className='text-gray-dark text-sm  pr-10 pt-5 pb-5 '>{item.detail}</p>
              </div>

              <img src={item.img} loading="lazy" />
            </div>
          </>
        ))}


      </Carousel>;
    </div>
  )
}

export default CarouselContainer
