const pos = document.documentElement;

pos.addEventListener('mousemove', e => {
    pos.style.setProperty('--x', e.clientX + 'px');
    pos.style.setProperty('--y', e.clientY + 'px');
})

const slider = document.querySelector('#slider');
const sliderInd = document.querySelectorAll('.slider-test');
let contador = 1;
let tamañoWidth = sliderInd[0].clientWidth;
let intervalo = 3000;



window.addEventListener('resize', function(){
    let tamañoWidth = sliderInd[0].clientWidth;
})






setInterval(function tiempo(){
    slides();
}, intervalo);


function slides(){
    slider.style.transform = "translate(" + (- tamañoWidth * contador) + 'px)';
    slider.style.transition = 'transform 1s';
    contador++;

    if(contador === sliderInd.length){
        contador = 0;

        setTimeout(function(){
            slider.style.transform = 'translate(0px)';
            slider.style.transition = 'transform 0s';
        }, intervalo)
    }

  
}



/*GALERIA */
const images = document.querySelectorAll('.img');
const containerImages = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');


images.forEach(image =>{
    image.addEventListener('click', ()=>{
        addImage(image.getAttribute('src'))
    })
})


const addImage = (srcImage)=>{
    containerImages.classList.toggle('move')
    imageContainer.src = srcImage;
}

containerImages.addEventListener('click', ()=>{
    containerImages.classList.toggle('move');
})