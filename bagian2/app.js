var unknownData;
var makanan;
unknownData = 2;
unknownData = 'Nasi Padang';
// metode if else sederhana menjadi metode yang best practice
if (typeof unknownData === 'string') {
    makanan = unknownData;
    console.log("🚀 ~ makanan:", makanan);
    console.log("🚀 ~ typeof makanan:", typeof makanan);
    console.log('..........');
}
// menggunakan metode ternary, penggunaan jangka panjang kurang disarankan
// typeof unknownData === 'string' 
//     ? (
//         makanan = unknownData,
//         console.log("🚀 ~ makanan:", makanan),
//         console.log("🚀 ~ typeof makanan:", typeof makanan),
//         console.log('..........')
//     )
//     : null
// menggunakan metode short-circuiting, tidak termasuk best practice
// typeof unknownData === 'string' && (
//     makanan = unknownData,
//     console.log("🚀 ~ makanan:", makanan),
//     console.log("🚀 ~ typeof makanan:", typeof makanan),
//     console.log('..........')
// )
var errorHandling = function (message, code) {
    throw { message: message, errorCode: code };
};
errorHandling('Page Not Found', 404);
