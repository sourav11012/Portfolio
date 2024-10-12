const nodemailer = require("nodemailer");

const sendEmailController = async (req, res) => {
  const { name, email, msg } = req.body;

  if (!name || !email || !msg) {
    return res.json({ success: false, message: "Please provide all fields" });
  }

  // Nodemailer setup
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "souravshetye@gmail.com", // Replace with your email
      pass: process.env.APP_PASS, // Replace with your email password (use app password for better security)
    },
  });

  const mailOptions = {
    from: email,
    to: "souravshetye@gmail.com", // Replace with your email to receive form data
    subject: `New Contact Form Submission from ${name}`,
    text: `You received a new message from your portfolio website:
    \nName: ${name}
    \nEmail: ${email}
    \nMessage: ${msg}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Sent mail ");
    return res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: "Failed to send email" });
  }
};

module.exports = { sendEmailController };
