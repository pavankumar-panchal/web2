import React, { createContext, useContext, useState, useEffect } from 'react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

interface Video {
  id: number;
  src: string;
  alt: string;
}

interface NavbarData {
  title: string;
  subtitle: string;
}

interface AdminContextType {
  galleryImages: GalleryImage[];
  videos: Video[];
  navbarData: NavbarData;
  addGalleryImage: (image: Omit<GalleryImage, 'id'>) => void;
  updateGalleryImage: (id: number, image: Partial<GalleryImage>) => void;
  deleteGalleryImage: (id: number) => void;
  addVideo: (video: Omit<Video, 'id'>) => void;
  updateVideo: (id: number, video: Partial<Video>) => void;
  deleteVideo: (id: number) => void;
  updateNavbar: (data: Partial<NavbarData>) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const STORAGE_KEYS = {
  GALLERY: 'riina_gallery_images',
  VIDEOS: 'riina_videos',
  NAVBAR: 'riina_navbar_data',
};

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const base = import.meta.env.BASE_URL;

  // Initialize with default data
  const getDefaultGalleryImages = (): GalleryImage[] => {
    const categories = ["Fashion", "Beauty", "Bridal", "Content", "Lifestyle", "Editorial"];
    const actualImages = ["model1.jpeg", "model2.jpeg", "model3.jpeg", "model4.jpeg"];
    const images: GalleryImage[] = [];
    
    for (let i = 1; i <= 50; i++) {
      const imageFile = actualImages[(i - 1) % actualImages.length];
      const category = categories[(i - 1) % categories.length];
      images.push({
        id: i,
        src: `${base}${imageFile}`,
        alt: `${category} Editorial ${i}`,
        category: category,
      });
    }
    return images;
  };

  const getDefaultVideos = (): Video[] => [
    { id: 1, src: `${base}video1.mp4`, alt: "Fashion Reel 1" },
    { id: 2, src: `${base}video2.mp4`, alt: "Beauty Campaign" },
    { id: 3, src: `${base}video3.mp4`, alt: "Lifestyle Content" },
    { id: 4, src: `${base}video4.mp4`, alt: "Editorial Shoot" },
  ];

  const getDefaultNavbar = (): NavbarData => ({
    title: "RIINA SEISE",
    subtitle: "MODEL & CONTENT CREATOR",
  });

  // Load data from localStorage or use defaults
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.GALLERY);
    return stored ? JSON.parse(stored) : getDefaultGalleryImages();
  });

  const [videos, setVideos] = useState<Video[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.VIDEOS);
    return stored ? JSON.parse(stored) : getDefaultVideos();
  });

  const [navbarData, setNavbarData] = useState<NavbarData>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.NAVBAR);
    return stored ? JSON.parse(stored) : getDefaultNavbar();
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(galleryImages));
  }, [galleryImages]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.VIDEOS, JSON.stringify(videos));
  }, [videos]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.NAVBAR, JSON.stringify(navbarData));
  }, [navbarData]);

  // Gallery operations
  const addGalleryImage = (image: Omit<GalleryImage, 'id'>) => {
    const newId = Math.max(0, ...galleryImages.map(img => img.id)) + 1;
    setGalleryImages([...galleryImages, { ...image, id: newId }]);
  };

  const updateGalleryImage = (id: number, image: Partial<GalleryImage>) => {
    setGalleryImages(galleryImages.map(img => 
      img.id === id ? { ...img, ...image } : img
    ));
  };

  const deleteGalleryImage = (id: number) => {
    setGalleryImages(galleryImages.filter(img => img.id !== id));
  };

  // Video operations
  const addVideo = (video: Omit<Video, 'id'>) => {
    const newId = Math.max(0, ...videos.map(v => v.id)) + 1;
    setVideos([...videos, { ...video, id: newId }]);
  };

  const updateVideo = (id: number, video: Partial<Video>) => {
    setVideos(videos.map(v => 
      v.id === id ? { ...v, ...video } : v
    ));
  };

  const deleteVideo = (id: number) => {
    setVideos(videos.filter(v => v.id !== id));
  };

  // Navbar operations
  const updateNavbar = (data: Partial<NavbarData>) => {
    setNavbarData({ ...navbarData, ...data });
  };

  return (
    <AdminContext.Provider
      value={{
        galleryImages,
        videos,
        navbarData,
        addGalleryImage,
        updateGalleryImage,
        deleteGalleryImage,
        addVideo,
        updateVideo,
        deleteVideo,
        updateNavbar,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};
