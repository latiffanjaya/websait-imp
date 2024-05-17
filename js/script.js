// Toggle class active
const navbarNav =document.querySelector('.navbar-nav');
// ketika hamberger nemu di klik
document.querySelector('#hamburger-menu').onclink =()=>{
    navbarNav.classList.toggle('active');
};
 
//klik di luar sideber untuk menghilangkan nav
const hamberger= document.querySelector('hamberger-menu');

document.addEventListener('click',function(e){
if (!hamberger.contasins(e.target) && !navbarNav.contasins(e.target)) {
navbarNav.classList.remove ('active');
}
});  