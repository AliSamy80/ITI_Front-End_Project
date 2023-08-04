let arrTOCart=[]

if (localStorage.getItem("cartProduct") == null) {
    arrTOCart=[]
    console.log("ok");
    document.getElementById("allData").innerHTML=`<h1 style="font-size: 50px; position: relative;  top: 200px;       font-weight: bold;text-align: center;">No Data Here</h1>`
}
else
{
    arrTOCart=JSON.parse(localStorage.getItem("cartProduct"))
}





function ShowProductInCart() {
    let cartona=''
    for (let i = 0; i < arrTOCart.length; i++) {
      cartona+=
      `
      <tr>
      <td><img src=${arrTOCart[i].images[0]} width="100" height="100"></td>
      <td><button onClick="decreseProduct(${i},${arrTOCart[i].id})">-</button><span id="quantity_${arrTOCart[i].id}">1</span><button onClick="increaceProduct(${i},${arrTOCart[i].id})">+</button></td>
      <td>${arrTOCart[i].price}</td>
      <td id="total_${arrTOCart[i].id}">${arrTOCart[i].price}</td>
      <td><i onClick="deleteProduct(${i})" class="fa fa-trash" aria-hidden="true"></i></td>
      </tr>
      `
      
    }

    document.getElementById("productInCart").innerHTML=cartona
  }


window.onload=function () {
    
    if (localStorage.getItem("cartProduct") === null) {
        arrTOCart=[]
        document.getElementById("allData").innerHTML=`<h1 style="font-size: 50px;font-weight: bold;text-align: center;">No Data Here</h1>`
    }
    else
    {
        ShowProductInCart()

    }
}
let  counter=1
function increaceProduct(index,ID) {
    console.log(index);
  let total= document.getElementById(`total_${ID}`)
    let quantity=document.getElementById(`quantity_${ID}`)
    if ( document.getElementById(`quantity_${ID}`).textContent >= 1) {
        
        

        for (let i = 0; i < arrTOCart.length; i++) {
            if (arrTOCart[i].id == ID) {
                counter++
                quantity.innerHTML=parseFloat(quantity.textContent) + 1
                total.innerHTML=parseFloat(quantity.textContent)*parseFloat(arrTOCart[i].price)
            }
            
        }

    }
}



function decreseProduct(index,ID) {
    console.log(index);
  let total= document.getElementById(`total_${ID}`)
    let quantity=document.getElementById(`quantity_${ID}`)
    if ( document.getElementById(`quantity_${ID}`).textContent > 1) {
        
        

        for (let i = 0; i < arrTOCart.length; i++) {
            if (arrTOCart[i].id == ID) {
                counter++
                quantity.innerHTML=parseFloat(quantity.textContent) - 1
                total.innerHTML=parseFloat(quantity.textContent)*parseFloat(arrTOCart[i].price)
            }
            
        }

    }
}


function deleteProduct(index) {
    arrTOCart.splice(index,1)
    
  let countPro=  parseFloat(localStorage.getItem("Count")) - 1
  localStorage.setItem("Count",countPro)
    localStorage.setItem("cartProduct",JSON.stringify(arrTOCart))
    count.innerHTML=localStorage.getItem("Count")
    ShowProductInCart()
}

let count= document.getElementById("count")
count.innerHTML=localStorage.getItem("Count")
