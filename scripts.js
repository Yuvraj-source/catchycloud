document.addEventListener("DOMContentLoaded", function() {
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            const container = document.getElementById('products-container');
            products.forEach(product => {
                const productCard = `
                    <div class="col-md-3 mb-4">
                        <div class="card">
                            <img src="${product.image}" class="card-img-top" alt="${product.altText}">
                            <div class="card-body text-center">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">${product.price} <del>${product.originalPrice}</del> <span class="badge badge-danger">${product.discount}</span></p>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += productCard;
            });
        })
        .catch(error => console.error('Error loading products:', error));
});



document.addEventListener("DOMContentLoaded", function () {
    fetch("reviews.json")
        .then(response => response.json())
        .then(reviews => {
            const reviewsContainer = document.getElementById("reviews-container");
            reviews.forEach(review => {
                const reviewTile = document.createElement("div");
                reviewTile.className = "col-md-4 mb-4";

                // Adjusting the review content to fill the space
                let reviewContent = review.review;
                if (reviewContent.length < 100) {
                    reviewContent += "<br><br>"; // Adding extra space for short reviews
                }

                reviewTile.innerHTML = `
                    <div class="card h-100">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${review.name}</h5>
                            <p class="card-text flex-grow-1">${reviewContent}</p>
                            <div class="mt-3">
                                ${"⭐".repeat(review.rating)}<br>
                                <small>${review.date}</small>
                            </div>
                        </div>
                    </div>
                `;
                reviewsContainer.appendChild(reviewTile);
            });
        });
});
