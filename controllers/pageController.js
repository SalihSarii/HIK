exports.getIndexPage = (req,res)=>{
    res.status(200).render('index');
};

exports.getKaynakAramaPage = (req,res)=>{
    res.status(200).render('kaynakArama');
};

exports.getKaynakTalebiPage = (req,res)=>{
    res.status(200).render('kaynakTalebi');
};

exports.getYardimPage = (req,res)=>{
    res.status(200).render('yardim2');
};

exports.getProfilPage = (req,res)=>{
    res.status(200).render('profil');
};