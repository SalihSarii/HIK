const Talep = require('../models/Talep')
const Kaynak = require("../models/Kaynak")

exports.addKaynakTalep = async (req, res)=> {
var girisYapildi="2";
await Talep.create(req.body)
const kaynakDers = await Kaynak.find({kaynakturu:"Ders Kitabı"}).sort('-indirilmeSayisi').limit(3)   
const kaynakOkuma = await Kaynak.find({kaynakturu:"Okuma Kitabı"}).sort('-indirilmeSayisi').limit(3)
const kaynakSesli = await Kaynak.find({kaynakturu:"Sesli Kitap"}).sort('-indirilmeSayisi').limit(3)
const kaynakDiger = await Kaynak.find({kaynakturu:"Diğer İçerikler"}).sort('-indirilmeSayisi').limit(3)

res.render('index',{
    girisYapildi,
    kaynakDers,
    kaynakOkuma,
    kaynakSesli,
    kaynakDiger    
}) 
};

