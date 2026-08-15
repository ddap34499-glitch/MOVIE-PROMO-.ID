/* =========================
   UNIVERSITY OF MOWTOWN
   MAIN JAVASCRIPT
========================= */

const students = [
  ["Adit Lestari", "Computer Science"],
  ["Nadia Putri", "Architecture"],
  ["Raka Pratama", "Engineering"],
  ["Keisha Amanda", "Business"],
  ["Fajar Ramadhan", "Medicine"],
  ["Citra Maharani", "Psychology"],
  ["Rizky Aditya", "Law"],
  ["Maya Salsabila", "Design"],
  ["Dimas Saputra", "Economics"],
  ["Alana Wijaya", "International Relations"],
  ["Naufal Hakim", "Computer Science"],
  ["Salsa Amelia", "Communication"],
  ["Rafi Kurniawan", "Engineering"],
  ["Tasya Anindita", "Biology"],
  ["Kevin Wijaya", "Business"],
  ["Nabila Zahra", "Architecture"],
  ["Arga Nugraha", "Physics"],
  ["Alya Ramadhani", "Psychology"],
  ["Bagas Firmansyah", "Law"],
  ["Vania Putri", "Design"],
  ["Reno Akbar", "Economics"],
  ["Daffa Maulana", "Medicine"],
  ["Naya Prameswari", "Biology"],
  ["Farhan Rizaldi", "Engineering"],
  ["Luna Maharani", "Communication"],
  ["Galang Saputra", "Computer Science"],
  ["Sinta Ayuningtyas", "Architecture"],
  ["Bima Arya", "Business"],
  ["Aurel Cahyani", "Design"],
  ["Yoga Prasetyo", "Economics"]
];

/* =========================
   GLOBAL STATE
========================= */

let selectedSeat = null;
let selectedRoute = "Apollo";
let bookedSeats = {
  "Apollo": ["A2", "B4"],
  "Athena": ["A1", "C3"],
  "Zeus": ["B2", "D4"],
  "Women's Bus": ["A3", "B1", "C4"]
};

let currentTicket = null;

/* =========================
   INITIALIZE
========================= */

document.addEventListener("DOMContentLoaded", () => {

  renderStudentPreview();
  renderSeats();

  const routeSelect = document.getElementById("routeSelect");

  if (routeSelect) {
    routeSelect.addEventListener("change", () => {
      selectedRoute = routeSelect.value;
      selectedSeat = null;
      renderSeats();
    });
  }

});

/* =========================
   NAVIGATION
========================= */

function scrollToSection(id) {

  const element = document.getElementById(id);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth"
  });

}

/* =========================
   STUDENTS
========================= */

function getInitials(name) {

  return name
    .split(" ")
    .map(word => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

}

function createStudentCard(student) {

  const [name, major] = student;

  return `
    <div class="student-card">
      <div class="student-avatar">
        ${getInitials(name)}
      </div>

      <div>
        <h3>${name}</h3>
        <p>${major}</p>
      </div>
    </div>
  `;

}

function renderStudentPreview() {

  const container = document.getElementById("studentPreview");

  if (!container) return;

  /*
    HANYA 10 MAHASISWA
    YANG DITAMPILKAN DI HALAMAN UTAMA
  */

  container.innerHTML = students
    .slice(0, 10)
    .map(createStudentCard)
    .join("");

}

function openStudentDirectory() {

  const modal = document.getElementById("studentModal");

  if (!modal) return;

  modal.classList.add("active");

  renderStudentList("");

  setTimeout(() => {

    const search = document.getElementById("studentSearch");

    if (search) {
      search.focus();
    }

  }, 100);

}

function renderStudentList(keyword) {

  const container = document.getElementById("studentList");

  if (!container) return;

  const query = keyword.trim().toLowerCase();

  const filtered = students.filter(student => {

    const name = student[0].toLowerCase();
    const major = student[1].toLowerCase();

    return (
      name.includes(query) ||
      major.includes(query)
    );

  });

  if (filtered.length === 0) {

    container.innerHTML = `
      <div class="student-card">
        <p>mahasiswa tidak ditemukan.</p>
      </div>
    `;

    return;
  }

  container.innerHTML =
    filtered.map(createStudentCard).join("");

}

function searchStudents() {

  const input = document.getElementById("studentSearch");

  if (!input) return;

  renderStudentList(input.value);

}

/* =========================
   MODALS
========================= */

function openModal(id) {

  const modal = document.getElementById(id);

  if (!modal) return;

  modal.classList.add("active");

}

function closeModal(id) {

  const modal = document.getElementById(id);

  if (!modal) return;

  modal.classList.remove("active");

}

/* klik background untuk tutup modal */

document.addEventListener("click", event => {

  if (event.target.classList.contains("modal")) {
    event.target.classList.remove("active");
  }

});

/* ESC */

document.addEventListener("keydown", event => {

  if (event.key !== "Escape") return;

  document
    .querySelectorAll(".modal.active")
    .forEach(modal => {
      modal.classList.remove("active");
    });

});

/* =========================
   BUS ROUTES
========================= */

function selectRoute(route) {

  const routeMap = {
    apollo: "Apollo",
    athena: "Athena",
    zeus: "Zeus",
    womens: "Women's Bus"
  };

  selectedRoute = routeMap[route] || "Apollo";

  openBusBooking();

  const select = document.getElementById("routeSelect");

  if (select) {
    select.value = selectedRoute;
  }

  renderSeats();

}

function openBusBooking() {

  openModal("busModal");

  const select = document.getElementById("routeSelect");

  if (select) {
    select.value = selectedRoute;
  }

  selectedSeat = null;

  renderSeats();

}

/* =========================
   SEAT MAP
========================= */

function renderSeats() {

  const container = document.getElementById("seatMap");

  if (!container) return;

  const route =
    document.getElementById("routeSelect")?.value ||
    selectedRoute;

  selectedRoute = route;

  const seats = [
    "A1", "A2", "A3", "A4",
    "B1", "B2", "B3", "B4",
    "C1", "C2", "C3", "C4",
    "D1", "D2", "D3", "D4"
  ];

  const booked = bookedSeats[route] || [];

  container.innerHTML = seats.map(seat => {

    const isBooked = booked.includes(seat);

    const accessible =
      seat === "A1" || seat === "A2";

    let classes = "seat";

    if (isBooked) {
      classes += " booked";
    }

    if (accessible) {
      classes += " accessible";
    }

    if (selectedSeat === seat) {
      classes += " selected";
    }

    return `
      <button
        class="${classes}"
        ${isBooked ? "disabled" : ""}
        onclick="selectSeat('${seat}')"
      >
        ${seat}
        ${accessible ? " ♿" : ""}
      </button>
    `;

  }).join("");

}

function selectSeat(seat) {

  const route =
    document.getElementById("routeSelect")?.value ||
    selectedRoute;

  const booked = bookedSeats[route] || [];

  if (booked.includes(seat)) {
    return;
  }

  selectedSeat = seat;

  renderSeats();

}

/* =========================
   GENERATE E-TICKET
========================= */

function generateTicket() {

  const route =
    document.getElementById("routeSelect")?.value ||
    selectedRoute;

  const time =
    document.getElementById("timeSelect")?.value ||
    "07:00";

  if (!selectedSeat) {

    alert("pilih kursi dulu ya bre 😭");

    return;

  }

  /*
    SIMPAN SEAT YANG BARU DIBOOKING
  */

  if (!bookedSeats[route]) {
    bookedSeats[route] = [];
  }

  bookedSeats[route].push(selectedSeat);

  const ticketNumber =
    "UM-" +
    Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();

  currentTicket = {
    route,
    time,
    seat: selectedSeat,
    ticket: ticketNumber
  };

  const content =
    document.getElementById("ticketContent");

  if (!content) return;

  content.innerHTML = `

    <div class="ticket-row">
      <span>Route</span>
      <strong>${route}</strong>
    </div>

    <div class="ticket-row">
      <span>Departure</span>
      <strong>${time}</strong>
    </div>

    <div class="ticket-row">
      <span>Seat</span>
      <strong>${selectedSeat}</strong>
    </div>

    <div class="ticket-row">
      <span>Passenger</span>
      <strong>University Student</strong>
    </div>

  `;

  document.getElementById("ticketCode").textContent =
    ticketNumber;

  closeModal("busModal");

  openModal("ticketModal");

  selectedSeat = null;

}

/* =========================
   LIVE BUS MAP
========================= */

function showBusMap() {

  if (!currentTicket) {

    alert("tiket belum tersedia.");

    return;

  }

  closeModal("ticketModal");

  openModal("mapModal");

  const routeName =
    document.getElementById("mapRouteName");

  if (routeName) {
    routeName.textContent =
      currentTicket.route + " Route";
  }

  animateBus();

}

/* =========================
   BUS ANIMATION
========================= */

function animateBus() {

  const bus =
    document.getElementById("animatedBus");

  if (!bus) return;

  /*
    reset posisi
  */

  bus.style.transition = "none";
  bus.style.left = "43%";
  bus.style.top = "50%";

  /*
    tunggu sebentar supaya animasi
    benar-benar dimulai dari awal
  */

  setTimeout(() => {

    bus.style.transition =
      "left 3s ease-in-out, top 3s ease-in-out";

    bus.style.left = "68%";
    bus.style.top = "40%";

  }, 100);

  /*
    gerakan kedua
  */

  setTimeout(() => {

    bus.style.left = "48%";
    bus.style.top = "25%";

  }, 3200);

  /*
    gerakan ketiga
  */

  setTimeout(() => {

    bus.style.left = "22%";
    bus.style.top = "52%";

  }, 6400);

}

/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

  const nav = document.querySelector(".navbar nav");

  if (!nav) return;

  if (nav.style.display === "flex") {

    nav.style.display = "";

  } else {

    nav.style.display = "flex";

    nav.style.position = "absolute";
    nav.style.top = "78px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "20px";
    nav.style.background = "#0d1115";
    nav.style.flexDirection = "column";

  }

}

/* =========================
   PREVENT DOUBLE BOOKING
========================= */

window.addEventListener("beforeunload", () => {

  /*
    data hanya berjalan selama halaman dibuka.
    tidak ada database sehingga tidak ada
    booking palsu yang tersimpan permanen.
  */

});
