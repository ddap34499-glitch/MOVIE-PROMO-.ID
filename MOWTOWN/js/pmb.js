/* =========================================================
   UNIVERSITY OF MOWTOWN
   PMB.JS
   ========================================================= */

const PMB_STORAGE_KEY = "mowtown_pmb_data";


/* =========================================================
   ELEMENTS
   ========================================================= */

const pmbModal = document.getElementById("pmbModal");
const startPMB = document.getElementById("startPMB");
const closePMB = document.getElementById("closePMB");
const submitPMB = document.getElementById("submitPMB");

const pmbName = document.getElementById("pmbName");
const pmbPhone = document.getElementById("pmbPhone");
const pmbField = document.getElementById("pmbField");

const pmbCard = document.getElementById("pmbCard");

const cardName = document.getElementById("cardName");
const cardNumber = document.getElementById("cardNumber");
const cardField = document.getElementById("cardField");

const pmbStatusText =
  document.getElementById("pmbStatusText");

const bookingStatus =
  document.getElementById("bookingStatus");


/* =========================================================
   GET PMB DATA
   ========================================================= */

function getPMBData() {

  const saved =
    localStorage.getItem(PMB_STORAGE_KEY);

  if (!saved) return null;

  try {

    return JSON.parse(saved);

  } catch {

    return null;

  }

}


/* =========================================================
   SAVE PMB DATA
   ========================================================= */

function savePMBData(data) {

  localStorage.setItem(
    PMB_STORAGE_KEY,
    JSON.stringify(data)
  );

}


/* =========================================================
   GENERATE PARTICIPANT NUMBER
   ========================================================= */

function generateParticipantNumber() {

  const random =
    Math.floor(100000 + Math.random() * 900000);

  return `PMB-26-${random}`;

}


/* =========================================================
   GENERATE NIM
   ========================================================= */

function generateNIM() {

  const random =
    Math.floor(100000 + Math.random() * 900000);

  return `UM26${random}`;

}


/* =========================================================
   OPEN PMB
   ========================================================= */

function openPMBModal() {

  if (!pmbModal) return;

  pmbModal.classList.add("show");

  document.body.classList.add("no-scroll");

  if (pmbName) {
    pmbName.focus();
  }

}


/* =========================================================
   CLOSE PMB
   ========================================================= */

function closePMBModal() {

  if (!pmbModal) return;

  pmbModal.classList.remove("show");

  document.body.classList.remove("no-scroll");

}


/* =========================================================
   SHOW PMB RESULT
   ========================================================= */

function showPMBResult(data) {

  if (cardName) {
    cardName.textContent = data.name;
  }

  if (cardNumber) {
    cardNumber.textContent =
      data.participantNumber;
  }

  if (cardField) {
    cardField.textContent = data.study;
  }

  if (pmbCard) {

    pmbCard.hidden = false;

    pmbCard.classList.remove("show");

    requestAnimationFrame(() => {
      pmbCard.classList.add("show");
    });

  }

}


/* =========================================================
   UPDATE PMB STATUS
   ========================================================= */

function updatePMBStatus(data) {

  if (!data) {

    if (pmbStatusText) {
      pmbStatusText.textContent =
        "Belum terdaftar";
    }

    if (bookingStatus) {

      bookingStatus.textContent =
        "PMB REQUIRED";

      bookingStatus.classList.remove("ready");

    }

    return;

  }


  if (pmbStatusText) {

    pmbStatusText.textContent =
      `Terdaftar · ${data.name}`;

  }


  if (bookingStatus) {

    bookingStatus.textContent =
      "PMB VERIFIED";

    bookingStatus.classList.add("ready");

  }

}


/* =========================================================
   LOAD SAVED PMB
   ========================================================= */

function loadPMBData() {

  const data = getPMBData();

  if (!data) {

    updatePMBStatus(null);

    return;

  }

  updatePMBStatus(data);

  showPMBResult(data);

}


/* =========================================================
   SUBMIT PMB
   ========================================================= */

function registerPMB() {

  const name =
    pmbName?.value.trim();

  const phone =
    pmbPhone?.value.trim();

  const study =
    pmbField?.value;


  if (!name) {

    alert("Nama lengkap wajib diisi.");

    pmbName?.focus();

    return;

  }


  if (!phone) {

    alert("Nomor telepon wajib diisi.");

    pmbPhone?.focus();

    return;

  }


  if (!study) {

    alert("Pilih bidang studi terlebih dahulu.");

    pmbField?.focus();

    return;

  }


  const existing =
    getPMBData();


  const data = {

    name,

    phone,

    study,

    participantNumber:
      existing?.participantNumber ||
      generateParticipantNumber(),

    nim:
      existing?.nim ||
      generateNIM(),

    registeredAt:
      existing?.registeredAt ||
      new Date().toISOString()

  };


  savePMBData(data);

  updatePMBStatus(data);

  showPMBResult(data);


  /*
   * PMB SUDAH TERDAFTAR.
   * Data ini nantinya otomatis digunakan
   * oleh sistem booking bus.
   */

  alert(
    `Pendaftaran PMB berhasil!\n\n` +
    `Nama: ${data.name}\n` +
    `NIM: ${data.nim}\n` +
    `Nomor Peserta: ${data.participantNumber}`
  );

}


/* =========================================================
   EVENTS
   ========================================================= */

startPMB?.addEventListener(
  "click",
  openPMBModal
);


closePMB?.addEventListener(
  "click",
  closePMBModal
);


submitPMB?.addEventListener(
  "click",
  registerPMB
);


/* Klik area luar modal */

pmbModal?.addEventListener(
  "click",
  event => {

    if (event.target === pmbModal) {
      closePMBModal();
    }

  }
);


/* ESC untuk menutup */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      pmbModal?.classList.contains("show")
    ) {

      closePMBModal();

    }

  }
);


/* =========================================================
   INITIALIZE
   ========================================================= */

loadPMBData();
