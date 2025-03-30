const express = require("express");
const mysql = require("mysql2");
const router = express.Router();


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "shirley@352000",
    database: "tour_db",
});

db.connect((err) => {
  if (err) console.error("Database connection failed:", err);
  else console.log("Connected to MySQL database - Booking Routes");
});
// Store booking form data
router.post("/bookings", (req, res) => {
    const { name, phone, email, destination, residence, travel_date, persons} = req.body;
    const sql = "INSERT INTO bookings (name, phone, email, destination, residence, travel_date, persons) VALUES (?, ?, ?, ?, ?, ?, ?)";
    
    db.query(sql, [name, phone, email, destination, residence, travel_date, persons], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Booking submitted successfully" });
    });
});

// Fetch all bookings
router.get("/bookings", (req, res) => {
    db.query("SELECT * FROM bookings", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Update booking status (checked or unchecked)
router.put("/:id", (req, res) => {
    const { checked } = req.body;
    const sql = "UPDATE bookings SET checked = ? WHERE id = ?";
    
    db.query(sql, [checked, req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Booking status updated" });
    });
});

module.exports = router;
