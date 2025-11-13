import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { GalleryPage } from "./components/GalleryPage";
import { BookingPage } from "./components/BookingPage";
import { SignatureExperiencesPage } from "./components/SignatureExperiencesPage";
import { BespokeSessionsPage } from "./components/BespokeSessionsPage";
import { ScreeningProcessPage } from "./components/ScreeningProcessPage";
import { RatesPage } from "./components/RatesPage";
import { CancelationPolicyPage } from "./components/CancelationPolicyPage";
import { BlogPage } from "./components/BlogPage";
import { BlogPostPage } from "./components/BlogPostPage";
import { WishListPage } from "./components/WishListPage";
import { VIPAccessPage } from "./components/VIPAccessPage";
import { VIPAdminPage } from "./components/VIPAdminPage";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentBlogPostId, setCurrentBlogPostId] = useState<string>("humiliation-bdsm");
  const [bookingPreselect, setBookingPreselect] = useState<{
    sessionLength?: string;
    experienceType?: string;
  }>({});

  const handleNavigation = (page: string, postId?: string | number, bookingData?: { sessionLength?: string; experienceType?: string }) => {
    setCurrentPage(page);
    if (postId) {
      setCurrentBlogPostId(String(postId));
    }
    if (bookingData) {
      setBookingPreselect(bookingData);
    } else {
      setBookingPreselect({});
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigation} />;
      case "about":
        return <AboutPage onNavigate={handleNavigation} />;
      case "gallery":
        return <GalleryPage onNavigate={handleNavigation} />;
      case "vip-access":
        return <VIPAccessPage onAccessGranted={() => handleNavigation("gallery")} onNavigate={handleNavigation} />;
      case "vip-admin":
        return <VIPAdminPage onNavigate={handleNavigation} />;
      case "booking":
        return <BookingPage preselect={bookingPreselect} />;
      case "signature-experiences":
        return <SignatureExperiencesPage />;
      case "bespoke-sessions":
        return <BespokeSessionsPage onNavigate={handleNavigation} />;
      case "screening-process":
        return <ScreeningProcessPage onNavigate={handleNavigation} />;
      case "rates":
        return <RatesPage />;
      case "cancelation-policy":
        return <CancelationPolicyPage />;
      case "booking-session":
        return <BookingPage />;
      case "blog":
        return <BlogPage onNavigate={handleNavigation} />;
      case "blog-post":
        return <BlogPostPage postId={currentBlogPostId} onNavigate={handleNavigation} />;
      case "wishlist":
        return <WishListPage />;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation currentPage={currentPage} onNavigate={handleNavigation} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigation} />
      <Toaster position="top-right" theme="dark" />
    </div>
  );
}
