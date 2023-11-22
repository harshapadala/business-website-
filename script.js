let navbar=document.querySelector('.navbar');
document.querySelector('#menubtn').onclick = ()=>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
let searchForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = ()=>{
    searchForm.classList.toggle('active');
}
let cartItem=document.querySelector('.cartItem-container');
document.querySelector('#cart-btn').onclick = ()=>{
    cartItem.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}