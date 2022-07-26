const express = require('express');
const app = express();
const Router = express.Router();
const multer = require('multer');
// const upload = multer({ dest: 'uploads/' })

app.use(express.static('public'));






// ----- Import Controllers -------------

const workPermitController = require('../controllers/workPermitController');


// ------ Import Middlewares ------------

const upload = require('../middlewares/fileUpload');

// API to submit method of statement documents
Router.route("/api/submit-documents/:id").put(upload.array('method_of_statement', 6), workPermitController.submitDocument)

// API to get a requested form
Router.route("/api/get-form/:id").get(workPermitController.getForm);

// API to get all the forms
Router.route("/api/getAll-forms").get(workPermitController.getAllForms);

// APIs to create the form 
Router.route("/api/fill-form").post( workPermitController.createForm); 

// API to edit the requested form 
Router.route("/api/fill-form/:id").put(workPermitController.editForm);






module.exports = Router;