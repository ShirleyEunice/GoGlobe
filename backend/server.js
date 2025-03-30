const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require ("./routes/bookingRoutes");


const app = express();
// app.use(cors());
const corsOptions = {
  origin:'http://localhost:3000',
  methods:['POST','GET','PUT','DELETE']
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve images from uploads folder
app.use("/uploads", express.static("uploads"));

// Use Routes
app.use("/api", authRoutes);
app.use("/api", bookingRoutes);



const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
