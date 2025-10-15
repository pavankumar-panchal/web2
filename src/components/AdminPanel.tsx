import { useState } from "react";
import { X, Plus, Trash2, Edit2, Save, Image as ImageIcon, Video as VideoIcon, Navigation } from "lucide-react";
import { useAdmin } from "../contexts/AdminContext";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminPanel = ({ isOpen, onClose }: AdminPanelProps) => {
  const {
    galleryImages,
    videos,
    navbarData,
    videoSectionData,
    addGalleryImage,
    updateGalleryImage,
    deleteGalleryImage,
    addVideo,
    updateVideo,
    deleteVideo,
    updateNavbar,
    updateVideoSection,
  } = useAdmin();

  const [activeTab, setActiveTab] = useState<'gallery' | 'videos' | 'navbar' | 'videoSection'>('gallery');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<any>({});
  const [imagePreview, setImagePreview] = useState<string>('');
  const [videoPreview, setVideoPreview] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<string>('');

  // Available images in public folder
  const availableImages = [
    'model1.jpeg',
    'model2.jpeg',
    'model3.jpeg',
    'model4.jpeg',
    'poster.jpeg'
  ];

  // Available videos in public folder
  const availableVideos = [
    'video1.mp4',
    'video2.mp4',
    'video3.mp4',
    'video4.mp4'
  ];

  const base = import.meta.env.BASE_URL;

  // Handle image file upload
  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!validImageTypes.includes(file.type)) {
        alert('Please upload a valid image file (JPEG, PNG, GIF, WebP)');
        return;
      }

      // Validate file size (max 10MB)
      const maxSize = 10 * 1024 * 1024; // 10MB in bytes
      if (file.size > maxSize) {
        alert(`Image file is too large (${(file.size / (1024 * 1024)).toFixed(2)}MB). Maximum size is 10MB.`);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setFormData({ ...formData, src: result });
      };
      reader.onerror = () => {
        alert('Error uploading image. Please try again.');
        console.error('Image upload error:', reader.error);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle video file upload
  const handleVideoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const validVideoTypes = ['video/mp4', 'video/webm', 'video/ogg', 'video/quicktime'];
      if (!validVideoTypes.includes(file.type)) {
        alert('Please upload a valid video file (MP4, WebM, MOV, OGG)');
        return;
      }

      // Validate file size (max 100MB for better compatibility)
      const maxSize = 100 * 1024 * 1024; // 100MB in bytes
      if (file.size > maxSize) {
        alert(`Video file is too large (${(file.size / (1024 * 1024)).toFixed(2)}MB). Maximum size is 100MB. Please compress your video or use a smaller file.`);
        return;
      }

      // Show file size info
      const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
      setUploadProgress(`Preparing to upload ${file.name} (${fileSizeMB}MB)...`);
      setIsUploading(true);

      const reader = new FileReader();
      reader.onloadstart = () => {
        setUploadProgress('Starting video upload...');
      };
      reader.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = ((event.loaded / event.total) * 100).toFixed(0);
          setUploadProgress(`Uploading... ${percentComplete}%`);
        }
      };
      reader.onloadend = () => {
        const result = reader.result as string;
        setUploadProgress('Video uploaded successfully! ✓');
        setVideoPreview(result);
        setFormData({ ...formData, src: result });
        setIsUploading(false);
        setTimeout(() => setUploadProgress(''), 3000);
      };
      reader.onerror = () => {
        alert('Error uploading video. Please try again or use a smaller file.');
        console.error('Video upload error:', reader.error);
        setUploadProgress('Upload failed!');
        setIsUploading(false);
        setTimeout(() => setUploadProgress(''), 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  const handleSubmitGallery = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateGalleryImage(editingId, formData);
    } else {
      addGalleryImage(formData);
    }
    setFormData({});
    setEditingId(null);
    setImagePreview('');
  };

  const handleSubmitVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateVideo(editingId, formData);
    } else {
      addVideo(formData);
    }
    setFormData({});
    setEditingId(null);
    setVideoPreview('');
    setUploadProgress('');
    setIsUploading(false);
  };

  const handleSubmitNavbar = (e: React.FormEvent) => {
    e.preventDefault();
    updateNavbar(formData);
    setFormData({});
  };

  const handleSubmitVideoSection = (e: React.FormEvent) => {
    e.preventDefault();
    updateVideoSection(formData);
    setFormData({});
  };

  const handleEdit = (item: any, type: string) => {
    setEditingId(item.id);
    setFormData(item);
    if (type === 'gallery') {
      setImagePreview(item.src);
    } else if (type === 'video') {
      setVideoPreview(item.src);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({});
    setImagePreview('');
    setVideoPreview('');
    setUploadProgress('');
    setIsUploading(false);
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-background border border-border rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-secondary/30">
          <h2 className="text-2xl font-bold">Admin Panel - Riina Seise Portfolio</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 p-4 border-b border-border bg-secondary/20">
          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeTab === 'gallery'
                ? 'bg-pink-500 text-white'
                : 'bg-secondary hover:bg-secondary/70'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            Gallery Images
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeTab === 'videos'
                ? 'bg-pink-500 text-white'
                : 'bg-secondary hover:bg-secondary/70'
            }`}
          >
            <VideoIcon className="w-4 h-4" />
            Videos
          </button>
          <button
            onClick={() => setActiveTab('navbar')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeTab === 'navbar'
                ? 'bg-pink-500 text-white'
                : 'bg-secondary hover:bg-secondary/70'
            }`}
          >
            <Navigation className="w-4 h-4" />
            Navbar
          </button>
          <button
            onClick={() => setActiveTab('videoSection')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeTab === 'videoSection'
                ? 'bg-pink-500 text-white'
                : 'bg-secondary hover:bg-secondary/70'
            }`}
          >
            <VideoIcon className="w-4 h-4" />
            Video Section
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div className="space-y-6">
              <div className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  {editingId ? 'Edit Gallery Image' : 'Add New Gallery Image'}
                </h3>
                <form onSubmit={handleSubmitGallery} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Upload Image</label>
                    <div className="space-y-3">
                      {/* File Upload */}
                      <div className="flex items-center gap-3">
                        <label className="flex-1 cursor-pointer">
                          <div className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-border rounded-lg hover:border-pink-500 transition-colors bg-secondary/30">
                            <div className="text-center">
                              <ImageIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                              <p className="text-sm text-muted-foreground">
                                Click to upload image
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                JPEG, PNG, GIF, WebP up to 10MB
                              </p>
                            </div>
                          </div>
                          <input
                            type="file"
                            accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                            onChange={handleImageFileChange}
                            className="hidden"
                          />
                        </label>
                      </div>

                      {/* Or Select from Library */}
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-border"></div>
                        </div>
                        <div className="relative flex justify-center text-xs">
                          <span className="bg-background px-2 text-muted-foreground">OR SELECT FROM LIBRARY</span>
                        </div>
                      </div>

                      <select
                        value={formData.src?.replace(base, '') || ''}
                        onChange={(e) => {
                          const src = e.target.value ? `${base}${e.target.value}` : '';
                          setFormData({ ...formData, src });
                          setImagePreview(src);
                        }}
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      >
                        <option value="">Select from existing images</option>
                        {availableImages.map((img) => (
                          <option key={img} value={img}>
                            {img}
                          </option>
                        ))}
                      </select>

                      {/* Preview */}
                      {(imagePreview || formData.src) && (
                        <div className="mt-2 p-3 bg-secondary/50 rounded-lg border border-border">
                          <p className="text-xs text-muted-foreground mb-2">Preview:</p>
                          <img 
                            src={imagePreview || formData.src} 
                            alt="Preview" 
                            className="w-full h-48 object-cover rounded"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Alt Text / Description</label>
                    <input
                      type="text"
                      value={formData.alt || ''}
                      onChange={(e) => setFormData({ ...formData, alt: e.target.value })}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Fashion Editorial 1"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select
                      value={formData.category || ''}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Beauty">Beauty</option>
                      <option value="Bridal">Bridal</option>
                      <option value="Content">Content</option>
                      <option value="Lifestyle">Lifestyle</option>
                      <option value="Editorial">Editorial</option>
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors"
                    >
                      {editingId ? <Save className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      {editingId ? 'Update' : 'Add'} Image
                    </button>
                    {editingId && (
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="px-6 py-2 bg-secondary hover:bg-secondary/70 rounded-lg transition-colors"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              <div className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Gallery Images ({galleryImages.length})</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto">
                  {galleryImages.map((image) => (
                    <div key={image.id} className="bg-background p-4 rounded-lg border border-border">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-40 object-cover rounded-lg mb-2"
                      />
                      <p className="text-sm font-medium truncate">{image.alt}</p>
                      <p className="text-xs text-muted-foreground">{image.category}</p>
                      <div className="flex gap-2 mt-3">
                        <button
                          onClick={() => handleEdit(image, 'gallery')}
                          className="flex-1 flex items-center justify-center gap-1 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded transition-colors"
                        >
                          <Edit2 className="w-3 h-3" />
                          Edit
                        </button>
                        <button
                          onClick={() => deleteGalleryImage(image.id)}
                          className="flex-1 flex items-center justify-center gap-1 px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Videos Tab */}
          {activeTab === 'videos' && (
            <div className="space-y-6">
              <div className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  {editingId ? 'Edit Video' : 'Add New Video'}
                </h3>
                <form onSubmit={handleSubmitVideo} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Upload Video</label>
                    <div className="space-y-3">
                      {/* File Upload */}
                      <div className="flex items-center gap-3">
                        <label className="flex-1 cursor-pointer">
                          <div className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-border rounded-lg hover:border-pink-500 transition-colors bg-secondary/30">
                            <div className="text-center">
                              <VideoIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                              <p className="text-sm text-muted-foreground">
                                Click to upload video
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                MP4, WebM, MOV, OGG up to 100MB
                              </p>
                              <p className="text-xs text-pink-500 mt-1">
                                ⚠ Large files may take time to upload
                              </p>
                            </div>
                          </div>
                          <input
                            type="file"
                            accept="video/mp4,video/webm,video/ogg,video/quicktime"
                            onChange={handleVideoFileChange}
                            className="hidden"
                          />
                        </label>
                      </div>

                      {/* Or Select from Library */}
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-border"></div>
                        </div>
                        <div className="relative flex justify-center text-xs">
                          <span className="bg-background px-2 text-muted-foreground">OR SELECT FROM LIBRARY</span>
                        </div>
                      </div>

                      <select
                        value={formData.src?.replace(base, '') || ''}
                        onChange={(e) => {
                          const src = e.target.value ? `${base}${e.target.value}` : '';
                          setFormData({ ...formData, src });
                          setVideoPreview(src);
                        }}
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      >
                        <option value="">Select from existing videos</option>
                        {availableVideos.map((vid) => (
                          <option key={vid} value={vid}>
                            {vid}
                          </option>
                        ))}
                      </select>

                      {/* Upload Progress */}
                      {uploadProgress && (
                        <div className={`p-3 rounded-lg border ${
                          uploadProgress.includes('✓') 
                            ? 'bg-green-500/10 border-green-500/50 text-green-500' 
                            : uploadProgress.includes('failed') 
                            ? 'bg-red-500/10 border-red-500/50 text-red-500'
                            : 'bg-blue-500/10 border-blue-500/50 text-blue-500'
                        }`}>
                          <p className="text-sm font-medium">{uploadProgress}</p>
                          {isUploading && (
                            <div className="mt-2 w-full bg-background/50 rounded-full h-2">
                              <div className="bg-pink-500 h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Preview */}
                      {(videoPreview || formData.src) && (
                        <div className="mt-2 p-3 bg-secondary/50 rounded-lg border border-border">
                          <p className="text-xs text-muted-foreground mb-2">Preview:</p>
                          <video 
                            src={videoPreview || formData.src} 
                            className="w-full h-48 object-cover rounded"
                            controls
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Video Description</label>
                    <input
                      type="text"
                      value={formData.alt || ''}
                      onChange={(e) => setFormData({ ...formData, alt: e.target.value })}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Fashion Reel 1"
                      required
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors"
                    >
                      {editingId ? <Save className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      {editingId ? 'Update' : 'Add'} Video
                    </button>
                    {editingId && (
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="px-6 py-2 bg-secondary hover:bg-secondary/70 rounded-lg transition-colors"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              <div className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Videos ({videos.length})</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto">
                  {videos.map((video) => (
                    <div key={video.id} className="bg-background p-4 rounded-lg border border-border">
                      <video
                        src={video.src}
                        className="w-full h-40 object-cover rounded-lg mb-2"
                        controls
                      />
                      <p className="text-sm font-medium truncate">{video.alt}</p>
                      <div className="flex gap-2 mt-3">
                        <button
                          onClick={() => handleEdit(video, 'video')}
                          className="flex-1 flex items-center justify-center gap-1 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded transition-colors"
                        >
                          <Edit2 className="w-3 h-3" />
                          Edit
                        </button>
                        <button
                          onClick={() => deleteVideo(video.id)}
                          className="flex-1 flex items-center justify-center gap-1 px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navbar Tab */}
          {activeTab === 'navbar' && (
            <div className="space-y-6">
              <div className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Edit Navbar Content</h3>
                <form onSubmit={handleSubmitNavbar} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Title</label>
                    <input
                      type="text"
                      value={formData.title !== undefined ? formData.title : navbarData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="RIINA SEISE"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subtitle</label>
                    <input
                      type="text"
                      value={formData.subtitle !== undefined ? formData.subtitle : navbarData.subtitle}
                      onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="MODEL & CONTENT CREATOR"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    Update Navbar
                  </button>
                </form>
              </div>

              <div className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Current Navbar Preview</h3>
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h1 className="text-2xl font-bold tracking-widest">{navbarData.title}</h1>
                  <p className="text-sm tracking-wider opacity-80">{navbarData.subtitle}</p>
                </div>
              </div>
            </div>
          )}

          {/* Video Section Tab */}
          {activeTab === 'videoSection' && (
            <div className="space-y-6">
              <div className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Edit Video Section Content</h3>
                <form onSubmit={handleSubmitVideoSection} className="space-y-6">
                  {/* Main Section */}
                  <div className="space-y-4 p-4 bg-background/50 rounded-lg border border-border">
                    <h4 className="text-lg font-semibold text-pink-500">Main Section</h4>
                    <div>
                      <label className="block text-sm font-medium mb-2">Main Title</label>
                      <input
                        type="text"
                        value={formData.mainTitle !== undefined ? formData.mainTitle : videoSectionData.mainTitle}
                        onChange={(e) => setFormData({ ...formData, mainTitle: e.target.value })}
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="My Work"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Main Description</label>
                      <textarea
                        value={formData.mainDescription !== undefined ? formData.mainDescription : videoSectionData.mainDescription}
                        onChange={(e) => setFormData({ ...formData, mainDescription: e.target.value })}
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 min-h-[80px]"
                        placeholder="Explore my portfolio of creative work..."
                        required
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="space-y-4 p-4 bg-background/50 rounded-lg border border-border">
                    <h4 className="text-lg font-semibold text-pink-500">Content Section</h4>
                    <div>
                      <label className="block text-sm font-medium mb-2">Content Title</label>
                      <input
                        type="text"
                        value={formData.contentTitle !== undefined ? formData.contentTitle : videoSectionData.contentTitle}
                        onChange={(e) => setFormData({ ...formData, contentTitle: e.target.value })}
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="My Creative Portfolio"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Content Description</label>
                      <textarea
                        value={formData.contentDescription !== undefined ? formData.contentDescription : videoSectionData.contentDescription}
                        onChange={(e) => setFormData({ ...formData, contentDescription: e.target.value })}
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 min-h-[80px]"
                        placeholder="Explore my diverse portfolio..."
                        required
                      />
                    </div>
                  </div>

                  {/* Gallery Section */}
                  <div className="space-y-4 p-4 bg-background/50 rounded-lg border border-border">
                    <h4 className="text-lg font-semibold text-pink-500">Gallery Section</h4>
                    <div>
                      <label className="block text-sm font-medium mb-2">Gallery Title</label>
                      <input
                        type="text"
                        value={formData.galleryTitle !== undefined ? formData.galleryTitle : videoSectionData.galleryTitle}
                        onChange={(e) => setFormData({ ...formData, galleryTitle: e.target.value })}
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="My Video Collection"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Gallery Description</label>
                      <textarea
                        value={formData.galleryDescription !== undefined ? formData.galleryDescription : videoSectionData.galleryDescription}
                        onChange={(e) => setFormData({ ...formData, galleryDescription: e.target.value })}
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 min-h-[80px]"
                        placeholder="Browse through my video collection..."
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    Update Video Section
                  </button>
                </form>
              </div>

              <div className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Current Video Section Preview</h3>
                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-lg border border-border">
                    <p className="text-xs text-pink-500 font-semibold mb-2">MAIN SECTION</p>
                    <h2 className="text-xl font-bold mb-2">{videoSectionData.mainTitle}</h2>
                    <p className="text-sm text-muted-foreground">{videoSectionData.mainDescription}</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-border">
                    <p className="text-xs text-pink-500 font-semibold mb-2">CONTENT SECTION</p>
                    <h2 className="text-xl font-bold mb-2">{videoSectionData.contentTitle}</h2>
                    <p className="text-sm text-muted-foreground">{videoSectionData.contentDescription}</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-border">
                    <p className="text-xs text-pink-500 font-semibold mb-2">GALLERY SECTION</p>
                    <h2 className="text-xl font-bold mb-2">{videoSectionData.galleryTitle}</h2>
                    <p className="text-sm text-muted-foreground">{videoSectionData.galleryDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
