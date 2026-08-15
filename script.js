```javascript
document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     BASIC HELPERS
  ========================================================= */

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

  const show = el => {
    if (!el) return;
    el.classList.add("active");
    document.body.classList.add("no-scroll");
  };

  const hide = el => {
    if (!el) return;
    el.classList.remove("active");

    if (!$(".overlay.active")) {
      document.body.classList.remove("no-scroll");
    }
  };

  const toast = message => {
    const box = $("#toast");
    if (!box) return;

    box.textContent = message;
    box.classList.add("show");

    clearTimeout(window.__toastTimer);

    window.__toastTimer = setTimeout(() => {
      box.classList.remove("show");
    }, 2500);
  };


  /* =========================================================
     MOBILE NAV
  ========================================================= */

  const hamburger = $("#hamburger");
  const mainNav = $("#mainNav");

  if (hamburger && mainNav) {
    hamburger.addEventListener("click", () => {
      mainNav.classList.toggle("mobile-open");
    });

    $$("#mainNav a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("mobile-open");
      });
    });
  }


  /* =========================================================
     SMOOTH SCROLL BUTTON
  ========================================================= */

  $$("[data-scroll]").forEach(button => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.scroll);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  /* =========================================================
     STUDENT DATABASE
     50,000 virtual records
     10 visible on homepage
  ========================================================= */

  const firstNames = [
    "Adit","Alya","Arga","Bima","Citra",
    "Daffa","Dina","Fajar","Farah","Gilang",
    "Hana","Iqbal","Jasmine","Kevin","Laras",
    "Maya","Nadia","Naufal","Putri","Raka",
    "Rania","Rizky","Salsa","Satria","Tiara",
    "Vino","Wulan","Yusuf","Zahra","Zaki"
  ];

  const lastNames = [
    "Lestari","Pratama","Wijaya","Saputra","Permata",
    "Nugraha","Ramadhan","Kusuma","Santoso","Mahendra",
    "Putra","Siregar","Anggraini","Wibowo","Hidayat",
    "Kurniawan","Maulana","Setiawan","Purnama","Aditya"
  ];

  const majors = [
    "Computer Science",
    "Architecture",
    "Business Administration",
    "International Relations",
    "Psychology",
    "Civil Engineering",
    "Visual Communication Design",
    "Medicine",
    "Law",
    "Environmental Science"
  ];

  const students = [];

  /*
    deterministic data:
    nama tidak akan semuanya Adit Lestari.
  */

  for (let i = 1; i <= 50000; i++) {
    const first = firstNames[(i * 7) % firstNames.length];
    const last = lastNames[(i * 11) % lastNames.length];
    const major = majors[(i * 13) % majors.length];

    students.push({
      id: i,
      name: `${first} ${last}`,
      nim: `UM${String(i).padStart(6, "0")}`,
      major
    });
  }

  const studentPreview = $("#studentPreview");

  function initials(name) {
    return name
      .split(" ")
      .map(x => x[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }

  function studentCard(student) {
    return `
      <article class="student-card">
        <div class="avatar">${initials(student.name)}</div>
        <h3>${student.name}</h3>
        <p>${student.nim}</p>
        <span class="tag">${student.major}</span>
      </article>
    `;
  }

  function renderPreview() {
    if (!studentPreview) return;

    studentPreview.innerHTML =
      students
        .slice(0, 10)
        .map(studentCard)
        .join("");
  }

  renderPreview();


  /* =========================================================
     STUDENT DIRECTORY
  ========================================================= */

  const studentOverlay = $("#studentOverlay");
  const openStudents = $("#openStudents");
  const closeStudents = $("#closeStudents");
  const studentSearch = $("#studentSearch");
  const studentResults = $("#studentResults");
  const studentCount = $("#studentCount");
  const pagination = $("#pagination");

  let currentPage = 1;
  const perPage = 20;

  function getFilteredStudents() {

    const query = (studentSearch?.value || "")
      .trim()
      .toLowerCase();

    if (!query) {
      return students;
    }

    return students.filter(student =>
      student.name.toLowerCase().includes(query) ||
      student.major.toLowerCase().includes(query) ||
      student.nim.toLowerCase().includes(query)
    );
  }

  function renderDirectory() {

    if (!studentResults) return;

    const filtered = getFilteredStudents();

    const totalPages =
      Math.max(1, Math.ceil(filtered.length / perPage));

    if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    const start = (currentPage - 1) * perPage;

    const pageItems =
      filtered.slice(start, start + perPage);

    if (studentCount) {
      studentCount.textContent =
        `${filtered.length.toLocaleString("id-ID")} mahasiswa ditemukan`;
    }

    if (!pageItems.length) {

      studentResults.innerHTML = `
        <div style="
          padding:40px;
          text-align:center;
          color:#7f898e;
        ">
          Tidak ada mahasiswa yang cocok.
        </div>
      `;

    } else {

      studentResults.innerHTML =
        pageItems.map(student => `
          <div class="directory-item">
            <div class="directory-avatar">
              ${initials(student.name)}
            </div>

            <div>
              <b>${student.name}</b>
              <span>${student.nim} · ${student.major}</span>
            </div>
          </div>
        `).join("");
    }

    if (!pagination) return;

    pagination.innerHTML = "";

    const maxButtons = 7;

    let startPage =
      Math.max(1, currentPage - 3);

    let endPage =
      Math.min(totalPages, startPage + maxButtons - 1);

    if (endPage - startPage < maxButtons - 1) {
      startPage =
        Math.max(1, endPage - maxButtons + 1);
    }

    if (startPage > 1) {
      addPageButton(1);
    }

    for (let page = startPage; page <= endPage; page++) {
      addPageButton(page);
    }

    if (endPage < totalPages) {
      addPageButton(totalPages);
    }
  }

  function addPageButton(page) {

    const button = document.createElement("button");

    button.className =
      "page-btn" +
      (page === currentPage ? " active" : "");

    button.textContent = page;

    button.addEventListener("click", () => {
      currentPage = page;
      renderDirectory();
    });

    pagination.appendChild(button);
  }

  if (openStudents) {
    openStudents.addEventListener("click", () => {
      currentPage = 1;

      if (studentSearch) {
        studentSearch.value = "";
      }

      renderDirectory();
      show(studentOverlay);
    });
  }

  if (closeStudents) {
    closeStudents.addEventListener("click", () => {
      hide(studentOverlay);
    });
  }

  if (studentSearch) {
    studentSearch.addEventListener("input", () => {
      currentPage = 1;
      renderDirectory();
    });
  }


  /* =========================================================
     BUS BOOKING
  ========================================================= */

  const busOverlay = $("#busOverlay");
  const ticketOverlay = $("#ticketOverlay");
  const mapOverlay = $("#mapOverlay");

  const routeSelect = $("#routeSelect");
  const timeSelect = $("#timeSelect");
  const seatMap = $("#seatMap");

  const passengerName = $("#passengerName");
  const passengerId = $("#passengerId");

  let selectedSeat = null;
  let currentRoute = "Apollo";
  let booking = null;


  const routeInfo = {
    "Apollo": {
      bus: "UM-07",
      stops: ["Library", "Main Lobby", "Stadium"],
      color: "standard"
    },

    "Athena": {
      bus: "UM-12",
      stops: ["Library", "Museum", "Auditorium"],
      color: "standard"
    },

    "Zeus": {
      bus: "UM-01",
      stops: ["Main Lobby", "Engineering", "Garden"],
      color: "standard"
    },

    "Women's Bus": {
      bus: "WB-03",
      stops: ["Women's Residence", "Library", "Main Lobby"],
      color: "women"
    }
  };


  function openBus(route = null) {

    if (route) {
      currentRoute = route;

      if (routeSelect) {
        routeSelect.value = route;
      }
    }

    selectedSeat = null;

    buildSeatMap();

    show(busOverlay);
  }


  $$("[data-open-bus]").forEach(button => {
    button.addEventListener("click", () => {
      openBus();
    });
  });


  $$("[data-route]").forEach(button => {
    button.addEventListener("click", () => {

      const route = button.dataset.route;

      openBus(route);
    });
  });


  if (routeSelect) {
    routeSelect.addEventListener("change", () => {

      currentRoute = routeSelect.value;

      selectedSeat = null;

      buildSeatMap();
    });
  }


  /*
    Seat system.
    Women's Bus:
    - beberapa kursi booked
    - booked tampil pink
  */

  function getBookedSeats(route) {

    if (route === "Women's Bus") {
      return [
        2, 5, 8, 11,
        14, 17, 20
      ];
    }

    return [
      3, 9, 15, 22
    ];
  }


  function buildSeatMap() {

    if (!seatMap) return;

    seatMap.innerHTML = "";

    const bookedSeats =
      getBookedSeats(currentRoute);

    for (let i = 1; i <= 24; i++) {

      const button =
        document.createElement("button");

      button.type = "button";

      button.className = "seat-btn";

      button.textContent = `S${i}`;

      /*
        Accessible seats:
        S1 dan S13
      */

      if (i === 1 || i === 13) {
        button.classList.add("accessible");
      }

      if (bookedSeats.includes(i)) {
        button.classList.add("booked");

        if (currentRoute === "Women's Bus") {
          button.style.background = "#c66b91";
          button.style.color = "#fff";
        }

        button.disabled = true;
      }

      button.addEventListener("click", () => {

        if (button.disabled) return;

        $$(".seat-btn.selected", seatMap)
          .forEach(seat =>
            seat.classList.remove("selected")
          );

        button.classList.add("selected");

        selectedSeat = i;
      });

      seatMap.appendChild(button);
    }
  }


  /* =========================================================
     CONFIRM BOOKING
  ========================================================= */

  const confirmBooking = $("#confirmBooking");

  if (confirmBooking) {

    confirmBooking.addEventListener("click", () => {

      const name =
        passengerName?.value.trim();

      const nim =
        passengerId?.value.trim();

      if (!name) {
        toast("isi nama mahasiswa dulu.");
        passengerName?.focus();
        return;
      }

      if (!nim) {
        toast("isi NIM dulu.");
        passengerId?.focus();
        return;
      }

      if (!selectedSeat) {
        toast("pilih kursi terlebih dahulu.");
        return;
      }

      currentRoute =
        routeSelect?.value || currentRoute;

      const departure =
        timeSelect?.value || "07:00";

      const info =
        routeInfo[currentRoute] ||
        routeInfo.Apollo;

      const code =
        "UM-" +
        Math.random()
          .toString(36)
          .substring(2, 8)
          .toUpperCase();

      booking = {
        name,
        nim,
        route: currentRoute,
        departure,
        seat: `S${selectedSeat}`,
        bus: info.bus,
        code,
        created: new Date()
      };

      renderTicket();

      hide(busOverlay);

      setTimeout(() => {
        show(ticketOverlay);
      }, 180);
    });
  }


  /* =========================================================
     E-TICKET
  ========================================================= */

  function renderTicket() {

    if (!booking) return;

    const ticketDetails =
      $("#ticketDetails");

    const ticketCode =
      $("#ticketCode");

    if (ticketDetails) {

      ticketDetails.innerHTML = `
        <div class="ticket-row">
          <div>
            <span>Passenger</span>
            <b>${escapeHTML(booking.name)}</b>
          </div>

          <div>
            <span>NIM</span>
            <b>${escapeHTML(booking.nim)}</b>
          </div>
        </div>

        <div class="ticket-row">
          <div>
            <span>Route</span>
            <b>${escapeHTML(booking.route)}</b>
          </div>

          <div>
            <span>Bus</span>
            <b>${escapeHTML(booking.bus)}</b>
          </div>
        </div>

        <div class="ticket-row">
          <div>
            <span>Departure</span>
            <b>${escapeHTML(booking.departure)}</b>
          </div>

          <div>
            <span>Seat</span>
            <b>${escapeHTML(booking.seat)}</b>
          </div>
        </div>
      `;
    }

    if (ticketCode) {
      ticketCode.textContent = booking.code;
    }
  }


  /* =========================================================
     LIVE MAP
  ========================================================= */

  const openMap = $("#openMap");
  const movingBus = $("#movingBus");

  if (openMap) {

    openMap.addEventListener("click", () => {

      if (!booking) {
        toast("belum ada tiket bus.");
        return;
      }

      const route =
        routeInfo[booking.route] ||
        routeInfo.Apollo;

      const mapRoute =
        $("#mapRoute");

      const busNumber =
        $("#busNumber");

      const arrival =
        $("#arrival");

      if (mapRoute) {
        mapRoute.textContent =
          `${booking.route} Route`;
      }

      if (busNumber) {
        busNumber.textContent =
          booking.bus;
      }

      if (arrival) {
        arrival.textContent =
          `${3 + Math.floor(Math.random() * 4)} min`;
      }

      hide(ticketOverlay);

      setTimeout(() => {
        show(mapOverlay);
        animateBus();
      }, 150);
    });
  }


  function animateBus() {

    if (!movingBus) return;

    const positions = [
      {left:"20%",top:"42%"},
      {left:"38%",top:"42%"},
      {left:"61%",top:"42%"},
      {left:"61%",top:"65%"},
      {left:"40%",top:"65%"},
      {left:"20%",top:"42%"}
    ];

    let index = 0;

    movingBus.style.left =
      positions[0].left;

    movingBus.style.top =
      positions[0].top;

    clearInterval(window.__busAnimation);

    window.__busAnimation =
      setInterval(() => {

        index =
          (index + 1) %
          positions.length;

        movingBus.style.left =
          positions[index].left;

        movingBus.style.top =
          positions[index].top;

      }, 3000);
  }


  /* =========================================================
     MERCH
  ========================================================= */

  $$(".merch-btn").forEach(button => {

    button.addEventListener("click", () => {

      const item =
        button.dataset.item;

      toast(`${item} dipilih.`);
    });

  });


  /* =========================================================
     CLOSE MODALS
  ========================================================= */

  $$(".modal-close").forEach(button => {

    button.addEventListener("click", () => {

      const overlay =
        button.closest(".overlay");

      hide(overlay);
    });

  });


  /*
    Klik area gelap untuk menutup modal.
    Klik isi modal tidak menutup.
  */

  $$(".overlay").forEach(overlay => {

    overlay.addEventListener("click", event => {

      if (event.target === overlay) {
        hide(overlay);
      }

    });

  });


  /* =========================================================
     ESC KEY
  ========================================================= */

  document.addEventListener("keydown", event => {

    if (event.key !== "Escape") return;

    $$(".overlay.active")
      .forEach(hide);

  });


  /* =========================================================
     IMAGE FALLBACK
     
     Kalau nama/path foto berbeda, website TIDAK putih.
     Gambar yang gagal dimuat otomatis jadi placeholder.
  ========================================================= */

  $$("img").forEach(img => {

    img.addEventListener("error", () => {

      img.onerror = null;

      img.src =
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg"
               width="900"
               height="600"
               viewBox="0 0 900 600">

            <rect width="900"
                  height="600"
                  fill="#1a2024"/>

            <text x="450"
                  y="285"
                  text-anchor="middle"
                  fill="#d8d1c3"
                  font-family="Arial"
                  font-size="28"
                  font-weight="bold">
              UNIVERSITY OF MOWTOWN
            </text>

            <text x="450"
                  y="325"
                  text-anchor="middle"
                  fill="#7f898e"
                  font-family="Arial"
                  font-size="15">
              Campus Image
            </text>

          </svg>
        `);
    });

  });


  /* =========================================================
     HTML ESCAPE
  ========================================================= */

  function escapeHTML(value) {

    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }


  /* =========================================================
     INITIAL STATE
  ========================================================= */

  renderPreview();

  if (routeSelect) {
    routeSelect.value = "Apollo";
  }

  buildSeatMap();

});
```
