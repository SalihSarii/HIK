// const Kaynak = require("../models/Kaynak");




// const items = document.querySelectorAll(".form-check-input");

// let filtDic = {
//   kaynakturu: "",
//   yazar: "",
//   basimYili: "",
//   ciltNo: "",
//   baskiNo: "",
//   dil: "",
// };

// let filts = [];
// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("checked");
//     filts.push(item.value);
//     console.log(filts);
//     console.log(item.name);
    
    
//     switch (item.name) {
//       case "kaynakturu":
//         filtDic["kaynakturu"] = item.value;
//         console.log(filtDic);
//         break;
//       case "yazar":
//         filtDic["yazar"] = item.value;
//         console.log(filtDic);
//         break;
//       case "basimYili":
//         filtDic["basimYili"] = item.value;
//         console.log(filtDic);
//         break;
//       case "ciltNo":
//         filtDic["ciltNo"] = item.value;
//         console.log(filtDic);
//         break;
//       case "baskiNo":
//         filtDic["baskiNo"] = item.value;
//         console.log(filtDic);
//         break;
//       case "dil":
//         filtDic["dil"] = item.value;
//         console.log(filtDic);
//         break;
//       default:
//         break;
//     }
//   });
// });





//console.log(filts)

// var checkboxes = document.querySelectorAll('#checkbox')
// console.log(checkboxes);
// var listArray = [];

// for (var checkbox of checkboxes) {
//   checkbox.addEventListener('click', function () {
//     if (this.checked == true) {
//       //listArray.push()
//       console.log(this.value);
//     } else {
//       console.log("unchecked the box");
//     }
//   });
// }

// var form = document.getElementById("frm-kaynakturu");
// // var listArray = [];
// form.addEventListener("click", function (e) {
//   e.preventDefault();
//   var checkboxes = document.getElementsByName("kaynakturu");

//   for (var checkbox of checkboxes) {
//     if (this.checked) {
//       console.log(this.value);
//     }
//   }
// });
