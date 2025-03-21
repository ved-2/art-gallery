const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minLength: [3, 'Title must be at least 3 characters long'],
        maxLength: [100, 'Title cannot exceed 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minLength: [10, 'Description must be at least 10 characters long'],
        maxLength: [1000, 'Description cannot exceed 1000 characters']
    },
    image: {
        type: String,
        required: [true, 'Image URL is required'],
        validate: {
            validator: function(v) {
                return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative'],
        max: [1000000, 'Price cannot exceed ₹1,000,000']
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        enum: {
            values: ['Painting', 'Sculpture', 'Digital Art', 'Photography', 'Calligraphy', 
                    'Abstract Art', 'Portrait', 'Landscape', 'Street Art', 'Collage', 
                    'Installation Art'],
            message: '{VALUE} is not a supported category'
        }
    },
    artistName: {
        type: String,
        required: [true, 'Artist name is required'],
        minLength: [2, 'Artist name must be at least 2 characters long'],
        maxLength: [50, 'Artist name cannot exceed 50 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Art = mongoose.model('Art', artSchema);

module.exports = Art;
