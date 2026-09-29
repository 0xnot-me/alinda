import type { Metadata } from "next";
export const SITE_URL = "https://www.lindaolsson.com";
export const SEO_PAGES: Record<string, [string, string]> = {
  "/": [
    "Palm Beach Luxury Real Estate",
    "Explore Palm Beach luxury homes and condominiums with Linda R. Olsson, Inc., Realtor. Discover neighborhoods, properties, and local real estate expertise."
  ],
  "/about-us": [
    "About Linda R. Olsson | Palm Beach Broker",
    "Meet Linda R. Olsson, broker-owner of Linda R. Olsson, Inc., Realtor, specializing in luxury homes and condominiums in Palm Beach, Florida."
  ],
  "/properties": [
    "Palm Beach Homes and Properties",
    "Explore featured Palm Beach real estate and connect with Linda R. Olsson, Inc., Realtor about buying or selling a luxury home or condominium."
  ],
  "/contact": [
    "Contact Linda R. Olsson | Palm Beach Real Estate",
    "Contact Linda R. Olsson, Inc., Realtor at 211A Royal Poinciana Way, Palm Beach, Florida. Call the office at (561) 820-9195."
  ],
  "/north-end-palm-beach-real-estate": [
    "North End Palm Beach Homes",
    "Explore North End Palm Beach real estate, from East Inlet Drive to Wells Road, with Linda R. Olsson, Inc., Realtor."
  ],
  "/in-town-palm-beach-real-estate": [
    "In-Town Palm Beach Homes",
    "Discover In-Town Palm Beach homes and neighborhood information with Linda R. Olsson, Inc., Realtor."
  ],
  "/estate-section": [
    "Palm Beach Estate Section Homes",
    "Explore homes in the Palm Beach Estate Section, from Worth Avenue to Sloan’s Curve, with Linda R. Olsson, Inc., Realtor."
  ],
  "/in-town-townhomes": [
    "In-Town Palm Beach Townhomes",
    "Explore townhomes in Palm Beach and contact Linda R. Olsson, Inc., Realtor for local guidance on buying or selling."
  ],
  "/in-town-condos": [
    "In-Town Palm Beach Condominiums",
    "Discover In-Town Palm Beach condominiums and connect with Linda R. Olsson, Inc., Realtor for local real estate expertise."
  ],
  "/sloans-curve-south-to-manalapan": [
    "Sloan’s Curve to Manalapan Condominiums",
    "Explore condominium communities from Sloan’s Curve south to Manalapan with Linda R. Olsson, Inc., Realtor."
  ],
  "/luxury-palm-beach-condominium-co-op-buildings": [
    "Palm Beach Condominium and Co-op Building Guide",
    "Explore Linda R. Olsson’s guide to luxury Palm Beach condominium and co-op buildings, locations, and property options."
  ],
  "/market-reports": [
    "Palm Beach Real Estate Market Reports",
    "Browse quarterly Palm Beach home and In-Town condominium sales reports from Linda R. Olsson, Inc., Realtor."
  ],
  "/blog": [
    "Palm Beach Real Estate Blog",
    "Read Palm Beach real estate articles, market updates, and insights from Linda R. Olsson and her team."
  ],
  "/testimonials": [
    "Client Testimonials | Linda R. Olsson",
    "Read client experiences working with Linda R. Olsson and her team on Palm Beach home and condominium purchases and sales."
  ],
  "/about-us/our-team": [
    "Meet Our Palm Beach Real Estate Team",
    "Meet the real estate professionals at Linda R. Olsson, Inc., Realtor in Palm Beach, Florida."
  ],
  "/why-choose-us": [
    "Why Choose Linda R. Olsson",
    "Learn about Linda R. Olsson’s approach to representing buyers and sellers of Palm Beach luxury real estate."
  ],
  "/a-leader-in-palm-beach-real-estate": [
    "Palm Beach Real Estate Experience",
    "Learn about Linda R. Olsson’s experience serving Palm Beach real estate buyers and sellers."
  ],
  "/concierge-quality-realty-services": [
    "Concierge Realty Services in Palm Beach",
    "Discover the real estate services offered by Linda R. Olsson, Inc., Realtor for Palm Beach buyers and sellers."
  ],
  "/community-involvement": [
    "Palm Beach Community Involvement",
    "Learn about Linda R. Olsson’s involvement in the Palm Beach community."
  ],
  "/palm-beach-florida-real-estate-news": [
    "Palm Beach Real Estate Press Archive",
    "Browse historical press coverage and real estate news featuring Linda R. Olsson, Inc., Realtor."
  ],
  "/global-reach-local-expertise": [
    "Global Reach and Palm Beach Expertise",
    "Learn how Linda R. Olsson, Inc., Realtor combines local Palm Beach experience with property marketing and global reach."
  ],
  "/palm-beach-a-slice-of-paradise": [
    "Discover Palm Beach, Florida",
    "Explore Palm Beach lifestyle and local information from Linda R. Olsson, Inc., Realtor."
  ],
  "/buying-selling-hire-professional": [
    "Buying or Selling Palm Beach Real Estate",
    "Learn about professional representation when buying or selling Palm Beach real estate with Linda R. Olsson, Inc., Realtor."
  ],
  "/4-essential-things-to-consider-when-buying-a-condo": [
    "Considerations When Buying a Condominium",
    "Read Linda R. Olsson’s guide to considerations when purchasing a condominium."
  ],
  "/sellers-tips": [
    "Palm Beach Home Seller Tips",
    "Read home-selling tips from Linda R. Olsson, Inc., Realtor, serving Palm Beach homeowners."
  ],
  "/global-reach-local-expertise/why-consider-relocating-to-florida-tax-benefits-wealth-preservation": [
    "Relocating to Florida | Palm Beach Real Estate",
    "Read relocation information from Linda R. Olsson, Inc., Realtor and explore Palm Beach real estate options."
  ],
  "/about-us/our-team/jennifer-beqaj": [
    "Jennifer Beqaj | Palm Beach Real Estate",
    "Meet Jennifer Beqaj of Linda R. Olsson, Inc., Realtor in Palm Beach, Florida."
  ],
  "/about-us/our-team/shana-bickwid": [
    "Shana Bickwid | Palm Beach Real Estate",
    "Meet Shana Bickwid of Linda R. Olsson, Inc., Realtor in Palm Beach, Florida."
  ],
  "/about-us/our-team/dale-coudert": [
    "Dale Coudert | Palm Beach Real Estate",
    "Meet Dale Coudert of Linda R. Olsson, Inc., Realtor in Palm Beach, Florida."
  ],
  "/about-us/our-team/john-c-dotterrer": [
    "John C Dotterrer | Palm Beach Real Estate",
    "Meet John C Dotterrer of Linda R. Olsson, Inc., Realtor in Palm Beach, Florida."
  ],
  "/about-us/our-team/elizabeth-jones": [
    "Elizabeth Jones | Palm Beach Real Estate",
    "Meet Elizabeth Jones of Linda R. Olsson, Inc., Realtor in Palm Beach, Florida."
  ],
  "/about-us/our-team/carolina-olsson": [
    "Carolina Olsson | Palm Beach Real Estate",
    "Meet Carolina Olsson of Linda R. Olsson, Inc., Realtor in Palm Beach, Florida."
  ],
  "/about-us/our-team/linda-pantano": [
    "Linda Pantano | Palm Beach Real Estate",
    "Meet Linda Pantano of Linda R. Olsson, Inc., Realtor in Palm Beach, Florida."
  ]
};
export function pageMetadata(path: string, title?: string, description?: string): Metadata {
  const entry = SEO_PAGES[path];
  const heading = title ?? entry?.[0] ?? "Palm Beach Real Estate";
  const summary = description ?? entry?.[1] ?? "Linda R. Olsson, Inc., Realtor in Palm Beach, Florida.";
  const fullTitle = `${heading} | Linda R. Olsson, Inc., Realtor`;
  return {
    title: { absolute: fullTitle }, description: summary,
    alternates: { canonical: `${SITE_URL}${path === "/" ? "/" : path}` },
    openGraph: { title: fullTitle, description: summary, url: `${SITE_URL}${path}`,
      siteName: "Linda R. Olsson, Inc., Realtor", locale: "en_US", type: "website",
      images: [{ url: `${SITE_URL}/linda.jpg`, alt: "Linda R. Olsson, Palm Beach real estate broker" }] },
    twitter: { card: "summary_large_image", title: fullTitle, description: summary,
      images: [`${SITE_URL}/linda.jpg`] },
  };
}
