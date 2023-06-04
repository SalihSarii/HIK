const Kullanici = require("../models/Kullanici");
const Kaynak = require("../models/Kaynak")


exports.kullaniciKayıtGiris = async(req,res)=>{    
    var girisTuru = req.body.girisTuru
    //indexteki farklı türdeki popüler kitaplar
    const kaynakDers = await Kaynak.find({kaynakturu:"Ders Kitabı"}).sort('-indirilmeSayisi').limit(3)   
    const kaynakOkuma = await Kaynak.find({kaynakturu:"Okuma Kitabı"}).sort('-indirilmeSayisi').limit(3)
    const kaynakSesli = await Kaynak.find({kaynakturu:"Sesli Kitap"}).sort('-indirilmeSayisi').limit(3)
    const kaynakDiger = await Kaynak.find({kaynakturu:"Diğer İçerikler"}).sort('-indirilmeSayisi').limit(3)
    

    if(girisTuru == 'kayit'){
        await Kullanici.create({ 
            kullaniciAdi: req.body.kullaniciAdi,
            adSoyad: req.body.adSoyad,
            email: req.body.email,
            sifre: req.body.sifre
        })        
        res.redirect('/')
    }
    else{
        kullanici = await Kullanici.findOne({email:req.body.email});        
        var girisYapildi="2";
        if(!kullanici){
            girisYapildi = "false";            
            
            res.render('index',{                          
                kaynakDers,
                kaynakOkuma,
                kaynakSesli,
                kaynakDiger,
                girisYapildi            
            })
        }
        else if(kullanici.email== req.body.email && kullanici.sifre==req.body.sifre){                      
            girisYapildi = "true";
            kulAdi = kullanici.kullaniciAdi;    
            
            res.render('index',{                          
                kaynakDers,
                kaynakOkuma,
                kaynakSesli,
                kaynakDiger,
                girisYapildi            
            })             
        }
        else{
            girisYapildi = "false";            
            
            res.render('index',{                          
                kaynakDers,
                kaynakOkuma,
                kaynakSesli,
                kaynakDiger,
                girisYapildi            
            })
        }
    }  
    
    
};

exports.profilDuzenle = async (req,res)=>{
    girisYapildi=2;
    kullaniciAd = req.body.kullaniciAdi
    kullanici = await Kullanici.findOneAndUpdate(req.body);    
    //index kaynaklar
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
    });
}

