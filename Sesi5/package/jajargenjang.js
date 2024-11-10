let hitungLuasJajarGenjang = (alas, tinggi) => {
    return alas * tinggi;
  };
  
  let kelilingJajarGenjang = (sisi1, sisi2) => {
    return 2 * (sisi1 + sisi2);
  };
  
  let informasiJajarGenjang = () => {
    return "Jajar genjang memiliki dua pasang sisi yang sejajar.";
  };
  
  module.exports = {hitungLuasJajarGenjang, kelilingJajarGenjang, informasiJajarGenjang};
  