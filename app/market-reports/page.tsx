"use client";

import { Instrument_Serif } from "next/font/google"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
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

export default function MarketReportsPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  type ReportItem = {
    type: 'year' | 'report';
    value: string;
    pdfPath?: string;
    available?: boolean;
  };
  
  // Type for the report data
  type Report = {
    name: string;
    pdfPath: string;
    available?: boolean;
  };

  // Helper function to get PDF filename
  const getPdfFilename = (year: string, quarter: string): string => {
    return `${year}_${quarter}_Quarter.pdf`;
  };

  // Group reports by year with PDF file paths
  const reportsByYear: Record<string, Report[]> = {
    "2026": [
      { name: "1st Quarter Report 2026", pdfPath: `/market_reports/${getPdfFilename("2026", "1st")}`, available: true },
      { name: "2nd Quarter Report 2026", pdfPath: `/market_reports/${getPdfFilename("2026", "2nd")}`, available: false },
      { name: "3rd Quarter Report 2026", pdfPath: `/market_reports/${getPdfFilename("2026", "3rd")}`, available: false },
      { name: "4th Quarter Report 2026", pdfPath: `/market_reports/${getPdfFilename("2026", "4th")}`, available: false }
    ],
    "2025": [
      { name: "1st Quarter Report 2025", pdfPath: `/market_reports/${getPdfFilename("2025", "1st")}`, available: true },
      { name: "2nd Quarter Report 2025", pdfPath: `/market_reports/${getPdfFilename("2025", "2nd")}`, available: true },
      { name: "3rd Quarter Report 2025", pdfPath: `/market_reports/${getPdfFilename("2025", "3rd")}`, available: true },
      { name: "4th Quarter Report 2025", pdfPath: `/market_reports/${getPdfFilename("2025", "4th")}`, available: true }
    ],
    "2024": [
      { name: "1st Quarter Report 2024", pdfPath: `/market_reports/${getPdfFilename("2024", "1st")}` },
      { name: "2nd Quarter Report 2024", pdfPath: `/market_reports/${getPdfFilename("2024", "2nd")}` },
      { name: "3rd Quarter Report 2024", pdfPath: `/market_reports/${getPdfFilename("2024", "3rd")}` },
      { name: "4th Quarter Report 2024", pdfPath: `/market_reports/${getPdfFilename("2024", "4th")}` }
    ],
    "2023": [
      { name: "1st Quarter Report 2023", pdfPath: `/market_reports/${getPdfFilename("2023", "1st")}` },
      { name: "2nd Quarter Report 2023", pdfPath: `/market_reports/${getPdfFilename("2023", "2nd")}` },
      { name: "3rd Quarter Report 2023", pdfPath: `/market_reports/${getPdfFilename("2023", "3rd")}` },
      { name: "4th Quarter Report 2023", pdfPath: `/market_reports/${getPdfFilename("2023", "4th")}` }
    ],
    "2022": [
      { name: "1st Quarter Report 2022", pdfPath: `/market_reports/${getPdfFilename("2022", "1st")}` },
      { name: "2nd Quarter Report 2022", pdfPath: `/market_reports/${getPdfFilename("2022", "2nd")}` },
      { name: "3rd Quarter Report 2022", pdfPath: `/market_reports/${getPdfFilename("2022", "3rd")}` },
      { name: "4th Quarter Report 2022", pdfPath: `/market_reports/${getPdfFilename("2022", "4th")}` }
    ],
    "2021": [
      { name: "1st Quarter Report 2021", pdfPath: `/market_reports/${getPdfFilename("2021", "1st")}` },
      { name: "2nd Quarter Report 2021", pdfPath: `/market_reports/${getPdfFilename("2021", "2nd")}` },
      { name: "3rd Quarter Report 2021", pdfPath: `/market_reports/${getPdfFilename("2021", "3rd")}` },
      { name: "4th Quarter Report 2021", pdfPath: `/market_reports/${getPdfFilename("2021", "4th")}` }
    ],
    "2020": [
      { name: "1st Quarter Report 2020", pdfPath: `/market_reports/${getPdfFilename("2020", "1st")}` },
      { name: "2nd Quarter Report 2020", pdfPath: `/market_reports/${getPdfFilename("2020", "2nd")}` },
      { name: "3rd Quarter Report 2020", pdfPath: `/market_reports/${getPdfFilename("2020", "3rd")}` },
      { name: "4th Quarter Report 2020", pdfPath: `/market_reports/${getPdfFilename("2020", "4th")}` }
    ],
    "2019": [
      { name: "1st Quarter Report 2019", pdfPath: `/market_reports/${getPdfFilename("2019", "1st")}` },
      { name: "2nd Quarter Report 2019", pdfPath: `/market_reports/${getPdfFilename("2019", "2nd")}` },
      { name: "3rd Quarter Report 2019", pdfPath: `/market_reports/${getPdfFilename("2019", "3rd")}` },
      { name: "4th Quarter Report 2019", pdfPath: `/market_reports/${getPdfFilename("2019", "4th")}` }
    ],
    "2018": [
      { name: "1st Quarter Report 2018", pdfPath: `/market_reports/${getPdfFilename("2018", "1st")}` },
      { name: "2nd Quarter Report 2018", pdfPath: `/market_reports/${getPdfFilename("2018", "2nd")}` },
      { name: "3rd Quarter Report 2018", pdfPath: `/market_reports/${getPdfFilename("2018", "3rd")}` },
      { name: "4th Quarter Report 2018", pdfPath: `/market_reports/${getPdfFilename("2018", "4th")}` }
    ],
    "2017": [
      { name: "1st Quarter Report 2017", pdfPath: `/market_reports/${getPdfFilename("2017", "1st")}` },
      { name: "2nd Quarter Report 2017", pdfPath: `/market_reports/${getPdfFilename("2017", "2nd")}` },
      { name: "3rd Quarter Report 2017", pdfPath: `/market_reports/${getPdfFilename("2017", "3rd")}` },
      { name: "4th Quarter Report 2017", pdfPath: `/market_reports/${getPdfFilename("2017", "4th")}` }
    ],
    "2016": [
      { name: "1st Quarter Report 2016", pdfPath: `/market_reports/${getPdfFilename("2016", "1st")}` },
      { name: "2nd Quarter Report 2016", pdfPath: `/market_reports/${getPdfFilename("2016", "2nd")}` },
      { name: "3rd Quarter Report 2016", pdfPath: `/market_reports/${getPdfFilename("2016", "3rd")}` },
      { name: "4th Quarter Report 2016", pdfPath: `/market_reports/${getPdfFilename("2016", "4th")}` }
    ],
    "2015": [
      { name: "1st Quarter Report 2015", pdfPath: `/market_reports/${getPdfFilename("2015", "1st")}` },
      { name: "2nd Quarter Report 2015", pdfPath: `/market_reports/${getPdfFilename("2015", "2nd")}` },
      { name: "3rd Quarter Report 2015", pdfPath: `/market_reports/${getPdfFilename("2015", "3rd")}` },
      { name: "4th Quarter Report 2015", pdfPath: `/market_reports/${getPdfFilename("2015", "4th")}` }
    ],
    "2014": [
      { name: "1st Quarter Report 2014", pdfPath: `/market_reports/${getPdfFilename("2014", "1st")}` },
      { name: "2nd Quarter Report 2014", pdfPath: `/market_reports/${getPdfFilename("2014", "2nd")}` },
      { name: "3rd Quarter Report 2014", pdfPath: `/market_reports/${getPdfFilename("2014", "3rd")}` },
      { name: "4th Quarter Report 2014", pdfPath: `/market_reports/${getPdfFilename("2014", "4th")}` }
    ]
  };

  // Flatten the reports array while maintaining year grouping
  const reports: ReportItem[] = Object.entries(reportsByYear)
    .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA)) // Sort years in descending order
    .flatMap(([year, yearReports]): ReportItem[] => [
      { type: 'year' as const, value: year },
      ...yearReports.map(report => ({ 
        type: 'report' as const, 
        value: report.name,
        pdfPath: report.pdfPath,
        available: report.available !== false // Default to true unless explicitly set to false
      }))
    ]);

  const reportsPerPage = 4;
  const totalPages = Math.ceil(reports.filter(item => item.type === 'report').length / reportsPerPage);
  const startIndex = (currentPage - 1) * reportsPerPage;
  const endIndex = startIndex + reportsPerPage;

  // Get current page reports while preserving year headers
  const getCurrentPageItems = (): ReportItem[] => {
    const items: ReportItem[] = [];
    let currentYear: string | null = null;
    let reportCount = 0;

    for (const item of reports) {
      if (item.type === 'year') {
        if (reportCount >= startIndex && reportCount < endIndex) {
          currentYear = item.value;
          items.push(item);
        }
      } else {
        if (reportCount >= startIndex && reportCount < endIndex) {
          if (currentYear && !items.find(i => i.type === 'year' && i.value === currentYear)) {
            items.push({ type: 'year', value: currentYear });
          }
          items.push(item);
        }
        reportCount++;
      }
    }
    return items;
  };

  const currentItems = getCurrentPageItems();

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
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-[100] bg-[#1b4e1f] shadow-lg">
        <Navbar isScrolled={isScrolled} alwaysSolid />
      </div>
      
      <main className="relative min-h-screen w-full overflow-x-hidden pt-[120px]">
        {/* Main Section */}
        <section className="pt-32 bg-white">
          <div className="container mx-auto px-4">
            <h1 className={`text-7xl md:text-8xl lg:text-9xl font-light mb-16 text-center ${instrumentSerif.className}`}>
              Market Reports
            </h1>

            <div className="max-w-2xl mx-auto mb-16">
              

              {/* Description */}
              <div className="text-center mb-12">
                <h2 className={`text-3xl font-semibold mb-4 text-[#1b4e1f]`}>
                  Our Goal Is To Keep You Abreast<br />of the Palm Beach Real Estate Market.
                </h2>
                <p className="text-gray-800 text-xl leading-relaxed mb-4">
                  Stay Ahead of the Curve — Follow Our Quarterly and Annual Palm Beach Home & In-Town Condo Sales Market Reports.
                </p>
                <p className="text-gray-700 text-lg italic">
                  Click on the links below to view each quarter.
                </p>
              </div>

              {/* Reports Grid */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="space-y-4">
                  {currentItems.map((item, index) => (
                    item.type === 'year' ? (
                      <h3 key={index} className="text-2xl font-semibold text-[#1b4e1f] mt-6 first:mt-0">
                        {item.value}
                      </h3>
                    ) : item.available === false ? (
                      <div
                        key={index}
                        className="w-full bg-gray-300 text-gray-600 py-3 px-4 rounded-lg text-base font-medium flex items-center group relative cursor-not-allowed opacity-70"
                      >
                        <span className="flex-grow text-center">{item.value}</span>
                        <span className="absolute right-4 text-xs italic">Coming soon</span>
                      </div>
                    ) : (
                      <a
                        key={index}
                        href={item.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#1b4e1f] text-white py-3 px-4 rounded-lg hover:bg-[#143917] transition-colors duration-300 text-base font-medium flex items-center group relative"
                      >
                        <span className="flex-grow text-center">{item.value}</span>
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform absolute right-4" />
                      </a>
                    )
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center mt-8 gap-4">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6 text-[#1b4e1f]" />
                  </button>
                  <span className="text-lg font-medium">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="h-6 w-6 text-[#1b4e1f]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Card Section */}
        <ContactCard />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
} 