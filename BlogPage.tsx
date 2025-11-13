import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import img1 from "figma:asset/d213a03ed966da47f0efd26edfaaec50c9f270d4.png";
import img2 from "figma:asset/2e2e808b6f4a1b441b992de739970f31a1c14994.png";
import img3 from "figma:asset/416b6f3cdbd6e560cbe3c38b5eeb87150c24cae9.png";
import logoM from "figma:asset/129c9cfa369dbac8602987ce84a2b8f5339886e7.png";
import { useState, useEffect } from "react";

interface BlogPageProps {
  onNavigate: (page: string, postId?: string) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const blogPosts = [
    {
      id: "humiliation-bdsm",
      title: "How to Safely Explore Humiliation in BDSM",
      excerpt:
        "Understanding the psychological aspects of humiliation play and establishing clear boundaries for a safe, consensual experience.",
      date: "October 15, 2024",
      readTime: "8 min read",
      image: img1,
      category: "Safety & Consent",
      source: "DomSubLiving",
      url: "https://domsubliving.com/how-to-safely-explore-humiliation-in-bdsm/",
    },
    {
      id: "femdom-porn",
      title: "Finding Free Femdom Porn on the Internet Safely",
      excerpt:
        "A comprehensive guide to discovering quality femdom content online while protecting your privacy and digital security.",
      date: "September 28, 2024",
      readTime: "6 min read",
      image: img2,
      category: "Digital Resources",
      source: "Collar N Cuffs",
      url: "https://collarncuffs.com/finding-free-femdom-porn-on-the-internet-safely/",
    },
    {
      id: "femdom-pegging",
      title: "A Beginner's Guide to Femdom Pegging",
      excerpt:
        "What it is, why people do it, and how to talk about it. An introductory guide to exploring this intimate practice with confidence.",
      date: "August 12, 2024",
      readTime: "10 min read",
      image: img3,
      category: "Education",
      source: "Collar N Cuffs",
      url: "https://collarncuffs.com/a-beginners-guide-to-femdom-pegging-what-it-is-why-people-do-it-and-how-to-talk-about-it/",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16">
      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          x: showScrollTop ? 0 : 100,
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed right-6 bottom-8 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-wine-red to-dark-red hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-wine-red/50 flex items-center justify-center group p-2"
        style={{ 
          pointerEvents: showScrollTop ? "auto" : "none",
          filter: 'drop-shadow(0 0 8px rgba(184, 32, 48, 0))',
        }}
        whileHover={{
          filter: 'drop-shadow(0 0 12px rgba(184, 32, 48, 0.6))',
        }}
      >
        <img 
          src={logoM} 
          alt="Scroll to top" 
          className="w-full h-full object-contain filter drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]"
        />
      </motion.button>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-gradient mb-4">Insights & Perspectives</h2>
          <p className="text-ice-white/70 max-w-2xl mx-auto">
            Exploring the art, psychology, and practice of sensuality and connection
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-deep-gray/50 backdrop-blur-sm border border-wine-red/20 rounded-lg overflow-hidden hover:border-wine-red/50 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-wine-red/80 backdrop-blur-sm rounded-full text-ice-white text-xs">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex flex-col flex-1">
                <h3 className="text-ice-white group-hover:text-wine-red transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-ice-white/70 text-sm line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-ice-white/50 text-xs">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Source Credit */}
                <p className="text-ice-white/40 text-xs italic">
                  Source: {post.source}
                </p>

                {/* Read More Button */}
                <Button
                  onClick={() => onNavigate("blog-post", post.id)}
                  className="w-full bg-gradient-to-r from-wine-red to-dark-red hover:opacity-90 text-ice-white group/btn mt-auto"
                >
                  <span>Read Article</span>
                  <ArrowRight
                    className="ml-2 transition-transform group-hover/btn:translate-x-1"
                    size={16}
                  />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-dark-red/20 to-wine-red/20 backdrop-blur-sm border border-wine-red/30 rounded-lg p-8 text-center"
        >
          <h3 className="text-wine-red mb-4">Stay Informed</h3>
          <p className="text-ice-white/80 mb-6">
            Subscribe to receive thoughtful insights, educational content, and updates on sensuality and connection.
          </p>
          <p className="text-ice-white/60 text-sm">
            Sign up through the newsletter section in the footer below.
          </p>
        </motion.div>
      </div>
    </div>
  );
}