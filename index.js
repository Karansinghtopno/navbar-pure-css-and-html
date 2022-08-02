const mobile_nav = document.querySelector(".mobile-navbar-btn");
let nav_header= document.querySelector(".header");


mobile_nav.addEventListener('click',()=>toggleNavbar());

const toggleNavbar=()=>{
    // alert("toggle selected")
    nav_header.classList.toggle("active");

}