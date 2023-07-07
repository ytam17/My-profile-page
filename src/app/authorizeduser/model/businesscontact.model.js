const mongoose = require("mongoose");

const BusinessContactSchema = mongoose.Schema({
  name: String,
  contactnumber: String,
  email: String,
});

module.exports = mongoose.model("BusinessContact", BusinessContactSchema);
