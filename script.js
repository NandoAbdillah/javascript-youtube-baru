// let i =0;
// function tampil(konten) {
//     i++;
//     konten.innerHTML ='JavaScript';
//     document.querySelector('#aku').append(` diklik sebanyak ${i}x`); // sebenarnya bisa pake konten
// }

// function tampil() {
//     //memeriksa array img
//     // console.log(document.querySelectorAll('img')); //fungsi querySelctorAll adalah untuk menunjuk semua elemen img yang sama dimana nanti akan membentuk sebuah array sesuai urutan elemen img tersebut di html

//     //membuat random untuk index
//     min = Math.ceil(0);
//     max = Math.floor(2);

//     let n = Math.floor(Math.random()* (max - min +1));
//     console.log(n);
//     document.querySelectorAll('img')[n].style.visibility='visible';

// }

function tampil() {
    alert( 'Nama Anda : ' +
    document.querySelector('#inputNama').value
    );
    document.querySelector('#tempelNama').value= document.querySelector('#inputNama').value;
    document.querySelector('#para').textContent= document.querySelector('#inputNama').value;
}

// btn.onclick = tampil;
// btn.onclick = ()=> alert('JavaScript');
// btn.addEventListener('mouseover',tampil);
// btn.addEventListener('mouseover', ()=>{
//     alert('this is mouseover event');
// });

// btn.onclick = ()=> {
//     let menu = document.querySelector('ul');
//     menu.removeChild(menu.children[0]);
// }

btn.onclick = ()=>{
    const nama = document.querySelector('#inputNama').value;
    const judul = document.querySelector('h1');

    let tampil = `Belajar`;
    judul.innerHTML= `${tampil} ${nama}`;
}
