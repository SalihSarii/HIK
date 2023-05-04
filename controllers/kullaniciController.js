// const { query } = require("express");
const Kullanici = require("../models/Kullanici");

exports.kullaniciKayit = async (req,res)=>{
    await Kullanici.create(req.body)
    console.log(req.body)
    res.redirect('/')
};