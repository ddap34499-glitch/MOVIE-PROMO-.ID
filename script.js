/* ==========================================
   UNIVERSITY OF MOWTOWN
   MAIN SYSTEM
========================================== */


/* =========================
   FACULTIES
========================= */

const faculties = [
"Fakultas Kedokteran",
"Fakultas Kedokteran Gigi",
"Fakultas Keperawatan",
"Fakultas Kesehatan Masyarakat",
"Fakultas Farmasi",
"Fakultas Psikologi",
"Fakultas Hukum",
"Fakultas Ekonomi dan Bisnis",
"Fakultas Ilmu Sosial dan Ilmu Politik",
"Fakultas Ilmu Komunikasi",
"Fakultas Pendidikan",
"Fakultas Bahasa dan Sastra",
"Fakultas Teknik",
"Fakultas Ilmu Komputer",
"Fakultas Matematika dan Sains",
"Fakultas Pertanian",
"Fakultas Seni dan Desain",
"Fakultas Ilmu Keolahragaan"
];


/* =========================
   FACULTY SELECT
========================= */

const facultyChoice =
document.getElementById("facultyChoice");

faculties.forEach(f=>{
 const option=document.createElement("option");
 option.value=f;
 option.textContent=f;
 facultyChoice.appendChild(option);
});


/* =========================
   DOSEN
========================= */

const firstNames=[
"Aditya","Nadine","Farrel","Armand","Citra",
"Raka","Keisha","Rizky","Alessandra","Bagas",
"Rania","Galih","Naufal","Salsabila","Reza",
"Anindya","Dimas","Fauzan","Putri","Rafi"
];

const lastNames=[
"Pranata","Suryana","Adinata","Rahardian",
"Maharani","Wijaya","Mahendra","Ramadhan",
"Prameswari","Wicaksana","Adhitama","Kirana",
"Mahardika","Nusantara","Permana"
];

const fields=[
"Kedokteran",
"Ekonomi",
"Hukum",
"Komunikasi",
"Teknik",
"Ilmu Komputer",
"Matematika",
"Biologi",
"Psikologi",
"Seni dan Desain",
"Pendidikan",
"Pertanian"
];

let facultyData=[];

facultyData.push({
 name:"Daffi Kautsar",
 title:"Prof. Dr.",
 faculty:"University Rectorate",
 field:"Academic Leadership",
 rector:true
});

for(let i=1;i<497;i++){

 facultyData.push({

  name:
  firstNames[i%firstNames.length]+" "+
  lastNames[(i*3)%lastNames.length]+" "+
  String.fromCharCode(65+(i%26))+".",

  title:
  i%7===0?"Prof.":
  i%3===0?"Dr.":"Drs.",

  faculty:
  faculties[i%faculties.length],

  field:
  fields[i%fields.length]

 });

}


function renderFaculty(){

 const q=
 document.getElementById("facultySearch")
 .value.toLowerCase().trim();

 const results=facultyData.filter(d=>
 !q ||
 `${d.name} ${d.faculty} ${d.field}`
 .toLowerCase()
 .includes(q)
 );

 document.getElementById("facultyList").innerHTML=
 results.map(d=>`

 <div class="person ${d.rector?"rectorCard":""}">

 <strong>
 ${d.title} ${d.name}
 </strong>

 <small>${d.faculty}</small>
 <small>Bidang: ${d.field}</small>

 ${d.rector ?
 `<small><b>RECTOR & CHANCELLOR</b></small>`:""}

 </div>

 `).join("");

}

renderFaculty();

document
.getElementById("facultySearch")
.addEventListener("input",renderFaculty);


/* ==========================================
   SISTEM REKOMENDASI
========================================== */

const recommendationRules=[

{
 keywords:[
  "gambar","menggambar","lukis","melukis",
  "desain","desainer","logo","poster",
  "ilustrasi","visual","fotografi","foto"
 ],
 faculty:"Fakultas Seni dan Desain"
},

{
 keywords:[
  "coding","programming","program",
  "komputer","website","web","aplikasi",
  "teknologi","software","game","robot"
 ],
 faculty:"Fakultas Ilmu Komputer"
},

{
 keywords:[
  "dokter","medis","kesehatan","pasien",
  "rumah sakit","obat","penyakit","anatomi"
 ],
 faculty:"Fakultas Kedokteran"
},

{
 keywords:[
  "gigi","merawat gigi","dokter gigi"
 ],
 faculty:"Fakultas Kedokteran Gigi"
},

{
 keywords:[
  "perawat","merawat pasien","keperawatan"
 ],
 faculty:"Fakultas Keperawatan"
},

{
 keywords:[
  "farmasi","obat","kimia obat"
 ],
 faculty:"Fakultas Farmasi"
},

{
 keywords:[
  "psikologi","psikolog","perasaan",
  "perilaku","mendengar cerita","mental"
 ],
 faculty:"Fakultas Psikologi"
},

{
 keywords:[
  "hukum","pengacara","keadilan",
  "peraturan","undang-undang","advokat"
 ],
 faculty:"Fakultas Hukum"
},

{
 keywords:[
  "bisnis","jualan","usaha","ekonomi",
  "keuangan","dagang","marketing",
  "investasi"
 ],
 faculty:"Fakultas Ekonomi dan Bisnis"
},

{
 keywords:[
  "politik","negara","pemerintah",
  "masyarakat","organisasi"
 ],
 faculty:"Fakultas Ilmu Sosial dan Ilmu Politik"
},

{
 keywords:[
  "komunikasi","presentasi","bicara",
  "public speaking","jurnalistik","berita"
 ],
 faculty:"Fakultas Ilmu Komunikasi"
},

{
 keywords:[
  "mengajar","guru","anak-anak",
  "pendidikan","belajar","mengajar"
 ],
 faculty:"Fakultas Pendidikan"
},

{
 keywords:[
  "bahasa","menulis","novel","puisi",
  "sastra","cerita","menerjemahkan"
 ],
 faculty:"Fakultas Bahasa dan Sastra"
},

{
 keywords:[
  "teknik","mesin","bangunan","robot",
  "elektronik","mekanik"
 ],
 faculty:"Fakultas Teknik"
},

{
 keywords:[
  "matematika","angka","hitung",
  "rumus","fisika","kimia"
 ],
 faculty:"Fakultas Matematika dan Sains"
},

{
 keywords:[
  "tanaman","tani","pertanian","kebun",
  "hewan","peternakan","agriculture"
 ],
 faculty:"Fakultas Pertanian"
},

{
 keywords:[
  "olahraga","atlet","lari","basket",
  "sepakbola","berenang","fitness"
 ],
 faculty:"Fakultas Ilmu Keolahragaan"
}

];


function recommend(e){

 e.preventDefault();

 const text=
 document.getElementById("strength")
 .value
 .toLowerCase();

 let result=null;
 let matched=[];

 for(const rule of recommendationRules){

  for(const keyword of rule.keywords){

   if(text.includes(keyword)){
    matched.push({
     faculty:rule.faculty,
     keyword
    });
    break;
   }

  }

 }

 /*
   kalau beberapa minat terdeteksi,
   sistem mengambil fakultas dengan
   jumlah kecocokan tertinggi.
 */

 if(matched.length){

  const count={};

  matched.forEach(x=>{
   count[x.faculty]=(count[x.faculty]||0)+1;
  });

  result=
  Object.entries(count)
  .sort((a,b)=>b[1]-a[1])[0][0];

 }else{

  result="Fakultas Ilmu Sosial dan Ilmu Politik";

 }

 facultyChoice.value=result;

 const status=
 document.getElementById("recommendStatus");

 status.className="status ok";

 status.innerHTML=`

 <b>✦ REKOMENDASI MOWTOWN</b><br><br>

 Berdasarkan ceritamu, sistem merekomendasikan:

 <strong style="font-size:18px">
 ${result}
 </strong>

 <br><br>

 ${matched.length ?
 `Sistem mendeteksi ${matched.length} indikator
 minat yang relevan.`:
 `Belum ada kata kunci spesifik.
 Sistem memberikan rekomendasi umum.`}

 <br><br>

 <small>
 Rekomendasi hanyalah bantuan. Kamu tetap bebas
 memilih fakultas lainnya.
 </small>

 `;

}


/* ==========================================
   NOMOR UJIAN
========================================== */

function generateExamNumber(){

 const chars=
 "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

 let code="";

 for(let i=0;i<6;i++){

  code+=chars[
   Math.floor(Math.random()*chars.length)
  ];

 }

 return "UM-26-"+code;

}


/* ==========================================
   REGISTRATION
========================================== */

function validPhone(phone){

 const clean=
 phone.replace(/[\s-]/g,"");

 return /^(08|628|\+628)[0-9]{8,12}$/.test(clean);

}


function register(e){

 e.preventDefault();

 const phone=
 document.getElementById("phone").value.trim();

 if(!validPhone(phone)){

  showStatus(
   "registerStatus",
   "error",
   "Nomor WhatsApp tidak valid. Contoh: 081234567890"
  );

  return;

 }

 const data={
  name:document.getElementById("name").value.trim(),
  identity:document.getElementById("identity").value.trim(),
  email:document.getElementById("email").value.trim(),
  phone,
  school:document.getElementById("school").value.trim(),
  faculty:facultyChoice.value,
  path:document.getElementById("path").value
 };

 let exam;

 do{
  exam=generateExamNumber();
 }while(localStorage.getItem("mowtown_"+exam));

 data.exam=exam;
 data.created=new Date().toISOString();

 localStorage.setItem(
  "mowtown_"+exam,
  JSON.stringify(data)
 );

 let applicants=
 Number(localStorage.getItem("mowtownApplicants")||8421);

 applicants++;

 localStorage.setItem(
  "mowtownApplicants",
  applicants
 );

 updateApplicants(applicants);

 document.getElementById("registerStatus").className="status ok";

 document.getElementById("registerStatus").innerHTML=`

 <b>✓ PENDAFTARAN BERHASIL</b><br><br>

 Nomor ujian:

 <strong style="font-size:21px">
 ${exam}
 </strong>

 <br><br>

 Simpan nomor tersebut.
 Sekarang kamu sudah bisa membuka
 <b>Kartu Ujian</b> dan mengikuti
 <b>Ujian Tahap 1</b>.

 `;

 document.getElementById("examNumber").value=exam;

}


/* ==========================================
   QUESTION BANK
   SESUAI FAKULTAS
========================================== */

const questionBank={

"Fakultas Seni dan Desain":[
["Prinsip yang membuat objek dalam desain terlihat seimbang disebut...","Komposisi","Gravitasi","Konversi","Distribusi",0],
["Warna yang terbentuk dari merah dan kuning adalah...","Hijau","Ungu","Oranye","Biru",2],
["Sketsa biasanya dibuat sebelum karya final untuk...","Menghapus karya","Merencanakan bentuk","Mengganti warna","Mencetak karya",1],
["Tipografi berkaitan dengan...","Jenis huruf","Ukuran kanvas","Suara","Gerak tubuh",0],
["Jika poster memiliki terlalu banyak elemen, masalah yang mungkin terjadi adalah...","Lebih fokus","Sulit dibaca","Lebih sederhana","Lebih cepat",1],
["Gambar yang digunakan untuk menyampaikan pesan secara visual disebut...","Ilustrasi","Algoritma","Database","Paragraf",0],
["RGB paling umum digunakan untuk media...","Cetak","Layar digital","Kertas koran","Kanvas minyak",1],
["Ruang kosong dalam desain disebut...","Negative space","Hard space","Color space","Pixel space",0],
["Logo yang baik seharusnya mudah...","Dilupakan","Dikenali","Dihapus","Diputar",1],
["Keseimbangan antara elemen kiri dan kanan disebut...","Balance","Noise","Texture","Frame",0],
["Tekstur dalam karya visual memberikan kesan...","Permukaan","Suara","Waktu","Bahasa",0],
["Kontras digunakan untuk membuat elemen...","Sulit terlihat","Lebih menonjol","Menghilang","Bergerak",1],
["Fotografi menggunakan cahaya untuk menghasilkan...","Gambar","Kode","Suara","Data",0],
["Skala dalam desain berhubungan dengan...","Ukuran relatif","Warna saja","Suara","Huruf",0],
["Ikon biasanya digunakan untuk...","Mewakili sesuatu","Menghapus warna","Membuat suara","Mengukur waktu",0],
["Palet warna adalah kumpulan...","Warna","Font","Foto","Video",0],
["Poster harus mempertimbangkan keterbacaan...","Teks","Kabel","CPU","Mesin",0],
["Layout adalah pengaturan...","Elemen visual","Koneksi internet","Suara","Database",0],
["Brand identity berhubungan dengan identitas...","Merek","Kelas","Gedung","Bus",0],
["Desain yang baik harus mempertimbangkan kebutuhan...","Pengguna","Printer","Kabel","Server",0]
],

"Fakultas Ilmu Komputer":[
["HTML digunakan terutama untuk...","Struktur halaman web","Menggambar mesin","Mengolah makanan","Membuat listrik",0],
["CSS digunakan untuk...","Mengatur tampilan","Menghapus internet","Membuat hardware","Mengisi baterai",0],
["JavaScript dapat digunakan untuk membuat halaman menjadi...","Interaktif","Berat","Rusak","Offline selamanya",0],
["Algoritma adalah...","Langkah sistematis menyelesaikan masalah","Jenis komputer","Bahasa manusia","Kabel",0],
["Variabel digunakan untuk...","Menyimpan nilai","Menghapus layar","Mencetak kertas","Mematikan listrik",0],
["Jika 2 + 3 * 4 dihitung dengan aturan operasi, hasilnya...","20","14","24","9",1],
["Binary menggunakan angka...","0 dan 1","1 dan 2","2 dan 3","5 dan 9",0],
["Bug dalam program adalah...","Kesalahan program","Keyboard","Monitor","Internet",0],
["Database digunakan untuk...","Menyimpan data","Mendinginkan CPU","Menggambar logo","Mencetak",0],
["Browser digunakan untuk membuka...","Halaman web","Kabel","RAM","Baterai",0],
["CPU sering disebut sebagai...","Pemroses utama","Layar","Mouse","Printer",0],
["RAM berfungsi sebagai...","Memori kerja sementara","Penyimpanan kertas","Kamera","Speaker",0],
["URL digunakan untuk menunjukkan...","Alamat sumber di internet","Kecepatan CPU","Ukuran RAM","Nama keyboard",0],
["Password sebaiknya...","Mudah ditebak","Kuat dan rahasia","Dibagikan","Ditulis publik",1],
["Phishing bertujuan untuk...","Menipu agar data diberikan","Mempercepat komputer","Menggambar","Mencetak",0],
["Loop digunakan untuk...","Mengulang instruksi","Menghapus file","Membuat kabel","Mematikan monitor",0],
["Jika sebuah program memiliki kondisi IF, maka program dapat...","Mengambil keputusan","Menggambar otomatis","Mengisi baterai","Mengubah hardware",0],
["File .jpg biasanya merupakan...","Gambar","Program executable","Database","Audio",0],
["File .html biasanya merupakan...","Dokumen web","Video","Audio","Database",0],
["Internet adalah jaringan yang menghubungkan...","Komputer dan perangkat","Meja","Buku","Kursi",0]
],

"Fakultas Hukum":[
["Aturan yang dibuat oleh lembaga berwenang disebut...","Peraturan","Cerita","Opini","Iklan",0],
["Hak adalah sesuatu yang...","Seharusnya diterima seseorang","Selalu dilarang","Tidak boleh dimiliki","Tidak penting",0],
["Kewajiban adalah sesuatu yang harus...","Dilaksanakan","Dilupakan","Dihindari","Dihapus",0],
["Contoh norma hukum adalah...","Peraturan lalu lintas","Selera makanan","Hobi","Warna favorit",0],
["Salah satu tujuan hukum adalah menciptakan...","Ketertiban","Kekacauan","Perselisihan","Kebingungan",0],
["Keadilan berarti memberikan sesuatu sesuai...","Hak dan kewajiban","Keinginan satu pihak","Kekayaan","Usia",0],
["Saksi adalah orang yang...","Mengetahui suatu kejadian","Membuat komputer","Menjual buku","Menggambar",0],
["Konstitusi merupakan hukum...","Dasar","Permainan","Musik","Dagangan",0],
["Peraturan harus dipatuhi untuk menjaga...","Ketertiban","Kebisingan","Perselisihan","Kekacauan",0],
["Musyawarah bertujuan mencapai...","Kesepakatan","Pertengkaran","Kekalahan","Kecurangan",0],
["Tanggung jawab berarti...","Melaksanakan kewajiban","Menghindari tugas","Menyalahkan orang","Menghapus aturan",0],
["Pelanggaran hukum dapat menimbulkan...","Sanksi","Hadiah","Bonus","Liburan",0],
["Hak dan kewajiban sebaiknya berjalan...","Seimbang","Terpisah total","Sembarangan","Bertentangan",0],
["Peradilan berhubungan dengan proses...","Menegakkan hukum","Menjual barang","Membuat makanan","Menggambar",0],
["Kejujuran dalam proses hukum penting untuk menjaga...","Keadilan","Kecurangan","Kebohongan","Konflik",0],
["Peraturan sekolah merupakan contoh aturan...","Institusional","Kosmik","Cuaca","Olahraga",0],
["Norma kesopanan berkaitan dengan...","Perilaku dalam masyarakat","Kecepatan internet","Mesin","Matematika",0],
["Hukum harus diterapkan secara...","Adil","Sembarangan","Rahasia","Berbeda berdasarkan kesukaan",0],
["Bukti digunakan untuk membantu...","Membuktikan fakta","Membuat cerita","Menghapus fakta","Mengubah waktu",0],
["Menaati aturan merupakan contoh...","Tanggung jawab","Kecerobohan","Pelanggaran","Kecurangan",0]
],

"Fakultas Ekonomi dan Bisnis":[
["Kegiatan menghasilkan barang atau jasa disebut...","Produksi","Konsumsi","Distribusi","Tabungan",0],
["Orang yang menggunakan barang disebut...","Konsumen","Produsen","Distributor","Investor",0],
["Harga biasanya dipengaruhi oleh...","Permintaan dan penawaran","Warna barang","Nama toko","Cuaca saja",0],
["Keuntungan diperoleh ketika pendapatan lebih besar daripada...","Biaya","Produk","Konsumen","Promosi",0],
["Menjual barang kepada konsumen termasuk kegiatan...","Distribusi","Produksi","Konsumsi","Menabung",0],
["Modal digunakan untuk...","Menjalankan usaha","Menghapus usaha","Mengurangi produk","Menghilangkan konsumen",0],
["Promosi bertujuan untuk...","Mengenalkan produk","Menghentikan penjualan","Membuang barang","Mengurangi informasi",0],
["Tabungan adalah bagian pendapatan yang...","Disimpan","Dihabiskan seluruhnya","Dibuang","Dipinjamkan tanpa aturan",0],
["Jika harga naik dan permintaan turun, hubungan tersebut menunjukkan...","Hubungan permintaan","Produksi","Pajak","Modal",0],
["Usaha yang dikelola sendiri disebut...","Usaha perseorangan","Koperasi","Perusahaan negara","Pasar",0],
["Koperasi berdasarkan asas...","Kekeluargaan","Persaingan mutlak","Kekuasaan","Paksaan",0],
["Pendapatan adalah...","Uang yang diterima","Uang yang hilang","Barang rusak","Biaya produksi",0],
["Biaya adalah pengeluaran untuk...","Mendapatkan atau menjalankan sesuatu","Mendapat hadiah","Menghapus produk","Menutup pasar",0],
["Investasi berarti menempatkan dana dengan harapan...","Mendapat hasil di masa depan","Kehilangan seluruh uang","Tidak ada tujuan","Membeli makanan",0],
["Pasar adalah tempat bertemunya...","Penjual dan pembeli","Guru dan siswa saja","Dokter dan pasien saja","Petani dan hujan",0],
["Merek berfungsi untuk...","Membedakan produk","Menghapus produk","Menurunkan kualitas","Menghilangkan identitas",0],
["Neraca sederhana membandingkan aset dengan...","Kewajiban dan modal","Warna","Promosi","Konsumen",0],
["Tujuan utama kegiatan ekonomi adalah memenuhi...","Kebutuhan","Kebingungan","Hobi saja","Perselisihan",0],
["Jika pendapatan Rp100 dan biaya Rp70, keuntungan adalah...","Rp30","Rp70","Rp170","Rp20",0],
["Kewirausahaan membutuhkan...","Kreativitas dan keberanian mengambil keputusan","Kemalasan","Kecurangan","Ketidakpedulian",0]
],

"Fakultas Pendidikan":[
["Orang yang membantu proses belajar siswa disebut...","Guru","Dokter","Hakim","Arsitek",0],
["Tujuan pendidikan salah satunya adalah mengembangkan...","Potensi","Kebingungan","Kecurangan","Kemalasan",0],
["Belajar efektif membutuhkan...","Konsistensi","Menunda terus","Tidak fokus","Mengabaikan materi",0],
["Evaluasi digunakan untuk mengetahui...","Hasil belajar","Warna kelas","Harga buku","Jumlah kursi",0],
["Diskusi merupakan kegiatan...","Bertukar gagasan","Tidur","Menghindari komunikasi","Menyalin",0],
["Metode belajar yang menggunakan gambar disebut...","Visual","Auditori","Motorik","Pasif",0],
["Motivasi belajar dapat berasal dari...","Tujuan dan dorongan","Kebingungan","Kecurangan","Paksaan saja",0],
["Kurikulum berisi...","Rencana dan arah pembelajaran","Daftar makanan","Harga barang","Jadwal bus",0],
["Siswa perlu menghargai pendapat teman saat...","Diskusi","Ujian dengan menyontek","Bermain sendiri","Tidur",0],
["Pembelajaran yang baik sebaiknya...","Melibatkan siswa","Membuat siswa pasif","Tidak memiliki tujuan","Tanpa evaluasi",0],
["Membaca berulang dengan memahami isi disebut...","Belajar aktif","Menyalin","Menghafal tanpa memahami","Bermain",0],
["Guru perlu memberikan umpan balik agar siswa...","Mengetahui perkembangan","Bingung","Takut bertanya","Berhenti belajar",0],
["Pendidikan karakter berkaitan dengan...","Sikap dan nilai","Harga barang","Teknologi saja","Gedung",0],
["Kerja kelompok melatih...","Kerja sama","Persaingan tidak sehat","Isolasi","Kecurangan",0],
["Belajar berdasarkan pengalaman disebut...","Experiential learning","Passive learning","Random learning","No learning",0],
["Tujuan pembelajaran sebaiknya...","Jelas","Tidak diketahui","Berubah setiap menit","Tidak ada",0],
["Konsentrasi berarti kemampuan untuk...","Memusatkan perhatian","Menghindari pelajaran","Berbicara terus","Tidur",0],
["Guru sebagai fasilitator berarti guru...","Membantu proses belajar","Mengerjakan semua tugas","Melarang bertanya","Menghapus tugas",0],
["Pendidikan berlangsung...","Sepanjang kehidupan","Hanya satu hari","Hanya saat ujian","Tidak pernah",0],
["Keberhasilan belajar tidak hanya diukur dari...","Nilai","Pemahaman","Keterampilan","Sikap",0]
]

};


/* fakultas yang belum dibuat soal khusus */
const genericQuestions=[
["Kemampuan mengidentifikasi masalah dengan tepat disebut...","Analisis","Tidur","Hafalan","Keberuntungan",0],
["Kerja sama dalam kelompok membutuhkan...","Komunikasi","Diam total","Perselisihan","Kecurangan",0],
["Jika mendapat informasi baru, sebaiknya...","Memeriksa kebenarannya","Langsung percaya","Menyebarkannya","Menghapusnya",0],
["Data dapat digunakan untuk...","Membuat keputusan","Membingungkan","Menghapus fakta","Menghindari masalah",0],
["Sebuah kesimpulan sebaiknya berdasarkan...","Bukti","Tebakan saja","Rumor","Perasaan saja",0],
["Berpikir kritis berarti...","Menganalisis informasi","Percaya semua hal","Tidak bertanya","Menyalin",0],
["Prioritas adalah...","Hal yang didahulukan","Hal yang dibuang","Hal yang tidak penting","Hal acak",0],
["Masalah kompleks dapat dipecah menjadi...","Bagian lebih kecil","Masalah lebih besar","Kebingungan","Tidak ada bagian",0],
["Jika suatu cara tidak berhasil, kita dapat...","Mencoba strategi lain","Menyerah langsung","Menyalahkan orang","Menghapus tujuan",0],
["Komunikasi yang baik harus...","Jelas","Membingungkan","Rahasia terus","Tidak lengkap",0],
["Informasi yang relevan adalah informasi yang...","Berkaitan dengan masalah","Tidak berhubungan","Acak","Tidak diketahui",0],
["Keputusan yang baik mempertimbangkan...","Dampak","Keberuntungan saja","Rumor","Kesukaan orang lain saja",0],
["Tujuan membantu kita menentukan...","Arah tindakan","Warna pakaian","Jumlah kursi","Cuaca",0],
["Kesalahan dapat digunakan sebagai...","Pembelajaran","Alasan berhenti","Kecurangan","Rahasia",0],
["Kreativitas berarti kemampuan menghasilkan...","Ide baru","Masalah baru saja","Kebingungan","Kesalahan",0],
["Disiplin berarti...","Konsisten menjalankan aturan","Mengabaikan aturan","Menunda","Berhenti",0],
["Tanggung jawab berarti...","Melaksanakan kewajiban","Menghindari tugas","Menyalahkan orang","Menghapus masalah",0],
["Kolaborasi berarti...","Bekerja bersama","Bekerja sendiri","Menghindar","Bersaing curang",0],
["Evaluasi dilakukan untuk...","Menilai hasil","Menghapus hasil","Menghindari data","Membuat rumor",0],
["Pemecahan masalah dimulai dengan...","Memahami masalah","Menebak","Menyerah","Menyalahkan",0]
];


/* ==========================================
   EXAM SYSTEM
========================================== */

let currentExam=null;
let examTimer=null;

function getQuestions(faculty){

 return questionBank[faculty] || genericQuestions;

}


function verifyExam(e){

 e.preventDefault();

 const code=
 document.getElementById("examNumber")
 .value.trim()
 .toUpperCase();

 const raw=
 localStorage.getItem("mowtown_"+code);

 if(!raw){

  showStatus(
   "examStatus",
   "error",
   "Nomor ujian tidak ditemukan."
  );

  return;

 }

 const data=JSON.parse(raw);

 openExam(data);

}


function openExam(data){

 currentExam=data;

 const questions=getQuestions(data.faculty);

 document.getElementById("modalContent").innerHTML=`

 <div class="label">
 MOWTOWN EXAM CENTER
 </div>

 <h2 class="title" style="font-size:42px">
 Ujian Tahap 1
 </h2>

 <p class="muted">
 ${data.name} · ${data.faculty}
 </p>

 <div class="examTimer">
 Waktu: <span id="examTime">10:00</span>
 </div>

 <form id="examForm">

 ${questions.map((q,i)=>`

 <div class="question">

 <h3>
 ${i+1}. ${q[0]}
 </h3>

 ${q.slice(1,5).map((opt,j)=>`

 <label class="option">

 <input
 type="radio"
 name="q${i}"
 value="${j}"
 required
 >

 ${opt}

 </label>

 `).join("")}

 </div>

 `).join("")}

 <button class="btn gold"
 style="margin-top:20px;width:100%">
 Kumpulkan Ujian
 </button>

 </form>

 `;

 document
 .getElementById("modal")
 .classList.add("show");

 startTimer();

 document
 .getElementById("examForm")
 .addEventListener("submit",submitExam);

}


function startTimer(){

 clearInterval(examTimer);

 let seconds=600;

 const timer=
 document.getElementById("examTime");

 examTimer=setInterval(()=>{

  seconds--;

  const min=
  Math.floor(seconds/60);

  const sec=
  seconds%60;

  timer.textContent=
  `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;

  if(seconds<=0){

   clearInterval(examTimer);

   submitExam(
    new Event("submit"),
    true
   );

  }

 },1000);

}


function submitExam(e,timeout=false){

 if(e) e.preventDefault();

 clearInterval(examTimer);

 const form=
 document.getElementById("examForm");

 const questions=
 getQuestions(currentExam.faculty);

 let correct=0;

 questions.forEach((q,i)=>{

  const answer=
  form.querySelector(
   `input[name="q${i}"]:checked`
  );

  if(answer &&
     Number(answer.value)===q[5]){

   correct++;

  }

 });

 const score=
 Math.round(
  (correct/questions.length)*10000
 )/100;

 const result={
  correct,
  total:questions.length,
  score,
  passed:score>=89.77,
  faculty:currentExam.faculty,
  name:currentExam.name,
  exam:currentExam.exam,
  date:new Date().toISOString()
 };

 localStorage.setItem(
  "result_"+currentExam.exam,
  JSON.stringify(result)
 );

 addLeaderboard(
  currentExam.name,
  currentExam.faculty,
  score
 );

 showResult(result);

}


function showResult(result){

 document.getElementById("modalContent").innerHTML=`

 <div class="label">HASIL UJIAN</div>

 <h2 class="title" style="font-size:45px">
 ${result.passed?"LULUS.":"BELUM LULUS."}
 </h2>

 <div class="panel" style="margin-top:25px;text-align:center">

 <p class="muted">
 Nilai rata-rata kamu
 </p>

 <strong style="font:70px Georgia;color:${result.passed?"#286a4b":"#a23d3d"}">
 ${result.score.toFixed(2)}
 </strong>

 <p>
 ${result.correct} dari ${result.total} soal benar
 </p>

 <hr style="margin:25px 0;border:0;border-top:1px solid #ddd">

 <p>
 Batas kelulusan:
 <b>89.77</b>
 </p>

 </div>

 ${result.passed ?

 `<button class="btn gold"
 onclick="openStage2Forum()"
 style="width:100%;margin-top:15px">
 Lanjut ke Forum Kelulusan Tahap 1
 </button>`

 :

 `<p class="status error">
 Nilai belum mencapai batas minimal 89.77.
 </p>`

 }

 `;

}


/* ==========================================
   STAGE 2
========================================== */

function openStage2Forum(){

 const secret=
 "MW-"+Math.random()
 .toString(36)
 .substring(2,8)
 .toUpperCase();

 localStorage.setItem(
  "secret_"+currentExam.exam,
  secret
 );

 document.getElementById("modalContent").innerHTML=`

 <div class="label">TAHAP 1 BERHASIL</div>

 <h2 class="title" style="font-size:45px">
 Selamat.
 </h2>

 <p class="muted" style="margin-top:15px">
 Kamu berhasil melewati Tahap 1.
 </p>

 <div class="panel" style="margin-top:25px">

 <h2 style="font:25px Georgia">
 Kode Rahasia Peserta
 </h2>

 <p class="muted">
 Kode ini hanya dibuat untuk peserta ini.
 </p>

 <strong style="display:block;
 font:30px Georgia;
 color:#b89a62;
 margin:20px 0">
 ${secret}
 </strong>

 </div>

 <button class="btn"
 onclick="openStage2('${secret}')"
 style="width:100%;margin-top:15px">
 Masuk Ujian Tahap 2
 </button>

 `;

}


/* ==========================================
   STAGE 2 QUESTIONS
========================================== */

const hardQuestions=[

 [
  "Sebuah pola bilangan adalah 2, 6, 12, 20, 30, ... Angka berikutnya adalah?",
  ["36","40","42","44"],
  2
 ],

 [
  "Jika semua A adalah B dan sebagian B adalah C, kesimpulan yang paling tepat adalah...",
  [
   "Semua A pasti C",
   "Sebagian A pasti C",
   "Belum tentu ada A yang C",
   "Semua C adalah A"
  ],
  2
 ],

 [
  "Sebuah kode terdiri dari tiga angka berbeda. Jika angka pertama harus lebih besar dari angka kedua dan angka kedua lebih besar dari angka ketiga, berapa banyak kemungkinan dari angka 1–5?",
  ["5","10","15","20"],
  2
 ]

];


function openStage2(secret){

 document.getElementById("modalContent").innerHTML=`

 <div class="label">FINAL SELECTION</div>

 <h2 class="title" style="font-size:43px">
 Ujian Tahap 2.
 </h2>

 <p class="muted">
 3 soal · 30 detik · sangat sulit
 </p>

 <div class="examTimer">
 <span id="stage2Timer">30</span> detik
 </div>

 <form id="stage2Form">

 ${hardQuestions.map((q,i)=>`

 <div class="question">

 <h3>${i+1}. ${q[0]}</h3>

 ${q[1].map((opt,j)=>`

 <label class="option">
 <input
 type="radio"
 name="hard${i}"
 value="${j}"
 required
 >
 ${opt}
 </label>

 `).join("")}

 </div>

 `).join("")}

 <button class="btn gold"
 style="width:100%;margin-top:20px">
 FINAL SUBMISSION
 </button>

 </form>

 `;

 let seconds=30;

 const timer=
 document.getElementById("stage2Timer");

 const interval=setInterval(()=>{

  seconds--;

  timer.textContent=seconds;

  if(seconds<=0){

   clearInterval(interval);

   submitStage2();

  }

 },1000);

 document
 .getElementById("stage2Form")
 .addEventListener("submit",e=>{
  e.preventDefault();
  clearInterval(interval);
  submitStage2();
 });

}


function submitStage2(){

 const form=
 document.getElementById("stage2Form");

 if(!form) return;

 let correct=0;

 hardQuestions.forEach((q,i)=>{

  const ans=
  form.querySelector(
   `input[name="hard${i}"]:checked`
  );

  if(ans && Number(ans.value)===q[2]){
   correct++;
  }

 });

 const score=
 Math.round(correct/3*10000)/100;

 const passed=score>=66.67;

 if(passed){

  showFinalPass(score);

 }else{

  document.getElementById("modalContent").innerHTML=`

  <div class="label">FINAL SELECTION</div>

  <h2 class="title">
  Belum Lolos.
  </h2>

  <div class="panel" style="margin-top:25px;text-align:center">

  <strong style="font:60px Georgia;color:#a23d3d">
  ${score.toFixed(2)}
  </strong>

  <p class="muted">
  Nilai rata-rata Tahap 2
  </p>

  </div>

  `;

 }

}


/* ==========================================
   FINAL PASS
========================================== */

function showFinalPass(score){

 document.getElementById("modalContent").innerHTML=`

 <div class="label">OFFICIAL RESULT</div>

 <h2 class="title">
 Welcome to Mowtown.
 </h2>

 <div class="certificate">

 <div class="label">
 UNIVERSITY OF MOWTOWN
 </div>

 <h1>Certificate of Achievement</h1>

 <p>
 This certificate is proudly presented to
 </p>

 <div class="certificateName">
 ${currentExam.name}
 </div>

 <p>
 for successfully completing the
 Mowtown Academic Selection.
 </p>

 <strong style="display:block;margin-top:20px">
 Final Score: ${score.toFixed(2)}
 </strong>

 </div>

 <button class="btn gold"
 onclick="openReRegistration()"
 style="width:100%;margin-top:20px">
 Daftar Ulang Mahasiswa Baru
 </button>

 `;

}


function openReRegistration(){

 document.getElementById("modalContent").innerHTML=`

 <div class="label">FINAL REGISTRATION</div>

 <h2 class="title" style="font-size:45px">
 Daftar Ulang.
 </h2>

 <form class="form"
 onsubmit="finishRegistration(event)">

 <label>Konfirmasi Nama</label>

 <input value="${currentExam.name}" readonly>

 <label>Program Studi</label>

 <select>

 ${faculties.map(f=>
 `<option ${f===currentExam.faculty?"selected":""}>
 ${f}
 </option>`
 ).join("")}

 </select>

 <label>Email Akademik</label>

 <input
 type="email"
 placeholder="nama@student.mowtown.ac.id"
 required
 >

 <button class="btn gold">
 Konfirmasi Mahasiswa Baru
 </button>

 </form>

 `;

}


function finishRegistration(e){

 e.preventDefault();

 document.getElementById("modalContent").innerHTML=`

 <div class="certificate">

 <div class="label">
 UNIVERSITY OF MOWTOWN
 </div>

 <h1>OFFICIALLY ADMITTED</h1>

 <div class="certificateName">
 ${currentExam.name}
 </div>

 <p>
 resmi diterima sebagai mahasiswa baru
 University of Mowtown.
 </p>

 <strong style="display:block;margin-top:20px">
 ${currentExam.faculty}
 </strong>

 <p style="margin-top:25px;color:#777">
 Welcome to the Mowtown Academic Community.
 </p>

 </div>

 `;

}


/* ==========================================
   LEADERBOARD
========================================== */

const fakeNames=[
"Raka Pratama",
"Nadine Maharani",
"Fauzan Ramadhan",
"Keisha Putri",
"Alessandra Wijaya",
"Galih Adinata",
"Rania Prameswari",
"Bagas Mahendra",
"Reza Wicaksana",
"Putri Kirana"
];

let leaderboardData=
JSON.parse(
 localStorage.getItem("mowtownLeaderboard")||"null"
) || fakeNames.map((name,i)=>({

 name,
 faculty:faculties[i%faculties.length],
 score:Number((90+Math.random()*9.5).toFixed(2))

}));


function addLeaderboard(name,faculty,score){

 leaderboardData.push({
  name,
  faculty,
  score
 });

 leaderboardData.sort(
  (a,b)=>b.score-a.score
 );

 leaderboardData=
 leaderboardData.slice(0,20);

 localStorage.setItem(
  "mowtownLeaderboard",
  JSON.stringify(leaderboardData)
 );

 renderLeaderboard();

}


function renderLeaderboard(){

 leaderboardData.sort(
  (a,b)=>b.score-a.score
 );

 document.getElementById("leaderboardList")
 .innerHTML=
 leaderboardData.map((x,i)=>`

 <div class="rank">

 <div class="rankNo">
 #${i+1}
 </div>

 <div>
 <span class="rankName">
 ${x.name}
 </span>

 <span class="rankFaculty">
 ${x.faculty}
 </span>
 </div>

 <div class="rankScore">
 ${Number(x.score).toFixed(2)}
 </div>

 </div>

 `).join("");

}

renderLeaderboard();


/*
 leaderboard berubah setiap 10 detik
*/

let leaderSeconds=10;

setInterval(()=>{

 leaderSeconds--;

 document.getElementById("leaderClock")
 .textContent=
 "00:"+String(leaderSeconds).padStart(2,"0");

 if(leaderSeconds<=0){

  /*
   demo live:
   skor berubah sedikit supaya terlihat hidup
  */

  leaderboardData=
  leaderboardData.map(x=>({

   ...x,

   score:
   Math.min(
    99.99,
    Math.max(
     70,
     x.score+(Math.random()-.5)
    )
   )

  }));

  renderLeaderboard();

  leaderSeconds=10;

 }

},1000);


/* ==========================================
   APPLICANTS
========================================== */

let applicants=
Number(
 localStorage.getItem("mowtownApplicants")||8421
);

function updateApplicants(n){

 document.getElementById("applicantTop")
 .textContent=n.toLocaleString("id-ID");

}

updateApplicants(applicants);


/* ==========================================
   NEWS
========================================== */

const newsPool=[

"Pendaftaran mahasiswa baru Mowtown memasuki periode baru.",

"Mowtown membuka pusat inovasi dan riset terbaru.",

"Program pertukaran mahasiswa internasional resmi dibuka.",

"Tim mahasiswa Mowtown meraih prestasi nasional.",

"Perpustakaan pusat memperpanjang jam layanan.",

"Fakultas baru membuka program akademik unggulan.",

"Mowtown memperluas kerja sama penelitian."

];


function addNews(text){

 const list=
 document.getElementById("newsList");

 const item=
 document.createElement("article");

 item.className="newsItem";

 item.innerHTML=`

 <b>
 ${String(list.children.length+1).padStart(2,"0")}
 </b>

 <div>

 <h3>${text}</h3>

 <small>
 Live Update · Mowtown News
 </small>

 </div>

 <div class="newsDate">
 ${new Date().toLocaleDateString("id-ID")}
 </div>

 `;

 list.prepend(item);

}

newsPool.slice(0,5).forEach(addNews);


/* ==========================================
   BUS SYSTEM
========================================== */

const busRoutes=[

["Apollo Line","Grand Hall → Library → North Gate"],
["Athena Line","Grand Hall → Faculty District → South Gate"],
["Zeus Line","Dormitory → Grand Hall → Research Center"],
["Artemis Line","Women Residence → Library → East Gate"],
["Hermes Line","Central Station → Grand Hall → West Gate"],
["Poseidon Line","Lake District → Faculty District → Main Gate"],
["Ares Line","Sports Complex → Grand Hall → Engineering"],
["Hera Line","Residence → Medical Center → Main Gate"],
["Demeter Line","Agriculture → Library → South Gate"]
];


function openBus(){

 document.getElementById("modalContent").innerHTML=`

 <div class="label">MOWTOWN TRANSPORTATION</div>

 <h2 class="title" style="font-size:45px">
 Campus Bus.
 </h2>

 <p class="muted">
 Pilih rute dan kendaraan.
 </p>

 <div id="busRoutes"></div>

 `;

 const container=
 document.getElementById("busRoutes");

 busRoutes.forEach((r,i)=>{

  const women=i===3;

  const div=
  document.createElement("div");

  div.className=
  "busRoute "+(women?"busWomen":"");

  div.innerHTML=`

  <h3>
  ${r[0]}
  ${women?" · WOMEN ONLY":""}
  </h3>

  <div class="busMeta">
  ${r[1]}
  </div>

  <button
  class="btn ${women?"gold":""}"
  style="margin-top:15px"
  onclick="openSeats(${i})">

  Pilih Kursi

  </button>

  `;

  container.appendChild(div);

 });

 document
 .getElementById("modal")
 .classList.add("show");

}


function openSeats(routeIndex){

 const route=
 busRoutes[routeIndex];

 document.getElementById("modalContent").innerHTML=`

 <div class="label">
 ${route[0]}
 </div>

 <h2 class="title" style="font-size:42px">
 Pilih Kursi.
 </h2>

 <p class="muted">
 ${route[1]}
 </p>

 <div class="seats" id="seatGrid"></div>

 <button class="btn gold"
 style="width:100%;margin-top:20px"
 onclick="confirmBus(${routeIndex})">

 Konfirmasi Kursi

 </button>

 `;

 const grid=
 document.getElementById("seatGrid");

 for(let i=1;i<=32;i++){

  const btn=
  document.createElement("button");

  btn.className="seat";

  btn.textContent=i;

  /*
   kursi acak terisi
  */

  if([2,5,8,11,14,17,21,24,29].includes(i)){

   btn.classList.add("taken");
   btn.disabled=true;

  }

  /*
   kursi disabilitas
  */

  if(i===1 || i===16){

   btn.classList.add("disabled");
   btn.textContent="♿ "+i;

  }

  btn.onclick=()=>{

   document
   .querySelectorAll(".seat")
   .forEach(s=>
    s.classList.remove("selected")
   );

   btn.classList.add("selected");

   window.selectedSeat=i;

  };

  grid.appendChild(btn);

 }

 window.selectedSeat=null;

}


function confirmBus(routeIndex){

 if(!window.selectedSeat){

  alert("Pilih kursi yang tersedia terlebih dahulu.");

  return;

 }

 const route=
 busRoutes[routeIndex];

 document.getElementById("modalContent").innerHTML=`

 <div class="label">BOOKING CONFIRMED</div>

 <h2 class="title" style="font-size:43px">
 Bus Reserved.
 </h2>

 <div class="panel" style="margin-top:20px">

 <h2 style="font:25px Georgia">
 ${route[0]}
 </h2>

 <p class="muted">
 ${route[1]}
 </p>

 <br>

 <strong>
 Kursi ${window.selectedSeat}
 </strong>

 <br><br>

 <span class="live">
 ✓ Booking berhasil
 </span>

 </div>

 `;

}


/* ==========================================
   MENU
========================================== */

function toggleMenu(){

 document
 .getElementById("navlinks")
 .classList
 .toggle("open");

}


/* ==========================================
   MODAL
========================================== */

function closeModal(){

 document
 .getElementById("modal")
 .classList
 .remove("show");

}

document
.getElementById("modal")
.addEventListener("click",e=>{

 if(e.target===e.currentTarget){
  closeModal();
 }

});


/* ==========================================
   ESC KEY
========================================== */

document.addEventListener("keydown",e=>{

 if(e.key==="Escape"){
  closeModal();
 }

});
