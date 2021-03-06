const $items = document.querySelector('.features-slider__box-items');
const $options = document.querySelectorAll('.features-slider__option');
const $barra = document.querySelectorAll('.features-slider__barra');
$items.addEventListener('click', e =>{
 console.log(e.target.id)
    $options.forEach((element,index) => {
        if(index == e.target.id){
            element.classList.add('features-slider__option--active');
        }else{
            element.classList.remove('features-slider__option--active');
        }
    });
    $barra.forEach((element,index)=> {
        if(index == e.target.id){
            element.classList.add('features-slider__barra--active');
        }else{
            element.classList.remove('features-slider__barra--active');
        }
    });
})

function validEmail(){
    const $inputEmail = document.getElementById('email'),
          $iconEmail = document.getElementById('icon-email'),
          $botonEmail = document.getElementById('btn-contact');

    const expresion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    
    const validInput = ()=>{
        
        if(expresion.test($inputEmail.value)){
            $iconEmail.setAttribute('src','images/comprobar.svg');
            $inputEmail.classList.remove('publicity__form-email--error');
        }else{
            $iconEmail.setAttribute('src','images/icon-error.svg');
            $inputEmail.classList.add('publicity__form-email--error');
        }
    }
    $inputEmail.addEventListener('keyup',validInput);
}

validEmail();


let aux = true;
function showMenu(){
    const menu = document.querySelector('.main-menu');
    const logo = document.querySelector('.hero__logo');
    if(aux){
        menu.classList.add('main-menu--open');
        boton.setAttribute('src','images/icon-close.svg');
        logo.setAttribute('src','images/logo-bookmarkf.svg');
        aux = false;
    }else{
        menu.classList.remove('main-menu--open');
        boton.setAttribute('src','images/icon-hamburger.svg');
        logo.setAttribute('src','images/logo-bookmark.svg');
        aux = true;
    }
}
const boton = document.querySelector('.menu-bar__icon');
boton.addEventListener('click',showMenu);