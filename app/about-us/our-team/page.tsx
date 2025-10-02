"use client";

import { Instrument_Serif } from "next/font/google"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/Navbar"
import Link from "next/link"
import { TextAnimate } from "@/components/magicui/text-animate"
import { useEffect, useState } from "react"
import { Logo } from "@/app/components/Logo"
import { Footer } from "@/app/components/Footer"
import { TeamMemberCard } from "@/app/components/TeamMemberCard"

const instrumentSerif = Instrument_Serif({ 
  weight: ['400'],
  subsets: ['latin'],
})

export default function TeamPage() {
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

  const teamMembers = [
    {
      name: "Jennifer Beqaj",
      image: "/team1.png",
      email: "jennifer@lindaolsson.com",
      readFullBio: true
    },
    /*
    {
      name: "Justin Besikof",
      image: "/team2.jpeg",
      email: "justin@lindaolsson.com",
      readFullBio: true
    },
    */
    {
      name: "Shana Bickwid",
      image: "/shana.png",
      email: "shana@lindaolsson.com",
      readFullBio: true
    },
    {
      name: "Dale Coudert",
      image: "/team3.jpg",
      email: "dalecoudert@me.com",
      readFullBio: true
    },
    {
      name: "John C. Dotterrer",
      image: "/team4.jpg",
      email: "john@lindaolsson.com",
      readFullBio: true
    },
    {
      name: "Elizabeth Jones",
      image: "/team5.jpeg",
      email: "beth@lindaolsson.com",
      readFullBio: true
    },
    {
      name: "Carolina Olsson",
      image: "/team6.jpg",
      email: "carolina@lindaolsson.com",
      readFullBio: true
    },
    {
      name: "Linda Pantano",
      image: "/team7.jpeg",
      email: "lpantano@lindaolsson.com",
      readFullBio: true
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-[100] bg-[#1b4e1f] shadow-lg">
        <Navbar isScrolled={isScrolled} alwaysSolid />
      </div>
      
      <main className="relative min-h-screen w-full overflow-x-hidden pt-[120px]">
        {/* Team Section */}
        <section className="pt-32 pb-24 bg-white">
          <div className="container mx-auto px-4">
            <h1 className={`text-7xl md:text-8xl lg:text-9xl font-light mb-16 text-center ${instrumentSerif.className}`}>
              Our Team
            </h1>

            {/* Linda's Card (Top Row) */}
            <div className="grid grid-cols-1 md:grid-cols-3 mb-16">
              <div className="col-span-1 md:col-start-2 md:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="/linda.png"
                      alt="Linda R. Olsson"
                      className="w-48 h-48 object-cover object-top rounded-lg mb-4"
                    />
                    <h3 className="text-3xl font-semibold mb-2">Linda R. Olsson</h3>
                    <p className="text-gray-700 text-lg mb-1">Broker/Owner</p>
                    <div className="text-center mb-3">
                      <p className="text-green-900 text-lg">Office: <a href="tel:5618209195" className="hover:underline">(561) 820-9195</a></p>
                      <p className="text-green-900 text-lg">Cell: <a href="tel:5613294044" className="hover:underline">(561) 329-4044</a></p>
                      <p className="text-green-900 text-lg"><a href="mailto:linda@lindaolsson.com" className="hover:underline">Linda@LindaOlsson.com</a></p>
                      <p className="text-gray-700 text-lg mt-2">211A Royal Poinciana Way</p>
                      <p className="text-gray-700 text-lg">Palm Beach, FL 33480</p>
                    </div>
                    <Link href="/about-us" className="text-green-900 hover:underline block mt-2 text-lg">
                      Read Full Bio →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Other Team Members */}
              {teamMembers.map((member, index) => (
                <TeamMemberCard 
                  key={index} 
                  {...member} 
                  bioLink={
                    member.name === "Jennifer Beqaj" ? "/about-us/our-team/jennifer-beqaj" :
                    member.name === "Justin Besikof" ? "/about-us/our-team/justin-besikof" :
                    member.name === "Shana Bickwid" ? "/about-us/our-team/shana-bickwid" :
                    member.name === "Dale Coudert" ? "/about-us/our-team/dale-coudert" :
                    member.name === "John C. Dotterrer" ? "/about-us/our-team/john-c-dotterrer" :
                    member.name === "Elizabeth Jones" ? "/about-us/our-team/elizabeth-jones" :
                    member.name === "Carolina Olsson" ? "/about-us/our-team/carolina-olsson" :
                    member.name === "Linda Pantano" ? "/about-us/our-team/linda-pantano" : ""
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
} 