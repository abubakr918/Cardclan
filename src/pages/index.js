import Head from 'next/head';
import React from 'react';
import "tailwindcss/tailwind.css";
import CTA from '../../components/CTA';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import Scedule from '../../components/Scedule';
import Section from '../../components/Section';
function Index() {
  return (
    <div className='max-w-full mx-auto'>
      <Head>
        <title>Connect Deeply with your Community</title>
        <meta name="title" content="Connect Deeply with your Community" />
        <meta name="description" content="Design, Collaborate, Schedule.Personalized digital cards to keep your community closer and build profound connections by sending them a personalized digital card in 120 seconds.. " />

        <meta name="keywords" content="Digital Greeting Cards, Community Engagement , Paperless" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cardclan.io/" />
        <meta property="og:title" content="Connect Deeply with your Community" />
        <meta property="og:description" content="Design, Collaborate, Schedule.Personalized digital cards to keep your community closer and build profound connections. " />
        <meta property="og:image" content="https://cardclan.io/new_b_1200x627.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cardclan.io/" />
        <meta property="twitter:title" content="Connect Deeply with your Community" />
        <meta property="twitter:description" content="Design, Collaborate, Schedule.Personalized digital cards to keep your community closer and build profound connections. " />
        <meta property="twitter:image" content="/twitter.png" />


        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
            "@type": "ListItem", 
            "position": 1, 
            "name": "Pricing",
            "item": "https://cardclan.io/pricing"},{
            "@type": "ListItem", 
            "position": 2, 
            "name": "Why CardClan?",
            "item": "https://cardclan.io/whycardclan"},{
            "@type": "ListItem", 
            "position": 3, 
            "name": "Our Roadmap",
            "item": "https://cardclan.io/roadmap"},{
            "@type": "ListItem", 
            "position": 4, 
            "name": "CardClan Blog",
            "item": "https://blog.cardclan.io/"},{
            "@type": "ListItem", 
            "position": 5, 
            "name": "Contact Us",
            "item": "https://cardclan.io/contact"}]
            }
        ` }} />
      </Head>

      <Header />
      <HeroSection />
      <Section />
      <Scedule />
      <CTA />
      <Footer />
    </div>
  )
}

export default Index
