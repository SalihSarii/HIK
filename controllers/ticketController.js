const Ticket = require('../models/Ticket')
const Kaynak = require("../models/Kaynak")

exports.addTicket = async(req,res)=>{
    await Ticket.create(req.body);
    const kaynakDers = await Kaynak.find({kaynakturu:"Ders Kitabı"}).sort('-indirilmeSayisi').limit(3)   
    const kaynakOkuma = await Kaynak.find({kaynakturu:"Okuma Kitabı"}).sort('-indirilmeSayisi').limit(3)
    const kaynakSesli = await Kaynak.find({kaynakturu:"Sesli Kitap"}).sort('-indirilmeSayisi').limit(3)
    const kaynakDiger = await Kaynak.find({kaynakturu:"Diğer İçerikler"}).sort('-indirilmeSayisi').limit(3)
    var girisYapildi="2";
    
    res.render('index',{
        girisYapildi,
        kaynakDers,
        kaynakOkuma,
        kaynakSesli,
        kaynakDiger        
    })
}