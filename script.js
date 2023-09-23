// let i =0;
// function tampil(konten) {
//     i++;
//     konten.innerHTML ='JavaScript';
//     document.querySelector('#aku').append(` diklik sebanyak ${i}x`); // sebenarnya bisa pake konten
// }

function tampil() {
    //memeriksa array img
    // console.log(document.querySelectorAll('img')); //fungsi querySelctorAll adalah untuk menunjuk semua elemen img yang sama dimana nanti akan membentuk sebuah array sesuai urutan elemen img tersebut di html

    //membuat random untuk index
    min = Math.ceil(0);
    max = Math.floor(2);

    let n = Math.floor(Math.random()* (max - min +1));
    console.log(n);
    document.querySelectorAll('img')[n].style.visibility='visible';

}