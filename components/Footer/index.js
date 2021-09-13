import React from 'react'

function Footer() {
  return (
    <div class="max-w-full mx-auto container py-6 px-10 bg-themeBlack ">
      <div class="max-w-screen-2xl mx-auto  ">
        <img src='https://res.cloudinary.com/cardclan-io/image/upload/v1616063862/logo_zwmqfj.png ' height='80px' width='185px' className='pb-10 -ml-2 h-20' alt='error' loading="lazy" />
        <div class="sm:flex  ">
          <div class="sm:w-3/12 h-auto sm:mt-0 mt-8">
            <div class="text-gray-lighter font-bold mb-2">Product</div>
            <ul class="list-reset leading-normal">
              <li class="hover:text-green-dark text-gray-light   hover:text-themePink duration-300"><a href='/whyCardClan'>Why CardClan?</a></li>
              <li class="hover:text-green-dark text-gray-light   hover:text-themePink duration-300"><a href='/roadmap'>Roadmap</a></li>
            </ul>



          </div>
          <div class="sm:w-3/12 h-auto sm:mt-0 mt-8">
            <div class="text-gray-lighter mb-2 font-bold">Company</div>
            <ul class="list-reset leading-normal">
              <li class="hover:text-green-dark text-gray-light   hover:text-themePink duration-300"><a href='https://blog.cardclan.io'>Blog</a></li>
              <li class="hover:text-green-dark text-gray-light  hover:text-themePink duration-300"><a href='https://app.cardclan.io/register'>Join us</a></li>
            </ul>

          </div>




          <div class="sm:w-3/12 h-auto sm:mt-0 mt-8">
            <div class="text-gray-lighter mb-2 font-bold">Help</div>
            <ul class="list-reset leading-normal">
              <li class="hover:text-green-dark text-gray-light  hover:text-themePink duration-300"><a href='/privacy'>Privacy policy</a></li>
              <li class="hover:text-green-dark text-gray-light  hover:text-themePink duration-300"><a href='/terms'>Terms and condition </a></li>
              <li class="hover:text-green-dark text-gray-light  hover:text-themePink duration-300"><a href='/contact'>Talk to support</a></li>
            </ul>

          </div>

          <div class="sm:w-2/5 h-auto sm:mt-0 mt-8">

            <form id="gosquared_form" action="https://forms.gosquared.com/post/GSN-582067-R" method="POST" target="_blank">
              <div className='max-w-lg mx-auto flex flex-row border-2 border-gray-lighter justify-between align-middle rounded-xl p-0.5  '>
                <input aria-label type="email" className=' w-8/12 text-gray-light  border-r-0  rounded-l-md px-3 bg-transparent' placeholder='Subscribe to our newsletter now ' name="email" required />
                <input type="submit" value="Subscribe" name="submit" class=" cursor-pointer  md:w-3/12 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-themePink hover:bg-secondary  md:text-base  whitespace-nowrap shadow-sm hover:bg-white hover:text-themePink duration-300" />
              </div>
            </form>
          </div>


        </div>

        <div className='border border-gray-dark mt-10'></div>

        <div className='flex justify-between mt-5 mr-16'>
          <p className='text-gray-lighter'>@2021 CardClan. All right reserved</p>
          <div className='flex flex-row'>
            <a target="_blank" href='https://twitter.com/clan_card'> <img src='https://res.cloudinary.com/cardclan-io/image/upload/v1616064126/tw_flcf2o.png' height='23.99' width='23.99' className='h-5 w-5 cursor-pointer mr-2 ' loading="lazy" /></a>
            <a target="_blank" href='https://www.instagram.com/clan.card/'><img src='https://res.cloudinary.com/cardclan-io/image/upload/v1616063948/insta_ysmnod.png' height='23.99' width='23.99' className='h-5 w-5 cursor-pointer mr-1' loading="lazy" /></a>
            <a target="_blank" href=' https://www.facebook.com/Card-Clan-102638421850275'><img src='https://res.cloudinary.com/cardclan-io/image/upload/v1616063611/fb_dpfrit.png' height='23.99' width='23.99' className='h-5 w-5 cursor-pointer' loading="lazy" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
