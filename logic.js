function clicker(){
    const response = document.getElementsByClassName('ultra')[0];
    response.classList.toggle('nav-active');
}
const hamburger = document.getElementsByClassName('ham');

hamburger[0].addEventListener('click', clicker);
