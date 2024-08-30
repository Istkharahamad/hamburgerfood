const humburgerIcon=document.querySelector('.hamburger-menu-icon')
const headerContainer=document.querySelector('.header-container')
const closeIcon=document.querySelector('.close-icon')

const mainContainer=document.querySelector('.main-container')
const goToTop=document.querySelector('h3')

humburgerIcon.addEventListener('click',()=>{
    
    headerContainer.classList.add('Menu-open')
})

closeIcon.addEventListener('click',()=>{
    headerContainer.classList.remove('Menu-open')
})

goToTop.addEventListener('click', () => {
    // Scroll the mainContainer to the top
    mainContainer.scrollTo(0,0);
});