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

export default function ParadisePage() {
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
      {/* Main Content */}
      <div>
        <div className="fixed top-0 left-0 right-0 z-[100] bg-[#1b4e1f] shadow-lg">
          <Navbar isScrolled={isScrolled} alwaysSolid />
        </div>
        
        <main className="relative min-h-screen w-full overflow-x-hidden pt-[120px]">
          {/* Paradise Section */}
          <section className="pt-32 bg-white">
            <div className="container mx-auto px-4">
              <h1 className={`text-7xl md:text-8xl lg:text-9xl font-light mb-16 text-center ${instrumentSerif.className}`}>
                Palm Beach – A Slice of Paradise
              </h1>

              {/* YouTube Video */}
              <div className="max-w-4xl mx-auto mb-16">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/BNhiSHbOk18"
                    title="Palm Beach - A Slice of Paradise"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </div>

              <div className="max-w-4xl mx-auto">
                <p className="text-gray-800 text-xl leading-relaxed mb-8">
                  When one thinks of Palm Beach Real Estate, images of swaying Palm Trees, white sandy beaches, and the turquoise waters of the Atlantic Ocean come to mind. The ultimate splendor is the small town feeling of the most sought out real estate in the country. Beautiful homes, condominiums, and the town's great natural beauty all seemed to mesh. Palm Beach is a luxury community which offers the best in resort living. It is paradise! We are fortunate to live and work in this unique community. Palm Beach is a small barrier island which offers the uniqueness of a charming small town community coupled with a rich history and world renowned amenities, providing its residents with a high quality lifestyle surrounded by the beauty of Palm Beach. The community attracts people who are dedicated to philanthropy and the arts, as well as those who enjoy golf, tennis, swimming, golf, tennis, arts world class shopping, and dining on Worth Avenue, and The Royal... for the most discerning buyer.
                </p>

                <p className="text-gray-800 text-xl leading-relaxed mb-8">
                  Palm Beach is known for it's exciting social scene, including a host of philanthropic events throughout the Season. Other social activities include several world renown International Antique, Art and Jewelry Fairs, a wide spectrum of fine lecture series at various venues including the Society of the Four Arts, outstanding Broadway shows, opera, and regional orchestra featured at The Kravis Center Arts, and superb exhibits at the Norton Museum of Art providing a great cultural center in a successful effort to preserve and enhance the magnificent Palm Beach homes and Palm Beach condos.
                </p>

                <p className="text-gray-800 text-xl leading-relaxed mb-8">
                  Palm Beach was developed in the 1890's by Henry M. Flagler. It's early architects J. Addison Mizner, Maurice Fatio, John Volk, Howard Major, among others, created a luxury resort town with the ultimate tropical climate providing lush foliage and magnificent gardens. It is a town of extremes of Bermuda, British Colonial, Monterey, Regency, and Mediterranean style architecture mixed with natural beauty.
                </p>

                <p className="text-gray-800 text-xl leading-relaxed mb-8">
                  Combine this with the elegance and sophistication of acclaimed shopping on Worth Avenue and The Royal, a cosmopolitan cuisine, and the social climate of a community dedicated to civic and philanthropic causes to create the Palm Beach lifestyle the best of the best! Palm Beach is the ultimate place to live and play. A few of the many town amenities include: in addition to the outstanding hotels, condominiums, and beach cabanas is it's close proximity to numerous cultural venues, the beautiful beaches, the picturesque ocean mile bike trail along the intracoastal waterway, the international airport, the marinas, superb hotels, beach clubs, and spas, three five star resorts: The Breakers, The Four Seasons, and Eau Palm Beach, as well as two hospitals in town which are The Colony and The Brazilian Court. The Town of Palm Beach has immediate top rated public safety Departments of Police and Fire Rescue.
                </p>

                <p className="text-gray-800 text-xl leading-relaxed mb-8">
                  Located 15 minutes from the West Palm Beach International airport, and approximately 65 miles North of Miami International airport, Palm Beach is a barrier island approximately sixteen miles long and three blocks wide. It is surrounded by the mainland of West Palm Beach, Lake Worth, and Manalapan by three bridges. This island paradise with palm tree lined streets surrounded by the Atlantic ocean, beautiful beaches, and the intracoastal waterway creates a sub-climate coastal luxury resort town. The year round community is approximately 10,000 with the population swelling to nearly 30,000 in the season. The Brazilian Avenue/Town docks together with the marinas and yacht clubs make Palm Beach an ideal waterfront dock for the exquisite yachts arriving each season and the local boating enthusiasts. Championship golf courses, such as Trump International and The Breakers make Palm Beach a golfer's course, tennis facilities, performing arts venues, world class shopping, and restaurants are only part of the endless entertainment that brings Palm Beach to life. Palm Beach residents are some of the most social socially active people in the country. The social season running from November through April is full of philanthropic events including the famous International Red Cross Ball among many others. Palm Beach offers exceptional real estate, world class homes, and condominiums for sale and lease. Since the island is small, space is limited, and therefore, demand for Palm Beach homes, Palm Beach condominiums, and Palm Beach land is high.
                </p>

                <p className="text-gray-800 text-xl leading-relaxed mb-8">
                  Local Palm Beaches and Palm Beach Gardens divide the town into four sections. The North End, In Town, the Estate Section, and South of South County. Manalapan is the Town just south of Palm Beach. Each area offers a diverse environment, and appeals to different buyers according to their specific criteria. Search all Sections of Palm Beach below. We invite you to stay in touch with us. We look forward to working with you to find your slice of Paradise in Palm Beach!
                </p>
              </div>
            </div>
          </section>

          {/* Contact Card Section */}
          <ContactCard />

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </>
  )
} 