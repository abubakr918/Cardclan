import Head from 'next/head';
import React, { useState } from 'react';
import "tailwindcss/tailwind.css";
import CTA from '../../components/CTA';
import CustomerCarousal from '../../components/Customer/CustomerHero/CustomerCarousel';
import CustomerService from '../../components/Customer/CustomerStories';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Customers() {
  const [email, setEmail] = useState('')

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `https://app.cardclan.io/register?email=${email}`
  }
  return (
    <div>
      <Head>
        <title>CardClan - Stories from our successful users</title>
      </Head>
      <Header />
      <div className='max-w-full mx-auto text-center bg-themeBlack  md:py-10 px-5 '>
        <div className='w-7xl mx-auto md:relative container px-5 '>
          <CustomerCarousal />

          <div className="px-10 py-5 pt-10 ">
            <h3 className="text-2xl font-bold text-white text-center ">More then 100+ companies build better relationship using CardClans</h3>

            <div className='md:flex mt-16 mb-10  md:pl-20 mx-auto md:ml-0 ml-5'>
              <a target="_blank" href='https://www.proactivehealthcarerecruiters.com/' ><img height='21px' width='200px' className='md:px-4 md:py-0 py-3 ' src='https://res.cloudinary.com/cardclan-io/image/upload/v1616063948/Proactive-Healthcare_d6jioo.png' alt='error' /></a>
              <a target="_blank" href='https://www.cruzcreative.agency/' ><img height='21px' width='180px' className='md:px-4 ml-5 md:ml-0  md:py-0 py-3 ' src='https://res.cloudinary.com/cardclan-io/image/upload/v1616063611/ghost-logo_v2jesy.png' alt='error' /></a>
              <a target="_blank" href='https://www.happycampercreative.net/' ><img height='21px' width='185px' className='md:-mt-4 ml-6 md:ml-0  md:px-4  md:py-0 py-3' src='https://res.cloudinary.com/cardclan-io/image/upload/v1616063763/happycamper-logo-orange_m3upak.png' alt='error' /></a>
              <a target="_blank" href='https://effusivemarketing.com/' ><img height='51px' width='275px' className='md:-mt-1 md:px-4   md:py-0 py-3 ' src='https://res.cloudinary.com/cardclan-io/image/upload/v1616063611/effusivemarketing_eeweu4.png' alt='error' /></a>
              <a target="_blank" href='https://contentstudio.io/' ><img height='21px' width='262px' src='https://res.cloudinary.com/cardclan-io/image/upload/v1616063610/content_studio_lvla9m.png' className='md:px-4  md:py-0 py-3' alt='error' /></a>
              <a target="_blank" href='https://rivalscreative.com/' ><img height='21px' width='100px' className='md:-mt-3 md:px-4 ml-14 md:ml-0 md:py-0 py-3' src='https://res.cloudinary.com/cardclan-io/image/upload/v1616063949/Rivals-Logo_NYC-PHL_Color-1_cbepx2.png' alt='error' /></a>
            </div>
          </div>
          <CustomerService />
          <CTA />
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default Customers


