module.exports = {
  attributes: {
    // e.g., "Polly"
    street: {
      type: 'string'
    },

    address: {
      type: 'string'
    },

    owner: {
      model: 'user'
    },
  },
};

