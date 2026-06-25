const cartDiv = document.getElementById("cart");

const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

cart.forEach(product => {

    total += product.price;

    const item = document.createElement("div");

    item.innerHTML = `
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <hr>
    `;

    cartDiv.appendChild(item);
});

const totalElement = document.createElement("h2");

totalElement.textContent =
    `Total: ₹${total}`;

cartDiv.appendChild(totalElement);

document
.getElementById("orderBtn")
.addEventListener("click", placeOrder);

async function placeOrder() {

    const response = await fetch(
        "http://localhost:5000/api/orders",
        {
            method: "POST",
            headers: {
                "Content-Type":
                "application/json"
            },
            body: JSON.stringify({
                products: cart,
                total
            })
        }
    );

    const data =
        await response.json();

    alert(data.message);

    localStorage.removeItem("cart");

    location.reload();
}