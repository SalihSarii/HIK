const Kaynak = require("../models/Kaynak");

exports.getAllKaynak = async (req,res)=>{
    const kaynaklar = await Kaynak.find({}).sort('indirilmeSayisi')
    res.render('index',{
        kaynaklar
    })
};

