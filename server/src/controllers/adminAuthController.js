const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");

exports.registerAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const adminExists = await Admin.findOne({ email });
    if (adminExists) {
      return res.status(400).json({ message: "Admin already exists" });
    }
    const admin = new Admin({ email, password });
    await admin.save();
    res.status(201).json({ message: "Admin registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin || !(await admin.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET_Admin, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
