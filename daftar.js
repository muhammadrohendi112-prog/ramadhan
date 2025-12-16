
function kirimWA(e) {
  e.preventDefault(); // supaya form tidak reload

  const nama   = document.getElementById("nama").value;
  const alamat = document.getElementById("alamat").value;
  const wa     = document.getElementById("wa").value;
  const usia   = document.getElementById("usia").value;
  const status = document.getElementById("status").value;

  const nomorPanitia = "62895365952208"

  const pesan =
`PENDAFTARAN PASARAN RAMADHAN
---------------------------
Nama   : ${nama}
Alamat : ${alamat}
No WA  : ${wa}
Usia   : ${usia}
Status : ${status}

Mohon konfirmasi pendaftaran.`;

  const url = "https://wa.me/" + nomorPanitia + "?text=" + encodeURIComponent(pesan);
  window.open(url, "_blank");
}
