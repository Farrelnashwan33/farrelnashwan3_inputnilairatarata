function hitungRataRata() {
    // Mengambil nilai dari input
    let nilaiMatematika = parseFloat(document.getElementById("nilaiMatematika").value);
    let nilaiBahasaIndonesia = parseFloat(document.getElementById("nilaiBahasaIndonesia").value);
    let nilaiIPA = parseFloat(document.getElementById("nilaiIPA").value);

    // Validasi input
    if (isNaN(nilaiMatematika) || isNaN(nilaiBahasaIndonesia) || isNaN(nilaiIPA)) {
        alert("Masukkan nilai yang valid untuk semua mata pelajaran!");
        return;
    }

    // Menghitung rata-rata
    let rataRata = (nilaiMatematika + nilaiBahasaIndonesia + nilaiIPA) / 3;

    // Menentukan grade
    let grade;
    if (rataRata >= 85) {
        grade = "A";
    } else if (rataRata >= 70) {
        grade = "B";
    } else if (rataRata >= 55) {
        grade = "C";
    } else if (rataRata >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Menampilkan hasil rata-rata dan grade
    document.getElementById("hasilRataRata").innerHTML = "Nilai Rata-rata: " + rataRata.toFixed(2);
    document.getElementById("hasilKeterangan").innerHTML = "Grade: " + grade;
}