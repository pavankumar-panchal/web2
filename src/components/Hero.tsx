import { useState, useEffect } from "react";
import { useAdmin } from "../contexts/AdminContext";

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { videos, galleryImages } = useAdmin();
  const base = import.meta.env.BASE_URL;
  
  // Get background videos from admin context
  const backgroundVideos = videos.map(v => v.src);
  
  // Get first 4 gallery images for hero showcase
  const heroImages = galleryImages.slice(0, 4);

  // Auto-rotate background videos every 8 seconds with professional timing
  useEffect(() => {
    if (backgroundVideos.length <= 1) return; // Don't rotate if only one video
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      // Delay the actual index change slightly for smoother transition
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % backgroundVideos.length);
        setIsTransitioning(false);
      }, 300);
    }, 8000); // Change every 8 seconds for better pacing
    
    return () => clearInterval(interval);
  }, [backgroundVideos.length]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex flex-col overflow-visible"
      style={{ minHeight: 'calc(100vh + 300px)' }}
    >
      {/* Background Video Layers with Professional Transitions */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {backgroundVideos.map((video, index) => {
          const isActive = index === currentVideoIndex;
          const isPrevious = index === (currentVideoIndex - 1 + backgroundVideos.length) % backgroundVideos.length;
          
          return (
            <video 
              key={`${video}-${index}`}
              className={`absolute w-full h-full object-cover transition-all duration-[2000ms] ease-in-out ${
                isActive 
                  ? 'opacity-100 scale-100' 
                  : isPrevious 
                  ? 'opacity-0 scale-105' 
                  : 'opacity-0 scale-100'
              }`}
              style={{
                transform: isActive ? 'scale(1)' : 'scale(1.05)',
                transition: 'opacity 2s ease-in-out, transform 10s ease-out',
              }}
              muted
              loop
              autoPlay
              playsInline
              preload="auto"
              onLoadedData={(e) => {
                // Ensure video plays smoothly
                const videoElement = e.target as HTMLVideoElement;
                if (isActive) {
                  videoElement.play().catch(() => {
                    // Handle autoplay restrictions
                  });
                }
              }}
              onEnded={(e) => {
                // Ensure continuous looping
                const videoElement = e.target as HTMLVideoElement;
                videoElement.currentTime = 0;
                videoElement.play();
              }}
            >
              <source src={video} type="video/mp4" />
            </video>
          );
        })}
        
        {/* Professional overlay with gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        {/* Subtle vignette effect for cinematic feel */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4 relative z-10 pb-80 min-h-screen">
        <div className="flex flex-col items-center justify-center flex-1 w-full max-w-4xl mx-auto" style={{ marginTop: '150px' }}>
          {/* Welcome Text */}
          <p className="text-white text-sm md:text-lg tracking-widest mb-4 opacity-90 font-light animate-fade-in text-center">
            WELCOME TO
          </p>
          
          {/* Main Title with Outline Text */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none animate-fade-in text-center" 
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px white',
                textStroke: '2px white',
                fontFamily: 'Playfair Display, serif',                                                                                  
                fontWeight: 900,
                animationDelay: '0.3s'                                                                                                                                                    
              }}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
            RIINA SEISE
          </h1>
          
          {/* Bio Text */}
          <p className="text-white text-base md:text-lg leading-relaxed mb-12 opacity-90 font-light animate-fade-in text-center max-w-3xl px-6"
             style={{ animationDelay: '0.6s' }}>
            I'm an entrepreneur and fashion professional who combines an international modeling background with over eight years in the agency business to create captivating brand content. I specialize in high-quality visuals with a refined aesthetic, focusing on fashion, beauty, and lifestyle on Instagram. Beyond digital collaborations, I work with select projects in modeling, fashion and TV - and as a true animal lover and proud cat mama, I enjoy life's simple moments as much as its big adventures.
          </p>
          
          {/* CTA Button */}
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg uppercase animate-fade-in"
            style={{
              borderRadius: '50px',
              padding: '15px 35px',
              letterSpacing: '1px',
              fontWeight: 500,
              animationDelay: '0.9s'                                                                                                            
            }}
          >
            Get In Touch                                                                                                          
          </button>
          
          {/* Video Progress Indicators */}
          {backgroundVideos.length > 1 && (
            <div className="mt-8 flex gap-2 items-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
              {backgroundVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentVideoIndex(index);
                      setIsTransitioning(false);
                    }, 300);
                  }}
                  className={`transition-all duration-500 rounded-full ${
                    index === currentVideoIndex 
                      ? 'bg-pink-500 w-12 h-1.5 shadow-lg shadow-pink-500/50' 
                      : 'bg-white/40 hover:bg-white/60 w-8 h-1.5'
                  }`}
                  aria-label={`Switch to video ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Model Grid at Bottom - Better positioned and aligned */}
      <div className="absolute left-0 right-0 z-50" style={{ bottom: '-80px' }}>
        <div className="container mx-auto px-3 sm:px-6" style={{ maxWidth: '1600px' }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            {/* Image 1 */}
            <div className="media-card rounded-lg sm:rounded-xl group cursor-pointer shadow-xl parallel-anim h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[430px]">
              <img 
                src={heroImages[0]?.src || `${base}model1.jpeg`}
                alt={heroImages[0]?.alt || "Fashion Editorial"}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg sm:rounded-xl"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-lg sm:rounded-xl"></div>
              
              {/* Model Info */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white">
                <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wider mb-0.5 sm:mb-1 truncate">{heroImages[0]?.alt || "Fashion Editorial"}</h3>
                <p className="text-xs sm:text-sm opacity-90">{heroImages[0]?.category || "Fashion"}</p>
                <div className="hidden sm:flex items-center mt-2 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs bg-pink-500 px-2 py-1 rounded-full">Portfolio</span>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="media-card rounded-lg sm:rounded-xl group cursor-pointer shadow-xl parallel-anim h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[430px]" style={{ animationDelay:'80ms' }}>
              <img 
                src={heroImages[1]?.src || `${base}model2.jpeg`}
                alt={heroImages[1]?.alt || "Beauty Editorial"}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg sm:rounded-xl"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-lg sm:rounded-xl"></div>
              
              {/* Model Info */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white">
                <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wider mb-0.5 sm:mb-1 truncate">{heroImages[1]?.alt || "Beauty Editorial"}</h3>
                <p className="text-xs sm:text-sm opacity-90">{heroImages[1]?.category || "Beauty"}</p>
                <div className="hidden sm:flex items-center mt-2 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs bg-pink-500 px-2 py-1 rounded-full">Featured</span>
                </div>
              </div>
            </div>

            {/* Image 3 */}
            <div className="media-card rounded-lg sm:rounded-xl group cursor-pointer shadow-xl parallel-anim h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[430px]" style={{ animationDelay:'160ms' }}>
              <img 
                src={heroImages[2]?.src || `${base}model3.jpeg`}
                alt={heroImages[2]?.alt || "Editorial Shoot"}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg sm:rounded-xl"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-lg sm:rounded-xl"></div>
              
              {/* Model Info */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white">
                <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wider mb-0.5 sm:mb-1 truncate">{heroImages[2]?.alt || "Editorial Shoot"}</h3>
                <p className="text-xs sm:text-sm opacity-90">{heroImages[2]?.category || "Fashion"}</p>
                <div className="hidden sm:flex items-center mt-2 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs bg-pink-500 px-2 py-1 rounded-full">Latest</span>
                </div>
              </div>
            </div>

            {/* Image 4 */}
            <div className="media-card rounded-lg sm:rounded-xl group cursor-pointer shadow-xl parallel-anim h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[430px]" style={{ animationDelay:'240ms' }}>
              <img 
                src={heroImages[3]?.src || `${base}model4.jpeg`}
                alt={heroImages[3]?.alt || "Bridal Collection"}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg sm:rounded-xl"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-lg sm:rounded-xl"></div>
              
              {/* Model Info */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white">
                <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wider mb-0.5 sm:mb-1 truncate">{heroImages[3]?.alt || "Bridal Collection"}</h3>
                <p className="text-xs sm:text-sm opacity-90">{heroImages[3]?.category || "Bridal"}</p>
                <div className="hidden sm:flex items-center mt-2 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs bg-pink-500 px-2 py-1 rounded-full">Gallery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
