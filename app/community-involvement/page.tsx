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

export default function CommunityPage() {
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
        {/* Community Section */}
        <section className="pt-32 bg-white">
          <div className="container mx-auto px-4">
            <h1 className={`text-7xl md:text-8xl lg:text-9xl font-light mb-16 text-center ${instrumentSerif.className}`}>
              Community Involvement
            </h1>
            <div className="max-w-4xl mx-auto">
              <h2 className={`text-2xl font-semibold mb-6 text-[#1b4e1f] text-center`}>
                LEADERSHIP BEGINS WITH OUR CITIZENS...We are committed to giving back to our community!
              </h2>
              <p className="text-gray-800 text-xl leading-relaxed mb-6">
                Linda Olsson's career in real estate began in Palm Beach when she opened her office in 1989, she fell in love with the real estate profession and the Town of Palm Beach. A Palm Beach resident since 1998, born and raised in Boston, she began her career as a paralegal in Boston, and thereafter in Palm Beach. Linda is committed to the town, she is a community leader, who is committed to giving back to the community, and hopes that her commitment to the Town and its wonderful residents will make a difference.
              </p>
              <p className="text-gray-800 text-xl leading-relaxed mb-6">
                Linda has always been an active member of the Palm Beach community, she has been a member of the Palm Beach Civic Association for 29 years, before becoming a Director and a member of the exclusive Executive Committee, the Nominating Committee, the Beautification, and Public Safety Committee. As a resident in Palm Beach, she has been a 27-year member and Patron member of the Palm Beach United Way, a member and corporate/Friend of the Society of The Four Arts, a Sponsor of the Palm Beach Preservation Foundation, Patron of the Flagler Museum, Sustaining Patron of the Norton Museum of Art, and a supporter of the Palm Beach Symphony.
              </p>
              <p className="text-gray-800 text-xl leading-relaxed mb-6">
                A lover of all animals, Linda is a long-time supporter of the Peggy Adams Animal Rescue League in the exclusive Leadership Circle and she supports the Legacy Animal Christmas Ball.
              </p>
              <p className="text-gray-800 text-xl leading-relaxed mb-6">
                Linda joined Audrey Gruss, founder, and Scott Snyder, Chairman, on their committee for the Inaugural Palm Beach 5K Race of Hope to Defeat Depression. She is a founding member of the Palm Beach/Flagler Rotary Club, where she was club secretary and received a Paul Harris Fellow award.
              </p>
              <p className="text-gray-800 text-xl leading-relaxed mb-6">
                Linda is also a member of the Palm Beach Chamber of Commerce, she is a trustee/supporter of the Flagler Museum, a member of the Norton Museum of Art the Palm Beach Daughter of the American Revolution (DAR) and is a sustaining member of Junior League of the Palm Beaches, and a Key Club Member of the Norton Sculpture Gardens, and has served on the Business and Professional Campaign Committee of the Palm Beach United Way.
              </p>
              <p className="text-gray-800 text-xl leading-relaxed mb-8">
                Professionally Linda served as a Director of the Palm Beach Board of Realtors from 1995 to 1997. She has been a member of the Palm Beach Board of Realtors and the Regional Board of Realtors since 1989 and is a Graduate of the Real Estate Institute (GRI). She is a member of the Palm Beach and Regional Multiple Listing Services, the National Association of Realtors, and the Florida Association of Realtors.
              </p>
            </div>
          </div>
        </section>

        {/* Support Image Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <img 
              src="/linda-olsson-inc-supports-2.gif" 
              alt="Linda Olsson Inc Supports" 
              className="max-w-full mx-auto"
            />
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