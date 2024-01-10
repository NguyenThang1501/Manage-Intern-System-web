// controllers/userController.js
const Profile = require("../models/Student");
const Accounts = require("../models/Account");
const Student = require("../models/Student");
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const profileController = {
    getProfile: async (req, res) => {
        try {
            const userId = req.params.id;
            const requestingUserId = req.account.id;
            const requestingUserRole = req.account.role;

            // Ensure only admin or the owner can view the profile
            if (requestingUserRole === "teacher" || userId === requestingUserId) {
                const student = await Student.findById(userId);
                if (!student) {
                    return res.status(404).json("Student don't have profile");
                }
                // Return the full profile for admins or the account owner
                res.status(200).json(student);
            } else {
                return res.status(403).json("You're not allowed to view this profile");
            }
            // const student = await Student.findById(req.account.id);
            //     if (!student) {
            //         return res.status(404).json("Student don't have profile");
            //     }
            //     res.status(200).json(student);
            
        } catch (err) {
            res.status(500).json({ error: "Internal Server Error", details: err.message });
        }
    },
    
    updateProfile: async (req, res) => {
        try {
          const userId = req.params.id;
          const user = await Profile.findById(userId).populate("_id");
          if (!user) {
            return res.status(404).json("User not found");
          }
    
          if (req.body.name) user.name = req.body.name;
          if (req.body.birthday) user.birthday = req.body.birthday;
          if (req.body.major) user.major = req.body.major;
          if (req.body.cpa) user.cpa = req.body.cpa;
          if (req.body.sex) user.sex = req.body.sex;
          if (req.body.field) user.field = req.body.field;
          if (req.body.phone) user.phone = req.body.phone;
          if (req.body.cert) user.cert = req.body.cert;
          if (req.body.email) user.email = req.body.email;
      
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
    }
};

module.exports = profileController;
