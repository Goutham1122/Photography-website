const menuHamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const h1 = document.querySelector(".hide-on-small");
 var counter=1;
setInterval(function(){
    document.getElementById('radio' +counter).checked=true;
    counter++;
    if(counter>4){
        counter=1;
    }
},2000)

    menuHamburger.addEventListener('click',()=> {
        navLinks.classList.toggle('mobile-menu')
    })

    menuHamburger.addEventListener('click',()=>{
        h1.classList.toggle('hide-on-smalls')
    })

  
