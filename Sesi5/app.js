let { hitungLuasSegitiga, kelilingSegitiga, informasiSegitiga } = require("./package/segitiga");
let { hitungLuasPersegi, kelilingPersegi, informasiPersegi } = require("./package/persegi");
let { hitungLuasJajarGenjang, kelilingJajarGenjang, informasiJajarGenjang } = require("./package/jajargenjang");
let { hitungLuasBelahKetupat, kelilingBelahKetupat, informasiBelahKetupat } = require("./package/belahketupat");

console.log(informasiSegitiga());
console.log(`Luas Segitiga: ${hitungLuasSegitiga(10, 5)} cm²`);
console.log(`Keliling Segitiga: ${kelilingSegitiga(5, 5, 8)} cm`);

console.log(informasiPersegi());
console.log(`Luas Persegi: ${hitungLuasPersegi(4)} cm²`);
console.log(`Keliling Persegi: ${kelilingPersegi(4)} cm`);

console.log(informasiJajarGenjang());
console.log(`Luas Jajar Genjang: ${hitungLuasJajarGenjang(8, 5)} cm²`);
console.log(`Keliling Jajar Genjang: ${kelilingJajarGenjang(8, 5)} cm`);

console.log(informasiBelahKetupat());
console.log(`Luas Belah Ketupat: ${hitungLuasBelahKetupat(10, 6)} cm²`);
console.log(`Keliling Belah Ketupat: ${kelilingBelahKetupat(4)} cm`);
