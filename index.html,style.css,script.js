<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>University of Mowtown</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="style.css">
</head>

<body>

  <div class="ambient ambient-one"></div>
  <div class="ambient ambient-two"></div>

  <!-- NAVBAR -->
  <header class="navbar">

    <a href="#home" class="brand">
      <div class="crest">M</div>

      <div class="brand-text">
        <span>UNIVERSITY</span>
        <strong>OF MOWTOWN</strong>
      </div>
    </a>

    <nav id="navMenu">
      <a href="#about">About</a>
      <a href="#campus">Campus</a>
      <a href="#academics">Academics</a>
      <a href="#admission">Admissions</a>
      <a href="#news">News</a>
    </nav>

    <a href="#admission" class="nav-button">
      Apply 2026 ↗
    </a>

    <button class="menu-button" onclick="toggleMenu()">☰</button>

  </header>


  <main id="home">

    <!-- HERO -->
    <section class="hero">

      <div class="hero-content">

        <div class="eyebrow">
          ESTABLISHED 1932 · INDONESIA
        </div>

        <h1>
          A tradition of
          <i>becoming.</i>
        </h1>

        <p class="hero-description">
          University of Mowtown is a modern institution shaped by
          a long academic tradition — educating curious minds,
          cultivating character, and creating work that matters.
        </p>

        <div class="hero-actions">

          <a href="#about" class="primary-button">
            Discover Mowtown →
          </a>

          <a href="#admission" class="text-button">
            Start your application ↗
          </a>

        </div>


        <div class="hero-statistics">

          <div>
            <strong>1932</strong>
            <span>Founded</span>
          </div>

          <div>
            <strong>497</strong>
            <span>Faculty members</span>
          </div>

          <div>
            <strong>14</strong>
            <span>Faculties</span>
          </div>

          <div>
            <strong>94</strong>
            <span>Years of legacy</span>
          </div>

        </div>

      </div>


      <div class="hero-visual">

        <div class="hero-image"></div>

        <div class="hero-card glass">

          <span>THE HEART OF MOWTOWN</span>

          <strong>Grand University Hall</strong>

          <small>
            Academic District · Mowtown
          </small>

        </div>

      </div>

    </section>


    <!-- ABOUT -->
    <section id="about" class="section about">

      <div class="section-label">
        01 / OUR STORY
      </div>

      <div class="about-grid">

        <h2>
          Built on a belief that education should
          <i>move people forward.</i>
        </h2>

        <div class="about-text">

          <p>
            University of Mowtown was founded in 1932 by
            <strong>Daffi Kautsar</strong>,
            our <strong>Founding Chancellor & First Rector</strong>.
          </p>

          <p>
            What began as a vision for a rigorous and humane
            institution has grown into a comprehensive university
            with a distinctly Indonesian character and a global outlook.
          </p>

          <p>
            Today, Mowtown brings together research,
            professional education, arts, technology,
            health sciences, and the humanities.
          </p>

          <a href="#academics" class="text-button">
            Explore our academics →
          </a>

        </div>

      </div>

    </section>


    <!-- CAMPUS -->
    <section id="campus" class="section">

      <div class="section-heading">

        <div>
          <div class="section-label">
            02 / CAMPUS
          </div>

          <h2>
            Space to think.<br>
            <i>Room to grow.</i>
          </h2>
        </div>

        <p>
          Designed for concentration, collaboration,
          and a life beyond the classroom.
        </p>

      </div>


      <div class="campus-grid">

        <article class="campus-card campus-large">
          <div class="campus-image image-one"></div>

          <div class="campus-caption">
            <strong>Grand Mowtown Hall</strong>
            <span>Central administration · 1932 / 2026</span>
          </div>
        </article>


        <article class="campus-card">
          <div class="campus-image image-two"></div>

          <div class="campus-caption">
            <strong>Mowtown Central Library</strong>
            <span>Research & knowledge centre</span>
          </div>
        </article>


        <article class="campus-card">
          <div class="campus-image image-three"></div>

          <div class="campus-caption">
            <strong>Science & Innovation Centre</strong>
            <span>Laboratories & research</span>
          </div>
        </article>


        <article class="campus-card campus-wide">
          <div class="campus-image image-four"></div>

          <div class="campus-caption">
            <strong>Student Residence</strong>
            <span>A home for the Mowtown community</span>
          </div>
        </article>

      </div>

    </section>


    <!-- ACADEMICS -->
    <section id="academics" class="section academics">

      <div class="section-label">
        03 / ACADEMICS
      </div>

      <div class="section-heading">

        <h2>
          One university.<br>
          <i>Many ways to excel.</i>
        </h2>

        <p>
          Explore 14 faculties and a broad range
          of disciplines inspired by leading Indonesian universities.
        </p>

      </div>


      <div id="facultyGrid" class="faculty-grid"></div>

    </section>


    <!-- DOSEN -->
    <section class="section faculty-directory">

      <div class="directory-heading">

        <div>

          <div class="section-label">
            FACULTY DIRECTORY
          </div>

          <h2>
            Meet the people<br>
            behind the classroom.
          </h2>

        </div>

        <button class="outline-button" onclick="openLecturers()">
          View 497 lecturers →
        </button>

      </div>


      <div id="professorGrid" class="professor-grid"></div>

    </section>


    <!-- RANKING -->
    <section class="section ranking">

      <div class="section-heading">

        <div>

          <div class="section-label">
            MOWTOWN ACADEMIC INDEX
          </div>

          <h2>
            Students who<br>
            <i>raise the bar.</i>
          </h2>

        </div>

        <div class="update glass">
          UPDATED EVERY 2 WEEKS
          <strong>14 AUG 2026</strong>
        </div>

      </div>


      <div id="rankingList" class="ranking-list"></div>

    </section>


    <!-- UKT -->
    <section class="section finance">

      <div class="section-label">
        04 / FEES & FUNDING
      </div>

      <div class="section-heading">

        <h2>
          An investment in<br>
          <i>your future.</i>
        </h2>

        <p>
          Transparent pathways for students
          with different academic and financial circumstances.
        </p>

      </div>


      <div class="fund-grid">

        <button class="fund-card glass" onclick="openFee('regular')">

          <span>REGULAR</span>

          <strong>UKT Reguler</strong>

          <b>Rp 8–18 jt</b>

          <small>
            per semester · program dependent
          </small>

          <em>
            Details →
          </em>

        </button>


        <button class="fund-card glass" onclick="openFee('fast')">

          <span>ACCELERATED</span>

          <strong>UKT Fast Track</strong>

          <b>Rp 18–28 jt</b>

          <small>
            per semester · intensive route
          </small>

          <em>
            Details →
          </em>

        </button>


        <button class="fund-card blue-card" onclick="openFee('scholarship')">

          <span>FULLY FUNDED</span>

          <strong>Scholarship</strong>

          <b>100%</b>

          <small>
            tuition + allowance + residence
          </small>

          <em>
            Explore award →
          </em>

        </button>


        <button class="fund-card glass" onclick="openFee('mandiri')">

          <span>INDEPENDENT</span>

          <strong>Jalur Mandiri</strong>

          <b>Rp 15–30 jt</b>

          <small>
            per semester · residence available
          </small>

          <em>
            Details →
          </em>

        </button>

      </div>

    </section>


    <!-- PMB -->
    <section id="admission" class="section admissions">

      <div class="admission-intro">

        <div class="section-label">
          05 / ADMISSIONS
        </div>

        <h2>
          Your next chapter
          starts <i>here.</i>
        </h2>

        <p>
          Complete the PMB form and receive
          your KETAT MOWTOWN examination number instantly.
        </p>

      </div>


      <form id="registrationForm" class="application glass">

        <div class="form-title">
          <span>PMB 2026</span>
          <strong>Registration form</strong>
        </div>


        <div class="form-grid">

          <label>
            Full name
            <input
              name="name"
              required
              placeholder="Your full name"
            >
          </label>


          <label>
            Email
            <input
              name="email"
              type="email"
              required
              placeholder="you@email.com"
            >
          </label>


          <label>
            WhatsApp
            <input
              name="phone"
              required
              placeholder="08xxxxxxxxxx"
            >
          </label>


          <label>
            Date of birth
            <input
              name="birth"
              type="date"
              required
            >
          </label>


          <label>
            Faculty

            <select id="facultySelect" required>
              <option value="">
                Choose faculty
              </option>
            </select>

          </label>


          <label>
            Study programme

            <select id="majorSelect" required>
              <option value="">
                Choose programme
              </option>
            </select>

          </label>


          <label>
            Admission route

            <select>
              <option>UKT Reguler</option>
              <option>UKT Fast Track</option>
              <option>Jalur Mandiri</option>
              <option>Fully Funded Scholarship</option>
            </select>

          </label>


          <label>
            Intake

            <select>
              <option>2026</option>
              <option>2027</option>
            </select>

          </label>

        </div>


        <label class="agreement">

          <input type="checkbox" required>

          I confirm that the information provided is accurate.

        </label>


        <button class="primary-button" type="submit">
          Submit application →
        </button>

      </form>


      <div id="registrationResult" class="registration-result glass hidden">

        <span class="section-label">
          APPLICATION RECEIVED
        </span>

        <strong>
          Your KETAT MOWTOWN number
        </strong>

        <b id="examNumber"></b>

        <small>
          Keep this number safe to access your examination card.
        </small>

      </div>

    </section>


    <!-- KETAT -->
    <section class="section examination">

      <div class="section-label">
        KETAT MOWTOWN
      </div>

      <div class="section-heading">

        <h2>
          Examination<br>
          <i>pass.</i>
        </h2>

        <p>
          Generate a digital examination card
          using your registration number.
        </p>

      </div>


      <div class="exam-generator glass">

        <input
          id="cardName"
          placeholder="Participant name"
        >

        <input
          id="cardNumber"
          placeholder="MOW-26-123456"
        >

        <button
          class="primary-button"
          onclick="generateCard()"
        >
          Generate card →
        </button>

      </div>


      <article id="examCard" class="exam-card hidden">

        <div class="exam-header">

          <span>
            UNIVERSITY OF MOWTOWN
          </span>

          <strong>
            KETAT MOWTOWN · 2026
          </strong>

        </div>


        <div class="exam-content">

          <div>

            <small>
              PARTICIPANT
            </small>

            <h3 id="cardParticipant">
              —
            </h3>

            <small>
              REGISTRATION NUMBER
            </small>

            <p id="cardRegistration">
              —
            </p>

          </div>


          <div class="exam-details">

            <small>DATE</small>
            <strong id="cardDate">—</strong>

            <small>TIME</small>
            <strong id="cardTime">—</strong>

            <small>ROOM</small>
            <strong id="cardRoom">—</strong>

          </div>

        </div>

      </article>

    </section>


    <!-- NEWS -->
    <section id="news" class="section news">

      <div class="section-heading">

        <div>

          <div class="section-label">
            06 / MOWTOWN NEWS
          </div>

          <h2>
            Ideas, people,<br>
            <i>what's happening.</i>
          </h2>

        </div>

        <button
          class="outline-button"
          onclick="openNewsArchive()"
        >
          View all news →
        </button>

      </div>


      <div id="newsGrid" class="news-grid"></div>

    </section>

  </main>


  <!-- FOOTER -->
  <footer>

    <div class="brand">

      <div class="crest">
        M
      </div>

      <div class="brand-text">
        <span>UNIVERSITY</span>
        <strong>OF MOWTOWN</strong>
      </div>

    </div>

    <div>
      <span>EST. 1932</span>
      <p>
        © 1932–2026 University of Mowtown
      </p>
    </div>

  </footer>


  <!-- MODAL -->
  <div id="modal" class="modal hidden">

    <div class="modal-box glass">

      <button
        class="close-button"
        onclick="closeModal()"
      >
        ×
      </button>

      <div id="modalContent"></div>

    </div>

  </div>


<script src="script.js"></script>

</body>
</html>
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #f3f5f7;
  color: #14243a;
  font-family: "DM Sans", sans-serif;
  line-height: 1.65;
}

.ambient {
  position: fixed;
  width: 430px;
  height: 430px;
  border-radius: 50%;
  filter: blur(110px);
  pointer-events: none;
  z-index: -1;
}

.ambient-one {
  background: #c5dcff;
  left: -180px;
  top: 50px;
  opacity: .5;
}

.ambient-two {
  background: #dbe8ff;
  right: -170px;
  top: 55%;
  opacity: .6;
}


/* NAVBAR */

.navbar {
  max-width: 1240px;
  height: 72px;
  margin: 18px auto 0;
  padding: 0 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 12px;
  z-index: 50;

  background: rgba(255,255,255,.78);
  border: 1px solid rgba(255,255,255,.9);

  border-radius: 20px;

  box-shadow:
    0 15px 45px rgba(30,60,100,.08);

  backdrop-filter: blur(22px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;

  color: #14243a;
  text-decoration: none;
}

.crest {
  width: 40px;
  height: 40px;

  display: grid;
  place-items: center;

  border-radius: 12px;

  background: #123d82;
  color: white;

  font-family: "Playfair Display";
  font-size: 21px;
}

.brand-text span,
.brand-text strong {
  display: block;
  line-height: 1;
}

.brand-text span {
  font-size: 8px;
  letter-spacing: .25em;
  color: #65758b;
}

.brand-text strong {
  font-size: 15px;
  letter-spacing: .06em;
}

.navbar nav {
  display: flex;
  gap: 28px;
}

.navbar nav a {
  color: #53657d;
  text-decoration: none;
  font-size: 11px;
}

.navbar nav a:hover {
  color: #123d82;
}

.nav-button {
  padding: 11px 15px;

  background: #123d82;
  color: white;

  border-radius: 12px;

  text-decoration: none;
  font-size: 11px;
}

.menu-button {
  display: none;

  border: 0;
  background: transparent;

  font-size: 22px;
  color: #123d82;
}


/* GENERAL */

main {
  max-width: 1240px;
  margin: auto;
}

.section {
  padding: 100px 20px;
}

.section-label,
.eyebrow {
  font-size: 9px;
  letter-spacing: .2em;
  font-weight: 800;
  color: #38649d;
}

h1,
h2,
h3 {
  font-family: "Playfair Display", serif;
}

h2 {
  line-height: 1.04;
  letter-spacing: -.045em;
}

h2 i,
h1 i {
  font-style: italic;
  color: #245da7;
}


/* BUTTONS */

.primary-button {
  border: 0;

  padding: 13px 18px;

  border-radius: 12px;

  background: #132d53;
  color: white;

  font: 700 11px "DM Sans";

  text-decoration: none;

  cursor: pointer;

  display: inline-flex;
  gap: 13px;
  align-items: center;

  box-shadow:
    0 10px 25px rgba(20,45,83,.16);
}

.text-button {
  font-size: 11px;
  color: #245080;

  text-decoration: none;

  border-bottom: 1px solid #bdcadd;

  padding-bottom: 3px;
}

.outline-button {
  border: 1px solid #cad5e1;

  background: rgba(255,255,255,.6);

  color: #173861;

  border-radius: 12px;

  padding: 12px 16px;

  font: 700 11px "DM Sans";

  cursor: pointer;
}


/* GLASS */

.glass {
  background: rgba(255,255,255,.68);

  border: 1px solid rgba(255,255,255,.9);

  box-shadow:
    0 20px 50px rgba(30,65,105,.08);

  backdrop-filter: blur(20px);
}


/* HERO */

.hero {
  min-height: 760px;

  padding: 110px 20px 90px;

  display: grid;
  grid-template-columns: 1fr .95fr;

  gap: 70px;

  align-items: center;
}

.hero h1 {
  font-size: clamp(58px,7vw,94px);

  line-height: 1;

  margin: 17px 0;

  letter-spacing: -.05em;
}

.hero-description {
  max-width: 590px;

  color: #64748a;

  font-size: 15px;
}

.hero-actions {
  display: flex;
  align-items: center;

  gap: 22px;

  margin: 30px 0 48px;
}

.hero-statistics {
  display: flex;
  gap: 30px;
}

.hero-statistics div {
  padding-left: 15px;

  border-left: 1px solid #ccd6e1;
}

.hero-statistics strong {
  display: block;

  font-family: "Playfair Display";

  font-size: 22px;
}

.hero-statistics span {
  color: #74849a;

  font-size: 9px;
}

.hero-visual {
  position: relative;
}

.hero-image {
  height: 560px;

  border-radius: 28px;

  background:
    linear-gradient(
      180deg,
      transparent 45%,
      rgba(6,24,51,.5)
    ),
    url("https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=85")
    center / cover;

  box-shadow:
    0 30px 70px rgba(27,58,94,.18);
}

.hero-card {
  position: absolute;

  left: -35px;
  bottom: 35px;

  padding: 17px 20px;

  border-radius: 16px;

  min-width: 230px;
}

.hero-card span,
.hero-card strong,
.hero-card small {
  display: block;
}

.hero-card span {
  font-size: 8px;

  letter-spacing: .15em;

  color: #56708f;
}

.hero-card strong {
  font-size: 14px;
}

.hero-card small {
  font-size: 9px;

  color: #718096;
}


/* ABOUT */

.about-grid {
  display: grid;

  grid-template-columns: 1.1fr .9fr;

  gap: 90px;
}

.about-grid h2 {
  font-size: clamp(40px,5vw,61px);

  margin: 14px 0;
}

.about-text p {
  color: #65768b;

  font-size: 13px;
}


/* SECTION HEAD */

.section-heading {
  display: grid;

  grid-template-columns: 1.1fr .9fr;

  gap: 90px;

  align-items: end;

  margin-bottom: 42px;
}

.section-heading h2 {
  font-size: clamp(42px,5vw,66px);

  margin: 12px 0;
}

.section-heading > p {
  color: #6a7b90;

  font-size: 13px;

  max-width: 410px;
}


/* CAMPUS */

.campus-grid {
  display: grid;

  grid-template-columns:
    1.1fr
    .9fr
    .9fr;

  grid-template-rows:
    260px
    260px;

  gap: 15px;
}

.campus-card {
  overflow: hidden;

  border-radius: 18px;

  background: white;

  border: 1px solid #e0e6ec;

  position: relative;
}

.campus-large {
  grid-row: span 2;
}

.campus-wide {
  grid-column: span 2;
}

.campus-image {
  height: 100%;

  background-size: cover;
  background-position: center;

  transition: transform .6s;
}

.campus-card:hover .campus-image {
  transform: scale(1.04);
}

.image-one {
  background-image:
    linear-gradient(
      transparent 45%,
      #081f3ab5
    ),
    url("https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=85");
}

.image-two {
  background-image:
    url("https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=85");
}

.image-three {
  background-image:
    url("https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85");
}

.image-four {
  background-image:
    linear-gradient(
      transparent 40%,
      #081f3ab5
    ),
    url("https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1000&q=85");
}

.campus-caption {
  position: absolute;

  bottom: 0;

  width: 100%;

  padding: 20px;

  color: white;

  background:
    linear-gradient(
      transparent,
      rgba(4,20,40,.82)
    );
}

.campus-caption strong,
.campus-caption span {
  display: block;
}

.campus-caption strong {
  font-size: 14px;
}

.campus-caption span {
  font-size: 9px;

  opacity: .75;
}


/* FACULTIES */

.faculty-grid {
  display: grid;

  grid-template-columns: repeat(4,1fr);

  border-top: 1px solid #d8e0e8;
}

.faculty-item {
  min-height: 150px;

  padding: 22px 15px;

  border-right: 1px solid #d8e0e8;
  border-bottom: 1px solid #d8e0e8;

  cursor: pointer;

  transition: .2s;
}

.faculty-item:hover {
  background: white;

  box-shadow:
    0 15px 35px rgba(36,72,112,.07);
}

.faculty-item span {
  font-size: 9px;

  color: #8998aa;
}

.faculty-item strong {
  display: block;

  font-family: "Playfair Display";

  font-size: 19px;

  line-height: 1.15;

  margin: 10px 0;
}

.faculty-item small {
  font-size: 9px;

  color: #718198;
}


/* DIRECTORY */

.faculty-directory {
  background: #e9eef4;

  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);

  padding-left: max(20px,calc((100vw - 1200px)/2));
  padding-right: max(20px,calc((100vw - 1200px)/2));
}

.directory-heading {
  display: flex;

  justify-content: space-between;

  align-items: end;

  margin-bottom: 35px;
}

.directory-heading h2 {
  font-size: clamp(42px,5vw,60px);
}

.professor-grid {
  display: grid;

  grid-template-columns: repeat(4,1fr);

  gap: 14px;
}

.professor {
  background: white;

  padding: 17px;

  border-radius: 17px;

  border: 1px solid #dce3ea;
}

.professor-photo {
  height: 170px;

  border-radius: 13px;

  display: grid;
  place-items: center;

  background:
    linear-gradient(
      135deg,
      #d5e1ef,
      #f4f7fa
    );

  color: #2b5a91;

  font-family: "Playfair Display";

  font-size: 43px;
}

.professor strong {
  display: block;

  font-size: 12px;

  margin-top: 13px;
}

.professor small {
  font-size: 9px;

  color: #718096;
}


/* RANKING */

.update {
  padding: 12px 15px;

  border-radius: 14px;

  text-align: right;

  font-size: 8px;

  letter-spacing: .1em;

  color: #718096;
}

.update strong {
  display: block;

  font-size: 11px;

  color: #244d82;
}

.ranking-list {
  border-top: 1px solid #cfd9e4;
}

.ranking-row {
  display: grid;

  grid-template-columns:
    60px
    1fr
    1fr
    80px;

  align-items: center;

  padding: 17px 4px;

  border-bottom: 1px solid #dbe2ea;
}

.rank-number {
  font-family: "Playfair Display";

  color: #8b9aae;
}

.rank-name {
  font-size: 13px;

  font-weight: 700;
}

.rank-faculty {
  font-size: 10px;

  color: #718198;
}

.rank-score {
  font-family: "Playfair Display";

  font-size: 18px;

  text-align: right;

  color: #173f76;
}


/* FUNDING */

.fund-grid {
  display: grid;

  grid-template-columns:
    repeat(4,1fr);

  gap: 14px;
}

.fund-card {
  min-height: 220px;

  padding: 22px;

  text-align: left;

  border-radius: 18px;

  cursor: pointer;

  color: #17304f;
}

.fund-card span,
.fund-card small,
.fund-card em {
  display: block;

  font-size: 8px;

  color: #7a8a9e;
}

.fund-card strong {
  display: block;

  font-family: "Playfair Display";

  font-size: 22px;

  margin: 18px 0 8px;
}

.fund-card b {
  font-size: 20px;
}

.fund-card em {
  margin-top: 20px;

  font-style: normal;

  font-weight: 700;

  color: #24568e;
}

.blue-card {
  background: #173e78;

  color: white;

  border: 1px solid #173e78;
}

.blue-card span,
.blue-card small,
.blue-card em {
  color: #b8d0ef;
}


/* ADMISSIONS */

.admissions {
  background: #e9eef4;

  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);

  padding-left: max(20px,calc((100vw - 1200px)/2));
  padding-right: max(20px,calc((100vw - 1200px)/2));

  display: grid;

  grid-template-columns:
    .75fr
    1.25fr;

  gap: 70px;
}

.admission-intro h2 {
  font-size: clamp(45px,5vw,70px);
}

.admission-intro p {
  color: #6b7b90;

  font-size: 13px;
}

.application {
  padding: 25px;

  border-radius: 20px;
}

.form-title span,
.form-title strong {
  display: block;
}

.form-title span {
  font-size: 9px;

  letter-spacing: .15em;

  color: #4b719d;
}

.form-title strong {
  font-family: "Playfair Display";

  font-size: 26px;

  margin-bottom: 20px;
}

.form-grid {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 13px;
}

label {
  font-size: 9px;

  color: #617289;

  font-weight: 700;
}

input,
select {
  width: 100%;

  margin-top: 6px;

  padding: 12px;

  border: 1px solid #d2dce7;

  border-radius: 10px;

  background: rgba(255,255,255,.8);

  font: inherit;

  font-size: 11px;

  outline: none;

  color: #243852;
}

.agreement {
  display: flex;

  align-items: center;

  gap: 7px;

  margin: 16px 0;
}

.agreement input {
  width: auto;

  margin: 0;
}


/* RESULT */

.registration-result {
  grid-column: 1 / -1;

  padding: 25px;

  border-radius: 18px;

  margin-top: 15px;
}

.registration-result strong,
.registration-result b,
.registration-result small {
  display: block;
}

.registration-result strong {
  font-family: "Playfair Display";

  font-size: 22px;
}

.registration-result b {
  font-size: 32px;

  letter-spacing: .12em;

  color: #1c5799;
}

.registration-result small {
  font-size: 10px;

  color: #718198;
}


/* EXAM */

.exam-generator {
  max-width: 800px;

  padding: 12px;

  border-radius: 16px;

  display: grid;

  grid-template-columns:
    1fr
    1fr
    auto;

  gap: 8px;
}

.exam-generator input {
  margin: 0;
}

.exam-card {
  max-width: 800px;

  margin-top: 20px;

  overflow: hidden;

  border-radius: 20px;

  background: #122f57;

  color: white;

  box-shadow:
    0 25px 60px rgba(16,43,80,.2);
}

.exam-header {
  padding: 18px 22px;

  border-bottom: 1px solid #ffffff1f;

  display: flex;

  justify-content: space-between;

  font-size: 9px;

  letter-spacing: .13em;
}

.exam-content {
  padding: 25px;

  display: grid;

  grid-template-columns: 1fr .5fr;

  gap: 30px;
}

.exam-content small {
  display: block;

  font-size: 8px;

  letter-spacing: .14em;

  color: #91abc9;

  margin-top: 10px;
}

.exam-content h3 {
  font-size: 27px;

  margin: 5px 0 15px;
}

.exam-details {
  border-left: 1px solid #ffffff22;

  padding-left: 25px;
}

.exam-details strong {
  display: block;

  font-size: 13px;
}


/* NEWS */

.news-grid {
  display: grid;

  grid-template-columns:
    1.2fr
    .9fr
    .9fr;

  gap: 15px;
}

.news-card {
  overflow: hidden;

  border-radius: 18px;

  background: white;

  border: 1px solid #e0e6ec;

  cursor: pointer;
}

.news-card:first-child {
  grid-row: span 2;
}

.news-image {
  height: 220px;

  background-size: cover;

  background-position: center;
}

.news-card:first-child .news-image {
  height: 360px;
}

.news-one {
  background-image:
    url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=85");
}

.news-two {
  background-image:
    url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=85");
}

.news-three {
  background-image:
    url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=85");
}

.news-four {
  background-image:
    url("https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=85");
}

.news-body {
  padding: 17px;
}

.news-body small {
  font-size: 8px;

  color: #75869a;
}

.news-body strong {
  display: block;

  font-family: "Playfair Display";

  font-size: 19px;

  line-height: 1.2;

  margin: 7px 0;
}

.news-body p {
  font-size: 10px;

  color: #718096;
}


/* FOOTER */

footer {
  max-width: 1200px;

  margin: auto;

  padding: 55px 20px 80px;

  border-top: 1px solid #d5dde6;

  display: flex;

  justify-content: space-between;

  align-items: center;

  color: #718096;

  font-size: 9px;
}


/* MODAL */

.modal {
  position: fixed;

  inset: 0;

  z-index: 100;

  display: grid;

  place-items: center;

  padding: 20px;

  background: rgba(18,36,61,.35);

  backdrop-filter: blur(8px);
}

.modal-box {
  max-width: 800px;

  width: 100%;

  max-height: 85vh;

  overflow: auto;

  padding: 30px;

  border-radius: 22px;

  position: relative;
}

.close-button {
  position: absolute;

  right: 18px;
  top: 12px;

  border: 0;

  background: transparent;

  font-size: 27px;

  color: #5b6f86;

  cursor: pointer;
}

.modal-box h2 {
  font-size: 45px;

  line-height: 1.05;
}

.modal-list {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 9px;
}

.modal-list div {
  padding: 13px;

  border: 1px solid #dce4ec;

  border-radius: 11px;

  font-size: 10px;
}

.modal-list small {
  color: #73849a;
}

.hidden {
  display: none !important;
}


/* MOBILE */

@media(max-width:900px) {

  .navbar nav {
    display: none;
  }

  .navbar nav.open {
    position: absolute;

    display: flex;

    flex-direction: column;

    gap: 15px;

    left: 10px;
    right: 10px;
    top: 70px;

    padding: 18px;

    background: white;

    border-radius: 15px;

    box-shadow:
      0 15px 40px rgba(28,53,82,.1);
  }

  .menu-button {
    display: block;
  }

  .nav-button {
    display: none;
  }

  .hero {
    grid-template-columns: 1fr;

    padding-top: 70px;
  }

  .hero-visual {
    order: -1;
  }

  .hero-image {
    height: 400px;
  }

  .about-grid,
  .section-heading {
    grid-template-columns: 1fr;

    gap: 20px;
  }

  .campus-grid {
    grid-template-columns: 1fr 1fr;

    grid-template-rows:
      300px
      220px
      220px;
  }

  .campus-large {
    grid-row: auto;
  }

  .campus-wide {
    grid-column: span 2;
  }

  .faculty-grid {
    grid-template-columns: 1fr 1fr;
  }

  .professor-grid,
  .fund-grid {
    grid-template-columns: 1fr 1fr;
  }

  .admissions {
    grid-template-columns: 1fr;

    gap: 25px;
  }

  .news-grid {
    grid-template-columns: 1fr 1fr;
  }

  .news-card:first-child {
    grid-row: auto;
  }

  .news-card:first-child .news-image {
    height: 220px;
  }

  .hero-statistics {
    flex-wrap: wrap;
  }

}


@media(max-width:560px) {

  .section {
    padding: 75px 18px;
  }

  .hero {
    padding-left: 18px;
    padding-right: 18px;
  }

  .hero-actions {
    flex-direction: column;

    align-items: flex-start;
  }

  .hero-statistics {
    display: grid;

    grid-template-columns: 1fr 1fr;
  }

  .campus-grid,
  .faculty-grid,
  .professor-grid,
  .fund-grid,
  .news-grid,
  .form-grid {
    grid-template-columns: 1fr;
  }

  .campus-wide {
    grid-column: auto;
  }

  .ranking-row {
    grid-template-columns:
      35px
      1fr
      60px;
  }

  .rank-faculty {
    display: none;
  }

  .exam-generator {
    grid-template-columns: 1fr;
  }

  .exam-content {
    grid-template-columns: 1fr;
  }

  .exam-details {
    border-left: 0;

    border-top: 1px solid #ffffff22;

    padding:
      18px 0 0;
  }

  .modal-list {
    grid-template-columns: 1fr;
  }

  footer {
    flex-direction: column;

    align-items: flex-start;

    gap: 25px;
  }

}
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
