const mongoose = require('mongoose')
const schema = mongoose.Schema;

const TicketSchema = new schema({    
    email:String,
    konu:String,
    sorun:String,
    olusturulmaTarihi:{
        type:Date,
        default:Date.now()
    },
})

const Ticket = mongoose.model('Ticket',TicketSchema);

module.exports = Ticket