"use client";

import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

export function Navbar({ isScrolled, alwaysSolid = false }: { isScrolled: boolean; alwaysSolid?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById('mobile-menu');
      if (menu && !menu.contains(event.target as Node) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] w-full py-8 px-4 transition-all duration-300 ${
      isScrolled || alwaysSolid ? 'bg-[#1b4e1f]' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <Menu className="h-8 w-8" />
          </button>
        </div>

        {/* Desktop Left Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <Link href="/about-us" className="flex items-center gap-1 text-white text-xl group-hover:text-white/90 transition-colors">
              About
              <ChevronDown className="h-4 w-4 mt-0.5 group-hover:rotate-180 transition-transform duration-200" />
            </Link>
            <div className="absolute top-full left-0 mt-2 w-[300px] bg-green-900 text-white border border-green-800 rounded-md shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/about-us" className="block text-lg py-3 px-4 hover:bg-green-800 transition-colors cursor-pointer">
                ABOUT LINDA
              </Link>
              <Link href="/about-us/our-team" className="block text-lg py-3 px-4 hover:bg-green-800 transition-colors cursor-pointer">
                OUR TEAM
              </Link>
              <Link href="/a-leader-in-palm-beach-real-estate" className="block text-lg py-3 px-4 hover:bg-green-800 transition-colors cursor-pointer">
                A LEADER IN PALM BEACH REAL ESTATE
              </Link>
              <Link href="/concierge-quality-realty-services" className="block text-lg py-3 px-4 hover:bg-green-800 transition-colors cursor-pointer">
                CONCIERGE QUALITY REALTY SERVICES
              </Link>
              <Link href="/community-involvement" className="block text-lg py-3 px-4 hover:bg-green-800 transition-colors cursor-pointer">
                GIVING BACK...COMMUNITY INVOLVEMENT
              </Link>
              
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <button className="flex items-center gap-1 text-white text-xl group-hover:text-white/90 transition-colors">
                Search For Homes
                <ChevronDown className="h-4 w-4 mt-0.5 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-[300px] bg-green-900 text-white border border-green-800 rounded-md shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/properties" className="block text-lg py-3 px-4 hover:bg-green-800 transition-colors cursor-pointer">
                  FEATURED PROPERTIES
                </Link>
                <Link href="/north-end-palm-beach-real-estate" className="block text-lg py-3 px-4 hover:bg-green-800 transition-colors cursor-pointer">
                  NORTH END HOMES
                </Link>
                <Link href="/in-town-palm-beach-real-estate" className="block text-lg py-3 px-4 hover:bg-green-800 transition-colors cursor-pointer">
                  IN TOWN HOMES
                </Link>
                <Link href="/estate-section" className="block text-lg py-3 px-4 hover:bg-green-800 transition-colors cursor-pointer">
                  ESTATE SECTION HOMES
                </Link>
                <Link href="/in-town-townhomes" className="block text-lg py-3 px-4 hover:bg-green-800 transition-colors cursor-pointer">
                  IN-TOWN TOWNHOMES
                </Link>
                <Link href="/in-town-condos" className="block text-lg py-3 px-4 hover:bg-green-800 transition-colors cursor-pointer">
                  IN-TOWN CONDOS
                </Link>
                <Link href="/sloans-curve-south-to-manalapan" className="block text-lg py-3 px-4 hover:bg-green-800 transition-colors cursor-pointer">
                  SLOANS CURVE SOUTH TO MANALAPAN CONDOMINIUMS
                </Link>
                <Link href="/luxury-palm-beach-condominium-co-op-buildings" className="block text-lg py-3 px-4 hover:bg-green-800 transition-colors cursor-pointer">
                  LUXURY PALM BEACH CONDOMINIUM AND CO-OP BUILDINGS
                </Link>
                <Link href="/palm-beach-florida-real-estate-news" className="block text-lg py-3 px-4 hover:bg-green-800 transition-colors cursor-pointer">
                  IN THE NEWS
                </Link>
                <Link href="https://mlspalmbeach.lindaolsson.com/idx/search/advanced" className="block text-lg py-3 px-4 hover:bg-green-800 transition-colors cursor-pointer">
                  ADVANCED SEARCH
                </Link>
                
              </div>
            </div>
            <Link href="/global-reach-local-expertise/why-consider-relocating-to-florida-tax-benefits-wealth-preservation" className="text-white text-xl">
              Tax Benefits
            </Link>
            <Link href="/blog" className="text-white text-xl">
              Blog
            </Link>
          </div>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/">
            <img src="/flogo.svg" alt="Logo" className="h-20" />
          </Link>
        </div>

        {/* Desktop Right Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <Link href="/why-choose-us" className="flex items-center gap-1 text-white text-xl group-hover:text-white/90 transition-colors">
              Why Choose Us?
              <ChevronDown className="h-4 w-4 mt-0.5 group-hover:rotate-180 transition-transform duration-200" />
            </Link>
            <div className="absolute top-full right-0 mt-2 w-[300px] bg-green-900 text-white border border-green-800 rounded-md shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/global-reach-local-expertise" className="block text-lg py-3 px-4 hover:bg-green-800 transition-colors cursor-pointer">
                GLOBAL REACH/LOCAL EXPERTISE
              </Link>
              <Link href="/palm-beach-a-slice-of-paradise" className="block text-lg py-3 px-4 hover:bg-green-800 transition-colors cursor-pointer">
                PALM BEACH – A SLICE OF PARADISE
              </Link>
              <Link href="/buying-selling-hire-professional" className="block text-lg py-3 px-4 hover:bg-green-800 transition-colors cursor-pointer">
                BUYING OR SELLING? HIRE A PROFESSIONAL!
              </Link>
              <Link href="/4-essential-things-to-consider-when-buying-a-condo" className="block text-lg py-3 px-4 hover:bg-green-800 transition-colors cursor-pointer">
                4 ESSENTIAL THINGS TO CONSIDER WHEN BUYING A CONDO
              </Link>
              <Link href="/sellers-tips" className="block text-lg py-3 px-4 hover:bg-green-800 transition-colors cursor-pointer">
                SELLERS TIPS
              </Link>
        
            </div>
          </div>
          <Link href="/market-reports" className="text-white text-xl">
            Market Reports
          </Link>
          <Link href="/testimonials" className="text-white text-xl">
            Testimonials
          </Link>
          <Link href="/contact" className="text-white text-xl">
            Contact
          </Link>
        </div>

        {/* Empty div to maintain flex layout on mobile */}
        <div className="md:hidden"></div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="fixed inset-0 bg-[#1b4e1f] pt-20 pb-8 px-6 z-[101] overflow-y-auto h-full">
          <button 
            onClick={toggleMenu}
            className="absolute top-8 right-4 text-white"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="flex flex-col space-y-6 mt-8">
            {/* About Section */}
            <div className="border-b border-green-700 pb-4">
              <div className="text-white text-2xl font-medium mb-2">About</div>
              <div className="pl-4 flex flex-col space-y-3">
                <Link href="/about-us" className="text-white text-lg" onClick={toggleMenu}>ABOUT LINDA</Link>
                <Link href="/about-us/our-team" className="text-white text-lg" onClick={toggleMenu}>OUR TEAM</Link>
                <Link href="/a-leader-in-palm-beach-real-estate" className="text-white text-lg" onClick={toggleMenu}>A LEADER IN PALM BEACH REAL ESTATE</Link>
                <Link href="/concierge-quality-realty-services" className="text-white text-lg" onClick={toggleMenu}>CONCIERGE QUALITY REALTY SERVICES</Link>
                <Link href="/community-involvement" className="text-white text-lg" onClick={toggleMenu}>GIVING BACK...COMMUNITY INVOLVEMENT</Link>
                <Link href="/palm-beach-florida-real-estate-news" className="text-white text-lg" onClick={toggleMenu}>IN THE NEWS</Link>
              </div>
            </div>

            {/* Search For Homes Section */}
            <div className="border-b border-green-700 pb-4">
              <div className="text-white text-2xl font-medium mb-2">Search For Homes</div>
              <div className="pl-4 flex flex-col space-y-3">
                <Link href="/north-end-palm-beach-real-estate" className="text-white text-lg" onClick={toggleMenu}>NORTH END HOMES</Link>
                <Link href="/in-town-palm-beach-real-estate" className="text-white text-lg" onClick={toggleMenu}>IN TOWN HOMES</Link>
                <Link href="/estate-section" className="text-white text-lg" onClick={toggleMenu}>ESTATE SECTION HOMES</Link>
                <Link href="/in-town-townhomes" className="text-white text-lg" onClick={toggleMenu}>IN-TOWN TOWNHOMES</Link>
                <Link href="/in-town-condos" className="text-white text-lg" onClick={toggleMenu}>IN-TOWN CONDOS</Link>
                <Link href="/sloans-curve-south-to-manalapan" className="text-white text-lg" onClick={toggleMenu}>SLOANS CURVE SOUTH TO MANALAPAN CONDOMINIUMS</Link>
                <Link href="/luxury-palm-beach-condominium-co-op-buildings" className="text-white text-lg" onClick={toggleMenu}>LUXURY PALM BEACH CONDOMINIUM AND CO-OP BUILDINGS</Link>

              </div>
            </div>

            {/* Tax Benefits Section */}
            <div className="border-b border-green-700 pb-4">
              <div className="text-white text-2xl font-medium mb-2">Why Choose Us?</div>
              <div className="pl-4 flex flex-col space-y-3">
                <Link href="/why-choose-us" className="text-white text-lg" onClick={toggleMenu}>WHY CHOOSE US?</Link>
                <Link href="/global-reach-local-expertise" className="text-white text-lg" onClick={toggleMenu}>GLOBAL REACH/LOCAL EXPERTISE</Link>
                <Link href="/palm-beach-a-slice-of-paradise" className="text-white text-lg" onClick={toggleMenu}>PALM BEACH – A SLICE OF PARADISE</Link>
                <Link href="/buying-selling-hire-professional" className="text-white text-lg" onClick={toggleMenu}>BUYING OR SELLING? HIRE A PROFESSIONAL!</Link>
                <Link href="/4-essential-things-to-consider-when-buying-a-condo" className="text-white text-lg" onClick={toggleMenu}>4 ESSENTIAL THINGS TO CONSIDER WHEN BUYING A CONDO</Link>
                <Link href="/sellers-tips" className="text-white text-lg" onClick={toggleMenu}>SELLERS TIPS</Link>
                <Link href="/global-reach-local-expertise/why-consider-relocating-to-florida-tax-benefits-wealth-preservation" className="text-white text-lg" onClick={toggleMenu}>TAX BENEFITS</Link>
              </div>
            </div>

            {/* Other Links */}
            <div className="flex flex-col space-y-4 pt-2">
              <Link href="/blog" className="text-white text-xl" onClick={toggleMenu}>Blog</Link>
              <Link href="/market-reports" className="text-white text-xl" onClick={toggleMenu}>Market Reports</Link>
              <Link href="/testimonials" className="text-white text-xl" onClick={toggleMenu}>Testimonials</Link>
              <Link href="/contact" className="text-white text-xl" onClick={toggleMenu}>Contact</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 