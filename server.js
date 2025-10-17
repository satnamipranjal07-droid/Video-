const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypts');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // Static files (HTML, CSS, JS) serve karne ke liye

// Dummy user (real mein database use karo)
const users = {
    admin: { password: bcrypts.hashSync('yourpassword', 10) } // 'yourpassword' ko badlo
};

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username] && bcrypts.compareSync(password, users[username].password)) {
        res.redirect('/upload.html');
    } else {
        res.send('Invalid credentials');
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));