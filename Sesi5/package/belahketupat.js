let hitungLuasBelahKetupat = (diagonal1, diagonal2) => {
    return 0.5 * diagonal1 * diagonal2;
  };
  
  let kelilingBelahKetupat = (sisi) => {
    return 4 * sisi;
  };
  
  let informasiBelahKetupat = () => {
    return "Belah ketupat memiliki empat sisi yang sama panjang.";
  };
  
  module.exports = {hitungLuasBelahKetupat, kelilingBelahKetupat, informasiBelahKetupat};
  