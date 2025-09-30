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
        {/* Concierge Section */}
        <section className="pt-32 bg-white">
          <div className="container mx-auto px-4">
            <h1 className={`text-7xl md:text-8xl lg:text-9xl font-light mb-16 text-center ${instrumentSerif.className}`}>
              Concierge Quality<br />Realty Services
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-800 text-xl leading-relaxed mb-6">
                Linda R. Olsson, Inc., Realtor has been providing buyers and sellers of Palm Beach homes and Palm Beach condos with superior service since its establishment in 1989. We have been successfully listing, selling, and leasing Palm Beach's finest residences with the prompt, professional, confidential service that our sophisticated clientele expect and deserve.
              </p>
              <p className="text-gray-800 text-xl leading-relaxed mb-6">
                Never before has the choice of a real estate firm been as critical for buyers and sellers. In today's market, having experience and a deep understanding of the Palm Beach market, combined with uncompromising confidentiality and top-notch negotiating skills is vital. Our business has been built on strong relationships..."one satisfied customer at a time". We have been providing buyers and sellers of Palm Beach real estate with prompt, professional, superior service for almost three decades. Our expertise, innovative marketing approach, and online web initiatives provide our discerning clientele the level of service they expect. Choose a Realtor that can confidentially locate the right property and successfully negotiate the deal for you. We believe that today's buyers are tomorrow's sellers. We don't sell you a property and move on; we continue our commitment to you.
              </p>
              <p className="text-gray-800 text-xl leading-relaxed mb-6">
                We work closely with buyers and seller to provide excellent post-transaction services, including the referral of household staff, estate management to legal counsel, top craftsmen, architects, builders, and interior designers. Our personalized services, local guidance, and relationships with local people will enhance your Palm Beach experience.
              </p>
              <p className="text-gray-800 text-xl leading-relaxed mb-6">
                Linda's energetic, enthusiastic, New England-style 24/7 work ethic translates into satisfied customers and success. Linda, her agents, and outstanding staff enjoy uniting extraordinary people with exceptional properties. Buying, selling a home, or relocating to a new community is a major decision and it can be an emotional experience. We pride ourselves on the ability to listen and truly understand the customer's needs, while having the patience and dedication to guide them through the real estate process, making their transition as seamless as possible.
              </p>
              <p className="text-gray-800 text-xl leading-relaxed mb-6">
                Over the past 36 years...Our business has built through the trust and continual referrals of satisfied buyers and sellers - a true compliment to our firm with an outstanding reputation in the community, a stellar track record, and the dedication, confidentiality, and commitment to represent you and your best interests. We continually work closely with buyers and sellers to provide them with an excellent real estate experience. We want you to love your new Palm Beach home or Palm Beach condominium. Specializing in fine properties, we represent significant sales of oceanfront estates, Palm Beach homes, luxury Palm Beach condominiums, and land.
              </p>
              <p className="text-gray-800 text-xl leading-relaxed mb-8">
                We are committed to you... we use our best efforts to locate a property that suits your criteria, in the right location, and at the right price. We don't just talk about excellence, we deliver! Linda Olsson, broker/owner is a tireless advocate for the success of our client's real estate sales or purchases. Our commitment gives us confidence and comfort in knowing that when you become a Seller you will contact us to list, market, and sell the property, and we will be excited about the mandate. The satisfaction of every customer, from the beginning to the end of each transaction is the result of our patience, hard work, and diligence and is the mainstay of our firm reputation since the founding of the firm in 1989. Contact us for Experience you can Trust... We get Results!
              </p>
              <Link href="/testimonials" className="text-2xl text-[#1b4e1f] font-semibold hover:underline block mb-6">
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