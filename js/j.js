
/*******************************       section Portfolio (Filter)       *********************************************/ 

let mixerchoose = mixitup(".items-sell", { // ديف المينو الكبيره
  selectors: {
      target: '.all-itemm' // ديف كل ايتم
  },
  animation: {
      duration: 300
  }
});

/***********  default Items  ***********/

mixerchoose.filter(".all");


/*************************************   properities of active link   ************************************************/

const activeLink = document.querySelectorAll(".active-link");

function activeProduct(){
    activeLink.forEach(l => l.classList.remove("activeLinkkkk"));
    this.classList.add("activeLinkkkk")  ;  
}
activeLink.forEach(l=>l.addEventListener("click" , activeProduct) );
   



/*===========================================  Animation/delay  ===================================================*/

      const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{

          if(entry.isIntersecting){
            entry.target.classList.add("show-items");
          }
          else{
            entry.target.classList.remove("show-items");
          }
        });

      });

      const scrollScale = document.querySelectorAll(".scroll-scale");
      scrollScale.forEach((el)=>observer.observe(el));


      const scrollBottom = document.querySelectorAll(".scroll-bottom");
      scrollBottom.forEach((el)=>observer.observe(el));


      const scrollTop = document.querySelectorAll(".scroll-top");
      scrollTop.forEach((el)=>observer.observe(el));







      
const toggle = document.getElementById("toggle"),
closee  = document.getElementById("close"),
menu = document.querySelector(".menu");




if(toggle)
toggle.addEventListener("click" , ()=>{
  menu.classList.add("show__menu")
});
if(closee)
closee.addEventListener("click" , ()=>{
  menu.classList.remove("show__menu")
});



