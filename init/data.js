const sampleArt = [
  {
    "title": "Mona Lisa",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    "description": "The world's most famous portrait painting by Leonardo da Vinci, created between 1503-1519.",
    "price": 860000000,
    "artistName": "Leonardo da Vinci",
    "category": "painting"
  },
  {
    "title": "The Last Supper",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg",
    "description": "Renaissance mural painting depicting Jesus' final meal with his apostles, painted 1495-1498.",
    "price": 550000000,
    "artistName": "Leonardo da Vinci",
    "category": "painting"
  },
  {
    "title": "Liberty Leading the People",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Eugène_Delacroix_-_La_liberté_guidant_le_peuple.jpg",
    "description": "Romantic painting symbolizing the July Revolution of 1830 in France.",
    "price": 200000000,
    "artistName": "Eugène Delacroix",
    "category": "painting"
  },
  {
    "title": "Guernica",
    "image": "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg",
    "description": "Powerful anti-war cubist painting responding to the bombing of Guernica (1937).",
    "price": 200000000,
    "artistName": "Pablo Picasso",
    "category": "painting"
  },
  {
    "title": "American Gothic",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
    "description": "Iconic 1930 painting depicting a Midwestern farmer and daughter.",
    "price": 150000000,
    "artistName": "Grant Wood",
    "category": "painting"
  },
  {
    "title": "The Great Wave off Kanagawa",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Tsunami_by_hokusai_19th_century.jpg",
    "description": "Famous Japanese woodblock print from the Edo period (c. 1830-1833).",
    "price": 1000000,
    "artistName": "Katsushika Hokusai",
    "category": "painting"
  },
  {
    "title": "Whistler's Mother",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Whistlers_Mother_high_res.jpg",
    "description": "Iconic portrait formally titled 'Arrangement in Grey and Black No. 1' (1871).",
    "price": 40000000,
    "artistName": "James McNeill Whistler"
  },
  {
    "title": "Sunflowers",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg",
    "description": "Series of still life paintings of sunflowers in a vase (1888-1889).",
    "price": 100000000,
    "artistName": "Vincent van Gogh"
  },
  {
    "title": "A Sunday Afternoon on the Island of La Grande Jatte",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg",
    "description": "Pointillist masterpiece depicting Parisians relaxing by the Seine (1884).",
    "price": 650000000,
    "artistName": "Georges Seurat"
  },
  {
    "title": "The Treachery of Images",
    "image": "https://upload.wikimedia.org/wikipedia/en/b/b9/MagrittePipe.jpg",
    "description": "Surrealist painting with text 'This is not a pipe' (1928-1929).",
    "price": 5000000,
    "artistName": "René Magritte"
  },
  {
    "title": "Quantum Memory",
    "description": "Surreal landscape with geometric fragments dissolving into particles, representing the intersection of memory and technology",
    "price": 950,
    "artistName": "Marcus Rivera",
    "category": "Digital Art",
    "image": "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc"
  },
  {
    "title": "Bioluminescent Genesis",
    "description": "Digital painting of glowing organic forms intertwined with technology in a deep sea environment",
    "price": 1800,
    "artistName": "Amara Wilson",
    "category": "Digital Art",
    "image": "https://images.unsplash.com/photo-1574169208507-84376144848b"
  },
  {
    "title": "Algorithmic Harmony",
    "description": "Generative art piece created through mathematical algorithms producing harmonious patterns",
    "price": 2200,
    "artistName": "David Park",
    "category": "Abstract Art",
    "image": "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a"
  },
  {
    "title": "Cybernetic Bloom",
    "description": "Detailed digital illustration of mechanical flowers blooming in a technological garden",
    "price": 1350,
    "artistName": "Nina Zhang",
    "category": "Digital Art",
    "image": "https://images.unsplash.com/photo-1604076913837-52ab5629fba9"
  },
  {
    "title": "Dimensional Threshold",
    "description": "Portal-like composition suggesting a gateway between digital and physical realms",
    "price": 1650,
    "artistName": "Thomas Wright",
    "category": "Digital Art",
    "image": "https://images.unsplash.com/photo-1604871000636-074fa5117945"
  },
  {
    "title": "Urban Impressions",
    "description": "Loose, expressive sketches of city life capturing the energy of urban environments",
    "price": 680,
    "artistName": "Miguel Santos",
    "category": "Sketches",
    "image": "https://images.unsplash.com/photo-1618331835717-801e976710b2"
  },
  {
    "title": "Character Studies",
    "description": "Collection of expressive charcoal sketches exploring human emotions and expressions",
    "price": 920,
    "artistName": "Elisa Montgomery",
    "category": "Sketches",
    "image": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119"
  },
  {
    "title": "Quantum Portraiture",
    "description": "Abstract portrait composed of quantum probability patterns and wave functions",
    "price": 2100,
    "artistName": "Raj Patel",
    "category": "Portrait",
    "image": "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead"
  },
  {
    "title": "Botanical Observations",
    "description": "Delicate ink sketches of plant specimens with scientific notations and details",
    "price": 760,
    "artistName": "Thomas Green",
    "category": "Sketches",
    "image": "https://images.unsplash.com/photo-1618331835717-801e976710b2"
  },
  {
    "title": "Gesture Studies",
    "description": "Quick, dynamic sketches capturing human movement and form with minimal lines",
    "price": 580,
    "artistName": "Julian Wei",
    "category": "Sketches",
    "image": "https://images.unsplash.com/photo-1582201943021-e8e5cb6dedc2"
  },
  {
    "title": "Rendered Emotion",
    "description": "Abstract visualization of human emotions represented through color fields and particle systems",
    "price": 1550,
    "artistName": "Carlos Mendez",
    "category": "Abstract Art",
    "image": "https://images.unsplash.com/photo-1507908708918-778587c9e563"
  },
  {
    "title": "Low Poly Solitude",
    "description": "Emotive low-polygon landscape with atmospheric lighting and minimalist design",
    "price": 750,
    "artistName": "Hannah Berg",
    "category": "Landscape",
    "image": "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986"
  },
  {
    "title": "Synthesized Reality",
    "description": "Photorealistic digital environment with surreal elements challenging perception",
    "price": 2800,
    "artistName": "Victor Nguyen",
    "category": "Digital Art",
    "image": "https://images.unsplash.com/photo-1610296669228-602fa827fc1f"
  },
  {
    "title": "Algorithmic Portrait",
    "description": "Human face constructed entirely from mathematical patterns and code visualizations",
    "price": 1850,
    "artistName": "Zoe Matthews",
    "category": "Portrait",
    "image": "https://images.unsplash.com/photo-1555952517-2e8e729e0b44"
  },
  {
    "title": "Spectral Architecture",
    "description": "Impossible architectural structures rendered with ghostly translucent materials",
    "price": 2050,
    "artistName": "Frederick Wong",
    "category": "Digital Art",
    "image": "https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa"
  },
  {
    "title": "Augmented Flora",
    "description": "Botanical illustrations merged with technological elements creating hybrid species",
    "price": 1150,
    "artistName": "Jasmine Peters",
    "category": "Collage",
    "image": "https://images.unsplash.com/photo-1566275529824-cca6d008f3da"
  },
  {
    "title": "Particle Symphony",
    "description": "Dynamic composition visualizing music through elaborate particle systems",
    "price": 1700,
    "artistName": "Daniel Kim",
    "category": "Digital Art",
    "image": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3"
  },
  {
    "title": "Circuit Memories",
    "description": "Nostalgic scenes embedded within circuit board patterns and electronic components",
    "price": 1500,
    "artistName": "Maria Sanchez",
    "category": "Collage",
    "image": "https://images.unsplash.com/photo-1624969862644-791f3dc98927"
  },
  {
    "title": "Virtual Archaeology",
    "description": "Digital excavation revealing layers of technological history and forgotten digital artifacts",
    "price": 2150,
    "artistName": "James Wilson",
    "category": "Digital Art",
    "image": "https://images.unsplash.com/photo-1550645612-83f5d594b671"
  },
  {
    "title": "Girl with a Pearl Earring",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg",
    "description": "Vermeer's masterpiece known as the 'Mona Lisa of the North.'",
    "price": 525252,
    "artistName": "Johannes Vermeer",
    "category": "Portrait"
  },
  {
    "title": "The Persistence of Memory",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/The_Persistence_of_Memory.jpg/800px-The_Persistence_of_Memory.jpg",
    "description": "Salvador Dalí's surrealist melting clocks.",
    "price": 525252,
    "artistName": "Salvador Dalí",
    "category": "Abstract Art"
  },
  {
    "title": "The Birth of Venus",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/800px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    "description": "Botticelli's Renaissance depiction of Venus emerging from the sea.",
    "price": 525252,
    "artistName": "Sandro Botticelli",
    "category": "Painting"
  },
  {
    "title": "The Kiss",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/800px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
    "description": "Gustav Klimt's golden Art Nouveau masterpiece.",
    "price": 52525256,
    "artistName": "Gustav Klimt",
    "category": "Painting"
  },
  {
    "title": "Guernica",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/PicassoGuernica.jpg/800px-PicassoGuernica.jpg",
    "description": "Picasso's anti-war cubist mural.",
    "price": 652653,
    "artistName": "Pablo Picasso",
    "category": "Abstract Art"
  },
  {
    "title": "The Last Supper",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/800px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg",
    "description": "Leonardo da Vinci's mural of Jesus and his apostles.",
    "price": 652653,
    "artistName": "Leonardo da Vinci",
    "category": "Painting"
  },
  {
    "title": "American Gothic",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/800px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
    "description": "Grant Wood's iconic portrayal of rural American life.",
    "price": 652653,
    "artistName": "Grant Wood",
    "category": "Portrait"
  },
  {
    "title": "Digital Dreams",
    "artistName": "Priya Sharma",
    "description": "A vibrant digital artwork exploring modern themes",
    "price": 25000,
    "image": "https://images.unsplash.com/photo-1615184697985-c9bde1b07da9",
    "category": "Digital Art"
  },
  {
    "title": "Abstract Harmony",
    "artistName": "Rajesh Kumar",
    "description": "An abstract expression of musical harmony",
    "price": 30000,
    "image": "https://images.unsplash.com/photo-1541961017774-22349e4a1262",
    "category": "Abstract Art"
  },
  {
    "title": "Traditional Fusion",
    "artistName": "Arun Patel",
    "description": "A fusion of traditional and modern art styles",
    "price": 35000,
    "image": "https://images.unsplash.com/photo-1578926288207-a90a5366759d",
    "category": "Traditional Art"
  },
  {
    "title": "Sculptural Dreams",
    "artistName": "Maya Desai",
    "description": "A contemporary sculptural masterpiece",
    "price": 40000,
    "image": "https://images.unsplash.com/photo-1549887534-1541e9326642",
    "category": "Sculpture"
  },
  {
    "title": "Nature's Canvas",
    "artistName": "Priya Sharma",
    "description": "A digital interpretation of natural landscapes",
    "price": 28000,
    "image": "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
    "category": "Digital Art"
  },
  {
    "title": "Urban Rhythms",
    "artistName": "Rajesh Kumar",
    "description": "Abstract representation of city life",
    "price": 32000,
    "image": "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8",
    "category": "Abstract Art"
  },
  {
    "title": "Heritage Echo",
    "artistName": "Arun Patel",
    "description": "Traditional motifs with contemporary elements",
    "price": 38000,
    "image": "https://images.unsplash.com/photo-1582561833897-2cf4a5b89c31",
    "category": "Traditional Art"
  },
  {
    "title": "Modern Monolith",
    "artistName": "Maya Desai",
    "description": "A bold sculptural statement piece",
    "price": 45000,
    "image": "https://images.unsplash.com/photo-1554188248-986adbb73be4",
    "category": "Sculpture"
  }
];

module.exports = {
  data: sampleArt
};