"use client";

import { Instrument_Serif } from "next/font/google"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/Navbar"
import Link from "next/link"
import { TextAnimate } from "@/components/magicui/text-animate"
import { useEffect, useState } from "react"
import { Footer } from "../components/Footer"
import { ContactCard } from "@/app/components/ContactCard"
import Image from "next/image"

const instrumentSerif = Instrument_Serif({ 
  weight: ['400'],
  subsets: ['latin'],
})

export default function ConciergePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[40] bg-[#1b4e1f] shadow-lg">
        <Navbar isScrolled={isScrolled} alwaysSolid />
      </div>
      
      <main className="relative min-h-screen w-full overflow-x-hidden pt-[120px]">
        {/* Why Choose Us Section */}
        <section className="pt-32 bg-white">
          <div className="container mx-auto px-4">
            <h1 className={`text-7xl md:text-8xl lg:text-9xl font-light mb-8 text-center ${instrumentSerif.className}`}>
              Why Choose Us
            </h1>
            <div className="max-w-4xl mx-auto mb-12">
              <Image 
                src="/whychooseus.jpg" 
                alt="Why Choose Us" 
                width={1200} 
                height={600} 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-800 text-xl leading-relaxed mb-6">
                It's your Real Estate Experience – make it a good one!
              </p>
              <p className="text-gray-800 text-xl leading-relaxed mb-6">
                Specializing in Palm Beach Luxury Properties for Over 30 Years, We have been uniting extraordinary people with
                exceptional properties since 1989. Representing Buyers and Sellers, we represent your best interests with professionalism and
                have a reputation you can trust. With 5 Star Google reviews, we couldn't be more proud!
              </p>
              <p className="text-gray-800 text-xl leading-relaxed mb-6">
                Thanks to superior customer service, in-depth knowledge of the market, and expert negotiation skills, we are nationally
                recognized among top 1,000 real estate professionals by the Wall Street Journal/Real Trends as "One of the best Real Estate
                agents in the Country" ranked among the top 10 agents in Palm Beach. Representing buyers and sellers of Palm Beach's Finest
                Residences, our firm provides local expertise, global reach, and an unrivaled website.
              </p>
              <p className="text-gray-800 text-xl leading-relaxed mb-6">
                Please take a moment of your time to preview all properties listed for sale, customer testimonials, quarterly market reports and or Blog on our site.
              </p>
              <p className="text-gray-800 text-xl leading-relaxed mb-6">
                Thinking about Buying or Selling in Palm Beach? Let our Expertise work for you. Choosing a firm to represent your best
                interests makes all the difference. We Get Results! Contact us for Experience you can Trust!
              </p>
              <p className="text-gray-800 text-xl leading-relaxed mb-6">
                As a Palm Beach resident, and an active community member since 1998, Linda's personal knowledge of the community cannot be replicated by national firms. Our successful track record is a testament to our commitment to buyers and sellers. Our customers do not hesitate to recommend us, please take a moment of your time to read our wonderful testimonials from our loyal clients.
              </p>
              <p className="text-gray-800 text-xl leading-relaxed mb-8">
                We are committed to our customers...We guide buyers and sellers through the sale or selection of their home, condominium, or land with professionalism! Whether you are buying or selling let us put our expertise to work for you!
              </p>
              <Link href="https://www.palmbeachdailynews.com/story/news/local/2014/04/21/lifelong-commitment/9663911007/" target="_blank" rel="noopener noreferrer" className="text-2xl text-[#1b4e1f] font-semibold hover:underline block mb-6">
                A Lifelong Commitment, Click here to read more.
              </Link>
              <Link href="/testimonials" target="_blank" rel="noopener noreferrer" className="text-2xl text-[#1b4e1f] font-semibold hover:underline block mb-6">
                Click here to view our testimonials from satisfied customers.
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Card Section */}
        <ContactCard />

        {/* Footer */}
        <Footer />
      </main>
    </>
  )
} 