# Admin Panel Documentation

## 🔐 Access the Admin Panel

Press **`Ctrl + Shift + A`** on any page to open the admin panel.

Press **`Escape (Esc)`** to close the admin panel.

## 📋 Features

The admin panel provides complete CRUD (Create, Read, Update, Delete) operations for:

### 1. Gallery Images
- **Add New Images**: Upload URLs, set descriptions, and categorize images
- **Edit Images**: Modify image URLs, descriptions, and categories
- **Delete Images**: Remove images from the gallery
- **Categories**: Fashion, Beauty, Bridal, Content, Lifestyle, Editorial
- **Pagination**: Automatically handles 1000+ images

### 2. Videos
- **Add New Videos**: Add video URLs with descriptions
- **Edit Videos**: Update video URLs and descriptions
- **Delete Videos**: Remove videos from the background rotation
- **Auto-Rotation**: Videos automatically rotate on the hero section every 10 seconds

### 3. Navbar Content
- **Edit Title**: Change the main navbar title (default: "RIINA SEISE")
- **Edit Subtitle**: Change the navbar subtitle (default: "MODEL & CONTENT CREATOR")
- **Live Preview**: See changes immediately

## 💾 Data Storage

All data is stored in **browser localStorage**, meaning:
- ✅ No backend required
- ✅ Data persists across browser sessions
- ✅ Instant updates
- ⚠️ Data is browser-specific (clearing browser data will reset)

### Storage Keys:
- `riina_gallery_images` - Gallery images data
- `riina_videos` - Videos data
- `riina_navbar_data` - Navbar content

## 🎨 How to Use

### Adding Gallery Images

1. Press `Ctrl + Shift + A` to open admin panel
2. Go to the **Gallery Images** tab
3. Fill in the form:
   - **Image URL**: `https://example.com/photo.jpg` or `${BASE_URL}photo.jpg`
   - **Alt Text/Description**: "Fashion Editorial Spring 2025"
   - **Category**: Select from dropdown
4. Click **Add Image**

### Editing Gallery Images

1. Find the image in the gallery list
2. Click **Edit** button
3. Modify the fields
4. Click **Update Image**

### Deleting Gallery Images

1. Find the image in the gallery list
2. Click **Delete** button
3. Confirm deletion (image is removed immediately)

### Managing Videos

1. Go to the **Videos** tab
2. Add/Edit/Delete videos same as gallery images
3. Video URL format: `${BASE_URL}video.mp4` or full URL
4. Videos will appear in the hero section background rotation

### Customizing Navbar

1. Go to the **Navbar** tab
2. Edit the title and subtitle fields
3. Click **Update Navbar**
4. Changes reflect immediately on the navbar

## 🚀 Integration

The admin panel is integrated with:
- **Hero Section**: First 4 gallery images + all videos
- **Gallery Section**: All gallery images with pagination
- **Header/Navbar**: Title and subtitle from navbar data

## 📝 Image URL Formats

You can use various URL formats:

### Local Images (from public folder):
```
${import.meta.env.BASE_URL}model1.jpeg
/web2/model1.jpeg
```

### External URLs:
```
https://example.com/images/photo.jpg
https://cdn.example.com/image.png
```

## 🔧 Technical Details

### Technologies:
- **React Context API**: Global state management
- **localStorage**: Data persistence
- **TypeScript**: Type-safe operations
- **Tailwind CSS**: Responsive UI

### File Structure:
```
src/
├── contexts/
│   └── AdminContext.tsx          # Admin state management
├── components/
│   ├── AdminPanel.tsx            # Admin UI component
│   ├── Header.tsx                # Uses navbar data
│   ├── Hero.tsx                  # Uses videos + gallery
│   └── Models.tsx                # Uses gallery images
└── pages/
    └── Index.tsx                 # Ctrl+Shift+A handler
```

### Admin Context Functions:

#### Gallery Operations:
- `addGalleryImage(image)` - Add new image
- `updateGalleryImage(id, data)` - Update image
- `deleteGalleryImage(id)` - Delete image

#### Video Operations:
- `addVideo(video)` - Add new video
- `updateVideo(id, data)` - Update video
- `deleteVideo(id)` - Delete video

#### Navbar Operations:
- `updateNavbar(data)` - Update navbar content

## 🎯 Default Data

The system comes with default data that includes:
- **50 gallery images** across all categories
- **4 background videos**
- **Navbar**: "RIINA SEISE - MODEL & CONTENT CREATOR"

You can modify or delete any default data through the admin panel.

## 💡 Tips

1. **Image URLs**: Use relative URLs (`${BASE_URL}image.jpg`) for images in the public folder
2. **Categories**: Keep categories consistent for better organization
3. **Descriptions**: Use clear, descriptive alt text for better SEO
4. **Videos**: Keep video files optimized for web (compressed MP4)
5. **Backup**: Export localStorage data periodically for backup

## 🔒 Security Note

This is a client-side only system. For production use with sensitive data, consider:
- Adding authentication
- Moving to a backend API
- Implementing user roles
- Adding data validation

## 🌐 Live Demo

Press `Ctrl + Shift + A` on the live site to access the admin panel!

---

**Created for**: Riina Seise Portfolio
**Version**: 1.0.0
**Last Updated**: October 2025
