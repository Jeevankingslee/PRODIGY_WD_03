const token =
    localStorage.getItem("token");

if(!token){

    window.location.href =
        "login.html";
}
const productsDiv = document.getElementById("products");

async function loadProducts() {

    const response = await fetch(
        "http://localhost:5000/api/products"
    );

    const products = await response.json();

    products.forEach(product => {

        const card = document.createElement("div");

card.innerHTML = `
    <img
    src="${product.image}"
    width="200">

    <h3>${product.name}</h3>

    <p>${product.description}</p>

    <h4>₹${product.price}</h4>

    <button
    onclick='addToCart(${JSON.stringify(product)})'>
    Add To Cart
    </button>

    <hr>
`;
        productsDiv.appendChild(card);
    });
}

function addToCart(product) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("Added To Cart");
}

loadProducts();
document
.getElementById("logoutBtn")
.addEventListener("click",()=>{

    localStorage.removeItem("token");

    window.location.href =
        "login.html";
});