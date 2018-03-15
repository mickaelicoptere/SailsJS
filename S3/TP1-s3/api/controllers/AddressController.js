module.exports = {

  ma_methode: function (req, res) {

    return res.json({user: 'toto'});

  },

  find: function (req, res) {

    //records peut etre nommé comme on veut , on peut mettre exemple "toutes les addresses
    var where = {

      street: 'newStreet1',

    };

    Address.find(where).exec(function (err, records) {

      return res.json(records);

    });
  }
};
