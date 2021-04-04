
   
    // declarations

  const sidenavbar = document.querySelector('.side-navbar');
  const menuimg  = document.querySelector('.menu-img');
  const hamremover  = document.querySelector('#ham-remover');
  const cart = document.querySelector('.cart');
  const cartordercontainer = document.querySelector('.cart-order-container');
  const arrowup = document.querySelector('.arrow-up');
  const arrowdown = document.querySelector('.arrow-down');
  const imgslider = document.querySelectorAll('.image-slider-holder img')
  const slidercontainer = document.querySelector('.image-slider-holder')
  

 //hidden navigation eventlistiner
   menuimg.addEventListener('click',()=>{
      sidenavbar.classList.add('side-navbar-active'); 
   });
    
    
   hamremover.addEventListener('click',()=>{
    sidenavbar.classList.remove('side-navbar-active');
   });


   //cart order container

  cart.addEventListener('click',()=>{
    cartordercontainer.classList.toggle('cart-active');
    cart.style.transform="scale(1.2)";

  });
      


const hearts = document.querySelectorAll('.heart');  //loop through heart image with eventlistner
hearts.forEach(function(heart){
     heart.addEventListener('click',function(){
           heart.classList.toggle('img-active');
     });
});


let counter = 0;
const size = imgslider[0].clientWidth;
slidercontainer.style.transform = 'translateY(' + (- size * counter ) + 'px';



   //arrow eventlistener

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


// add to card script


const cartbtn = document.querySelectorAll('.cartbtn');

 for(let i = 0; i < cartbtn.length; i++){
    cartbtn[i].addEventListener('click',()=>{
         collector();
    });
 }

