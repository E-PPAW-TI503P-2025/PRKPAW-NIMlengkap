exports.testConnection = (req, res) => {
  const { message, deviceId } = req.body;
  console.log(`📡 [IOT] Pesan dari ${deviceId}: ${message}`);
  res.status(200).json({ status: "ok", reply: "Server menerima koneksi!" });
};

exports.receiveSensorData = (req, res) => {
  const { suhu, kelembaban } = req.body;

  console.log(`🔥 [LOG SENSOR] Suhu: ${suhu}°C | Kelembaban: ${kelembaban}%`);

  res.status(200).json({ status: "diterima", message: "Data sensor masuk!" });
};
