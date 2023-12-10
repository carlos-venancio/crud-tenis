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

<<<<<<< HEAD
    req.body = data[1];

    cb(null, true);
  } catch (e) {
    cb(e);
  }
};

export default {
  imagemECampos: multer({ storage: uploader, fileFilter }),
  imagem: multer({ storage: uploader }),
};
=======
>>>>>>> 428a56f98a0cfeb5c500eb8a3aa60af2d069fee1
