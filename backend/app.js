const express = require('express');
const cors = require('cors');
const uploadRoute = require('./routes/uploadRoute');
const app = express();

// Enable CORS
app.use(cors());

// Use routes
app.use('/api', uploadRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
