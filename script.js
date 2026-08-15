/* =========================================================
   UNIVERSITY OF MOWTOWN
   SCRIPT.JS
   ========================================================= */

"use strict";

/* =========================================================
   HELPER
   ========================================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const hamburger = $("#hamburger");
const navMenu = $("#navMenu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });
}


/* =========================================================
   LIVE APPLICANT COUNTER
   ========================================================= */

const applicantCounter = $("#applicantCounter");

let applicants = 8421;

function updateApplicantCounter() {
  if (!applicantCounter) return;

  applicants += randomNumber(0, 3);

  applicantCounter.textContent =
    applicants.toLocaleString("id-ID");
}

setInterval(updateApplicantCounter, 8000);


/* =========================================================
   STUDENT DATABASE
   ========================================================= */

/*
  Kita bikin database 50.000 mahasiswa secara otomatis.
  Nama tidak dibuat semuanya sama.
*/

const firstNames = [
  "Adit",
  "Aditya",
  "Agatha",
  "Ahmad",
  "Aisyah",
  "Alif",
  "Alika",
  "Amanda",
  "Andika",
  "Anisa",
  "Arga",
  "Arif",
  "Bagas",
  "Bima",
  "Cahya",
  "Citra",
  "Daffa",
  "Dania",
  "Darren",
  "Davin",
  "Dewi",
  "Dimas",
  "Dinda",
  "Eka",
  "Elang",
  "Fajar",
  "Fauzan",
  "Felicia",
  "Gilang",
  "Hana",
  "Haris",
  "Ibrahim",
  "Intan",
  "Jasmine",
  "Kevin",
  "Laras",
  "Luthfi",
  "Maya",
  "Nabila",
  "Nadia",
  "Naufal",
  "Nayla",
  "Putra",
  "Raka",
  "Rania",
  "Rizky",
  "Salsa",
  "Satria",
  "Tasya",
  "Zahra"
];

const lastNames = [
  "Abdullah",
  "Adiputra",
  "Ananda",
  "Ardiansyah",
  "Baskara",
  "Cahyono",
  "Darmawan",
  "Fauzi",
  "Firmansyah",
  "Hakim",
  "Halim",
  "Haryanto",
  "Irawan",
  "Iskandar",
  "Kautsar",
  "Kusuma",
  "Lestari",
  "Maulana",
  "Nugraha",
  "Pratama",
  "Putri",
  "Rahman",
  "Ramadhan",
  "Saputra",
  "Setiawan",
  "Siregar",
  "Susanto",
  "Wijaya",
  "Wulandari",
  "Yulianto"
];

const studyFields = [
  "Ilmu Komputer",
  "Kedokteran",
  "Teknik",
  "Psikologi",
  "Ekonomi & Bisnis",
  "Seni & Desain",
  "Hukum",
  "Arsitektur",
  "Farmasi",
  "Matematika",
  "Fisika",
  "Biologi",
  "Kimia",
  "Ilmu Komunikasi",
  "Hubungan Internasional",
  "Pendidikan",
  "Sastra",
  "Agribisnis"
];

const students = [];

const TOTAL_STUDENTS = 50000;


/*
  Seeded-ish generation agar data tidak berubah
  setiap kali halaman melakukan render.
*/

for (let i = 0; i < TOTAL_STUDENTS; i++) {

  const first =
    firstNames[i % firstNames.length];

  const last =
    lastNames[
      Math.floor(i / firstNames.length) %
      lastNames.length
    ];

  const extra =
    Math.floor(i / 1000) > 0
      ? ` ${String.fromCharCode(
          65 + (i % 26)
        )}`
      : "";

  const average =
    78 +
    ((i * 17) % 1800) / 100;

  students.push({
    id: `MOW-${String(i + 1).padStart(6, "0")}`,
    name: `${first} ${last}${extra}`,
    field:
      studyFields[
        (i * 7) % studyFields.length
      ],
    average:
      Math.min(
        99.99,
        Number(average.toFixed(2))
      )
  });
}


/*
  Urutkan alfabetis.
*/

students.sort((a, b) =>
  a.name.localeCompare(
    b.name,
    "id"
  )
);


/* =========================================================
   STUDENT PREVIEW
   ========================================================= */

const studentPreview = $("#studentPreview");

function renderStudentPreview() {

  if (!studentPreview) return;

  const preview = students.slice(0, 10);

  studentPreview.innerHTML =
    preview.map((student, index) => {

      return `
        <tr>
          <td>${index + 1}</td>

          <td>
            <strong>
              ${escapeHTML(student.name)}
            </strong>
          </td>

          <td>
            ${escapeHTML(student.field)}
          </td>

          <td>
            ${student.average.toFixed(2)}
          </td>
        </tr>
      `;

    }).join("");
}

renderStudentPreview();


/* =========================================================
   STUDENT DIRECTORY DRAWER
   ========================================================= */

const openStudentDirectory =
  $("#openStudentDirectory");

const closeStudentDirectory =
  $("#closeStudentDirectory");

const studentDrawer =
  $("#studentDrawer");

const studentBackdrop =
  $("#studentBackdrop");

const studentSearch =
  $("#studentSearch");

const studentResults =
  $("#studentResults");

const studentPagination =
  $("#studentPagination");

const searchResultCount =
  $("#searchResultCount");


let studentPage = 1;

const STUDENTS_PER_PAGE = 20;

let filteredStudents = [...students];


function openDirectory() {

  if (!studentDrawer) return;

  studentDrawer.classList.add("open");

  studentBackdrop.classList.add("show");

  document.body.style.overflow = "hidden";

  renderStudentDirectory();
}


function closeDirectory() {

  if (!studentDrawer) return;

  studentDrawer.classList.remove("open");

  studentBackdrop.classList.remove("show");

  document.body.style.overflow = "";

}


if (openStudentDirectory) {
  openStudentDirectory.addEventListener(
    "click",
    openDirectory
  );
}

if (closeStudentDirectory) {
  closeStudentDirectory.addEventListener(
    "click",
    closeDirectory
  );
}

if (studentBackdrop) {
  studentBackdrop.addEventListener(
    "click",
    closeDirectory
  );
}


function renderStudentDirectory() {

  if (!studentResults) return;

  const start =
    (studentPage - 1) *
    STUDENTS_PER_PAGE;

  const end =
    start +
    STUDENTS_PER_PAGE;

  const pageStudents =
    filteredStudents.slice(
      start,
      end
    );

  studentResults.innerHTML =
    pageStudents.map((student) => {

      return `
        <div class="student-result">

          <div>
            <strong>
              ${escapeHTML(student.name)}
            </strong>

            <small>
              ${escapeHTML(student.id)}
              ·
              ${escapeHTML(student.field)}
            </small>
          </div>

          <div class="student-score">
            ${student.average.toFixed(2)}
          </div>

        </div>
      `;

    }).join("");


  if (searchResultCount) {

    searchResultCount.textContent =
      `${filteredStudents.length.toLocaleString(
        "id-ID"
      )} mahasiswa ditemukan`;

  }

  renderPagination();
}


function renderPagination() {

  if (!studentPagination) return;

  const totalPages =
    Math.ceil(
      filteredStudents.length /
      STUDENTS_PER_PAGE
    );

  studentPagination.innerHTML = "";

  if (totalPages <= 1) return;


  const maxButtons = 7;

  let startPage =
    Math.max(
      1,
      studentPage - 3
    );

  let endPage =
    Math.min(
      totalPages,
      startPage + maxButtons - 1
    );


  if (
    endPage - startPage <
    maxButtons - 1
  ) {
    startPage =
      Math.max(
        1,
        endPage - maxButtons + 1
      );
  }


  if (startPage > 1) {

    createPageButton(
      1,
      "1"
    );

    if (startPage > 2) {

      const dots =
        document.createElement("span");

      dots.textContent = "…";

      dots.style.padding = "8px";

      dots.style.color =
        "var(--muted)";

      studentPagination.appendChild(
        dots
      );
    }
  }


  for (
    let page = startPage;
    page <= endPage;
    page++
  ) {

    createPageButton(
      page,
      String(page)
    );
  }


  if (endPage < totalPages) {

    if (endPage < totalPages - 1) {

      const dots =
        document.createElement("span");

      dots.textContent = "…";

      dots.style.padding = "8px";

      dots.style.color =
        "var(--muted)";

      studentPagination.appendChild(
        dots
      );
    }

    createPageButton(
      totalPages,
      String(totalPages)
    );
  }
}


function createPageButton(
  page,
  text
) {

  const button =
    document.createElement("button");

  button.className =
    "page-button";

  button.textContent =
    text;

  if (page === studentPage) {
    button.classList.add("active");
  }

  button.addEventListener(
    "click",
    () => {

      studentPage = page;

      renderStudentDirectory();

      if (studentDrawer) {
        studentDrawer.scrollTop = 0;
      }

    }
  );

  studentPagination.appendChild(
    button
  );
}


if (studentSearch) {

  studentSearch.addEventListener(
    "input",
    () => {

      const query =
        studentSearch.value
          .trim()
          .toLowerCase();

      filteredStudents =
        students.filter(
          (student) =>
            student.name
              .toLowerCase()
              .includes(query) ||
            student.field
              .toLowerCase()
              .includes(query) ||
            student.id
              .toLowerCase()
              .includes(query)
        );

      studentPage = 1;

      renderStudentDirectory();
    }
  );

}


/* =========================================================
   LEADERBOARD
   ========================================================= */

const leaderboardList =
  $("#leaderboardList");


function getLeaderboard() {

  return [...students]
    .sort(
      (a, b) =>
        b.average - a.average
    )
    .slice(0, 10);
}


function renderLeaderboard() {

  if (!leaderboardList) return;

  const topStudents =
    getLeaderboard();

  leaderboardList.innerHTML =
    topStudents.map(
      (student, index) => {

        return `
          <div class="leader-row">

            <span>
              ${index + 1}
            </span>

            <span>
              ${escapeHTML(student.name)}
            </span>

            <span>
              ${escapeHTML(student.field)}
            </span>

            <span>
              ${student.average.toFixed(2)}
            </span>

          </div>
        `;

      }
    ).join("");
}


renderLeaderboard();

setInterval(
  renderLeaderboard,
  10000
);


/* =========================================================
   BUS ROUTES
   ========================================================= */

const routes = {

  athena: {
    name: "Athena Route",
    stops: [
      "Athena Gate",
      "Library",
      "Academic Center",
      "Hermes Hall"
    ]
  },

  apollo: {
    name: "Apollo Route",
    stops: [
      "Apollo Gate",
      "Engineering",
      "Student Center",
      "Olympus Center"
    ]
  },

  zeus: {
    name: "Zeus Route",
    stops: [
      "Zeus Gate",
      "Rectorate",
      "Medicine",
      "Central Park"
    ]
  },

  hera: {
    name: "Hera Route",
    stops: [
      "Hera Gate",
      "Women Center",
      "Library",
      "Student Center"
    ]
  },

  poseidon: {
    name: "Poseidon Route",
    stops: [
      "Poseidon Gate",
      "Sports Complex",
      "Engineering",
      "Lake Station"
    ]
  },

  artemis: {
    name: "Artemis Route",
    stops: [
      "Artemis Gate",
      "Science Center",
      "Botanical Garden",
      "Library"
    ]
  },

  hermes: {
    name: "Hermes Route",
    stops: [
      "Hermes Hall",
      "Computer Science",
      "Business Center",
      "Athena Gate"
    ]
  },

  demeter: {
    name: "Demeter Route",
    stops: [
      "Demeter Gate",
      "Agriculture",
      "Food Court",
      "Central Park"
    ]
  }

};


const busRoute =
  $("#busRoute");

const busSelect =
  $("#busSelect");

const womenBus =
  $("#womenBus");

const seatMap =
  $("#seatMap");

const selectedSeat =
  $("#selectedSeat");

const bookBus =
  $("#bookBus");


let selectedSeatNumber = null;


/* =========================================================
   BUS STORAGE
   ========================================================= */

/*
  localStorage dipakai agar kursi yang sudah dipesan
  tetap dianggap booked walaupun halaman direfresh.
*/

const BUS_STORAGE_KEY =
  "mowtown_bus_bookings_v1";


function loadBookings() {

  try {

    const saved =
      localStorage.getItem(
        BUS_STORAGE_KEY
      );

    if (!saved) return {};

    const parsed =
      JSON.parse(saved);

    if (
      parsed &&
      typeof parsed === "object"
    ) {
      return parsed;
    }

    return {};

  } catch (error) {

    console.warn(
      "Booking storage rusak. Reset.",
      error
    );

    return {};
  }
}


let busBookings =
  loadBookings();


function saveBookings() {

  try {

    localStorage.setItem(
      BUS_STORAGE_KEY,
      JSON.stringify(busBookings)
    );

  } catch (error) {

    console.warn(
      "Tidak dapat menyimpan booking.",
      error
    );

  }

}


/* =========================================================
   SEAT CREATION
   ========================================================= */

const TOTAL_SEATS = 32;


/*
  Beberapa kursi khusus aksesibel.
*/

const accessibleSeats = [
  1,
  2,
  15,
  16
];


function currentBusKey() {

  const route =
    busRoute
      ? busRoute.value
      : "athena";

  const bus =
    busSelect
      ? busSelect.value
      : "ATH-07";

  const women =
    womenBus &&
    womenBus.checked
      ? "women"
      : "general";

  return `${route}_${bus}_${women}`;
}


function getCurrentBookings() {

  const key =
    currentBusKey();

  if (!Array.isArray(
    busBookings[key]
  )) {

    busBookings[key] = [];

  }

  return busBookings[key];
}


function generateInitialBookings() {

  /*
    Hanya generate sekali untuk bus tertentu.
    Ini bikin bus terasa sudah ramai.
  */

  const buses = [
    "athena_ATH-07_general",
    "apollo_APL-04_general",
    "zeus_ZEU-11_general",
    "hera_HER-08_general"
  ];


  buses.forEach((key, index) => {

    if (
      Array.isArray(
        busBookings[key]
      ) &&
      busBookings[key].length > 0
    ) {
      return;
    }

    const amount =
      7 + index * 2;

    const seats =
      [];

    for (
      let i = 0;
      i < amount;
      i++
    ) {

      const randomSeat =
        randomNumber(
          3,
          TOTAL_SEATS
        );

      if (
        !seats.includes(
          randomSeat
        )
      ) {
        seats.push(
          randomSeat
        );
      }

    }

    busBookings[key] =
      seats;

  });


  saveBookings();
}


generateInitialBookings();


/* =========================================================
   RENDER SEATS
   ========================================================= */

function renderSeats() {

  if (!seatMap) return;

  selectedSeatNumber = null;

  if (selectedSeat) {
    selectedSeat.textContent =
      "Belum ada";
  }


  const bookings =
    getCurrentBookings();

  const isWomenBus =
    womenBus &&
    womenBus.checked;


  seatMap.innerHTML = "";


  for (
    let number = 1;
    number <= TOTAL_SEATS;
    number++
  ) {

    const seat =
      document.createElement("button");

    seat.type = "button";

    seat.className =
      "seat available";

    seat.textContent =
      number;


    /*
      Kursi aksesibel.
    */

    if (
      accessibleSeats.includes(
        number
      )
    ) {

      seat.classList.add(
        "accessible"
      );

      seat.textContent =
        `♿ ${number}`;
    }


    /*
      Women bus:
      kursi diberi warna pink.
    */

    if (isWomenBus) {

      seat.classList.add(
        "women"
      );

    }


    /*
      Kursi yang sudah booked
      tidak boleh dipilih lagi.
    */

    if (
      bookings.includes(
        number
      )
    ) {

      seat.classList.remove(
        "available"
      );

      seat.classList.add(
        "booked"
      );

      seat.disabled = true;

    }


    seat.addEventListener(
      "click",
      () => {

        if (
          seat.disabled
        ) {
          return;
        }


        /*
          Kalau memilih kursi lain,
          hapus selected sebelumnya.
        */

        seatMap
          .querySelectorAll(
            ".selected"
          )
          .forEach(
            (item) => {
              item.classList.remove(
                "selected"
              );

              item.classList.add(
                "available"
              );

              if (
                isWomenBus
              ) {
                item.classList.add(
                  "women"
                );
              }
            }
          );


        seat.classList.remove(
          "available"
        );

        seat.classList.add(
          "selected"
        );


        selectedSeatNumber =
          number;


        if (selectedSeat) {

          selectedSeat.textContent =
            `Kursi ${number}`;

        }

      }
    );


    seatMap.appendChild(
      seat
    );
  }

}


renderSeats();


/* =========================================================
   BUS CHANGE EVENTS
   ========================================================= */

if (busRoute) {

  busRoute.addEventListener(
    "change",
    () => {

      renderSeats();

      updateMapForRoute();

    }
  );

}


if (busSelect) {

  busSelect.addEventListener(
    "change",
    () => {

      renderSeats();

    }
  );

}


if (womenBus) {

  womenBus.addEventListener(
    "change",
    () => {

      renderSeats();

    }
  );

}


/* =========================================================
   E-TICKET
   ========================================================= */

const ticketSection =
  $("#ticketSection");

const ticketName =
  $("#ticketName");

const ticketNim =
  $("#ticketNim");

const ticketRoute =
  $("#ticketRoute");

const ticketBus =
  $("#ticketBus");

const ticketSeat =
  $("#ticketSeat");

const ticketCode =
  $("#ticketCode");

const barcodeGraphic =
  $("#barcodeGraphic");

const barcodeText =
  $("#barcodeText");


function generateBookingCode() {

  const letters =
    "ABCDEFGHJKLMNPQRSTUVWXYZ";

  let result =
    "MOW-";

  for (
    let i = 0;
    i < 6;
    i++
  ) {

    result +=
      randomFrom(
        letters
      );

  }

  result += "-";

  result += randomNumber(
    100,
    999
  );

  return result;
}


function generateNIM() {

  return `26${randomNumber(
    100000,
    999999
  )}`;
}


function generateBarcode(code) {

  if (!barcodeGraphic) return;

  barcodeGraphic.innerHTML = "";

  const values =
    Array.from(code)
      .map(
        (char) =>
          char.charCodeAt(0)
      );


  values.forEach(
    (value) => {

      const width =
        1 + (value % 4);

      const bar =
        document.createElement(
          "div"
        );

      bar.className =
        "bar";

      bar.style.width =
        `${width}px`;

      barcodeGraphic.appendChild(
        bar
      );


      const gap =
        document.createElement(
          "div"
        );

      gap.style.width =
        `${1 + (value % 2)}px`;

      barcodeGraphic.appendChild(
        gap
      );

    }
  );

  if (barcodeText) {
    barcodeText.textContent =
      code;
  }

}


/* =========================================================
   BOOK BUS
   ========================================================= */

if (bookBus) {

  bookBus.addEventListener(
    "click",
    () => {

      /*
        Tidak boleh booking tanpa kursi.
      */

      if (
        selectedSeatNumber === null
      ) {

        alert(
          "pilih kursi terlebih dahulu."
        );

        return;
      }


      const bookings =
        getCurrentBookings();


      /*
        Cek lagi sebelum booking.
        Ini mencegah kursi yang baru saja
        terisi dipilih ulang.
      */

      if (
        bookings.includes(
          selectedSeatNumber
        )
      ) {

        alert(
          "kursi ini baru saja dipesan mahasiswa lain."
        );

        renderSeats();

        return;
      }


      /*
        Simpan kursi secara permanen
        di localStorage.
      */

      bookings.push(
        selectedSeatNumber
      );

      busBookings[
        currentBusKey()
      ] = bookings;

      saveBookings();


      /*
        Data mahasiswa demo.
      */

      const passenger =
        students[
          randomNumber(
            0,
            students.length - 1
          )
        ];


      const code =
        generateBookingCode();

      const nim =
        generateNIM();


      if (ticketName) {
        ticketName.textContent =
          passenger.name;
      }

      if (ticketNim) {
        ticketNim.textContent =
          nim;
      }

      if (ticketRoute) {

        ticketRoute.textContent =
          routes[
            busRoute.value
          ].name;

      }

      if (ticketBus) {

        ticketBus.textContent =
          busSelect.value;

      }

      if (ticketSeat) {

        ticketSeat.textContent =
          `Seat ${selectedSeatNumber}`;

      }

      if (ticketCode) {

        ticketCode.textContent =
          code;

      }


      generateBarcode(
        code
      );


      /*
        Tampilkan e-ticket.
      */

      if (ticketSection) {

        ticketSection.hidden =
          false;

        ticketSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }


      /*
        Refresh kursi.
      */

      renderSeats();


      /*
        Mulai / update map.
      */

      startLiveBusMap();

    }
  );

}


/* =========================================================
   LIVE CAMPUS BUS MAP
   ========================================================= */

const movingBus =
  $("#movingBus");

const nextStop =
  $("#nextStop");

const mapNextStop =
  $("#mapNextStop");

const mapEta =
  $("#mapEta");


const mapPositions = [

  {
    left: "13%",
    top: "45%"
  },

  {
    left: "42%",
    top: "45%"
  },

  {
    left: "72%",
    top: "45%"
  },

  {
    left: "86%",
    top: "45%"
  }

];


let mapIndex = 0;

let mapTimer = null;

let mapRunning = false;


function updateMapForRoute() {

  if (!busRoute) return;

  const route =
    routes[
      busRoute.value
    ];

  if (!route) return;


  const stop =
    route.stops[
      mapIndex %
      route.stops.length
    ];


  if (nextStop) {

    nextStop.textContent =
      `Next: ${stop}`;

  }

  if (mapNextStop) {

    mapNextStop.textContent =
      stop;

  }

  if (mapEta) {

    mapEta.textContent =
      `${randomNumber(
        2,
        6
      )} min`;

  }

}


function moveBus() {

  if (!movingBus) return;

  const position =
    mapPositions[
      mapIndex %
      mapPositions.length
    ];


  movingBus.style.left =
    position.left;

  movingBus.style.top =
    position.top;


  updateMapForRoute();


  mapIndex++;
}


function startLiveBusMap() {

  if (mapRunning) {
    return;
  }

  mapRunning = true;

  mapIndex = 0;

  moveBus();


  mapTimer =
    setInterval(
      moveBus,
      4000
    );

}


updateMapForRoute();


/* =========================================================
   SIMULATED LIVE SEAT WAR
   ========================================================= */

/*
  Setiap beberapa detik, sistem bisa mengisi
  kursi kosong secara random.

  Hanya kursi tertentu agar demo tetap nyaman.
*/

let seatWarTimer =
  setInterval(
    () => {

      const key =
        currentBusKey();

      if (
        !busBookings[key]
      ) {
        busBookings[key] =
          [];
      }


      const bookings =
        busBookings[key];


      /*
        Maksimal sekitar 70% kursi.
      */

      if (
        bookings.length >=
        Math.floor(
          TOTAL_SEATS * .70
        )
      ) {
        return;
      }


      /*
        Tidak setiap interval
        harus ada yang booking.
      */

      if (
        Math.random() >
        .45
      ) {
        return;
      }


      const available =
        [];

      for (
        let i = 1;
        i <= TOTAL_SEATS;
        i++
      ) {

        if (
          !bookings.includes(i)
        ) {

          available.push(i);

        }

      }


      if (
        available.length === 0
      ) {
        return;
      }


      const seat =
        randomFrom(
          available
        );


      bookings.push(
        seat
      );

      busBookings[key] =
        bookings;

      saveBookings();

      renderSeats();

    },
    6500
  );


/* =========================================================
   PMB EXAM MODAL
   ========================================================= */

const startExam =
  $("#startExam");

const examModal =
  $("#examModal");

const closeExam =
  $("#closeExam");

const examName =
  $("#examName");

const examPhone =
  $("#examPhone");

const examField =
  $("#examField");

const createExamCard =
  $("#createExamCard");

const examResult =
  $("#examResult");

const cardName =
  $("#cardName");

const cardNumber =
  $("#cardNumber");

const cardField =
  $("#cardField");


if (startExam) {

  startExam.addEventListener(
    "click",
    () => {

      if (examModal) {

        examModal.classList.add(
          "show"
        );

        document.body.style.overflow =
          "hidden";

      }

    }
  );

}


function closeExamModal() {

  if (!examModal) return;

  examModal.classList.remove(
    "show"
  );

  document.body.style.overflow =
    "";

}


if (closeExam) {

  closeExam.addEventListener(
    "click",
    closeExamModal
  );

}


if (examModal) {

  examModal.addEventListener(
    "click",
    (event) => {

      if (
        event.target ===
        examModal
      ) {

        closeExamModal();

      }

    }
  );

}


if (createExamCard) {

  createExamCard.addEventListener(
    "click",
    () => {

      const name =
        examName
          ? examName.value.trim()
          : "";

      const phone =
        examPhone
          ? examPhone.value.trim()
          : "";

      const field =
        examField
          ? examField.value
          : "";


      if (!name) {

        alert(
          "nama lengkap wajib diisi."
        );

        return;
      }


      if (!phone) {

        alert(
          "nomor telepon wajib diisi."
        );

        return;
      }


      if (!field) {

        alert(
          "pilih bidang studi terlebih dahulu."
        );

        return;
      }


      const participantNumber =
        `PMB-${randomNumber(
          100000,
          999999
        )}`;


      if (cardName) {
        cardName.textContent =
          name;
      }

      if (cardNumber) {
        cardNumber.textContent =
          participantNumber;
      }

      if (cardField) {
        cardField.textContent =
          field;
      }


      if (examResult) {

        examResult.hidden =
          false;

      }


      createExamCard.textContent =
        "Kartu Berhasil Dibuat";


      createExamCard.disabled =
        true;

    }
  );

}


/* =========================================================
   ESC KEY
   ========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape"
    ) {

      closeDirectory();

      closeExamModal();

    }

  }
);


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderStudentPreview();

    renderLeaderboard();

    renderSeats();

    updateMapForRoute();

  }
);


/* =========================================================
   DEBUG INFO
   ========================================================= */

console.log(
  "University of Mowtown loaded successfully."
);

console.log(
  `Student database: ${students.length.toLocaleString("id-ID")} mahasiswa`
);

console.log(
  "Campus Bus system: ONLINE"
);
