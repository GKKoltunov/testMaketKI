const burgerOpenBTN = document.getElementById("burger-button");
const burgerMenu = document.getElementById('burger');
const closeBurgerBTN = document.getElementById('close');
const popUp = document.getElementById('pop-up');
const openPopUps=document.getElementsByClassName("openModal");
const closePopUp=document.getElementById("closeModal")

function openBurger(){
    burgerMenu.style.display='block'
    burgerOpenBTN.style.display ='none';
    closeBurgerBTN.style.display="block"
}

function closeBurger(){
    burgerMenu.style.display='none'
    burgerOpenBTN.style.display ='flex';
    closeBurgerBTN.style.display="none"
}

function openModal(){
    popUp.style.display="block"
}

for( const openPopUp of openPopUps  ){
    openPopUp.addEventListener('click', openModal)
}

function closeModal(){
    popUp.style.display = 'none'
}

burgerOpenBTN.addEventListener('click', openBurger);
closeBurgerBTN.addEventListener("click", closeBurger)
closePopUp.addEventListener("click", closeModal)

