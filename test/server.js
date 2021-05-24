const express = require('express');

const app = express();

const PORT = 3000;

/**
 * 
 * Set up assets for test environment
 * 
 */
app.use(express.static(__dirname));

/** 
 * 
 * Aim to dist folder in order to get the bundle
 * 
*/
app.use(express.static(__dirname + "/../dist"))


/**
 * 
 * We can set some routes to different test
 * 
 */
app.get('/', (req, res) => {
    res.sendFile('index.html');
})


app.listen(PORT, () => {
    console.log(`Test server is listening at http://localhost:${PORT}`);
})