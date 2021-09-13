import React, { useState } from 'react'

function Scedule() {
  const [features, setFeatures] = useState([
    {
      img:'https://res.cloudinary.com/cardclan-io/image/upload/v1616063610/canva_vv4fx7.png',
      heading:'Canva Integration.',
      detail:' Build your own cover pages using our Canva integration that gives you much more flexibility then ever before.',
    },
    {
      img:'https://res.cloudinary.com/cardclan-io/image/upload/v1616063610/CSV_b1cig1.png',
      heading:'Bulk CSV Import.',
      detail:' Import all your contacts from CSV file and schedule cards ahead of time for everyone in bulk to streamline your process',
      commingSoon:'Coming soon'
    },
    {
      img:'https://res.cloudinary.com/cardclan-io/image/upload/v1616063610/Calendar_ermqf0.png',
      heading:'Integrate with your own calendars',
      detail:' Native integration with Gmail and Outlook calendars so you never miss any important events and schedule greeting’s for the whole year ahead of time ',
      commingSoon:'Coming soon'
    },
    {
      img:'https://res.cloudinary.com/cardclan-io/image/upload/v1616063610/AVC_iv7zhq.png',
      heading:'Automated Video Cards.',
      detail:'Personalized video cards auto-generated using your brand colors and logos and delivered straight to your customer’s inbox',
      commingSoon:'Coming soon'
    },
  ])
  return (
    <div className='max-w-full md:pt-80 pt-10 mx-auto bg-themeBlack text-center'>

<div className='md:w-3/5 mx-auto mt-10'>
<p id='step3' className='text-center justify-center mx-auto bg-lightGolden text-golden rounded-xl py-2 text-base  w-32'>03 - Schedule</p>
      <h2 className='text-white md:text-4xl text-2xl mt-2  '>Schedule Ahead of Time </h2>
      <p className='text-gray-lighter pt-3 md:px-32 '>Use CardClan to create a perfect card for your colleagues, business partners, customers, and employees by using countless designs and illustrations.</p>
</div>
      <div className=' max-w-6xl mx-auto mt-10 md:grid grid-cols-3 py-10 gap-5 '>

        <div className='rounded-2xl bg-white md:p-10 p-5 col-span-2 mx-5 md:mx-0 mb-5 md:mb-0'>
          <h3 className='text-gray-dark text-2xl  text-left '>Schedule Cards </h3>
          <p className='text-gray-lighter text-sm  pt-5  text-left'>Let’s be realistic for a sec. you can love your employees and customers all you want and still forget to send them cards on occasions. or sometimes you get buried in work and can’t find time to design a card right away. that’s why you should be
proactive and plan everything way ahead of time.</p>
          <div className='col-span-2 pt-5'><img src='https://res.cloudinary.com/cardclan-io/image/upload/v1616063999/schedule1_uifb2l.png' width='681px' height='380px' alt='error' loading="lazy"  /></div>
        </div>


        <div className='rounded-2xl bg-white md:p-10 p-5 col-span-1 mx-5 md:mx-0 mb-5 md:mb-0'>
          <div className='col-span-2'><img src='https://res.cloudinary.com/cardclan-io/image/upload/v1616063999/schedule2_qksgnm.png' width='290px' height='201px' alt='error' loading="lazy"  /></div>
          <h3 className='text-gray-dark text-2xl  text-left '>Schedule your card for
recurring events </h3>
          <p className='text-gray-lighter text-sm  pt-5  text-left'>How cool would it be if you could pre-schedule card delivery for events in the upcoming years? stop daydreaming and start doing it with CardClan.
          
 All you have to do is pick a card and schedule an auto-send date, we’ll remember the date and remind you of next year’s delivery.</p>
        </div>

      </div>


<div className='md:w-3/5 mx-auto py-5' >

      <h2 className='text-white md:text-4xl text-3xl'> But that's not all.</h2>
      <p className='text-gray-lighter pt-2 md:px-40 px-10  '>If you crave consumer engagement just like us, look no further, we have everything that you need in a single place.</p>
</div>


<div className='max-w-6xl mx-auto md:grid grid-cols-4 gap-5 mt-10 pb-5'>

{features.map((item,key)=>(
  <>
  <div key={key} className='rounded-2xl bg-gray-dark  text-center pb-5 mx-5 md:mx-0 mb-5 md:mb-0 relative pt-3'>
  {key == 0 ? 
  <p className=' mt-5 pt-2' />
  : 
  <p className=' text-center justify-center mx-auto bg-goldenGray text-greenishBlue rounded-xl p-1 text-sm w-28'>{ item.commingSoon}</p>
  }
  <img src={item.img} width='180px' height='124px'  className='mx-auto  ' alt='error'  loading="lazy"/>
  <p className='text-gray-lighter text-left text-sm md:px-8 px-3'> <span className='text-white'>{item.heading} </span><br/>{item.detail} </p>
  </div>

  </>
))}
</div>
    </div>
  )
}

export default Scedule
