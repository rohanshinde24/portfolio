// server/models/Contact.js
import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  created: { type: Date, default: Date.now },
});

export default mongoose.model('Contact', ContactSchema);
