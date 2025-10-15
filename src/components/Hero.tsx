import { useState, useEffect } from "react";

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  // Array of background videos
  const base = import.meta.env.BASE_URL;
  const backgroundVideos = [
    `${base}video1.mp4`,
    `${base}video2.mp4`,
    `${base}video3.mp4`,
    `${base}video4.mp4`
  ];

  // Auto-rotate background videos every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % backgroundVideos.length);
    }, 10000);
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
      {/* Background Video Layers */}
      <div className="absolute inset-0 z-0">
        {backgroundVideos.map((video, index) => (
          <video 
            key={index}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
            }`}
            muted
            loop
            autoPlay
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
        {/* Light overlay for better text readability while keeping video clear */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
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
        </div>
      </div>

      {/* Model Grid at Bottom - Better positioned and aligned */}
      <div className="absolute left-0 right-0 z-50" style={{ bottom: '-80px' }}>
        <div className="container mx-auto px-6" style={{ maxWidth: '1600px' }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Model 1 - ANDREA */}
            <div className="media-card rounded-xl group cursor-pointer shadow-xl parallel-anim" style={{ height: '430px' }}>
              <img 
                src={`${base}model1.jpeg`}
                alt="Andrea"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Model Info */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl md:text-2xl font-bold tracking-wider mb-1">ANDREA</h3>
                <p className="text-sm opacity-90">Fashion Model</p>
                <div className="flex items-center mt-2 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs bg-pink-500 px-2 py-1 rounded-full">Available</span>
                  <span className="text-xs bg-black/50 px-2 py-1 rounded-full">Portfolio</span>
                </div>
              </div>
            </div>

            {/* Model 2 - NICOLE */}
            <div className="media-card rounded-xl group cursor-pointer shadow-xl parallel-anim" style={{ height: '430px', animationDelay:'80ms' }}>
              <img 
                src={`${base}model2.jpeg`}
                alt="Nicole"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Model Info */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl md:text-2xl font-bold tracking-wider mb-1">NICOLE</h3>
                <p className="text-sm opacity-90">Editorial Model</p>
                <div className="flex items-center mt-2 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs bg-pink-500 px-2 py-1 rounded-full">Featured</span>
                  <span className="text-xs bg-black/50 px-2 py-1 rounded-full">Gallery</span>
                </div>
              </div>
            </div>

            {/* Model 3 - SMITH with Enhanced Stats */}
            <div className="media-card rounded-xl group cursor-pointer shadow-xl parallel-anim" style={{ height: '430px', animationDelay:'160ms' }}>
              <img 
                src={`${base}model3.jpeg`}
                alt="Smith"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Default Model Info */}
              <div className="absolute bottom-4 left-4 right-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl md:text-2xl font-bold tracking-wider mb-1">SMITH</h3>
                <p className="text-sm opacity-90">Professional Model</p>
              </div>
              
              {/* Enhanced Stats Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-sm p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-t-xl">
                <h3 className="text-black text-lg font-bold text-center mb-3">SMITH</h3>
                <div className="grid grid-cols-5 gap-2 text-center">
                  <div className="bg-pink-50 rounded-lg p-2">
                    <div className="text-pink-500 font-bold text-xs">HEIGHT</div>
                    <div className="text-black font-bold text-lg">185</div>
                    <div className="text-gray-500 text-xs">cm</div>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-2">
                    <div className="text-pink-500 font-bold text-xs">BUST</div>
                    <div className="text-black font-bold text-lg">79</div>
                    <div className="text-gray-500 text-xs">cm</div>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-2">
                    <div className="text-pink-500 font-bold text-xs">WAIST</div>
                    <div className="text-black font-bold text-lg">60</div>
                    <div className="text-gray-500 text-xs">cm</div>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-2">
                    <div className="text-pink-500 font-bold text-xs">HIPS</div>
                    <div className="text-black font-bold text-lg">87</div>
                    <div className="text-gray-500 text-xs">cm</div>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-2">
                    <div className="text-pink-500 font-bold text-xs">SHOE</div>
                    <div className="text-black font-bold text-lg">40</div>
                    <div className="text-gray-500 text-xs">EU</div>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <span className="text-xs bg-pink-500 text-white px-3 py-1 rounded-full">View Details</span>
                </div>
              </div>
            </div>

            {/* Model 4 - JANNAH */}
            <div className="media-card rounded-xl group cursor-pointer shadow-xl parallel-anim" style={{ height: '430px', animationDelay:'240ms' }}>
              <img 
                src={`${base}model4.jpeg`}
                alt="Jannah"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Model Info */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl md:text-2xl font-bold tracking-wider mb-1">JANNAH</h3>
                <p className="text-sm opacity-90">Runway Specialist</p>
                <div className="flex items-center mt-2 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs bg-pink-500 px-2 py-1 rounded-full">Top Model</span>
                  <span className="text-xs bg-black/50 px-2 py-1 rounded-full">Contact</span>
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
