"use strict";

/* =========================================
   UNIVERSITY OF MOWTOWN
   MAIN JAVASCRIPT
========================================= */

/* =========================================
   STUDENT DATABASE
   50,000 realistic-looking demo students
========================================= */

const firstNames = [
  "Adit", "Aditya", "Agatha", "Ahmad", "Aisyah",
  "Alvin", "Amanda", "Andika", "Anisa", "Ardi",
  "Bagas", "Bella", "Bima", "Cahya", "Citra",
  "Daffa", "Dania", "Dimas", "Dinda", "Eka",
  "Fajar", "Farah", "Felix", "Gilang", "Hana",
  "Hendra", "Intan", "Iqbal", "Jasmine", "Kevin",
  "Laras", "Maya", "Nabila", "Nadia", "Naufal",
  "Putra", "Raka", "Rania", "Rizky", "Salsa",
  "Sarah", "Tasya", "Vania", "Wahyu", "Yasmin",
  "Zahra", "Zaki", "Zidan", "Nanda", "Rafi"
];

const lastNames = [
  "Adinata", "Aksara", "Anggara", "Anugraha",
  "Ardana", "Bakhti", "Cahyadi", "Darmawan",
  "Fauzan", "Firmansyah", "Halim", "Haryanto",
  "Iskandar", "Jatmiko", "Kusuma", "Lestari",
  "Mahendra", "Maulana", "Nugraha", "Permana",
  "Pratama", "Ramadhan", "Saputra", "Setiawan",
  "Siregar", "Surya", "Wijaya", "Wibowo",
  "Yudhistira", "Kurniawan"
];

const studyFields = [
  "Kedokteran",
  "Kedokteran Gigi",
  "Keperawatan",
  "Kesehatan Masyarakat",
  "Farmasi",
  "Psikologi",
  "Hukum",
  "Ekonomi dan Bisnis",
  "Ilmu Sosial dan Politik",
  "Ilmu Komunikasi",
  "Pendidikan",
  "Bahasa dan Sastra",
  "Teknik",
  "Ilmu Komputer",
  "Matematika dan Sains",
  "Pertanian",
  "Seni dan Desain",
  "Ilmu Keolahragaan"
];

const students = [];

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

for (let i = 0; i < 50000; i++) {

  const first =
    firstNames[i % firstNames.length];

  const last =
    lastNames[
      Math.floor(
        seededRandom(i + 7) *
        lastNames.length
      )
    ];

  const field =
    studyFields[
      Math.floor(
        seededRandom(i + 17) *
        studyFields.length
      )
    ];

  const average =
    76 +
    Math.floor(
      seededRandom(i + 31) * 23
    );

  const nim =
    "UM" +
    String(2023 + (i % 4)) +
    String(i + 1).padStart(5, "0");

  students.push({
    name: `${first} ${last}`,
    field,
    average,
    nim
  });
}

/* sort alphabetically */

students.sort((a, b) =>
  a.name.localeCompare(b.name)
);


/* =========================================
   STUDENT PREVIEW
========================================= */

const preview =
  document.getElementById(
    "studentPreview"
  );

function renderPreview() {

  if (!preview) return;

  preview.innerHTML = "";

  students
    .slice(0, 10)
    .forEach((student, index) => {

      const row =
        document.createElement("tr");

      row.innerHTML = `
        <td>${index + 1}</td>
        <td>
          <strong>${student.name}</strong>
        </td>
        <td>${student.field}</td>
        <td>${student.average.toFixed(2)}</td>
      `;

      preview.appendChild(row);
    });
}

renderPreview();


/* =========================================
   STUDENT DIRECTORY
========================================= */

const studentDrawer =
  document.getElementById(
    "studentDrawer"
  );

const studentBackdrop =
  document.getElementById(
    "studentBackdrop"
  );

const openDirectory =
  document.getElementById(
    "openStudentDirectory"
  );

const closeDirectory =
  document.getElementById(
    "closeStudentDirectory"
  );

const searchInput =
  document.getElementById(
    "studentSearch"
  );

const studentResults =
  document.getElementById(
    "studentResults"
  );

const resultCount =
  document.getElementById(
    "searchResultCount"
  );

const pagination =
  document.getElementById(
    "studentPagination"
  );

let currentPage = 1;

const studentsPerPage = 20;

let filteredStudents = students;


function openStudents() {

  if (!studentDrawer) return;

  studentDrawer.classList.add(
    "active"
  );

  studentBackdrop.classList.add(
    "active"
  );

  renderStudents();
}


function closeStudents() {

  studentDrawer.classList.remove(
    "active"
  );

  studentBackdrop.classList.remove(
    "active"
  );
}


openDirectory?.addEventListener(
  "click",
  openStudents
);

closeDirectory?.addEventListener(
  "click",
  closeStudents
);

studentBackdrop?.addEventListener(
  "click",
  closeStudents
);


function renderStudents() {

  if (!studentResults) return;

  const start =
    (currentPage - 1) *
    studentsPerPage;

  const end =
    start + studentsPerPage;

  const pageStudents =
    filteredStudents.slice(
      start,
      end
    );

  studentResults.innerHTML = "";

  pageStudents.forEach(
    student => {

      const card =
        document.createElement("div");

      card.className =
        "student-result";

      card.innerHTML = `
        <strong>${student.name}</strong>
        <span>${student.nim}</span>
        <span>${student.field}</span>
        <span>Average: ${student.average.toFixed(2)}</span>
      `;

      studentResults.appendChild(card);
    }
  );

  if (resultCount) {

    resultCount.textContent =
      `${filteredStudents.length.toLocaleString("id-ID")} mahasiswa ditemukan`;
  }

  renderPagination();
}


function renderPagination() {

  if (!pagination) return;

  pagination.innerHTML = "";

  const totalPages =
    Math.ceil(
      filteredStudents.length /
      studentsPerPage
    );

  const maxButtons =
    Math.min(totalPages, 8);

  for (
    let i = 1;
    i <= maxButtons;
    i++
  ) {

    const button =
      document.createElement("button");

    button.textContent = i;

    if (i === currentPage) {
      button.classList.add("active");
    }

    button.addEventListener(
      "click",
      () => {

        currentPage = i;

        renderStudents();
      }
    );

    pagination.appendChild(button);
  }
}


searchInput?.addEventListener(
  "input",
  () => {

    const query =
      searchInput.value
        .trim()
        .toLowerCase();

    filteredStudents =
      students.filter(student =>
        student.name
          .toLowerCase()
          .includes(query) ||

        student.field
          .toLowerCase()
          .includes(query) ||

        student.nim
          .toLowerCase()
          .includes(query)
      );

    currentPage = 1;

    renderStudents();
  }
);


/* =========================================
   BUS ROUTES
========================================= */

const busRoutes = {

  athena: {
    name: "Athena Route",
    stops: [
      "Athena Gate",
      "Medicine",
      "Central Library",
      "Student Center",
      "Apollo Gate"
    ]
  },

  apollo: {
    name: "Apollo Route",
    stops: [
      "Apollo Gate",
      "Engineering",
      "Computer Science",
      "Business",
      "Zeus Gate"
    ]
  },

  zeus: {
    name: "Zeus Route",
    stops: [
      "Zeus Gate",
      "Law",
      "Social Sciences",
      "Communication",
      "Hermes Hall"
    ]
  },

  hera: {
    name: "Hera Route",
    stops: [
      "Hera Gate",
      "Psychology",
      "Nursing",
      "Public Health",
      "Student Center"
    ]
  },

  poseidon: {
    name: "Poseidon Route",
    stops: [
      "Poseidon Gate",
      "Science",
      "Agriculture",
      "Sports Complex",
      "Central Library"
    ]
  },

  artemis: {
    name: "Artemis Route",
    stops: [
      "Artemis Gate",
      "Art & Design",
      "Language Center",
      "Education",
      "Hera Gate"
    ]
  },

  hermes: {
    name: "Hermes Route",
    stops: [
      "Hermes Hall",
      "Business",
      "Engineering",
      "Technology Center",
      "Athena Gate"
    ]
  },

  demeter: {
    name: "Demeter Route",
    stops: [
      "Demeter Gate",
      "Agriculture",
      "Green Campus",
      "Food Science",
      "Poseidon Gate"
    ]
  }

};


/* =========================================
   BUS SEATS
========================================= */

const seatMap =
  document.getElementById(
    "seatMap"
  );

const selectedSeatElement =
  document.getElementById(
    "selectedSeat"
  );

const womenBus =
  document.getElementById(
    "womenBus"
  );

const bookBus =
  document.getElementById(
    "bookBus"
  );

let selectedSeat = null;


/*
  booked seats are stored locally
  so refresh doesn't immediately
  make the booked seat available.
*/

let bookedSeats =
  JSON.parse(
    localStorage.getItem(
      "mowtownBookedSeats"
    ) || "[]"
  );


function renderSeats() {

  if (!seatMap) return;

  seatMap.innerHTML = "";

  selectedSeat = null;

  if (selectedSeatElement) {
    selectedSeatElement.textContent =
      "Belum ada";
  }

  for (
    let number = 1;
    number <= 30;
    number++
  ) {

    const seat =
      document.createElement("button");

    seat.type = "button";

    seat.className = "seat";

    seat.textContent = number;

    /*
      seats 1 and 2 are accessible
    */

    if (
      number === 1 ||
      number === 2
    ) {

      seat.classList.add(
        "accessible"
      );

      seat.textContent =
        `♿ ${number}`;
    }

    /*
      Women Bus appearance
    */

    if (
      womenBus?.checked &&
      number >= 7
    ) {

      seat.classList.add(
        "women-seat"
      );
    }

    /*
      already booked
    */

    if (
      bookedSeats.includes(
        String(number)
      )
    ) {

      seat.classList.add(
        "booked"
      );

      seat.disabled = true;
    }


    seat.addEventListener(
      "click",
      () => {

        if (
          seat.classList.contains(
            "booked"
          )
        ) {
          return;
        }

        document
          .querySelectorAll(
            ".seat.selected"
          )
          .forEach(
            element =>
              element.classList.remove(
                "selected"
              )
          );

        seat.classList.add(
          "selected"
        );

        selectedSeat =
          String(number);

        if (
          selectedSeatElement
        ) {

          selectedSeatElement.textContent =
            `Seat ${number}`;
        }

      }
    );

    seatMap.appendChild(seat);
  }
}


womenBus?.addEventListener(
  "change",
  renderSeats
);

renderSeats();


/* =========================================
   E-TICKET
========================================= */

const ticketSection =
  document.getElementById(
    "ticketSection"
  );

const ticketName =
  document.getElementById(
    "ticketName"
  );

const ticketNim =
  document.getElementById(
    "ticketNim"
  );

const ticketRoute =
  document.getElementById(
    "ticketRoute"
  );

const ticketBus =
  document.getElementById(
    "ticketBus"
  );

const ticketSeat =
  document.getElementById(
    "ticketSeat"
  );

const ticketCode =
  document.getElementById(
    "ticketCode"
  );

const barcodeGraphic =
  document.getElementById(
    "barcodeGraphic"
  );

const barcodeText =
  document.getElementById(
    "barcodeText"
  );


function generateBookingCode() {

  const chars =
    "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  let result =
    "UM-26-";

  for (
    let i = 0;
    i < 8;
    i++
  ) {

    result +=
      chars[
        Math.floor(
          Math.random() *
          chars.length
        )
      ];
  }

  return result;
}


function createBarcode(code) {

  if (barcodeText) {
    barcodeText.textContent =
      code;
  }

  if (!barcodeGraphic) return;

  /*
    barcode visual is CSS-based.
    This creates slightly different
    widths for every ticket.
  */

  const seed =
    [...code]
      .reduce(
        (sum, char) =>
          sum + char.charCodeAt(0),
        0
      );

  const pattern = [];

  for (
    let i = 0;
    i < 55;
    i++
  ) {

    const width =
      ((seed + i * 13) % 4) + 1;

    pattern.push(
      `${"#".repeat(width)}`
    );
  }

  barcodeGraphic.style.background =
    `
      repeating-linear-gradient(
        90deg,
        #111 0 2px,
        transparent 2px 5px,
        #111 5px 6px,
        transparent 6px 9px
      )
    `;
}


/* =========================================
   BOOK BUS
========================================= */

bookBus?.addEventListener(
  "click",
  () => {

    if (!selectedSeat) {

      alert(
        "pilih kursi dulu bre."
      );

      return;
    }

    /*
      prevent double booking
    */

    if (
      bookedSeats.includes(
        selectedSeat
      )
    ) {

      alert(
        "kursi itu sudah dibooking."
      );

      renderSeats();

      return;
    }


    /*
      lock seat
    */

    bookedSeats.push(
      selectedSeat
    );

    localStorage.setItem(
      "mowtownBookedSeats",
      JSON.stringify(
        bookedSeats
      )
    );


    /*
      demo student identity
      is connected to a real
      generated student record
    */

    const student =
      students[0];

    const routeSelect =
      document.getElementById(
        "busRoute"
      );

    const busSelect =
      document.getElementById(
        "busSelect"
      );

    const routeKey =
      routeSelect?.value ||
      "athena";

    const route =
      busRoutes[routeKey];


    const busNumber =
      busSelect?.value ||
      "ATH-07";


    const code =
      generateBookingCode();


    /*
      fill ticket
    */

    if (ticketName) {
      ticketName.textContent =
        student.name;
    }

    if (ticketNim) {
      ticketNim.textContent =
        student.nim;
    }

    if (ticketRoute) {
      ticketRoute.textContent =
        route.name;
    }

    if (ticketBus) {
      ticketBus.textContent =
        busNumber;
    }

    if (ticketSeat) {
      ticketSeat.textContent =
        `Seat ${selectedSeat}`;
    }

    if (ticketCode) {
      ticketCode.textContent =
        code;
    }


    createBarcode(code);


    /*
      show ticket
    */

    if (ticketSection) {

      ticketSection.hidden = false;

      ticketSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }


    /*
      refresh seat map
    */

    renderSeats();


    /*
      start live bus
    */

    startBusTracking(
      route
    );

  }
);


/* =========================================
   LIVE 3D BUS TRACKING
========================================= */

const movingBus =
  document.getElementById(
    "movingBus"
  );

const mapNextStop =
  document.getElementById(
    "mapNextStop"
  );

const mapEta =
  document.getElementById(
    "mapEta"
  );


/*
  positions inside the 47-hectare
  campus map
*/

const busPositions = [

  {
    left: "8%",
    top: "44%",
    stop: "Athena Gate"
  },

  {
    left: "43%",
    top: "7%",
    stop: "Apollo Gate"
  },

  {
    left: "82%",
    top: "44%",
    stop: "Zeus Gate"
  },

  {
    left: "43%",
    top: "83%",
    stop: "Hermes Hall"
  }

];


let busPositionIndex = 0;

let busTimer = null;

let currentRoute = null;


function moveBus() {

  if (!movingBus) {
    return;
  }

  const position =
    busPositions[
      busPositionIndex
    ];


  /*
    flip bus depending
    on direction
  */

  if (
    busPositionIndex === 1 ||
    busPositionIndex === 3
  ) {

    movingBus.style.transform =
      "scaleX(-1)";

  } else {

    movingBus.style.transform =
      "scaleX(1)";
  }


  movingBus.style.left =
    position.left;

  movingBus.style.top =
    position.top;


  if (mapNextStop) {

    mapNextStop.textContent =
      position.stop;
  }


  if (mapEta) {

    const eta =
      2 +
      Math.floor(
        Math.random() * 4
      );

    mapEta.textContent =
      `${eta} min`;
  }


  busPositionIndex++;

  if (
    busPositionIndex >=
    busPositions.length
  ) {

    busPositionIndex = 0;
  }
}


function startBusTracking(route) {

  currentRoute = route;

  if (!movingBus) {
    return;
  }


  movingBus.classList.add(
    "moving"
  );


  if (busTimer) {

    clearInterval(
      busTimer
    );
  }


  /*
    move immediately
  */

  moveBus();


  /*
    then keep moving
  */

  busTimer =
    setInterval(
      moveBus,
      5000
    );
}


/* =========================================
   ROUTE CHANGE
========================================= */

const routeSelect =
  document.getElementById(
    "busRoute"
  );


routeSelect?.addEventListener(
  "change",
  () => {

    const route =
      busRoutes[
        routeSelect.value
      ];

    currentRoute =
      route;

    busPositionIndex = 0;

    if (
      mapNextStop &&
      route
    ) {

      mapNextStop.textContent =
        route.stops[0];
    }


    if (
      movingBus &&
      ticketSection &&
      !ticketSection.hidden
    ) {

      startBusTracking(
        route
      );
    }

  }
);


/* =========================================
   BUS SELECTION
========================================= */

const busSelect =
  document.getElementById(
    "busSelect"
  );


busSelect?.addEventListener(
  "change",
  () => {

    /*
      no reload.
      ticket remains stable.
    */

    if (ticketSection) {

      ticketSection.hidden = true;
    }

  }
);


/* =========================================
   RESET BOOKING ON PAGE LOAD
   ONLY VISUAL SELECTION.
   BOOKED SEATS STAY LOCKED.
========================================= */

window.addEventListener(
  "load",
  () => {

    renderSeats();

    if (mapEta) {
      mapEta.textContent =
        "3 min";
    }

  }
);
