const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')

const Schema = mongoose.Schema
const mongooseDelete = require('mongoose-delete')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const CourseSchema = new Schema({
    _id: { type: Number, },
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true }
  }, {
      _id: false,
      timestamps: true
  });

  mongoose.plugin(slug)

  CourseSchema.plugin(AutoIncrement)
  CourseSchema.plugin(mongooseDelete, {
	  deletedAt: true, 
	  overrideMethods: 'all' })

  module.exports = mongoose.model('Course', CourseSchema)