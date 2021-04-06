
   
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
  const cartbtn = document.querySelectorAll('.cartbtn');
  const notify = document.querySelector('.cartnotify');
  

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




//product info

let product = [

  {
    name: 'nike blazer GRT',
    brand: 'nike',
    price: 4500,
    incart: 0
  },


  {
   name: 'adidas superstar',
   brand: 'adidas',
   price: 5200,
   incart: 0
 },


 {
   name: 'adidas gaziel',
   brand: 'adidas',
   price: 3200,
   incart: 0
 },


 {
   name: 'adidas NMD',
   brand: 'adidas',
   price: 3500,
   incart: 0
 },


 {
  name: 'adidas zamba',
  brand: 'adidas',
  price: 2200,
  incart: 0
},


{
  name: 'Adidas Yeezy',
  brand: 'adidas',
  price: 3700,
  incart: 0
},


{
  name: 'nike dunk 121',
  brand: 'adidas',
  price: 4200,
  incart: 0
},





 {
   name: 'DC double-h',
   brand: 'DC',
   price: 5400,
   incart: 0
 },

 {
   name: 'DC double-h',
   brand: 'DC',
   price: 5400,
   incart: 0
 },

 {
   name: 'DC double-h',
   brand: 'DC',
   price: 5400,
   incart: 0
 },

 {
   name: 'DC double-h',
   brand: 'DC',
   price: 5400,
   incart: 0
 },

 {
   name: 'DC double-h',
   brand: 'DC',
   price: 5400,
   incart: 0
 },

 {
   name: 'DC double-h',
   brand: 'DC',
   price: 5400,
   incart: 0
 },

 {
   name: 'DC double-h',
   brand: 'DC',
   price: 5400,
   incart: 0
 },

 {
   name: 'DC double-h',
   brand: 'DC',
   price: 5400,
   incart: 0
 },

 {
  name: 'DC double-h',
  brand: 'DC',
  price: 5400,
  incart: 0
},


];


cartbtn.forEach(function(btn){
  btn.addEventListener('click',()=>{
    cartcounter(product);
    
  });
});



 

 
  function cartcounter(product){

  
    let productnumbers = localStorage.getItem('cartcounter');
      productnumbers = parseInt(productnumbers);
     
       if(productnumbers){
        localStorage.setItem('cartcounter',productnumbers + 1);
        notify.textContent = productnumbers + 1;

       }else{

        localStorage.setItem('cartcounter',1);
        notify.textContent = productnumbers = 1;

       }

    

    
  }


 function onloadcartcounter(){
  let productnumbers = localStorage.getItem('cartcounter');
    if(productnumbers){
     
      notify.textContent = productnumbers;

    }
 };
 


 




  onloadcartcounter();
