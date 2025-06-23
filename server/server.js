// // server/index.js (or app.js)
// import dotenv from 'dotenv';
// dotenv.config();

// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import Contact from './models/Contact.js';

// const app = express();

// app.use(cors());
// app.use(express.json()); // parse JSON bodies

// // connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // POST /api/contact
// app.post('/api/contact', async (req, res) => {
//   try {
//     const { name, email, message } = req.body;
//     const contact = new Contact({ name, email, message });
//     await contact.save();
//     // TODO: you could also trigger a server-side email here via nodemailer
//     res.status(201).json({ success: true });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, error: 'Server error' });
//   }
// });

// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

import dotenv from 'dotenv';
dotenv.config(); // MUST come before you read process.env

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Contact from './models/Contact.js';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(express.json());

// connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB error', err));

// configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// // POST /api/contact
// app.post('/api/contact', async (req, res) => {
//   try {
//     const { name, email, message } = req.body;
//     // 1) save to Mongo
//     const contact = new Contact({ name, email, message });
//     await contact.save();

//     // 2) send yourself an email
//     await transporter.sendMail({
//       from: process.env.EMAIL_FROM,
//       to: process.env.EMAIL_TO,
//       subject: `New message from ${name}`,
//       text: message + `\n\nFrom: ${name} <${email}>`,
//       html: `<p>${message.replace(/\n/g, '<br>')}</p>
//                 <hr>
//                 <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>`,
//     });

//     return res.status(201).json({ success: true });
//   } catch (err) {
//     console.error('Contact error:', err);
//     return res.status(500).json({ success: false, error: 'Server error' });
//   }
// });
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    // 1) Save to database
    await new Contact({ name, email, message }).save();

    // 2) Send yourself an email notification
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `📨 New message from ${name} via portfolio website`, // ← your new Subject line
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, '<br>')}</p>`,
    });

    return res.status(201).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: err.message });
  }
});
// start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on ${PORT}`);
});
