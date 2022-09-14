const express = require('express');
const fileRoute = require('./routes/profile');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('application live')
})
app.use('/api/v1', fileRoute);
app.listen(port, () => console.log('server listen on port 3000'));
