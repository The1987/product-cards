document.addEventListener('DOMContentLoaded', function () {
    console.log("--> JavaScript script loading...");

    const products = [
        {
            "id": 1,
            "name": "Laptop",
            "description": "14 inch, 8GB RAM, 256GB SSD",
            "price": 899.99,
            "category": "Electronics",
            "sale": true,
            "sale_price": 799.99,
            "rating": 4.5,
            "ratings_count": 1500,
            "image_url": "./assets/product_1.jpg",
            "image_alt_text": "Alt text for image 1",
            "secondary_image_url": "./assets/pokemon/image_1.jpg"
        },
        {
            "id": 2,
            "name": "Headphones",
            "description": "Noise Cancelling, Over Ear",
            "price": 199.99,
            "category": "Electronics",
            "sale": false,
            "sale_price": 199.99,
            "rating": 4.2,
            "ratings_count": 2300,
            "image_url": "./assets/product_2.jpg",
            "image_alt_text": "Alt text for image 2",
            "secondary_image_url": "./assets/pokemon/image_2.jpg"
        },
        {
            "id": 3,
            "name": "Coffee Maker",
            "description": "12-cup, Programmable",
            "price": 79.99,
            "category": "Home Appliances",
            "sale": true,
            "sale_price": 59.99,
            "rating": 4.0,
            "ratings_count": 1200,
            "image_url": "./assets/product_3.jpg",
            "image_alt_text": "Alt text for image 3",
            "secondary_image_url": "./assets/pokemon/image_3.jpg"
        },
        {
            "id": 4,
            "name": "Smartphone",
            "description": "6.1 inch, 128GB",
            "price": 699.99,
            "category": "Electronics",
            "sale": false,
            "sale_price": 699.99,
            "rating": 4.7,
            "ratings_count": 9800,
            "image_url": "./assets/product_4.jpg",
            "image_alt_text": "Alt text for image 4",
            "secondary_image_url": "./assets/pokemon/image_4.jpg"
        },
        {
            "id": 5,
            "name": "Blender",
            "description": "700W, 5 Speeds",
            "price": 49.99,
            "category": "Home Appliances",
            "sale": true,
            "sale_price": 39.99,
            "rating": 4.1,
            "ratings_count": 540,
            "image_url": "./assets/product_5.jpg",
            "image_alt_text": "Alt text for image 5",
            "secondary_image_url": "./assets/pokemon/image_5.jpg"
        },
        {
            "id": 6,
            "name": "Desk Chair",
            "description": "Ergonomic, Adjustable Height",
            "price": 129.99,
            "category": "Furniture",
            "sale": false,
            "sale_price": 129.99,
            "rating": 4.3,
            "ratings_count": 2200,
            "image_url": "./assets/product_6.jpg",
            "image_alt_text": "Alt text for image 6",
            "secondary_image_url": "./assets/pokemon/image_6.jpg"
        },
        {
            "id": 7,
            "name": "Smartwatch",
            "description": "Heart Rate Monitor, GPS",
            "price": 249.99,
            "category": "Electronics",
            "sale": true,
            "sale_price": 199.99,
            "rating": 4.6,
            "ratings_count": 7300,
            "image_url": "./assets/product_7.jpg",
            "image_alt_text": "Alt text for image 7",
            "secondary_image_url": "./assets/pokemon/image_7.jpg"
        },
        {
            "id": 8,
            "name": "Electric Toothbrush",
            "description": "Rechargeable, 5 Modes",
            "price": 39.99,
            "category": "Personal Care",
            "sale": false,
            "sale_price": 39.99,
            "rating": 4.0,
            "ratings_count": 400,
            "image_url": "./assets/product_8.jpg",
            "image_alt_text": "Alt text for image 8",
            "secondary_image_url": "./assets/pokemon/image_8.jpg"
        },
        {
            "id": 9,
            "name": "Vacuum Cleaner",
            "description": "Bagless, Cordless",
            "price": 179.99,
            "category": "Home Appliances",
            "sale": true,
            "sale_price": 149.99,
            "rating": 4.4,
            "ratings_count": 6500,
            "image_url": "./assets/product_9.jpg",
            "image_alt_text": "Alt text for image 9",
            "secondary_image_url": "./assets/pokemon/image_9.jpg"
        },
        {
            "id": 10,
            "name": "Wireless Mouse",
            "description": "Ergonomic, 2.4GHz",
            "price": 29.99,
            "category": "Electronics",
            "sale": true,
            "sale_price": 19.99,
            "rating": 4.2,
            "ratings_count": 3200,
            "image_url": "./assets/product_10.jpg",
            "image_alt_text": "Alt text for image 10",
            "secondary_image_url": "./assets/pokemon/image_10.jpg"
        }
    ];

    async function filterProducts() {
        try {
            const productList = document.getElementById('product-list');
            const fragment = document.createDocumentFragment();

            await Promise.all(products.map(async product => {
                let renderedRating = await renderStars(product.rating);

                const productElement = document.createElement('div');
                productElement.classList.add('product');

                let sale_badge = '';

                if (product.sale) {
                    const regularPrice = parseFloat(product.price);
                    const salePrice = parseFloat(product.sale_price);
                    const discountPercentage = Math.round(((regularPrice - salePrice) / regularPrice) * 100);

                    product.price = `
                        <span class="text-red-400">$${product.sale_price}</span>
                        <span class="pl-2 line-through">$${product.price}</span>
                    `;

                    sale_badge = `
                        <span class="absolute top-2 right-2 text-[8px] sm:text-[12px] font-medium bg-green-800 text-white px-2 py-1 rounded-full uppercase drop-shadow-md">Save ${discountPercentage}% Off</span>
                    `;
                } else {
                    product.price = `$${product.price}`;
                }

                productElement.innerHTML = `
                    <div class="product_item snap-always snap-center relative">
                        <div class="h-44 w-44 sm:h-64 sm:w-64 rounded-md relative shadow-md">
                            <img class="product_image object-cover h-full w-full rounded-md" src="${product.image_url}" alt="${product.image_alt_text}" data-hover-src="${product.secondary_image_url}">
                            <span class="absolute top-2 left-2 text-[8px] sm:text-[12px] font-medium bg-white text-black px-2 py-1 rounded-full uppercase drop-shadow-md">Best Seller</span>
                            ${sale_badge}
                        </div>
                        <div class="h-24 pt-4 px-2">
                            <h3 class="text-sm uppercase font-semibold">${product.name}</h3>
                            <p><span class="text-sm">${renderedRating} ${product.ratings_count} reviews</span></p>
                            <p><span class="text-sm">${product.price}</span></p>
                        </div>
                    </div>
                `;

                fragment.appendChild(productElement);
            }));

            productList.appendChild(fragment);

            // Call setupHoverEffects after the products have been appended to the DOM
            setupHoverEffects();

        } catch (error) {
            console.error("Error while getting ALL PRODUCTS", error);
        }
    }

    function setupHoverEffects() {
        const images = document.querySelectorAll('.product_image');

        images.forEach(image => {
            const normalSrc = image.src;
            const hoverSrc = image.getAttribute('data-hover-src');

            image.addEventListener('mouseenter', function () {
                image.src = hoverSrc;
            });

            image.addEventListener('mouseleave', function () {
                image.src = normalSrc;
            });
        });
    }

    function renderStars(rating) {
        const maxStars = 5;
        let stars = '';

        // Loop to add filled stars (★)
        for (let i = 1; i <= rating; i++) {
            stars += '★';
        }

        // Loop to add blank stars (☆)
        for (let i = 1; i <= maxStars - rating; i++) {
            stars += '☆';
        }

        return stars;
    }

    const showMoreBtn = document.getElementById('show-more-btn');

    showMoreBtn.addEventListener('click', function () {

        const productElements = document.querySelectorAll('.product');

        productElements.forEach(function (productElement) {
            productElement.style.display = "flex"
            showMoreBtn.style.display = "none"
        });
    });

    filterProducts();
});
