// ==================================
// 1. Toggle humbugger menu;
// By default, the .link tag should 
// display none.
const links = document.querySelector('.link');
const hamburger = document.querySelector('.hamburger');
const displayLink = () =>{
    // links.style.display = 'none'
   
}
displayLink();
hamburger.addEventListener('click', ()=>{
    hamburger.style.display = 'block'
   if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
     
});
// ==================================
// 2. Display products based on 

const search =  document.querySelector(".search_product");
search.addEventListener('input', ()=>{

const catalogue = document.querySelectorAll('.catalogue')
const find  = document.querySelector('.find')

    catalogue.forEach(element =>{
        element.style.display = "none"
      
       
        product= search.value
        productEl = element.textContent.toUpperCase();
        elProduct = element.textContent.toLowerCase();

        if (productEl.includes(product) || elProduct.includes(product) || element.textContent.includes(product)){
            element.style.display = "block"
             find.textContent = " ";
            //  find.style.display = "none"
            
           

        }else{
           element.style.display = "none"
        find.textContent = "Item Not Found"
        find.style.color ="white"
         find.style.backgroundColor ="red"
          find.style.fontSize ="50px"
       


        
        }

    })

 });
