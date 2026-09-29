import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="text-white py-16 bg-[#1b4e1f] border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-light mb-5 text-pink-200">Linda R. Olsson, Inc., Realtor</h3>
            <p className="text-white text-lg">Luxury Real Estate in Palm Beach,FL</p>
            <div className="flex space-x-4 mt-5">
              <a href="https://www.facebook.com/LindaOlssonRealtor" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="w-6 h-6 text-white hover:text-white transition-colors" />
              </a>
              <a href="https://www.instagram.com/LindaOlssonPB/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-6 h-6 text-white hover:text-white transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/lindaolsson/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6 text-white hover:text-white transition-colors" />
              </a>
              <a href="https://x.com/RealtorPalmBch" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="w-6 h-6 text-white hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-light mb-5 text-pink-200">Quick Links</h4>
            <ul className="space-y-3 text-white text-lg">
              <li>
                <Link href="/about-us">About</Link>
              </li>
              <li>
                <Link href="/properties">Featured Properties</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-light mb-5 text-pink-200">Search by Neighborhood</h4>
            <ul className="space-y-3 text-white text-lg">
              <li>
                <Link href="/north-end-palm-beach-real-estate">North End Homes</Link>
              </li>
              <li>
                <Link href="/in-town-palm-beach-real-estate">In Town Homes</Link>
              </li>
              <li>
                <Link href="/estate-section">Estate Section Homes</Link>
              </li>
              <li>
                <Link href="/in-town-condos">In Town Condominiums</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl text-pink-200 font-light mb-5">Contact Us</h4>
            <ul className="space-y-3 text-white text-lg">
              <li>(561) 820-9195</li>
              <li>Linda@LindaOlsson.com</li>
              <li>211A Royal Poinciana Way</li>
              <li>Palm Beach, FL 33480</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-16 pt-10 text-center text-white text-lg">
          <p>© 2025 Linda R. Olsson. All rights reserved.</p>
        </div>
        
        {/* Disclaimer text */}
        <div className="mt-8 text-white/70 text-xs leading-relaxed">
          <p>
            DISCLAIMER: The material and information contained on this website in large part consists of information that we consider reliable, due to the third party sources of that data, we cannot warrant the completeness or accuracy of it and caution against any reliance upon such without independent verification. The properties featured on this web site, and those offered by other agents through the Multiple Listing Services provided by the IDX System are subject to errors, omissions, changes, including price, or withdrawal without notice. Linda R. Olsson, Inc., is not liable to any user of this website or the information contained within the site. All users use the site at their own risk, and they are solely responsible for independently confirming the accuracy and determining the reliability of data. No warranty of any kind, implied, expressed or statutory is given with respect to the contents of this website or to its hyperlinks to other internet resources such as the Multiple Listing Service IDX and other sources. Linda Olsson, Inc., makes no claims, promises or guarantees as it relates to the information and content of this website, including the graphics, information, data, services and the accuracy, content, and data provided herein. By use of this website, the user agrees to having read the disclaimers and accepts the above terms and conditions of use as they apply therein.
          </p>
        </div>
      </div>
    </footer>
  )
} 