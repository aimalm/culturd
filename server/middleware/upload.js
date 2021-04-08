import multer from 'multer';
//import path from 'path';
import  validation from '../middleware/validation.js'


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        console.log(file)
        //cb(null, 'profile' + '-' + Date.now() + path.extname(file.originalname));
        cb(null, Date.now() + "--" + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if(validation){
    cb(null, true);
    } else{
        cb(null, false);

    }
    
};

let upload = multer({ storage: storage, fileFilter: fileFilter,});

export default upload.single('ProfilePicture')