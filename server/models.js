const mongoose = require('mongoose');

const SearchSchema = new mongoose.Schema({
  type: String,
  subtype: String,
  objects: [
    {
      name: String,
      status: {
        type: String,
        enum: ['STABLE', 'UNSTABLE', 'DISCONNECTED'],
      },
    },
  ],
});

const SearchItem = mongoose.model('SearchItem', SearchSchema);


module.exports = { SearchItem };
