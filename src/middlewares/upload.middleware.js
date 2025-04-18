
import uploadConfig from "../config/fileUpload.js"


const middleware = {
  validateImage: (req, res, next) => {
    if (!req.files?.image) {
      return res.status(400).json({ error: 'No image uploaded' });
    }

    const { image } = req.files;
    
    if (!uploadConfig.allowedTypes.includes(image.mimetype)) {
      return res.status(400).json({ error: 'Only JPG, PNG, and GIF allowed' });
    }

    next();
  }
};

export default middleware;