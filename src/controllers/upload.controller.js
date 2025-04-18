import FileModel from "../models/fileUpload.model.js";

const controller = {
    upload: async (req, res) => {
        try {
          const filename = await FileModel.save(req.files.image);
          res.json({ 
            success: true,
            url: `/uploads/${filename}` 
          });
        } catch (err) {
          res.status(500).json({ error: 'Upload failed' });
        }
      },
    
      serve: (req, res) => {
        const filepath = FileModel.getPath(req.params.filename);
        res.sendFile(filepath);
      }
} 

export default controller;