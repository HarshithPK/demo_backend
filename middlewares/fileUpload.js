const multer = require('multer');
const path = require('path');

const fileStorageEngine = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, 'public/images'); // direct path form this dir to folder
    },
    filename : (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname);
    }
})

const upload = multer({storage : fileStorageEngine }); 


module.exports = upload;

