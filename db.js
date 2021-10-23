const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/hello-mongodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

