import React, { useState } from 'react'

function Testimonials() {
  const [open, setOpen] = useState(false);
  const [tweets, setTweets] = useState([
    {
      img: 'https://res.cloudinary.com/cardclan-io/image/upload/v1616063862/Michael_f1hy7h.png',
      name: 'Michael Kalisperas',
      title: 'Sending Greeting Cards to my email list',
      tag: 'Serial Entrepreneur and Marketing Coach',
      tweet: `A team well backed by experienced digital marketing leaders and loved the vision of the product, I was so much facing challenges with client relationships and CardClan has enabled me to make my customers feel special in a very professional as well as personal way, loved it for sending digital greetings.I feel that it’s really building a trustworthy relationship with my clients. `,
      time: ' Dec 12, 2020',
      website: 'https://effusivemarketing.com/'
    },
    {
      img: 'https://res.cloudinary.com/cardclan-io/image/upload/v1616064126/waqar_uqcjpr.png',
      name: 'Waqar Azeem',
      title: 'Easy for new customers',
      tag: 'Founder and CEO of ContentStudio',
      tweet: `Loved the vision of the product, we have around 50k+ customers worldwide and we want to use CardClan for sending personalized welcome cards for every new customer that joins.

      I see it can also be used for your employees, we have a team of 30+ people now, so that’s interesting.
      
      Hoping from CardClan team  to get some more features for product based businesses.
      `,
      time: ' Dec 21, 2020',
      website: 'https://contentstudio.io/'
    },
    {
      img: 'https://res.cloudinary.com/cardclan-io/image/upload/v1616063861/James_d9wud0.png',
      name: 'James Pemberton',
      title: 'Using it for client engagement and relationship',
      tag: ' Founder of  Proactive Healthcare Recruiters',
      tweet: `As the #1 ranked healthcare recruitment firm in USA, we engage mostly with local clinics and private hospitals on daily/weekly basis, CardClan is really helping me remember the core values where I send my business partners greetings and shoutouts on their events and also use to share digital cards to my high tier clients on my business events such as anniversary etc, 
      `,
      time: ' Jan 03, 2021',
      website: 'https://www.proactivehealthcarerecruiters.com/'
    },
  ])
  // const [moreTweets, setMoreTweets] = useState([
  //   {
  //     img: '/avatar.webp',
  //     name: 'James',
  //     tag: '@james',
  //     tweet: `Love it! Can't wait to try`,
  //     time: '9:27AM 16 Feb 2021'
  //   },
  //   {
  //     img: '/avatar.webp',
  //     name: 'Kevin',
  //     tag: '@kevin',
  //     tweet: `Love it! Can't wait to try`,
  //     time: '9:27AM 16 Feb 2021'
  //   },
  //   {
  //     img: '/avatar.webp',
  //     name: 'David',
  //     tag: '@david',
  //     tweet: `Love it! Can't wait to try`,
  //     time: '9:27AM 16 Feb 2021'
  //   },
  // ])

  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className='max-w-full  md:pt-24 pt-10 mx-auto bg-themeBlack text-center'>
      <h2 className='text-white md:text-4xl text-2xl  '>Some businesses sharing the user experience </h2>

      <div className='max-w-6xl mx-auto md:grid grid-cols-3 gap-10 mt-16'>


        {tweets.map((item, i) => (
          <>
            <div key={i} className='bg-gray-dark p-5 rounded-2xl mx-5 md:mx-0 mb-5 md:mb-0 relative pb-10 flex flex-wrap'>
              <div className='flex flex-row '>
                <img height='4rem' width='4rem' class="inline-block h-14 w-14 rounded-full ring-2 "
                  src={item.img} alt='error' loading="lazy" />
                <div className='flex flex-col pl-5 -mt-1 '>
                  <a target="_blank" href={item.website} >
                    <h3 className='text-white text-left  text-sm pt-2'>{item.name}</h3>
                    <p className='text-gray-lighter text-left text-xs'>{item.tag}</p>
                  </a>
                </div>
              </div>
              <h className='text-gray-bgGray text-2xl font-medium text-left mt-5'> ❝{item.title}...❞</h>
              <p className='text-gray-bgGray text-left text-base pt-5   '>{item.tweet}</p>
              <p className='text-gray-lighter text-xs pt-5 mb-2 absolute bottom-0 right-0 pr-5 '>{item.time}</p>

            </div>
          </>
        ))}
      </div>






      {/* 
      <div style={{ display: open ? '' : 'none' }} className={'max-w-6xl  mx-auto md:grid grid-cols-3 gap-10 mt-10'}>
        {moreTweets.map((item) => (
          <>
            <div className={'bg-gray-dark p-5 rounded-2xl mx-5 md:mx-0 mb-5 md:mb-0 relative pb-20'}>
              <div className='flex flex-row'>
                <img height='4rem' width='4rem' class="inline-block h-14 w-14 rounded-full ring-2 "
                  src={item.img} alt='error' />
                <div className='flex flex-col pl-5 -mt-1'>
                  <h3 className='text-white  text-sm pt-2'>{item.name}</h3>
                  <p className='text-gray-lighter text-xs'>{item.tag}</p>
                </div>
              </div>
              <p className='text-gray-bgGray text-base pt-5 -mt-2 absolute  '>{item.tweet}</p>
              <p className='text-gray-lighter text-xs pt-5 mt-5 absolute '>{item.time}</p>

            </div>
          </>
        ))}


      </div> */}

      {/* 
      <div className='md:w-3xl  md:mx-auto pt-5 md:ml-0 -ml-10'>
        <a onClick={handleOpen}
          class="cursor-pointer ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-white rounded-md shadow-sm text-base font-medium text-white bg-transparent hover:bg-secondary transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 ">
          {open ? `Show less` : `Show more`}
        </a>
      </div> */}


      <a href="/customers"
        className="ml-8 mb-10 md:mb-0 mt-10  inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-md  text-base font-medium text-gray-dark bg-white hover:bg-secondary  md:text-base  whitespace-nowrap shadow-sm hover:text-white hover:bg-gray-lighter duration-300  ">
        View our customer stories →
            </a>

    </div>
  )
}

export default Testimonials
