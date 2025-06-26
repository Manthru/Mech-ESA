const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// POST /api/contact - Submit contact form
router.post('/', [
  body('firstName').notEmpty().withMessage('First name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('subject').notEmpty().withMessage('Subject is required'),
  body('message').notEmpty().withMessage('Message is required')
], (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation errors',
        errors: errors.array()
      });
    }
    
    const { firstName, lastName, email, phone, subject, message } = req.body;
    
    // In a real application, you would save this to a database and send email
    const contactSubmission = {
      id: Date.now().toString(),
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
      submittedAt: new Date(),
      status: 'new'
    };
    
    // Here you would typically:
    // 1. Save to database
    // 2. Send notification email to admin
    // 3. Send confirmation email to user
    
    res.json({
      success: true,
      message: 'Contact form submitted successfully. We will get back to you soon!',
      data: {
        submissionId: contactSubmission.id,
        submittedAt: contactSubmission.submittedAt
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error submitting contact form',
      error: error.message
    });
  }
});

// GET /api/contact/info - Get contact information
router.get('/info', (req, res) => {
  try {
    const contactInfo = {
      address: {
        line1: 'MechEsa Club',
        line2: 'Mechanical Engineering Department',
        line3: 'Indian Institute of Technology Indore',
        line4: 'Simrol, Indore - 453552',
        line5: 'Madhya Pradesh, India'
      },
      phone: ['+91 731 2438 721', '+91 731 2438 722'],
      email: ['mechesa@iiti.ac.in', 'president.mechesa@iiti.ac.in'],
      officeHours: {
        weekdays: '9:00 AM - 6:00 PM',
        saturday: '10:00 AM - 4:00 PM',
        sunday: 'Closed'
      },
      socialMedia: {
        facebook: 'https://facebook.com/mechesaiiti',
        twitter: 'https://twitter.com/mechesaiiti',
        instagram: 'https://instagram.com/mechesaiiti',
        linkedin: 'https://linkedin.com/company/mechesa-iit-indore'
      }
    };
    
    res.json({
      success: true,
      data: contactInfo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching contact information',
      error: error.message
    });
  }
});

module.exports = router;