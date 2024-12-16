import mongoose from "mongoose";

const FacilitySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  pricePerHour: {
    type: Number,
  },
  location: {
    type: String,
  },
  image: {
    type: [String],
    default: [],
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
},
  {
    timestamps: true
  }
);

// create an model for facility

const FacilityModel = mongoose.model("facility", FacilitySchema);

export default FacilityModel;
