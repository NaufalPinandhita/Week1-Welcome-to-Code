// // # Conditional Statement | Part 1

// // oke kawan-kawan, disini kalian akan belajar yang namanya Conditional Statement, Logical Operator, dan Comparisons Operator.

// // singkatnya sih disini belajar if else, namun nanti ada soal yang dimana kamu harus belajar cara membaca dokumentasi dan cara belajar mandiri, yaitu soal bertema Switch hehe.

// // yak Buka aja W3school dan kerjakan soal soal berikut

// // ## Soal 1:
// ```js
// // Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// // Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// // yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// // bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// // bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// // Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// // Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// // peran serta mengeluarkan respon sesuai isi variabel tersebut.
// //ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
// //halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
// //halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
// //halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
// //tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
// //tips belajar penggunaan `` (backtick) pada javascript agar
// //mudah dalam memasukan variabel ke dalam string
// //tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// // algoritma
// //isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

let nama = "Estu", peran = "";

//code disini gunakan console.log untuk outputnya

if (!nama){
    console.log(`Nama wajib diisi!`);
} else if(!peran) {
    console.log(`Silahkan pilih peran Anda terlebih dahulu!`);
} else if (peran === 'Ksatria') {
    console.log(`Halo Ksatria ${nama}, Kamu dapat menggunakan pedang untuk bertarung!`);
} else if (peran === 'Tabib') {
    console.log(`Halo Tabib ${nama}, Kamu dapat menyembuhkan temanmu yang terluka!`);
} else if (peran === 'Penyihir'){
    console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu`);
} else {
    console.log(`Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`)
}

// // ## Soal 2
// // ```js
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 17; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 3; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2025; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini

switch (bulan){
    case 1:
        bulan = 'Januari';
        break;
    case 2:
        bulan = 'Februari';
        break;
    case 3:
        bulan = 'Maret';
        break;
    case 4:
        bulan = 'April';
        break;
    case 5:
        bulan = 'Mei';
        break;
    case 6:
        bulan = 'Juni';
        break;
    case 7:
        bulan = 'Juli';
        break;
    case 8:
        bulan = 'Agustus';
        break;
    case 9:
        bulan = 'September';
        break;
    case 10:
        bulan = 'OKtober';
        break;
    case 11:
        bulan = 'November';
        break;
    case 12:
        bulan = 'Desember';
        break;
}
console.log(tanggal, bulan, tahun)
// // video biar rada paham lah, soalnya ini awal kepahitan ngoding wkwk:

// // [Video tutor by Harkon](https://youtu.be/-YlMePibR6Y)

// // *sisanya kalian googling aja ya ges yak*
