var shopItemButtons = document.getElementsByClassName('shop-item-button')
for (var i = 0; i < shopItemButtons.length; i++) {
    shopItemButtons[i].addEventListener('click', addToCartClicked)
}

var removeCartItemButtons = document.getElementsByClassName('btn-danger')
for (var i = 0; i < removeCartItemButtons.length; i++) {
    removeCartItemButtons[i].addEventListener('click', removeCartItem)
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
}

var cartQuantityInputs = document.getElementsByClassName('cart-quantity-input')
for (var i = 0; i < cartQuantityInputs.length; i++) {
    cartQuantityInputs[i].addEventListener('change', quantityChanged)
var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}

var addToCartButtons = document.getElementsByClassName('shop-item-button')
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
}

document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function addToCartClicked(event) {
var shopItemContainer = event.target.parentElement.parentElement
var priceString = shopItemContainer.getElementsByClassName('shop-item-price')[0].innerText
var itemName = shopItemContainer.getElementsByClassName('shop-item-title')[0].innerText
var imageUrl = shopItemContainer.getElementsByClassName('shop-item-image')[0].src
addItemToCart(itemName, imageUrl, priceString)
function purchaseClicked() {
alert('Thank you for your purchase')
var cartItems = document.getElementsByClassName('cart-items')[0]
while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild)
}
updateCartTotal()
}

function removeCartItem(event) {
var buttonElement = event.target
buttonElement.parentElement.parentElement.remove()
var buttonClicked = event.target
buttonClicked.parentElement.parentElement.remove()
updateCartTotal()
}

function quantityChanged(event) {
var quantityInput = event.target
if (isNaN(quantityInput.value) || quantityInput.value <= 0) {
    quantityInput.value = 1
var input = event.target
if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
}
updateCartTotal()
}

function purchaseClicked() {
alert('Thank you for your purchase!')
var cartItemContainer = document.getElementsByClassName('cart-items')[0]
while(cartItemContainer.hasChildNodes()) {
    cartItemContainer.removeChild(cartItemContainer.firstChild)
}
function addToCartClicked(event) {
var button = event.target
var shopItem = button.parentElement.parentElement
var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
addItemToCart(title, price, imageSrc)
updateCartTotal()
}

function addItemToCart(itemName, imageUrl, priceString) {
var cartItemContainer = document.getElementsByClassName('cart-items')[0]
var cartItemNames = cartItemContainer.getElementsByClassName('cart-item-title')
function addItemToCart(title, price, imageSrc) {
var cartRow = document.createElement('div')
cartRow.classList.add('cart-row')
var cartItems = document.getElementsByClassName('cart-items')[0]
var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == itemName) {
        alert('This item is already in your cart')
    if (cartItemNames[i].innerText == title) {
        alert('This item is already added to the cart')
        return
    }
}
var cartRow = document.createElement('div')
cartRow.classList.add('cart-row')
cartRow.innerHTML = `
var cartRowContents = `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageUrl}" width="100" height="100">
        <span class="cart-item-title">${itemName}</span>
        <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${priceString}</span>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" min="1" type="number" value="1">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
    </div>
`
cartItemContainer.append(cartRow)
    </div>`
cartRow.innerHTML = cartRowContents
cartItems.append(cartRow)
cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
var cartRows = document.getElementsByClassName('cart-row')
var cartItemContainer = document.getElementsByClassName('cart-items')[0]
var cartRows = cartItemContainer.getElementsByClassName('cart-row')
var total = 0
for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('cart-price')[0]
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    if (priceElement == null || quantityElement == null) continue
    var price = parseFloat(priceElement.innerText.replace('$', ''))
    var quantity = parseInt(quantityElement.value)
    total += price * quantity
    var quantity = quantityElement.value
    total = total + (price * quantity)
}

document.getElementsByClassName('cart-total-price')[0].innerText = '$' + Math.round(total * 100) / 100
total = Math.round(total * 100) / 100
document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
} 