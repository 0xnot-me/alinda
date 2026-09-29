'use client';

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { ContactCard } from "@/app/components/ContactCard"
import { sanitizeHtml } from "@/lib/sanitize-html"

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
});

interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  content: string;
  image?: string;
  featuredImage?: string;
  slug: string;
}

export default function PalmBeachHomesPage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isScrolled, setIsScrolled] = useState(true);
  const [processedContent, setProcessedContent] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch blog post data
  useEffect(() => {
    if (slug) {
      // Combine the path for API call
      const fullPath = `palm-beach-homes/${slug}`;
      
      // Attempt to fetch the blog post data
      fetch(`/api/blog/${fullPath}`)
        .then(response => {
          if (!response.ok) {
            // If the API returns a 404, redirect to homepage
            console.log("Blog post not found, redirecting to homepage");
            router.replace('/');
            return null;
          }
          return response.json();
        })
        .then(data => {
          if (data) {
            setPost(data.post);
            if (data.post?.content) {
              setProcessedContent(sanitizeHtml(data.post.content));
            }
          }
        })
        .catch(() => {
          // If there's an error fetching data, also redirect
          console.log("Error fetching blog post, redirecting to homepage");
          router.replace('/');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [slug, router]);

  // Add heading styles
  useEffect(() => {
    if (post?.content) {
      const addHeadingStyles = () => {
        const contentContainer = document.getElementById('blog-content');
        if (contentContainer) {
          const headings = contentContainer.querySelectorAll('h1, h2, h3, h4, h5, h6');
          headings.forEach(heading => {
            heading.classList.add(instrumentSerif.className);
          });
        }
      };
      
      // Add a small delay to ensure the content is rendered
      setTimeout(addHeadingStyles, 100);
    }
  }, [post?.content, instrumentSerif.className]);

  // If we're still loading, show a loading spinner
  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="fixed top-0 left-0 right-0 z-[40] w-full bg-[#1b4e1f]">
          <Navbar isScrolled={isScrolled} />
        </div>
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <Link href="/blog" className="inline-flex items-center text-green-800 hover:text-green-700 font-medium mb-8">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Articles
            </Link>
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-800"></div>
              <p className="ml-4 text-gray-700">Loading...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If we have a post, display it
  if (post) {
    return (
      <div className="min-h-screen bg-white">
        <div className="fixed top-0 left-0 right-0 z-[40] w-full bg-[#1b4e1f]">
          <Navbar isScrolled={isScrolled} />
        </div>
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <Link href="/blog" className="inline-flex items-center text-green-800 hover:text-green-700 font-medium mb-8">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Articles
            </Link>
            
            <article className="max-w-4xl mx-auto">
              <h1 className={`${instrumentSerif.className} text-4xl sm:text-5xl md:text-6xl font-medium mb-6 text-gray-900`}>
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4 mb-8 text-gray-600">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  <span>{post.author || 'Linda Olsson'}</span>
                </div>
              </div>
              
              {post.featuredImage && (
                <div className="mb-8">
                  <img 
                    src={post.featuredImage} 
                    alt={post.title} 
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              )}
              
              <div 
                id="blog-content"
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />
            </article>
            
            <div className="mt-16">
              <ContactCard />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // This should never render - we either show the loading state, redirect, or show the post
  return null;
} 