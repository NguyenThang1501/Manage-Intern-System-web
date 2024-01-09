// controllers/userController.js
const Profile = require("../models/Student");
const Accounts = require("../models/Account");
const Student = require("../models/Student");
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
          const requestingUserId = req.account.id;
          const requestingUserRole = req.account.role;
          
          if (requestingUserRole === "teacher" || userId === requestingUserId) {
            const user = await Profile.findById(userId).populate("_id");
          if (!user) {
            return res.status(404).json("User not found");
          }
    
          if (req.body.name) user.name = req.body.name;
          if (req.body.birthday) user.birthday = req.body.birthday;
          if (req.body.sex) user.sex = req.body.sex;
          if (req.body.field) user.field = req.body.field;
          if (req.body.major) user.major = req.body.major;
          if (req.body.email) user.email = req.body.email;
          if (req.body.phone) user.phone = req.body.phone;
          if (req.body.cpa) user.cpa = req.body.cpa;
          if (req.body.cert) user.cert = req.body.cert;
          
          await user.save(); // Save the profile separately
          res.status(200).json("Profile updated successfully");
        
        } else {
            return res.status(403).json("You're not allowed to perform this action");
        }
      }
      catch (err) {
        res.status(500).json({ error: "Internal Server Error", details: err.message });
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
          const newProfile = {
              _id: userId, 
              name: req.body.name,
              birthday: req.body.birthday,
              sex: req.body.sex,
              field: req.body.field,
              major: req.body.major,
              email: req.body.email,
              phone: req.body.phone,
              cpa: req.body.cpa,
              cert: req.body.cert
          };
  
          const studentProfile = new Student(newProfile);
          await studentProfile.save();
  
          res.status(201).json("Profile created successfully");
      } catch (err) {
          res.status(500).json({ error: "Internal Server Error", details: err.message });
      }
  },
};

module.exports = profileController;
