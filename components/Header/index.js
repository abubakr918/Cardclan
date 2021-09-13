import React, { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className="max-w-full  mx-auto  sm:px-6 bg-themeBlack  h-20 pt-5 ">
      <div className='max-w-screen-2xl mx-auto'>
        <div className="flex justify-between items-center  md:justify-start md:space-x-10">
          <div className="flex justify-start  ">
            <a href="/" >
              <img src='https://res.cloudinary.com/cardclan-io/image/upload/v1616063862/logo_zwmqfj.png' alt='error' height='80px' width='222px' className='h-12' loading="lazy" />
            </a>
          </div>
          <button onClick={handleOpen} className='flex justify-end md:hidden'>
            <svg className="h-8 w-8 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>


          <nav className="hidden md:flex space-x-10">
            <a href="/whyCardClan" className="text-base  text-gray-light hover:text-primary hover:text-themePink  duration-300 "> Why CardClan?</a>
            <a href="/pricing" className="text-base  text-gray-light hover:text-primary hover:text-themePink duration-300">Pricing</a>
          </nav>


          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="https://app.cardclan.io/login"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-transparent hover:bg-secondary transition duration-300 hover:text-themePink ">
              Sign in
            </a>
            <a href="https://app.cardclan.io/register"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-themePink hover:bg-secondary  md:text-base  whitespace-nowrap hover:text-themePink hover:bg-white duration-300 ">
              Get Started
            </a>
          </div>



          <aside style={{ display: open ? '' : 'none', overflowY: open ? 'hidden' : 'scroll', }} className={"md:hidden overflow-y-hidden pt-5  top-0 right-0 w-screen bg-themeBlack fixed h-screen  transform ease-in-out transition duration-1000 z-30"}>
            <div className="flex justify-between items-center  md:justify-start md:space-x-10">
              <img src='https://res.cloudinary.com/cardclan-io/image/upload/v1616063862/logo_zwmqfj.png' alt='error' height='80px' width='222px' className='h-12' loading="lazy" />
              <button onClick={handleOpen} className='flex justify-end md:hidden'>
                <svg className="h-8 w-8 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <div className='flex place-items-center text-center place-content-center flex-col pt-16 '>
              <a href="/whyCardClan" className="text-2xl pb-5  text-gray-light hover:text-primary ">
                Why CardClan?
        </a>
              <a href="/pricing" className="text-2xl  pb-5  text-gray-light hover:text-primary">
                Pricing
        </a>
              <a href="/contact" className="text-2xl  pb-5 text-gray-light hover:text-primary">
                Contact
        </a>
            </div>
          </aside>
        </div>
      </div>
    </div >
  )
}

export default Header
