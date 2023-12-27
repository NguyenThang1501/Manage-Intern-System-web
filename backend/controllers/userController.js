// controllers/userController.js
const Profile = require("../models/Student");
const Accounts = require("../models/Account");
const FinalReports = require("../models/FinalReport");
const InternshipResult = require("../models/InternshipResult");
const RegularReport = require("../models/WeeklyReport");
const News = require("../models/News")
const Business = require("../models/Business")
const { exec } = require("child_process");
const { format } = require('date-fns');
const { vi } = require('date-fns/locale');
const userController = {
  getProfile: async (req, res) => {
    try {
      const userId = req.params.id;
      const requestingUserId = req.user.id;
      const requestingUserRole = req.user.role;
      if (requestingUserRole === "admin" || userId === requestingUserId) {
        const user = await Accounts.findById(userId).populate("_id");
        if (!user) {
          return res.status(404).json("User not found");
        }

        const responseProfile =
          requestingUserRole === "student" && userId !== requestingUserId
            ? user.profile.getPublicProfile()
            : user.profile;

        res.status(200).json(responseProfile);
      } else {
        return res.status(403).json("You're not allowed to view this profile");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateProfile: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await Accounts.findById(userId).populate("_id");
      if (!user) {
        return res.status(404).json("User not found");
      }

      if (req.body.firstname) user.firstname = req.body.firstname;
      if (req.body.lastname) user.lastname = req.body.lastname;
      if (req.body.address) user.address = req.body.address;
      if (req.body.major) user.major = req.body.major;
      if (req.body.gpa) user.gpa = req.body.gpa;

      await user.save(); // Save the profile separately
      res.status(200).json("Profile updated successfully");
    } catch (err) {
      res
        .status(500)
        .json({ error: "Internal Server Error", chiTiet: err.message });
    }
  },

  deleteProfile: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await Accounts.findById(userId).populate("profile");

      if (!user) {
        return res.status(404).json("User not found");
      }

      if (user.profile) {
        await Profile.findByIdAndDelete(user.profile._id); // Delete the profile separately
        user.profile = null;
      }

      await user.save();
      res.status(200).json("Profile deleted successfully");
    } catch (err) {
      res
        .status(500)
        .json({ error: "Internal Server Error", chiTiet: err.message });
    }
  },

  getAllProfiles: async (req, res) => {
    try {
      const accounts = await Accounts.find({ role: "student" }).populate("_id");

      const profiles = accounts.map((account) => ({
        _id: account._id._id,
        name: account._id.name,
        major: account._id.major,
      }));

      return res.status(200).json(profiles);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createProfile: async (req, res) => {
    try {
      const userId = req.params.id;
      const requestingUserId = req.user.id;

      const user = await Accounts.findById(userId).populate("profile");
      if (!user) {
        return res.status(404).json("User not found");
      }

      if (user.profile) {
        return res.status(400).json("User already has a profile");
      }

      const newProfile = {
        fullName: req.body.fullName,
        studentId: req.body.studentId,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        faculty: req.body.faculty,
        major: req.body.major,
        gpa: req.body.gpa,
        advisor: req.body.advisor,
      };

      const createdProfile = await Profile.create(newProfile);
      user.profile = createdProfile._id;
      await user.save();

      res.status(201).json("Profile created successfully");
    } catch (err) {
      res
        .status(500)
        .json({ error: "Internal Server Error", chiTiet: err.message });
    }
  },
  getRegularReport: async (req, res) => {
    try {
      const regularReports = await FinalReports.find({}).populate({
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
        const { id } = req.params; 

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
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getNews: async (req, res) => {
    try {
        const newsList = await News.find({});
        
        const currentTime = new Date(); 
        
        const result = newsList.map(newsItem => {
            const timeDifference = newsItem.end_time.getTime() - currentTime.getTime();
            const daysDifference = Math.round(timeDifference / (1000 * 60 * 60 * 24)); 
            return {
                position: newsItem.position,
                business: newsItem.business,
                address: newsItem.address,
                count_down: daysDifference, 
            };
        });

        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  getbusiness: async (req, res) => {
    try {
        const business = await Business.find({});
        const result = business.map(item => {
            return {
                name: item.name,
                describe: item.describe,
                website: item.website,
                hotline: item.phone_number 
            };
        });

        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getfinalReport: async (req, res) => {
    try {
        const { id } = req.params; 
        const final_report = await FinalReports.findById(id);

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

  getNews_details: async (req, res) => {
    try {
        const { id } = req.params; 
        const newsItem = await News.findById(id);

        if (!newsItem) {
            return res.status(404).json({ error: 'News not found' });
        }

        const formattedEndTime = format(new Date(newsItem.end_time), 'dd MMMM yyyy', { locale: vi });

        const result = {
            position: newsItem.position,
            end_time: formattedEndTime,
            describe: newsItem.describe,
            require: newsItem.require,
            profit: newsItem.profit,
            address: newsItem.address,
            time: newsItem.daily_time
        };

        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
  },




  runcode: async (req, res) => {
    exec("python .\\algorithms\\demo.py", (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing the Python script: ${error}`);
        return res.status(500).send("Internal Server Error");
      }

      try {
        const jsonData = JSON.parse(stdout);
        res.json(jsonData);
      } catch (parseError) {
        console.error(`Error parsing JSON: ${parseError}`);
        res.send(stdout.replace(/\n/g, "<br>"));
      }
    });
  },
};

module.exports = userController;
