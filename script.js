const faculties = {

  "Fakultas Kedokteran": [
    "Kedokteran"
  ],

  "Fakultas Kedokteran Gigi": [
    "Kedokteran Gigi"
  ],

  "Fakultas Teknik": [
    "Teknik Sipil",
    "Teknik Mesin",
    "Teknik Elektro",
    "Teknik Industri",
    "Teknik Kimia",
    "Teknik Lingkungan",
    "Teknik Geologi"
  ],

  "Fakultas Ilmu Komputer": [
    "Informatika",
    "Sistem Informasi",
    "Teknologi Informasi",
    "Sains Data"
  ],

  "Fakultas Matematika dan Ilmu Pengetahuan Alam": [
    "Matematika",
    "Fisika",
    "Kimia",
    "Biologi",
    "Statistika"
  ],

  "Fakultas Ekonomi dan Bisnis": [
    "Manajemen",
    "Akuntansi",
    "Ilmu Ekonomi",
    "Ekonomi Pembangunan",
    "Bisnis Digital"
  ],

  "Fakultas Hukum": [
    "Ilmu Hukum"
  ],

  "Fakultas Ilmu Sosial dan Ilmu Politik": [
    "Ilmu Komunikasi",
    "Ilmu Politik",
    "Sosiologi",
    "Hubungan Internasional",
    "Administrasi Publik"
  ],

  "Fakultas Psikologi": [
    "Psikologi"
  ],

  "Fakultas Ilmu Budaya": [
    "Sastra Indonesia",
    "Sastra Inggris",
    "Sejarah",
    "Bahasa dan Sastra Asing",
    "Antropologi"
  ],

  "Fakultas Pertanian": [
    "Agroteknologi",
    "Agribisnis",
    "Ilmu Tanah",
    "Peternakan",
    "Kehutanan"
  ],

  "Fakultas Perikanan dan Ilmu Kelautan": [
    "Ilmu Kelautan",
    "Perikanan",
    "Manajemen Sumber Daya Perairan",
    "Teknologi Hasil Perikanan"
  ],

  "Fakultas Ilmu Pendidikan": [
    "Pendidikan Matematika",
    "Pendidikan Bahasa Indonesia",
    "Pendidikan Bahasa Inggris",
    "Pendidikan Biologi",
    "Pendidikan Fisika",
    "PGSD"
  ],

  "Fakultas Seni dan Desain": [
    "Desain Komunikasi Visual",
    "Seni Rupa",
    "Desain Interior",
    "Seni Musik",
    "Film dan Televisi"
  ]

};


/* FACULTY */

const facultyGrid =
  document.getElementById("facultyGrid");

Object.entries(faculties).forEach(
  ([faculty, programs], index) => {

    facultyGrid.innerHTML += `

      <article
        class="faculty-item"
        onclick="openFaculty('${faculty}')"
      >

        <span>
          ${String(index + 1).padStart(2,"0")}
        </span>

        <strong>
          ${faculty.replace("Fakultas ","")}
        </strong>

        <small>
          ${programs.length} program studi
        </small>

      </article>

    `;

  }
);


/* DOSEN */

const professors = [

  [
    "Prof. Dr. Armand Wiratama, M.Hum.",
    "Sejarah & Peradaban",
    "AW"
  ],

  [
    "Dr. Nadine Prameswari, S.T., M.T.",
    "Teknik Industri",
    "NP"
  ],

  [
    "Prof. Dr. Raka Mahendra, S.E., M.B.A.",
    "Manajemen Strategis",
    "RM"
  ],

  [
    "Dr. Kirana Adinata, S.Kom., M.Kom.",
    "Sains Data",
    "KA"
  ]

];

const professorGrid =
  document.getElementById("professorGrid");

professors.forEach(professor => {

  professorGrid.innerHTML += `

    <article class="professor">

      <div class="professor-photo">
        ${professor[2]}
      </div>

      <strong>
        ${professor[0]}
      </strong>

      <small>
        ${professor[1]}
      </small>

    </article>

  `;

});


/* RANKING */

const ranking = [

  [
    "01",
    "Aurelia Nathania Putri",
    "Fakultas Kedokteran",
    "3.98"
  ],

  [
    "02",
    "Rafael Aditya Wirawan",
    "Fakultas Teknik",
    "3.96"
  ],

  [
    "03",
    "Naufal Arkan Pratama",
    "Fakultas Ilmu Komputer",
    "3.95"
  ],

  [
    "04",
    "Keisha Anindya Maheswari",
    "Fakultas Ekonomi dan Bisnis",
    "3.94"
  ],

  [
    "05",
    "Dimas Arya Ramadhan",
    "Fakultas Hukum",
    "3.93"
  ],

  [
    "06",
    "Alessandra Putri Wijaya",
    "Fakultas Psikologi",
    "3.92"
  ],

  [
    "07",
    "Fathan Rizky Alamsyah",
    "Fakultas Kedokteran Gigi",
    "3.91"
  ],

  [
    "08",
    "Nayla Azzahra Kirana",
    "Fakultas Teknik",
    "3.90"
  ]

];

const rankingList =
  document.getElementById("rankingList");

ranking.forEach(student => {

  rankingList.innerHTML += `

    <div class="ranking-row">

      <span class="rank-number">
        ${student[0]}
      </span>

      <span class="rank-name">
        ${student[1]}
      </span>

      <span class="rank-faculty">
        ${student[2]}
      </span>

      <span class="rank-score">
        ${student[3]}
      </span>

    </div>

  `;

});


/* NEWS */

const news = [

  [
    "news-one",
    "12 AUG 2026",
    "Mowtown opens a new chapter in research",
    "New interdisciplinary research programmes bring students and faculty together."
  ],

  [
    "news-two",
    "08 AUG 2026",
    "497 academics prepare for the new term",
    "Faculty development and new academic initiatives are ready for 2026/27."
  ],

  [
    "news-three",
    "03 AUG 2026",
    "A new home for the Mowtown community",
    "Student Residence opens new collaborative spaces for residents."
  ],

  [
    "news-four",
    "28 JUL 2026",
    "Mowtown students recognised nationally",
    "Students receive recognition for work across science, arts and social impact."
  ]

];

const newsGrid =
  document.getElementById("newsGrid");

news.forEach(article => {

  newsGrid.innerHTML += `

    <article
      class="news-card"
      onclick="openArticle(
        '${article[1]}',
        '${article[2]}',
        '${article[3]}'
      )"
    >

      <div class="news-image ${article[0]}"></div>

      <div class="news-body">

        <small>
          ${article[1]}
        </small>

        <strong>
          ${article[2]}
        </strong>

        <p>
          ${article[3]}
        </p>

      </div>

    </article>

  `;

});


/* PMB SELECT */

const facultySelect =
  document.getElementById("facultySelect");

const majorSelect =
  document.getElementById("majorSelect");

Object.keys(faculties).forEach(faculty => {

  facultySelect.add(
    new Option(faculty, faculty)
  );

});

facultySelect.addEventListener(
  "change",
  () => {

    majorSelect.innerHTML =
      `<option value="">
        Choose programme
      </option>`;

    const programs =
      faculties[facultySelect.value] || [];

    programs.forEach(program => {

      majorSelect.add(
        new Option(program, program)
      );

    });

  }
);


/* PMB */

const registrationForm =
  document.getElementById("registrationForm");

registrationForm.addEventListener(
  "submit",
  event => {

    event.preventDefault();

    const formData =
      new FormData(registrationForm);

    const number =
      `MOW-26-${Math.floor(
        100000 +
        Math.random() * 900000
      )}`;

    document.getElementById(
      "examNumber"
    ).textContent = number;

    document
      .getElementById("registrationResult")
      .classList.remove("hidden");

    localStorage.setItem(
      "mowtownApplicant",
      JSON.stringify({

        name: formData.get("name"),

        email: formData.get("email"),

        phone: formData.get("phone"),

        faculty: facultySelect.value,

        major: majorSelect.value,

        examNumber: number

      })
    );

    document
      .getElementById("registrationResult")
      .scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

  }
);


/* EXAM CARD */

const schedules = [

  [
    "24 AUG 2026",
    "08:00 WIB",
    "Grand Hall A-201"
  ],

  [
    "24 AUG 2026",
    "10:30 WIB",
    "Science Centre B-304"
  ],

  [
    "25 AUG 2026",
    "13:00 WIB",
    "Academic Tower C-105"
  ],

  [
    "26 AUG 2026",
    "08:30 WIB",
    "Faculty Hall D-402"
  ],

  [
    "27 AUG 2026",
    "14:00 WIB",
    "Innovation Centre E-207"
  ],

  [
    "28 AUG 2026",
    "09:30 WIB",
    "Mowtown Hall F-301"
  ]

];


function generateCard() {

  const name =
    document
      .getElementById("cardName")
      .value
      .trim();

  const number =
    document
      .getElementById("cardNumber")
      .value
      .trim();

  if (!name || !number) {

    alert(
      "Isi nama dan nomor pendaftaran dulu."
    );

    return;
  }

  const schedule =
    schedules[
      Math.floor(
        Math.random() *
        schedules.length
      )
    ];

  document.getElementById(
    "cardParticipant"
  ).textContent = name;

  document.getElementById(
    "cardRegistration"
  ).textContent = number;

  document.getElementById(
    "cardDate"
  ).textContent = schedule[0];

  document.getElementById(
    "cardTime"
  ).textContent = schedule[1];

  document.getElementById(
    "cardRoom"
  ).textContent = schedule[2];

  document
    .getElementById("examCard")
    .classList.remove("hidden");

  document
    .getElementById("examCard")
    .scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

}


/* MENU */

function toggleMenu() {

  document
    .getElementById("navMenu")
    .classList.toggle("open");

}


/* MODAL */

const modal =
  document.getElementById("modal");

const modalContent =
  document.getElementById("modalContent");


function openModal(content) {

  modalContent.innerHTML =
    content;

  modal.classList.remove("hidden");

}


function closeModal() {

  modal.classList.add("hidden");

}


/* FACULTY MODAL */

function openFaculty(name) {

  const programs =
    faculties[name];

  const list =
    programs
      .map(
        (program,index) => `

          <div>

            <b>
              ${String(index + 1).padStart(2,"0")}
              ·
              ${program}
            </b>

            <br>

            <small>
              Program Sarjana ·
              University of Mowtown
            </small>

          </div>

        `
      )
      .join("");

  openModal(`

    <div class="section-label">
      FACULTY
    </div>

    <h2>
      ${name.replace("Fakultas ","")}
    </h2>

    <p>
      Program studi yang tersedia
      di ${name}.
    </p>

    <div class="modal-list">
      ${list}
    </div>

  `);

}


/* LECTURERS */

function openLecturers() {

  const names = [

    "Prof. Dr. Armand Wiratama, M.Hum.",
    "Dr. Nadine Prameswari, S.T., M.T.",
    "Prof. Dr. Raka Mahendra, S.E., M.B.A.",
    "Dr. Kirana Adinata, S.Kom., M.Kom.",
    "Prof. Dr. Salma Kartika, S.Psi., M.Psi.",
    "Dr. Bima Prasetyo, S.H., LL.M."
  ];

  let list = "";

  for(let i = 0; i < 24; i++) {

    const name =
      names[i % names.length];

    const faculty =
      Object.keys(faculties)
      [i % Object.keys(faculties).length];

    list += `

      <div>

        <b>
          ${name}
        </b>

        <br>

        <small>
          ${faculty}
          ·
          Academic Faculty
        </small>

      </div>

    `;

  }

  openModal(`

    <div class="section-label">
      ACADEMIC DIRECTORY
    </div>

    <h2>
      497 lecturers.
    </h2>

    <p>
      University of Mowtown memiliki
      497 dosen dan tenaga akademik.
    </p>

    <div class="modal-list">
      ${list}
    </div>

  `);

}


/* FEES */

function openFee(type) {

  let content = "";

  if(type === "regular") {

    content = `

      <div class="section-label">
        UKT REGULER
      </div>

      <h2>
        Tuition details.
      </h2>

      <div class="modal-list">

        <div>
          UKT akademik
          <br>
          <b>
            Rp8.000.000–18.000.000
            / semester
          </b>
        </div>

        <div>
          Registrasi awal
          <br>
          <b>
            Rp1.500.000
          </b>
        </div>

        <div>
          Perpustakaan
          <br>
          <b>
            Included
          </b>
        </div>

        <div>
          Sistem akademik
          <br>
          <b>
            Included
          </b>
        </div>

      </div>

    `;

  }


  if(type === "fast") {

    content = `

      <div class="section-label">
        FAST TRACK
      </div>

      <h2>
        Accelerated route.
      </h2>

      <div class="modal-list">

        <div>
          UKT
          <br>
          <b>
            Rp18.000.000–28.000.000
            / semester
          </b>
        </div>

        <div>
          Academic intensive
          <br>
          <b>
            Included
          </b>
        </div>

        <div>
          Academic mentoring
          <br>
          <b>
            Included
          </b>
        </div>

        <div>
          Residence
          <br>
          <b>
            Included by programme
          </b>
        </div>

      </div>

    `;

  }


  if(type === "mandiri") {

    content = `

      <div class="section-label">
        JALUR MANDIRI
      </div>

      <h2>
        Independent admission.
      </h2>

      <div class="modal-list">

        <div>
          UKT
          <br>
          <b>
            Rp15.000.000–30.000.000
            / semester
          </b>
        </div>

        <div>
          Registration
          <br>
          <b>
            Rp2.000.000
          </b>
        </div>

        <div>
          Residence
          <br>
          <b>
            Available
          </b>
        </div>

        <div>
          Academic services
          <br>
          <b>
            Included
          </b>
        </div>

      </div>

    `;

  }


  if(type === "scholarship") {

    content = `

      <div class="section-label">
        FULLY FUNDED SCHOLARSHIP
      </div>

      <h2>
        100% funded.
      </h2>

      <p>
        Penerima beasiswa mendapatkan
        dukungan penuh sesuai ketentuan
        program.
      </p>

      <div class="modal-list">

        <div>
          Tuition
          <br>
          <b>
            100% covered
          </b>
        </div>

        <div>
          Uang saku bulanan
          <br>
          <b>
            Rp11.500.000 / bulan
          </b>
        </div>

        <div>
          Asrama
          <br>
          <b>
            Gratis
          </b>
        </div>

        <div>
          Academic support
          <br>
          <b>
            Included
          </b>
        </div>

      </div>

    `;

  }

  openModal(content);

}


/* NEWS ARTICLE */

function openArticle(
  date,
  title,
  description
) {

  openModal(`

    <div class="section-label">
      ${date}
    </div>

    <h2>
      ${title}
    </h2>

    <p>
      ${description}
    </p>

    <p>
      Artikel lengkap Mowtown News
      berisi informasi kegiatan,
      pencapaian, dan perkembangan
      terbaru University of Mowtown.
    </p>

  `);

}


/* NEWS ARCHIVE */

function openNewsArchive() {

  let list = "";

  news.forEach(article => {

    list += `

      <div>

        <b>
          ${article[2]}
        </b>

        <br>

        <small>
          ${article[1]}
        </small>

      </div>

    `;

  });

  openModal(`

    <div class="section-label">
      NEWS ARCHIVE
    </div>

    <h2>
      Mowtown News.
    </h2>

    <div class="modal-list">
      ${list}
    </div>

  `);

}


/* CLOSE MODAL WHEN CLICK OUTSIDE */

modal.addEventListener(
  "click",
  event => {

    if(event.target === modal) {

      closeModal();

    }

  }
);
