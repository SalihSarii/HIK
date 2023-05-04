const express = require('express');
const mongoose = require('mongoose');
const fileupload = require('express-fileupload')
const  methodOverride = require('method-override')
const ejs = require("ejs")
const path = require("path");
const fs = require('fs');
const pageController = require('./controllers/pageController');
const kaynakController = require('./controllers/kaynakController');
const talepController = require('./controllers/talepController');
const ticketController = require('./controllers/ticketController')
const kullaniciController = require('./controllers/kullaniciController')

const app = express();

//Connect DB
mongoose.connect('mongodb://127.0.0.1/hik-test-db');

//Template Engine
app.set("view engine","ejs");

//MIDDLEWARES
app.use(express.static("public"));
app.use(fileupload());
app.use(methodOverride('_method',{
  methods: ['POST','GET']
})) // Put ve DELETE desteklemeyen sunucularda POST'un ikisini simule etmesi için
//--post ile gönderilen verileri yakalamak için aşağıdaki iki middleware'i kullanıyoruz
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//ROUTES
 //app.get('/',pageController.getIndexPage);
app.get('/',kaynakController.getAllKaynakIndex);
app.get('/kaynakArama',kaynakController.getAllKaynak);
app.get('/kaynakArama/:kaynakturu',kaynakController.getFiltreKaynak)
//app.get('/kaynakArama:baslik',kaynakController.getKaynak);
app.get('/kaynakTalebi', pageController.getKaynakTalebiPage);
app.get('/yardim', pageController.getYardimPage);
app.get('/profil', pageController.getProfilPage);

app.post('/kullaniciKayit', kullaniciController.kullaniciKayit)
app.post('/kaynakTalep', talepController.addKaynakTalep)
app.post('/ticket',ticketController.addTicket)





const port = 3000;
app.listen(port, () => {  
  console.log(`Server ${port} portunda calistirildi.`);
});