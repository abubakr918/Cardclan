import React from 'react'

function CTA() {
  return (
    <div className='max-w-full  bg-themeBlack mx-auto pt-16 pb-10'>
      <div className='max-w-7xl md:mx-auto rounded-2xl bg-themePink  md:grid grid-cols-4 md:px-10 md:pt-40 pt-5 md:pb-14 pb-5 px-5 mx-5'>
        <div className='col-span-3 md:pr-40 '>
          <h1 className='text-white md:text-5xl text-3xl'>Make them feel special.
          One card, many messages.
          </h1>
        </div>
        <div>
          <a href="https://app.cardclan.io/register"
            class="md:ml-8 md:mt-0 mt-5 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border  rounded-2xl shadow-sm text-base font-medium text-white bg-white hover:bg-secondary transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="65.581" height="50.656" viewBox="0 0 104.581 50.656">
              <g id="right-arrow" transform="translate(0 -132)">
                <g id="Group_40" data-name="Group 40" transform="translate(0 132)">
                  <path id="Path_19" data-name="Path 19" d="M103.382,154.436l0,0L82.033,133.19a4.085,4.085,0,0,0-5.764,5.791L90.6,153.243H4.085a4.085,4.085,0,1,0,0,8.17H90.6L76.269,175.676a4.085,4.085,0,0,0,5.764,5.791l21.346-21.243,0,0A4.089,4.089,0,0,0,103.382,154.436Z" transform="translate(0 -132)" fill="#ff3c69" />
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CTA
