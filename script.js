const productModal = document.getElementById("product-modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalPrice = document.getElementById("modal-price");
const modalCartBtn = document.getElementById("modal-cart-btn");
const modalWishlistBtn = document.getElementById("modal-wishlist-btn");

let currentProductIndex = 0;


const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const wishlistItems = document.getElementById('wishlist-items');
const cartTotal = document.getElementById('cart-total');
const notification = document.getElementById('notification');
const modal = document.getElementById('thank-you-modal');
const checkoutForm = document.getElementById('checkout-form');
const sortSelect = document.getElementById('sort-select');

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 1500);

const products = [
  { name: "Plum Green Tea Moisturizer", price: 399, img: "https://plumgoodness.com/cdn/shop/files/01_a4e0c4d2-1a05-4f33-a9e8-43e35a4eb7e9.jpg", category: "skincare", tag: "Best Seller", rating:4.8 },
  { name: "Aqualogica Face Wash", price: 249, img: "https://aqualogica.in/cdn/shop/files/1_3fb16485-9c07-4182-9f46-f4650b1cf1ba.jpg", category: "skincare" },
  { name: "Aqualogica Jello Moisturizer", price: 299, img: "https://aqualogica.in/cdn/shop/files/1_2e1f8699-985a-4264-9ebe-d63252fcfb91.jpg", category: "skincare" },
  { name: "Peach Ruffle Gown", price: 2199, img: "https://kohsh.in/cdn/shop/products/Copy_of__DSC6549-Edit-scaled.jpg", category: "dresses" },
  { name: "Wine Luxury Gown", price: 3499, img: "https://clothsvilla.com/cdn/shop/files/wine-luxury-designer-gown-with-zari-thread-sequins-embroidery-elegant-attire-for-desirable-women_1.jpg", category: "dresses",rating:4.7 },
  { name: "Lavender Net Gown", price: 2999, img: "https://i.pinimg.com/736x/64/0e/9a/640e9a8ddb22c059c89c761a9023e47b.jpg", category: "dresses", tag: "New"},
  { name: "Renee Compact", price: 425, img: "https://www.reneecosmetics.in/cdn/shop/files/8906121645514_1_445927e6-7cce-491d-8129-671afc243c08.jpg", category: "makeup" },
  { name: "Lakme Mascara", price: 310, img: "https://www.lakmeindia.com/cdn/shop/files/24894_S3-8901030979552_1000x.jpg", category: "makeup" },
  { name: "TAC Lip & Cheek Tint", price: 275, img: "https://theayurvedaco.com/cdn/shop/files/8904422900936-1_d95524ab-38ae-4cb4-8313-6ddee70203ef.jpg", category: "makeup" },
  { name: "Beige Heel Sandals", price: 799, img: "https://www.bxxyshoe.in/cdn/shop/files/MG_0353.jpg", category: "sandals", rating:4.9 },
  { name: "Pink Platform Sneakers", price: 999, img: "https://i.pinimg.com/736x/8c/da/f9/8cdaf9581385219d8808a090d26281c8.jpg", category: "sandals", tag: "New" , rating: 4.5 },
  { name: "Rose Gold Party Heels", price: 1599, img: "https://assets.ajio.com/medias/sys_master/root/20231220/iXcz/6582ec4dddf7791519dce9de/-473Wx593H-466902163-rosegold-MODEL.jpg", category: "sandals" },
  { name: "Red kurta women with stylish black layout", price: 789, img: "https://images.bewakoof.com/uploads/grid/app/kurta-designs-for-women-bewakoof-blog-11-1616750978.jpg", category: "dresses" },
  { name: "Pink Pyjama set women - night wear", price: 789, img: "https://www.napstory.in/cdn/shop/files/flamingo-print-pyjama-set-5_2048x2048.webp?v=1725092230", category: "dresses",tag:"Best Seller", rating:4.8 },
  { name: "Daily wear women skyblue silk saree", price: 2500, img: "https://www.shopgarb.com/cdn/shop/files/SSC_05_5.jpg", category: "dresses" },
  { name: "Dark Matte lipstick combo of 2", price: 419, img: "https://www.mifashion.in/cdn/shop/products/p_004ffb1f-52cb-420b-a667-3f902ef3fae2.jpg?v=1681817496", category: "makeup",rating:4.6 },
  { name: "Yves Saint Laurent Couture Mini Clutch Eye Shadow Palette - Medina Glow", price: 456, img: "https://images-static.nykaa.com/media/catalog/product/3/a/3a186b83614273921725-3.jpg?tr=w-500", category: "makeup" },
  { name: "Maybelline Fit Me Matte + Poreless Liquid Foundation Makeup", price: 1189, img: "https://images-cdn.ubuy.co.in/657dcfa67858e950164c1f6c-maybelline-fit-me-matte-poreless-liquid.jpg", category: "makeup" },
  { name: "Plum Green Tea Toner With Glycolic Acid", price: 900, img: "https://images-static.nykaa.com/media/catalog/product/b/0/b00850c737534800058_1.jpg?tr=w-500", category: "skincare" },
  { name: "Lakme Vit C Brillance Serum", price: 780, img: "https://www.lakmeindia.com/cdn/shop/files/27923_S4-8901030539633_1000x.jpg?v=1709297809", category: "skincare" },
  { name: "Deconstruct Clearing Serum", price: 345, img: "https://thedeconstruct.in/cdn/shop/files/WhatsApp_Image_2025-01-31_at_16.26.06.jpg?v=1748440148&width=1500", category: "skincare", rating:3.9 },
  { name: "Skytrap Pink Synthetic Solid Slippers Flipflop for Women & Girls", price: 1245, img: "https://images.meesho.com/images/products/300254621/oasyl_512.webp", category: "sandals" },
  { name: "black heels women - Party & office wear", price: 989, img: "https://img.tatacliq.com/images/i18//437Wx649H/MP000000023002143_437Wx649H_202407220110081.jpeg", category: "sandals" },
  { name: "Stylish Lavender shoes for women", price: 999, img: "https://img.tatacliq.com/images/i12/1348Wx2000H/MP000000018541311_1348Wx2000H_202308020647261.jpeg", category: "sandals" }
  
  
];

let cart = [];
let wishlist = [];

function renderProducts(filter = 'all', sort = '') {
  productList.innerHTML = "";

  let filtered = products.filter(p => filter === 'all' || p.category === filter);

  if (sort === 'low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'high') {
    filtered.sort((a, b) => b.price - a.price);
  }

  productList.classList.remove('all-category', 'filtered-category');
  if (filter === 'all') {
    productList.classList.add('all-category');
  } else {
    productList.classList.add('filtered-category');
  }

  filtered.forEach((p, index) => {
    const div = document.createElement('div');
    div.className = "product-card";
    div.innerHTML = `
  <div class="image-wrapper">
  <img src="${p.img}" alt="${p.name}" onclick="openProductModal(${index})">
  <span class="heart-icon" onclick="event.stopPropagation(); addToWishlist(${index})">❤</span>
  ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ""}
</div>

  <h3>${p.name}</h3>
  <p>₹${p.price}</p>
${p.rating ? `<div class="stars">${generateStars(p.rating)}</div>` : ""}

  <button onclick="addToCart(${index})" class="add-btn">Add to Cart</button>
`;

    productList.appendChild(div);
  });
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  let starsHTML = "";

  for (let i = 0; i < fullStars; i++) {
    starsHTML += "★";
  }
  if (halfStar) starsHTML += "½";
  while (starsHTML.length < 5) {
    starsHTML += "☆";
  }

  return starsHTML + ` (${rating})`;
}



// ✅ Proceed to Payment button
document.getElementById('proceed-btn').addEventListener("click", () => {
  navLinks.forEach(l => l.classList.remove("active"));
  document.querySelector('[href="#checkout"]').classList.add("active");
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById("checkout").classList.add("active");
});


function addToCart(index) {
  cart.push(products[index]);
  updateCart();
  showNotification("🛒 Item added to cart");
}

function addToWishlist(index) {
  if (!wishlist.includes(products[index])) {
    wishlist.push(products[index]);
    updateCart();
    showNotification("💖 Added to Wishlist");
  }
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.img}">
      <span>${item.name}</span>
      <span>₹${item.price}</span>
      <button onclick="decreaseQty(${i})" class="qty-btn">−</button>
      <span>1</span>
      <button onclick="increaseQty(${i})" class="qty-btn">+</button>
      <button onclick="removeFromCart(${i})" class="remove-btn">Remove</button>
    `;
    total += item.price;
    cartItems.appendChild(div);
  });

  if (wishlist.length > 0) {
    const wishTitle = document.createElement('h3');
    wishTitle.innerText = "💖 Wishlisted Items";
    cartItems.appendChild(wishTitle);

    wishlist.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = "cart-item wishlist-item";
      div.innerHTML = `
        <img src="${item.img}">
        <span>${item.name}</span>
        <span>₹${item.price}</span>
        <button onclick="addWishlistToCart(${i})" class="add-btn">Add to Cart</button>
      `;
      cartItems.appendChild(div);
    });
  }

  cartTotal.textContent = total;
}




function addToWishlist(index) {
  if (!wishlist.includes(products[index])) {
    wishlist.push(products[index]);
    updateCart();
    showNotification("💖 Added to Wishlist");
  }
}



function increaseQty(index) {
  cart.push(cart[index]);
  updateCart();
}

function decreaseQty(index) {
  cart.splice(index, 1);
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
  showNotification("❌ Item removed from cart");
}

function showNotification(msg) {
  notification.textContent = msg;
  notification.style.display = 'block';
  setTimeout(() => notification.style.display = 'none', 2000);
}

checkoutForm.addEventListener("submit", e => {
  e.preventDefault();
  modal.classList.remove("hidden");
  cart = [];
  updateCart();
});

function closeModal() {
  modal.classList.add("hidden");
}

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    const target = link.getAttribute("href").substring(1);
    pages.forEach(p => p.classList.remove("active"));
    document.getElementById(target).classList.add("active");
    


  });
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProducts(btn.getAttribute("data-filter"), sortSelect.value);
  });
});

sortSelect.addEventListener("change", () => {
  const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute("data-filter") || "all";
  renderProducts(activeFilter, sortSelect.value);
});

document.getElementById("search-input").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute("data-filter") || "all";
  const sorted = sortSelect.value;
  const filtered = products.filter(p => {
    const matchesFilter = activeFilter === "all" || p.category === activeFilter;
    const matchesSearch = p.name.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });

  productList.innerHTML = "";
  filtered.forEach((p, index) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <div class="wishlist-icon" onclick="addToWishlist(${index})">❤️</div>
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${index})" class="add-btn">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
});




renderProducts();

document.getElementById('proceed-btn').addEventListener("click", () => {
  navLinks.forEach(l => l.classList.remove("active"));
  document.querySelector('[href="#checkout"]').classList.add("active");

  pages.forEach(p => p.classList.remove("active"));
  document.getElementById("checkout").classList.add("active");
});


function handleLogin() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();
  const error = document.getElementById("login-error");

  if (username === "admin" && password === "1234") {
    document.getElementById("login-page").style.display = "none";
    document.querySelector("nav").style.display = "flex";
    pages.forEach(p => p.classList.remove("active"));
    document.getElementById("home").classList.add("active");
  } else {
    error.textContent = "Invalid username or password!";
  }
}

// Initially hide all except login
window.onload = () => {
  document.querySelector("nav").style.display = "none";
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById("login-page").classList.add("active");
};



const promoMessages = [
  "🔥 Flat 50% OFF on Makeup Today Only! Use Code: GLAM50",
  "💄 Get FREE Lipstick on orders above ₹999!",
  "🚚 Free Delivery on All Orders Over ₹499!"
];

let promoIndex = 0;
setInterval(() => {
  promoIndex = (promoIndex + 1) % promoMessages.length;
  document.getElementById("promo-banner").textContent = promoMessages[promoIndex];
}, 4000);


function openProductModal(index) {
  currentProductIndex = index;
  const product = products[index];
  modalImg.src = product.img;
  modalName.textContent = product.name;
  modalPrice.textContent = `₹${product.price}`;
  productModal.classList.remove("hidden");
}

function closeProductModal() {
  productModal.classList.add("hidden");
}

modalCartBtn.onclick = () => {
  addToCart(currentProductIndex);
  closeProductModal();
};

modalWishlistBtn.onclick = () => {
  addToWishlist(currentProductIndex);
  closeProductModal();
};

const backToTop = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

backToTop.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
