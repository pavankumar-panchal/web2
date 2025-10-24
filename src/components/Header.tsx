import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useAdmin } from "../contexts/AdminContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { navbarData } = useAdmin();
  // Tap counter for mobile: 5 taps on logo opens the admin panel
  const tapCountRef = useRef(0);
  const tapTimeoutRef = useRef<number | null>(null);

  const handleLogoTap = () => {
    tapCountRef.current += 1;

    // reset timer (3s) after last tap
    if (tapTimeoutRef.current) {
      window.clearTimeout(tapTimeoutRef.current);
    }
    tapTimeoutRef.current = window.setTimeout(() => {
      if (tapCountRef.current > 0 && tapCountRef.current < 5) {
        // Visual feedback for incomplete sequence
        const logo = document.querySelector('.logo-wrapper');
        if (logo) logo.classList.add('shake');
        setTimeout(() => {
          if (logo) logo.classList.remove('shake');
        }, 500);
      }
      tapCountRef.current = 0;
      tapTimeoutRef.current = null;
    }, 3000);

    // If tapped 5 times, dispatch event to open login
    if (tapCountRef.current >= 5) {
      try {
        window.dispatchEvent(new CustomEvent('open-admin'));
      } catch (e) {
        // Fallback for older browsers
        const ev = document.createEvent('Event');
        ev.initEvent('open-admin', true, true);
        window.dispatchEvent(ev);
      }
      tapCountRef.current = 0;
      if (tapTimeoutRef.current) {
        window.clearTimeout(tapTimeoutRef.current);
        tapTimeoutRef.current = null;
      }
    } else {
      // Visual feedback for each tap
      const logo = document.querySelector('.logo-wrapper');
      if (logo) {
        logo.classList.add('tap');
        setTimeout(() => logo.classList.remove('tap'), 200);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (tapTimeoutRef.current) window.clearTimeout(tapTimeoutRef.current);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="flex justify-between items-center p-6 md:p-8 mx-4 md:mx-8 relative z-10">
        {/* Logo */}
        <div className="text-white logo-wrapper" onClick={handleLogoTap} onTouchStart={handleLogoTap} role="button" aria-label="site logo">
          <h1 className="text-xl md:text-2xl font-bold tracking-widest">{navbarData.title}</h1>
          <p className="text-xs tracking-wider opacity-80">{navbarData.subtitle}</p>
          <style jsx>{`
            .logo-wrapper {
              transition: transform 0.2s ease;
            }
            .logo-wrapper.tap {
              transform: scale(0.95);
            }
            .logo-wrapper.shake {
              animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
            }
            @keyframes shake {
              10%, 90% { transform: translate3d(-1px, 0, 0); }
              20%, 80% { transform: translate3d(2px, 0, 0); }
              30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
              40%, 60% { transform: translate3d(4px, 0, 0); }
            }
          `}</style>
        </div>
        
        {/* Hamburger Menu */}
        <div 
          className="w-[30px] h-[20px] relative cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`block absolute h-[2px] w-full bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-[9px]' : 'top-0'}`}></span>
          <span className={`block absolute h-[2px] w-full bg-white transition-all duration-300 ease-in-out top-1/2 transform -translate-y-1/2 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block absolute h-[2px] w-full bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-[9px]' : 'bottom-0'}`}></span>
        </div>

        {/* Mobile  Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 flex animate-fade-in bg-black">
            {/* Left Side - Navigation Menu */}
            <div className="w-full md:w-1/2 relative overflow-hidden bg-black">
              {/* Dark Overlay for Extra Darkness */}
              <div className="absolute inset-0 bg-black"></div>
              
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255, 255, 255, .01) 35px, rgba(255, 255, 255, .01) 70px)',
                  animation: 'slidePattern 20s linear infinite'
                }}></div>
              </div>
              
              {/* Glowing Orbs */}
              <div className="absolute top-20 right-20 w-64 h-64 bg-pink-500 rounded-full blur-[120px] opacity-5 animate-pulse"></div>
              <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500 rounded-full blur-[120px] opacity-5 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-6 px-8">
                <div className="space-y-8 w-full max-w-md">
                  {['Modelling', 'UGC & Content', 'About Me', 'Contact'].map((item, index) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item === 'Modelling' || item === 'UGC & Content' ? 'services' : item === 'About Me' ? 'about' : 'contact')}
                      className="group relative block w-full text-left text-white text-3xl md:text-4xl font-light tracking-widest transition-all duration-500 hover:translate-x-4 overflow-hidden"
                      style={{ 
                        animationDelay: `${index * 0.1}s`,
                        animation: 'slideInLeft 0.5s ease-out forwards',
                        opacity: 0
                      }}
                    >
                      {/* Hover Background */}
                      <span className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 rounded-lg"></span>
                      
                      {/* Number */}
                      <span className="inline-block w-12 text-pink-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300 text-lg font-bold">
                        0{index + 1}
                      </span>
                      
                      {/* Text */}
                      <span className="relative inline-block group-hover:text-pink-500 transition-colors duration-300">
                        {item}
                      </span>
                      
                      {/* Underline Effect */}
                      <span className="absolute bottom-0 left-12 right-0 h-[2px] bg-gradient-to-r from-pink-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Close button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-8 right-8 text-white hover:text-pink-500 transition-all duration-300 hover:rotate-180 hover:scale-110 z-20 bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-pink-500/20"
              >
                <X size={32} />
              </button>
            </div>
            
            {/* Right Side - Featured Images Grid */}
            <div className="hidden md:block w-1/2 relative overflow-hidden bg-black">
              {/* Solid Black Background - No Images */}
              <div className="absolute inset-0 bg-black"></div>              {/* Floating Cards - Top Right */}
              <div className="absolute top-8 right-8 space-y-4">
                <div className="w-32 h-32 bg-cover bg-center rounded-lg transform rotate-12 shadow-2xl opacity-70 hover:opacity-90 transition-all duration-300 hover:scale-105" style={{backgroundImage: "url('/model2.jpeg')"}}></div>
                <div className="w-24 h-32 bg-cover bg-center rounded-lg transform -rotate-6 shadow-2xl opacity-60 hover:opacity-80 transition-all duration-300 hover:scale-105" style={{backgroundImage: "url('/model3.jpeg')"}}></div>
              </div>
              
              {/* Floating Smaller Images */}
              <div className="absolute top-8 right-8 w-32 h-40 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 opacity-30" style={{
                animation: 'float 6s ease-in-out infinite'
              }}>
                <img src="/model2.jpeg" alt="Model 2" className="w-full h-full object-cover" />
                <div className="absolute inset-0 border-2 border-pink-500/30 bg-black/40"></div>
              </div>
              
              <div className="absolute bottom-32 right-16 w-24 h-32 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 opacity-30" style={{
                animation: 'float 6s ease-in-out infinite 2s'
              }}>
                <img src="/model3.jpeg" alt="Model 3" className="w-full h-full object-cover" />
                <div className="absolute inset-0 border-2 border-purple-500/30 bg-black/40"></div>
              </div>
              
              {/* Overlay Text */}
              <div className="absolute bottom-12 left-12 text-white" style={{
                animation: 'slideInRight 0.8s ease-out 0.5s forwards',
                opacity: 0
              }}>
                <div className="mb-4">
                  <div className="h-[2px] w-20 bg-gradient-to-r from-pink-500 to-purple-500 mb-6"></div>
                  <h2 className="text-6xl font-bold mb-3 leading-none" style={{ 
                    WebkitTextStroke: '2px white', 
                    color: 'transparent',
                    fontFamily: 'Playfair Display, serif'
                  }}>
                    EXPLORE
                  </h2>
                  <p className="text-2xl tracking-wider opacity-90 mb-2">Our Elite Portfolio</p>
                  <p className="text-sm tracking-widest opacity-60">DISCOVER THE EXTRAORDINARY</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-pink-500/10 rounded-full" style={{ animation: 'spin 20s linear infinite' }}></div>
            </div>
            
            <style>{`
              @keyframes slideInLeft {
                from {
                  opacity: 0;
                  transform: translateX(-50px);
                }
                to {
                  opacity: 1;
                  transform: translateX(0);
                }
              }
              
              @keyframes slideInRight {
                from {
                  opacity: 0;
                  transform: translateX(50px);
                }
                to {
                  opacity: 1;
                  transform: translateX(0);
                }
              }
              
              @keyframes fadeIn {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 0.6;
                }
              }
              
              @keyframes float {
                0%, 100% {
                  transform: translateY(0px) rotate(0deg);
                }
                50% {
                  transform: translateY(-20px) rotate(3deg);
                }
              }
              
              @keyframes spin {
                from {
                  transform: translate(-50%, -50%) rotate(0deg);
                }
                to {
                  transform: translate(-50%, -50%) rotate(360deg);
                }
              }
              
              @keyframes slidePattern {
                0% {
                  background-position: 0 0;
                }
                100% {
                  background-position: 70px 70px;
                }
              }
            `}</style>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
