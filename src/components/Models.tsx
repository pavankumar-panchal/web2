import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Models = () => {
  const base = import.meta.env.BASE_URL;
  
  // All gallery images - you can add more here
  const allGalleryImages = [
    { src: `${base}model1.jpeg`, alt: "Fashion Editorial 1", category: "Fashion" },
    { src: `${base}model2.jpeg`, alt: "Beauty Campaign", category: "Beauty" },
    { src: `${base}model3.jpeg`, alt: "Fashion Editorial 2", category: "Fashion" },
    { src: `${base}model4.jpeg`, alt: "Bridal Collection", category: "Bridal" },
    { src: `${base}model1.jpeg`, alt: "Fashion Week", category: "Fashion" },
    { src: `${base}model2.jpeg`, alt: "Content Creation", category: "Content" },
    { src: `${base}model3.jpeg`, alt: "Runway Show", category: "Fashion" },
    { src: `${base}model4.jpeg`, alt: "Beauty Portrait", category: "Beauty" },
    { src: `${base}model1.jpeg`, alt: "Editorial Shoot", category: "Fashion" },
    { src: `${base}model2.jpeg`, alt: "Lifestyle Content", category: "Content" },
    { src: `${base}model3.jpeg`, alt: "Bridal Fashion", category: "Bridal" },
    { src: `${base}model4.jpeg`, alt: "Campaign Work", category: "Fashion" },
  ];

  const IMAGES_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);

  const totalPages = Math.ceil(allGalleryImages.length / IMAGES_PER_PAGE);
  
  const getCurrentImages = () => {
    if (showAll) {
      return allGalleryImages;
    }
    const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
    const endIndex = startIndex + IMAGES_PER_PAGE;
    return allGalleryImages.slice(startIndex, endIndex);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToGallery();
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToGallery();
    }
  };

  const scrollToGallery = () => {
    const element = document.getElementById("models");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="models" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Portfolio Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A curated selection of my work spanning fashion, beauty, bridal, and lifestyle campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getCurrentImages().map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 parallel-anim aspect-[3/4]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-pink-500 text-white text-xs font-semibold rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {!showAll && totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-secondary hover:bg-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-secondary"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    scrollToGallery();
                  }}
                  className={`w-10 h-10 rounded-full transition-all ${
                    currentPage === page
                      ? "bg-pink-500 text-white"
                      : "bg-secondary hover:bg-primary/50"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-secondary hover:bg-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-secondary"
              aria-label="Next page"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* View More / View Less Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => {
              setShowAll(!showAll);
              if (showAll) {
                setCurrentPage(1);
                scrollToGallery();
              }
            }}
            className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Models;
