"use client";

import { Instrument_Serif } from "next/font/google"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/Navbar"
import Link from "next/link"
import { TextAnimate } from "@/components/magicui/text-animate"
import { useEffect, useState } from "react"
import { Footer } from "../components/Footer"
import { Logo } from "@/app/components/Logo"
import { ContactCard } from "@/app/components/ContactCard"
const instrumentSerif = Instrument_Serif({ 
  weight: ['400'],
  subsets: ['latin'],
})

export default function LeaderPage() {
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
        {/* Leader Section */}
        <section className="pt-32 bg-white">
          <div className="container mx-auto px-4">
            <h1 className={`text-7xl md:text-8xl lg:text-9xl font-light mb-16 text-center ${instrumentSerif.className}`}>
              A Leader in Palm Beach<br />Real Estate
            </h1>
            <div className="max-w-4xl mx-auto">
              <h2 className={`text-2xl font-semibold mb-6 text-[#1b4e1f]`}>
                It's your Real Estate Experience – make it a good one!
              </h2>
              <p className="text-gray-800 text-xl leading-relaxed mb-6">
                Linda R. Olsson, Inc., Realtor is celebrating its 36th year as a leader among Luxury Palm Beach Real Estate firms. Linda Olsson, broker owner, takes great pride in the continued success of her name-sake firm. A Palm Beach resident for over twenty years, Linda is an active community member; she lives, plays, and works in town. She lives and breaths Palm Beach real estate... she and her staff are available 24/7 which equates to unparalleled customer service.
              </p>
              <p className="text-gray-800 text-xl leading-relaxed mb-6">
                Her personal knowledge of the community cannot be replicated by national firms. Realizing there was a demand for personalized, professional real estate service, in 1989 Linda opened the firm specializing in Palm Beach Luxury Properties. Our successful track record is a testament to our commitment to buyers and sellers. Our customers do not hesitate to recommend us, please take a moment of your time to read our wonderful testimonials from our loyal clients.
              </p>
              <p className="text-gray-800 text-xl leading-relaxed mb-8">
                We are committed to our customers... We guide buyers and sellers through the sale or selection of their home, condominium, or land with professionalism! Whether you are buying or selling let us put our expertise to work for you! A Lifelong Commitment, <Link href="https://www.palmbeachdailynews.com/story/news/local/2014/04/21/lifelong-commitment/9663911007/" target="_blank" rel="noopener noreferrer" className="text-[#1b4e1f] font-semibold hover:underline">Click here to read more</Link>.
              </p>
              <Link href="/testimonials" target="_blank" rel="noopener noreferrer" className="text-[#1b4e1f] text-2xl font-semibold hover:underline block mb-6">
                Click here to view our testimonials from satisfied customers.
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <p className="text-gray-600 text-lg italic">Thinking about buying or selling in Palm Beach? Specializing in Palm Beach Luxury Properties for over 30 years, Contact Us for Experience You Can TRUST!</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6 text-lg">
              <div className="flex items-start gap-2">
                <span className="text-[#8B0000]">•</span>
                <p>In-depth knowledge of the market</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#8B0000]">•</span>
                <p>Expert negotiation skills and superior service</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#8B0000]">•</span>
                <p>Unrivaled website providing global internet exposure on the most highly visible web sites</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#8B0000]">•</span>
                <p>First class advertising; professional photography and outstanding videos</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#8B0000]">•</span>
                <p>Incomparable targeted marketing; direct mail, e-mail blasts</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#8B0000]">•</span>
                <p>We Are Social: Follow us on Instagram, Facebook, Twitter, YouTube</p>
              </div>
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