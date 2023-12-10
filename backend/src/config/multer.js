import multer from "multer";
import path from "path";

const uploader = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});


export default multer({ storage: uploader })

