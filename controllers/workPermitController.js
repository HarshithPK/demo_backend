const WorkPermit = require("../models/workPermitModel");

// --------- Create form by work initiator --------------------------

const createForm = async (req, res) => {
    try {
        console.log("Hello 1");
        const workPermitForm = await WorkPermit.create(req.body);

        console.log(req.body);
        console.log("Hello");
        res.status(201).json({
            status: "success",
            message: "Form filled by work initiator",
            workPermitForm,
        });
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
};

const submitDocument = async (req, res) => {
    try {
        let formToEdit = await WorkPermit.find({ _id: req.params.id });

        if (formToEdit.length == 0) {
            return res.status(404).json({
                message: "Requested form not found!",
            });
        }

        formToEdit = formToEdit[0];
        console.log(formToEdit);

        formToEdit.general["method_of_statement"] = {
            sub_work: req.files.find(
                (file) =>
                    file.originalname.split(".")[0].toLowerCase() === "sub_work"
            ).filename,

            equipment_used: req.files.find(
                (file) =>
                    file.originalname.split(".")[0].toLowerCase() ===
                    "equipment_used"
            ).filename,

            worker_skill: req.files.find(
                (file) =>
                    file.originalname.split(".")[0].toLowerCase() ===
                    "worker_skill"
            ).filename,

            equipment_certificate: req.files.find(
                (file) =>
                    file.originalname.split(".")[0].toLowerCase() ===
                    "equipment_certificate"
            ).filename,

            hazard_and_risk: req.files.find(
                (file) =>
                    file.originalname.split(".")[0].toLowerCase() ===
                    "hazard_and_risk"
            ).filename,

            prevention_of_risk: req.files.find(
                (file) =>
                    file.originalname.split(".")[0].toLowerCase() ===
                    "prevention_of_risk"
            ).filename,
        };

        await formToEdit.save();

        res.status(200).json({
            status: "success",
            message: "Files uploaded successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
};

// ---------------------- Form filling --------------------------------

const editForm = async (req, res) => {
    try {
        const form_to_edit = await WorkPermit.find({ _id: req.params.id });

        if (!form_to_edit) {
            return res.status(404).json({
                status: "error",
                message: "Form requested not found!",
            });
        }

        let editedForm;

        for (let key in req.body) {
            const obj = {};

            obj[key] = {
                ...form_to_edit[0][key],
                ...req.body[key],
            };

            editedForm = await WorkPermit.findByIdAndUpdate(
                req.params.id,
                obj,
                { new: true }
            );
            console.log(key);
            console.log({
                [key]: {
                    ...form_to_edit[0][key],
                    ...req.body[key],
                },
            });
        }

        await editedForm.save();

        res.status(200).json({
            status: "success",
            message: "Form updated successfully",
            editedForm,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
};

// ---------------- Get form ----------------------------

const getForm = async (req, res) => {
    const myForm = await WorkPermit.find({ _id: req.params.id });

    if (!myForm) {
        return res.status(404).json({
            status: "error",
            message: "Requested form not found",
        });
    }

    res.status(200).json({
        status: "success",
        message: "Form found!",
        myForm,
    });
};

// ------------------ Get All forms -----------------------

const getAllForms = async (req, res) => {
    const forms = await WorkPermit.find();

    res.status(200).json({
        status: "success",
        message: "All forms fetched!",
        forms,
    });
};

module.exports = {
    createForm,
    editForm,
    getForm,
    getAllForms,
    submitDocument,
};
