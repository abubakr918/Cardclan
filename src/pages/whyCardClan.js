
import React, { useState } from 'react'
import "tailwindcss/tailwind.css";
import Head from 'next/head'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CarouselContainer from '../../components/WhyCardClanComponent/Carousel';


function whyCardClan() {
  const [Steps, setSteps] = useState([
    {
      title: 'Inception',
      detail: `We analyzed over 20K businesses in the past five years and concluded that 70% of the businesses don't focus on building a personal connection with their clients.`,
      img: 'https://res.cloudinary.com/cardclan-io/image/upload/v1616063948/right-arrow_auhib9.png'
    },
    {
      title: 'Motivation',
      detail: 'This results in a higher customer churn rate, and the same goes for the employer-employee paradigm.',
      img: 'https://res.cloudinary.com/cardclan-io/image/upload/v1616063861/left-arrow_hxqrhc.png'
    },
    {
      title: 'Problem ',
      detail: 'A lack of vital communication leads 3 out of 5 employers to lose their A-Players merely because they fail to encourage and appreciate them regularly.',
      img: 'https://res.cloudinary.com/cardclan-io/image/upload/v1616063948/right-arrow_auhib9.png'
    },
    {
      title: 'Solution',
      detail: 'To counteract all these challenges, we created a community engagement platform that helps businesses boost customer engagement and allows employers to build a deep and meaningful connection with their employees.',
      // img: '/left-arrow.png'
    },

  ])
  return (
    <>
      <Head>
        <title>CardClan - why CardClan  ?</title>
      </Head>
      <div className='bg-gray-bgGray'>

        <Header />

        <div className='max-w-full mx-auto text-center bg-themeBlack  pb-20 px-5'>
          <div className='max-w-7xl mx-auto md:relative container'>
            <h1 className='text-gray-light md:text-5xl md:font-semibold text-3xl md:px-32 pt-16'> We are CardClan</h1>
            <p className='text-gray-light mt-2 text-2xl'>The powerhouse of communication and engagement.</p>
          </div>
        </div>



        <div className='max-w-4xl mx-auto pt-10   text-center '>
          <div>
            <h1 className='text-gray-dark md:text-4xl text-3xl px-9 '> How CardClan Came to Life?  </h1>

            <div className='md:grid  grid-cols-2 md:gap-20 p-10 justify-center  '>
              {Steps.map((item, key) => {
                if (key % 2 == 0) {
                  return (
                    <>
                      <div key={key} className=" bg-white   rounded-2xl  bg-contain  px-10 py-5 mt-10 sm:mt-1" >
                        <p className='text-center justify-center mx-auto bg-goldenGray text-white rounded-xl p-1  text-sm w-28'>{item.title} </p>
                        <p className=' mt-1 text-gray-dark text-left'>{item.detail}</p>
                      </div>
                      <div key={key} className='relative  pl-5 md:pt-28  md:flex hidden'>
                        <div className='absolute  md:object-cover '>
                          <img src={item.img} width='150px' loading="lazy" />
                        </div>
                      </div>
                    </>
                  )
                }
                else if (key % 2 != 0) {
                  return (
                    <>
                      <div key={key} className='relative md:h-64 md:w-96 mt-24 md:flex hidden'>
                        <div className='absolute md:w-full md:h-full md:object-cover right-0 pt-10 pr-5 '>
                          <img src={item.img} width='150px' loading="lazy" />
                        </div>
                      </div>
                      <div key={key} className="bg-white rounded-2xl px-10 py-5 mt-24 mb-5">
                        <p className='text-center justify-center mx-auto bg-goldenGray text-white rounded-xl p-1  text-sm w-28'>{item.title} </p>
                        <p className='  mt-1 text-gray-dark text-left md:text-left'>{item.detail}</p>
                      </div>
                    </>
                  )
                }
              })}
            </div>
          </div>
        </div>

        <div className='max-w-full bg-white py-10 '>
          <div className='max-w-screen-2xl mx-auto'>
            <CarouselContainer />
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default whyCardClan