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
import AdminLogin from "@/components/AdminLogin";

const Index = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+Shift+A to open login dialog
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        setIsLoginOpen(true);
      }
      // Escape to close admin panel or login
      if (e.key === 'Escape') {
        if (isAdminOpen) setIsAdminOpen(false);
        if (isLoginOpen) setIsLoginOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAdminOpen, isLoginOpen]);

  // Listen for mobile tap event to open login
  useEffect(() => {
    const onOpenAdmin = () => setIsLoginOpen(true);
    window.addEventListener('open-admin', onOpenAdmin as EventListener);
    return () => window.removeEventListener('open-admin', onOpenAdmin as EventListener);
  }, []);

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
      
      {/* Admin Login */}
      <AdminLogin 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLogin={() => setIsAdminOpen(true)} 
      />
      
      {/* Admin Panel */}
      <AdminPanel isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </div>
  );
};

export default Index;
