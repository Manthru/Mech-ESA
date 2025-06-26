const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Mock database for newsletter subscriptions
const subscribers = [];

// POST /api/newsletter/subscribe - Subscribe to newsletter
router.post('/subscribe', [
  body('email').isEmail().withMessage('Valid email is required')
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
    
    const { email } = req.body;
    
    // Check if email already exists
    const existingSubscriber = subscribers.find(sub => sub.email === email);
    if (existingSubscriber) {
      return res.status(400).json({
        success: false,
        message: 'Email is already subscribed to our newsletter'
      });
    }
    
    // Add new subscriber
    const newSubscriber = {
      id: Date.now().toString(),
      email,
      subscribedAt: new Date(),
      status: 'active'
    };
    
    subscribers.push(newSubscriber);
    
    // In a real application, you would:
    // 1. Save to database
    // 2. Send welcome email
    // 3. Add to email marketing service
    
    res.json({
      success: true,
      message: 'Successfully subscribed to newsletter!',
      data: {
        subscriptionId: newSubscriber.id,
        subscribedAt: newSubscriber.subscribedAt
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error subscribing to newsletter',
      error: error.message
    });
  }
});

// POST /api/newsletter/unsubscribe - Unsubscribe from newsletter
router.post('/unsubscribe', [
  body('email').isEmail().withMessage('Valid email is required')
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
    
    const { email } = req.body;
    
    const subscriberIndex = subscribers.findIndex(sub => sub.email === email);
    if (subscriberIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Email not found in our newsletter list'
      });
    }
    
    // Remove subscriber
    subscribers.splice(subscriberIndex, 1);
    
    res.json({
      success: true,
      message: 'Successfully unsubscribed from newsletter'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error unsubscribing from newsletter',
      error: error.message
    });
  }
});

// GET /api/newsletter/stats - Get newsletter statistics (admin only)
router.get('/stats', (req, res) => {
  try {
    const stats = {
      totalSubscribers: subscribers.length,
      activeSubscribers: subscribers.filter(sub => sub.status === 'active').length,
      recentSubscriptions: subscribers.filter(sub => {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        return new Date(sub.subscribedAt) > oneWeekAgo;
      }).length
    };
    
    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching newsletter statistics',
      error: error.message
    });
  }
});

module.exports = router;