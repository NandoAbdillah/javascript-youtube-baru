let i =0;
function tampil(konten) {
    i++;
    konten.innerHTML ='JavaScript';
    document.querySelector('#aku').append(` diklik sebanyak ${i}x`); // sebenarnya bisa pake konten
}