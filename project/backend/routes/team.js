const express = require('express');
const router = express.Router();

// Mock data for team
const teamData = {
  leadership: [
    {
      id: 1,
      name: 'Arjun Sharma',
      position: 'President',
      department: 'B.Tech Mechanical Engineering, Final Year',
      bio: 'Passionate about mechanical engineering and innovation. Leading MechEsa Club with vision for excellence and student development.',
      email: 'president@mechesa.iiti.ac.in',
      linkedin: 'https://linkedin.com/in/arjun-sharma',
      github: 'https://github.com/arjunsharma',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      name: 'Priya Patel',
      position: 'Vice President',
      department: 'B.Tech Mechanical Engineering, Third Year',
      bio: 'Dedicated to fostering collaboration and organizing impactful events that enhance student learning and industry connections.',
      email: 'vicepresident@mechesa.iiti.ac.in',
      linkedin: 'https://linkedin.com/in/priya-patel',
      github: 'https://github.com/priyapatel',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  core: [
    {
      id: 3,
      name: 'Ananya Singh',
      position: 'Technical Head',
      department: 'B.Tech Mechanical Engineering, Third Year',
      email: 'technical@mechesa.iiti.ac.in',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 4,
      name: 'Vikram Reddy',
      position: 'Events Head',
      department: 'B.Tech Mechanical Engineering, Second Year',
      email: 'events@mechesa.iiti.ac.in',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  volunteers: [
    {
      id: 5,
      name: 'Abhinav Mishra',
      year: 'Second Year',
      department: 'B.Tech Mechanical Engineering',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 6,
      name: 'Kavya Sreenivas',
      year: 'First Year',
      department: 'B.Tech Mechanical Engineering',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]
};

// GET /api/team - Get all team members
router.get('/', (req, res) => {
  try {
    const { role } = req.query;
    
    let members = [];
    
    if (role === 'leadership') {
      members = teamData.leadership;
    } else if (role === 'core') {
      members = teamData.core;
    } else if (role === 'volunteers') {
      members = teamData.volunteers;
    } else {
      members = {
        leadership: teamData.leadership,
        core: teamData.core,
        volunteers: teamData.volunteers
      };
    }
    
    res.json({
      success: true,
      data: members
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching team members',
      error: error.message
    });
  }
});

// GET /api/team/:id - Get specific team member
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const allMembers = [...teamData.leadership, ...teamData.core, ...teamData.volunteers];
    const member = allMembers.find(m => m.id === parseInt(id));
    
    if (!member) {
      return res.status(404).json({
        success: false,
        message: 'Team member not found'
      });
    }
    
    res.json({
      success: true,
      data: member
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching team member',
      error: error.message
    });
  }
});

module.exports = router;