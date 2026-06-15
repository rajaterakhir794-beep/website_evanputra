document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("mainForm");
    const outputDiv = document.getElementById("output");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const nama = document.getElementById("inputNama").value;
        const alamat = document.getElementById("inputAlamat").value;
        const tempatLahir = document.getElementById("inputTempat").value;
        const tanggalLahir = document.getElementById("inputTanggal").value;
        const nomorHP = document.getElementById("inputHP").value;
        const email = document.getElementById("inputEmail").value;
        const agama = document.getElementById("inputAgama").value;

        const jkRadio = document.querySelector('input[name="jk"]:checked');
        const jenisKelamin = jkRadio ? jkRadio.value : "-";

        const hobiCheckboxes = document.querySelectorAll('input[name="hobi"]:checked');
        let daftarHobi = [];

        hobiCheckboxes.forEach(function (cb) {
            daftarHobi.push(cb.value);
        });

        const hobiSelesai = daftarHobi.length > 0 ? daftarHobi.join(", ") : "-";

        if (
            outputDiv.querySelector("p") &&
            outputDiv.querySelector("p").innerText === "Belum ada data yang dikirim."
        ) {
            outputDiv.innerHTML = "";
        }

        const cardBaru = document.createElement("div");

        cardBaru.style.backgroundColor = "#ffffff";
        cardBaru.style.border = "1px solid #cbd5e1";
        cardBaru.style.borderRadius = "8px";
        cardBaru.style.padding = "15px";
        cardBaru.style.marginBottom = "15px";
        cardBaru.style.textAlign = "left";
        cardBaru.style.boxShadow = "0 2px 5px rgba(0,0,0,0.05)";

        cardBaru.innerHTML = `
            <h4 style="color: #1e3c72; margin-bottom: 8px;">
                Biodata dari: ${nama}
            </h4>
            <p><b>Alamat:</b> ${alamat}</p>
            <p><b>TTL:</b> ${tempatLahir}, ${tanggalLahir}</p>
            <p><b>No HP:</b> ${nomorHP}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Jenis Kelamin:</b> ${jenisKelamin}</p>
            <p><b>Agama:</b> ${agama}</p>
            <p><b>Hobi:</b> ${hobiSelesai}</p>
        `;

        outputDiv.appendChild(cardBaru);

        alert("Biodata berhasil dikirim!");

        form.reset();

        cardBaru.scrollIntoView({
            behavior: "smooth"
        });

    });

});