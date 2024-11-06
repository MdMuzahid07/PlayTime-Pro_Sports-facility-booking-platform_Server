import mongoose from "mongoose";
import { TShippingAddress, TUser } from "./user.interface";


const ShippingAddressSchema = new mongoose.Schema<TShippingAddress>(
  {
    street: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
    },
    postalCode: {
      type: String,
      trim: true,
    },
    country: {
      type: String,
      trim: true,
    },
  }
);


const UserSchema = new mongoose.Schema<TUser>(
  {
    name: {
      type: String,
    },
    avatar: {
      type: String,
      default: ""
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    phone: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
    },
    address: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    shippingAddress: {
      type: [ShippingAddressSchema],
      default: []
    }
  },
  {
    timestamps: true,
  }
);

// replacing password with empty string after saving it DB,  for not show in user end
UserSchema.post("save", function (doc, next) {
  // we get current data in post middleware in doc
  doc.password = " ";
  next();
});

// method to control json data
// deleting password field from response to user
// methods.toJSON serves the purpose to customizing the JSON representation of the document when it converted to JSON
UserSchema.methods.toJSON = function () {
  // this.toObject(); convert mongoose document to plain JavaScript Object
  const user = this.toObject();
  delete user.password;
  return user;
};

// create user model
const UserModel = mongoose.model<TUser>("User", UserSchema);

export default UserModel;
