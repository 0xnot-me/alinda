import { SITE_URL } from "@/lib/seo";
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "RealEstateAgent", "@id": `${SITE_URL}/#brokerage`,
      name: "Linda R. Olsson, Inc., Realtor", url: `${SITE_URL}/`,
      logo: `${SITE_URL}/flogo.svg`, image: `${SITE_URL}/linda.jpg`,
      telephone: "+1-561-820-9195", email: "Linda@LindaOlsson.com",
      address: { "@type": "PostalAddress", streetAddress: "211A Royal Poinciana Way",
        addressLocality: "Palm Beach", addressRegion: "FL", postalCode: "33480", addressCountry: "US" },
      areaServed: { "@type": "City", name: "Palm Beach, Florida" },
      founder: { "@id": `${SITE_URL}/#linda` },
      sameAs: ["https://www.facebook.com/LindaOlssonRealtor", "https://www.instagram.com/LindaOlssonPB/"] },
    { "@type": "Person", "@id": `${SITE_URL}/#linda`, name: "Linda R. Olsson",
      jobTitle: "Broker-owner", url: `${SITE_URL}/about-us`,
      worksFor: { "@id": `${SITE_URL}/#brokerage` },
      sameAs: ["https://www.linkedin.com/in/lindaolsson/"] }
  ]
};
export function BusinessSchema() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />;
}
