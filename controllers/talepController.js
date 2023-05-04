const Talep = require('../models/Talep')

exports.addKaynakTalep = async (req, res)=> {
 await Talep.create(req.body)
 res.redirect('/')
 
};

