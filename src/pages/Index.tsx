import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Models from "@/components/Models";
import Video from "@/components/Video";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AdminPanel from "@/components/AdminPanel";

const Index = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+Shift+A to open admin panel
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        setIsAdminOpen(true);
      }
      // Escape to close admin panel
      if (e.key === 'Escape' && isAdminOpen) {
        setIsAdminOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAdminOpen]);

  return (
    <div className="min-h-screen galaxy-bg">
      <Header />
      <main>
        <div className="parallel-anim"><Hero /></div>
        <div className="parallel-anim" style={{animationDelay:'120ms'}}><About /></div>
        <div className="parallel-anim" style={{animationDelay:'240ms'}}><Models /></div>
        <div className="parallel-anim" style={{animationDelay:'360ms'}}><Video /></div>
        <div className="parallel-anim" style={{animationDelay:'480ms'}}><Services /></div>
        <div className="parallel-anim" style={{animationDelay:'600ms'}}><Contact /></div>
      </main>
      <Footer />
      
      {/* Admin Panel */}
      <AdminPanel isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </div>
  );
};

export default Index;
