import React, { useState } from 'react'
import "tailwindcss/tailwind.css";
import Head from 'next/head'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Pricing() {
  const [sliderValue, setSliderValue] = useState(1)
  const [price, setPrice] = useState(3.50)
  const handleSliderChange = (e) => {
    if (e.target.value <= 3) {
      setSliderValue(1)
      return
    }
    if (e.target.value <= 20) {
      setSliderValue(10)
      return
    }
    setSliderValue(50)
  }
  return (
    <>
      <Head>
        <title>CardClan - pricing</title>
      </Head>

      <div className='bg-gray-bgGray max-w-full'>
        <Header />
        <style jsx>{`
        @media screen and (-webkit-min-device-pixel-ratio: 0) {
          input {
            -webkit-appearance: none;
            width: 100%;
            height: 8px;
            background: pink;
            outline: none;
            margin-top:10px;
            border-radius:10px;
            cursor: pointer;
          }

          input[type="range"]::-webkit-slider-thumb {
            border-radius: 100%;
            -webkit-appearance: none;
            appearance: none;
            width: 30px;
            height: 30px;
            background:white ;
            cursor: pointer;
            border: 5px solid #FF3C69;
            position:relative
          }

            .noUi-tooltip {
              display: block;
              position: absolute;
              border-radius: 30px;
              background-color: #FF1493;
              color: #fff;
              padding: 4px 12px;
              font-weight: 500;
              font-size: 13px;
              line-height: 1.05;
              text-align: center;
              white-space: pre-wrap;
              -webkit-transform: translate(-50%, 0);
              transform: translate(-50%, 0);
              left: 50%;
              bottom: 36px;
        }
        `}</style>

        <div className='max-w-full mx-auto text-center bg-themeBlack bg-contain bg-top bg-no-repeat '>
          <div className='max-w-7xl mx-auto md:relative container pb-16 '>
            <h1 className='text-gray-light md:text-5xl md:font-semibold text-3xl md:px-32 pt-5'> Pricing</h1>
          </div>
        </div>

        <div className='bg-gray-bgGray px-6'>
          <div className='max-w-4xl mx-auto py-10   '>
            <p className='text-gray-dark md:text-xl text-lg text-center '>Bring the whole Clan together to create and send a single digital card, with everyone's personal message </p>

            <div className=" mx-auto pb-20 pt-10 relative ">
              <div className=' text-center bg-themePink text-white px-2 rounded-lg absolute' style={{
                marginTop: -30, padding: '0px 8px', borderRadius: '8px',
                left: `${sliderValue == 1 ? 0 : sliderValue == 10 ? Number(sliderValue * 1.78) : Number(sliderValue * 1.93)}% `
              }} >{sliderValue} </div>
              <input type="range" min="1" max="50" step="1" value={sliderValue} onChange={handleSliderChange} ></input>


              <div className="flex justify-between text-xs text-gray-600 mt-5 ">
                <span >1 Card</span>
                <span className=" -ml-10">10 Cards</span>
                <span className=" text-center"></span>
                <span className=" text-center"></span>
                <span className=" text-center"></span>
                <span className=" ">50 Cards</span>
              </div>
            </div>


            <div className='bg-white md:grid grid-cols-2 rounded-md  '>
              <div className='px-10 py-10 pb-14'>
                <h1 className='text-themePink text-2xl pb-3 font-medium  '>{sliderValue == 1 ? 'Starter Plan' : sliderValue == 10 ? 'Happy Greeter' : 'Crazy Card Guy'}</h1>
                <p className='text-gray-dark'>{sliderValue == 1 ? 'Best for Individuals looking to get started with CardClan' : sliderValue == 10 ? 'Best for small business owners and companies '
                  : 'Best for digital agencies that want to provide a unique way of digital engagement '}</p>
                <p className='text-themePink mt-8 pb-20 font-medium text-2xl  '>{`$${(price * sliderValue).toFixed(2)}`}</p>
                <a href='https://app.cardclan.io/register' className='py-2 px-5 bg-themePink text-white rounded-md   '>Start your free trial </a>
              </div>

              <div className='bg-lightGreenishBlue px-5 py-10 pb-14 rounded-md  '>
                <ul className='text-greenishBlue text-left text-xl  pl-5 ' style={{ listStyleType: 'disc', listStylePosition: 'inside' }}><span className='text-2xl'>Basic plans includes:</span>
                  <li className='pt-3 pb-1   relative' > {sliderValue} Card</li>
                  <li className='py-1'>Unlimited collaborator’s to sign a card </li>
                  <li className='py-1'>Unlimited access to the template library </li>
                  <li className='py-1'>{sliderValue * 10} unique email recipients</li>
                  <li className='py-1'>Schedule card delivery ahead of time</li>
                  <li className='py-1'>Access to all integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Pricing
