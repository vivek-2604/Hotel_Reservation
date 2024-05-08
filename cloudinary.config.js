import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.cloudinaryName,
  api_key: process.env.cloudinaryAPI,
  api_secret: process.env.cloudinarySecret
});

export { cloudinary };