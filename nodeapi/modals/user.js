const uuidv1 = require("uuid/v1");
const mongoose = require("mongoose");
const crypto = require("crypto");

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  hashedpassword: {
    type: String,
    required: true
  },
  salt: String,
  created: {
    type: Date,
    default: Date.now
  },
  updated: Date
});

/**
 * Virtual fiels are additional fields for a given model.
 * Their values can be set manually or automatically with defined functionality.
 * keep in mind: virual properties{password} don't get persisted in the database.
 * They only exist logically and are not written to the document's collection
 */

// Virtual field
userSchema
  .virtual("password")
  .set(function(password) {
    // create temporary variable called _password
    this._password = password;
    // generate a time stamp
    this.salt = uuidv1();
    // encrypt the password
    this.hashedpassword = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

// methods
userSchema.methods = {
  encryptPassword: function(password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  }
};

module.exorts = mongoose.model("User", userSchema);
