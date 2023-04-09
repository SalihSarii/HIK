const mongoose = require('mongoose')
const schema = mongoose.Schema;

const TalepSchema = new schema({    
    baslik:String,
    yazar:String,
    kaynakturu:String,
    ciltNo:String,
    baskiNo:String,    
    olusturulmaTarihi:{
        type:Date,
        default:Date.now()
    },
})

const Talep = mongoose.model('Talep',TalepSchema);

module.exports = Talep