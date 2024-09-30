const express = require('express');
const multer = require('multer');
const router = express.Router();
const { aiCheck } = require('../controllers/aiController');
const { storeContent } = require('../controllers/blockchainController');

// Setup multer for file uploads
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), async (req, res) => {
    const file = req.file;

    // Check content with AI bot (simulated)
    const isValid = await aiCheck(file.path);

    if (isValid) {
        // If valid, store metadata on blockchain
        const blockchainResponse = await storeContent(file);
        return res.status(200).json({ message: 'File uploaded successfully', blockchainResponse });
    } else {
        return res.status(400).json({ message: 'Content not allowed by AI' });
    }
});

module.exports = router;
