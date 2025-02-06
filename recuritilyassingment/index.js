const express = require("express");
const mongoose = require("mongoose");
const employeeRoute = require("./routes/employee.route.js");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/employees", employeeRoute);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

mongoose
  .connect("mongodb+srv://vishal:vishal_2806@backenddb.hvhnl.mongodb.net/employment_db")
  .then(() => {
    console.log("Connected to database!");
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });
