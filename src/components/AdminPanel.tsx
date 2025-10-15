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
    addGalleryImage,
    updateGalleryImage,
    deleteGalleryImage,
    addVideo,
    updateVideo,
    deleteVideo,
    updateNavbar,
  } = useAdmin();

  const [activeTab, setActiveTab] = useState<'gallery' | 'videos' | 'navbar'>('gallery');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<any>({});

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
  };

  const handleSubmitNavbar = (e: React.FormEvent) => {
    e.preventDefault();
    updateNavbar(formData);
    setFormData({});
  };

  const handleEdit = (item: any, type: string) => {
    setEditingId(item.id);
    setFormData(item);
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({});
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
                    <label className="block text-sm font-medium mb-2">Image URL</label>
                    <input
                      type="text"
                      value={formData.src || ''}
                      onChange={(e) => setFormData({ ...formData, src: e.target.value })}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder={`${import.meta.env.BASE_URL}image.jpg`}
                      required
                    />
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
                    <label className="block text-sm font-medium mb-2">Video URL</label>
                    <input
                      type="text"
                      value={formData.src || ''}
                      onChange={(e) => setFormData({ ...formData, src: e.target.value })}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder={`${import.meta.env.BASE_URL}video.mp4`}
                      required
                    />
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
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
