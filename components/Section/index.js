import React from 'react'

function Section() {
  return (
    <div className='w-full mx-auto bg-gray-bgGray text-center md:pt-28 '>

      <div className='max-w-4xl mx-auto pt-10   text-center'>
        <p id='step1' className='text-center justify-center mx-auto bg-lightGreenishBlue text-greenishBlue rounded-xl px-3 py-2 text-base  w-32'>01 - Design</p>
        <h2 className='text-gray-dark md:text-4xl text-2xl  md:pb-10 px-9 '> Keep your customers and loved ones happy by designing the perfect card. </h2>

        <div className=' rounded-2xl bg-white mt-10 md:grid grid-cols-3 py-10 mx-5 md:mx-0  '>
          <div className='col-span-1 pl-5'>
            <h3 className='text-gray-dark text-2xl pr-5 text-left '> Pre-built template library. </h3>
            <p className='text-gray-lighter text-sm pr-10 pt-5 text-left'>Use CardClan to create a perfect card for your colleague, business partner, customers, or employees. we have countless designs and illustrations for you.</p>
          </div>
          <div className='col-span-2 md:mt-0 mt-5'><img height='550px' width='100%' src='https://res.cloudinary.com/cardclan-io/image/upload/v1616063999/section1_lo2nui.png' alt='error' loading="lazy" /></div>
        </div>


        <div className='  mt-10 md:grid grid-cols-3 py-10 gap-5 '>

          <div className='rounded-2xl bg-white p-10 col-span-2 md:mx-0 mx-5 mb-5 md:mb-0'>
            <h3 className='text-gray-dark text-2xl md:pr-64 text-left  '>Feature rich Graphic Editor. </h3>
            <p className='text-gray-lighter text-sm md:pr-10 pt-5 text-left'>You Can Choose From The Ready-Made Designs Or Make Your Own Card Using Our Library Stock Of Fonts, Colors, Text Styles, And Photos. Or Even Better, Upload Your Own Images And Play Around With Your Creativity.</p>
            <div className='col-span-2 pt-5'><img height='550px' width='100%' src='https://res.cloudinary.com/cardclan-io/image/upload/v1616064126/section2_nvq2cq.png' alt='error' loading="lazy" /></div>
          </div>


          <div className='rounded-2xl bg-white  col-span-1 md:mx-0 mx-5 mb-5 md:mb-0'>
            <img src='https://res.cloudinary.com/cardclan-io/image/upload/v1616064126/social_arkflu.png' height='500' width='500' className=' pt-10' alt='error' loading="lazy" />
            <h3 className='text-gray-dark text-2xl  text-left p-10 pb-4  '>Countless integrations with your favourite platforms. </h3>
            <p className='text-gray-lighter text-sm  px-10 text-left pb-10 md:pb-0'>Easily integrate with your favourite tools to get a semeless cardclan experience</p>
          </div>

        </div>

      </div>
      <div className='max-w-4xl mx-auto  '>
        <div className='bg-white rounded-2xl text-center mt-10 pt-10 md:pb-48 relative md:mx-0 mx-5 mb-5 md:mb-0'>
          <p id='step2' className='text-center justify-center mx-auto bg-lightBlue text-Blue rounded-xl py-2 text-base  w-32'>02 - Collaborate</p>
          <h3 className='text-gray-dark text-2xl pr-5 text-center mt-1'>Share and Collaborate </h3>
          <p className='text-gray-lighter text-sm  pt-5 px-10  md:px-36'>Next, with our simple share option, invite your whole clan and get them to kick in their personal message in your card.
          No worries of jumping down the rabbit hole of misplaced manila folders or smudgy handprints
          on the card. Just click and share your card with your team. Your team can add their
messages and sign the card using different text and font styling.</p>
          <img src='https://res.cloudinary.com/cardclan-io/image/upload/v1616064126/section3_hxbg74.png' height='550px' width='100%' className='md:absolute  ' alt='error' loading="lazy" />
        </div>

      </div>

    </div>
  )
}

export default Section
