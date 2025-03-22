const express = require('express');
const app = express();
const mongoose=require('mongoose');
const Art = require('./models/arts.js');
const path = require("path");
const methodOverride = require("method-override");
const ejsMate=require('ejs-mate');
const session = require('express-session');

const MONGO_URL ="mongodb://127.0.0.1:27017/digital_art_gallery";

main()
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((err) => {
        console.error('Could not connect to MongoDB', err)
    });

async function main(){
    await mongoose.connect(MONGO_URL); 
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// Add this before your routes
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // set to true if using https
}));

// Add this after your imports for better error logging
process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', promise, 'reason:', reason);
});

app.get('/', async (req, res) => {
    res.render("login.ejs", { error: null });
});

app.get("/arts", async (req, res) => {
    if (!req.session.isAdmin) {
        return res.redirect('/login');
    }
    const allArts = await Art.find({});
    res.render("arts/index.ejs", { allArts, isAdmin: true });
});


// New Route - Just render the form
app.get("/arts/new", (req, res) => {
    if (!req.session.isAdmin) {
        return res.redirect('/login');
    }
    res.render("arts/new.ejs", { isAdmin: true });
});


app.get("/arts/:id", async (req, res) => {
    if (!req.session.isAdmin) {
        return res.redirect('/login');
    }
    let { id } = req.params;
    const artInstance = await Art.findById(id);
    if (!artInstance) {
        console.error(`Art with id ${id} not found`);
        return res.status(404).send("Art not found");
    }
    res.render("arts/show.ejs", { artInstance, isAdmin: true });

});

// Create Route - Handle the form submission and redirect
app.post("/arts", async (req, res) => {
    try {
        console.log("Received art data:", req.body.art);
        const newArt = new Art(req.body.art);
        const savedArt = await newArt.save();
        console.log("Art saved successfully:", savedArt);
        return res.redirect("/arts"); // Redirect to index page after successful save
    } catch (err) {
        console.error("Error creating art:", err);
        // If there's an error, render the form again with the error message
        return res.render("arts/new.ejs", { 
            error: err.message,
            art: req.body.art,
            isAdmin: true 
        });
    }
});


// Edit Route
app.get("/arts/:id/edit", async (req, res) => {
    if (!req.session.isAdmin) {
        return res.redirect('/login');
    }
    let { id } = req.params;
    const artInstance = await Art.findById(id);
    res.render("arts/edit.ejs", { artInstance, isAdmin: true });
});


// Update Route
app.put("/arts/:id", async (req, res) => {
    let { id } = req.params;
    await Art.findByIdAndUpdate(id, { ...req.body.art });
    res.redirect(`/arts/${id}`);
});


// Delete Route
app.delete("/arts/:id", async (req, res) => {
    let { id } = req.params;
    await Art.findByIdAndDelete(id);
    res.redirect("/arts");
});

//team route
app.get("/team", (req, res) => {
    res.render("team.ejs", { 
        isUser: req.session.isUser,
        isAdmin: req.session.isAdmin 
    });
});

app.get("/artists", (req, res) => {
    const artists = [
        {
            artistName: "Leonardo da Vinci",
            email: "leonardo.da.vinci@artist.com",
            bio: "Renaissance polymath and creator of the Mona Lisa & The Last Supper",
            profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            specialization: "Digital Painting, Traditional Art",
            contactNumber: "+39-055-123-4567"
        },
        {
            artistName: "Pablo Picasso",
            email: "pablo.picasso@artist.com",
            bio: "Pioneering digital abstract artist specializing in cubist-inspired digital works",
            profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            specialization: "Abstract Art, Digital Manipulation",
            contactNumber: "+34-934-112-233"
        },
        {
            artistName: "Vincent van Gogh",
            email: "vincent.van.gogh@artist.com",
            bio: "Digital impressionist creating emotional and vibrant digital landscapes",
            profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            specialization: "Digital Impressionism, 3D Art",
            contactNumber: "+31-20-123-4567"
        },
        {
            artistName: "Johannes Vermeer",
            email: "johannes.vermeer@artist.com",
            bio: "Digital portrait artist known for photorealistic digital paintings",
            profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            specialization: "Digital Portraits, Photorealism",
            contactNumber: "+31-15-212-3456"
        },
        {
            artistName: "Salvador Dalí",
            email: "salvador.dali@artist.com",
            bio: "Creating surreal digital experiences and NFT collections",
            profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            specialization: "Digital Surrealism, NFT Art",
            contactNumber: "+34-972-876-543"
        },
        {
            artistName: "Marcus Rivera",
            email: "marcus.rivera@artist.com",
            bio: "Digital artist exploring quantum computing aesthetics",
            profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            specialization: "Digital Art, Generative Art",
            contactNumber: "+1-415-555-0199"
        },
        {
            artistName: "Amara Wilson",
            email: "amara.wilson@artist.com",
            bio: "Digital painter specializing in bioluminescent ecosystems",
            profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            specialization: "Digital Painting, Concept Art",
            contactNumber: "+1-646-555-0134"
        },
        {
            artistName: "Katsushika Hokusai",
            email: "hokusai@artist.com",
            bio: "Digital artist reimagining traditional Japanese art in digital form",
            profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            specialization: "Digital Japanese Art, Animation",
            contactNumber: "+81-3-1234-5678"
        },
        {
            artistName: "Grant Wood",
            email: "grant.wood@artist.com",
            bio: "Creating contemporary digital interpretations of American Gothic art",
            profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            specialization: "Digital Gothic Art, Modern Art",
            contactNumber: "+1-319-555-0178"
        },
        {
            artistName: "Georges Seurat",
            email: "georges.seurat@artist.com",
            bio: "Digital pointillism artist creating pixel-perfect masterpieces",
            profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            specialization: "Digital Pointillism, Pixel Art",
            contactNumber: "+33-1-4987-6543"
        }
    ];
    res.render("artists.ejs", { 
        artists, 
        isUser: req.session.isUser,
        isAdmin: req.session.isAdmin 
    });
});

// Buy Route
app.get('/arts/:id/buy', async (req, res) => {
        const art = await Art.findById(req.params.id);
        res.render('arts/buy', { art });
});

// Exhibition Route
app.get("/exhibition", (req, res) => {
    res.render("exhibition.ejs", { 
        isUser: req.session.isUser,
        isAdmin: req.session.isAdmin 
    });
});

app.get('/login', (req, res) => {
    res.render('login.ejs', { error: null });
});

app.post('/login/admin', (req, res) => {
    const { username, password } = req.body;
    
    if (username === 'admin' && password === 'admin123') {
        req.session.isAdmin = true;
        req.session.isUser = false;
        return res.redirect('/arts');
    }
    
    res.render('login.ejs', { error: 'Invalid admin credentials' });
});

app.post('/login/user', (req, res) => {
    const { username, password } = req.body;
    
    // Add your user authentication logic here
    if (username && password) {
        req.session.isUser = true;
        return res.redirect('/arts-user');
    }
    
    res.render('login.ejs', { error: 'Invalid user credentials' });
});

// User Arts Route (Read-only view)
app.get("/arts-user", async (req, res) => {
    const allArts = await Art.find({});
    res.render("arts_user/index.ejs", { allArts, isUser: true });
});

// Individual Art View for Users
app.get("/arts-user/:id", async (req, res) => {
    try {
        let { id } = req.params;
        const artInstance = await Art.findById(id);
        if (!artInstance) {
            console.error(`Art with id ${id} not found`);
            return res.redirect("/arts-user");
        }
        res.render("arts_user/show.ejs", { artInstance, isUser: true });
    } catch (error) {
        console.error("Error fetching art:", error);
        res.redirect("/arts-user");
    }
});

// Add logout route
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

// Admin Dashboard Route with Analytics
app.get("/admin/dashboard", async (req, res) => {
    if (!req.session.isAdmin) {
        return res.redirect('/login');
    }
    try {
        // Basic Statistics
        const totalArts = await Art.countDocuments();
        const uniqueArtists = await Art.distinct('artistName');
        const totalArtists = uniqueArtists.length;
        const totalValue = await Art.aggregate([
            { $group: { _id: null, total: { $sum: "$price" } } }
        ]);

        // Category Distribution
        const categoryStats = await Art.aggregate([
            { $group: { _id: "$category", count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ]);

        // Recent Artworks
        const recentArts = await Art.find()
            .sort({ createdAt: -1 })
            .limit(5);

        // Top Artists
        const topArtists = await Art.aggregate([
            { $group: { 
                _id: "$artistName", 
                artworks: { $sum: 1 },
                totalValue: { $sum: "$price" }
            }},
            { $sort: { artworks: -1 } },
            { $limit: 5 }
        ]);

        res.render("admin/dashboard.ejs", {
            isAdmin: true,
            stats: {
                totalArts,
                totalArtists,
                totalValue: totalValue[0]?.total || 0,
                categoryStats,
                recentArts,
                topArtists
            }
        });
    } catch (error) {
        console.error("Dashboard Error:", error);
        res.status(500).send("Error loading dashboard");
    }
});

// Add this at the bottom of your file
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
// Update your server start to include error handling
app.listen(3000, () => {
    console.log('Server is running on port 3000');
}).on('error', (err) => {
    console.error('Server failed to start:', err);
});
