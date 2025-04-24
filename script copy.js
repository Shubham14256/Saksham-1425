
    
  const products = [
    { id: 101, name: "Stainless Steel Toaster", price: 3299, image: "https://cdn.pixabay.com/photo/2013/07/12/19/21/toast-154616_1280.png" },
    { id: 102, name: "4-Slice Sandwich Maker", price: 1999, image: "https://media.istockphoto.com/id/1497378435/photo/a-sandwich-maker-with-two-different-sandwiches-with-tomatoes-ham-onions-and-cheese-preparing.jpg?s=2048x2048&w=is&k=20&c=VnsSqrxh3QBQUeVBTN3PDeIzYlf6i7i7u4lK28uRDKY=" },
    { id: 103, name: "Electric Kettle", price: 2499, image: "https://media.istockphoto.com/id/1254254675/photo/stainless-electric-kettle-on-table.jpg?s=2048x2048&w=is&k=20&c=Q1yAcWDzP852QvH0FMaKewSKdNavGUSEhfAX-vQXM1o=" },
    { id: 104, name: "Multi-Cooker Pot", price: 6499, image: "https://cdn.pixabay.com/photo/2013/07/12/12/53/cooking-pot-146459_1280.png" },
    { id: 105, name: "Digital Rice Cooker", price: 4999, image: "https://cdn.pixabay.com/photo/2013/07/12/17/12/rice-cooker-151788_1280.png" },
    { id: 106, name: "Professional Food Processor", price: 8499, image: "https://media.istockphoto.com/id/2209779692/vector/minimalist-kitchen-mixer-icon-in-a-circle-on-a-light-gray-background.jpg?s=2048x2048&w=is&k=20&c=rqYy8d7zdCtV3lPc2rHFH2mhLSFmbl30IrWsUISqVhs=" },
    { id: 107, name: "Kitchen Stand Mixer", price: 10999, image: "https://cdn.pixabay.com/photo/2014/12/21/23/29/blender-575445_1280.png" },
    { id: 108, name: "Slow Cooker", price: 3799, image: "https://cdn.pixabay.com/photo/2013/07/13/12/15/cooking-pot-159470_1280.png" },
    { id: 109, name: "Electric Griddle", price: 4199, image: "https://m.media-amazon.com/images/I/81Cir3akReL._AC_UL480_QL65_.jpg" },
    { id: 110, name: "Countertop Ice Maker", price: 9999, image: "https://m.media-amazon.com/images/I/61BGewbvAkL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 111, name: "Digital Kitchen Scale", price: 1499, image: "https://m.media-amazon.com/images/I/71VQ93ago8L._AC_UY327_FMwebp_QL65_.jpg" },
    { id: 112, name: "Bread Maker", price: 5699, image: "https://m.media-amazon.com/images/I/51tcfs0PJcL._AC_UY327_FMwebp_QL65_.jpg" },
    { id: 113, name: "Mini Fridge", price: 12499, image: "https://m.media-amazon.com/images/I/41C9sb+XoRS._AC_UY327_FMwebp_QL65_.jpg" },
    { id: 114, name: "Portable Induction Cooktop", price: 7499, image: "https://m.media-amazon.com/images/I/513YYvlN9EL._AC_UY327_FMwebp_QL65_.jpg" },
    { id: 115, name: "Coffee Grinder", price: 2799, image: "https://m.media-amazon.com/images/I/61gHBVKH39L._AC_UY327_FMwebp_QL65_.jpg" },
    { id: 116, name: "Espresso Machine", price: 13499, image: "https://m.media-amazon.com/images/I/61dNcZx6yWL._AC_UY327_FMwebp_QL65_.jpg" },
    { id: 117, name: "Juicer", price: 4499, image: "https://m.media-amazon.com/images/I/71QvpeisutL._AC_UY327_FMwebp_QL65_.jpg" },
    { id: 118, name: "Waffle Maker", price: 2299, image: "https://m.media-amazon.com/images/I/71cd9NZkuDL._AC_SR230,210_CB1169409_QL70_.jpg" },
    { id: 119, name: "Electric Can Opener", price: 1899, image: "https://m.media-amazon.com/images/I/41i6UnVXqsL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 120, name: "Sous Vide Cooker", price: 8299, image: "https://m.media-amazon.com/images/I/81U+HZzWPIL._AC_UY327_FMwebp_QL65_.jpg" },
    { id: 121, name: "Compact Dishwasher", price: 24999, image: "https://via.placeholder.com/200x150?text=Dishwasher" },
    { id: 122, name: "Blender Bottle", price: 1199, image: "https://via.placeholder.com/200x150?text=Blender+Bottle" },
    { id: 123, name: "Ice Cream Maker", price: 5999, image: "https://via.placeholder.com/200x150?text=Ice+Cream+Maker" },
    { id: 124, name: "Popcorn Machine", price: 2999, image: "https://m.media-amazon.com/images/I/71Ji5gC626L._AC_UY327_FMwebp_QL65_.jpg" },
    { id: 125, name: "Hand Mixer", price: 1999, image: "https://via.placeholder.com/200x150?text=Hand+Mixer" },
    { id: 126, name: "Microwave Oven", price: 12499, image: "https://via.placeholder.com/200x150?text=Microwave" },
    { id: 127, name: "Pizza Oven", price: 16999, image: "https://via.placeholder.com/200x150?text=Pizza+Oven" },
    { id: 128, name: "Stovetop Espresso Maker", price: 1599, image: "https://via.placeholder.com/200x150?text=Stovetop+Espresso" },
    { id: 129, name: "Milk Frother", price: 1599, image: "https://via.placeholder.com/200x150?text=Milk+Frother" },
    { id: 130, name: "Electric Skillet", price: 4999, image: "https://via.placeholder.com/200x150?text=Electric+Skillet" },
    { id: 131, name: "Deep Fryer", price: 6499, image: "https://via.placeholder.com/200x150?text=Deep+Fryer" },
    { id: 132, name: "Salad Spinner", price: 1399, image: "https://via.placeholder.com/200x150?text=Salad+Spinner" },
    { id: 133, name: "Digital Thermometer", price: 999, image: "https://m.media-amazon.com/images/I/61tJX4HeEyS._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 134, name: "Water Purifier Pitcher", price: 2499, image: "https://via.placeholder.com/200x150?text=Water+Purifier" },
    { id: 135, name: "Herb Grinder", price: 1099, image: "https://via.placeholder.com/200x150?text=Herb+Grinder" },
    { id: 136, name: "Oil Sprayer", price: 799, image: "https://m.media-amazon.com/images/I/71IiiaPwJNL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 137, name: "Garlic Press", price: 699, image: "https://m.media-amazon.com/images/I/71rT6bgypgL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 138, name: "Egg Boiler", price: 1599, image: "https://m.media-amazon.com/images/I/41CKkdC-boS.AC_SX250.jpg" },
    { id: 139, name: "Kitchen Timer", price: 749, image: "https://m.media-amazon.com/images/I/61WR+ghGViL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 140, name: "Food Sealer Machine", price: 5999, image: "https://m.media-amazon.com/images/I/61gmnKd1lLL._AC_UY327_FMwebp_QL65_.jpg" },
    { id: 141, name: "Knife Sharpener", price: 949, image: "https://m.media-amazon.com/images/I/61dft3b7kiL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 142, name: "Electric Blender", price: 4199, image: "https://m.media-amazon.com/images/I/61DCNUXu-9L._AC_UY327_FMwebp_QL65_.jpg" }
  ];
  
  
   
  
  
  let cart = [];
  
  function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
  }
  
  function renderProducts() {
    const container = document.getElementById("product-list");
    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>₹${product.price.toLocaleString("en-IN")}</p>

        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      container.appendChild(card);
    });
  }
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    alert(`${product.name} added to cart!`);
  }
  
  renderProducts();
  