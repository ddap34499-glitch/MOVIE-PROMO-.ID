/* =========================================================
   UNIVERSITY OF MOWTOWN
   STUDENTS.JS
   ========================================================= */

const students = [
  {
    name: "Aditya Pratama",
    nim: "UM260001",
    study: "Ilmu Komputer",
    average: "3.92"
  },
  {
    name: "Nabila Putri",
    nim: "UM260002",
    study: "Kedokteran",
    average: "3.88"
  },
  {
    name: "Raka Mahendra",
    nim: "UM260003",
    study: "Teknik",
    average: "3.84"
  },
  {
    name: "Salsa Amelia",
    nim: "UM260004",
    study: "Psikologi",
    average: "3.91"
  },
  {
    name: "Fajar Ramadhan",
    nim: "UM260005",
    study: "Ekonomi & Bisnis",
    average: "3.79"
  }
];


/* =========================================================
   RENDER STUDENT PREVIEW
   ========================================================= */

function renderStudentPreview() {

  const container =
    document.getElementById("studentPreview");

  if (!container) return;

  container.innerHTML = "";

  students.forEach(student => {

    const row =
      document.createElement("div");

    row.className = "student-row";

    row.innerHTML = `
      <strong>${student.name}</strong>
      <span>${student.study}</span>
      <span>${student.average}</span>
    `;

    container.appendChild(row);

  });
}


/* =========================================================
   FIND STUDENT BY NIM
   ========================================================= */

function findStudentByNim(nim) {

  return students.find(
    student => student.nim === nim
  );

}


/* =========================================================
   FIND STUDENT BY NAME
   ========================================================= */

function findStudentByName(name) {

  if (!name) return null;

  const searchName =
    name.trim().toLowerCase();

  return students.find(
    student =>
      student.name.toLowerCase() === searchName
  );

}


/* =========================================================
   ADD NEW STUDENT
   ========================================================= */

function addStudent(student) {

  if (!student) return null;

  const newStudent = {
    name: student.name || "Mahasiswa Baru",

    nim:
      student.nim ||
      `UM26${String(
        students.length + 1
      ).padStart(4, "0")}`,

    study:
      student.study ||
      "Belum ditentukan",

    average:
      student.average ||
      "-"
  };

  students.push(newStudent);

  renderStudentPreview();

  return newStudent;
}


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderStudentPreview();

  }
);
