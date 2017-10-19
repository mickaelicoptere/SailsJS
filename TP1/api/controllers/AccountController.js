module.exports = {

  index: function (req, res) {
    var data = {
      name : 'test',
      address : 'un address data',

      un_obj: {
        un_truc: 'valeur',
        un_autre_truc : 'valeur 2'

      },

      mon_tableau_simple: [
        'un',
        'deux'
      ],

      mon_tableau_js: [
        {
          champ_1: 'champ_1_1',
          champ_2: 'champ_1_2'
        },

        {
          champ_1: 'champ_2_1',
          champ_2: 'champ_2_2'
        }

      ]
    };

    Address.find().exec(function (err, records) {
      var data = {};
      data.lesadresses = records;
      return res.view('account', data);
    })

  }

};
