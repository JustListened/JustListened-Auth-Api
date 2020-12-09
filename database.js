var mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://justListenedUser:aJEKTRg3I5oUIpP1@cluster0.uffbl.mongodb.net/JustListenedDB?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
);
