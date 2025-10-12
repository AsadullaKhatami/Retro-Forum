// console.log("hello word");

const menuBar = document.querySelector('#menuBar');
const bar = document.querySelector('#bar');
const openNav = document.getElementById('open-nav');


menuBar.addEventListener('click', () => {

    if (openNav.style.display === 'flex') {
        openNav.style.display = 'none';
    }else{
        openNav.style.display = 'flex';
    }
});