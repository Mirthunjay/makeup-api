//Declaration of HTML Tags

const div = document.createElement('div');
div.className="container";
document.body.append(div); 
const header = document.createElement('div');
header.innerHTML=`<div class="heading">
<img class="tittle-image" src="./title-image.png">
<h2>Beauty Woman</h2>
</div>
`
const headerTag = document.querySelector('.header');
headerTag.append(header);
const loader = document.querySelector("#loading");
loader.classList.add("display");



// Getting Data
async function getData(){
    try{
    const data = await fetch(
        "https://makeup-api.herokuapp.com/api/v1/products.json"
        );
    const products = await data.json();
    loader.classList.remove("display");
    loadData((products.slice(0,100))); 
    // To Speed My Rendering time I have silice to display 100 products 
    }catch (error) {
        console.log("Page Not Found : ", error);
      }
}

//loadUsers
function loadData(products){
    products.forEach(products => {
        div.innerHTML+=
            `<div class=box>
             <img class=product-image src=${products.image_link} onerror="this.src='./benefit-cosmetics-brow-styler.png'">
             <div class=product-details>
             <h3>${products.name}</h3>
             <p class="brand-name"><span class="title">Brand : </span>${products.brand}</p>
             <p><span class="title">Price : $ </span>${products.price}</p>
             <p><span class="title des-title">Description :</span><br>
             <span class="des-text">${products.description}</span></p>
             <button class="product-link" onClick="productLink('${products.product_link}')">Product Link</button>
             </div>
             </div>`;
    });
}

// Product link Redirecting ...
function productLink(url){
    window.open(url);
    console.log('product Link....',url);
}



// Calling the Function

getData();
const main = document.querySelector(".main");

main.append(div);


