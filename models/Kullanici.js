const mongoose = require('mongoose')
const schema = mongoose.Schema;

const KullaniciSchema = new schema({
    adSoyad:String,
    email:String,
    kullaniciAdi:String,
    sifre:String,
    olusturulmaTarihi:{
        type:Date,
        default:Date.now()
    },
})

const Kullanici = mongoose.model('Kullanici',KullaniciSchema);

module.exports = Kullanici