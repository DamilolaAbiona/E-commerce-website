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
// 2. Display products based on search

const search =  document.querySelector(".search_product");
const lment = document.createElement("span");
lment.textContent = "Item Not found"
lment.classList.add("found");
lment.style.fontSize = "50px"
lment.style.textAlign = "center"

const marzen = document.getElementById("marzen").appendChild(lment);
find = document.querySelector(".found")
search.addEventListener('input', ()=>{

const catalogue = document.querySelectorAll('.catalogue')
// const find  = document.querySelector('.find')

const  blank = [];    
catalogue.forEach(element =>{
        element.style.display = "none"
      
        product= search.value
        productEl = element.textContent.toUpperCase();
        elProduct = element.textContent.toLowerCase();
        

        if (productEl.includes(product) || elProduct.includes(product) || element.textContent.includes(product)){
            element.style.display = "block"
            // blank.push(element)
             
            //  find.style.display = "none"
            
           

        }

    })
    // if (blank.length == 0) {
    //   find.style.display = "block"
      
    // }else{
    //   find.style.display = "none"
    // }

 });
