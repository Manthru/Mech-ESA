const express = require('express');
const router = express.Router();

// Mock data for events
const eventsData = {
  upcoming: [
    {
      id: 1,
      title: 'MechFest 2024',
      description: 'Annual technical festival featuring competitions, workshops, exhibitions, and networking opportunities with industry experts.',
      date: '2024-03-15',
      time: '09:00',
      location: 'IIT Indore Campus',
      attendees: 1000,
      category: 'Festival',
      registrationOpen: true,
      registrationDeadline: '2024-03-10',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      title: 'Industry Expert Lecture Series',
      description: 'Renowned industry experts sharing insights on the future of mechanical engineering and emerging technologies.',
      date: '2024-02-28',
      time: '14:00',
      location: 'Lecture Hall 1',
      attendees: 200,
      category: 'Seminar',
      registrationOpen: true,
      registrationDeadline: '2024-02-25',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  past: [
    {
      id: 3,
      title: 'MechFest 2023',
      description: 'Successfully organized annual technical festival with record participation and innovative project showcases.',
      date: '2023-03-10',
      location: 'IIT Indore Campus',
      attendees: 800,
      category: 'Festival',
      registrationOpen: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]
};

// GET /api/events - Get all events
router.get('/', (req, res) => {
  try {
    const { type, category, limit } = req.query;
    
    let events = [];
    
    if (type === 'upcoming') {
      events = eventsData.upcoming;
    } else if (type === 'past') {
      events = eventsData.past;
    } else {
      events = [...eventsData.upcoming, ...eventsData.past];
    }
    
    if (category) {
      events = events.filter(event => event.category.toLowerCase() === category.toLowerCase());
    }
    
    if (limit) {
      events = events.slice(0, parseInt(limit));
    }
    
    res.json({
      success: true,
      data: events,
      count: events.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching events',
      error: error.message
    });
  }
});

// GET /api/events/:id - Get specific event
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const allEvents = [...eventsData.upcoming, ...eventsData.past];
    const event = allEvents.find(e => e.id === parseInt(id));
    
    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found'
      });
    }
    
    res.json({
      success: true,
      data: event
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching event',
      error: error.message
    });
  }
});

// POST /api/events/:id/register - Register for an event
router.post('/:id/register', (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, rollNumber, branch, year } = req.body;
    
    // Validation
    if (!name || !email || !phone || !rollNumber) {
      return res.status(400).json({
        success: false,
        message: 'All required fields must be provided'
      });
    }
    
    const event = eventsData.upcoming.find(e => e.id === parseInt(id));
    
    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found'
      });
    }
    
    if (!event.registrationOpen) {
      return res.status(400).json({
        success: false,
        message: 'Registration is closed for this event'
      });
    }
    
    // In a real application, you would save this to a database
    res.json({
      success: true,
      message: 'Registration successful',
      data: {
        eventId: id,
        eventTitle: event.title,
        registrationId: Date.now().toString(),
        registeredAt: new Date()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error registering for event',
      error: error.message
    });
  }
});

module.exports = router;