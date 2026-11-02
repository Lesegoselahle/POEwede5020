// HUMI NATURALS - PART 3 REQUIREMENT 2.2 FETCH API + SEARCH + FILTER + LIGHTBOX
let allProducts = [];
let cart = [];

document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
  setupSearch();
  setupFilters();
});

async function loadProducts() {
  const container = document.getElementById('product-container');
  try {
    // Fetch from products.json - Part 3 Requirement
    const response = await fetch('products.json');
    if (!response.ok) throw new Error('Failed to fetch');
    allProducts = await response.json();
    displayProducts(allProducts);
  } catch (error) {
    console.error('Fetch error:', error);
    // Fallback if json missing - so page doesn't stay loading
    allProducts = [
      {id:1, name:"Moisture Boost Shampoo", price:180, category:"Curls", image:"_images/hair-product-1.jpeg", description:"Sulphate-free shampoo"},
      {id:2, name:"Deep Moisture Conditioner", price:220, category:"Coils", image:"_images/hair-product-2.jpeg", description:"Intense hydration"},
      {id:3, name:"Growth & Shine Oil", price:160, category:"Waves", image:"_images/hair-product-3.jpeg", description:"Lightweight oil"}
    ];
    displayProducts(allProducts);
    container.innerHTML += `<p style="color:#b91c1c; margin-top:1rem; font-size:0.85rem;">Note: products.json not found, showing fallback data. Make sure products.json is in same folder as index.html</p>`;
  }
}

function displayProducts(products) {
  const container = document.getElementById('product-container');
  const noResults = document.getElementById('no-results');
  
  if (products.length === 0) {
    container.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';

  container.innerHTML = products.map(p => `
    <div class="product" data-category="${p.category}">
      <img src="${p.image}" alt="${p.name}" 
           onclick="openLightbox('${p.image}')"
           style="cursor:zoom-in;"
           onerror="this.src='humi-logo.jpg'; this.style.objectFit='contain'; this.style.padding='20px';">
      <h3 style="margin-top:0.8rem;">${p.name}</h3>
      <p style="color:#8a7a78; font-size:0.85rem; margin:0.3rem 0; min-height:36px;">${p.description}</p>
      <p class="price">R${p.price}.00</p>
      <button class="btn btn-primary" style="margin-top:0.8rem; width:100%;" onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join('');
}

function setupSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  input.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = allProducts.filter(p => 
      p.name.toLowerCase().includes(term) || 
      p.category.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term)
    );
    displayProducts(filtered);
  });
}

function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      if (filter === 'All') {
        displayProducts(allProducts);
      } else {
        const filtered = allProducts.filter(p => p.category === filter);
        displayProducts(filtered);
      }
      // highlight active
      document.querySelectorAll('.filter-btn').forEach(b => b.style.background = 'transparent');
      btn.style.background = '#5a2d2d';
      btn.style.color = '#fff';
    });
  });
}

function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').style.display = 'flex';
}

function addToCart(id) {
  cart.push(id);
  document.getElementById('cart-count').textContent = cart.length;
  alert('Added to cart! Total items: ' + cart.length);
}