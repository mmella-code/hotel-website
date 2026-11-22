/*reads the category selected by the customer,
find matching products in our products array
display those prooducts inside product-container
update category heading */

const params = new
URLSearchParams(window.location.search);

const category = params.get("category");
console.log(category);

const filteredProducts = products.filter(function(product) {
    return product.category === category;
});
console.log(filteredProducts);

const productContainer =
document.getElementById("product-container");

filteredProducts.forEach(function(product) {
    productContainer.innerHTML += `
    <div class= "product-card">

    <img src="${product.image}" alt="${product.name}">

    <h3>${product.name}</h3>

    <p>KSH ${product.price}</p>
    
    </div>
    `;

    
});

const productCards = 
document.querySelectorAll(".product-card");
productCards.forEach(function(card) {
    card.addEventListener("click", function () {
        const description = 
        card.querySelector(".product-description");
        if(description.style.display === "none") {
            description.style.display = "block";
        } else {
            description.style.display = "none";
        }
    });
});
    
