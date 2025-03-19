const express = require('express');
const app = express();
const mongoose=require('mongoose');
const Art = require('./models/arts.js');
const path = require("path");
const methodOverride = require("method-override");
const ejsMate=require('ejs-mate');

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

app.get('/', async (req, res) => {
    try {
        const arts = await Art.find().limit(4).sort({ createdAt: -1 });
        res.render('home', { arts });
    } catch (error) {
        console.error(error);
        res.render('home', { arts: [] });
    }
});

app.get("/arts", async (req, res) => {
    const allArts = await Art.find({});
    res.render("arts/index.ejs", { allArts });
});


// New Route
app.get("/arts/new", (req, res) => {
    res.render("arts/new.ejs");
});


app.get("/arts/:id", async (req, res) => {
    let { id } = req.params;
    const artInstance = await Art.findById(id);
    if (!artInstance) {
        console.error(`Art with id ${id} not found`);
        return res.status(404).send("Art not found");
    }
    res.render("arts/show.ejs", { artInstance });

});

// Create Route
app.post("/arts", async (req, res) => {
    const newArt = new Art(req.body.art);
    await newArt.save();
    res.redirect("/arts");
});


// Edit Route
app.get("/arts/:id/edit", async (req, res) => {
    let { id } = req.params;
    const artInstance = await Art.findById(id);
    res.render("arts/edit.ejs", { artInstance });
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
    res.render("team.ejs");
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
    res.render("artists.ejs", { artists });
});

// Buy Route
app.get('/arts/:id/buy', async (req, res) => {
        const art = await Art.findById(req.params.id);
        res.render('arts/buy', { art });
});

// Exhibition Route
app.get("/exhibition", (req, res) => {
    res.render("exhibition.ejs");
});

app.listen(3000, () => {
    console.log('server started');
});
