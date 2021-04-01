
//onclick events

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
const arrowdown = document.querySelector('.arrow-down');
const imgslider = document.querySelectorAll('.image-slider-holder img')
const slidercontainer = document.querySelector('.image-slider-holder')
const firstclone = document.querySelector('.firstclone');

let counter = 0;
const size = imgslider[0].clientWidth;
slidercontainer.style.transform = 'translateY(' + (- size * counter ) + 'px';



   //arrow eventlisner

arrowup.addEventListener('click',()=>{  
    counter++;
    slidercontainer.style.transform = 'translateY(' + (- size * counter ) + 'px';
    slidercontainer.classList.add('imagesliderholder-active')
    arrowdown.style.display = "block";
    if(counter == 6){
        arrowup.style.display = "none";
    }else{
        arrowup.style.display = "block";
    }
});

arrowdown.addEventListener('click',()=>{
    counter--;
    slidercontainer.style.transform = 'translateY(' + (- size * counter ) + 'px';
    slidercontainer.classList.add('imagesliderholder-active')
    arrowup.style.display = "block";  
      if(counter == 0){
        arrowdown.style.display = "none";
      }else{
        arrowdown.style.display = "block";
      }
});

