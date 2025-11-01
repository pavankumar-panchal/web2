import React, { createContext, useContext, useState, useEffect } from 'react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

interface MediaItem {
  id: number;
  src: string;
  alt: string;
  type: 'image' | 'video';
  thumbnail?: string; // Optional thumbnail for videos
}

interface NavbarData {
  title: string;
  subtitle: string;
}

interface VideoSectionData {
  mainTitle: string;
  mainDescription: string;
  contentTitle: string;
  contentDescription: string;
  galleryTitle: string;
  galleryDescription: string;
}

interface BackgroundSettings {
  heroBackground: {
    type: 'image' | 'video';
    src: string;
  };
  videoSectionBackground: {
    type: 'image' | 'video';
    src: string;
  };
}

interface AdminContextType {
  galleryImages: GalleryImage[];
  videos: MediaItem[];
  navbarData: NavbarData;
  videoSectionData: VideoSectionData;
  backgroundSettings: BackgroundSettings;
  addGalleryImage: (image: Omit<GalleryImage, 'id'>) => void;
  updateGalleryImage: (id: number, image: Partial<GalleryImage>) => void;
  deleteGalleryImage: (id: number) => void;
  addVideo: (video: Omit<MediaItem, 'id'>) => void;
  updateVideo: (id: number, video: Partial<MediaItem>) => void;
  deleteVideo: (id: number) => void;
  updateNavbar: (data: Partial<NavbarData>) => void;
  updateVideoSection: (data: Partial<VideoSectionData>) => void;
  updateBackgroundSettings: (data: Partial<BackgroundSettings>) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const STORAGE_KEYS = {
  GALLERY: 'riina_gallery_images',
  VIDEOS: 'riina_videos',
  NAVBAR: 'riina_navbar_data',
  VIDEO_SECTION: 'riina_video_section_data',
  BACKGROUND_SETTINGS: 'riina_background_settings',
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

  const getDefaultVideos = (): MediaItem[] => [
    { id: 1, src: `${base}video1.mp4`, alt: "Fashion Reel 1", type: 'video' },
    { id: 2, src: `${base}video2.mp4`, alt: "Beauty Campaign", type: 'video' },
    { id: 3, src: `${base}video3.mp4`, alt: "Lifestyle Content", type: 'video' },
    { id: 4, src: `${base}video4.mp4`, alt: "Editorial Shoot", type: 'video' },
  ];

  const getDefaultNavbar = (): NavbarData => ({
    title: "RIINA SEISE",
    subtitle: "MODEL & CONTENT CREATOR",
  });

  const getDefaultVideoSection = (): VideoSectionData => ({
    mainTitle: "My Work",
    mainDescription: "Explore my portfolio of professional modeling and content creation",
    contentTitle: "My Creative Portfolio",
    contentDescription: "Explore my diverse portfolio showcasing professional modeling and content creation. Each video highlights different aspects of my work, from runway and editorial shoots to commercial campaigns, demonstrating versatility and creativity across the fashion and lifestyle industries.",
    galleryTitle: "My Video Collection",
    galleryDescription: "Browse through my diverse portfolio of work. Click on any video to view it.",
  });

    const getDefaultBackgroundSettings = (): BackgroundSettings => ({
      heroBackground: {
        type: 'video',
        src: `${base}video1.mp4`,
      },
      videoSectionBackground: {
        type: 'video',
        src: `${base}video1.mp4`,
      },
    });

  // Load data from localStorage or use defaults
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.GALLERY);
    return stored ? JSON.parse(stored) : getDefaultGalleryImages();
  });

  const [videos, setVideos] = useState<MediaItem[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.VIDEOS);
    return stored ? JSON.parse(stored) : getDefaultVideos();
  });

  const [navbarData, setNavbarData] = useState<NavbarData>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.NAVBAR);
    return stored ? JSON.parse(stored) : getDefaultNavbar();
  });

  const [videoSectionData, setVideoSectionData] = useState<VideoSectionData>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.VIDEO_SECTION);
    return stored ? JSON.parse(stored) : getDefaultVideoSection();
  });

    const [backgroundSettings, setBackgroundSettings] = useState<BackgroundSettings>(() => {
      const stored = localStorage.getItem(STORAGE_KEYS.BACKGROUND_SETTINGS);
      return stored ? JSON.parse(stored) : getDefaultBackgroundSettings();
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

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.VIDEO_SECTION, JSON.stringify(videoSectionData));
  }, [videoSectionData]);

    useEffect(() => {
      localStorage.setItem(STORAGE_KEYS.BACKGROUND_SETTINGS, JSON.stringify(backgroundSettings));
    }, [backgroundSettings]);

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

  // Media operations (videos/images)
  const addVideo = (video: Omit<MediaItem, 'id'>) => {
    const newId = Math.max(0, ...videos.map(v => v.id)) + 1;
    setVideos([...videos, { ...video, id: newId }]);
  };

  const updateVideo = (id: number, video: Partial<MediaItem>) => {
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

  // Video section operations
  const updateVideoSection = (data: Partial<VideoSectionData>) => {
    setVideoSectionData({ ...videoSectionData, ...data });
  };

    // Background settings operations
    const updateBackgroundSettings = (data: Partial<BackgroundSettings>) => {
      setBackgroundSettings({ ...backgroundSettings, ...data });
    };

  return (
    <AdminContext.Provider
      value={{
        galleryImages,
        videos,
        navbarData,
        videoSectionData,
          backgroundSettings,
        addGalleryImage,
        updateGalleryImage,
        deleteGalleryImage,
        addVideo,
        updateVideo,
        deleteVideo,
        updateNavbar,
        updateVideoSection,
          updateBackgroundSettings,
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
