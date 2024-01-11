const jwt = require("jsonwebtoken");
const CV = require("../models/CV");


const CVController = {
    // Verify token
    uploadCV: async (req, res) => {
        const { originalname, buffer } = req.file;
        const pdfId = req.account.id; // Assuming the ID is sent in the request body

        const newCV = new CV({
            _id: pdfId,
            name: originalname,
            data: buffer,
        });

        try {
            const savedPDF = await newCV.save();
            res.json(savedPDF);
        } catch (err) {
            res.status(500).json({
                message: 'Failed to upload PDF',
                error: err,
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