const nomorAdmin = "6281234567890"; // Ganti dengan nomor WhatsApp lu

// Fungsi Buka Trailer YouTube Resmi
function bukaTrailer(youtubeId) {
    const modal = document.getElementById('trailerModal');
    const iframe = document.getElementById('youtubeIframe');
    iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
    modal.style.display = 'flex';
}

function tutupTrailerModal() {
    const modal = document.getElementById('trailerModal');
    const iframe = document.getElementById('youtubeIframe');
    iframe.src = "";
    modal.style.display = 'none';
}

function tutupTrailer(e) {
    if (e.target.id === 'trailerModal') {
        tutupTrailerModal();
    }
}

// Banner Auto-Scroll 5 Detik & Swipe
const bannerScroll = document.getElementById('bannerScroll');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const totalSlides = dots.length;

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function autoScrollBanner() {
    currentIndex = (currentIndex + 1) % totalSlides;
    bannerScroll.scrollTo({
        left: bannerScroll.clientWidth * currentIndex,
        behavior: 'smooth'
    });
    updateDots();
}

let slideInterval = setInterval(autoScrollBanner, 5000);

bannerScroll.addEventListener('scroll', () => {
    let index = Math.round(bannerScroll.scrollLeft / bannerScroll.clientWidth);
    if (index !== currentIndex && index >= 0 && index < totalSlides) {
        currentIndex = index;
        updateDots();
    }
});

bannerScroll.addEventListener('mouseenter', () => clearInterval(slideInterval));
bannerScroll.addEventListener('mouseleave', () => slideInterval = setInterval(autoScrollBanner, 5000));

// Klik poster langsung isi nama film & scroll ke form order
function pilihFilm(judul) {
    const inputFilm = document.getElementById('namaFilm');
    inputFilm.value = judul;
    inputFilm.scrollIntoView({ behavior: 'smooth', block: 'center' });
    inputFilm.style.borderColor = '#990000';
    inputFilm.style.background = '#fff5f5';
    setTimeout(() => {
        inputFilm.style.background = '#ffffff';
    }, 1000);
}

// Hitung otomatis rumus diskon 30% untuk 2 tiket
function hitungTotal() {
    let hrg = document.getElementById('hargaNormal').value;
    if(hrg) {
        let totalNormal = hrg * 2;
        let diskon = totalNormal * 0.30;
        let final = totalNormal - diskon;
        document.getElementById('previewTotal').innerHTML = `Estimasi Total (-30%): <b>Rp ${final.toLocaleString('id-ID')}</b>`;
    } else {
        document.getElementById('previewTotal').innerHTML = `Estimasi Total (-30%): Rp 0`;
    }
}

// Kirim format pesanan ke WhatsApp
document.getElementById('formOrderTix').addEventListener('submit', function(e) {
    e.preventDefault();

    let film = document.getElementById('namaFilm').value;
    let tgl = document.getElementById('tglNonton').value;
    let kota = document.getElementById('kota').value;
    let cgv = document.getElementById('namaCgv').value;
    let jam = document.getElementById('jamTayang').value;
    let kursi = document.getElementById('kursi').value;
    let jml = document.getElementById('jumlahTiket').value;
    let hrg = document.getElementById('hargaNormal').value;

    let totalNormal = hrg * 2;
    let final = totalNormal - (totalNormal * 0.30);

    let teksWA = `🕸️ *OPEN PRE ORDER TIKET 15 - 31 AGUSTUS 2026* 🕸️\n\n` +
                 `Silahkan Isi format untuk order tiket⬇️\n` +
                 `Nama film : ${film}\n` +
                 `Tgl nonton : ${tgl}\n` +
                 `Kota : ${kota}\n` +
                 `Nama Cgv : ${cgv}\n` +
                 `Jam tayang : ${jam}\n` +
                 `Kursi : ${kursi}\n` +
                 `Jumlah tiket : ${jml}\n` +
                 `Harga normal : Rp ${Number(hrg).toLocaleString('id-ID')}\n` +
                 `*Estimasi Total Bayar (-30%): Rp ${final.toLocaleString('id-ID')}*`;

    let url = `https://api.whatsapp.com/send?phone=${nomorAdmin}&text=` + encodeURIComponent(teksWA);
    window.open(url, '_blank');
});
