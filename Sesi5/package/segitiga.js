let hitungLuasSegitiga = (alas, tinggi) => {
    return 0.5 * alas * tinggi;
  };
  
  let kelilingSegitiga = (sisi1, sisi2, sisi3) => {
    return sisi1 + sisi2 + sisi3;
  };
  
  let informasiSegitiga = () => {
    return "Segitiga memiliki alas dan tinggi untuk menghitung luas.";
  };
  
  module.exports = {hitungLuasSegitiga, kelilingSegitiga, informasiSegitiga};
  