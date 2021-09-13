import React from 'react'
import Footer from '../../components/Footer'
import "tailwindcss/tailwind.css";
import Header from '../../components/Header';
import Head from 'next/head';

function Roadmap() {
  return (
    <>
      <Head>
        <title>CardClan - roadmap</title>

      </Head>

      <div className='max-h-screen'>
        <iframe className='iframe' src="https://app.productstash.io/roadmaps/602021815cb74e0029363e30/public" height="1300" width="100%"  ></iframe>
        <Footer />
      </div>
    </>
  )
}

export default Roadmap