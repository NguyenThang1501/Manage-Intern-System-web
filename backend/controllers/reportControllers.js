const Report = require('../models/WeeklyReport');
const Student = require('../models/Student');
const FinalReport = require('../models/FinalReport');
const RegularReport = require("../models/WeeklyReport");
const reportController = {
    //thêm báo cáo hàng tuần cho sinh viên nếu id valid, báo cáo thêm vào sẽ được add thêm vào array báo cáo đã có,
    // ví dụ như id 21002100 trong array reports đang có báo cáo của tuần 1,2,3 thêm 1 báo cáo nữa thì array đó sẽ thành 4 phần tử

    weekly_report: async (req, res) => {
        try {
            const newReport = {
                time: req.body.report.time,
                work: req.body.report.work,
                progress: req.body.report.progress,
            };
    
            const studentId = req.account.id;
    
            // Check if the student with the provided ID exists
            const existingStudent = await Student.findById(studentId);
    
            if (!existingStudent) {
                return res.status(404).json({ error: 'Student not found', success: false });
            }
    
            const report = await Report.findById(studentId);
    
            if (!report) {
                // If the report doesn't exist, create a new one
                const newReportData = {
                    _id: studentId,
                    reports: [newReport],
                };
                await Report.create(newReportData);
            } else {
                // If the report exists, add the new report to the existing reports array
                report.reports.push(newReport);
                await report.save();
            }
    
            res.status(201).json({ message: 'Report added successfully' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error', details: err.message });
        }
    },    

    //thêm report final cho sinh viên nếu id valid
    final_report: async (req, res) => {
        try {
            const studentId = req.account.id;
            const existingStudent = await Student.findById(studentId);
    
            if (!existingStudent) {
                return res.status(404).json({ error: 'Student not found', success: false });
            }
    
            const project = req.body.project;
            const midresult = req.body.midresult;
            const finalresult = req.body.finalresult
            const describe = req.body.describe
    
            const finalReport = new FinalReport({
                _id: studentId,
                project,
                describe,
                midresult,
                finalresult
            });
    
            await finalReport.save();
    
            res.status(201).json({ message: 'Final report added successfully', success: true });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error', details: err.message, success: false });
        }
    },
    
    getRegularReport: async (req, res) => {
        try {
          const regularReports = await FinalReport.find({}).populate({
            path: "_id",
            model: "Internship_Result",
          });
    
          const profiles = regularReports.map((report) => ({
            _id: report._id._id,
            name: report._id.name,
            phone: report._id.phone,
            major: report._id.major,
            position: report._id.position,
            business: report._id.business,
            project: report.project,
          }));
    
          return res.status(200).json(profiles);
        } catch (err) {
          console.error(err);
          return res.status(500).json({ error: "Internal Server Error" });
        }
    },
    getRegularReport_details: async (req, res) => {
        try {
            const requestingUserId = req.account.id;
            const requestingUserRole = req.account.role;
            const { id } = req.params; 
            if (requestingUserRole === "teacher" || id === requestingUserId) {
                const regularReport = await RegularReport.findById(id);
    
                if (!regularReport) {
                    return res.status(404).json({ error: 'Regular Report not found' });
                }
        
                const results = [];
        
                regularReport.reports.forEach(report => {
                    results.push({
                        time: report.time,
                        work: report.work,
                        progress: report.progress,
                    });
                });
        
                return res.status(200).json(results);
            } else {
                return res.status(403).json("You're not allowed to view this report");
            }
            
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    
    getfinalReport: async (req, res) => {
        try {
            const { id } = req.params; 
            const final_report = await FinalReport.findById(id);
            
            if (!final_report) {
                return res.status(404).json({ error: 'Final Report not found' });
            }
    
            const result = {
                project: final_report.project,
                describe: final_report.describe,
                midresult: final_report.midresult,
                finalresult: final_report.finalresult
            };
    
            return res.status(200).json(result);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    updateProject: async (req, res) => {
        try {
            const id = req.account.id; 
            const final_report = await FinalReport.findById(id);
    
            if (!final_report) {
                return res.status(404).json({ error: 'Final Report not found' });
            }
    
            const project = req.body.project;
            const describe = req.body.describe;
    
            // Check if project and describe are present in the request body
            if (!project || !describe) {
                return res.status(400).json({ error: 'Project and describe are required in the request body' });
            }
    
            final_report.project = project;
            final_report.describe = describe;
    
            await final_report.save();
    
            return res.status(200).json({ message: 'Final Report updated successfully', final_report });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    updateScore: async (req, res) => {
        try {
            const id = req.params.id; 
            const final_report = await FinalReport.findById(id);
    
            if (!final_report) {
                return res.status(404).json({ error: 'Final Report not found' });
            }
    
            const midresult = req.body.midresult;
            const finalresult = req.body.finalresult;
    
            // Check if project and describe are present in the request body
            if (!midresult || !finalresult) {
                return res.status(400).json({ error: 'Project and describe are required in the request body' });
            }
    
            final_report.midresult = midresult;
            final_report.finalresult = finalresult;
    
            await final_report.save();
    
            return res.status(200).json({ message: 'Final Report updated successfully', final_report });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    
};


module.exports = reportController;
