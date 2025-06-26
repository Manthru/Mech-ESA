const express = require('express');
const router = express.Router();

// Mock data for gallery
const galleryData = [
  {
    id: 1,
    title: 'MechFest 2023 Opening Ceremony',
    description: 'Grand opening ceremony of our annual technical festival',
    category: 'Events',
    date: '2023-03-10',
    imageUrl: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    title: 'Robotics Competition Finals',
    description: 'Intense competition between top robotics teams',
    category: 'Competitions',
    date: '2023-03-11',
    imageUrl: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    title: 'CAD Workshop Session',
    description: 'Students learning advanced CAD techniques',
    category: 'Workshops',
    date: '2023-03-05',
    imageUrl: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// GET /api/gallery - Get all gallery items
router.get('/', (req, res) => {
  try {
    const { category, limit } = req.query;
    
    let items = galleryData;
    
    if (category && category !== 'All') {
      items = items.filter(item => item.category.toLowerCase() === category.toLowerCase());
    }
    
    if (limit) {
      items = items.slice(0, parseInt(limit));
    }
    
    res.json({
      success: true,
      data: items,
      count: items.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching gallery items',
      error: error.message
    });
  }
});

// GET /api/gallery/categories - Get all categories
router.get('/categories', (req, res) => {
  try {
    const categories = [...new Set(galleryData.map(item => item.category))];
    
    res.json({
      success: true,
      data: ['All', ...categories]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching categories',
      error: error.message
    });
  }
});

// GET /api/gallery/:id - Get specific gallery item
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const item = galleryData.find(item => item.id === parseInt(id));
    
    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Gallery item not found'
      });
    }
    
    res.json({
      success: true,
      data: item
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching gallery item',
      error: error.message
    });
  }
});

module.exports = router;