/* =========================================================
   UNIVERSITY OF MOWTOWN
   BUS.JS
   ========================================================= */

const BUS_BOOKING_KEY = "mowtown_bus_booking";

let selectedBus = "ATH-07";
let selectedSeat = null;


/* =========================================================
   BUS DATA
   ========================================================= */

const busData = {

  "ATH-07": {
    name: "ATHENA-07",
    type: "Electric City Bus",
    route: "Athena Gate → Hermes Hall → Olympus Center"
  },

  "APL-04": {
    name: "APOLLO-04",
    type: "Premium Campus Bus",
    route: "North Gate → Academic Center → Student Center"
  },

  "ZEU-11": {
    name: "ZEUS-11",
    type: "Long Route Bus",
    route: "West Gate → Library → Olympus Center"
  }

};


/* =========================================================
   DEFAULT BOOKED SEATS
   ========================================================= */

const bookedSeats = {

  "ATH-07": {
    "A1": "Raka Mahendra",
    "B2": "Nabila Putri",
    "C3": "Fajar Ramadhan"
  },

  "APL-04": {
    "A2": "Salsa Amelia",
    "C1": "Aditya Pratama"
  },

  "ZEU-11": {
    "B1": "Raka Mahendra",
    "D2": "Nabila Putri"
  }

};


/* =========================================================
   ELEMENTS
   ========================================================= */

const seatMap =
  document.getElementById("seatMap");

const selectedSeatElement =
  document.getElementById("selectedSeat");

const bookBusButton =
  document.getElementById("bookBus");

const busModel =
  document.getElementById("busModel");

const mapBus =
  document.getElementById("mapBus");

const ticketSection =
  document.getElementById("ticketSection");

const ticketName =
  document.getElementById("ticketName");

const ticketNim =
  document.getElementById("ticketNim");

const ticketRoute =
  document.getElementById("ticketRoute");

const ticketBus =
  document.getElementById("ticketBus");

const ticketSeat =
  document.getElementById("ticketSeat");

const ticketCode =
  document.getElementById("ticketCode");

const barcodeGraphic =
  document.getElementById("barcodeGraphic");


/* =========================================================
   SEAT CONFIG
   ========================================================= */

const seatRows = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F"
];

const seatsPerRow = 4;


/* =========================================================
   GET PMB DATA
   ========================================================= */

function getCurrentPMB() {

  const saved =
    localStorage.getItem("mowtown_pmb_data");

  if (!saved) return null;

  try {

    return JSON.parse(saved);

  } catch {

    return null;

  }

}


/* =========================================================
   GET SAVED BOOKING
   ========================================================= */

function getSavedBooking() {

  const saved =
    localStorage.getItem(BUS_BOOKING_KEY);

  if (!saved) return null;

  try {

    return JSON.parse(saved);

  } catch {

    return null;

  }

}


/* =========================================================
   RENDER SEATS
   ========================================================= */

function renderSeats() {

  if (!seatMap) return;

  seatMap.innerHTML = "";


  const currentBookings =
    bookedSeats[selectedBus] || {};


  const savedBooking =
    getSavedBooking();


  seatRows.forEach(row => {

    for (
      let number = 1;
      number <= seatsPerRow;
      number++
    ) {

      const seatId =
        `${row}${number}`;

      const seat =
        document.createElement("button");

      seat.type = "button";

      seat.className = "seat";

      seat.dataset.seat =
        seatId;


      /*
       * Kursi yang sudah dipakai
       */

      if (currentBookings[seatId]) {

        seat.classList.add("booked");

        seat.disabled = true;

        seat.innerHTML = `
          ${seatId}
          <span class="seat-name">
            ${currentBookings[seatId]}
          </span>
        `;

      }

      /*
       * Kursi milik user sendiri
       */

      else if (
        savedBooking &&
        savedBooking.busId === selectedBus &&
        savedBooking.seat === seatId
      ) {

        seat.classList.add("selected");

        seat.innerHTML =
          `${seatId}`;

        selectedSeat =
          seatId;

      }

      /*
       * Kursi tersedia
       */

      else {

        seat.textContent =
          seatId;

        seat.addEventListener(
          "click",
          () => selectSeat(seatId)
        );

      }


      seatMap.appendChild(seat);

    }

  });


  updateSelectedSeat();

}


/* =========================================================
   SELECT SEAT
   ========================================================= */

function selectSeat(seatId) {

  const pmb =
    getCurrentPMB();


  /*
   * Belum daftar PMB
   */

  if (!pmb) {

    alert(
      "Kamu harus daftar PMB terlebih dahulu sebelum booking kursi bus."
    );

    document
      .getElementById("pmb")
      ?.scrollIntoView({
        behavior: "smooth"
      });

    return;

  }


  /*
   * Kalau sudah pilih kursi,
   * batalkan pilihan lama.
   */

  selectedSeat =
    seatId;

  renderSeats();

}


/* =========================================================
   UPDATE SELECTED SEAT
   ========================================================= */

function updateSelectedSeat() {

  if (!selectedSeatElement) return;

  selectedSeatElement.textContent =
    selectedSeat ||
    "Belum ada";

}


/* =========================================================
   SELECT BUS
   ========================================================= */

function selectBus(busId) {

  if (!busData[busId]) return;

  selectedBus =
    busId;

  selectedSeat =
    null;


  /*
   * Update tombol bus
   */

  document
    .querySelectorAll(".bus-option")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.bus === busId
      );

    });


  /*
   * Update 3D preview
   */

  if (busModel) {

    busModel.style.transform =
      "rotateY(25deg) scale(.92)";

    setTimeout(() => {

      busModel.style.transform =
        "rotateY(-18deg) rotateX(5deg)";

    }, 200);

  }


  /*
   * Update map
   */

  if (mapBus) {

    mapBus.textContent =
      busData[busId].name;

  }


  renderSeats();

}


/* =========================================================
   BOOK BUS
   ========================================================= */

function bookBus() {

  const pmb =
    getCurrentPMB();


  /*
   * PMB wajib
   */

  if (!pmb) {

    alert(
      "Booking kursi hanya tersedia untuk peserta yang sudah mendaftar PMB."
    );

    return;

  }


  /*
   * Kursi wajib dipilih
   */

  if (!selectedSeat) {

    alert(
      "Pilih kursi terlebih dahulu."
    );

    return;

  }


  /*
   * Cek apakah kursi sudah berubah
   */

  if (
    bookedSeats[selectedBus]?.[selectedSeat]
  ) {

    alert(
      "Kursi tersebut baru saja terbooking."
    );

    renderSeats();

    return;

  }


  const bookingCode =
    generateBookingCode();


  const booking = {

    name:
      pmb.name,

    nim:
      pmb.nim,

    busId:
      selectedBus,

    busName:
      busData[selectedBus].name,

    route:
      busData[selectedBus].route,

    seat:
      selectedSeat,

    bookingCode,

    bookedAt:
      new Date().toISOString()

  };


  /*
   * Simpan booking user
   */

  localStorage.setItem(
    BUS_BOOKING_KEY,
    JSON.stringify(booking)
  );


  /*
   * Tambahkan nama user
   * ke kursi yang sudah terisi.
   */

  if (!bookedSeats[selectedBus]) {

    bookedSeats[selectedBus] = {};

  }

  bookedSeats[selectedBus][selectedSeat] =
    pmb.name;


  /*
   * Tampilkan E-Ticket
   */

  showETicket(booking);


  alert(
    `Booking berhasil!\n\n` +
    `Nama: ${pmb.name}\n` +
    `Bus: ${busData[selectedBus].name}\n` +
    `Kursi: ${selectedSeat}`
  );


  renderSeats();

}


/* =========================================================
   GENERATE BOOKING CODE
   ========================================================= */

function generateBookingCode() {

  const time =
    Date.now()
      .toString(36)
      .toUpperCase();

  const random =
    Math.random()
      .toString(36)
      .substring(2, 6)
      .toUpperCase();

  return `MW-${time}-${random}`;

}


/* =========================================================
   SHOW E-TICKET
   ========================================================= */

function showETicket(booking) {

  if (!ticketSection) return;


  if (ticketName) {
    ticketName.textContent =
      booking.name;
  }


  if (ticketNim) {
    ticketNim.textContent =
      booking.nim;
  }


  if (ticketRoute) {
    ticketRoute.textContent =
      booking.route;
  }


  if (ticketBus) {
    ticketBus.textContent =
      booking.busName;
  }


  if (ticketSeat) {
    ticketSeat.textContent =
      booking.seat;
  }


  if (ticketCode) {
    ticketCode.textContent =
      booking.bookingCode;
  }


  generateBarcode();


  ticketSection.hidden =
    false;


  setTimeout(() => {

    ticketSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }, 100);

}


/* =========================================================
   SIMPLE BARCODE VISUAL
   ========================================================= */

function generateBarcode() {

  if (!barcodeGraphic) return;

  barcodeGraphic.innerHTML = "";


  const bars =
    Math.floor(
      45 + Math.random() * 25
    );


  for (
    let i = 0;
    i < bars;
    i++
  ) {

    const bar =
      document.createElement("span");

    bar.className =
      "bar";


    bar.style.width =
      `${Math.random() * 4 + 1}px`;


    bar.style.marginRight =
      `${Math.random() * 2}px`;


    barcodeGraphic.appendChild(bar);

  }

}


/* =========================================================
   BUS BUTTON EVENTS
   ========================================================= */

document
  .querySelectorAll(".bus-option")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        selectBus(
          button.dataset.bus
        );

      }
    );

  });


/* =========================================================
   BOOKING BUTTON
   ========================================================= */

bookBusButton?.addEventListener(
  "click",
  bookBus
);


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderSeats();

    const savedBooking =
      getSavedBooking();


    /*
     * Kalau sebelumnya sudah booking,
     * tampilkan kembali e-ticket.
     */

    if (savedBooking) {

      selectedBus =
        savedBooking.busId;

      selectedSeat =
        savedBooking.seat;

      showETicket(
        savedBooking
      );

      renderSeats();

    }

  }
);
