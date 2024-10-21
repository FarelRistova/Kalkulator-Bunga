document.getElementById('calculatorForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form melakukan submit ke server

    // Ambil nilai input
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseFloat(document.getElementById('time').value);
    const frequency = parseFloat(document.getElementById('frequency').value);
    const type = document.getElementById('type').value;

    let result = 0;
    let bunga = principal * rate * time;

    // Perhitungan bunga berdasarkan jenis yang dipilih
    if (type === 'simple') {
        // Bunga Tunggal
        result = principal * (1 + (rate * time));
    } else if (type === 'compound') {
        // Bunga Majemuk
        result = principal * Math.pow((1 + rate / frequency), frequency * time);
    } else if (type === 'annuity') {
        // Anuitas
        const rate_per_period = rate / frequency;
        const n = frequency * time;
        result = principal * (rate_per_period / (1 - Math.pow((1 + rate_per_period), -n)));
    }

    // Tampilkan hasilnya di halaman
    document.getElementById('bungaResult').innerText = `Bunga: ${bunga.toFixed(2)}`;
    document.getElementById('hasilResult').innerText = `Hasil: ${result.toFixed(2)}`;
});
