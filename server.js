const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');



const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected via Compass'))
.catch(err => console.log('❌ MongoDB Connection Error:', err));


// Define User Schema
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('users', UserSchema);



app.use('/images', express.static(path.join(__dirname, 'Images')));


// Define Menu Schema
const menuSchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    itemImage: { type: String, required: true }, // Store image path
    itemDescription: String,
    itemMoreInfo: String,
    itemPrice: { type: Number, required: true },
    itemId: { type: String, unique: true }
});

// Create Model
const Menu = mongoose.model('menus', menuSchema);


const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    items: [{
        item: { type: mongoose.Schema.Types.ObjectId, ref: 'menus' },
        itemQuantity: { type: Number, required: true }
    }]
});

const Cart = mongoose.model('carts', cartSchema);



// Register API (Store Email & Password Directly)
app.post('/api/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Save user to database
        const newUser = new User({ email, password });
        await newUser.save();

        res.json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        if (user.password !== password) {
            return res.status(400).json({ error: 'Incorrect password' });
        }

        res.json({ message: 'Login successful' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});


app.get('/api/menu', async (req, res) => {
    try {
        const menuItems = await Menu.find({});// ✅ Debugging
        res.json(menuItems);
    } catch (error) {
        console.error("Database fetch error:", error);
        res.status(500).json({ error: "Failed to fetch menu" });
    }
});




// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
