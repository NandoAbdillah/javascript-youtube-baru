// let i =0;
// function tampil(konten) {
//     i++;
//     konten.innerHTML ='JavaScript';
//     document.querySelector('#aku').append(` diklik sebanyak ${i}x`); // sebenarnya bisa pake konten
// }

function tampil() {
    //QuerySelector
    document.querySelector('h1').textContent='Belajar JavaScript';
    document.querySelector('.container').style.backgroundColor="red";
    document.querySelector('.container').style.color="white";
    document.querySelector('#p1').textContent='Belajar JavaScript untuk membuat web kita menjadi lebih interaktif';
    document.querySelector('#p1').style.fontStyle='italic';
}