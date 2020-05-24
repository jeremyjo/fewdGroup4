//variables

const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart")
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");

// cart
let cart = [];
//buttons
let buttonsDOM = [];

//gettting the products
class Products{
    async getProducts(){
        try{
            let result = await fetch('products.json');
            
            let data = await result.json();
            let products = data.items;
            products = products.map(item => {
                const {title,price} = item.fields;
                const {id} = item.sys;
                const image = item.fields.image.fields.file.url;
                return {title,price, id ,image};
            })
           return products;
    `  `} catch (error){
            console.log(error);
        }
    }
}
//display products
class UI{
    displayProducts(products){
        console.log(products);
        let result = '';
        products.forEach(product => {
            result +=`
            <!-- single product  -->
             <article class="product">
                <div class="img-container">
                    <img src=${product.image} alt="product" class="product-img">
                    <button class="bag-btn" data-id=${product.id}>
                        <i class="fas fa-shopping-cart"></i>
                        add to bag
                    </button>
                </div>
                <h3>${product.title}</h3>
                <h4>$${product.price}</h4>
            </article> 
            <!-- end of single product  -->

            `;           
            
        });
     
        productsDOM.innerHTML = result;
    }
    getBagButtons(){
        const buttons = [...document.querySelectorAll(".bag-btn")];
        console.log(buttons);
        buttonsDOM = buttons;
        buttons.forEach(button =>{
            let id = button.dataset.id;
            console.log(id);
            let inCart = cart.find(item => item.id === id);
            if(inCart){
                button.innerText ="In cart";
                button.disabled = true;
            }
                button.addEventListener('click',(event) =>{
                    console.log(event);
                    event.target.innerText = "In cart";
                    event.target.disabled = true;
                    //get product from products
                    let cartItem = {...Storage.getProducts(id), amount: 1};
                    console.log(cartItem);

                    // add product to the cart
                    cart = [...cart, cartItem];
                    console.log(cart);
                    // save cart in local storage
                    Storage.saveCart(cart)
                    // set cart values
                    this.setCartValue(cart);
                    // add cart values
                    // display cart item
                    this.addCartItem(cartItem);
                    // show the cart
                    this.showCart();
                });
            
        });
    }
    setCartValue(cart){
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map(item => {
            tempTotal += item.price * item.amount;
            itemsTotal += item.amount;

        })
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
        cartItems.innerText = itemsTotal;
        console.log(cartTotal,cartItems)
    }
    addCartItem(item){
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML =`<img src=${item.image} alt="product1">
        <div>
            <h4>${item.title}</h4>
            <h5>$${item.price}</h5>
            <span class="remove-item" data-id =${item.id}>remove</span>
        </div>
        <div>
            <i class="fas fa-chevron-up" data-id=${item.title}></i>
            <p class="item-amount">${item.amount}</p>
            <i class="fas fa-chevron-down" data-id=${item.title}></i>
        </div> `;
        cartContent.appendChild(div);
        console.log(cartContent);
    }
    showCart(){
        cartOverlay.classList.add('transparentBcg');
        cartDOM.classList.add('showCart');
    }
    setupApp(){
        cart =  Storage.getCart();
        this.setCartValue(cart);
        this.populateCart(cart);
        cartBtn.addEventListener('click',this.showCart);
        closeCartBtn.addEventListener('click',this.hideCart);
    }
    populateCart(cart){
        cart.forEach(item => this.addCartItem(item));
    }
    hideCart(){
        cartOverlay.classList.remove('transparentBcg');
        cartDOM.classList.remove('showCart');
    }
    cartLogic(){
        //clear cart
        clearCartBtn.addEventListener('click',() => {
            this.clearCart();
        });
        //cart funct
    }
    clearCart(){
        // console.log(this);
        let cartItems = cart.map(item => item.id);
        // console.log(cartItems);
        cartItems.forEach(id => this.removeItem(id));
        console.log(cartContent.children);
        while(cartContent.children.length>0){
            cartContent.removeChild(cartContent.children[0]);
            // console.log(cartContent.children);
        }
        this.hideCart();
    }
    removeItem(id){
        cart = cart.filter(item => item.id !== id);
        this.setCartValue(cart);
        Storage.saveCart(cart);
        let button = this.getSingleButton(id);
        button.disabled =false;
        button.innerHTML = `<i class="fas fa-shopping-cart"></i>add to cart`;
    }
    getSingleButton(id){
        return buttonsDOM.find(button => button.dataset.id === id);
    }
}
// local storage
class Storage{
    static saveProducts(products){
        localStorage.setItem("products",JSON.stringify(products));
    }
    static getProducts(id){
        let products = JSON.parse(localStorage.getItem('products'));
        return products.find(product => product.id === id);
    }
    static saveCart(cart){
        localStorage.setItem('cart',JSON.stringify(cart));
    }
    static getCart(){
        return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    }
}

document.addEventListener("DOMContentLoaded",() =>{
    const ui = new UI();
    const products = new Products();
    //setup app
    ui.setupApp();
    //get all products
    products.getProducts().then(products =>{ 
        ui.displayProducts(products)
        Storage.saveProducts(products);
    }).then(() => {
        ui.getBagButtons();
        ui.cartLogic();
    });
});