const Kullanici = require("../models/Kullanici");
const Kaynak = require("../models/Kaynak")


exports.kullaniciKayit = async (req,res)=>{
    await Kullanici.create({
        kullaniciAdi: req.body.kullaniciAdi,
        adSoyad: req.body.adSoyad,
        email: req.body.email,
        sifre: req.body.sifre
    })
    console.log(req.body)
    res.redirect('/')
};

exports.kullaniciKayıtGiris = async(req,res)=>{    
    var girisTuru = req.body.girisTuru
    //indexteki farklı türdeki popüler kitaplar
    const kaynakDers = await Kaynak.find({kaynakturu:"Ders Kitabı"}).sort('-indirilmeSayisi').limit(3)   
    const kaynakOkuma = await Kaynak.find({kaynakturu:"Okuma Kitabı"}).sort('-indirilmeSayisi').limit(3)
    const kaynakSesli = await Kaynak.find({kaynakturu:"Sesli Kitap"}).sort('-indirilmeSayisi').limit(3)
    const kaynakDiger = await Kaynak.find({kaynakturu:"Diğer İçerikler"}).sort('-indirilmeSayisi').limit(3)
    // console.log(req.body)

    if(girisTuru == 'kayit'){
        await Kullanici.create({ // Burası tamam çalışıyor
            kullaniciAdi: req.body.kullaniciAdi,
            adSoyad: req.body.adSoyad,
            email: req.body.email,
            sifre: req.body.sifre
        })
        // console.log(req.body)
        res.redirect('/')
    }
    else{
        kullanici = await Kullanici.findOne({email:req.body.email});
        console.log(kullanici)
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
            console.log(kullanici.adSoyad,kullanici.sifre,kullanici.kullaniciAdi);            
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
    console.log(req.body)
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

