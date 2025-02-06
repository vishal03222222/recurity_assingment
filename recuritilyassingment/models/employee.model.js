const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter employee name"],
    },
    department: {
      type: String,
      required: [true, "Please enter employee's department"],
    },
    role: {
      type: String,
      required: [true, "Please enter employee's role"],
    },
    salary: {
      type: Number,
      required: true,
      default: 0,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      required: true,
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
