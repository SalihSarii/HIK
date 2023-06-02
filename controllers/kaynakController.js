const { query } = require("express");
const Kaynak = require("../models/Kaynak");

exports.getAllKaynak = async (req,res)=>{    
    let kaynaklar = await Kaynak.find({})   
    let baslik = req.query.baslik
    let _query= req.query    
    _query = JSON.stringify(_query)     
    _query = JSON.parse(_query)    
    if(_query){        
        kaynaklar = await Kaynak.find({baslik: new RegExp(baslik, 'i') }).sort('baslik');         
    }       

    res.render('kaynakArama',{
        kaynaklar,
        baslik
    })
};

exports.getAllKaynakIndex = async (req,res)=>{
    var girisYapildi="2";
    const kaynakDers = await Kaynak.find({kaynakturu:"Ders Kitabı"}).sort('-indirilmeSayisi').limit(3)   
    const kaynakOkuma = await Kaynak.find({kaynakturu:"Okuma Kitabı"}).sort('-indirilmeSayisi').limit(3)
    const kaynakSesli = await Kaynak.find({kaynakturu:"Sesli Kitap"}).sort('-indirilmeSayisi').limit(3)
    const kaynakDiger = await Kaynak.find({kaynakturu:"Diğer İçerikler"}).sort('-indirilmeSayisi').limit(3)
    res.render('index',{
        kaynakDers,
        kaynakOkuma,
        kaynakSesli,
        kaynakDiger,
        girisYapildi
    })
};

exports.getFiltreKaynak = async (req,res)=>{  
    const kaynaklar = await Kaynak.find({baslik:req.params.baslik});    
    res.render('kaynakArama',{
      kaynaklar
    })
  }; 

