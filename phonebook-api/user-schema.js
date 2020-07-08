var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    firstName: {type: String, required: true, max: 100},
    lastName: {type: String, required: true, max: 100},
    phone: {type: Number},
  }
);

// Virtual for author's full name
UserSchema
.virtual('name')
.get(function () {

// To avoid errors in cases where an author does not have either a family name or first name
// We want to make sure we handle the exception by returning an empty string for that case

  var fullname = '';
  if (this.firstName && this.lastName) {
    fullname = this.lastName + ', ' + this.firstName
  }
  if (!this.firstName || !this.lastName) {
    fullname = '';
  }

  return fullname;
});

// Virtual for author's lifespan
UserSchema
.virtual('phone')
.get(function () {
  return (this.phone).toString();
});

// Virtual for author's URL
UserSchema
.virtual('url')
.get(function () {
  return '/user/' + this._id;
});

//Export model
module.exports = mongoose.model('User', UserSchema);