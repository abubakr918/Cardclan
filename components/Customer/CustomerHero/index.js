// import React from 'react'
// import Carousel from 'react-multi-carousel'

// function CustomerHero() {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 1
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 1
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 1
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };
//   const array = [
//     {
//       logo: './market.webp',
//       detail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
//       name: 'Michael Kalisperas',
//       designation: 'Product Manager',
//       image: ''
//     },
//     // {
//     //   logo: './content_studio.webp',
//     //   detail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
//     //   name: 'Waqar Azeem',
//     //   designation: 'Product Manager',
//     //   image: ''
//     // },
//     // {
//     //   logo: './Proactive-Healthcare.webp',
//     //   detail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
//     //   name: 'James Pemberton',
//     //   designation: 'Product Manager',
//     //   image: ''
//     // },
//   ]
//   return (
//     <div>
//       <Carousel swipeable={true}
//         draggable={true}
//         showDots={true}
//         responsive={responsive}
//         ssr={true}
//         infinite={true}
//         autoPlay={false}
//         autoPlaySpeed={6000}
//         keyBoardControl={true}
//         // customTransition=""
//         transitionDuration={500}
//         containerClass="carousel-container bg-themePink"
//         removeArrowOnDeviceType={["tablet", "mobile"]}
//         dotListClass="custom-dot-list-style"
//         itemClass="carousel-item-padding-40-px">

//         <div className="grid grid-cols-2 gap-10">
//           {console.log(array.length)}
//           {array.map((item, key) => (
//             <>
//               <div key={key} className=" px-10 py-5 mt-10 sm:mt-1 " >
//                 <img src={item.logo} width="200px" alt="error" />
//                 <p className=' mt-1 text-white text-left text-3xl font-bold'>{item.detail}</p>
//                 <p className=' mt-1 text-white text-left'>{item.name}</p>
//                 <p className=' mt-1 text-white text-left'>{item.designation}</p>
//                 <a href="#" className="text-base text-left text-themePink  hover:text-primary hover:text-gray-light duration-300"><p>Read Story</p></a>
//               </div>
//               <div key={key} className='relative  pl-5 md:pt-28  md:flex hidden'>
//                 <div className='absolute  md:object-cover '>
//                   <img src="./new_b_1200x627.jpg" width='350px' alt="error" />
//                 </div>
//               </div>

//             </>
//           ))}


//         </div>
//       </Carousel>;
//     </div>
//   )
// }

// export default CustomerHero
