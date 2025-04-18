import fs from "fs";
import path from "path";
import uploadConfig from "../config/fileUpload.js"

class FileModel {
    static save(file) {
      const ext = path.extname(file.name);
      const filename = `${Date.now()}${ext}`;
      const filepath = path.join(uploadConfig.uploadDir, filename);
  
      if (!fs.existsSync(uploadConfig.uploadDir)) {
        fs.mkdirSync(uploadConfig.uploadDir, { recursive: true });
      }
  
      return new Promise((resolve, reject) => {
        file.mv(filepath, (err) => {
          if (err) return reject(err);
          resolve(filename);
        });
      });
    }
  
    static getPath(filename) {
      return path.join(uploadConfig.uploadDir, filename);
    }
  }

export default FileModel;













































