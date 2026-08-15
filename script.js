(() => {
  "use strict";

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];

  const esc = (s) =>
    String(s ?? "").replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        })[c]
    );

  const toast = (msg) => {
    const t = $("#toast");

    t.textContent = msg;
    t.classList.add("show");

    clearTimeout(toast.timer);

    toast.timer = setTimeout(() => {
      t.classList.remove("show");
    }, 2400);
  };


  /* =========================
     LOCAL STORAGE
  ========================= */

  const KEY = "mowtown_final_v1_";

  const channel =
    "BroadcastChannel" in window
      ? new BroadcastChannel("mowtown-live-v1")
      : null;

  const save = (k, v) =>
    localStorage.setItem(
      KEY + k,
      JSON.stringify(v)
    );

  const load = (k, d = null) => {
    try {
      return (
        JSON.parse(
          localStorage.getItem(KEY + k)
        ) ?? d
      );
    } catch {
      return d;
    }
  };

  const broadcast = (type, payload) => {
    channel?.postMessage({
      type,
      payload
    });
  };


  /* =========================
     FACULTIES
  ========================= */

  const faculties = [
    "Kedokteran",
    "Kedokteran Gigi",
    "Keperawatan",
    "Kesehatan Masyarakat",
    "Farmasi",
    "Psikologi",
    "Hukum",
    "Ekonomi dan Bisnis",
    "Ilmu Sosial dan Ilmu Politik",
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


  const studyMap = {
    Kedokteran: [
      "Pendidikan Dokter",
      "Kedokteran Dasar"
    ],

    KedokteranGigi: [
      "Kedokteran Gigi",
      "Kesehatan Gigi"
    ],

    Keperawatan: [
      "Keperawatan",
      "Keperawatan Komunitas"
    ],

    KesehatanMasyarakat: [
      "Kesehatan Masyarakat",
      "Epidemiologi"
    ],

    Farmasi: [
      "Farmasi",
      "Sains Farmasi"
    ],

    Psikologi: [
      "Psikologi",
      "Psikologi Pendidikan"
    ],

    Hukum: [
      "Ilmu Hukum",
      "Hukum Bisnis"
    ],

    EkonomidanBisnis: [
      "Manajemen",
      "Akuntansi"
    ],

    IlmuSosialdanIlmuPolitik: [
      "Ilmu Politik",
      "Sosiologi"
    ],

    IlmuKomunikasi: [
      "Ilmu Komunikasi",
      "Public Relations"
    ],

    Pendidikan: [
      "Pendidikan Guru",
      "Teknologi Pendidikan"
    ],

    BahasadanSastra: [
      "Sastra Indonesia",
      "Linguistik"
    ],

    Teknik: [
      "Teknik Sipil",
      "Teknik Mesin"
    ],

    IlmuKomputer: [
      "Informatika",
      "Sistem Informasi"
    ],

    MatematikadanSains: [
      "Matematika",
      "Fisika"
    ],

    Pertanian: [
      "Agroteknologi",
      "Agribisnis"
    ],

    SenidanDesain: [
      "DKV",
      "Desain Produk"
    ],

    IlmuKeolahragaan: [
      "Ilmu Keolahragaan",
      "Kepelatihan"
    ]
  };


  const norm = (s) =>
    s.replace(/[^A-Za-z]/g, "");


  /* =========================
     50.000 MAHASISWA
  ========================= */

  const first = [
    "Aditya",
    "Alya",
    "Bagas",
    "Bima",
    "Citra",
    "Daffa",
    "Dimas",
    "Eka",
    "Fajar",
    "Ghina",
    "Hana",
    "Irfan",
    "Jasmine",
    "Kevin",
    "Laras",
    "Maya",
    "Naufal",
    "Omar",
    "Putri",
    "Raka",
    "Salsa",
    "Tasya",
    "Umar",
    "Vania",
    "Wahyu",
    "Yasmin",
    "Zaki",
    "Aurel",
    "Bayu",
    "Clara",
    "Dion",
    "Elsa",
    "Farhan",
    "Gita",
    "Hafiz",
    "Intan",
    "Jovan",
    "Kirana",
    "Luthfi",
    "Nadia",
    "Rizky",
    "Sinta",
    "Tio",
    "Vira",
    "Yoga",
    "Zahra"
  ];

  const last = [
    "Pratama",
    "Maharani",
    "Ramadhan",
    "Kurniawan",
    "Lestari",
    "Saputra",
    "Wijaya",
    "Permata",
    "Nugraha",
    "Hidayat",
    "Maulana",
    "Siregar",
    "Santoso",
    "Wibowo",
    "Putra",
    "Anggraini",
    "Firmansyah",
    "Setiawan",
    "Puspita",
    "Hakim",
    "Rahman",
    "Ananda",
    "Utami",
    "Suryana",
    "Kusuma",
    "Fauzan"
  ];


  const makeStudents = (n = 50000) => {
    const a = [];

    for (let i = 0; i < n; i++) {
      const fn =
        first[i % first.length];

      const ln =
        last[
          Math.floor(i / first.length) %
            last.length
        ];

      const block = Math.floor(
        i / (first.length * last.length)
      );

      let name = `${fn} ${ln}`;

      if (block) {
        name += ` ${String.fromCharCode(
          65 + (block % 26)
        )}`;
      }

      a.push({
        id:
          `UM${String(i + 1).padStart(
            6,
            "0"
          )}`,

        name,

        faculty:
          faculties[
            (i * 7 +
              Math.floor(i / 31)) %
              faculties.length
          ],

        score:
          Number(
            (
              82 +
              ((i * 37) % 1800) /
                100
            ).toFixed(2)
          )
      });
    }

    return a.sort(
      (a, b) =>
        a.name.localeCompare(
          b.name,
          "id"
        ) ||
        a.id.localeCompare(b.id)
    );
  };


  const students = makeStudents();


  /* PREVIEW 10 MAHASISWA */

  $("#preview").innerHTML =
    students
      .slice(0, 10)
      .map(
        (s, i) => `
          <tr>
            <td>${i + 1}</td>
            <td>${esc(s.name)}</td>
            <td>${esc(s.faculty)}</td>
            <td>${s.score.toFixed(2)}</td>
          </tr>
        `
      )
      .join("");


  /* =========================
     NAVIGATION
  ========================= */

  $("#menu").onclick = () => {
    $("#nav").classList.toggle("open");
  };

  $("#nav")
    .querySelectorAll("a")
    .forEach((a) => {
      a.onclick = () => {
        $("#nav").classList.remove("open");
      };
    });


  /* =========================
     LIVE APPLICANTS
  ========================= */

  let applicants = load(
    "applicants",
    8421
  );

  $("#applicants").textContent =
    Number(applicants).toLocaleString(
      "id-ID"
    );

  setInterval(() => {
    applicants +=
      Math.floor(
        Math.random() * 3
      );

    save(
      "applicants",
      applicants
    );

    $("#applicants").textContent =
      applicants.toLocaleString(
        "id-ID"
      );
  }, 10000);


  /* =========================
     FACULTY CARDS
  ========================= */

  $("#facultyCards").innerHTML =
    faculties
      .map(
        (f, i) => `
          <article class="faculty-item">
            <span>
              ${String(i + 1).padStart(2, "0")}
              · FACULTY
            </span>

            <b>
              Fakultas ${esc(f)}
            </b>

            <small>
              ${
                (
                  studyMap[norm(f)] ||
                  [
                    "Program Akademik",
                    "Program Profesional"
                  ]
                )
                  .map(esc)
                  .join(" · ")
              }
            </small>
          </article>
        `
      )
      .join("");


  /* =========================
     FACULTY DIRECTORY
  ========================= */

  const names = [
    "Dr. Arman Wijaya, M.Si.",
    "Dr. Naila Prameswari, Ph.D.",
    "Prof. Bima Santoso, Ph.D.",
    "Dr. Citra Mahendra, M.A.",
    "Dr. Farhan Kurnia, M.T.",
    "Prof. Hana Suryani, Ph.D.",
    "Dr. Kevin Aditya, M.H.",
    "Dr. Maya Permata, M.Psi."
  ];


  function renderFaculty(q = "") {
    const data =
      Array.from(
        { length: 40 },
        (_, i) => ({
          name:
            names[
              i % names.length
            ],

          faculty:
            faculties[
              (i * 3) %
                faculties.length
            ]
        })
      )
      .filter((x) =>
        `${x.name} ${x.faculty}`
          .toLowerCase()
          .includes(q.toLowerCase())
      );

    $("#facultyList").innerHTML =
      data
        .slice(0, 12)
        .map(
          (x) => `
            <article class="faculty-person">
              <b>${esc(x.name)}</b>
              <span>
                Fakultas ${esc(x.faculty)}
              </span>
            </article>
          `
        )
        .join("") ||
      `<p class="muted">
        Dosen tidak ditemukan.
      </p>`;
  }

  renderFaculty();

  $("#facultySearchBtn").onclick =
    () =>
      renderFaculty(
        $("#facultySearch").value
      );

  $("#facultySearch").oninput =
    () =>
      renderFaculty(
        $("#facultySearch").value
      );


  /* =========================
     STUDENT DIRECTORY
  ========================= */

  let page = 1;

  const perPage = 10;

  const drawer = $("#drawer");
  const backdrop = $("#backdrop");


  function renderDirectory() {
    const q =
      $("#search")
        .value
        .trim()
        .toLowerCase();

    const data = q
      ? students.filter(
          (s) =>
            s.name
              .toLowerCase()
              .includes(q) ||
            s.faculty
              .toLowerCase()
              .includes(q) ||
            s.id
              .toLowerCase()
              .includes(q)
        )
      : students;

    const pages = Math.max(
      1,
      Math.ceil(
        data.length / perPage
      )
    );

    page = Math.min(
      page,
      pages
    );

    const shown =
      data.slice(
        (page - 1) * perPage,
        page * perPage
      );

    $("#count").textContent =
      `${data.length.toLocaleString(
        "id-ID"
      )} mahasiswa ditemukan`;

    $("#results").innerHTML =
      shown.length
        ? shown
            .map(
              (s) => `
                <div class="student-row">

                  <div>
                    <b>
                      ${esc(s.name)}
                    </b>

                    <small>
                      ${s.id}
                      · Fakultas
                      ${esc(s.faculty)}
                    </small>
                  </div>

                  <span class="score">
                    ${s.score.toFixed(2)}
                  </span>

                </div>
              `
            )
            .join("")
        : `
          <p class="muted">
            Mahasiswa tidak ditemukan.
          </p>
        `;


    $("#pages").innerHTML = "";

    for (
      let p =
        Math.max(1, page - 3);

      p <=
      Math.min(
        pages,
        page + 3
      );

      p++
    ) {
      const b =
        document.createElement(
          "button"
        );

      b.className =
        `page ${
          p === page
            ? "active"
            : ""
        }`;

      b.textContent = p;

      b.onclick = () => {
        page = p;
        renderDirectory();
      };

      $("#pages").appendChild(b);
    }
  }


  function closeDrawer() {
    drawer.classList.remove("open");
    backdrop.classList.remove("show");
    document.body.style.overflow = "";
  }


  $("#openStudents").onclick =
    () => {
      drawer.classList.add("open");
      backdrop.classList.add("show");

      document.body.style.overflow =
        "hidden";

      page = 1;

      renderDirectory();

      setTimeout(
        () => $("#search").focus(),
        80
      );
    };


  $("#closeStudents").onclick =
    closeDrawer;

  backdrop.onclick =
    closeDrawer;

  $("#search").oninput =
    () => {
      page = 1;
      renderDirectory();
    };


  /* =========================
     LEADERBOARD
  ========================= */

  const topStudents =
    [...students]
      .sort(
        (a, b) =>
          b.score - a.score
      )
      .slice(0, 30);


  function renderBoard() {
    const show =
      topStudents.slice(0, 6);

    $("#leaderboardList").innerHTML =
      show
        .map(
          (s, i) => `
            <div class="rank">

              <span class="rank-num">
                #${i + 1}
              </span>

              <div>
                <b>
                  ${esc(s.name)}
                </b>

                <small>
                  ${esc(s.faculty)}
                </small>
              </div>

              <span class="rank-score">
                ${s.score.toFixed(2)}
              </span>

            </div>
          `
        )
        .join("");
  }

  renderBoard();


  /* =========================
     PMB EXAM
  ========================= */

  $("#examField").innerHTML =
    faculties
      .map(
        (f) =>
          `<option>${esc(f)}</option>`
      )
      .join("");


  const examBank = {

    "Ilmu Komputer": [
      [
        "Pola 3,6,9,12 dilanjutkan dengan...",
        ["13","14","15","18"],
        2
      ],

      [
        "Biner 1010 bernilai...",
        ["8","9","10","12"],
        2
      ],

      [
        "Algoritma 4 langkah @2 detik memerlukan...",
        ["6","8","10","12"],
        1
      ]
    ],

    "Matematika dan Sains": [
      [
        "3x+5=20, x adalah...",
        ["3","4","5","6"],
        2
      ],

      [
        "Luas persegi panjang 8×5 cm...",
        ["13","26","40","80"],
        2
      ],

      [
        "Air berubah menjadi uap melalui...",
        [
          "membeku",
          "menguap",
          "mengembun",
          "mencair"
        ],
        1
      ]
    ],

    "Bahasa dan Sastra": [
      [
        "Kalimat efektif adalah...",
        [
          "Saya pergi ke sekolah setiap hari.",
          "Saya adalah pergi ke sekolah.",
          "Saya pergi adalah ke sekolah.",
          "Saya ke sekolah pergi."
        ],
        0
      ],

      [
        "Antonim optimistis...",
        [
          "yakin",
          "pesimis",
          "semangat",
          "percaya"
        ],
        1
      ],

      [
        "Gagasan utama disebut...",
        [
          "judul",
          "tema",
          "ide pokok",
          "kalimat penjelas"
        ],
        2
      ]
    ]
  };


  const getQuestions =
    (f) =>
      examBank[f] ||
      [
        [
          "Langkah pertama menyelesaikan masalah adalah...",
          [
            "mengenali masalah",
            "langsung menjawab",
            "menghapus data",
            "mengubah soal"
          ],
          0
        ],

        [
          "Evaluasi hasil diperlukan untuk...",
          [
            "memastikan jawaban masuk akal",
            "memperpanjang soal",
            "mengurangi waktu",
            "menghilangkan proses"
          ],
          0
        ],

        [
          "Belajar efektif dilakukan dengan...",
          [
            "latihan terarah",
            "menebak",
            "mengabaikan materi",
            "menyalin"
          ],
          0
        ]
      ];


  function openModal(html) {
    $("#modalContent").innerHTML =
      html;

    $("#modal").classList.add(
      "show"
    );

    document.body.classList.add(
      "modal-open"
    );
  }


  function closeModal() {
    $("#modal").classList.remove(
      "show"
    );

    document.body.classList.remove(
      "modal-open"
    );
  }


  $("#startExam").onclick =
    () => {

      const field =
        $("#examField").value;

      const q =
        getQuestions(field);

      openModal(`
        <h2>
          Ujian Tahap 1 ·
          ${esc(field)}
        </h2>

        <p class="muted">
          Simulasi demo · 3 soal.
        </p>

        ${q.map(
          (x, i) => `
            <div class="question">

              <b>
                ${i + 1}.
                ${esc(x[0])}
              </b>

              ${x[1]
                .map(
                  (o, j) => `
                    <label class="option">
                      <input
                        type="radio"
                        name="q${i}"
                        value="${j}"
                      >
                      ${esc(o)}
                    </label>
                  `
                )
                .join("")}

            </div>
          `
        ).join("")}

        <button
          class="btn primary"
          id="submitExam"
        >
          Kirim Jawaban
        </button>
      `);


      $("#submitExam").onclick =
        () => {

          let correct = 0;

          q.forEach(
            (x, i) => {
              const a =
                document.querySelector(
                  `input[name="q${i}"]:checked`
                );

              if (
                a &&
                Number(a.value) ===
                  x[2]
              ) {
                correct++;
              }
            }
          );


          const score =
            Number(
              (
                correct /
                q.length *
                100
              ).toFixed(2)
            );


          save(
            "lastExam",
            {
              field,
              score,
              stage: 1
            }
          );


          openModal(`
            <h2>
              Hasil Ujian
            </h2>

            <p>
              Bidang studi:
              <b>${esc(field)}</b>
            </p>

            <p>
              Jawaban benar:
              <b>
                ${correct}/${q.length}
              </b>
            </p>

            <p>
              Nilai:
              <strong>
                ${score.toFixed(2)}
              </strong>
            </p>

            <p>
              ${
                score >= 89.77
                  ? "STATUS: LULUS TAHAP 1"
                  : "STATUS: BELUM LULUS"
              }
            </p>

            <button
              class="btn primary"
              id="doneExam"
            >
              Tutup
            </button>
          `);


          $("#doneExam").onclick =
            closeModal;
        };
    };


  $("#closeModal").onclick =
    closeModal;


  $("#modal").onclick =
    (e) => {
      if (
        e.target.id ===
        "modal"
      ) {
        closeModal();
      }
    };


  document.addEventListener(
    "keydown",
    (e) => {
      if (
        e.key === "Escape"
      ) {
        closeModal();
      }
    }
  );


  /* =========================
     BUS ROUTES
  ========================= */

  const routes = [
    [
      "Athena Line",
      "Athena Gate",
      "Central Station"
    ],

    [
      "Apollo Line",
      "Apollo Hall",
      "North Residence"
    ],

    [
      "Artemis Line",
      "Library",
      "Sports Complex"
    ],

    [
      "Zeus Line",
      "Engineering",
      "Medical Center"
    ],

    [
      "Hera Line",
      "Main Gate",
      "Arts District"
    ],

    [
      "Poseidon Line",
      "Aquatic Center",
      "Science Park"
    ],

    [
      "Ares Line",
      "Grand Stadium",
      "Engineering"
    ],

    [
      "Demeter Line",
      "Agriculture",
      "Central Library"
    ],

    [
      "Hermes Line",
      "Business Center",
      "Main Gate"
    ],

    [
      "Hestia Line",
      "Student Housing",
      "Campus Center"
    ],

    [
      "Dionysus Line",
      "Arts District",
      "Auditorium"
    ],

    [
      "Persephone Line",
      "West Residence",
      "Museum"
    ],

    [
      "Helios Line",
      "East Gate",
      "Grand Stadium"
    ],

    [
      "Selene Line",
      "Medical Center",
      "Student Housing"
    ],

    [
      "Nike Line",
      "Sports Complex",
      "Main Gate"
    ],

    [
      "Gaia Line",
      "Green Campus",
      "Agriculture"
    ],

    [
      "Thanatos Line",
      "North Gate",
      "Library"
    ],

    [
      "Eros Line",
      "Arts District",
      "Central Station"
    ],

    [
      "Iris Line",
      "Museum",
      "Engineering"
    ],

    [
      "Atlas Line",
      "West Gate",
      "Business Center"
    ],

    [
      "Nyx Line",
      "Student Housing",
      "East Gate"
    ],

    [
      "Chronos Line",
      "Central Station",
      "Medical Center"
    ],

    [
      "Themis Line",
      "Law Faculty",
      "Main Gate"
    ],

    [
      "Morpheus Line",
      "Residence",
      "Library"
    ]
  ];


  const routeData =
    routes.map(
      (r, i) => ({
        name: r[0],
        from: r[1],
        to: r[2],

        time:
          [
            "06:30",
            "07:00",
            "07:30",
            "08:00",
            "08:30",
            "09:00"
          ][i % 6]
      })
    );


  const route =
    $("#route");

  const bus =
    $("#busSelect");


  route.innerHTML =
    routeData
      .map(
        (r, i) =>
          `<option value="${i}">
            ${esc(r.name)}
          </option>`
      )
      .join("");


  const busList = [
    "UM-01",
    "UM-02",
    "UM-03",
    "UM-04",
    "UM-05",
    "UM-06",
    "UM-07",
    "UM-08",
    "UM-09",
    "UM-10",
    "UM-11",
    "UM-12",
    "UM-13",
    "UM-14",
    "UM-15",
    "UM-16",
    "UM-17",
    "UM-18",
    "UM-19",
    "UM-20",
    "UM-21",
    "UM-22",
    "UM-23",
    "UM-W01"
  ];


  bus.innerHTML =
    busList
      .map(
        (b) =>
          `<option value="${b}">
            ${b === "UM-W01"
              ? "UM-W01 · Women's Bus"
              : b}
          </option>`
      )
      .join("");


  let selectedSeat =
    null;


  const seatKey = () =>
    `seats_${route.value}_${bus.value}`;


  const loadSeats = () =>
    load(
      seatKey(),
      {}
    );


  const saveSeats = (v) => {
    save(
      seatKey(),
      v
    );

    broadcast(
      "seat",
      {}
    );
  };


  function seedCrowd() {

    const key =
      seatKey();

    if (
      load(key, null)
    ) {
      return;
    }

    const seeded = {};

    for (
      let i = 1;
      i <= 40;
      i++
    ) {

      if (
        (
          i * 13 +
          Number(route.value) * 7 +
          bus.value.length
        ) % 5 ===
        0
      ) {
        seeded[i] = {
          name: "Mahasiswa",
          kind: "booked",
          at: Date.now()
        };
      }
    }

    save(
      key,
      seeded
    );
  }


  function renderSeats() {

    seedCrowd();

    selectedSeat =
      null;

    const r =
      routeData[
        Number(route.value)
      ];

    const b =
      bus.value;

    const taken =
      loadSeats();

    const isWomen =
      b === "UM-W01";


    $("#seatMeta").innerHTML = `
      <b>
        ${esc(r.name)}
      </b>
      ·
      ${esc(r.from)}
      →
      ${esc(r.to)}
      ·
      ${esc(b)}
      ·
      ${Object.keys(taken).length}/40
      kursi terisi
      ${
        isWomen
          ? " · Women’s Bus"
          : ""
      }
    `;


    $("#mapRoute").textContent =
      `${r.name} · ${r.from} → ${r.to}`;


    const map =
      $("#seatMap");

    map.innerHTML = "";


    for (
      let n = 1;
      n <= 40;
      n++
    ) {

      const btn =
        document.createElement(
          "button"
        );

      const info =
        taken[n];


      btn.className =
        "seat";


      if (info) {
        btn.classList.add(
          "taken"
        );
      }


      if (isWomen) {
        btn.classList.add(
          "women"
        );
      }


      if (n <= 4) {
        btn.classList.add(
          "access"
        );
      }


      btn.textContent =
        `${n}${
          n <= 4
            ? " ♿"
            : ""
        }`;


      if (info) {
        btn.disabled = true;
      }


      btn.title =
        n <= 4
          ? "Kursi aksesibel"
          : isWomen
          ? "Women's Bus"
          : "";


      btn.onclick =
        () => {

          selectedSeat =
            n;

          $$(".seat")
            .forEach(
              (x) =>
                x.classList.remove(
                  "selected"
                )
            );

          btn.classList.add(
            "selected"
          );

          $("#bookBus").disabled =
            false;
        };


      map.appendChild(
        btn
      );
    }


    $("#bookBus").disabled =
      true;

    animateMap(r);
  }


  /* =========================
     LIVE MAP
  ========================= */

  function animateMap(r) {

    const mapBus =
      $("#mapBus");

    const points = [
      [10,48],
      [30,28],
      [52,46],
      [72,32],
      [84,64],
      [58,80],
      [35,62]
    ];

    let idx = 0;

    clearInterval(
      animateMap.timer
    );


    const move = () => {

      const [
        x,
        y
      ] =
        points[
          idx %
          points.length
        ];

      mapBus.style.left =
        x + "%";

      mapBus.style.top =
        y + "%";

      idx++;
    };


    move();

    animateMap.timer =
      setInterval(
        move,
        2200
      );
  }


  route.onchange =
    () => renderSeats();

  bus.onchange =
    () => renderSeats();

  renderSeats();


  /* =========================
     BUS BOOKING
  ========================= */

  $("#bookBus").onclick =
    () => {

      if (
        selectedSeat == null
      ) {
        return toast(
          "pilih kursi dulu."
        );
      }


      const name =
        $("#studentName")
          .value
          .trim();

      const id =
        $("#studentId")
          .value
          .trim();


      if (
        !name ||
        !id
      ) {
        return toast(
          "isi nama dan NIM dulu."
        );
      }


      const taken =
        loadSeats();


      if (
        taken[selectedSeat]
      ) {
        toast(
          "kursi baru saja diambil mahasiswa lain."
        );

        renderSeats();

        return;
      }


      const r =
        routeData[
          Number(route.value)
        ];


      const code =
        "UMT-" +
        Math.random()
          .toString(36)
          .slice(2,8)
          .toUpperCase();


      const ticket = {
        name,
        id,
        route: r.name,
        from: r.from,
        to: r.to,
        bus: bus.value,
        seat: selectedSeat,
        code,

        date:
          new Date()
            .toLocaleDateString(
              "id-ID"
            ),

        time: r.time
      };


      taken[selectedSeat] = {
        name,
        kind: "booked",
        at: Date.now(),
        code
      };


      saveSeats(
        taken
      );

      save(
        "lastTicket",
        ticket
      );


      renderTicket(
        ticket
      );

      renderSeats();

      toast(
        "booking berhasil — kursi terkunci."
      );
    };


  /* =========================
     E-TICKET
  ========================= */

  function renderTicket(t) {

    if (!t) {
      $("#ticket")
        .classList
        .add("hidden");

      return;
    }


    $("#ticket")
      .classList
      .remove("hidden");


    $("#ticket").innerHTML = `
      <h4>
        UNIVERSITY OF MOWTOWN · E-TICKET
      </h4>

      <div class="barcode"></div>

      <div class="ticket-grid">

        <div>
          <small>Nama</small>
          <br>
          <b>${esc(t.name)}</b>
        </div>

        <div>
          <small>NIM</small>
          <br>
          <b>${esc(t.id)}</b>
        </div>

        <div>
          <small>Rute</small>
          <br>
          <b>${esc(t.route)}</b>
        </div>

        <div>
          <small>Bus</small>
          <br>
          <b>${esc(t.bus)}</b>
        </div>

        <div>
          <small>Kursi</small>
          <br>
          <b>${t.seat}</b>
        </div>

        <div>
          <small>Berangkat</small>
          <br>
          <b>
            ${esc(t.date)}
            ·
            ${esc(t.time)}
          </b>
        </div>

        <div>
          <small>Kode</small>
          <br>
          <b>${esc(t.code)}</b>
        </div>

        <div>
          <small>Status</small>
          <br>
          <b>CONFIRMED</b>
        </div>

      </div>

      <div class="ticket-actions">

        <button
          class="btn primary"
          id="downloadTicket"
        >
          Simpan E-Ticket
        </button>

      </div>
    `;


    $("#downloadTicket").onclick =
      () => {

        const blob =
          new Blob(
            [
              JSON.stringify(
                t,
                null,
                2
              )
            ],
            {
              type:
                "application/json"
            }
          );


        const a =
          document.createElement(
            "a"
          );

        a.href =
          URL.createObjectURL(
            blob
          );

        a.download =
          `e-ticket-${t.code}.json`;

        a.click();


        setTimeout(
          () =>
            URL.revokeObjectURL(
              a.href
            ),
          500
        );
      };
  }


  renderTicket(
    load(
      "lastTicket"
    )
  );


  $("#showSavedTicket").onclick =
    () => {

      const t =
        load(
          "lastTicket"
        );

      t
        ? renderTicket(t)
        : toast(
            "belum ada e-ticket tersimpan."
          );
    };


  channel?.addEventListener(
    "message",
    (e) => {

      if (
        e.data?.type ===
        "seat"
      ) {
        renderSeats();
      }

    }
  );


  /* =========================
     MERCHANDISE
  ========================= */

  const products = {

    almet: {
      name:
        "Almamater University of Mowtown"
    },

    neo: {
      name:
        "MacBook Neo 2"
    },

    books: {
      name:
        "Buku Materi Bidang Studi"
    }

  };


  $$(".merch-btn")
    .forEach(
      (btn) => {

        btn.onclick =
          () => {

            const item =
              products[
                btn.dataset.item
              ];


            openModal(`
              <span class="eyebrow darktext">
                MOWTOWN STORE
              </span>

              <h2>
                ${esc(item.name)}
              </h2>

              <p class="muted">
                Redeem hanya memakai
                kode PMB.
              </p>

              <input
                id="redeemCode"
                placeholder="Contoh: UM-26-X7K92P"
                style="
                  width:100%;
                  padding:12px;
                  border:1px solid #d5ccbd;
                  border-radius:10px;
                "
              >

              <div id="redeemResult"></div>

              <button
                class="btn primary"
                id="redeemBtn"
                style="margin-top:12px"
              >
                Redeem Sekarang
              </button>
            `);


            $("#redeemBtn").onclick =
              () => {

                const code =
                  $("#redeemCode")
                    .value
                    .trim()
                    .toUpperCase();


                if (
                  !/^UM-/.test(
                    code
                  )
                ) {

                  return (
                    $("#redeemResult")
                      .innerHTML = `
                        <div class="result bad">
                          Kode demo harus diawali UM-.
                        </div>
                      `
                  );
                }


                if (
                  load(
                    "redeemed_" +
                    code,
                    null
                  )
                ) {

                  return (
                    $("#redeemResult")
                      .innerHTML = `
                        <div class="result bad">
                          Kode ini sudah pernah dipakai.
                        </div>
                      `
                  );
                }


                save(
                  "redeemed_" +
                  code,
                  {
                    product:
                      btn.dataset.item,

                    at:
                      Date.now()
                  }
                );


                $("#redeemResult")
                  .innerHTML = `
                    <div class="result good">
                      Redeem berhasil dicatat
                      di browser demo.
                    </div>
                  `;


                toast(
                  "redeem berhasil"
                );
              };
          };

      }
    );


  /* =========================
     KKN
  ========================= */

  const workJobs = [

    [
      "Junior Research Assistant",
      "Science Research Building",
      "Matematika & Sains / bidang relevan",
      "Rp1.250.000 / bulan"
    ],

    [
      "Student IT Assistant",
      "Mowtown Digital Lab",
      "Ilmu Komputer",
      "Rp1.500.000 / bulan"
    ],

    [
      "Library Assistant",
      "Central Library",
      "Bahasa, Pendidikan, semua bidang",
      "Rp1.000.000 / bulan"
    ],

    [
      "Creative Studio Assistant",
      "Mowtown Creative Studio",
      "Seni & Desain",
      "Rp1.250.000 / bulan"
    ],

    [
      "Legal Office Assistant",
      "Mowtown Legal Office",
      "Hukum",
      "Rp1.300.000 / bulan"
    ],

    [
      "Business Operations Assistant",
      "Mowtown Business Center",
      "Ekonomi & Bisnis",
      "Rp1.400.000 / bulan"
    ],

    [
      "Medical Research Assistant",
      "University Medical Center",
      "Kedokteran, Keperawatan, Farmasi",
      "Rp1.500.000 / bulan"
    ],

    [
      "Media Desk Assistant",
      "Mowtown Media Center",
      "Ilmu Komunikasi",
      "Rp1.150.000 / bulan"
    ],

    [
      "Agriculture Lab Assistant",
      "Agricultural Research Center",
      "Pertanian",
      "Rp1.200.000 / bulan"
    ],

    [
      "Sports Program Assistant",
      "Mowtown Sports Institute",
      "Ilmu Keolahragaan",
      "Rp1.100.000 / bulan"
    ],

    [
      "Student Services Assistant",
      "Academic Center",
      "Pendidikan, Sosial, Bahasa",
      "Rp1.000.000 / bulan"
    ],

    [
      "Engineering Lab Assistant",
      "Engineering Bureau",
      "Teknik",
      "Rp1.450.000 / bulan"
    ]

  ];


  $("#jobGrid").innerHTML =
    workJobs
      .map(
        (j) => `
          <article class="job-card">

            <span class="badge">
              ✓ UNIVERSITY LICENSED
            </span>

            <h3>
              ${esc(j[0])}
            </h3>

            <p>
              ${esc(j[1])}
            </p>

            <small>
              ${esc(j[2])}
            </small>

            <p>
              <b>
                ${esc(j[3])}
              </b>
            </p>

          </article>
        `
      )
      .join("");


  const kknQ = [

    [
      "Saat jadwal kerja dan kuliah bentrok, pilihan terbaik adalah...",
      [
        "mengikuti prosedur penjadwalan",
        "menghilang",
        "memalsukan jam",
        "mengabaikan kuliah"
      ],
      0
    ],

    [
      "Data mahasiswa dalam pekerjaan internal harus...",
      [
        "dijaga sesuai aturan",
        "dibagikan bebas",
        "diunggah ke publik",
        "diabaikan"
      ],
      0
    ],

    [
      "Prioritas work-study adalah...",
      [
        "kinerja kerja dan tanggung jawab akademik",
        "bekerja sebanyak mungkin",
        "menghindari evaluasi",
        "mengabaikan dosen"
      ],
      0
    ],

    [
      "Sebelum mengambil tugas baru sebaiknya...",
      [
        "memastikan kapasitas dan instruksi",
        "langsung menerima semua",
        "menebak tugas",
        "menghapus jadwal"
      ],
      0
    ],

    [
      "Laporan pekerjaan digunakan untuk...",
      [
        "mencatat hasil dan evaluasi",
        "memperpanjang pekerjaan",
        "mengganti nilai kuliah",
        "menghindari supervisi"
      ],
      0
    ]

  ];


  function openKknIntro() {

    const exam =
      load(
        "kknExam",
        null
      );


    openModal(`

      <span class="eyebrow darktext">
        KULIAH KERJA NYATA
      </span>

      <h2>
        cek kelayakan KKN.
      </h2>

      <p>
        Semua bidang studi boleh ikut,
        tetapi mahasiswa harus resmi
        dan sudah lulus Ujian Tahap 2.
      </p>

      <div class="eligibility">

        <ol>

          <li>
            Resmi mahasiswa baru.
          </li>

          <li>
            Lulus Ujian Tahap 2.
          </li>

          <li>
            Lulus Ujian Khusus KKN.
          </li>

          <li>
            Jabatan dipilih sistem berdasarkan
            hasil ujian + rata-rata akademik
            + kecocokan bidang.
          </li>

        </ol>

      </div>

      ${
        exam
          ? `
            <p>
              <b>Hasil terakhir:</b>
              ${exam.score.toFixed(2)}
              —
              ${
                exam.score >= 80
                  ? "LULUS"
                  : "BELUM LULUS"
              }
            </p>
          `
          : ""
      }

      <button
        class="btn primary"
        id="startKkn"
      >
        Mulai Ujian KKN
      </button>

    `);


    $("#startKkn").onclick =
      () =>
        startKknExam();
  }


  function startKknExam() {

    openModal(`

      <h2>
        Ujian Khusus KKN
      </h2>

      <p class="muted">
        5 soal simulasi.
        Ambang lulus 80.
      </p>

      ${kknQ
        .map(
          (x, i) => `

            <div class="question">

              <b>
                ${i + 1}.
                ${esc(x[0])}
              </b>

              ${x[1]
                .map(
                  (o, j) => `
                    <label class="option">

                      <input
                        type="radio"
                        name="k${i}"
                        value="${j}"
                      >

                      ${esc(o)}

                    </label>
                  `
                )
                .join("")}

            </div>

          `
        )
        .join("")}

      <button
        class="btn primary"
        id="submitKkn"
      >
        Kirim Ujian
      </button>

    `);


    $("#submitKkn").onclick =
      () => {

        let c = 0;


        kknQ.forEach(
          (x, i) => {

            const a =
              document.querySelector(
                `input[name="k${i}"]:checked`
              );


            if (
              a &&
              Number(a.value) ===
                x[2]
            ) {
              c++;
            }

          }
        );


        const score =
          c /
          kknQ.length *
          100;


        save(
          "kknExam",
          {
            score
          }
        );


        const eligible =
          score >= 80;


        openModal(`

          <h2>
            ${
              eligible
                ? "Ujian KKN Lulus"
                : "Ujian KKN Belum Lulus"
            }
          </h2>

          <p>
            Nilai:
            <b>
              ${score.toFixed(2)}
            </b>
          </p>

          <p>
            ${
              eligible
                ? "Sistem dapat mensimulasikan penempatan jabatan setelah syarat mahasiswa resmi + Tahap 2 terpenuhi."
                : "Silakan ulangi simulasi setelah belajar materi."
            }
          </p>

          ${
            eligible
              ? `
                <button
                  class="btn primary"
                  id="assignJob"
                >
                  Simulasikan Jabatan
                </button>
              `
              : `
                <button
                  class="btn primary"
                  id="doneKkn"
                >
                  Tutup
                </button>
              `
          }

        `);


        if (eligible) {
          $("#assignJob").onclick =
            assignJob;
        } else {
          $("#doneKkn").onclick =
            closeModal;
        }
      };
  }


  function assignJob() {

    const avg =
      load(
        "lastExam",
        {
          score: 86
        }
      ).score;


    const tier =
      avg >= 90
        ? 0
        : avg >= 85
        ? 1
        : avg >= 80
        ? 2
        : 3;


    const job =
      workJobs[
        tier %
        workJobs.length
      ];


    save(
      "kknAssignment",
      {
        job: job[0],
        salary: job[3]
      }
    );


    openModal(`

      <span class="eyebrow darktext">
        SYSTEM ASSIGNMENT
      </span>

      <h2>
        jabatan terpilih.
      </h2>

      <p>
        Sistem memilih berdasarkan
        performa akademik dan
        kecocokan bidang pada demo.
      </p>

      <div class="result good">

        <b>
          ${esc(job[0])}
        </b>

        <br>

        ${esc(job[1])}

        <br>

        ${esc(job[2])}

        <br>

        <strong>
          ${esc(job[3])}
        </strong>

      </div>

      <button
        class="btn primary"
        id="closeAssign"
      >
        Selesai
      </button>

    `);


    $("#closeAssign").onclick =
      closeModal;
  }


  $("#openKkn").onclick =
    openKknIntro;


  /* =========================
     QUICK LINKS
  ========================= */

  $$('[data-open="bus"]')
    .forEach(
      (b) =>
        b.onclick =
          () =>
            document
              .querySelector("#bus")
              .scrollIntoView({
                behavior:
                  "smooth"
              })
    );


  $$('[data-open="store"]')
    .forEach(
      (b) =>
        b.onclick =
          () =>
            document
              .querySelector("#merch")
              .scrollIntoView({
                behavior:
                  "smooth"
              })
    );


  $$('[data-open="kkn"]')
    .forEach(
      (b) =>
        b.onclick =
          () =>
            document
              .querySelector("#kkn")
              .scrollIntoView({
                behavior:
                  "smooth"
              })
    );

})();
