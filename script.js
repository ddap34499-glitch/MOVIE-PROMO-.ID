/* =========================================================
   UNIVERSITY OF MOWTOWN
   SCRIPT.JS
   ========================================================= */

"use strict";

/* =========================================================
   GLOBAL STATE
   ========================================================= */

const UM = {
  currentStudent: null,
  currentExam: null,
  currentQuestion: 0,
  examAnswers: [],
  examTimer: null,
  examSeconds: 0,

  stageOnePassed: false,
  stageTwoPassed: false,

  selectedRoute: null,
  selectedBusType: "regular",
  selectedSeat: null,

  pmbCode: null,
  secretCode: null,

  leaderboard: [],
  students: [],

  busBookings: {},

  newsIndex: 0
};


/* =========================================================
   FACULTIES
   ========================================================= */

const faculties = [
  {
    name: "Fakultas Kedokteran",
    keywords: ["kesehatan", "dokter", "biologi", "tubuh", "sains"],
    code: "FK"
  },
  {
    name: "Fakultas Kedokteran Gigi",
    keywords: ["gigi", "kesehatan", "biologi", "dokter"],
    code: "FKG"
  },
  {
    name: "Fakultas Keperawatan",
    keywords: ["merawat", "kesehatan", "pasien", "biologi"],
    code: "FKEP"
  },
  {
    name: "Fakultas Kesehatan Masyarakat",
    keywords: ["kesehatan", "masyarakat", "lingkungan", "sosial"],
    code: "FKM"
  },
  {
    name: "Fakultas Farmasi",
    keywords: ["obat", "kimia", "biologi", "laboratorium"],
    code: "FF"
  },
  {
    name: "Fakultas Psikologi",
    keywords: ["manusia", "psikologi", "perasaan", "sosial", "membantu"],
    code: "FPSI"
  },
  {
    name: "Fakultas Hukum",
    keywords: ["hukum", "keadilan", "aturan", "debat", "negara"],
    code: "FH"
  },
  {
    name: "Fakultas Ekonomi dan Bisnis",
    keywords: ["bisnis", "uang", "ekonomi", "usaha", "dagang"],
    code: "FEB"
  },
  {
    name: "Fakultas Ilmu Sosial dan Ilmu Politik",
    keywords: ["politik", "masyarakat", "negara", "sosial"],
    code: "FISIP"
  },
  {
    name: "Fakultas Ilmu Komunikasi",
    keywords: ["komunikasi", "bicara", "menulis", "media", "jurnalistik"],
    code: "FIKOM"
  },
  {
    name: "Fakultas Pendidikan",
    keywords: ["mengajar", "guru", "anak", "pendidikan", "belajar"],
    code: "FP"
  },
  {
    name: "Fakultas Bahasa dan Sastra",
    keywords: ["bahasa", "menulis", "cerita", "sastra", "membaca"],
    code: "FBS"
  },
  {
    name: "Fakultas Teknik",
    keywords: ["mesin", "bangunan", "teknik", "robot", "desain"],
    code: "FT"
  },
  {
    name: "Fakultas Ilmu Komputer",
    keywords: ["komputer", "coding", "program", "teknologi", "website"],
    code: "FIK"
  },
  {
    name: "Fakultas Matematika dan Sains",
    keywords: ["matematika", "fisika", "kimia", "sains", "angka"],
    code: "FMIPA"
  },
  {
    name: "Fakultas Pertanian",
    keywords: ["tanaman", "pertanian", "alam", "kebun", "hewan"],
    code: "FPERT"
  },
  {
    name: "Fakultas Seni dan Desain",
    keywords: ["seni", "gambar", "desain", "lukis", "kreatif"],
    code: "FSD"
  },
  {
    name: "Fakultas Ilmu Keolahragaan",
    keywords: ["olahraga", "lari", "sepakbola", "atlet", "fisik"],
    code: "FIKOR"
  }
];


/* =========================================================
   EXAM DATABASE
   SEMUA SOAL DISESUAIKAN DENGAN BIDANG STUDI
   LEVEL: SMP KELAS 8
   ========================================================= */

const examBank = {

  "Fakultas Kedokteran": [
    {
      q: "Organ yang berfungsi memompa darah ke seluruh tubuh adalah...",
      options: ["Paru-paru", "Jantung", "Ginjal", "Lambung"],
      answer: 1
    },
    {
      q: "Pertukaran oksigen dan karbon dioksida terutama terjadi di...",
      options: ["Alveolus", "Kerongkongan", "Lambung", "Usus"],
      answer: 0
    },
    {
      q: "Sel darah yang berperan utama dalam sistem kekebalan tubuh adalah...",
      options: ["Eritrosit", "Leukosit", "Trombosit", "Plasma"],
      answer: 1
    },
    {
      q: "Zat yang dibutuhkan tubuh untuk pertumbuhan dan perbaikan jaringan adalah...",
      options: ["Protein", "Karbon dioksida", "Air saja", "Oksigen saja"],
      answer: 0
    },
    {
      q: "Denyut jantung dapat meningkat ketika seseorang...",
      options: [
        "Tidur",
        "Melakukan aktivitas fisik",
        "Duduk diam",
        "Beristirahat"
      ],
      answer: 1
    },
    {
      q: "Fungsi utama paru-paru adalah...",
      options: [
        "Memompa darah",
        "Menyaring darah",
        "Pertukaran gas",
        "Menghasilkan empedu"
      ],
      answer: 2
    },
    {
      q: "Ginjal berfungsi terutama untuk...",
      options: [
        "Menyaring darah dan membentuk urine",
        "Memompa darah",
        "Menghasilkan udara",
        "Menghancurkan tulang"
      ],
      answer: 0
    },
    {
      q: "Vitamin yang banyak berperan dalam menjaga kesehatan mata adalah...",
      options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
      answer: 0
    },
    {
      q: "Jika seseorang kekurangan zat besi, salah satu akibatnya dapat berupa...",
      options: ["Anemia", "Rabun jauh", "Patah tulang", "Influenza"],
      answer: 0
    },
    {
      q: "Sistem yang mengatur dan mengoordinasikan aktivitas tubuh adalah...",
      options: [
        "Sistem saraf",
        "Sistem pencernaan",
        "Sistem rangka",
        "Sistem ekskresi"
      ],
      answer: 0
    },
    {
      q: "Lambung merupakan bagian dari sistem...",
      options: [
        "Pernapasan",
        "Pencernaan",
        "Peredaran darah",
        "Saraf"
      ],
      answer: 1
    },
    {
      q: "Trombosit memiliki peran penting dalam...",
      options: [
        "Pembekuan darah",
        "Pernapasan",
        "Pencernaan",
        "Penglihatan"
      ],
      answer: 0
    }
  ],

  "Fakultas Kedokteran Gigi": [
    {
      q: "Lapisan terluar gigi yang sangat keras disebut...",
      options: ["Dentin", "Email", "Pulpa", "Gusi"],
      answer: 1
    },
    {
      q: "Kebiasaan yang membantu menjaga kebersihan gigi adalah...",
      options: [
        "Menyikat gigi teratur",
        "Tidak minum air",
        "Sering makan makanan manis",
        "Tidak membersihkan mulut"
      ],
      answer: 0
    },
    {
      q: "Gigi digunakan terutama untuk...",
      options: ["Mencerna darah", "Mengunyah makanan", "Memompa darah", "Bernapas"],
      answer: 1
    },
    {
      q: "Makanan yang terlalu banyak mengandung gula dapat meningkatkan risiko...",
      options: ["Karies gigi", "Patah tulang", "Flu", "Rabun"],
      answer: 0
    },
    {
      q: "Bagian gigi yang mengandung saraf dan pembuluh darah adalah...",
      options: ["Email", "Pulpa", "Enamel luar", "Gusi luar"],
      answer: 1
    },
    {
      q: "Fungsi gigi seri adalah...",
      options: ["Mengoyak", "Memotong", "Menggiling", "Menghancurkan"],
      answer: 1
    },
    {
      q: "Gigi taring terutama berfungsi untuk...",
      options: ["Mengoyak makanan", "Mengunyah nasi", "Memotong rambut", "Bernapas"],
      answer: 0
    },
    {
      q: "Fluoride dalam pasta gigi membantu...",
      options: [
        "Memperkuat email gigi",
        "Mengubah warna rambut",
        "Mengurangi tinggi badan",
        "Menghasilkan darah"
      ],
      answer: 0
    },
    {
      q: "Gusi merupakan jaringan yang...",
      options: [
        "Mengelilingi dan mendukung gigi",
        "Menghasilkan udara",
        "Memompa darah",
        "Menyaring urine"
      ],
      answer: 0
    },
    {
      q: "Salah satu tanda umum masalah gigi adalah...",
      options: [
        "Nyeri gigi",
        "Rambut tumbuh",
        "Kuku panjang",
        "Mata berkedip"
      ],
      answer: 0
    },
    {
      q: "Membersihkan sela-sela gigi dapat dibantu dengan...",
      options: ["Benang gigi", "Kapur", "Pensil", "Kertas"],
      answer: 0
    },
    {
      q: "Pemeriksaan gigi secara berkala bertujuan untuk...",
      options: [
        "Mendeteksi masalah sejak dini",
        "Mengubah warna mata",
        "Menambah tinggi badan",
        "Menguatkan rambut"
      ],
      answer: 0
    }
  ],

  "Fakultas Hukum": [
    {
      q: "Aturan yang dibuat untuk mengatur kehidupan masyarakat disebut...",
      options: ["Hukum", "Hobi", "Cuaca", "Ekonomi"],
      answer: 0
    },
    {
      q: "Salah satu tujuan hukum adalah...",
      options: [
        "Menciptakan ketertiban",
        "Membuat kekacauan",
        "Menghilangkan aturan",
        "Mencegah keadilan"
      ],
      answer: 0
    },
    {
      q: "Sikap yang sesuai dengan prinsip keadilan adalah...",
      options: [
        "Memihak teman tanpa alasan",
        "Memperlakukan orang secara adil",
        "Mengabaikan aturan",
        "Menghukum tanpa bukti"
      ],
      answer: 1
    },
    {
      q: "Hak dan kewajiban sebaiknya...",
      options: [
        "Dilaksanakan secara seimbang",
        "Diabaikan",
        "Hanya hak yang dilakukan",
        "Hanya kewajiban orang lain"
      ],
      answer: 0
    },
    {
      q: "Konstitusi negara Indonesia adalah...",
      options: [
        "UUD 1945",
        "Kamus",
        "Peraturan sekolah",
        "Jadwal pelajaran"
      ],
      answer: 0
    },
    {
      q: "Orang yang memberikan kesaksian dalam suatu perkara disebut...",
      options: ["Saksi", "Wasit", "Pelatih", "Editor"],
      answer: 0
    },
    {
      q: "Dalam mengambil keputusan, bukti diperlukan agar keputusan...",
      options: [
        "Memiliki dasar",
        "Menjadi acak",
        "Tidak dapat diperiksa",
        "Tidak perlu alasan"
      ],
      answer: 0
    },
    {
      q: "Menghormati aturan sekolah merupakan contoh...",
      options: [
        "Tanggung jawab",
        "Pelanggaran",
        "Kecurangan",
        "Ketidakadilan"
      ],
      answer: 0
    },
    {
      q: "Persamaan kedudukan warga negara berarti...",
      options: [
        "Semua mendapat perlakuan yang adil menurut hukum",
        "Semua harus memiliki pekerjaan sama",
        "Semua harus tinggal di tempat sama",
        "Semua harus memiliki hobi sama"
      ],
      answer: 0
    },
    {
      q: "Musyawarah dilakukan untuk...",
      options: [
        "Mencapai kesepakatan",
        "Memaksakan kehendak",
        "Menghindari komunikasi",
        "Membuat konflik"
      ],
      answer: 0
    },
    {
      q: "Jika seseorang melanggar aturan, tindakan yang tepat adalah...",
      options: [
        "Mengikuti prosedur yang berlaku",
        "Membalas sendiri",
        "Menyebarkan rumor",
        "Menghapus bukti"
      ],
      answer: 0
    },
    {
      q: "Sikap jujur dalam proses hukum sangat penting karena...",
      options: [
        "Membantu menemukan fakta",
        "Menyembunyikan fakta",
        "Menghilangkan bukti",
        "Membuat proses tidak jelas"
      ],
      answer: 0
    }
  ],

  "Fakultas Ilmu Komputer": [
    {
      q: "Algoritma adalah...",
      options: [
        "Urutan langkah untuk menyelesaikan masalah",
        "Jenis komputer",
        "Nama aplikasi",
        "Jenis kabel"
      ],
      answer: 0
    },
    {
      q: "HTML digunakan terutama untuk...",
      options: [
        "Menyusun struktur halaman web",
        "Mengukur suhu",
        "Mengedit suara",
        "Mengisi baterai"
      ],
      answer: 0
    },
    {
      q: "CSS digunakan untuk...",
      options: [
        "Mengatur tampilan halaman web",
        "Menyimpan listrik",
        "Menghapus hardware",
        "Mengukur jaringan"
      ],
      answer: 0
    },
    {
      q: "JavaScript pada website dapat digunakan untuk...",
      options: [
        "Membuat interaksi",
        "Mencetak kertas secara otomatis",
        "Mengganti monitor",
        "Membersihkan keyboard"
      ],
      answer: 0
    },
    {
      q: "Data yang diproses komputer biasanya direpresentasikan dalam...",
      options: ["Biner", "Romawi", "Abjad saja", "Gambar saja"],
      answer: 0
    },
    {
      q: "CPU sering disebut sebagai...",
      options: [
        "Otak komputer",
        "Layar komputer",
        "Keyboard",
        "Printer"
      ],
      answer: 0
    },
    {
      q: "Perangkat yang digunakan untuk memasukkan teks adalah...",
      options: ["Keyboard", "Monitor", "Speaker", "Proyektor"],
      answer: 0
    },
    {
      q: "Internet memungkinkan komputer...",
      options: [
        "Berkomunikasi melalui jaringan",
        "Berubah menjadi televisi",
        "Tidak membutuhkan listrik",
        "Menghilangkan data"
      ],
      answer: 0
    },
    {
      q: "Password sebaiknya...",
      options: [
        "Sulit ditebak",
        "Menggunakan nama sendiri saja",
        "Diberikan kepada semua orang",
        "Sama dengan username"
      ],
      answer: 0
    },
    {
      q: "Bug dalam program berarti...",
      options: [
        "Kesalahan atau masalah dalam program",
        "Jenis keyboard",
        "Nama komputer",
        "Jenis monitor"
      ],
      answer: 0
    },
    {
      q: "Variabel digunakan untuk...",
      options: [
        "Menyimpan suatu nilai/data",
        "Membersihkan layar",
        "Menghubungkan listrik",
        "Mencetak dokumen"
      ],
      answer: 0
    },
    {
      q: "Pseudocode digunakan untuk...",
      options: [
        "Merancang langkah algoritma secara sederhana",
        "Menggambar poster",
        "Mengedit foto",
        "Menyimpan video"
      ],
      answer: 0
    }
  ],

  "Fakultas Seni dan Desain": [
    {
      q: "Warna primer terdiri dari...",
      options: [
        "Merah, kuning, biru",
        "Hijau, ungu, jingga",
        "Hitam, putih, abu",
        "Cokelat, pink, emas"
      ],
      answer: 0
    },
    {
      q: "Komposisi dalam desain berkaitan dengan...",
      options: [
        "Penataan elemen visual",
        "Kecepatan internet",
        "Ukuran hard disk",
        "Jenis prosesor"
      ],
      answer: 0
    },
    {
      q: "Garis dalam seni dapat digunakan untuk...",
      options: [
        "Membentuk arah dan karakter visual",
        "Mengisi baterai",
        "Menghitung suhu",
        "Menyimpan file"
      ],
      answer: 0
    },
    {
      q: "Kontras berarti...",
      options: [
        "Perbedaan yang terlihat antara elemen",
        "Semua warna harus sama",
        "Semua ukuran harus sama",
        "Tidak ada perbedaan"
      ],
      answer: 0
    },
    {
      q: "Tipografi berkaitan dengan...",
      options: [
        "Penggunaan dan pengaturan huruf",
        "Pembuatan mesin",
        "Pertanian",
        "Olahraga"
      ],
      answer: 0
    },
    {
      q: "Sketsa biasanya dibuat sebagai...",
      options: [
        "Gambaran awal sebuah karya",
        "Hasil akhir wajib",
        "File musik",
        "Dokumen hukum"
      ],
      answer: 0
    },
    {
      q: "Ruang dalam desain dapat memberikan kesan...",
      options: [
        "Jarak dan kedalaman",
        "Suara",
        "Suhu",
        "Kecepatan"
      ],
      answer: 0
    },
    {
      q: "Keseimbangan visual berarti...",
      options: [
        "Distribusi visual yang terasa stabil",
        "Semua objek harus identik",
        "Tidak boleh ada warna",
        "Tidak boleh ada gambar"
      ],
      answer: 0
    },
    {
      q: "Ilustrasi digunakan untuk...",
      options: [
        "Menyampaikan ide melalui gambar",
        "Menghitung listrik",
        "Mengukur tekanan",
        "Mengatur jaringan"
      ],
      answer: 0
    },
    {
      q: "Identitas visual sebuah organisasi dapat dibangun melalui...",
      options: [
        "Logo, warna, dan elemen visual konsisten",
        "Password",
        "Nomor telepon saja",
        "Ukuran ruangan"
      ],
      answer: 0
    },
    {
      q: "Tekstur dalam karya visual berkaitan dengan...",
      options: [
        "Kesan permukaan",
        "Jumlah halaman",
        "Kecepatan komputer",
        "Suara musik"
      ],
      answer: 0
    },
    {
      q: "Prinsip kesatuan dalam desain membuat elemen terasa...",
      options: [
        "Saling berhubungan",
        "Tidak berkaitan",
        "Acak sepenuhnya",
        "Terpisah tanpa tujuan"
      ],
      answer: 0
    }
  ]
};


/* =========================================================
   GENERATE GENERIC QUESTIONS
   UNTUK FAKULTAS LAIN
   ========================================================= */

function createGenericQuestions(facultyName) {

  const templates = [
    {
      q: `Konsep dasar yang paling berkaitan dengan bidang ${facultyName} adalah...`,
      options: [
        "Mempelajari prinsip bidang tersebut",
        "Mengabaikan seluruh teori",
        "Tidak menggunakan pengetahuan",
        "Menghindari praktik"
      ],
      answer: 0
    },
    {
      q: `Sikap yang paling penting ketika mempelajari ${facultyName} adalah...`,
      options: [
        "Teliti dan mau belajar",
        "Tidak mau mencoba",
        "Mengabaikan kesalahan",
        "Menolak semua informasi"
      ],
      answer: 0
    },
    {
      q: `Dalam mempelajari ${facultyName}, kemampuan berpikir kritis berguna untuk...`,
      options: [
        "Menganalisis informasi",
        "Menghafal tanpa memahami",
        "Menghindari masalah",
        "Menghapus data"
      ],
      answer: 0
    },
    {
      q: `Salah satu tujuan mempelajari ${facultyName} adalah...`,
      options: [
        "Memahami konsep dan penerapannya",
        "Tidak melakukan apa pun",
        "Menghindari pembelajaran",
        "Menghilangkan praktik"
      ],
      answer: 0
    },
    {
      q: `Ketelitian diperlukan dalam ${facultyName} karena...`,
      options: [
        "Kesalahan dapat memengaruhi hasil",
        "Kesalahan selalu tidak penting",
        "Semua jawaban pasti sama",
        "Tidak ada proses yang perlu diperiksa"
      ],
      answer: 0
    },
    {
      q: `Ketika menemukan masalah dalam bidang ${facultyName}, langkah yang baik adalah...`,
      options: [
        "Menganalisis masalah sebelum menentukan solusi",
        "Langsung menyerah",
        "Mengabaikan masalah",
        "Menebak tanpa dasar"
      ],
      answer: 0
    },
    {
      q: `Pengetahuan teori dalam ${facultyName} sebaiknya...`,
      options: [
        "Dipahami dan dapat diterapkan",
        "Dihafalkan tanpa memahami",
        "Dihindari",
        "Tidak pernah digunakan"
      ],
      answer: 0
    },
    {
      q: `Kerja sama dalam mempelajari ${facultyName} dapat membantu karena...`,
      options: [
        "Ide dan sudut pandang dapat dibandingkan",
        "Semua orang harus memiliki jawaban sama",
        "Tidak perlu komunikasi",
        "Masalah menjadi lebih sulit"
      ],
      answer: 0
    },
    {
      q: `Evaluasi hasil pekerjaan penting dalam ${facultyName} untuk...`,
      options: [
        "Mengetahui kekurangan dan memperbaikinya",
        "Menghapus hasil",
        "Menghindari pembelajaran",
        "Menghentikan proses"
      ],
      answer: 0
    },
    {
      q: `Contoh penerapan pengetahuan ${facultyName} dalam kehidupan adalah...`,
      options: [
        "Menggunakan konsep bidang tersebut untuk menyelesaikan masalah",
        "Mengabaikan konsep",
        "Tidak menggunakan pengetahuan",
        "Menghindari semua persoalan"
      ],
      answer: 0
    },
    {
      q: `Informasi yang digunakan dalam ${facultyName} sebaiknya...`,
      options: [
        "Diperiksa kebenarannya",
        "Selalu dipercaya tanpa diperiksa",
        "Diubah sembarangan",
        "Tidak perlu dipahami"
      ],
      answer: 0
    },
    {
      q: `Kemampuan memecahkan masalah dalam ${facultyName} membutuhkan...`,
      options: [
        "Analisis dan penalaran",
        "Tebakan acak",
        "Ketidaktelitian",
        "Menghindari masalah"
      ],
      answer: 0
    }
  ];

  return templates;
}

faculties.forEach(faculty => {
  if (!examBank[faculty.name]) {
    examBank[faculty.name] = createGenericQuestions(faculty.name);
  }
});


/* =========================================================
   STAGE 2 QUESTIONS
   ========================================================= */

const stageTwoQuestions = [
  {
    q: "Sebuah pola bilangan memiliki aturan tertentu. Jika 2, 6, 12, 20, 30, ... maka suku berikutnya adalah...",
    options: ["36", "40", "42", "44"],
    answer: 2
  },
  {
    q: "Jika semua A adalah B dan sebagian B adalah C, pernyataan yang pasti benar adalah...",
    options: [
      "Semua A pasti C",
      "Sebagian A pasti C",
      "Semua A adalah B",
      "Tidak ada A yang B"
    ],
    answer: 2
  },
  {
    q: "Sebuah persegi panjang memiliki luas 96 cm². Jika panjangnya 4 cm lebih besar dari lebarnya, maka ukuran lebarnya adalah...",
    options: ["6 cm", "8 cm", "10 cm", "12 cm"],
    answer: 0
  }
];


/* =========================================================
   SAMPLE STUDENTS
   ========================================================= */

const sampleNames = [
  "Aditya Pratama",
  "Alya Maharani",
  "Bagas Ramadhan",
  "Citra Lestari",
  "Dimas Arya",
  "Fajar Nugraha",
  "Galih Saputra",
  "Hana Putri",
  "Irfan Maulana",
  "Jasmine Aurelia",
  "Kevin Wijaya",
  "Larasati Putri",
  "Maya Anggraini",
  "Naufal Rizky",
  "Oki Firmansyah",
  "Putri Amelia",
  "Raka Pradana",
  "Salsa Kirana",
  "Tio Ramadhan",
  "Vania Maharani"
];

const sampleFaculties = faculties.map(f => f.name);

function randomScore() {
  return Number((89 + Math.random() * 9.8).toFixed(2));
}

sampleNames.forEach((name, index) => {

  UM.students.push({
    name,
    faculty: sampleFaculties[index % sampleFaculties.length],
    score: randomScore()
  });

});


/* =========================================================
   LEADERBOARD
   ========================================================= */

function createLeaderboard() {

  UM.leaderboard = UM.students
    .map(student => ({ ...student }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  renderLeaderboard();
}


function renderLeaderboard() {

  const table = document.querySelector(".leaderboard-table");

  if (!table) return;

  const rows = UM.leaderboard.map((student, index) => {

    return `
      <div class="leaderboard-row">
        <span class="rank">#${index + 1}</span>
        <strong>${escapeHTML(student.name)}</strong>
        <span>${escapeHTML(student.faculty.replace("Fakultas ", ""))}</span>
        <span class="score">${student.score.toFixed(2)}</span>
      </div>
    `;

  }).join("");

  table.innerHTML = `
    <div class="leaderboard-head">
      <span>RANK</span>
      <span>NAMA</span>
      <span>BIDANG STUDI</span>
      <span>NILAI</span>
    </div>

    ${rows}
  `;
}


/* =========================================================
   LIVE LEADERBOARD
   BERUBAH SETIAP 10 DETIK
   ========================================================= */

function updateLeaderboardLive() {

  UM.students.forEach(student => {

    const movement = (Math.random() - 0.5) * 0.5;

    student.score = Math.max(
      89,
      Math.min(99.99, Number((student.score + movement).toFixed(2)))
    );

  });

  createLeaderboard();
}

setInterval(updateLeaderboardLive, 10000);


/* =========================================================
   STUDENT DIRECTORY
   ========================================================= */

function generateStudentsIfNeeded() {

  const target = 50000;

  let counter = UM.students.length;

  const first = [
    "Ahmad",
    "Adit",
    "Alya",
    "Anisa",
    "Bagas",
    "Bima",
    "Citra",
    "Daffa",
    "Dimas",
    "Fajar",
    "Galih",
    "Hana",
    "Irfan",
    "Jasmine",
    "Kevin",
    "Laras",
    "Maya",
    "Nadia",
    "Naufal",
    "Putri",
    "Raka",
    "Salsa",
    "Tio",
    "Vania",
    "Zahra"
  ];

  const last = [
    "Pratama",
    "Saputra",
    "Wijaya",
    "Nugraha",
    "Ramadhan",
    "Permata",
    "Lestari",
    "Maulana",
    "Firmansyah",
    "Kurniawan"
  ];

  while (counter < target) {

    const generatedName =
      `${first[counter % first.length]} ${last[counter % last.length]} ${String(counter + 1).padStart(5, "0")}`;

    UM.students.push({
      name: generatedName,
      faculty: sampleFaculties[counter % sampleFaculties.length],
      score: Number((89 + Math.random() * 10).toFixed(2))
    });

    counter++;

  }
}


/* =========================================================
   DIRECTORY RENDERING
   ========================================================= */

function renderStudentDirectory(query = "") {

  const container = document.querySelector(".student-list");

  if (!container) return;

  const normalized = query.toLowerCase().trim();

  const filtered = UM.students
    .filter(student =>
      student.name.toLowerCase().includes(normalized) ||
      student.faculty.toLowerCase().includes(normalized)
    )
    .sort((a, b) =>
      a.name.localeCompare(b.name)
    )
    .slice(0, 100);

  container.innerHTML = filtered.map(student => {

    const initials = student.name
      .split(" ")
      .slice(0, 2)
      .map(x => x[0])
      .join("");

    return `
      <div class="student-card">
        <div class="student-avatar">${escapeHTML(initials)}</div>

        <div>
          <strong>${escapeHTML(student.name)}</strong>
          <span>${escapeHTML(student.faculty)}</span>
        </div>

        <div class="student-score">
          ${student.score.toFixed(2)}
        </div>
      </div>
    `;

  }).join("");

  if (!filtered.length) {
    container.innerHTML = `
      <div class="result-placeholder">
        mahasiswa tidak ditemukan.
      </div>
    `;
  }
}


/* =========================================================
   SEARCH DIRECTORY
   ========================================================= */

function setupStudentSearch() {

  const input = document.querySelector(".directory-search input");

  if (!input) return;

  input.addEventListener("input", () => {
    renderStudentDirectory(input.value);
  });

}


/* =========================================================
   RECOMMENDATION SYSTEM
   ========================================================= */

function getRecommendation(text) {

  const input = text.toLowerCase();

  let bestFaculty = faculties[0];
  let bestScore = 0;

  faculties.forEach(faculty => {

    let score = 0;

    faculty.keywords.forEach(keyword => {

      if (input.includes(keyword)) {
        score++;
      }

    });

    if (score > bestScore) {
      bestScore = score;
      bestFaculty = faculty;
    }

  });

  const percentage = Math.min(
    99,
    70 + bestScore * 8
  );

  return {
    faculty: bestFaculty,
    percentage
  };

}


function setupRecommendation() {

  const form = document.querySelector("#recommendationForm");

  if (!form) return;

  form.addEventListener("submit", event => {

    event.preventDefault();

    const input =
      form.querySelector("textarea") ||
      form.querySelector("input");

    if (!input || !input.value.trim()) {
      showToast(
        "minat belum diisi",
        "ceritakan kemampuan atau bidang yang lu suka dulu."
      );
      return;
    }

    const result = getRecommendation(input.value);

    const output =
      document.querySelector(".recommendation-result");

    if (!output) return;

    output.classList.add("active");

    output.innerHTML = `
      <div>
        <small>REKOMENDASI UNIVERSITY OF MOWTOWN</small>

        <h3>${escapeHTML(result.faculty.name)}</h3>

        <span class="match-score">
          kecocokan ${result.percentage}%
        </span>

        <p>
          rekomendasi dibuat berdasarkan minat,
          kemampuan, dan kata kunci yang lu masukkan.
        </p>
      </div>
    `;

  });

}


/* =========================================================
   PMB CODE
   ========================================================= */

function generateCode(prefix, length = 7) {

  const chars =
    "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  let result = prefix + "-";

  for (let i = 0; i < length; i++) {
    result += chars[
      Math.floor(Math.random() * chars.length)
    ];
  }

  return result;
}


function generatePMBCode() {
  UM.pmbCode = generateCode("UM26", 8);
  return UM.pmbCode;
}


function generateSecretCode() {
  UM.secretCode = generateCode("UMS", 10);
  return UM.secretCode;
}


/* =========================================================
   REGISTRATION
   ========================================================= */

function setupRegistration() {

  const form = document.querySelector("#registrationForm");

  if (!form) return;

  form.addEventListener("submit", event => {

    event.preventDefault();

    const name =
      form.querySelector('[name="name"]')?.value.trim() ||
      form.querySelector('input[type="text"]')?.value.trim();

    const phone =
      form.querySelector('[name="phone"]')?.value.trim() ||
      form.querySelector('input[type="tel"]')?.value.trim();

    const faculty =
      form.querySelector('[name="faculty"]')?.value ||
      form.querySelector("select")?.value;

    if (!name) {
      showToast("data belum lengkap", "nama peserta wajib diisi.");
      return;
    }

    if (
      phone &&
      !/^08\d{8,12}$/.test(phone)
    ) {
      showToast(
        "nomor telepon tidak valid",
        "gunakan format 08xxxxxxxxxx."
      );
      return;
    }

    UM.currentStudent = {
      name,
      phone: phone || "080000000000",
      faculty:
        faculty && faculty !== "Pilih Fakultas"
          ? faculty
          : faculties[0].name,

      average: null
    };

    const pmb = generatePMBCode();

    showToast(
      "pendaftaran berhasil",
      `kode PMB lu: ${pmb}`
    );

    updateRegistrationUI();

  });

}


function updateRegistrationUI() {

  const output = document.querySelector("#registrationResult");

  if (!output || !UM.currentStudent) return;

  output.innerHTML = `
    <div class="result-card">
      <div class="result-icon">✓</div>

      <small>PENDAFTARAN BERHASIL</small>

      <h2>${escapeHTML(UM.currentStudent.name)}</h2>

      <p>
        bidang studi:
        ${escapeHTML(UM.currentStudent.faculty)}
      </p>

      <div class="score-display">
        <strong>${UM.pmbCode}</strong>
        <span>KODE PMB</span>
      </div>

      <button
        class="button button-primary"
        onclick="startExamFromPMB()"
      >
        BUAT KARTU UJIAN
      </button>
    </div>
  `;

}


/* =========================================================
   EXAM CARD
   ========================================================= */

function startExamFromPMB() {

  if (!UM.currentStudent) {
    showToast(
      "belum terdaftar",
      "isi pendaftaran PMB terlebih dahulu."
    );
    return;
  }

  createExamCard();

}


function createExamCard() {

  const faculty = UM.currentStudent.faculty;

  const examNumber =
    `UM-26-${Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase()}`;

  UM.currentExam = {
    number: examNumber,
    faculty,
    questions: examBank[faculty],
    score: null
  };

  const output =
    document.querySelector("#examCardOutput");

  if (output) {

    output.innerHTML = `
      <div class="exam-card">

        <div class="exam-card-top">

          <div>
            <small>KARTU UJIAN</small>
            <strong>${examNumber}</strong>
          </div>

          <div class="exam-status">
            TAHAP 1
          </div>

        </div>

        <div class="exam-card-body">

          <div>
            <span>NAMA</span>
            <strong>${escapeHTML(UM.currentStudent.name)}</strong>
          </div>

          <div>
            <span>BIDANG STUDI</span>
            <strong>${escapeHTML(faculty)}</strong>
          </div>

          <div>
            <span>JUMLAH SOAL</span>
            <strong>${UM.currentExam.questions.length}</strong>
          </div>

        </div>

        <button
          class="button"
          onclick="startStageOneExam()"
        >
          MULAI UJIAN TAHAP 1
        </button>

      </div>
    `;

  }

  showToast(
    "kartu ujian dibuat",
    "sekarang lu bisa langsung masuk ujian tahap 1."
  );

}


/* =========================================================
   STAGE 1 EXAM
   ========================================================= */

function startStageOneExam() {

  if (!UM.currentExam) {
    showToast(
      "kartu ujian belum tersedia",
      "buat kartu ujian terlebih dahulu."
    );
    return;
  }

  UM.currentQuestion = 0;
  UM.examAnswers = [];

  const questions = UM.currentExam.questions;

  UM.examSeconds = Math.max(
    180,
    questions.length * 20
  );

  openExamModal();

  renderExamQuestion();

  startExamTimer();

}


function openExamModal() {

  const modal = document.querySelector("#examModal");

  if (!modal) return;

  modal.classList.add("active");

  document.body.classList.add("menu-open");

}


function closeExamModal() {

  const modal = document.querySelector("#examModal");

  if (!modal) return;

  modal.classList.remove("active");

  document.body.classList.remove("menu-open");

  clearInterval(UM.examTimer);

}


/* =========================================================
   RENDER QUESTION
   ========================================================= */

function renderExamQuestion() {

  const modal =
    document.querySelector("#examModal");

  if (!modal || !UM.currentExam) return;

  const question =
    UM.currentExam.questions[UM.currentQuestion];

  const total =
    UM.currentExam.questions.length;

  modal.innerHTML = `
    <div class="exam-window">

      <div class="exam-window-header">

        <div>
          <small>UNIVERSITY OF MOWTOWN</small>

          <h3>
            UJIAN TAHAP 1
          </h3>
        </div>

        <div class="exam-timer">
          <span>SISA WAKTU</span>
          <strong id="examTimer">
            ${formatTime(UM.examSeconds)}
          </strong>
        </div>

      </div>

      <div class="progress-container">

        <div class="progress-bar">
          <span
            style="
              width:${((UM.currentQuestion + 1) / total) * 100}%
            "
          ></span>
        </div>

        <small>
          soal ${UM.currentQuestion + 1}
          dari ${total}
        </small>

      </div>

      <div class="question-card">

        <span class="question-number">
          QUESTION ${String(
            UM.currentQuestion + 1
          ).padStart(2, "0")}
        </span>

        <div class="question-text">
          ${escapeHTML(question.q)}
        </div>

        <div class="answer-list">

          ${question.options.map((option, index) => {

            const selected =
              UM.examAnswers[UM.currentQuestion] === index;

            return `
              <label
                class="
                  answer-option
                  ${selected ? "selected" : ""}
                "
              >

                <input
                  type="radio"
                  name="answer"
                  value="${index}"
                  ${selected ? "checked" : ""}
                  onchange="selectAnswer(${index})"
                >

                <span>
                  ${escapeHTML(option)}
                </span>

              </label>
            `;

          }).join("")}

        </div>

      </div>

      <div class="exam-actions">

        <button
          class="button button-secondary"
          onclick="previousQuestion()"
          ${UM.currentQuestion === 0 ? "disabled" : ""}
        >
          SEBELUMNYA
        </button>

        ${
          UM.currentQuestion === total - 1
            ? `
              <button
                class="button button-primary"
                onclick="finishStageOne()"
              >
                SELESAI
              </button>
            `
            : `
              <button
                class="button button-primary"
                onclick="nextQuestion()"
              >
                BERIKUTNYA
              </button>
            `
        }

      </div>

    </div>
  `;

}


/* =========================================================
   ANSWERS
   ========================================================= */

function selectAnswer(index) {

  UM.examAnswers[
    UM.currentQuestion
  ] = Number(index);

  renderExamQuestion();

}


function nextQuestion() {

  const currentAnswer =
    UM.examAnswers[UM.currentQuestion];

  if (
    currentAnswer === undefined
  ) {
    showToast(
      "jawaban belum dipilih",
      "pilih salah satu jawaban terlebih dahulu."
    );
    return;
  }

  if (
    UM.currentQuestion <
    UM.currentExam.questions.length - 1
  ) {

    UM.currentQuestion++;

    renderExamQuestion();

  }

}


function previousQuestion() {

  if (UM.currentQuestion > 0) {

    UM.currentQuestion--;

    renderExamQuestion();

  }

}


/* =========================================================
   TIMER
   ========================================================= */

function startExamTimer() {

  clearInterval(UM.examTimer);

  UM.examTimer = setInterval(() => {

    UM.examSeconds--;

    const timer =
      document.querySelector("#examTimer");

    if (timer) {
      timer.textContent =
        formatTime(UM.examSeconds);
    }

    if (UM.examSeconds <= 0) {

      clearInterval(UM.examTimer);

      finishStageOne(true);

    }

  }, 1000);

}


function formatTime(seconds) {

  const minutes =
    Math.floor(seconds / 60);

  const remaining =
    seconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(
    remaining
  ).padStart(2, "0")}`;

}


/* =========================================================
   STAGE 1 SCORING
   ========================================================= */

function finishStageOne(auto = false) {

  clearInterval(UM.examTimer);

  let correct = 0;

  UM.currentExam.questions.forEach(
    (question, index) => {

      if (
        UM.examAnswers[index] ===
        question.answer
      ) {
        correct++;
      }

    }
  );

  const total =
    UM.currentExam.questions.length;

  const score =
    Number(((correct / total) * 100).toFixed(2));

  UM.currentExam.score = score;

  UM.currentStudent.average = score;

  closeExamModal();

  showStageOneResult(
    score,
    correct,
    total,
    auto
  );

}


function showStageOneResult(
  score,
  correct,
  total,
  auto
) {

  const passed = score >= 89.77;

  UM.stageOnePassed = passed;

  const section =
    document.querySelector("#resultOutput");

  if (!section) return;

  if (passed) {

    generateSecretCode();

    section.innerHTML = `
      <div class="result-card">

        <div class="result-icon">
          ✓
        </div>

        <small>
          UJIAN TAHAP 1 ${auto ? "· WAKTU HABIS" : ""}
        </small>

        <h2>
          SELAMAT, LU LULUS
        </h2>

        <div class="score-display">
          <strong>${score.toFixed(2)}</strong>
          <span>NILAI RATA-RATA UJIAN</span>
        </div>

        <p>
          benar ${correct} dari ${total} soal.
          batas kelulusan tahap 1 adalah
          <strong>89.77</strong>.
        </p>

        <div class="result-actions">

          <button
            class="button button-primary"
            onclick="showStageTwoAccess()"
          >
            ISI FORUM KELULUSAN
          </button>

        </div>

      </div>
    `;

    addStudentToLeaderboard(
      UM.currentStudent.name,
      UM.currentStudent.faculty,
      score
    );

  } else {

    section.innerHTML = `
      <div class="result-card">

        <div class="result-icon">
          ×
        </div>

        <small>
          HASIL UJIAN TAHAP 1
        </small>

        <h2>
          BELUM LULUS
        </h2>

        <div class="score-display">
          <strong>${score.toFixed(2)}</strong>
          <span>NILAI RATA-RATA UJIAN</span>
        </div>

        <p>
          nilai minimal untuk lolos tahap 1
          adalah <strong>89.77</strong>.
        </p>

      </div>
    `;

  }

}


/* =========================================================
   LEADERBOARD STUDENT
   ========================================================= */

function addStudentToLeaderboard(
  name,
  faculty,
  score
) {

  UM.students.push({
    name,
    faculty,
    score
  });

  createLeaderboard();

}


/* =========================================================
   STAGE 2 ACCESS / SECRET CODE
   ========================================================= */

function showStageTwoAccess() {

  const output =
    document.querySelector("#stageTwoOutput");

  if (!output) return;

  output.innerHTML = `
    <div class="stage-two-card">

      <div>

        <small>
          FORUM TANDA LULUS TAHAP 1
        </small>

        <h2>
          AKSES <em>TAHAP 2</em>
        </h2>

        <p>
          kode rahasia ini hanya dibuat satu kali
          untuk peserta yang berhasil melewati tahap 1.
        </p>

        <div class="stage-two-info">

          <div>
            <strong>1</strong>
            <span>KODE / PESERTA</span>
          </div>

          <div>
            <strong>3</strong>
            <span>SOAL SULIT</span>
          </div>

          <div>
            <strong>30</strong>
            <span>DETIK</span>
          </div>

        </div>

        <form
          id="stageTwoForm"
          onsubmit="verifyStageTwoCode(event)"
        >

          <input
            id="secretCodeInput"
            placeholder="masukkan kode rahasia"
            required
          >

          <button
            class="button"
            type="submit"
          >
            VERIFIKASI
          </button>

        </form>

      </div>

    </div>
  `;

  output.scrollIntoView({
    behavior: "smooth"
  });

}


/* =========================================================
   VERIFY STAGE 2
   ========================================================= */

function verifyStageTwoCode(event) {

  event.preventDefault();

  const input =
    document.querySelector(
      "#secretCodeInput"
    );

  if (!input) return;

  if (
    input.value.trim().toUpperCase() !==
    UM.secretCode
  ) {

    showToast(
      "kode salah",
      "masukkan kode rahasia yang diberikan setelah lulus tahap 1."
    );

    return;

  }

  startStageTwoExam();

}


/* =========================================================
   STAGE 2 EXAM
   ========================================================= */

function startStageTwoExam() {

  UM.currentQuestion = 0;
  UM.examAnswers = [];

  UM.examSeconds = 30;

  const modal =
    document.querySelector("#examModal");

  if (!modal) return;

  modal.classList.add("active");

  document.body.classList.add("menu-open");

  renderStageTwoQuestion();

  clearInterval(UM.examTimer);

  UM.examTimer = setInterval(() => {

    UM.examSeconds--;

    const timer =
      document.querySelector("#examTimer");

    if (timer) {
      timer.textContent =
        formatTime(UM.examSeconds);
    }

    if (UM.examSeconds <= 0) {

      clearInterval(UM.examTimer);

      finishStageTwo();

    }

  }, 1000);

}


/* =========================================================
   STAGE 2 RENDER
   ========================================================= */

function renderStageTwoQuestion() {

  const modal =
    document.querySelector("#examModal");

  const question =
    stageTwoQuestions[UM.currentQuestion];

  modal.innerHTML = `
    <div class="exam-window">

      <div class="exam-window-header">

        <div>
          <small>
            TAHAP 2 · UJIAN KHUSUS
          </small>

          <h3>
            SOAL PENENTUAN
          </h3>
        </div>

        <div class="exam-timer">

          <span>
            WAKTU
          </span>

          <strong id="examTimer">
            ${formatTime(UM.examSeconds)}
          </strong>

        </div>

      </div>

      <div class="progress-container">

        <div class="progress-bar">
          <span
            style="
              width:${((UM.currentQuestion + 1) / 3) * 100}%
            "
          ></span>
        </div>

        <small>
          soal ${UM.currentQuestion + 1} dari 3
        </small>

      </div>

      <div class="question-card">

        <span class="question-number">
          TAHAP 2
        </span>

        <div class="question-text">
          ${escapeHTML(question.q)}
        </div>

        <div class="answer-list">

          ${question.options.map(
            (option, index) => {

              const selected =
                UM.examAnswers[
                  UM.currentQuestion
                ] === index;

              return `
                <label
                  class="
                    answer-option
                    ${selected ? "selected" : ""}
                  "
                >

                  <input
                    type="radio"
                    name="stageTwoAnswer"
                    value="${index}"
                    ${selected ? "checked" : ""}
                    onchange="selectStageTwoAnswer(${index})"
                  >

                  <span>
                    ${escapeHTML(option)}
                  </span>

                </label>
              `;

            }
          ).join("")}

        </div>

      </div>

      <div class="exam-actions">

        ${
          UM.currentQuestion ===
          stageTwoQuestions.length - 1

            ? `
              <button
                class="button button-primary"
                onclick="finishStageTwo()"
              >
                KIRIM JAWABAN
              </button>
            `

            : `
              <button
                class="button button-primary"
                onclick="nextStageTwoQuestion()"
              >
                LANJUT
              </button>
            `
        }

      </div>

    </div>
  `;

}


function selectStageTwoAnswer(index) {

  UM.examAnswers[
    UM.currentQuestion
  ] = Number(index);

  renderStageTwoQuestion();

}


function nextStageTwoQuestion() {

  if (
    UM.examAnswers[UM.currentQuestion] ===
    undefined
  ) {

    showToast(
      "jawaban belum dipilih",
      "pilih jawaban dulu."
    );

    return;
  }

  if (
    UM.currentQuestion <
    stageTwoQuestions.length - 1
  ) {

    UM.currentQuestion++;

    renderStageTwoQuestion();

  }

}


/* =========================================================
   STAGE 2 SCORING
   ========================================================= */

function finishStageTwo() {

  clearInterval(UM.examTimer);

  let correct = 0;

  stageTwoQuestions.forEach(
    (question, index) => {

      if (
        UM.examAnswers[index] ===
        question.answer
      ) {
        correct++;
      }

    }
  );

  const score =
    Number(
      ((correct / stageTwoQuestions.length) * 100)
        .toFixed(2)
    );

  const passed = score >= 66.67;

  UM.stageTwoPassed = passed;

  closeExamModal();

  const output =
    document.querySelector("#stageTwoOutput");

  if (!output) return;

  if (passed) {

    output.innerHTML = `
      <div class="result-card">

        <div class="result-icon">
          ✓
        </div>

        <small>
          UJIAN TAHAP 2
        </small>

        <h2>
          TAHAP 2 LULUS
        </h2>

        <div class="score-display">
          <strong>${score.toFixed(2)}</strong>
          <span>NILAI</span>
        </div>

        <p>
          selamat. lu sekarang dapat melakukan
          daftar ulang sebagai mahasiswa baru
          University of Mowtown.
        </p>

        <div class="result-actions">

          <button
            class="button button-primary"
            onclick="enrollAsStudent()"
          >
            DAFTAR ULANG MAHASISWA
          </button>

        </div>

      </div>
    `;

  } else {

    output.innerHTML = `
      <div class="result-card">

        <div class="result-icon">
          ×
        </div>

        <small>
          UJIAN TAHAP 2
        </small>

        <h2>
          BELUM LULUS
        </h2>

        <div class="score-display">
          <strong>${score.toFixed(2)}</strong>
          <span>NILAI</span>
        </div>

        <p>
          tahap 2 belum berhasil diselesaikan.
        </p>

      </div>
    `;

  }

}


/* =========================================================
   ENROLLMENT
   ========================================================= */

function enrollAsStudent() {

  if (!UM.stageTwoPassed) {
    showToast(
      "belum bisa daftar ulang",
      "lulus tahap 2 terlebih dahulu."
    );
    return;
  }

  const studentNumber =
    `UM-${new Date().getFullYear()}-${String(
      Math.floor(Math.random() * 900000) + 100000
    )}`;

  showToast(
    "SELAMAT, MAHASISWA BARU",
    `nomor mahasiswa lu: ${studentNumber}`
  );

  setTimeout(() => {

    const result =
      document.querySelector("#resultOutput");

    if (result) {

      result.innerHTML = `
        <div class="result-card">

          <div class="result-icon">
            UM
          </div>

          <small>
            RESMI TERDAFTAR
          </small>

          <h2>
            ${escapeHTML(UM.currentStudent.name)}
          </h2>

          <div class="score-display">
            <strong>
              ${studentNumber}
            </strong>

            <span>
              NOMOR MAHASISWA
            </span>
          </div>

          <p>
            bidang studi:
            ${escapeHTML(UM.currentStudent.faculty)}
          </p>

          <div class="result-actions">

            <button
              class="button button-primary"
              onclick="generateCertificate()"
            >
              LIHAT SERTIFIKAT
            </button>

          </div>

        </div>
      `;

    }

  }, 500);

}


/* =========================================================
   CERTIFICATE
   ========================================================= */

function generateCertificate() {

  if (!UM.currentStudent) return;

  const output =
    document.querySelector("#resultOutput");

  if (!output) return;

  output.innerHTML = `
    <div
      class="result-card"
      style="
        border:2px solid var(--gold);
        background:
          radial-gradient(
            circle,
            rgba(168,137,82,0.13),
            transparent 55%
          );
      "
    >

      <div class="result-icon">
        UM
      </div>

      <small>
        UNIVERSITY OF MOWTOWN
      </small>

      <h2>
        CERTIFICATE OF ACHIEVEMENT
      </h2>

      <p>
        diberikan kepada
      </p>

      <h2>
        ${escapeHTML(UM.currentStudent.name)}
      </h2>

      <p>
        atas keberhasilan menyelesaikan
        rangkaian seleksi akademik
        University of Mowtown.
      </p>

      <div class="score-display">
        <strong>
          ${UM.currentStudent.average?.toFixed(2) || "-"}
        </strong>

        <span>
          RATA-RATA NILAI TAHAP 1
        </span>
      </div>

      <p>
        ${new Date().toLocaleDateString("id-ID")}
      </p>

    </div>
  `;

}


/* =========================================================
   BUS ROUTES
   ========================================================= */

const busRoutes = [
  "Apollo",
  "Athena",
  "Zeus",
  "Hera",
  "Hermes",
  "Ares",
  "Artemis",
  "Poseidon",
  "Demeter",
  "Hestia",
  "Dionysus",
  "Hephaestus",
  "Persephone",
  "Nike",
  "Iris",
  "Helios",
  "Selene",
  "Gaia",
  "Eros",
  "Nemesis",
  "Themis",
  "Hyperion",
  "Atlas",
  "Cronus",
  "Rhea",
  "Triton",
  "Pan",
  "Morpheus",
  "Thanatos",
  "Eos"
];


/* =========================================================
   INITIAL BUS BOOKINGS
   ========================================================= */

function initializeBusBookings() {

  busRoutes.forEach(route => {

    UM.busBookings[route] = {};

    for (let seat = 1; seat <= 40; seat++) {

      if (Math.random() < 0.35) {

        UM.busBookings[route][seat] = {
          status: "booked",
          type: "regular"
        };

      }

    }

    // kursi disabilitas
    [7, 8].forEach(seat => {

      UM.busBookings[route][seat] = {
        status:
          Math.random() < 0.5
            ? "booked"
            : "available",
        type: "disabled"
      };

    });

  });

}


/* =========================================================
   BUS ROUTE UI
   ========================================================= */

function setupBusRoutes() {

  const container =
    document.querySelector(".bus-route-grid");

  if (!container) return;

  container.innerHTML =
    busRoutes.map((route, index) => {

      return `
        <div
          class="route-card"
          onclick="selectBusRoute('${route}')"
        >

          <small>
            ROUTE ${String(index + 1).padStart(2, "0")}
          </small>

          <h3>
            ${route}
          </h3>

          <p>
            UNIVERSITY OF MOWTOWN
          </p>

        </div>
      `;

    }).join("");

}


function selectBusRoute(route) {

  UM.selectedRoute = route;

  document
    .querySelectorAll(".route-card")
    .forEach(card => {

      card.classList.toggle(
        "active",
        card.querySelector("h3")?.textContent.trim() === route
      );

    });

  renderSeats();

  showToast(
    "rute dipilih",
    `rute ${route} siap untuk pemilihan kursi.`
  );

}


/* =========================================================
   BUS TYPE
   ========================================================= */

function setupBusTypeButtons() {

  document
    .querySelectorAll(".bus-type")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(".bus-type")
            .forEach(btn =>
              btn.classList.remove("active")
            );

          button.classList.add("active");

          UM.selectedBusType =
            button.dataset.type ||
            button.textContent
              .trim()
              .toLowerCase();

          renderSeats();

        }
      );

    });

}


/* =========================================================
   SEAT RENDERING
   ========================================================= */

function renderSeats() {

  const grid =
    document.querySelector(".seat-grid");

  if (!grid || !UM.selectedRoute) return;

  const route =
    UM.busBookings[UM.selectedRoute];

  let html = "";

  for (let seat = 1; seat <= 40; seat++) {

    const data = route[seat];

    const classes = ["seat"];

    let disabled = false;

    if (data?.status === "booked") {
      classes.push("booked");
      disabled = true;
    }

    if (data?.type === "disabled") {
      classes.push("disabled");
      disabled = true;
    }

    if (
      data?.type === "women" ||
      UM.selectedBusType === "women"
    ) {
      classes.push("women-seat");
    }

    html += `
      <button
        class="${classes.join(" ")}"
        ${disabled ? "disabled" : ""}
        onclick="selectSeat(${seat})"
      >
        ${seat}
      </button>
    `;

  }

  grid.innerHTML = html;

  updateBusAvailability();

}


/* =========================================================
   SELECT SEAT
   ========================================================= */

function selectSeat(seat) {

  if (!UM.selectedRoute) {

    showToast(
      "pilih rute dulu",
      "pilih salah satu rute bus."
    );

    return;

  }

  const route =
    UM.busBookings[UM.selectedRoute];

  if (route[seat]?.status === "booked") {

    showToast(
      "kursi sudah penuh",
      "kursi tersebut sudah dipesan peserta lain."
    );

    return;

  }

  if (route[seat]?.type === "disabled") {

    showToast(
      "kursi khusus disabilitas",
      "kursi ini diperuntukkan bagi penumpang disabilitas."
    );

    return;

  }

  UM.selectedSeat = seat;

  document
    .querySelectorAll(".seat")
    .forEach(button => {

      button.classList.toggle(
        "selected",
        Number(button.textContent) === seat
      );

    });

}


/* =========================================================
   BOOK BUS
   ========================================================= */

function bookBus() {

  if (!UM.currentStudent) {

    showToast(
      "belum login sebagai mahasiswa",
      "selesaikan pendaftaran mahasiswa terlebih dahulu."
    );

    return;

  }

  if (!UM.selectedRoute) {

    showToast(
      "rute belum dipilih",
      "pilih rute bus terlebih dahulu."
    );

    return;

  }

  if (!UM.selectedSeat) {

    showToast(
      "kursi belum dipilih",
      "pilih kursi yang masih tersedia."
    );

    return;

  }

  const route =
    UM.busBookings[UM.selectedRoute];

  if (
    route[UM.selectedSeat]?.status ===
    "booked"
  ) {

    showToast(
      "yah keduluan",
      "kursi baru saja dipesan orang lain."
    );

    renderSeats();

    return;

  }

  route[UM.selectedSeat] = {
    status: "booked",
    type:
      UM.selectedBusType === "women"
        ? "women"
        : "regular"
  };

  const ticketCode =
    `UMBUS-${Date.now()
      .toString(36)
      .toUpperCase()}`;

  createETicket(ticketCode);

  UM.selectedSeat = null;

  renderSeats();

}


/* =========================================================
   E-TICKET
   ========================================================= */

function createETicket(ticketCode) {

  const ticket =
    document.querySelector(".eticket");

  if (!ticket) return;

  ticket.classList.add("active");

  ticket.innerHTML = `
    <div class="eticket-header">

      <strong>
        UNIVERSITY OF MOWTOWN BUS
      </strong>

      <span>
        E-TICKET
      </span>

    </div>

    <div class="barcode">
      ||| ${ticketCode} |||
    </div>

    <div class="ticket-data">

      <div>
        <span>NAMA</span>
        <strong>
          ${escapeHTML(UM.currentStudent.name)}
        </strong>
      </div>

      <div>
        <span>RUTE</span>
        <strong>
          ${escapeHTML(UM.selectedRoute)}
        </strong>
      </div>

      <div>
        <span>KURSI</span>
        <strong>
          ${UM.selectedSeat || "CONFIRMED"}
        </strong>
      </div>

      <div>
        <span>STATUS</span>
        <strong>
          BOOKED
        </strong>
      </div>

    </div>
  `;

  showToast(
    "booking berhasil",
    "e-ticket bus lu sudah diterbitkan."
  );

}


function updateBusAvailability() {

  if (!UM.selectedRoute) return;

  const route =
    UM.busBookings[UM.selectedRoute];

  const total = 40;

  const booked =
    Object.values(route)
      .filter(item =>
        item.status === "booked"
      ).length;

  const available =
    total - booked;

  const output =
    document.querySelector("#busAvailability");

  if (output) {

    output.textContent =
      `${available} kursi tersedia · ${booked} sudah dipesan`;

  }

}


/* =========================================================
   LIVE BUS "WAR KURSI"
   ========================================================= */

function simulateBusActivity() {

  busRoutes.forEach(routeName => {

    const route =
      UM.busBookings[routeName];

    const availableSeats = [];

    for (let seat = 1; seat <= 40; seat++) {

      if (
        !route[seat] ||
        route[seat].status !== "booked"
      ) {
        availableSeats.push(seat);
      }

    }

    if (
      availableSeats.length &&
      Math.random() < 0.45
    ) {

      const randomSeat =
        availableSeats[
          Math.floor(
            Math.random() *
            availableSeats.length
          )
        ];

      route[randomSeat] = {
        status: "booked",
        type:
          Math.random() < 0.2
            ? "women"
            : "regular"
      };

    }

  });

  if (UM.selectedRoute) {
    renderSeats();
  }

}

setInterval(simulateBusActivity, 5000);


/* =========================================================
   MERCHANDISE
   ========================================================= */

const merchandise = [
  {
    name: "Almet University of Mowtown",
    type: "OFFICIAL CAMPUS",
    description:
      "almet resmi UM dengan desain jas almamater bernuansa cream.",
    code: "ALMET-UM"
  },
  {
    name: "MacBook Neo Apple",
    type: "TECHNOLOGY",
    description:
      "produk merchandise teknologi dalam katalog simulasi UM.",
    code: "MAC-NEO"
  },
  {
    name: "Buku Materi Kedokteran",
    type: "ACADEMIC",
    description:
      "buku materi pembelajaran bidang kedokteran.",
    code: "BOOK-FK"
  },
  {
    name: "Buku Materi Teknik",
    type: "ACADEMIC",
    description:
      "buku materi pembelajaran bidang teknik.",
    code: "BOOK-FT"
  },
  {
    name: "Buku Materi Ilmu Komputer",
    type: "ACADEMIC",
    description:
      "buku materi pembelajaran programming dan komputer.",
    code: "BOOK-FIK"
  },
  {
    name: "Buku Materi Seni dan Desain",
    type: "ACADEMIC",
    description:
      "buku materi pembelajaran seni dan desain.",
    code: "BOOK-FSD"
  }
];


function setupMerchandise() {

  const container =
    document.querySelector(".merch-grid");

  if (!container) return;

  container.innerHTML =
    merchandise.map((item, index) => {

      return `
        <article class="merch-card">

          <div class="merch-image">

            <div class="product-placeholder">
              UM
            </div>

          </div>

          <div class="merch-body">

            <small>
              ${escapeHTML(item.type)}
            </small>

            <h3>
              ${escapeHTML(item.name)}
            </h3>

            <p>
              ${escapeHTML(item.description)}
            </p>

            <button
              onclick="openMerch(${index})"
            >
              LIHAT PRODUK
            </button>

          </div>

        </article>
      `;

    }).join("");

}


/* =========================================================
   MERCH DETAIL
   ========================================================= */

function openMerch(index) {

  const item = merchandise[index];

  const modal =
    document.querySelector("#merchModal");

  if (!modal) return;

  modal.classList.add("active");

  modal.innerHTML = `
    <div class="modal-content">

      <button
        class="modal-close"
        onclick="closeMerch()"
      >
        ×
      </button>

      <div class="merch-detail">

        <div class="merch-detail-image">

          <div class="product-placeholder">
            UM
          </div>

        </div>

        <div class="merch-detail-info">

          <small>
            ${escapeHTML(item.type)}
          </small>

          <h2>
            ${escapeHTML(item.name)}
          </h2>

          <p>
            ${escapeHTML(item.description)}
          </p>

          <p>
            pembayaran katalog UM menggunakan
            <strong>KODE PMB</strong>,
            bukan uang.
          </p>

          <button
            class="button button-primary full-width"
            onclick="buyMerch('${item.code}')"
          >
            BELI DENGAN KODE PMB
          </button>

          <div class="review-section">

            <h3>
              Review penerima
            </h3>

            <div class="review-card">

              <div class="review-user">

                <strong>
                  Alya Maharani
                </strong>

                <span class="review-stars">
                  ★★★★★
                </span>

              </div>

              <p>
                barang sampai dengan baik.
                desainnya cocok banget buat
                mahasiswa UM.
              </p>

              <div class="review-photo">
                FOTO PENERIMA
              </div>

            </div>

            <div class="review-card">

              <div class="review-user">

                <strong>
                  Raka Pradana
                </strong>

                <span class="review-stars">
                  ★★★★★
                </span>

              </div>

              <p>
                proses penukaran kode PMB
                gampang dan cepat.
              </p>

              <div class="review-photo">
                FOTO PENERIMA
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  `;

}


function closeMerch() {

  const modal =
    document.querySelector("#merchModal");

  if (!modal) return;

  modal.classList.remove("active");

}


function buyMerch(code) {

  if (!UM.pmbCode) {

    showToast(
      "kode PMB belum tersedia",
      "daftar PMB terlebih dahulu untuk membeli merchandise."
    );

    return;

  }

  showToast(
    "produk berhasil dipesan",
    `kode ${code} ditukar menggunakan ${UM.pmbCode}.`
  );

}


/* =========================================================
   KKN
   ========================================================= */

const kknJobs = [
  "Asisten Administrasi Kampus",
  "Junior IT Support",
  "Asisten Perpustakaan",
  "Asisten Laboratorium",
  "Junior Data Assistant",
  "Asisten Media Kampus",
  "Content Assistant",
  "Event Assistant",
  "Research Assistant",
  "Student Service Assistant",
  "Junior Design Assistant",
  "Campus Operations Assistant"
];


function setupKKN() {

  const form =
    document.querySelector("#kknForm");

  if (!form) return;

  form.addEventListener("submit", event => {

    event.preventDefault();

    if (!UM.stageTwoPassed) {

      showToast(
        "belum memenuhi syarat",
        "KKN baru bisa didaftarkan setelah lulus tahap 2 dan menjadi mahasiswa baru."
      );

      return;

    }

    const result =
      document.querySelector(".kkn-result");

    if (!result) return;

    const job =
      kknJobs[
        Math.floor(
          Math.random() * kknJobs.length
        )
      ];

    const average =
      UM.currentStudent.average || 89;

    let positionLevel =
      "Junior";

    if (average >= 97) {
      positionLevel = "Senior Student Assistant";
    } else if (average >= 94) {
      positionLevel = "Student Assistant";
    }

    result.classList.add("active");

    result.innerHTML = `
      <h4>
        hasil seleksi KKN
      </h4>

      <p>
        sistem memilih posisi berdasarkan
        rata-rata akademik lu.
      </p>

      <strong>
        ${positionLevel}
        · ${job}
      </strong>

      <p>
        status: menunggu penempatan kantor
        di kawasan University of Mowtown.
      </p>
    `;

  });

}


/* =========================================================
   NEWS
   ========================================================= */

const newsItems = [
  {
    title: "Pendaftaran mahasiswa baru dibuka",
    text: "jalur PMB University of Mowtown kini tersedia."
  },
  {
    title: "Sistem ujian tahap 1 diperbarui",
    text: "soal ujian sekarang disesuaikan dengan bidang studi."
  },
  {
    title: "Campus Bus aktif",
    text: "mahasiswa dapat memilih rute dan kursi yang tersedia."
  },
  {
    title: "Program KKN UM dibuka",
    text: "mahasiswa dapat mengikuti seleksi kerja kampus setelah memenuhi syarat."
  },
  {
    title: "Leaderboard diperbarui",
    text: "peringkat peserta diperbarui secara berkala."
  }
];


function rotateNews() {

  const container =
    document.querySelector(".news-grid");

  if (!container) return;

  UM.newsIndex =
    (UM.newsIndex + 1) %
    newsItems.length;

  const item =
    newsItems[UM.newsIndex];

  const card = document.createElement("article");

  card.className = "news-card";

  card.innerHTML = `
    <small>
      LIVE NEWS · ${new Date().toLocaleTimeString("id-ID")}
    </small>

    <h3>
      ${escapeHTML(item.title)}
    </h3>

    <p>
      ${escapeHTML(item.text)}
    </p>
  `;

  container.prepend(card);

  while (container.children.length > 3) {
    container.lastElementChild.remove();
  }

}


/* =========================================================
   MENU
   ========================================================= */

function setupMenu() {

  const menuButton =
    document.querySelector(".menu-button");

  const sideMenu =
    document.querySelector(".side-menu");

  const overlay =
    document.querySelector(".menu-overlay");

  const closeButton =
    document.querySelector(".side-menu-header button");

  if (!menuButton || !sideMenu) return;

  function openMenu() {

    sideMenu.classList.add("active");

    overlay?.classList.add("active");

    document.body.classList.add("menu-open");

  }

  function closeMenu() {

    sideMenu.classList.remove("active");

    overlay?.classList.remove("active");

    document.body.classList.remove("menu-open");

  }

  menuButton.addEventListener(
    "click",
    openMenu
  );

  closeButton?.addEventListener(
    "click",
    closeMenu
  );

  overlay?.addEventListener(
    "click",
    closeMenu
  );

  sideMenu
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        closeMenu
      );

    });

}


/* =========================================================
   SMOOTH ANCHORS
   ========================================================= */

function setupAnchors() {

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const id =
            link.getAttribute("href");

          if (!id || id === "#") return;

          const target =
            document.querySelector(id);

          if (!target) return;

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth"
          });

        }
      );

    });

}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimeout = null;

function showToast(title, message) {

  const toast =
    document.querySelector("#toast");

  if (!toast) return;

  toast.innerHTML = `
    <strong>
      ${escapeHTML(title)}
    </strong>

    <p>
      ${escapeHTML(message)}
    </p>
  `;

  toast.classList.add("active");

  clearTimeout(toastTimeout);

  toastTimeout =
    setTimeout(() => {

      toast.classList.remove(
        "active"
      );

    }, 4000);

}


/* =========================================================
   ESCAPE HTML
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
   FACULTY SELECT OPTIONS
   ========================================================= */

function populateFacultySelects() {

  document
    .querySelectorAll("select")
    .forEach(select => {

      const existing =
        Array.from(select.options)
          .map(option => option.textContent);

      const needsFaculty =
        select.name === "faculty" ||
        select.id === "faculty" ||
        select.classList.contains("faculty-select");

      if (!needsFaculty) return;

      faculties.forEach(faculty => {

        if (
          existing.includes(
            faculty.name
          )
        ) return;

        const option =
          document.createElement("option");

        option.value =
          faculty.name;

        option.textContent =
          faculty.name;

        select.appendChild(option);

      });

    });

}


/* =========================================================
   LOADING SCREEN
   ========================================================= */

function hideLoadingScreen() {

  const loader =
    document.querySelector(".loading-screen");

  if (!loader) return;

  setTimeout(() => {

    loader.classList.add("hidden");

  }, 700);

}


/* =========================================================
   STAT COUNTERS
   ========================================================= */

function animateCounters() {

  document
    .querySelectorAll("[data-counter]")
    .forEach(element => {

      const target =
        Number(
          element.dataset.counter
        );

      let current = 0;

      const increment =
        target / 80;

      const interval =
        setInterval(() => {

          current += increment;

          if (current >= target) {

            current = target;

            clearInterval(interval);

          }

          element.textContent =
            Math.floor(current)
              .toLocaleString("id-ID");

        }, 20);

    });

}


/* =========================================================
   RANDOM LIVE APPLICANTS
   ========================================================= */

function liveApplicants() {

  const element =
    document.querySelector(
      "[data-live-applicants]"
    );

  if (!element) return;

  let value =
    Number(
      element.dataset.liveApplicants ||
      element.textContent.replace(/\D/g, "") ||
      8421
    );

  setInterval(() => {

    value +=
      Math.floor(
        Math.random() * 4
      );

    element.textContent =
      value.toLocaleString("id-ID");

  }, 5000);

}


/* =========================================================
   KEYBOARD SHORTCUT
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closeExamModal();
      closeMerch();

    }

  }
);


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    initializeBusBookings();

    generateStudentsIfNeeded();

    createLeaderboard();

    renderStudentDirectory();

    setupStudentSearch();

    setupRecommendation();

    setupRegistration();

    setupBusRoutes();

    setupBusTypeButtons();

    setupMerchandise();

    setupKKN();

    setupMenu();

    setupAnchors();

    populateFacultySelects();

    animateCounters();

    liveApplicants();

    hideLoadingScreen();

    setInterval(
      rotateNews,
      5 * 60 * 1000
    );

    console.log(
      "University of Mowtown system initialized."
    );

  }
);


/* =========================================================
   GLOBAL EXPORTS
   supaya onclick di HTML bisa memanggil fungsi
   ========================================================= */

window.startExamFromPMB =
  startExamFromPMB;

window.startStageOneExam =
  startStageOneExam;

window.selectAnswer =
  selectAnswer;

window.nextQuestion =
  nextQuestion;

window.previousQuestion =
  previousQuestion;

window.finishStageOne =
  finishStageOne;

window.showStageTwoAccess =
  showStageTwoAccess;

window.verifyStageTwoCode =
  verifyStageTwoCode;

window.selectStageTwoAnswer =
  selectStageTwoAnswer;

window.nextStageTwoQuestion =
  nextStageTwoQuestion;

window.finishStageTwo =
  finishStageTwo;

window.enrollAsStudent =
  enrollAsStudent;

window.generateCertificate =
  generateCertificate;

window.selectBusRoute =
  selectBusRoute;

window.selectSeat =
  selectSeat;

window.bookBus =
  bookBus;

window.openMerch =
  openMerch;

window.closeMerch =
  closeMerch;

window.buyMerch =
  buyMerch;
