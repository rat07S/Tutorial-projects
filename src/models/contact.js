// models/Contact.js
import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  message: { type: String, required: false, trim: true },
}, { timestamps: true });

// Avoid recompiling model during hot reload in development
export default mongoose.models.Contact ||
       mongoose.model('Contact', ContactSchema, 'contact');
 