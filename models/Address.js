const mongoose = require("mongoose");

const AddressSchema = mongoose.Schema({
  name: { type: String, required: [true, "Please Provide Name"] },

  phone: { type: Number, required: [true, "Please Provide Phone Number"] },

  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
});

module.exports = mongoose.model("Address", AddressSchema);
