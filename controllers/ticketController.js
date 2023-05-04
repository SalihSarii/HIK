const Ticket = require('../models/Ticket')
exports.addTicket = async(req,res)=>{
    await Ticket.create(req.body);
    res.redirect('/')
}