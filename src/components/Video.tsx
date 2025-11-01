import { Play, Pause, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useAdmin } from "../contexts/AdminContext";

const Video = () => {
  const { videoSectionData, videos: adminVideos, backgroundSettings } = useAdmin();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);
  const base = import.meta.env.BASE_URL;

  const videoSectionBg = backgroundSettings.videoSectionBackground;

  // Use videos from admin panel, with fallback to default videos
  const defaultVideos = [
    {
      id: "1",
      src: `${base}video1.mp4`,
      alt: "Fashion Editorial - High Fashion Campaign",
      type: 'video' as const
    },
    {
      id: "2",
      src: `${base}video2.mp4`,
      alt: "Runway Collection - Fashion Week Highlights",
      type: 'video' as const
    },
    {
      id: "3",
      src: `${base}video3.mp4`,
      alt: "Commercial Campaign - Brand Collaboration",
      type: 'video' as const
    },
    {
      id: "4",
      src: `${base}video4.mp4`,
      alt: "Editorial Shoot - Magazine Feature",
      type: 'video' as const
    }
  ];

  const videos = adminVideos.length > 0 ? adminVideos : defaultVideos;
  const currentVideo = videos[currentVideoIndex];

  // Auto-rotate videos every 8 seconds when not playing
  useEffect(() => {
    if (!isPlaying) {
      const interval = setInterval(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, videos.length]);

  // Update background video when current video changes
  useEffect(() => {
    if (backgroundVideoRef.current) {
      backgroundVideoRef.current.load();
    }
  }, [currentVideoIndex]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    setIsPlaying(false);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  const selectVideo = (index: number) => {
    setCurrentVideoIndex(index);
    setIsPlaying(false);
  };

  return (
    <section id="video" className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
          {videoSectionBg.type === 'video' ? (
            <video 
              ref={backgroundVideoRef}
              className="w-full h-full object-cover opacity-20"
              muted
              loop
              autoPlay
              playsInline
              key={videoSectionBg.src}
            >
              <source src={videoSectionBg.src} type="video/mp4" />
            </video>
          ) : (
            <img 
              src={videoSectionBg.src}
              alt="Section Background"
              className="w-full h-full object-cover opacity-20"
            />
          )}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-pink-500 tracking-widest text-sm font-medium mb-3">VIDEO SHOWCASE</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {videoSectionData.mainTitle}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {videoSectionData.mainDescription}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Video Content */}
          <div className="relative mx-auto" style={{ maxWidth: '600px' }}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-pink-500/20">
              {/* Navigation Arrows */}
              <button
                onClick={prevVideo}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-pink-500/80 hover:bg-pink-500 rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <ChevronLeft className="text-white w-6 h-6" />
              </button>
              
              <button
                onClick={nextVideo}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-pink-500/80 hover:bg-pink-500 rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <ChevronRight className="text-white w-6 h-6" />
              </button>

              {currentVideo.type === 'video' || !currentVideo.type ? (
                <video 
                  key={currentVideo.id}
                  ref={videoRef}
                  className="w-full object-cover rounded-xl" 
                  style={{ height: '550px' }}
                  controls 
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src={currentVideo.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img 
                  key={currentVideo.id}
                  src={currentVideo.src}
                  alt={currentVideo.alt}
                  className="w-full object-cover rounded-xl" 
                  style={{ height: '550px' }}
                />
              )}
              
              {/* Video Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <div className="bg-gradient-to-r from-black/80 to-black/60 p-5 rounded-xl backdrop-blur-md border border-white/10">
                  <h4 className="font-bold text-xl mb-1">{currentVideo.alt}</h4>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs bg-pink-500 px-3 py-1.5 rounded-full font-semibold">Video {currentVideoIndex + 1}</span>
                  </div>
                </div>
              </div>

              {/* Custom Play Button Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/20">
                  <button
                    onClick={togglePlay}
                    className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 rounded-full p-6 transition-all duration-300 hover:scale-110 shadow-2xl"
                  >
                    <Play className="text-white w-10 h-10 ml-1" fill="white" />
                  </button>
                </div>
              )}

              {/* Video Progress Indicators */}
              <div className="absolute top-6 right-6 flex space-x-2 z-10 bg-black/50 backdrop-blur-sm p-2 rounded-full">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => selectVideo(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentVideoIndex 
                        ? 'bg-pink-500 w-8 h-2' 
                        : 'bg-white/50 hover:bg-white/80 w-2 h-2'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Video Thumbnails Row */}
            <div className="mt-8 flex space-x-4 justify-center overflow-x-auto pb-2">
              {videos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => selectVideo(index)}
                  className={`flex-shrink-0 relative rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentVideoIndex 
                      ? 'ring-4 ring-pink-500 scale-110 shadow-xl shadow-pink-500/50' 
                      : 'opacity-70 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  <video 
                    className="w-24 h-20 object-cover"
                    muted
                    loop
                    autoPlay
                    playsInline
                  >
                    <source src={video.backgroundVideo} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play className="text-white w-5 h-5" fill="white" />
                  </div>
                  {index === currentVideoIndex && (
                    <div className="absolute top-1 left-1">
                      <span className="bg-pink-500 text-white text-xs px-1.5 py-0.5 rounded">Now</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Content Text */}
          <div className="space-y-6">
            <div>
              <p className="text-pink-500 tracking-widest text-sm font-medium mb-2">VIDEO SHOWCASE</p>
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-white mb-4">
                {videoSectionData.contentTitle}
              </h2>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              {videoSectionData.contentDescription}
            </p>
            
            {/* Current Model Stats */}
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg space-y-4">
              <h3 className="text-white font-semibold text-lg mb-4">Currently Featuring: {currentVideo.alt}</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">5+</span>
                  </div>
                  <p className="text-white font-semibold text-sm">Years Experience</p>
                  <p className="text-gray-400 text-xs">Professional Modeling</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">50+</span>
                  </div>
                  <p className="text-white font-semibold text-sm">Brand Collaborations</p>
                  <p className="text-gray-400 text-xs">International Campaigns</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">100+</span>
                  </div>
                  <p className="text-white font-semibold text-sm">Photo Shoots</p>
                  <p className="text-gray-400 text-xs">Fashion & Commercial</p>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 rounded-full font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg">
                View Portfolio
              </button>
              <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-8 py-3 rounded-full font-medium tracking-wide transition-all duration-300">
                Book Session
              </button>
            </div>

            {/* Auto-rotate indicator */}
            <div className="text-center pt-4">
              <p className="text-gray-400 text-sm">
                {isPlaying ? 'Playing video...' : 'Videos auto-rotate every 8 seconds'}
              </p>
            </div>
          </div>
        </div>
        
        {/* Media Gallery */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <p className="text-pink-500 tracking-widest text-sm font-medium mb-2">MEDIA GALLERY</p>
            <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-white">
              {videoSectionData.galleryTitle}
            </h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              {videoSectionData.galleryDescription}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {videos.map((video, index) => (
              <div 
                key={video.id} 
                className={`relative group cursor-pointer transition-all duration-300 media-card parallel-anim ${
                  index === currentVideoIndex ? 'ring-2 ring-pink-500 scale-105' : ''
                }`}
                onClick={() => selectVideo(index)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  {video.type === 'video' || !video.type ? (
                    <>
                      <video 
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        muted
                        loop
                        autoPlay
                        playsInline
                      >
                        <source src={video.src} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play className="text-white w-12 h-12" fill="white" />
                      </div>
                    </>
                  ) : (
                    <>
                      <img 
                        src={video.src}
                        alt={video.alt}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ImageIcon className="text-white w-12 h-12" />
                      </div>
                    </>
                  )}
                  
                  {/* Video Number Indicator */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Currently Playing Indicator */}
                  {index === currentVideoIndex && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold animate-pulse">
                        CURRENT
                      </span>
                    </div>
                  )}
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4">
                    <h4 className="font-semibold text-white text-sm mb-1 truncate">{video.alt}</h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-pink-400 text-xs bg-pink-500/20 px-2 py-1 rounded-full">
                        {video.type === 'image' ? '🖼️ Image' : '🎥 Video'} {index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Video Controls */}
          <div className="mt-8 flex justify-center items-center space-x-4">
            <button
              onClick={prevVideo}
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            
            <div className="text-white text-sm">
              <span className="text-pink-500 font-semibold">{currentVideoIndex + 1}</span> of {videos.length}
            </div>
            
            <button
              onClick={nextVideo}
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;