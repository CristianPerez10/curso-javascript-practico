const email = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const cartIcon = document.querySelector('.navbar-shopping-cart')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuIcon = document.querySelector('.mobile-menu-icon')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productsContainer = document.querySelector('.cards-container')

email.addEventListener('click', () => {triggerMenu("desktop")})
mobileMenuIcon.addEventListener('click', () => {triggerMenu("mobile")})
cartIcon.addEventListener('click', () => {triggerMenu("aside")})


function triggerMenu(menuType) {
    if(menuType === "desktop") {
        if(!shoppingCartContainer.classList.contains('inactive')) shoppingCartContainer.classList.add('inactive')
        desktopMenu.classList.toggle('inactive')
    }

    if(menuType === "mobile") {
        if(!shoppingCartContainer.classList.contains('inactive')) shoppingCartContainer.classList.add('inactive')
        mobileMenu.classList.toggle('inactive')
    }

    if(menuType === "aside") {
        if(!mobileMenu.classList.contains('inactive')) mobileMenu.classList.add('inactive')
        shoppingCartContainer.classList.toggle('inactive')
    }
}

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = "$" + product.price
    
        const productName = document.createElement('p')
        productName.innerText = product.name
        
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg")
    
        productInfoFigure.appendChild(productImgCart)
        
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        productsContainer.appendChild(productCard)
    }
}

renderProducts(productList)