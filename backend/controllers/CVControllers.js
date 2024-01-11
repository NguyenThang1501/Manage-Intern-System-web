const jwt = require("jsonwebtoken");
const CV = require("../models/CV");


const CVController = {
    uploadCV: async (req, res) => {
        try {
            if (!req.file) {
                // No file attached to the request
                return res.status(400).json({
                    message: 'No file attached to the request',
                });
            }
    
            const { originalname, buffer } = req.file;
            const pdfId = req.account.id; // Assuming the ID is sent in the request body
    
            const newCV = new CV({
                _id: pdfId,
                name: originalname,
                data: buffer,
            });
    
            const savedPDF = await newCV.save();
    
            return res.status(201).json({
                message: 'PDF uploaded successfully',
                pdf: savedPDF,
            });
        } catch (err) {
            console.error(err);  // Log the error for debugging purposes
    
            return res.status(500).json({
                message: 'Failed to upload PDF',
                error: err.message,
            });
        }
    },

    viewCV: async (req, res) => {
        const pdfId = req.params.id;
        const requestingUserId = req.account.id;
        const requestingUserRole = req.account.role;
        if (requestingUserRole === "teacher" || requestingUserRole === "business" || requestingUserId === pdfId) {
            try {
                const pdf = await CV.findById(pdfId);
                if (!pdf) {
                    return res.status(404).json({
                        message: 'PDF not found',
                    });
                }

                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', `attachment; filename=${pdf.name}`);
                res.send(pdf.data);
            } catch (err) {
                res.status(500).json({
                    message: 'Failed to download PDF',
                    error: err,
                });
            }
        } else {
            return res.status(403).json("You're not allowed to view this CV");
        }
    },
};

module.exports = CVController;