// -----------------------------------slider-----------------------------------------------------------
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}






// ------------------------------------------------------------------------------------------------

let allData=[]



let innerDiv=document.getElementById("innerDiv")
 async function getData1() {
    let data =await fetch('https://dummyjson.com/products')
    let res= await data.json()

    allData=res.products
    allData.splice(10,15)
    console.log(allData);
    displayData()
    
  }

  async function getData2() {
    let data =await fetch('https://dummyjson.com/products')
    let res= await data.json()

    allData=res.products
    allData.splice(0,10)
    console.log(allData);
    displayData()
    
  }
  async function getData3() {
    let data =await fetch('https://dummyjson.com/products')
    let res= await data.json()

    allData=res.products
    allData.splice(0,20)
    console.log(allData);
    displayData()
    
  }

  


  function displayData() {
    let cartona='';
    for (let i = 0; i < allData.length; i++) {
      cartona+=`
      <div class="item-inner">
      <div class="over-lay" style="display: flex; justify-content: center;align-items: center;">
        <button onclick="increaseProduct(${i})" style="background-color: gray; color: white;padding: 10px;border-radius: 10px;font-size: 22px;" ><i style="margin: 0px 8px;" class="fa fa-cart-plus" aria-hidden="true"></i>Add To Card</button>
      </div>
      <div class='rate'>
      <img src="${allData[i].images[0]}" height="200px" alt=""><br>
      <div class='rating'>${allData[i].rating} <i style="font-size: 12px;" class="fa fa-star-half-o" aria-hidden="true"></i></div>
      </div>
      <h1>${allData[i].title}</h1>
      <h3>${allData[i].price} $</h3>
      <p>${allData[i].description}</p>
    </div>
      
      `
      
      // console.log(allData[i]);
    }

    innerDiv.innerHTML=cartona
  }

  let countCart =document.getElementById("count");
  
  let arr=[]
console.log(window.location);
 

  window.onload=function () {
    
    document.getElementById("top").setAttribute("checked","checked")
    getData1()
    
    if (localStorage.getItem("Count") === null && localStorage.getItem("cartProduct") === null) {
      counter = 0
      arr =[]
     
    }
    else
    {
      counter =parseFloat(localStorage.getItem("Count"))
      countCart.innerHTML=localStorage.getItem("Count")
      arr = JSON.parse(localStorage.getItem("cartProduct"))
    }
    
  
  }
  let counter=0
  
  function increaseProduct(index) {
    
    
    counter++
   
    // parseFloat(localStorage.getItem("Count"))
   
    localStorage.setItem("Count",counter)
 
    countCart.innerHTML =localStorage.getItem("Count")
     arr.push(allData[index])
    //  console.log(allData[index]);
    localStorage.setItem("cartProduct",JSON.stringify(arr))
     console.log(JSON.parse(localStorage.getItem("cartProduct")));
     
     
    }

    


  
