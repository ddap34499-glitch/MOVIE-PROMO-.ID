/* =====================================================
   UNIVERSITY OF MOWTOWN
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   DATA FAKULTAS
===================================================== */

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
  "Aditya",
  "Nadine",
  "Farrel",
  "Armand",
  "Citra",
  "Raka",
  "Keisha",
  "Rizky",
  "Alessandra",
  "Bagas",
  "Rania",
  "Galih",
  "Naufal",
  "Salsabila",
  "Reza",
  "Anindya",
  "Dimas",
  "Fauzan",
  "Putri",
  "Rafi"
];

const lastNames = [
  "Pranata",
  "Suryana",
  "Adinata",
  "Rahardian",
  "Maharani",
  "Wijaya",
  "Mahendra",
  "Wicaksana",
  "Ramadhan",
  "Prameswari",
  "Adhitama",
  "Kirana"
];

const fields = [
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


/* =====================================================
   GENERATE 497 DOSEN
===================================================== */

const facultyData = [];

for (let i = 0; i < 497; i++) {

  facultyData.push({
    name:
      firstNames[i % firstNames.length] +
      " " +
      lastNames[(i * 3) % lastNames.length] +
      " " +
      String.fromCharCode(65 + (i % 26)) +
      ".",

    title:
      i % 7 === 0
        ? "Prof."
        : i % 3 === 0
        ? "Dr."
        : "Drs.",

    faculty:
      faculties[i % faculties.length],

    field:
      fields[i % fields.length]
  });

}


/* =====================================================
   ISI SELECT FAKULTAS
===================================================== */

const facultySelect =
  document.getElementById("facultySelect");

faculties.forEach(function (faculty) {

  const option =
    document.createElement("option");

  option.value = faculty;

  option.textContent = faculty;

  facultySelect.appendChild(option);

});


/* =====================================================
   SEARCH 497 DOSEN
===================================================== */

const facultySearch =
  document.getElementById("facultySearch");

const facultyList =
  document.getElementById("facultyList");


function renderFaculty() {

  const search =
    facultySearch.value
      .toLowerCase()
      .trim();

  const results =
    facultyData.filter(function (person) {

      const text =
        (
          person.name +
          " " +
          person.faculty +
          " " +
          person.field
        ).toLowerCase();

      return text.includes(search);

    });


  facultyList.innerHTML = "";


  results.forEach(function (person) {

    const card =
      document.createElement("div");

    card.className =
      "faculty-person";


    card.innerHTML = `
      <strong>
        ${person.title} ${person.name}
      </strong>

      <span>
        ${person.faculty}
      </span>

      <span>
        Bidang: ${person.field}
      </span>
    `;


    facultyList.appendChild(card);

  });

}


renderFaculty();

facultySearch.addEventListener(
  "input",
  renderFaculty
);


/* =====================================================
   SISTEM MINAT & BAKAT
===================================================== */

const interestRules = [

  {
    keywords: [
      "gambar",
      "menggambar",
      "lukis",
      "melukis",
      "seni",
      "desain",
      "design",
      "ilustrasi",
      "fotografi",
      "poster"
    ],
    faculty:
      "Fakultas Seni dan Desain"
  },

  {
    keywords: [
      "coding",
      "programming",
      "komputer",
      "website",
      "web",
      "aplikasi",
      "teknologi",
      "software"
    ],
    faculty:
      "Fakultas Ilmu Komputer"
  },

  {
    keywords: [
      "dokter",
      "medis",
      "kesehatan",
      "pasien",
      "rumah sakit"
    ],
    faculty:
      "Fakultas Kedokteran"
  },

  {
    keywords: [
      "hukum",
      "pengacara",
      "keadilan",
      "undang",
      "peraturan"
    ],
    faculty:
      "Fakultas Hukum"
  },

  {
    keywords: [
      "bisnis",
      "jualan",
      "usaha",
      "ekonomi",
      "keuangan",
      "dagang"
    ],
    faculty:
      "Fakultas Ekonomi dan Bisnis"
  },

  {
    keywords: [
      "guru",
      "mengajar",
      "pendidikan",
      "mengajari",
      "sekolah"
    ],
    faculty:
      "Fakultas Pendidikan"
  },

  {
    keywords: [
      "mesin",
      "robot",
      "bangunan",
      "teknik",
      "elektronik"
    ],
    faculty:
      "Fakultas Teknik"
  },

  {
    keywords: [
      "olahraga",
      "atlet",
      "lari",
      "basket",
      "voli",
      "sepakbola"
    ],
    faculty:
      "Fakultas Ilmu Keolahragaan"
  },

  {
    keywords: [
      "musik",
      "menyanyi",
      "gitar",
      "piano",
      "drum"
    ],
    faculty:
      "Fakultas Seni dan Desain"
  }

];


document
  .getElementById("interestForm")
  .addEventListener(
    "submit",
    function (event) {

      event.preventDefault();


      const text =
        document
          .getElementById("interestText")
          .value
          .toLowerCase();


      let recommendation =
        "Fakultas Ilmu Sosial dan Ilmu Politik";


      let detected = [];


      for (
        const rule of interestRules
      ) {

        const matches =
          rule.keywords.filter(
            function (keyword) {

              return text.includes(keyword);

            }
          );


        if (matches.length > 0) {

          recommendation =
            rule.faculty;

          detected =
            matches;

          break;

        }

      }


      facultySelect.value =
        recommendation;


      const result =
        document.getElementById(
          "recommendation"
        );


      result.className =
        "success";


      result.innerHTML = `

        <strong>
          Rekomendasi Fakultas
        </strong>

        <br><br>

        ${recommendation}

        <br><br>

        Minat yang terdeteksi:

        <strong>
          ${
            detected.length
              ? detected.join(", ")
              : "minat umum"
          }
        </strong>

      `;

    }
  );


/* =====================================================
   VALIDASI NOMOR HP
===================================================== */

function validPhone(phone) {

  const cleaned =
    phone.replace(
      /[\s-]/g,
      ""
    );


  return /^(08\d{8,12}|\+628\d{8,12}|628\d{8,12})$/
    .test(cleaned);

}


/* =====================================================
   VALIDASI SEKOLAH
===================================================== */

function validSchool(school) {

  return /^(SMA|SMK|MA|MAN|SMAN|SMKN)\s/i
    .test(
      school.trim()
    );

}


/* =====================================================
   NOMOR UJIAN RANDOM
===================================================== */

function generateExamNumber() {

  const characters =
    "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";


  let randomCode = "";


  for (let i = 0; i < 6; i++) {

    randomCode +=
      characters[
        Math.floor(
          Math.random() *
          characters.length
        )
      ];

  }


  return "UM-26-" + randomCode;

}


/* =====================================================
   PENDAFTARAN
===================================================== */

document
  .getElementById("registrationForm")
  .addEventListener(
    "submit",
    function (event) {

      event.preventDefault();


      const name =
        document
          .getElementById("studentName")
          .value
          .trim();


      const identity =
        document
          .getElementById("studentId")
          .value
          .trim();


      const email =
        document
          .getElementById("studentEmail")
          .value
          .trim();


      const phone =
        document
          .getElementById("studentPhone")
          .value
          .trim();


      const school =
        document
          .getElementById("studentSchool")
          .value
          .trim();


      const faculty =
        document
          .getElementById("facultySelect")
          .value;


      const path =
        document
          .getElementById("registrationPath")
          .value;


      const result =
        document
          .getElementById(
            "registrationResult"
          );


      /* VALIDASI NOMOR HP */

      if (!validPhone(phone)) {

        result.className =
          "error";

        result.textContent =
          "Nomor WhatsApp Indonesia tidak valid.";

        return;

      }


      /* VALIDASI SEKOLAH */

      if (!validSchool(school)) {

        result.className =
          "error";

        result.textContent =
          "Nama sekolah harus menggunakan format SMA, SMK, MA, MAN, SMAN, atau SMKN.";

        return;

      }


      /* BUAT NOMOR UJIAN */

      let examNumber;


      do {

        examNumber =
          generateExamNumber();

      }
      while (
        localStorage.getItem(
          "mowtown_" +
          examNumber
        )
      );


      /* DATA MAHASISWA */

      const student = {

        name,
        identity,
        email,
        phone,
        school,
        faculty,
        path,
        examNumber

      };


      localStorage.setItem(
        "mowtown_" +
        examNumber,

        JSON.stringify(student)
      );


      /* LIVE PENDAFTAR */

      let applicants =
        Number(
          localStorage.getItem(
            "mowtownApplicants"
          ) ||
          8421
        );


      applicants++;


      localStorage.setItem(
        "mowtownApplicants",
        applicants
      );


      updateApplicants(
        applicants
      );


      /* BERHASIL */

      result.className =
        "success";


      result.innerHTML = `

        <strong>
          Pendaftaran berhasil!
        </strong>

        <br><br>

        Nomor ujian kamu:

        <br>

        <strong style="font-size:20px">
          ${examNumber}
        </strong>

        <br><br>

        Simpan nomor ini karena diperlukan
        untuk membuat kartu ujian.

      `;

    }
  );


/* =====================================================
   LIVE APPLICANTS
===================================================== */

let applicants =
  Number(
    localStorage.getItem(
      "mowtownApplicants"
    ) ||
    8421
  );


function updateApplicants(number) {

  document
    .getElementById(
      "totalApplicants"
    )
    .textContent =
      number.toLocaleString("id-ID");


  document
    .getElementById(
      "liveApplicants"
    )
    .textContent =
      number.toLocaleString("id-ID");

}


updateApplicants(
  applicants
);


/*
  simulasi perubahan live
  setiap 30 detik
*/

setInterval(
  function () {

    applicants++;

    localStorage.setItem(
      "mowtownApplicants",
      applicants
    );

    updateApplicants(
      applicants
    );

  },
  30000
);


/* =====================================================
   JADWAL UJIAN RANDOM
===================================================== */

const examRooms = [

  "Gedung A · Ruang 204",
  "Gedung B · Ruang 311",
  "Gedung C · Auditorium 2",
  "Gedung D · Ruang 107",
  "Gedung E · Lab 4"

];


const examMentors = [

  "Dr. Rania Prameswari, M.Pd.",
  "Prof. Galih Wicaksana, Ph.D.",
  "Dr. Naufal Adhitama, M.T.",
  "Prof. Salsabila Kirana, M.Sc.",
  "Dr. Reza Mahardika, M.Si."

];


const examDates = [

  "18 September 2026",
  "21 September 2026",
  "24 September 2026",
  "28 September 2026",
  "1 Oktober 2026"

];


const examTimes = [

  "08:00–09:30 WIB",
  "10:00–11:30 WIB",
  "13:00–14:30 WIB",
  "15:00–16:30 WIB"

];


function randomItem(array) {

  return array[
    Math.floor(
      Math.random() *
      array.length
    )
  ];

}


/* =====================================================
   KARTU UJIAN
===================================================== */

document
  .getElementById("examCardForm")
  .addEventListener(
    "submit",
    function (event) {

      event.preventDefault();


      const number =
        document
          .getElementById(
            "examNumberInput"
          )
          .value
          .trim()
          .toUpperCase();


      const data =
        localStorage.getItem(
          "mowtown_" +
          number
        );


      const message =
        document.getElementById(
          "examMessage"
        );


      const card =
        document.getElementById(
          "examCard"
        );


      /* NOMOR SALAH */

      if (!data) {

        message.className =
          "error";

        message.textContent =
          "Nomor ujian tidak ditemukan. Silakan daftar terlebih dahulu.";

        card.innerHTML = "";

        return;

      }


      const student =
        JSON.parse(data);


      /* JADWAL TETAP UNTUK NOMOR TERSEBUT */

      const scheduleKey =
        "schedule_" +
        number;


      let schedule =
        localStorage.getItem(
          scheduleKey
        );


      if (!schedule) {

        schedule = {

          date:
            randomItem(
              examDates
            ),

          time:
            randomItem(
              examTimes
            ),

          room:
            randomItem(
              examRooms
            ),

          seat:
            Math.floor(
              Math.random() * 240
            ) + 1,

          mentor:
            randomItem(
              examMentors
            )

        };


        localStorage.setItem(
          scheduleKey,
          JSON.stringify(
            schedule
          )
        );

      } else {

        schedule =
          JSON.parse(
            schedule
          );

      }


      message.className =
        "success";


      message.textContent =
        "Nomor ujian valid. Kartu ujian ditemukan.";


      card.innerHTML = `

        <div class="exam-card">

          <div class="exam-header">

            <div>

              <h3>
                ${student.name}
              </h3>

              <p>
                ${student.faculty}
              </p>

            </div>

            <div class="exam-number">
              ${student.examNumber}
            </div>

          </div>


          <div class="exam-grid">

            <div class="exam-info">

              <small>
                Nama
              </small>

              <strong>
                ${student.name}
              </strong>

            </div>


            <div class="exam-info">

              <small>
                Asal Sekolah
              </small>

              <strong>
                ${student.school}
              </strong>

            </div>


            <div class="exam-info">

              <small>
                Fakultas
              </small>

              <strong>
                ${student.faculty}
              </strong>

            </div>


            <div class="exam-info">

              <small>
                Jalur
              </small>

              <strong>
                ${student.path}
              </strong>

            </div>


            <div class="exam-info">

              <small>
                Tanggal
              </small>

              <strong>
                ${schedule.date}
              </strong>

            </div>


            <div class="exam-info">

              <small>
                Jam
              </small>

              <strong>
                ${schedule.time}
              </strong>

            </div>


            <div class="exam-info">

              <small>
                Ruangan
              </small>

              <strong>
                ${schedule.room}
              </strong>

            </div>


            <div class="exam-info">

              <small>
                Nomor Kursi
              </small>

              <strong>
                ${schedule.seat}
              </strong>

            </div>


            <div class="exam-info">

              <small>
                Pembimbing
              </small>

              <strong>
                ${schedule.mentor}
              </strong>

            </div>

          </div>


          <button
            class="start-exam"
            onclick="startOnlineExam()">

            MULAI UJIAN ONLINE

          </button>

        </div>

      `;


      window.currentStudent =
        student;

    }
  );


/* =====================================================
   SOAL UJIAN
===================================================== */

const questions = [

  {
    question:
      "Apa fungsi utama sistem operasi?",

    options: [

      "Mengelola perangkat keras dan perangkat lunak",
      "Membuat kabel komputer",
      "Menghapus semua data",
      "Memperbesar layar"

    ],

    answer: 0

  },

  {
    question:
      "Hasil dari 12 × 8 adalah...",

    options: [

      "86",
      "96",
      "108",
      "112"

    ],

    answer: 1

  },

  {
    question:
      "Bahasa yang digunakan untuk mengatur tampilan halaman web adalah...",

    options: [

      "HTML",
      "CSS",
      "SQL",
      "Python"

    ],

    answer: 1

  },

  {
    question:
      "Planet yang dikenal sebagai Planet Merah adalah...",

    options: [

      "Venus",
      "Mars",
      "Jupiter",
      "Saturnus"

    ],

    answer: 1

  },

  {
    question:
      "Sikap yang penting dalam lingkungan akademik adalah...",

    options: [

      "Mencontek",
      "Jujur",
      "Mengabaikan aturan",
      "Memalsukan data"

    ],

    answer: 1

  },

  {
    question:
      "Ibukota Indonesia adalah...",

    options: [

      "Bandung",
      "Surabaya",
      "Jakarta",
      "Yogyakarta"

    ],

    answer: 2

  },

  {
    question:
      "HTML merupakan singkatan dari...",

    options: [

      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Modern Language",
      "Home Text Markup Link"

    ],

    answer: 0

  },

  {
    question:
      "Contoh sumber energi terbarukan adalah...",

    options: [

      "Batu bara",
      "Minyak bumi",
      "Matahari",
      "Gas alam"

    ],

    answer: 2

  },

  {
    question:
      "Tujuan utama pendidikan tinggi adalah...",

    options: [

      "Mengembangkan pengetahuan dan kemampuan",
      "Menghindari pembelajaran",
      "Mengurangi penelitian",
      "Menghapus kreativitas"

    ],

    answer: 0

  },

  {
    question:
      "Jika semua A adalah B dan semua B adalah C, maka...",

    options: [

      "Semua A adalah C",
      "Tidak ada A yang C",
      "Semua C adalah A",
      "A dan C pasti berbeda"

    ],

    answer: 0

  }

];


/* =====================================================
   ENGINE UJIAN ONLINE
===================================================== */

let currentQuestion = 0;

let answers = [];

let examSeconds = 600;

let examTimer = null;


function startOnlineExam() {

  if (!window.currentStudent) {

    return;

  }


  const oldResult =
    localStorage.getItem(
      "examResult_" +
      window.currentStudent.examNumber
    );


  document
    .getElementById(
      "examModal"
    )
    .classList.add("show");


  if (oldResult) {

    showExamResult(
      JSON.parse(
        oldResult
      )
    );

    return;

  }


  currentQuestion = 0;

  answers =
    Array(
      questions.length
    ).fill(null);


  examSeconds = 600;


  renderQuestion();


  clearInterval(
    examTimer
  );


  examTimer =
    setInterval(
      function () {

        examSeconds--;

        updateTimer();


        if (
          examSeconds <= 0
        ) {

          clearInterval(
            examTimer
          );

          submitExam(true);

        }

      },
      1000
    );

}


/* =====================================================
   RENDER SOAL
===================================================== */

function renderQuestion() {

  const question =
    questions[
      currentQuestion
    ];


  const container =
    document.getElementById(
      "onlineExam"
    );


  container.innerHTML = `

    <div class="online-top">

      <div>

        <small>
          ONLINE ADMISSION EXAM
        </small>

        <h2>
          ${window.currentStudent.name}
        </h2>

      </div>

      <div
        class="timer"
        id="examTimer">

        10:00

      </div>

    </div>


    <div class="question">

      <div class="question-number">

        SOAL
        ${currentQuestion + 1}
        /
        ${questions.length}

      </div>


      <h3>
        ${question.question}
      </h3>


      ${

        question.options
          .map(
            function (
              option,
              index
            ) {

              return `

                <label
                  class="answer-option">

                  <input
                    type="radio"
                    name="answer"
                    ${
                      answers[
                        currentQuestion
                      ] === index
                        ? "checked"
                        : ""
                    }
                    onchange="
                      answers[
                        ${currentQuestion}
                      ] = ${index}
                    "
                  >

                  ${String.fromCharCode(
                    65 + index
                  )}.
                  ${option}

                </label>

              `;

            }
          )
          .join("")

      }

    </div>


    <div class="exam-buttons">

      <button
        onclick="previousQuestion()"
        ${
          currentQuestion === 0
            ? "disabled"
            : ""
        }>

        ← Sebelumnya

      </button>


      ${
        currentQuestion ===
        questions.length - 1

          ? `

            <button
              onclick="submitExam()">

              Kirim Jawaban

            </button>

          `

          : `

            <button
              onclick="nextQuestion()">

              Berikutnya →

            </button>

          `
      }

    </div>

  `;


  updateTimer();

}


/* =====================================================
   NEXT
===================================================== */

function nextQuestion() {

  if (
    answers[
      currentQuestion
    ] === null
  ) {

    alert(
      "pilih jawaban terlebih dahulu."
    );

    return;

  }


  if (
    currentQuestion <
    questions.length - 1
  ) {

    currentQuestion++;

    renderQuestion();

  }

}


/* =====================================================
   PREVIOUS
===================================================== */

function previousQuestion() {

  if (
    currentQuestion > 0
  ) {

    currentQuestion--;

    renderQuestion();

  }

}


/* =====================================================
   TIMER
===================================================== */

function updateTimer() {

  const timer =
    document.getElementById(
      "examTimer"
    );


  if (!timer) {

    return;

  }


  const minutes =
    Math.floor(
      examSeconds / 60
    );


  const seconds =
    examSeconds % 60;


  timer.textContent =
    String(minutes)
      .padStart(2, "0") +
    ":" +
    String(seconds)
      .padStart(2, "0");

}


/* =====================================================
   SUBMIT UJIAN
===================================================== */

function submitExam(
  automatic = false
) {

  if (
    !automatic &&
    !confirm(
      "Yakin ingin mengirim jawaban?"
    )
  ) {

    return;

  }


  clearInterval(
    examTimer
  );


  let correct = 0;


  questions.forEach(
    function (
      question,
      index
    ) {

      if (
        answers[index] ===
        question.answer
      ) {

        correct++;

      }

    }
  );


  const score =
    Math.round(
      (
        correct /
        questions.length
      ) * 100
    );


  const result = {

    score,

    correct,

    total:
      questions.length

  };


  localStorage.setItem(

    "examResult_" +
    window.currentStudent.examNumber,

    JSON.stringify(
      result
    )

  );


  showExamResult(
    result
  );

}


/* =====================================================
   HASIL UJIAN
===================================================== */

function showExamResult(
  result
) {

  const passed =
    result.score >= 70;


  document
    .getElementById(
      "onlineExam"
    )
    .innerHTML = `

      <div class="result">

        <small>
          UJIAN SELESAI
        </small>


        <h2>
          ${window.currentStudent.name}
        </h2>


        <div class="result-score">

          ${result.score}

        </div>


        <p>

          ${result.correct}
          dari
          ${result.total}
          soal benar.

        </p>


        <br>


        <h3>

          ${
            passed
              ? "SELAMAT — LULUS"
              : "BELUM LULUS"
          }

        </h3>

      </div>

    `;

}


/* =====================================================
   CLOSE ONLINE EXAM
===================================================== */

function closeOnlineExam() {

  clearInterval(
    examTimer
  );


  document
    .getElementById(
      "examModal"
    )
    .classList.remove(
      "show"
    );

}


/* =====================================================
   NEWS
===================================================== */

const news = [

  "Pendaftaran mahasiswa baru Mowtown memasuki periode baru.",

  "Mowtown membuka pusat inovasi dan riset terbaru.",

  "Program pertukaran mahasiswa internasional resmi dibuka.",

  "Tim mahasiswa Mowtown meraih prestasi nasional.",

  "Perpustakaan pusat memperpanjang jam layanan.",

  "Fakultas baru membuka program akademik unggulan.",

  "Mowtown memperluas kerja sama penelitian.",

  "Seleksi Mowtown memasuki tahap berikutnya."

];


const newsList =
  document.getElementById(
    "newsList"
  );


function addNews(
  title
) {

  const item =
    document.createElement(
      "article"
    );


  item.className =
    "news-item";


  item.innerHTML = `

    <b>
      NEWS
    </b>


    <div>

      <h3>
        ${title}
      </h3>

      <small>
        Live Update · Mowtown News
      </small>

    </div>


    <div class="news-date">

      ${new Date()
        .toLocaleDateString(
          "id-ID"
        )}

    </div>

  `;


  newsList.prepend(
    item
  );

}


news
  .slice(0, 5)
  .forEach(
    addNews
  );


/* berita baru berkala */

setInterval(
  function () {

    addNews(
      randomItem(
        news
      )
    );

  },
  300000
);
