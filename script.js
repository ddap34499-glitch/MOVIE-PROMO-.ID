/*=========================================================
 MOVIE PROMO.ID
 Version : Final
=========================================================*/

const ADMIN_NUMBER = "62882000478273";

/*=========================================================
 WEBSITE STATUS
=========================================================*/

const STATUS_TITLE = document.getElementById("statusTitle");
const STATUS_DESC = document.getElementById("statusDescription");
const STATUS_INFO = document.getElementById("websiteInformation");
const STATUS_BUTTON = document.getElementById("statusButton");

function updateStatus(){

const hour=new Date().getHours();

if(hour>=6 && hour<14){

STATUS_TITLE.innerHTML="🟡 PRE ORDER";

STATUS_BUTTON.innerHTML="🟡 PRE ORDER";

STATUS_DESC.innerHTML="06.00 - 14.00 khusus untuk pre-order hari besok dan berikutnya.";

STATUS_INFO.innerHTML="Jika ingin memesan jadwal hari ini silakan tunggu pukul 14.00 yaa.";

return;

}

if(hour>=14 && hour<23){

STATUS_TITLE.innerHTML="🟢 OPEN";

STATUS_BUTTON.innerHTML="🟢 OPEN";

STATUS_DESC.innerHTML="Pesanan hari ini & pre-order sedang dibuka.";

STATUS_INFO.innerHTML="Admin sedang online. Silakan lakukan pemesanan.";

return;

}

STATUS_TITLE.innerHTML="🔴 CLOSED";

STATUS_BUTTON.innerHTML="🔴 CLOSED";

STATUS_DESC.innerHTML="Mimin izin closed dulu yaa ^^";

STATUS_INFO.innerHTML="Mimin juga manusia, ayo tidur kalau manusia 😴";

}

updateStatus();

/*=========================================================
 LOADING
=========================================================*/

window.addEventListener("load",()=>{

const loading=document.getElementById("loading");

setTimeout(()=>{

loading.style.opacity="0";

loading.style.pointerEvents="none";

setTimeout(()=>{

loading.remove();

},600);

},1200);

});

/*=========================================================
 QUOTES
=========================================================*/

const QUOTES=[

"Weekend paling enak ya nonton bioskop 🍿",

"Film bagus lebih seru kalau nonton bareng.",

"Hidup terlalu singkat buat skip film bagus.",

"Popcorn boleh habis, momen jangan.",

"Nonton dulu, overthinking nanti.",

"Semua cerita hebat dimulai dari tiket bioskop.",

"Movie time is the best therapy.",

"Jangan cuma lihat trailernya."

];

const quoteElement=document.getElementById("quoteText");

function randomQuote(){

if(!quoteElement)return;

const random=Math.floor(Math.random()*QUOTES.length);

quoteElement.style.opacity=0;

setTimeout(()=>{

quoteElement.innerHTML=QUOTES[random];

quoteElement.style.opacity=1;

},250);

}

randomQuote();

setInterval(randomQuote,7000);

/*=========================================================
 MOVIE DATABASE
=========================================================*/

const MOVIES=[

{

id:1,

title:"Harusnya Horor",

poster:"assets/poster/harusnya-horor.jpg",

genre:"Horor",

rating:8.8,

duration:"107 Menit",

promo:false

},

{

id:2,

title:"Seni Merayu Tuhan",

poster:"assets/poster/seni-merayu-tuhan.jpg",

genre:"Drama",

rating:9.2,

duration:"118 Menit",

promo:true

},

{

id:3,

title:"Paket Santet",

poster:"assets/poster/paket-santet.jpg",

genre:"Horor",

rating:8.5,

duration:"112 Menit",

promo:true

},

{

id:4,

title:"Kado Untuk Ibu",

poster:"assets/poster/kado-untuk-ibu.jpg",

genre:"Drama",

rating:9.0,

duration:"121 Menit",

promo:true

},

{

id:5,

title:"Dan Bandung",

poster:"assets/poster/dan-bandung.jpg",

genre:"Drama",

rating:8.9,

duration:"115 Menit",

promo:true

},

{

id:6,

title:"Baby Udon",

poster:"assets/poster/baby-udon.jpg",

genre:"Comedy",

rating:8.7,

duration:"101 Menit",

promo:true

},

{

id:7,

title:"Laddaland",

poster:"assets/poster/laddaland.jpg",

genre:"Horor",

rating:8.6,

duration:"119 Menit",

promo:true

}

];

/*=========================================================
 VOUCHER
=========================================================*/

const VOUCHERS=[

{

bioskop:"CGV",

harga:"Rp17.500"

},

{

bioskop:"Cinepolis",

harga:"Rp15.500"

}

];

/*=========================================================
 FNB
=========================================================*/

const FNB=[

{

nama:"Popcorn Small Caramel",

harga:"Rp24.000",

gambar:"assets/fnb/popcorn-small.jpg"

},

{

nama:"Paket A",

harga:"Rp31.000",

gambar:"assets/fnb/paket-a.jpg"

},

{

nama:"Paket B",

harga:"Rp31.000",

gambar:"assets/fnb/paket-b.jpg"

},

{

nama:"Paket C",

harga:"Rp31.000",

gambar:"assets/fnb/paket-c.jpg"

}

];

/*=========================================================
 DOM
=========================================================*/

const movieGrid=document.getElementById("movieGrid");

const trendingGrid=document.getElementById("trendingMovies");

const buyOneGrid=document.getElementById("buyOneGetOneGrid");

const voucherGrid=document.getElementById("voucherGrid");

const fnbGrid=document.getElementById("fnbGrid");
/*=========================================================
 RENDER MOVIES
=========================================================*/

function createMovieCard(movie){

return `

<div class="movie-card glass fadeUp">

<div class="movie-poster">

<img src="${movie.poster}" alt="${movie.title}">

<div class="movie-rating">

⭐ ${movie.rating}

</div>

</div>

<div class="movie-detail">

<h3 class="movie-title">

${movie.title}

</h3>

<p class="movie-genre">

${movie.genre}

• ${movie.duration}

</p>

<button

class="movie-button"

onclick="openMovie(${movie.id})">

Lihat Detail

</button>

</div>

</div>

`;

}





function renderMovies(){

if(!movieGrid)return;

movieGrid.innerHTML="";

MOVIES.forEach(movie=>{

movieGrid.innerHTML+=createMovieCard(movie);

});

}





/*=========================================================
 TRENDING
=========================================================*/

function renderTrending(){

if(!trendingGrid)return;

trendingGrid.innerHTML="";

const trending=[...MOVIES]

.sort((a,b)=>b.rating-a.rating)

.slice(0,4);

trending.forEach(movie=>{

trendingGrid.innerHTML+=createMovieCard(movie);

});

}





/*=========================================================
 BUY 1 GET 1
=========================================================*/

function renderBuyOne(){

if(!buyOneGrid)return;

buyOneGrid.innerHTML="";

MOVIES.filter(movie=>movie.promo)

.forEach(movie=>{

buyOneGrid.innerHTML+=createMovieCard(movie);

});

}





/*=========================================================
 VOUCHER
=========================================================*/

function renderVoucher(){

if(!voucherGrid)return;

voucherGrid.innerHTML="";

VOUCHERS.forEach(item=>{

voucherGrid.innerHTML+=`

<div class="voucher-card glass">

<h3 class="voucher-title">

${item.bioskop}

</h3>

<div class="voucher-price">

${item.harga}

</div>

<button

class="voucher-button"

onclick="orderVoucher('${item.bioskop}')">

Pesan Sekarang

</button>

</div>

`;

});

}





/*=========================================================
 FNB
=========================================================*/

function renderFNB(){

if(!fnbGrid)return;

fnbGrid.innerHTML="";

FNB.forEach(item=>{

fnbGrid.innerHTML+=`

<div class="fnb-card glass">

<img

class="fnb-image"

src="${item.gambar}"

alt="${item.nama}">

<h3 class="fnb-title">

${item.nama}

</h3>

<span class="fnb-price">

${item.harga}

</span>

<button

class="fnb-button"

onclick="orderFNB('${item.nama}')">

Pesan

</button>

</div>

`;

});

}





/*=========================================================
 SEARCH MOVIE
=========================================================*/

const search=document.getElementById("searchMovie");

if(search){

search.addEventListener("input",()=>{

const keyword=search.value.toLowerCase();

const cards=document.querySelectorAll(".movie-card");

cards.forEach(card=>{

const title=card

.querySelector(".movie-title")

.innerText

.toLowerCase();

card.style.display=

title.includes(keyword)

?

"block"

:

"none";

});

});

}





/*=========================================================
 BANNER AUTO SLIDE
=========================================================*/

const slides=document.querySelector(".slides");

let currentSlide=0;

function autoBanner(){

if(!slides)return;

const total=slides.children.length;

currentSlide++;

if(currentSlide>=total){

currentSlide=0;

}

slides.style.transform=

`translateX(-${currentSlide*100}%)`;

}

setInterval(autoBanner,5000);





/*=========================================================
 SCROLL PROGRESS
=========================================================*/

const progress=document.getElementById("scrollProgress");

window.addEventListener("scroll",()=>{

const total=

document.documentElement.scrollHeight-

window.innerHeight;

const value=

(window.scrollY/total)*100;

if(progress){

progress.style.width=value+"%";

}

});





/*=========================================================
 SCROLL ANIMATION
=========================================================*/

const observer=

new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

function refreshAnimation(){

document

.querySelectorAll(".fadeUp,.scaleIn")

.forEach(item=>{

observer.observe(item);

});

}





/*=========================================================
 INITIALIZE
=========================================================*/

renderMovies();

renderTrending();

renderBuyOne();

renderVoucher();

renderFNB();

refreshAnimation();
/*=========================================================
 MOVIE POPUP
=========================================================*/

const moviePopup=document.getElementById("moviePopup");
const popupPoster=document.getElementById("popupPoster");
const popupTitle=document.getElementById("popupTitle");
const popupRating=document.getElementById("popupRating");
const popupGenre=document.getElementById("popupGenre");
const popupDuration=document.getElementById("popupDuration");
const popupDescription=document.getElementById("popupDescription");
const popupOrder=document.getElementById("popupOrder");

let selectedMovie=null;

function openMovie(id){

const movie=MOVIES.find(item=>item.id===id);

if(!movie)return;

selectedMovie=movie;

popupPoster.src=movie.poster;

popupTitle.innerHTML=movie.title;

popupRating.innerHTML=movie.rating;

popupGenre.innerHTML=movie.genre;

popupDuration.innerHTML=movie.duration;

popupDescription.innerHTML=movie.description||"Promo tiket bioskop murah.";

moviePopup.style.display="flex";

document.body.style.overflow="hidden";

}

function closeMovie(){

moviePopup.style.display="none";

document.body.style.overflow="";

}

document

.getElementById("closeMoviePopup")

.addEventListener("click",closeMovie);

moviePopup.addEventListener("click",e=>{

if(e.target===moviePopup){

closeMovie();

}

});

/*=========================================================
 ORDER POPUP
=========================================================*/

const orderPopup=document.getElementById("orderPopup");

const movieName=document.getElementById("movieName");

popupOrder.onclick=()=>{

movieName.value=selectedMovie.title;

closeMovie();

orderPopup.style.display="flex";

};

document

.getElementById("closePopup")

.onclick=()=>{

orderPopup.style.display="none";

};

/*=========================================================
 BIOSKOP BUTTON
=========================================================*/

let selectedCinema="";

document

.querySelectorAll(".choose-bioskop")

.forEach(button=>{

button.onclick=()=>{

document

.querySelectorAll(".choose-bioskop")

.forEach(btn=>{

btn.classList.remove("active");

});

button.classList.add("active");

selectedCinema=button.dataset.value;

};

});

/*=========================================================
 DATABASE KOTA
=========================================================*/

const CITY_DATABASE=[

"Jakarta",

"Bogor",

"Depok",

"Tangerang",

"Bekasi",

"Bandung",

"Cimahi",

"Cirebon",

"Semarang",

"Solo",

"Yogyakarta",

"Surabaya",

"Malang",

"Kediri",

"Madiun",

"Jember",

"Denpasar",

"Mataram",

"Pontianak",

"Palembang",

"Lampung",

"Pekanbaru",

"Batam",

"Padang",

"Medan",

"Banda Aceh",

"Makassar",

"Manado",

"Gorontalo",

"Samarinda",

"Balikpapan",

"Banjarmasin"

];

const cityInput=document.getElementById("citySearch");

const cinemaSelect=document.getElementById("cinemaSelect");

cityInput.addEventListener("input",()=>{

const value=cityInput.value.toLowerCase();

cinemaSelect.innerHTML="";

CITY_DATABASE

.filter(city=>

city.toLowerCase().includes(value)

)

.forEach(city=>{

cinemaSelect.innerHTML+=`

<option>

${city}

</option>

`;

});

});

/*=========================================================
 JUMLAH TIKET
=========================================================*/

const ticketInput=document.getElementById("ticketAmount");

ticketInput.addEventListener("input",()=>{

if(ticketInput.value>10){

ticketInput.value=10;

}

if(ticketInput.value<1){

ticketInput.value=1;

}

});

/*=========================================================
 VOUCHER ORDER
=========================================================*/

function orderVoucher(name){

movieName.value=name+" Voucher";

orderPopup.style.display="flex";

}

/*=========================================================
 FNB ORDER
=========================================================*/

function orderFNB(name){

movieName.value=name;

orderPopup.style.display="flex";

                        }
/*=========================================================
 CINEMA DATABASE
=========================================================*/

const CINEMA_DATABASE={

"Jakarta":{

"XXI":[

"Plaza Indonesia XXI",

"Grand Indonesia XXI",

"Epicentrum XXI",

"Kota Kasablanka XXI",

"Pondok Indah XXI",

"Kelapa Gading XXI"

],

"CGV":[

"CGV Grand Indonesia",

"CGV Central Park",

"CGV AEON Mall",

"CGV FX Sudirman"

],

"Cinepolis":[

"Cinepolis Pejaten Village",

"Cinepolis Pluit Village",

"Cinepolis Mangga Dua"

]

},

"Bandung":{

"XXI":[

"Cihampelas Walk XXI",

"Paris Van Java XXI",

"BTC XXI"

],

"CGV":[

"CGV Paris Van Java",

"CGV Miko Mall"

],

"Cinepolis":[

"Cinepolis Bandung Indah Plaza"

]

},

"Surabaya":{

"XXI":[

"Tunjungan XXI",

"Galaxy XXI",

"Pakuwon XXI"

],

"CGV":[

"CGV Marvell City",

"CGV BG Junction"

],

"Cinepolis":[

"Cinepolis Ciputra World"

]

},

"Yogyakarta":{

"XXI":[

"Ambarukmo XXI",

"Jogja City XXI"

],

"CGV":[

"CGV Jwalk"

],

"Cinepolis":[

"Cinepolis Lippo Plaza"

]

}

};

/*=========================================================
 CITY SEARCH
=========================================================*/

const cityInput=document.getElementById("citySearch");

const cinemaSelect=document.getElementById("cinemaSelect");

function loadCinema(){

const city=cityInput.value.trim();

cinemaSelect.innerHTML="";

if(!selectedCinema)return;

if(!CINEMA_DATABASE[city]){

cinemaSelect.innerHTML=

"<option>Kota tidak ditemukan</option>";

return;

}

const list=

CINEMA_DATABASE[city][selectedCinema];

if(!list){

cinemaSelect.innerHTML=

"<option>Tidak tersedia</option>";

return;

}

list.forEach(item=>{

const option=document.createElement("option");

option.value=item;

option.innerHTML=item;

cinemaSelect.appendChild(option);

});

}

cityInput.addEventListener("change",loadCinema);

document

.querySelectorAll(".choose-bioskop")

.forEach(btn=>{

btn.addEventListener("click",()=>{

selectedCinema=btn.dataset.value;

loadCinema();

});

});

/*=========================================================
 VALIDATION
=========================================================*/

const form=document.getElementById("orderForm");

form.addEventListener("submit",submitOrder);

function submitOrder(e){

e.preventDefault();

if(selectedCinema===""){

showToast("Pilih bioskop terlebih dahulu");

return;

}

if(cinemaSelect.value===""){

showToast("Pilih kota");

return;

}

sendWhatsapp();

}

/*=========================================================
 TOAST
=========================================================*/

function showToast(text){

const toast=document.getElementById("toast");

const toastText=document.getElementById("toastText");

toastText.innerHTML=text;

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2500);

}

/*=========================================================
 ESC CLOSE
=========================================================*/

document.addEventListener("keydown",e=>{

if(e.key==="Escape"){

moviePopup.style.display="none";

orderPopup.style.display="none";

}

});

/*=========================================================
 CLICK OUTSIDE
=========================================================*/

window.addEventListener("click",e=>{

if(e.target===orderPopup){

orderPopup.style.display="none";
  /*=========================================================
 ORDER FORM & WHATSAPP
=========================================================*/

const orderForm=document.getElementById("orderForm");

const inputMovie=document.getElementById("movieName");
const inputDate=document.getElementById("watchDate");
const inputTime=document.getElementById("watchTime");
const inputSeat=document.getElementById("seatNumber");
const inputPrice=document.getElementById("normalPrice");
const inputAmount=document.getElementById("ticketAmount");
const inputEmail=document.getElementById("email");
const inputWhatsapp=document.getElementById("customerWhatsapp");

function sendWhatsapp(){

const movie=inputMovie.value.trim();
const city=cityInput.value.trim();
const cinema=cinemaSelect.value;
const date=inputDate.value;
const time=inputTime.value;
const seat=inputSeat.value.trim();
const price=inputPrice.value.trim();
const amount=inputAmount.value;
const email=inputEmail.value.trim();
const phone=inputWhatsapp.value.trim();

if(movie==""){
showToast("Nama film belum ada");
return;
}

if(city==""){
showToast("Pilih kota");
return;
}

if(cinema==""){
showToast("Pilih bioskop");
return;
}

if(date==""){
showToast("Pilih tanggal");
return;
}

if(time==""){
showToast("Masukkan jam tayang");
return;
}

if(seat==""){
showToast("Masukkan kursi");
return;
}

if(price==""){
showToast("Masukkan harga normal");
return;
}

if(email==""){
showToast("Masukkan Email");
return;
}

if(phone==""){
showToast("Masukkan WhatsApp");
return;
}

const pesan=

`🎬 *ORDER MOVIE PROMO.ID*

━━━━━━━━━━━━━━

🎥 Film : ${movie}

🏢 Bioskop : ${selectedCinema}

📍 Kota : ${city}

🏬 Lokasi :
${cinema}

📅 Tanggal :
${date}

🕒 Jam :
${time}

💺 Kursi :
${seat}

🎟 Jumlah :
${amount} Tiket

💰 Harga Normal :
Rp ${price}

📧 Email :
${email}

📱 WhatsApp :
${phone}

━━━━━━━━━━━━━━

Halo Admin,
Saya ingin melakukan pemesanan sesuai data di atas.`;

const url=

`https://wa.me/${ADMIN_NUMBER}?text=${encodeURIComponent(pesan)}`;

window.open(url,"_blank");

orderPopup.style.display="none";

showToast("Mengalihkan ke WhatsApp...");

}

/*=========================================================
 LIMIT TIKET
=========================================================*/

inputAmount.addEventListener("input",()=>{

let value=parseInt(inputAmount.value);

if(isNaN(value)) value=1;

if(value<1)value=1;

if(value>10)value=10;

inputAmount.value=value;

});

/*=========================================================
 AUTO TODAY
=========================================================*/

const today=new Date();

const yyyy=today.getFullYear();

const mm=String(today.getMonth()+1).padStart(2,"0");

const dd=String(today.getDate()).padStart(2,"0");

if(inputDate){

inputDate.min=`${yyyy}-${mm}-${dd}`;

}

/*=========================================================
 FORMAT HARGA
=========================================================*/

inputPrice.addEventListener("input",()=>{

let angka=inputPrice.value.replace(/\D/g,'');

inputPrice.value=angka;

});

/*=========================================================
 ENTER SUBMIT
=========================================================*/

orderForm.addEventListener("keypress",e=>{

if(e.key==="Enter"){

e.preventDefault();

sendWhatsapp();

}

});

/*=========================================================
 BUTTON ORDER
=========================================================*/

const submitButton=document.getElementById("submitOrder");

if(submitButton){

submitButton.onclick=sendWhatsapp;
  /*=========================================================
 PROMO BANNER POPUP
=========================================================*/

const bannerData = [

{
title:"🎬 BUY 1 GET 1",
subtitle:"Beli 1 tiket GRATIS 1 tiket",
desc:"Berlaku untuk film yang memiliki label BUY 1 GET 1. Pilih film → isi formulir → kirim ke WhatsApp Admin."
},

{
title:"🍿 PROMO FNB",
subtitle:"Popcorn & Paket Hemat",
desc:"Khusus CGV. Pilih menu FNB, isi kota, bioskop, jumlah, lalu kirim pesanan."
},

{
title:"🎟 Voucher CGV",
subtitle:"Voucher mulai Rp17.500",
desc:"Voucher berlaku sesuai syarat promo. Setelah order admin akan memproses pesanan."
},

{
title:"🎟 Voucher Cinepolis",
subtitle:"Voucher mulai Rp15.500",
desc:"Voucher digital, proses cepat setelah pembayaran."
}

];

let currentBanner = 0;

const bannerTitle = document.getElementById("bannerTitle");
const bannerSubtitle = document.getElementById("bannerSubtitle");
const bannerDescription = document.getElementById("bannerDescription");
const bannerPopup = document.getElementById("bannerPopup");

function nextPromoBanner(){

currentBanner++;

if(currentBanner>=bannerData.length){

currentBanner=0;

}

renderBanner();

}

function renderBanner(){

if(!bannerTitle) return;

bannerTitle.innerHTML = bannerData[currentBanner].title;

bannerSubtitle.innerHTML = bannerData[currentBanner].subtitle;

bannerDescription.innerHTML = bannerData[currentBanner].desc;

}

setInterval(nextPromoBanner,5000);

renderBanner();

/*=========================================================
 OPEN PROMO POPUP
=========================================================*/

document.querySelectorAll(".promo-banner").forEach((item,index)=>{

item.onclick=()=>{

currentBanner=index;

renderBanner();

bannerPopup.style.display="flex";

};

});

const closeBanner=document.getElementById("closeBanner");

if(closeBanner){

closeBanner.onclick=()=>{

bannerPopup.style.display="none";

};

}

/*=========================================================
 LOCAL STORAGE FAVORITE
=========================================================*/

let favorites=JSON.parse(localStorage.getItem("favorites"))||[];

function toggleFavorite(id){

if(favorites.includes(id)){

favorites=favorites.filter(x=>x!==id);

}else{

favorites.push(id);

}

localStorage.setItem(

"favorites",

JSON.stringify(favorites)

);

showToast("Favorite diperbarui");

}

/*=========================================================
 RECENTLY VIEWED
=========================================================*/

let recent=JSON.parse(localStorage.getItem("recent"))||[];

function saveRecent(movie){

recent=recent.filter(item=>item.id!==movie.id);

recent.unshift(movie);

if(recent.length>8){

recent.pop();

}

localStorage.setItem(

"recent",

JSON.stringify(recent)

);

}

/*=========================================================
 UPDATE OPEN MOVIE
=========================================================*/

const oldOpenMovie=openMovie;

openMovie=function(id){

oldOpenMovie(id);

const movie=MOVIES.find(x=>x.id===id);

if(movie){

saveRecent(movie);

}

}

/*=========================================================
 NAVBAR EFFECT
=========================================================*/

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.padding="12px 20px";

navbar.style.borderRadius="24px";

navbar.style.background="rgba(10,15,25,.82)";

}else{

navbar.style.padding="16px 24px";

navbar.style.borderRadius="999px";

navbar.style.background="rgba(255,255,255,.08)";

}

});

/*=========================================================
 BACK TO TOP
=========================================================*/

const backTop=document.getElementById("backTop");

if(backTop){

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backTop.style.opacity="1";

backTop.style.pointerEvents="all";

}else{

backTop.style.opacity="0";

backTop.style.pointerEvents="none";

}

});

backTop.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

/*=========================================================
 SAVE FORM
=========================================================*/

const allInputs=document.querySelectorAll("input,select");

allInputs.forEach(item=>{

item.addEventListener("change",()=>{

localStorage.setItem(

item.id,

item.value

);

});

const saved=localStorage.getItem(item.id);

if(saved){

item.value=saved;
  

}

});
  

}

}

});
/*=========================================================
 MOVIE PROMO.ID
 FINAL PART 7
=========================================================*/

/*==============================
 CLICK EFFECT
==============================*/

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.animate([

{

transform:"scale(1)"

},

{

transform:"scale(.93)"

},

{

transform:"scale(1)"

}

],{

duration:180

});

});

});

/*==============================
 HOVER GLOW CARD
==============================*/

document.querySelectorAll(

".movie-card,.voucher-card,.fnb-card"

).forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(255,255,255,.18),
rgba(255,255,255,.06) 55%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="";

});

});

/*==============================
 RANDOM QUOTE
==============================*/

const quoteList=[

"🍿 Nikmati film favoritmu dengan promo terbaik.",

"🎬 Nonton hemat bukan berarti murahan.",

"✨ Movie night is always a good idea.",

"❤️ Setiap tiket menyimpan cerita baru.",

"🎥 Jangan lupa ajak orang tersayang.",

"🌙 Film bagus selalu punya kenangan.",

"🔥 Promo hari ini belum tentu ada besok.",

"⭐ Terima kasih sudah memakai Movie Promo.ID"

];

const quoteBox=document.getElementById("quoteText");

if(quoteBox){

setInterval(()=>{

const random=

Math.floor(Math.random()*quoteList.length);

quoteBox.innerHTML=

quoteList[random];

},8000);

}

/*==============================
 NAVBAR BLUR
==============================*/

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(!nav)return;

if(window.scrollY>40){

nav.style.backdropFilter="blur(30px)";

nav.style.background="rgba(15,20,35,.72)";

}else{

nav.style.background="rgba(255,255,255,.08)";

}

});

/*==============================
 FLOATING WA ANIMATION
==============================*/

const wa=document.getElementById("floatingWA");

if(wa){

setInterval(()=>{

wa.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.12)"

},

{

transform:"scale(1)"

}

],{

duration:900

});

},5000);

}

/*==============================
 SUCCESS MESSAGE
==============================*/

function successAnimation(){

showToast(

"🎉 Mengalihkan ke WhatsApp..."

);

}

/*==============================
 SEND WA UPDATE
==============================*/

const oldSend=sendWhatsapp;

sendWhatsapp=function(){

successAnimation();

setTimeout(()=>{

oldSend();

},700);

};

/*==============================
 LOGO EASTER EGG
==============================*/

const logo=document.querySelector(".logo");

let tap=0;

if(logo){

logo.onclick=()=>{

tap++;

if(tap>=7){

tap=0;

showToast("🍿 Terima kasih sudah menggunakan MOVIE PROMO.ID ❤️");

}

};

}

/*==============================
 DISABLE DRAG IMAGE
==============================*/

document.querySelectorAll("img")

.forEach(img=>{

img.setAttribute("draggable","false");

});

/*==============================
 DISABLE RIGHT CLICK
==============================*/

document.addEventListener(

"contextmenu",

e=>{

e.preventDefault();

showToast("⚠️ Klik kanan dinonaktifkan.");

}

);

/*==============================
 BLOCK F12
==============================*/

document.addEventListener(

"keydown",

e=>{

if(

e.key==="F12"||

(e.ctrlKey&&e.shiftKey&&e.key==="I")||

(e.ctrlKey&&e.shiftKey&&e.key==="J")||

(e.ctrlKey&&e.key==="u")||

(e.ctrlKey&&e.key==="U")

){

e.preventDefault();

showToast("⚠️ Developer mode diblokir.");

}

});

/*==============================
 CONSOLE
==============================*/

console.clear();

console.log(

"%cMOVIE PROMO.ID",

"font-size:26px;color:#2EC5FF;font-weight:bold"

);

console.log(

"%cWebsite dibuat khusus oleh Kiki.",

"font-size:15px;color:white"

);

/*==============================
 FINISH
==============================*/

console.log("System Ready ✅");
