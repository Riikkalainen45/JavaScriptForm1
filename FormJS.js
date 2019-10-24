
//treenimäärä min mukaan annettu arvio teksti näkyviin
function myValuation(){
  var text;
  var yhm = parseInt(document.getElementById("yhm").value);
  if (yhm< 180){
    text="Ensiviikolla tehokkaammin!";
  }else if(yhm> 180 && yhm<420){
    text="Hyvä viikko, jatka samaan malliin!";
  }else if(yhm> 420){
    text = "Aika rankka viikko, muista levätä!";
}
  document.getElementById("text1").innerHTML = text;
}
//CheckBox tekstit näkyviin onclick
function myFunction10() {
  var checkBox = document.getElementById("hyvä");
  var text = document.getElementById("kommentti");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }

  var checkBox = document.getElementById("ok");
  var text = document.getElementById("arvio2");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }

  var checkBox = document.getElementById("voi");
  var text = document.getElementById("arvio3");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }

  var checkBox = document.getElementById("huono");
  var text = document.getElementById("arvio4");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}
/*
//  <span class="checkmark"></span>
*/
//Ihan säälittävää, mutta käsin jouduin tekemään... for silmukka ei onnistunut millään...
function myFunction1(){
  var maj =parseInt(document.getElementById("maj").value);
  var map =parseInt(document.getElementById("map").value);
  var mau =parseInt(document.getElementById("mau").value);
  var mas =parseInt(document.getElementById("mas").value);

  var may = document.getElementById("may");
   may.value = maj + map + mau + mas;

   var tij =parseInt(document.getElementById("tij").value);
   var tip =parseInt(document.getElementById("tip").value);
   var tiu =parseInt(document.getElementById("tiu").value);
   var tis =parseInt(document.getElementById("tis").value);

   var tiy = document.getElementById("tiy");
    tiy.value = tij + tip + tiu + tis;

    var kej =parseInt(document.getElementById("kej").value);
    var kep =parseInt(document.getElementById("kep").value);
    var keu =parseInt(document.getElementById("keu").value);
    var kes =parseInt(document.getElementById("kes").value);

    var key = document.getElementById("key");
     key.value = kej + kep + keu + kes;

     var toj =parseInt(document.getElementById("toj").value);
     var top =parseInt(document.getElementById("top").value);
     var tou =parseInt(document.getElementById("tou").value);
     var tos =parseInt(document.getElementById("tos").value);

     var toy = document.getElementById("toy");
      toy.value = toj + top + tou + tos;

      var pej =parseInt(document.getElementById("pej").value);
      var pep =parseInt(document.getElementById("pep").value);
      var peu =parseInt(document.getElementById("peu").value);
      var pes =parseInt(document.getElementById("pes").value);

      var pey = document.getElementById("pey");
       pey.value = pej + pep + peu + pes;

       var laj =parseInt(document.getElementById("laj").value);
       var lap =parseInt(document.getElementById("lap").value);
       var lau =parseInt(document.getElementById("lau").value);
       var las =parseInt(document.getElementById("las").value);

       var lay = document.getElementById("lay");
        lay.value = laj + lap + lau + las;

        var suj =parseInt(document.getElementById("suj").value);
        var sup =parseInt(document.getElementById("sup").value);
        var suu =parseInt(document.getElementById("suu").value);
        var sus =parseInt(document.getElementById("sus").value);

        var suy = document.getElementById("suy");
         suy.value = suj + sup + suu + sus;

         var maj =parseInt(document.getElementById("maj").value);
         var tij =parseInt(document.getElementById("tij").value);
         var kej =parseInt(document.getElementById("kej").value);
         var toj =parseInt(document.getElementById("toj").value);
         var pej =parseInt(document.getElementById("pej").value);
         var laj =parseInt(document.getElementById("laj").value);
         var suj =parseInt(document.getElementById("suj").value);

         var jym = document.getElementById("jym");
          jym.value = maj+tij+kej+toj+pej+laj+suj;

          var map =parseInt(document.getElementById("map").value);
          var tip =parseInt(document.getElementById("tip").value);
          var kep =parseInt(document.getElementById("kep").value);
          var top =parseInt(document.getElementById("top").value);
          var pep =parseInt(document.getElementById("pep").value);
          var lap =parseInt(document.getElementById("lap").value);
          var sup =parseInt(document.getElementById("sup").value);

          var pym = document.getElementById("pym");
           pym.value = map+tip+kep+top+pep+lap+sup;

           var mau =parseInt(document.getElementById("mau").value);
           var tiu =parseInt(document.getElementById("tiu").value);
           var keu =parseInt(document.getElementById("keu").value);
           var tou =parseInt(document.getElementById("tou").value);
           var peu =parseInt(document.getElementById("peu").value);
           var lau =parseInt(document.getElementById("lau").value);
           var suu =parseInt(document.getElementById("suu").value);

           var uym = document.getElementById("uym");
            uym.value = mau+tiu+keu+tou+peu+lau+suu;

       }

//tyhjentää kentät
function myFunction2(){
  document.getElementById("treForm").reset();
}

//Tyhjentää alemman taulukon kentät
function myFunction4(){
  document.getElementById("treeniSum").reset();
}
//Yhteenveto teksti muuttaa väriä, kokeilin miten toimii
  document.getElementById("hiiri").addEventListener("mouseover", mouseOver);
  document.getElementById("hiiri").addEventListener("mouseout", mouseOut);
  function mouseOver() {
  document.getElementById("hiiri").style.color = "red";
}
function mouseOut() {
  document.getElementById("hiiri").style.color = "white";
}
function mouseUp() {
  document.getElementById("hiiri").style.color = "yellow";
}

//Alemman taulukon ynnäilyt
function myFunction5(){
    var jym =parseInt(document.getElementById("jym").value);
    var pym =parseInt(document.getElementById("pym").value);
    var uym =parseInt(document.getElementById("uym").value);

  var yhm = document.getElementById("yhm");
   yhm.value = jym + pym + uym;

   var jyh = document.getElementById("jyh");
   jyh.value = jym/60;

   var pyh = document.getElementById("pyh");
   pyh.value = pym/60;

   var uyh = document.getElementById("uyh");
   uyh.value = uym/60;

}
//TÄSSÄ NYT TÄMÄ MINUN VALIDOINTI OSUUS- JOS helposti keksit miten sen loopin saa toimimaan , olisi kiva tietää!
//Onhan se helppoa löytää ja valitoida yksi tai kaksi syötettä...
//Tämä kyllä toimii... Siis tein nyt vaan ma juoksun ja ti juoksun osalta validoinnin,
//onneksi myös Javascriptin oma "NaN" tulee näkyviin, jos outo syöte...

function validateTable(){
  var x, text;
  x = parseInt(document.getElementById("maj").value);
  if(isNaN(x) || x < 0 || x > 1440){
    text = "väärin syötetty arvo";
    document.getElementById("maj").style.borderColor="red";
  }else{
    text = "Check OK";
  }
  document.getElementById("tulos").innerHTML = text;

  x = parseInt(document.getElementById("tij").value);
  if(isNaN(x) || x < 0 || x > 1440){
    text = "väärin syötetty arvo";
    document.getElementById("tij").style.borderColor="red";
  }else{
    text = "Check OK";
  }
  document.getElementById("tulos").innerHTML = text;
}

/*
//NÄITÄ KAIKKIA KEINOJA KOKEILIN, ETTÄ YRITETTY ON...

//Yritys saada arvot table id:n avulla... löysi ma juoksun arvon vain?
//jossain vaiheessa kokeiluja...

function validateTable(){
var sumVal =0;
var table =document.getElementById("table"), sumVal=0;
    for(var i = 1; i < table.rows.length; i++){

        sumVal += parseInt(table.rows[i].cells[j].innerHTML);
        document.getElementById("val").innerHTML = "Sum Value = "+ sumVal;
      }
}
}
//Yritelmiä löytää arvot tagNames ('input ')-avulla...
//Suorahko lainaus opettajan esimerkistä... yritin 2 for loopilla myös
//Ei löytynyt...

function validateTable(){
var sumVal=0;
var kaikkisolut = document.getElementsByTagName('input').lenght;
    for(var i = 0; i < kaikkisolut; i++){
      var kenttä = document.getElementsByTagName('input');
      sumVal= sumVal + parseInt( kenttä[ solut[i] ].value);

        document.getElementById("val").innerHTML = "Sum Value = "+ sumVal;
}
}
//Hyviä validointi juttuja talteen...
if(x value == null)
}else if (typeof x == 'number'){
if   if (form.tre.value == null ||
      form.tre.value == undefined ||
      form.tre.value.length == 0)

//Kokeilu While loopilla...
function validateTable(){
var form = document.getElementsByTagName('input');
var x =parseInt(document.getElementsByTagName('input').value);
var i = 1;
var j = 1;

while(i < form.rows.length && j < form.cells.length){
  x += parseFloat(form.rows[i].cells[j].innerHTML)
  i++;
  j++;
  			if(x value == null){
  				x = 0;
  			}else if (typeof x != 'number'){
  				alert('Ei ole numero!')
  				return false;
  			}
  			return true;
	}
}
//Yritys päästä arvoihin käsiksi id:n avulla...
function myFunction3(){
  var arvo = document.getElementById("treeniForm").value;
  for(var i =0; i<treeniForm.length; i++){

  if (x <= 0 || x > 24){
    arvo = 0;
  }elseif(isNaN(arvo)){
    alert("Syötä numero, treenimäärä minuutteina!");
  }
  }
}

//Ajattelin, jos hahmottaisin solut paremmin...
  var treeni =
  ["maj","map","mau","mas",
  "tij","tip","tiu","tis",
  "kej","kep","keu","kes",
  "toj","top","tou","tos",
  "pej","pep","peu","pes",
  "laj","lap","lau","las",
  "suj","sup","suu","sus"];

function validateTable1(){
document.getElementById('treForm').innerHTML ="";
var newTable = document.getElementById('treForm');
for(i=1; i< newTable.rows.length; i++){

var objCells = newTable.rows.item(i).cells;

for(var j = 0; j< objCells.length; j++){
info.innetHTML = info.innerHTML +''+objCells.intem(j).innerHTML;
}
info.innerHTML = info.innerHTML + '<br/>';
}
//Jossain neuvottiin että arvot löytyisivät näin
//id nimet vaidettaisiin joukolta samaksi...
function validForm1(form){
  var x = document.forms["tresy"]["tre"].value;

//EI VOI SANOA, ETTEN OLISI YRITTÄNYT!
//Näinkin sen muka voisi tehdä?
  document.querySelector('.harjoitukset').addEventListener('submit',(event) =>){
    event.preventDefault();
    var x =(event.target.maj.value);
    if(x.value != 'number' ){
      alert('Ei ole numero!');
    }
  })

*/
