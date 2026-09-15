import { Instrument_Serif } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import { Logo } from "./Logo"

const instrumentSerif = Instrument_Serif({ 
  weight: ['400'],
  subsets: ['latin'],
})

interface ContactCardProps {
  showLogo?: boolean;
  showImage?: boolean;
  className?: string;
  style?: React.CSSProperties;
  showHeading?: boolean;
}

export function ContactCard({ showLogo = true, showImage = true, className = "", style, showHeading = true }: ContactCardProps) {
  return (
    <section className={`pt-24 pb-24 bg-white ${className}`} style={style}>
      <div className="container mx-auto px-4">
        {showHeading && (
          <h2 className={`text-5xl md:text-6xl text-center font-light mb-6 ${instrumentSerif.className}`}>
            Contact Us Today
          </h2>
        )}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <div className="flex justify-between items-start gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Linda R. Olsson, Inc., Realtor</h2>
              <div className="space-y-2">
                <div className="space-y-1 text-xl">
                  <p>Office: <a href="tel:5618209195" className="text-green-900 hover:underline">(561) 820-9195</a></p>
                  <p>Cell: <a href="tel:5613294044" className="text-green-900 hover:underline">(561) 329-4044</a></p>
                  <p>Email: <a href="mailto:linda@lindaolsson.com" className="text-green-900 hover:underline">Linda@LindaOlsson.com</a></p>
                </div>
                <div className="space-y-1 pt-2 text-xl">
                  <p><Link href="/about-us/our-team" className="text-green-900 hover:underline">Our Team →</Link></p>
                  <p><Link href="/properties" className="text-green-900 hover:underline">View Featured Properties →</Link></p>
                </div>
                <div className="pt-2 text-xl">
                  <p>211A Royal Poinciana Way</p>
                  <p>Palm Beach, FL 33480</p>
                </div>
              </div>
            </div>
            {(showLogo || showImage) && (
              <div className="flex-shrink-0 flex items-center gap-4">
                {showLogo && (
                  <div className="w-54 pr-4">
                    <Logo />
                  </div>
                )}
                {showImage && (
                  <Image
                    src="/linda.jpg"
                    alt="Linda R. Olsson"
                    width={208}
                    height={291}
                    className="w-52 h-auto rounded-lg"
                    sizes="208px"
                    unoptimized
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 