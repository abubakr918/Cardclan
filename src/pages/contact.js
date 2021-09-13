import "tailwindcss/tailwind.css";
import Header from './../../components/Header'
import Head from 'next/head'
import Footer from './../../components/Footer'
export default function Contact() {

  return (<>
    <Head>
      <title>CardClan - contact</title>
    </Head>
    <Header />
    <div className='relative bg-gray-bgGray overflow-hidden px-6'>
      <div className='max-w-4xl  mx-auto pb-20  '>
        <h2 className="pt-10 text-3xl font-medium tracking-tight  sm:text-5xl md:text-4xl text-center  ">Contact our  support</h2>
        <p className='text-grayLight  text-md pt-2 text-center '>Questions, incidents, feedback, feature requests — we're here for it all.</p>


        <form className=" p-10 shadow-2xl mt-10 mb-10 bg-white rounded-md" id="gosquared_form" action="https://forms.gosquared.com/post/GSN-582067-R" method="POST" target="_blank">
          <div className="grid grid-cols-2 -mx-3 pb-4 ">
            <div className="w-full px-3 md:mb-0">
              <label className="block text-base  mb-2 text-goldenGray">
                First Name
              </label>
              <input type="text" name="first_name" className="w-full  border border-gray-lighter rounded-md py-2 px-3 mb-3  focus:outline-none focus:bg-white focus:border-gray-lighter " placeholder="John" />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full px-3">
              <label className="block capitalize tracking-wide text-secondary text-base  mb-2" for="grid-last-name">
                Last Name
              </label>
              <input type="text" name="last_name" className="w-full border border-gray-lighter rounded-md py-2 px-3 mb-3  focus:outline-none focus:bg-white focus:border-gray-lighter" id="grid-last-name" type="text" placeholder="Doe" />
            </div>
          </div>
          <div className=" -mx-3  pb-4">
            <div className="w-full px-3">
              <label className="block capitalize tracking-wide text-secondary text-base  mb-2" for="grid-password">
                E-mail
             </label>
              <input type="email" name="email" className="w-full border border-gray-lighter rounded-md py-2 px-3 mb-3  focus:outline-none focus:bg-white focus:border-gray-lighter" id="email" type="email" placeholder="John@email.com" />
            </div>
          </div>
          <div className="-mx-3 pb-4">
            <div className="w-full px-3">
              <label className="block capitalize tracking-wide text-secondary text-base  mb-2" for="grid-password">
                Message
             </label>
              <textarea type="text" name="message" className=" no-resize  w-full   border border-gray-lighter rounded-md py-2 px-3 mb-3  focus:outline-none focus:bg-white focus:border-gray-lighter  resize-none" id="message"></textarea>
            </div>
          </div>
          <div className="pb-4 ">
            <div className="w-full px-3">
              <button type="submit" className="shadow-lg bg-themePink focus:shadow-outline focus:outline-none text-white  py-2 px-5 rounded-md  hover:bg-goldenGray duration-300  " >
                Send
              </button> </div>
          </div>

        </form>


        <div className='md:grid grid-cols-2 gap-10 px-5 text-center '>
          <div>
            <h2 className="mt-10 text-3xl  tracking-tight text-primary    ">Technical and account support</h2>
            <p className='text-grayLight md:text-sm text-md pt-2 text-goldenGray '>We’re here to help! If you have technical issues or questions about your account, contact support.</p>
          </div>
          <div>

            <h2 className="mt-10 text-3xl font-semibold">Contact information</h2>
            <p className='text-grayLight md:text-sm text-md pt-2 text-goldenGray  '>For general queries, including partnership opportunities, please email <a className='text-themePink' href='mailto:support@cardclan.io'>support@cardclan.io</a>.
            </p>
          </div>

        </div>


      </div>

    </div>
    <Footer />
  </>
  )
}
