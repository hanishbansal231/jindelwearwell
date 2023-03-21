const menuBtn = document.getElementById('menu-btn');

const menuShow = () =>{
    let links = document.querySelector('.links');
    links.classList.toggle('active');
};
menuBtn.addEventListener('click',menuShow);

