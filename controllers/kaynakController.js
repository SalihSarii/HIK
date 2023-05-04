const { query } = require("express");
const Kaynak = require("../models/Kaynak");

exports.getAllKaynak = async (req,res)=>{
    await Kaynak.updateMany()
    let kaynaklar = await Kaynak.find({})   
    let baslik = req.query.baslik
    let _query= req.query
    // let query= req.query.baslik
    _query = JSON.stringify(_query)
    console.log(_query) 
    _query = JSON.parse(_query)
    console.log(_query) 
    if(_query){
         kaynaklar = await Kaynak.find(_query).sort('yazar')
    //    kaynaklar = await Kaynak.find({
    //     baslik:req.query.baslik,
    //     kaynakturu:req.query.kaynakturu,
    //     yazar:req.query.yazar,
    //     basimYili:req.query.basimYili,
    //     ciltNo:req.query.ciltNo,
    //     baskiNo:req.query.baskiNo,
    //     dil:req.query.dil
    // }).sort('indirilmeSayisi')      
    
    
   
    //    console.log("if else 1")
    }   
    

    res.render('kaynakArama',{
        kaynaklar,
        baslik
    })
};

exports.getAllKaynakIndex = async (req,res)=>{
    const kaynakDers = await Kaynak.find({kaynakturu:"Ders Kitabı"}).sort('-indirilmeSayisi').limit(3)   
    const kaynakOkuma = await Kaynak.find({kaynakturu:"Okuma Kitabı"}).sort('-indirilmeSayisi').limit(3)
    const kaynakSesli = await Kaynak.find({kaynakturu:"Sesli Kitap"}).sort('-indirilmeSayisi').limit(3)
    const kaynakDiger = await Kaynak.find({kaynakturu:"Diğer İçerikler"}).sort('-indirilmeSayisi').limit(3)
    res.render('Index',{
        kaynakDers,
        kaynakOkuma,
        kaynakSesli,
        kaynakDiger
    })
};

exports.getFiltreKaynak = async (req,res)=>{  
    const kaynaklar = await Kaynak.find({baslik:req.params.baslik});
    console.log(kaynaklar)
    console.log(req.params.kaynakturu)
    res.render('kaynakArama',{
      kaynaklar
    })
  }; 

