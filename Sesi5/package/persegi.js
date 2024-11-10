let hitungLuasPersegi = (sisi) => {
    return sisi * sisi;
  };
  
  let kelilingPersegi = (sisi) => {
    return 4 * sisi;
  };
  
  let informasiPersegi = () => {
    return "Persegi memiliki empat sisi yang sama panjang.";
  };
  
  module.exports = {hitungLuasPersegi, kelilingPersegi, informasiPersegi};
  