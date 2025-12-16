function kirimWA(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const nik = document.getElementById("nik").value;
  const tanggal = document.getElementById("tanggal_lahir").value;
  const alamat = document.getElementById("alamat").value;
  const wa = document.getElementById("wa").value;
  const status = document.getElementById("status").value;

  const nomorPanitia = "62895365952208" // pastikan benar

  const pesan =
`PENDAFTARAN PASARAN RAMADHAN
---------------------------
Nama          : ${nama}
NIK           : ${nik}
Tanggal Lahir : ${tanggal}
Alamat        : ${alamat}
No WA         : ${wa}
Status        : ${status}

Mohon konfirmasi pendaftaran.`;

  const url = "https://wa.me/" + nomorPanitia + "?text=" + encodeURIComponent(pesan);
  window.open(url, "_blank");
}

