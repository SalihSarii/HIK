const mongoose = require('mongoose')
const schema = mongoose.Schema;

const KaynakSchema = new Schema({
    img:String,
    baslik:String,
    yazar:String,
    kaynakturu:String,
    dil:String,
    basimYili:String,    
    ciltNo:String,
    baskiNo:String,
    olusturulmaTarihi:{
        type:Date,
        default:Date.now()
    },
})

const Kaynak = mongoose.model('Kaynak',KaynakSchema);

module.exports = Kaynak