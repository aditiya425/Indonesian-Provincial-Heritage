// ========== TAMPILKAN SECTION ==========
function tampilkanSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.toggle('aktif', section.id === id);
  });

  document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
  const navLink = document.querySelector(`nav a[onclick*="${id}"]`);
  if (navLink) navLink.classList.add('active');
}

// ========== KETERANGAN GAMBAR ==========
function tampilkanKeterangan(element) {
  document.querySelectorAll('.keterangan').forEach(k => k.style.display = 'none');
  const keterangan = element.querySelector('.keterangan');
  if (keterangan) keterangan.style.display = 'block';
}

// ========== FORM ULASAN ==========
document.getElementById("form-ulasan")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const isi = document.getElementById("isi-ulasan").value.trim();

  if (nama && email && isi) {
    const ulasanBaru = document.createElement("p");
    ulasanBaru.innerHTML = `<strong>${nama}</strong> (${email}): "${isi}"`;

    document.getElementById("daftar-ulasan").appendChild(ulasanBaru);

    document.getElementById("nama").value = "";
    document.getElementById("email").value = "";
    document.getElementById("isi-ulasan").value = "";
  }
});

// ========== FILTER PROVINSI ==========
function filterProvinsi() {
  const provinsiDipilih = document.getElementById("pilih-provinsi").value;
  document.querySelectorAll(".provinsi").forEach(provinsi => {
    provinsi.style.display =
      provinsiDipilih === "semua" || provinsi.dataset.provinsi === provinsiDipilih
        ? "block"
        : "none";
  });
}

// ========== DARK MODE ==========
function toggleTheme() {
  document.body.classList.toggle('dark');
}

// ========== BUDAYA ==========
function tampilkanBudaya(provinsi) {
  document.querySelectorAll('.konten-budaya').forEach(el => el.style.display = 'none');
  const elemen = document.getElementById('budaya-' + provinsi);
  if (elemen) elemen.style.display = 'block';
}

// ========== KULINER ==========
function tampilkanKuliner(provinsi) {
  document.querySelectorAll('.kuliner-provinsi').forEach(el => el.style.display = 'none');
  const konten = document.getElementById('kuliner-' + provinsi);
  if (konten) konten.style.display = 'block';
}

// ========== GALERI ==========
function tampilkanGaleri(provinsi) {
  document.querySelectorAll('.konten-galeri').forEach(el => el.style.display = 'none');
  const konten = document.getElementById('galeri-' + provinsi);
  if (konten) konten.style.display = 'block';
}

function tampilkanKisahsejarah(provinsi) {
  document.querySelectorAll('.kisahsejarah-provinsi').forEach(el => el.style.display = 'none');
  const konten = document.getElementById('kisahsejarah-' + provinsi);
  if (konten) konten.style.display = 'block';
}

function tampilkanKuliner(provinsiId) {
  // 1. Sembunyikan semua konten kuliner
  const semuaKonten = document.querySelectorAll('.konten-kuliner');
  semuaKonten.forEach(konten => konten.style.display = 'none');

  // 2. Tampilkan hanya konten provinsi yang dipilih
  const kontenTerpilih = document.getElementById('kuliner-' + provinsiId);
  if (kontenTerpilih) {
    kontenTerpilih.style.display = 'block';
  }
}

function tampilkanBudaya(provinsi) {
  document.querySelectorAll('.konten-budaya').forEach(el => el.style.display = 'none');
  const elemen = document.getElementById('budaya-' + provinsi);
  if (elemen) elemen.style.display = 'block';

  // 2. Tampilkan hanya konten provinsi yang dipilih
  const kontenTerpilih = document.getElementById('budaya-' + provinsiId);
  if (kontenTerpilih) {
    kontenTerpilih.style.display = 'block';
  }
}

// ========== TAMPILKAN SECTION ========== 
function tampilkanSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.toggle('aktif', section.id === id);
  });

  document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
  const navLink = document.querySelector(`nav a[onclick*="${id}"]`);
  if (navLink) navLink.classList.add('active');
}

// ========== KETERANGAN GAMBAR ========== 
function tampilkanKeterangan(element) {
  document.querySelectorAll('.keterangan').forEach(k => k.style.display = 'none');
  const keterangan = element.querySelector('.keterangan');
  if (keterangan) keterangan.style.display = 'block';
}

// ========== FORM ULASAN ========== 
document.getElementById("form-ulasan")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const isi = document.getElementById("isi-ulasan").value.trim();

  if (nama && email && isi) {
    const ulasanBaru = document.createElement("p");
    ulasanBaru.innerHTML = `<strong>${nama}</strong> (${email}): "${isi}"`;

    document.getElementById("daftar-ulasan").appendChild(ulasanBaru);

    document.getElementById("nama").value = "";
    document.getElementById("email").value = "";
    document.getElementById("isi-ulasan").value = "";
  }
});

// ========== FILTER PROVINSI ========== 
function filterProvinsi() {
  const provinsiDipilih = document.getElementById("pilih-provinsi").value;
  document.querySelectorAll(".provinsi").forEach(provinsi => {
    provinsi.style.display =
      provinsiDipilih === "semua" || provinsi.dataset.provinsi === provinsiDipilih
        ? "block"
        : "none";
  });
}

// ========== DARK MODE ========== 
function toggleTheme() {
  document.body.classList.toggle('dark');
}

// ========== BUDAYA ========== 
function tampilkanBudaya(provinsi) {
  document.querySelectorAll('.konten-budaya').forEach(el => el.style.display = 'none');
  const elemen = document.getElementById('budaya-' + provinsi);
  if (elemen) elemen.style.display = 'block';
}

// ========== KULINER ========== 
function tampilkanKuliner(provinsiId) {
  const semuaKonten = document.querySelectorAll('.konten-kuliner');
  semuaKonten.forEach(konten => konten.style.display = 'none');

  const kontenTerpilih = document.getElementById('kuliner-' + provinsiId);
  if (kontenTerpilih) {
    kontenTerpilih.style.display = 'block';
  }
}

// ========== GALERI ========== 
function tampilkanGaleri(provinsi) {
  document.querySelectorAll('.konten-galeri').forEach(el => el.style.display = 'none');
  const konten = document.getElementById('galeri-' + provinsi);
  if (konten) konten.style.display = 'block';
}

// ========== KISAH SEJARAH ========== 
function tampilkanKisahsejarah(provinsi, event) {
  if (event) event.preventDefault();
  document.querySelectorAll('[id^="kisahsejarah-"]').forEach(function(item) {
    item.style.display = 'none';
  });
  const elemen = document.getElementById('kisahsejarah-' + provinsi);
  if (elemen) {
    elemen.style.display = 'block';
  }
}

window.addEventListener("load", function () {
    const target = document.querySelector(".beranda-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });


  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      // hapus class active dari semua link
      navLinks.forEach(l => l.classList.remove("active"));
      // tambahkan class active ke yang diklik
      this.classList.add("active");
    });
  });



