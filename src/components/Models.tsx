import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

const Models = () => {
  const base = import.meta.env.BASE_URL;
  
  // Generate gallery images - simulating 1000+ images
  // Replace this with your actual image data/API
  const generateGalleryImages = () => {
    const images = [];
    const categories = ["Fashion", "Beauty", "Bridal", "Content", "Lifestyle"];
    const actualImages = ["model1.jpeg", "model2.jpeg", "model3.jpeg", "model4.jpeg"];
    
    // Generate placeholder data for 1000+ images
    // In production, you would fetch this from your backend/API
    for (let i = 1; i <= 1200; i++) {
      const imageFile = actualImages[(i - 1) % actualImages.length];
      const category = categories[(i - 1) % categories.length];
      images.push({
        src: `${base}${imageFile}`,
        alt: `Portfolio Image ${i}`,
        category: category,
        id: i
      });
    }
    return images;
  };

  const allGalleryImages = generateGalleryImages();

  const IMAGES_PER_PAGE = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allGalleryImages.length / IMAGES_PER_PAGE);
  
  const getCurrentImages = () => {
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

  const handleFirstPage = () => {
    setCurrentPage(1);
    scrollToGallery();
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
    scrollToGallery();
  };

  const scrollToGallery = () => {
    const element = document.getElementById("models");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Generate page numbers to display (smart pagination for large datasets)
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow + 2) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if we're near the beginning
      if (currentPage <= 3) {
        startPage = 2;
        endPage = maxPagesToShow;
      }
      
      // Adjust if we're near the end
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - maxPagesToShow + 1;
        endPage = totalPages - 1;
      }
      
      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pages.push('...');
      }
      
      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pages.push('...');
      }
      
      // Always show last page
      pages.push(totalPages);
    }
    
    return pages;
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
          <p className="text-sm text-muted-foreground mt-2">
            Showing {(currentPage - 1) * IMAGES_PER_PAGE + 1} - {Math.min(currentPage * IMAGES_PER_PAGE, allGalleryImages.length)} of {allGalleryImages.length} images
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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

        {/* Advanced Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 space-y-4">
            {/* Main Pagination */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {/* First Page */}
              <button
                onClick={handleFirstPage}
                disabled={currentPage === 1}
                className="p-2 rounded-full bg-secondary hover:bg-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-secondary"
                aria-label="First page"
                title="First page"
              >
                <ChevronsLeft className="w-5 h-5" />
              </button>

              {/* Previous Page */}
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="p-2 rounded-full bg-secondary hover:bg-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-secondary"
                aria-label="Previous page"
                title="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Page Numbers */}
              <div className="flex items-center gap-2">
                {getPageNumbers().map((page, index) => (
                  page === '...' ? (
                    <span key={`ellipsis-${index}`} className="px-2 text-muted-foreground">
                      ...
                    </span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page as number);
                        scrollToGallery();
                      }}
                      className={`min-w-[40px] h-10 px-3 rounded-full transition-all font-medium ${
                        currentPage === page
                          ? "bg-pink-500 text-white scale-110"
                          : "bg-secondary hover:bg-primary/50 text-foreground"
                      }`}
                    >
                      {page}
                    </button>
                  )
                ))}
              </div>

              {/* Next Page */}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full bg-secondary hover:bg-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-secondary"
                aria-label="Next page"
                title="Next page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Last Page */}
              <button
                onClick={handleLastPage}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full bg-secondary hover:bg-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-secondary"
                aria-label="Last page"
                title="Last page"
              >
                <ChevronsRight className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Jump Input */}
            <div className="flex items-center justify-center gap-3 text-sm">
              <span className="text-muted-foreground">Go to page:</span>
              <input
                type="number"
                min="1"
                max={totalPages}
                value={currentPage}
                onChange={(e) => {
                  const page = parseInt(e.target.value);
                  if (page >= 1 && page <= totalPages) {
                    setCurrentPage(page);
                    scrollToGallery();
                  }
                }}
                className="w-20 px-3 py-1 bg-secondary border border-border rounded-md text-center focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <span className="text-muted-foreground">of {totalPages}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Models;
