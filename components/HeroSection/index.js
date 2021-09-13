import React, { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Testimonials from '../Testimonials'

function HeroSection() {

  const [email, setEmail] = useState('')

  const [steps, setSteps] = useState([
    {
      step: '01',
      img: 'https://res.cloudinary.com/cardclan-io/image/upload/v1616063999/s1_zox1vw.png',
      heading: 'Create the perfect card,',
      detail: 'Customize prebuilt templates or build from scratch to match any occasion',
    },
    {
      step: '02',
      img: 'https://res.cloudinary.com/cardclan-io/image/upload/v1616063999/s2_hok66y.png',
      heading: 'Invite your whole team or family ',
      detail: 'to add their message to make it hyper-personalized and nurture relationships',
    },
    {
      step: '03',
      img: 'https://res.cloudinary.com/cardclan-io/image/upload/v1616063999/s3_xrernr.png',
      heading: 'Schedule ahead of time.',
      detail: 'Never forget an important event now and feel left out, schedule your greetings ahead of time and set it on auto-repeat',
    },
  ])

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `https://app.cardclan.io/register?email=${email}`
  }
  return (
    <>
      <Head>
        <script src="https://forms.gosquared.com/forms.js" async></script>
        {/* <link rel="stylesheet" href="https://forms.gosquared.com/forms.css" /> */}

      </Head>
      <div className='max-w-full mx-auto text-center bg-themeBlack  md:bg-contain bg-contain bg-top   bg-hero-pattern bg-no-repeat md:py-10 px-5 '>
        <div className='w-full mx-auto md:relative container '>
          <div className='max-w-4xl  mx-auto ' style={{ width: '60%' }}>
            <h1 className='text-white md:text-6xl md:font-semibold text-3xl pt-16'> Connect Deeply with your Community </h1>
            <p className='text-gray-bgGray  text-sm md:text-lg pt-5 '>CardClan is the most effective way to build more profound connections with your community by sending them a personalized digital card in 120 seconds.<br /> Stay close to your community when it matters the most. </p>
          </div>


          <div className='max-w-7xl mx-auto  md:mb-7 pb-10 text-center px-3 pt-10'>
            <form target="_blank" onSubmit={handleSubmit}>
              <div className='max-w-lg mx-auto flex flex-row border-2 border-gray-lighter justify-between align-middle rounded-xl p-0.5  '>
                <input onChange={handleChange} value={email} aria-label type="email" className=' w-8/12 text-gray-light bg-themeBlack bg-opacity-70  border-r-0  rounded-l-md px-5 bg-transparent' placeholder='Enter your email here' name="email" required />
                <input type="submit" value="Get Started" name="submit" class=" cursor-pointer md:w-3/12  flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-themePink hover:bg-secondary  md:text-base  whitespace-nowrap shadow-sm hover:text-themePink hover:bg-white duration-300 " />
              </div>
            </form>
          </div>


          <div className='max-w-full mx-auto relative flex place-content-center place-items-center pt-28'>
            <div className='max-w-5xl mx-auto text-center'>
              <video autoPlay loop muted >
                <source src='https://embed-ssl.wistia.com/deliveries/f78f5b8a445364b7e154d9d8dc07cb1e.bin'></source>
              </video>
            </div>
          </div>


          <div className='md:w-3/5 mx-auto mt-24'>
            <p className='text-center justify-center mx-auto bg-goldenGray text-white rounded-xl p-1 text-sm w-28'>How it works</p>
            <div className='max-w-4xl  mx-auto ' style={{ width: '60%' }}>
              <h2 className='text-white md:text-3xl text-2xl  mt-2'> Design, Collaborate. Schedule </h2>
              <p className='text-gray-lighter pt-2'> Better yet, bring your whole clan together to create and send your digital card, with everyone's personal message on it. </p>
            </div>
          </div>
        </div>



        <div className='max-w-5xl mx-auto md:grid grid-cols-3 gap-16 mt-10 pb-10'>
          {steps.map((item, key) => (
            <>
              <div key={key} className=' relative rounded-2xl bg-gray-dark flex flex-wrap pt-5 pb-16  
              flex-col text-center mb-5'>
                <p className='absolute text-gray-light top-4 left-4 '>{item.step}</p>
                <img src={item.img} height='71' width='71' className='mx-auto pt-12' alt='error' 
                loading="lazy" />
                <p className='text-gray-lighter pt-5 px-5 text-left'> 
                <span className='text-white'>{item.heading} </span>{item.detail}
                 </p>
                <a href={key == 0 ? '#step1' : key == 1 ? '#step2 ' : '#step3'}
                 className=' mb-5  absolute bottom-0 text-center self-center cursor-pointer  
                  bg-goldenGray text-white rounded-xl p-1 text-xs w-28 '>Learn more</a>
              </div>
            </>
          ))}
        </div>




        <div className='md:mt-16 md:max-w-6xl mx-auto pb-10 '>
          <h1 className='text-gray-lighter text-2xl  mt-2  '> More then 100+ companies build better relationship using CardClan </h1>
          <div className='md:flex mt-10 md:pl-0 pl-20'>
            <a target="_blank" href='https://www.proactivehealthcarerecruiters.com/' ><img height='21px' width='170px' className='' src='https://res.cloudinary.com/cardclan-io/image/upload/v1616063948/Proactive-Healthcare_d6jioo.png' alt='error' /></a>
            <a target="_blank" href='https://www.cruzcreative.agency/' ><img height='21px' width='180px' className='' src='https://res.cloudinary.com/cardclan-io/image/upload/v1616063611/ghost-logo_v2jesy.png' alt='error' /></a>
            <a target="_blank" href='https://www.happycampercreative.net/' ><img height='21px' width='185px' className='' src='https://res.cloudinary.com/cardclan-io/image/upload/v1616063763/happycamper-logo-orange_m3upak.png' alt='error' /></a>
            <a target="_blank" href='https://effusivemarketing.com/' ><img height='51px' width='275px' className='' src='https://res.cloudinary.com/cardclan-io/image/upload/v1616063611/effusivemarketing_eeweu4.png' alt='error' /></a>
            <a target="_blank" href='https://contentstudio.io/' ><img height='21px' width='262px' src='https://res.cloudinary.com/cardclan-io/image/upload/v1616063610/content_studio_lvla9m.png' className='' alt='error' /></a>
            <a target="_blank" href='https://rivalscreative.com/' ><img height='21px' width='100px' className='' src='https://res.cloudinary.com/cardclan-io/image/upload/v1616063949/Rivals-Logo_NYC-PHL_Color-1_cbepx2.png' alt='error' /></a>
          </div>
        </div>
        <Testimonials />

      </div>
    </>
  )
}

export default HeroSection
