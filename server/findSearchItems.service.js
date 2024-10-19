const SearchItem = require('./models').SearchItem;

const findSearchItems = async (query) => {

  try {
    const filter = {};

    if (query.type && query.type !== 'all') {
      filter.type = query.type;
    }

    console.log('Applied filter:', filter);

    return await SearchItem.find(filter);
  } catch (error) {
    throw new Error(`Error fetching search items: ${error.message}`);
  }
};

module.exports = { findSearchItems };

