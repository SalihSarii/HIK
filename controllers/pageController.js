const { query } = require("express");
const Kullanici = require("../models/Kullanici");

exports.getIndexPage = (req,res)=>{
    var girisYapildi="2";
    res.status(200).render('index',{girisYapildi});
};

exports.getKaynakAramaPage = (req,res)=>{
    res.status(200).render('kaynakArama');
};

exports.getKaynakTalebiPage = (req,res)=>{
    res.status(200).render('kaynakTalebi2');
};

exports.getYardimPage = (req,res)=>{
    res.status(200).render('yardim2');
};

exports.getProfilPage = async (req,res)=>{    
    kullanici = await Kullanici.findOne({email: req.query.email})    
    res.status(200).render('profil',{kullanici});
};