//Declaration of HTML Tags

const div = document.createElement('div');
div.className="container";
document.body.append(div); 
const header = document.querySelector('.header');
header.innerHTML=`<div class="heading">
<img class="tittle-image" src="./title-image.png">
<h2>Beauty Woman</h2>
</div>
`
const load = document.createElement('div');
load.className='load';
load.innerHTML=`
<div id="loading"></div>
<p class="loading-text">"Be your own kind of beautiful"</p>
</div>
`





// Getting Data
async function getData(){
    try{
    const data = await fetch(
        "https://makeup-api.herokuapp.com/api/v1/products.json",
        {
        method:"GET"
        }
        );
    const products = await data.json();
    load.remove();
    loadData((products.slice(0,500))); // To speed up my rendering process i made to display 500 datas 
    }catch (error) {
        console.log("Page Not Found : ", error);
      }
}

//loadUsers
function loadData(products){
    products.forEach(products => {
        div.innerHTML+=
            `<div class=box>
             <img class=product-image src=${products.api_featured_image}">
             <div class=product-details>
             <h3>${products.name}</h3>
             <p class="brand-name">${products.brand}</p>
             <div class="buy-now">
             <p class="price"><span class="title">Price : $ </span>${products.price} USD </p>
             <a class="product-link" href="${products.product_link}">Buy Now</a>
             </div>
             <div class="description">
             <p><span class="title des-title">Description :</span><br>
             <span class="des-text">${products.description}</span></p>
             </div>
             </div>
             </div>`;
    });
}
//<button class="product-link" onclick="productLink('${products.product_link}')">Product Link</button>
// Product link Redirecting ...
// function productLink(url){
//     window.open(url);
//     console.log('product Link....',url);
// }



// Calling the Function
const main = document.querySelector(".main")
getData();
main.append(load);
main.append(div);


