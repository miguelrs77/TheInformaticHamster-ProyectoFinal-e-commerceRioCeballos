require('dotenv').config()
// Require the cloudinary library
const cloudinary = require('cloudinary').v2;
// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_KEY, 
  api_secret: process.env.CLOUD_KEY_SECRET,
});
// Log the configuration
console.log(cloudinary.config());

module.exports = cloudinary;
