// (No surrounding <script> tags in a .js file)
// ===============================
// SMARTBIN AI - JavaScript
// Folder: images/ dan video/
// ===============================

// Tombol Demo Video
const tombol = document.getElementById("demo");
const videoContainer = document.getElementById("videoDemo");
const video = document.getElementById("demoVideo");

if (tombol && videoContainer && video) {
    tombol.addEventListener("click", function () {
        if (videoContainer.style.display === "none" || videoContainer.style.display === "") {
            videoContainer.style.display = "block";
            video.load();
            video.play().catch(function () {
                alert("Video tidak dapat diputar.\nPastikan file demo.mp4 ada di folder video/");
            });
        } else {
            videoContainer.style.display = "none";
            video.pause();
        }
    });
}

// Counter Angka
function hitung(id, target) {
    const el = document.getElementById(id);
    if (!el) return;

    let angka = 0;
    const interval = setInterval(function () {
        angka++;
        el.innerHTML = angka.toLocaleString("id-ID");

        if (angka >= target) {
            clearInterval(interval);
        }
    }, 10);
}

hitung("user", 500);
hitung("trash", 1500);
hitung("city", 25);

// Form Kontak
const form = document.querySelector("#kontak form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Terima kasih! Pesan Anda berhasil dikirim.");
        form.reset();
    });
}

// Navbar berubah warna saat scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (!header) return;

    if (window.scrollY > 50) {
        header.style.background = "#004d40";
    } else {
        header.style.background = "#0A2540";
    }
});

// Zoom gambar galeri (klik gambar)
const gallery = document.querySelectorAll(".gallery img");

gallery.forEach(function (img) {
    img.addEventListener("click", function () {
        const overlay = document.createElement("div");
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.85);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            cursor: pointer;
        `;

        const image = document.createElement("img");
        image.src = this.src;
        image.alt = this.alt;
        image.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        `;

        overlay.appendChild(image);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", function () {
            overlay.remove();
        });
    });
});

// Animasi fade-in saat halaman dibuka
window.addEventListener("load", function () {
    if (!document.body) return;
    document.body.style.opacity = "0";
    setTimeout(function () {
        document.body.style.transition = "opacity 1s ease";
        document.body.style.opacity = "1";
    }, 100);
});

const artikel = {

    ai: {
        judul: "AI Waste Detection",
        isi: `
            <p>
                SMARTBIN AI menggunakan kamera dan Computer Vision
                untuk mengenali jenis sampah yang masuk.
            </p>

            <p>
                Sistem akan mengambil gambar sampah kemudian
                menganalisisnya untuk menentukan kategori sampah.
            </p>

            <p>
                <b>Artikel ini bisa kamu ubah sendiri.</b>
            </p>
        `
    },

    pemilahan: {
        judul: "Pemilahan Otomatis",
        isi: `
            <p>
                SMARTBIN AI dapat mengarahkan sampah ke tempat
                yang sesuai berdasarkan hasil klasifikasi AI.
            </p>

            <p>
                Servo menggerakkan papan pemilah ke kiri atau
                ke kanan sesuai kategori sampah.
            </p>
        `
    },

    monitoring: {
        judul: "Smart Monitoring",
        isi: `
            <p>
                SMARTBIN AI menggunakan sensor untuk memantau
                kondisi dan kapasitas tempat sampah.
            </p>

            <p>
                Data tersebut dapat ditampilkan pada sistem
                monitoring berbasis website.
            </p>
        `
    },

    notifikasi: {
        judul: "Notifikasi Full-bin",
        isi: `
            <p>
                Ketika kapasitas tempat sampah sudah penuh,
                sistem dapat memberikan informasi kepada pengguna
                atau pengelola.
            </p>
        `
    },

    iot: {
        judul: "Integrasi IoT",
        isi: `
            <p>
                SMARTBIN AI dapat terhubung dengan internet
                sehingga data dari perangkat dapat dikirim
                dan dipantau melalui sistem digital.
            </p>
        `
    }

};


function bukaArtikel(nama) {

    const data = artikel[nama];
    if (!data) {
        console.warn("Artikel tidak ditemukan:", nama);
        return;
    }

    const judulEl = document.getElementById("judulArtikel");
    const isiEl = document.getElementById("isiArtikel");
    const modalEl = document.getElementById("artikelModal");

    if (judulEl) judulEl.innerHTML = data.judul;
    if (isiEl) isiEl.innerHTML = data.isi;
    if (modalEl) modalEl.style.display = "flex";

}


function tutupArtikel() {

    const modalEl = document.getElementById("artikelModal");
    if (modalEl) modalEl.style.display = "none";

}


/* Klik area luar artikel untuk menutup */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("artikelModal");

    if (!modal) return;

    if (event.target === modal) {
        tutupArtikel();
    }

});