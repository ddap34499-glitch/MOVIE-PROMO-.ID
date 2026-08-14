```javascript
/* =========================
   DATA DASAR
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

const firstNames = [
  "Aditya","Nadine","Farrel","Armand","Citra",
  "Raka","Keisha","Rizky","Alessandra","Bagas",
  "Rania","Galih","Naufal","Salsabila","Reza",
  "Anindya","Dimas","Fauzan","Putri","Rafi"
];

const lastNames = [
  "Pranata","Suryana","Adinata","Rahardian",
  "Maharani","Wijaya","Mahendra","Wicaksana",
  "Ramadhan","Prameswari","Adhitama","Kirana"
];

const fields = [
  "Kedokteran","Ekonomi","Hukum","Komunikasi",
  "Teknik","Ilmu Komputer","Matematika","Biologi",
  "Psikologi","Seni dan Desain","Pendidikan","Pertanian"
];


/* =========================
   497 DOSEN
========================= */

const facultyData = [];

for(let i=0;i<497;i++){

  facultyData.push({
    name:
      firstNames[i % firstNames.length] +
      " " +
      lastNames[(i*3) % lastNames.length] +
      " " +
      String.fromCharCode(65 + (i % 26)) + ".",

    title:
      i % 7 === 0 ? "Prof." :
      i % 3 === 0 ? "Dr." : "Drs.",

    faculty: faculties[i % faculties.length],
    field: fields[i % fields.length]
  });

}


/* =========================
   DROPDOWN FAKULTAS
========================= */

const facultyChoice =
  document.getElementById("facultyChoice");

faculties.forEach(faculty => {

  const option = document.createElement("option");

  option.value = faculty;
  option.textContent = faculty;

  facultyChoice.appendChild(option);

});


/* =========================
   SEARCH DOSEN
========================= */

function renderFaculty(){

  const search =
    document.getElementById("facultySearch")
      .value
      .toLowerCase()
      .trim();

  const results = facultyData.filter(person => {

    const text =
      `${person.name} ${person.faculty} ${person.field}`
      .toLowerCase();

    return text.includes(search);

  });

  document.getElementById("facultyList").innerHTML =
    results.map(person => `

      <div class="person">

        <strong>
          ${person.title} ${person.name}
        </strong>

        <small>
          ${person.faculty}
        </small>

        <small>
          Bidang: ${person.field}
        </small>

      </div>

    `).join("");

}

renderFaculty();

document
  .getElementById("facultySearch")
  .addEventListener("input",renderFaculty);


/* =========================
   MINAT & BAKAT
========================= */

const recommendationRules = [

  {
    keywords:[
      "gambar","menggambar","lukis","melukis",
      "seni","desain","design","ilustrasi",
      "visual","poster","fotografi"
    ],
    faculty:"Fakultas Seni dan Desain"
  },

  {
    keywords:[
      "coding","programming","program",
      "komputer","website","web",
      "aplikasi","teknologi","software"
    ],
    faculty:"Fakultas Ilmu Komputer"
  },

  {
    keywords:[
      "dokter","medis","kesehatan",
      "pasien","rumah sakit"
    ],
    faculty:"Fakultas Kedokteran"
  },

  {
    keywords:[
      "hukum","pengacara","keadilan",
      "peraturan","undang"
    ],
    faculty:"Fakultas Hukum"
  },

  {
    keywords:[
      "bisnis","jualan","usaha",
      "ekonomi","keuangan","dagang"
    ],
    faculty:"Fakultas Ekonomi dan Bisnis"
  },

  {
    keywords:[
      "mengajar","guru","anak",
      "pendidikan","mengajari"
    ],
    faculty:"Fakultas Pendidikan"
  },

  {
    keywords:[
      "mesin","robot","bangunan",
      "teknik","elektronik"
    ],
    faculty:"Fakultas Teknik"
  },

  {
    keywords:[
      "olahraga","atlet","lari",
      "basket","sepakbola","voli"
    ],
    faculty:"Fakultas Ilmu Keolahragaan"
  },

  {
    keywords:[
      "musik","menyanyi","gitar",
      "piano","drum"
    ],
    faculty:"Fakultas Seni dan Desain"
  }

];


document
  .getElementById("interestForm")
  .addEventListener("submit",function(event){

    event.preventDefault();

    const text =
      document
        .getElementById("strength")
        .value
        .toLowerCase();

    let recommendation =
      "Fakultas Ilmu Sosial dan Ilmu Politik";

    let detected = [];

    for(const rule of recommendationRules){

      const matches =
        rule.keywords.filter(keyword =>
          text.includes(keyword)
        );

      if(matches.length){

        recommendation = rule.faculty;
        detected = matches;
        break;

      }

    }

    facultyChoice.value = recommendation;

    const status =
      document.getElementById("recommendStatus");

    status.className = "status ok";

    status.innerHTML = `

      <b>Rekomendasi bidang studi:</b>

      <br>

      <strong>${recommendation}</strong>

      <br><br>

      Sistem mendeteksi minat:
      <b>${detected.length ? detected.join(", ") : "minat umum"}</b>

      <br><br>

      <small>
      Rekomendasi ini tidak mengunci pilihanmu.
      Kamu masih bisa memilih fakultas lain.
      </small>

    `;

    document
      .getElementById("admission")
      .scrollIntoView({
        behavior:"smooth",
        block:"start"
      });

});


/* =========================
   VALIDASI
========================= */

function validPhone(phone){

  const clean =
    phone.replace(/[\s-]/g,"");

  return /^(08\d{8,12}|\+628\d{8,12}|628\d{8,12})$/
    .test(clean);

}


function validSchool(school){

  return /^(SMA|SMK|MA|MAN|SMAN|SMKN)\s/i
    .test(school.trim());

}


/* =========================
   NOMOR UJIAN
========================= */

function generateExamNumber(){

  const chars =
    "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  let code = "";

  for(let i=0;i<6;i++){

    code +=
      chars[Math.floor(Math.random()*chars.length)];

  }

  return "UM-26-" + code;

}


/* =========================
   RANDOM
========================= */

function random(array){

  return array[
    Math.floor(Math.random()*array.length)
  ];

}


/* =========================
   PENDAFTARAN
========================= */

document
  .getElementById("registrationForm")
  .addEventListener("submit",function(event){

    event.preventDefault();

    const data = {

      name:
        document.getElementById("name").value.trim(),

      identity:
        document.getElementById("identity").value.trim(),

      email:
        document.getElementById("email").value.trim(),

      phone:
        document.getElementById("phone").value.trim(),

      school:
        document.getElementById("school").value.trim(),

      faculty:
        document.getElementById("facultyChoice").value,

      path:
        document.getElementById("path").value

    };


    if(!validPhone(data.phone)){

      showStatus(
        "registerStatus",
        "error",
        "Nomor WhatsApp tidak valid. Gunakan nomor Indonesia yang benar."
      );

      return;

    }


    if(!validSchool(data.school)){

      showStatus(
        "registerStatus",
        "error",
        "Asal sekolah harus menggunakan format SMA, SMK, MA, MAN, SMAN, atau SMKN Indonesia."
      );

      return;

    }


    let examNumber;

    do{

      examNumber =
        generateExamNumber();

    }while(
      localStorage.getItem(
        "mowtown_" + examNumber
      )
    );


    data.examNumber = examNumber;

    data.registeredAt =
      new Date().toISOString();


    localStorage.setItem(
      "mowtown_" + examNumber,
      JSON.stringify(data)
    );


    let applicants =
      Number(
        localStorage.getItem(
          "mowtownApplicants"
        ) || 8421
      );

    applicants++;

    localStorage.setItem(
      "mowtownApplicants",
      applicants
    );

    updateApplicants(applicants);


    document
      .getElementById("registerStatus")
      .className = "status ok";

    document
      .getElementById("registerStatus")
      .innerHTML = `

        <b>Pendaftaran berhasil!</b>

        <br><br>

        Nomor ujian kamu:

        <strong style="font-size:21px">
          ${examNumber}
        </strong>

        <br><br>

        Simpan nomor tersebut untuk membuat
        kartu ujian.

      `;

});


/* =========================
   KARTU UJIAN
========================= */

const rooms = [
  "Gedung A · Ruang 204",
  "Gedung B · Ruang 311",
  "Gedung C · Auditorium 2",
  "Gedung D · Ruang 107",
  "Gedung E · Lab 4",
  "Gedung F · Ruang 215"
];

const mentors = [
  "Dr. Rania Prameswari, M.Pd.",
  "Prof. Galih Wicaksana, Ph.D.",
  "Dr. Naufal Adhitama, M.T.",
  "Prof. Salsabila Kirana, M.Sc.",
  "Dr. Reza Mahardika, M.Si."
];

const dates = [
  "18 September 2026",
  "21 September 2026",
  "24 September 2026",
  "28 September 2026",
  "1 Oktober 2026"
];

const times = [
  "08:00–09:30 WIB",
  "10:00–11:30 WIB",
  "13:00–14:30 WIB",
  "15:00–16:30 WIB"
];


document
  .getElementById("examForm")
  .addEventListener("submit",function(event){

    event.preventDefault();

    const number =
      document
        .getElementById("examNumber")
        .value
        .trim()
        .toUpperCase();

    const raw =
      localStorage.getItem(
        "mowtown_" + number
      );


    if(!raw){

      showStatus(
        "examStatus",
        "error",
        "Nomor ujian tidak ditemukan. Pastikan nomor benar atau lakukan pendaftaran terlebih dahulu."
      );

      document
        .getElementById("examCard")
        .innerHTML = "";

      return;

    }


    const data = JSON.parse(raw);

    const scheduleKey =
      "schedule_" + number;

    let schedule =
      localStorage.getItem(scheduleKey);

    if(schedule){

      schedule = JSON.parse(schedule);

    }else{

      schedule = {

        date:random(dates),

        time:random(times),

        room:random(rooms),

        seat:
          Math.floor(
            Math.random()*240
          ) + 1,

        mentor:random(mentors)

      };

      localStorage.setItem(
        scheduleKey,
        JSON.stringify(schedule)
      );

    }


    showStatus(
      "examStatus",
      "ok",
      "Nomor ujian valid. Kartu ujian berhasil ditemukan."
    );


    document
      .getElementById("examCard")
      .innerHTML = `

        <div class="examCard">

          <div class="examHead">

            <div>

              <h3>${data.name}</h3>

              <span class="muted">
                ${data.faculty}
              </span>

            </div>

            <div class="examCode">
              ${data.examNumber}
            </div>

          </div>


          <div class="examGrid">

            <div class="examInfo">
              <small>Asal Sekolah</small>
              <strong>${data.school}</strong>
            </div>

            <div class="examInfo">
              <small>Jalur</small>
              <strong>${data.path}</strong>
            </div>

            <div class="examInfo">
              <small>Tanggal Ujian</small>
              <strong>${schedule.date}</strong>
            </div>

            <div class="examInfo">
              <small>Jam</small>
              <strong>${schedule.time}</strong>
            </div>

            <div class="examInfo">
              <small>Ruangan</small>
              <strong>${schedule.room}</strong>
            </div>

            <div class="examInfo">
              <small>Nomor Kursi</small>
              <strong>${schedule.seat}</strong>
            </div>

            <div class="examInfo">
              <small>Pembimbing</small>
              <strong>${schedule.mentor}</strong>
            </div>

            <div class="examInfo">
              <small>Nomor Ujian</small>
              <strong>${data.examNumber}</strong>
            </div>

          </div>


          <button
            class="btn gold startExam"
            onclick='startOnlineExam(${JSON.stringify(data)})'>

            MULAI UJIAN ONLINE

          </button>

        </div>

      `;

});


/* =========================
   SOAL UJIAN
========================= */

const questions = [

  {
    q:"Apa fungsi utama sistem operasi?",
    options:[
      "Mengelola perangkat keras dan perangkat lunak",
      "Membuat kabel komputer",
      "Menghapus semua data",
      "Memperbesar layar"
    ],
    answer:0
  },

  {
    q:"Hasil dari 12 × 8 adalah...",
    options:[
      "86","96","108","112"
    ],
    answer:1
  },

  {
    q:"Bahasa yang digunakan untuk mengatur tampilan halaman web adalah...",
    options:[
      "HTML","CSS","SQL","Python"
    ],
    answer:1
  },

  {
    q:"Planet yang dikenal sebagai Planet Merah adalah...",
    options:[
      "Venus","Mars","Jupiter","Saturnus"
    ],
    answer:1
  },

  {
    q:"Sikap yang penting dalam lingkungan akademik adalah...",
    options:[
      "Mencontek","Jujur","Mengabaikan aturan","Memalsukan data"
    ],
    answer:1
  },

  {
    q:"Ibukota Indonesia adalah...",
    options:[
      "Bandung","Surabaya","Jakarta","Yogyakarta"
    ],
    answer:2
  },

  {
    q:"HTML merupakan singkatan dari...",
    options:[
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Modern Language",
      "Home Text Markup Link"
    ],
    answer:0
  },

  {
    q:"Jika semua A adalah B dan semua B adalah C, maka...",
    options:[
      "Semua A adalah C",
      "Tidak ada A yang C",
      "Semua C adalah A",
      "A dan C pasti berbeda"
    ],
    answer:0
  },

  {
    q:"Contoh sumber energi terbarukan adalah...",
    options:[
      "Batu bara","Minyak bumi","Matahari","Gas alam"
    ],
    answer:2
  },

  {
    q:"Tujuan utama pendidikan tinggi adalah...",
    options:[
      "Mengembangkan pengetahuan dan kemampuan",
      "Menghindari pembelajaran",
      "Mengurangi penelitian",
      "Menghapus kreativitas"
    ],
    answer:0
  }

];


/* =========================
   SISTEM UJIAN
========================= */

let currentQuestion = 0;
let examAnswers = [];
let examTimer = null;
let remainingSeconds = 60 * 10;
let currentParticipant = null;


function startOnlineExam(data){

  currentParticipant = data;

  const previous =
    localStorage.getItem(
      "examResult_" + data.examNumber
    );

  if(previous){

    const result = JSON.parse(previous);

    document
      .getElementById("examModal")
      .classList.add("show");

    document
      .getElementById("onlineExam")
      .innerHTML = `

        <div class="result">

          <div class="label">
            HASIL UJIAN
          </div>

          <h2 class="title">
            Ujian sudah selesai.
          </h2>

          <div class="resultScore">
            ${result.score}
          </div>

          <p>
            ${result.correct} dari
            ${questions.length} jawaban benar.
          </p>

          <br>

          <strong>
            ${result.score >= 70
              ? "LULUS"
              : "BELUM LULUS"}
          </strong>

        </div>

      `;

    return;

  }


  currentQuestion = 0;

  examAnswers =
    new Array(questions.length)
      .fill(null);

  remainingSeconds = 60 * 10;

  document
    .getElementById("examModal")
    .classList
    .add("show");

  renderQuestion();

  startTimer();

}


function renderQuestion(){

  const question =
    questions[currentQuestion];

  const selected =
    examAnswers[currentQuestion];


  document
    .getElementById("onlineExam")
    .innerHTML = `

      <div class="examTop">

        <div>

          <div class="label">
            ONLINE ADMISSION EXAM
          </div>

          <h2 style="font:30px Georgia">
            ${currentParticipant.name}
          </h2>

        </div>

        <div class="timer" id="timer">
          10:00
        </div>

      </div>


      <div class="question">

        <div class="questionNumber">
          SOAL ${currentQuestion+1}
          / ${questions.length}
        </div>

        <h3>
          ${question.q}
        </h3>

        ${question.options.map((option,index)=>`

          <label class="option">

            <input
              type="radio"
              name="answer"
              value="${index}"
              ${selected === index ? "checked" : ""}
              onchange="saveAnswer(${index})"
            >

            ${String.fromCharCode(65+index)}.
            ${option}

          </label>

        `).join("")}

      </div>


      <div class="examButtons">

        <button
          class="btn"
          onclick="previousQuestion()"
          ${currentQuestion===0 ? "disabled" : ""}>

          ← Sebelumnya

        </button>


        ${
          currentQuestion === questions.length-1

          ?

          `<button
            class="btn gold"
            onclick="submitExam()">

            Kirim Jawaban

          </button>`

          :

          `<button
            class="btn gold"
            onclick="nextQuestion()">

            Berikutnya →

          </button>`
        }

      </div>

    `;

}


function saveAnswer(index){

  examAnswers[currentQuestion] =
    index;

}


function nextQuestion(){

  if(
    examAnswers[currentQuestion] === null
  ){

    alert("Pilih salah satu jawaban terlebih dahulu.");

    return;

  }

  if(
    currentQuestion <
    questions.length-1
  ){

    currentQuestion++;

    renderQuestion();

  }

}


function previousQuestion(){

  if(currentQuestion>0){

    currentQuestion--;

    renderQuestion();

  }

}


/* =========================
   TIMER
========================= */

function startTimer(){

  clearInterval(examTimer);

  examTimer =
    setInterval(()=>{

      remainingSeconds--;

      updateTimer();

      if(remainingSeconds<=0){

        clearInterval(examTimer);

        submitExam(true);

      }

    },1000);

}


function updateTimer(){

  const timer =
    document.getElementById("timer");

  if(!timer) return;

  const minutes =
    Math.floor(
      remainingSeconds / 60
    );

  const seconds =
    remainingSeconds % 60;

  timer.textContent =
    String(minutes).padStart(2,"0") +
    ":" +
    String(seconds).padStart(2,"0");

}


/* =========================
   SUBMIT UJIAN
========================= */

function submitExam(auto=false){

  if(!auto){

    const sure =
      confirm(
        "Yakin ingin mengirim jawaban?"
      );

    if(!sure) return;

  }


  clearInterval(examTimer);


  let correct = 0;

  questions.forEach((question,index)=>{

    if(
      examAnswers[index] ===
      question.answer
    ){

      correct++;

    }

  });


  const score =
    Math.round(
      correct /
      questions.length *
      100
    );


  const result = {

    score,
    correct,
    total:questions.length,
    submittedAt:new Date().toISOString()

  };


  localStorage.setItem(

    "examResult_" +
    currentParticipant.examNumber,

    JSON.stringify(result)

  );


  document
    .getElementById("onlineExam")
    .innerHTML = `

      <div class="result">

        <div class="label">
          UJIAN SELESAI
        </div>

        <h2 class="title">
          ${currentParticipant.name}
        </h2>

        <div class="resultScore">
          ${score}
        </div>

        <p>
          ${correct} dari
          ${questions.length}
          soal benar.
        </p>

        <br>

        <h2>
          ${score >= 70
            ? "SELAMAT — LULUS"
            : "BELUM LULUS"}
        </h2>

        <br>

        <p class="muted">
          Nomor ujian:
          ${currentParticipant.examNumber}
        </p>

      </div>

    `;

}


/* =========================
   TUTUP UJIAN
========================= */

function closeExam(){

  clearInterval(examTimer);

  document
    .getElementById("examModal")
    .classList
    .remove("show");

}


/* =========================
   STATUS
========================= */

function showStatus(id,type,text){

  const element =
    document.getElementById(id);

  element.className =
    "status " + type;

  element.textContent = text;

}


/* =========================
   LIVE PENDAFTAR
========================= */

let applicants =
  Number(
    localStorage.getItem(
      "mowtownApplicants"
    ) || 8421
  );


function updateApplicants(number){

  const formatted =
    number.toLocaleString("id-ID");

  document
    .getElementById("applicantTop")
    .textContent = formatted;

  document
    .getElementById("liveApplicants")
    .textContent =
      "LIVE · " + formatted + " pendaftar";

}


updateApplicants(applicants);


/*
  simulasi pertambahan live.
  Setiap 30 detik bertambah 1.
*/

setInterval(()=>{

  applicants++;

  localStorage.setItem(
    "mowtownApplicants",
    applicants
  );

  updateApplicants(applicants);

},30000);


/* =========================
   NEWS
========================= */

const newsPool = [

  "Pendaftaran mahasiswa baru Mowtown memasuki periode baru.",

  "Mowtown membuka pusat inovasi dan riset terbaru.",

  "Program pertukaran mahasiswa internasional resmi dibuka.",

  "Tim mahasiswa Mowtown meraih prestasi nasional.",

  "Perpustakaan pusat memperpanjang jam layanan.",

  "Fakultas baru membuka program akademik unggulan.",

  "Mowtown memperluas kerja sama penelitian.",

  "Seleksi Mowtown memasuki tahap berikutnya."

];


function addNews(text){

  const list =
    document.getElementById("newsList");

  const item =
    document.createElement("article");

  item.className = "newsItem";

  item.innerHTML = `

    <b>
      ${String(
        list.children.length + 1
      ).padStart(2,"0")}
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


newsPool.slice(0,5)
  .forEach(addNews);


/*
  News baru setiap 5 menit.
*/

setInterval(()=>{

  addNews(
    random(newsPool)
  );

},300000);


/* =========================
   NAVBAR
========================= */

function toggleMenu(){

  document
    .getElementById("navlinks")
    .classList
    .toggle("open");

}
```
