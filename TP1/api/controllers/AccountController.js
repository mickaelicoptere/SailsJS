module.exports = {

  index: function (req, res) {

    Address.find({owner: req.user.id}).exec(function (err, records) {
      var data = {};
      data.lesadresses = records;
      data.user = req.user;
      return res.view('account', data);
    });
    
  },

  verrou : function(req, res){
    return res.view('homepage');
  }
};
