
function menu(){
    const sidenavbar = document.querySelector('.side-navbar');
    sidenavbar.classList.add('side-navbar-active'); 
}

function remove(){
    const sidenavbar = document.querySelector('.side-navbar');
    sidenavbar.classList.remove('side-navbar-active');
}



const hearts = document.querySelectorAll('.heart');
hearts.forEach(function(heart){
     heart.addEventListener('click',function(){
           heart.classList.toggle('img-active');
     });
});


const arrowup = document.querySelector('.arrow-up');
const imgslider = document.querySelector('.image-slider-holder img')

 
arrowup.addEventListener('click',function(){
   
});
