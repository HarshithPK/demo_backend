const mongoose = require("mongoose");

const workPermitSchema = new mongoose.Schema({
    general: {
        type_of_work_permit: [{ type: String, required: false }],
        work_planned: {
            date: { type: String, required: false },
            start_time: { type: String, required: false },
            end_time: { type: String, required: false },
        },
        work_issuer: {
            issuer_name: { type: String, required: false },
            issuer_dept: { type: String, required: false },
            work_supervisor_name: { type: String, required: false },
            contact_number: { type: String, required: false },
        },

        area_of_work: { type: String, required: false },

        equipment_used: { type: String, required: false },

        method_of_statement: {
            sub_work: { type: String, required: false },
            equipment_used: { type: String, required: false },
            worker_skill: { type: String, required: false },
            equipment_certificate: { type: String, required: false },
            hazard_and_risk: { type: String, required: false },
            prevention_of_risk: { type: String, required: false },
        },

        method_of_statement: {
            sub_work: { type: String, required: false },
            equipment_used: { type: String, required: false },
            worker_skill: { type: String, required: false },
            equipment_certificate: { type: String, required: false },
            hazard_and_risk: { type: String, required: false },
            prevention_of_risk: { type: String, required: false },
        },

        receiver_contractor_details: {
            organization_name: { type: String, required: false },
            no_of_workders: { type: String, required: false },
            supervisor_name: { type: String, required: false },
            contact_number: { type: String, required: false },
        },
    },

    hazard_identified: [{ type: String, required: false }],

    PPEs_to_be_used: [{ type: String, required: false }],

    precautions_checklist: {
        general_work: [{ type: String, required: false }],
        hot_work: [{ type: String, required: false }],
        height_roof: [{ type: String, required: false }],
        confined_space: [{ type: String, required: false }],
    },

    isolation: {
        electrical_including_motor_isolation: {
            status: { type: String, required: false },
            drive_involved: { type: String, required: false },

            how_isolated: { type: String, required: false },

            certified_by: {
                name: { type: String, required: false },
                date: { type: Date, required: false },
                time: { type: Date, required: false },
            },
        },

        utility_isolation: {
            status: { type: String, required: false },
            service_involved: { type: String, required: false },

            how_isolated: { type: String, required: false },

            certified_by: {
                name: { type: String, required: false },
                date: { type: Date, required: false },
                time: { type: Date, required: false },
            },
        },
    },

    specific_control_measure: { type: String, required: false },

    approval: {
        work_initiator: {
            name: { type: String },
            date: { type: String },
            time: { type: Date, required: false },

            isApproved: { type: Boolean, default: "0" },
        },
        work_receiver: {
            name: { type: String },
            date: { type: String },
            time: { type: Date, required: false },

            isApproved: { type: Boolean, default: "0" },
        },
        authorization_of_area_inChange: {
            name: { type: String },
            date: { type: String },
            time: { type: Date, required: false },

            permite_extended_till: { type: String, default: null },
            permited_for: { type: String, default: null },

            isApproved: { type: Boolean, required: false, default: "0" },
        },
        divisional_head: {
            name: { type: String },
            date: { type: String },
            time: { type: Date, required: false },

            remarks: { type: String, default: null },

            isApproved: { type: Boolean, required: false, default: "0" },
        },
        factory_manager: {
            name: { type: String },
            date: { type: String },
            time: { type: Date, required: false },

            remarks: { type: String, default: null },

            isApproved: { type: Boolean, required: false, default: "0" },
        },
        safety_officer: {
            name: { type: String },
            date: { type: String },
            time: { type: Date, required: false },

            remarks: { type: String, default: null },

            isApproved: { type: Boolean, required: false, default: "0" },
        },
        security_personal: {
            name: { type: String },
            date: { type: String },
            time: { type: Date, required: false },
            isApproved: { type: Boolean, required: false, default: "0" },
        },
        authorization_of_maintenance: {
            name: { type: String },
            date: { type: String },
            time: { type: Date, required: false },
            isApproved: { type: Boolean, required: false, default: "0" },
        },
    },
    created_on: { type: String, required: false },
});

module.exports = new mongoose.model("WorkPermit", workPermitSchema);
