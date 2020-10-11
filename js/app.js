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

