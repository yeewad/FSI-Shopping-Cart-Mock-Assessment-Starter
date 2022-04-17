// update quantity
function updateQuantity(displayQuantity) {
    let quantity = document.querySelector('.total-quantity')
    quantity.innerHTML = displayQuantity 
}

// Start quantity at 1 since product is in cart
let quantity = 1
let price = 15
let unitPrice = 15

// Buttons
let quantDown = document.querySelector('#quantity-down')
let quantUp = document.querySelector('#quantity-up')

// add event listener to decrease quantity
quantDown.addEventListener('click', function(e){
    if (quantity > 0) {
        quantity = quantity - 1
    }
    updateQuantity(`Quantity: ${quantity}`)
})

// add event listener to increase quantity
quantUp.addEventListener('click', function(){
    quantity = quantity + 1
    updateQuantity(`Quantity: ${quantity}`)
})
// checkout
function updatePrice(displayPrice) {
    let totalPrice = document.querySelector('.total-price')
    totalPrice.innerHTML = displayPrice
}
let checkOutButton = document.querySelector('.btn-checkout')
checkOutButton.addEventListener('click', function() {
    price = quantity * unitPrice
    updatePrice(`Total Price: ${price}`)
})

// remove item from shopping cart
// not sure whether I removed the item in the cart, or destroy the whole cart.
    let displayCart = document.querySelector('.cart')
    let removeButton = document.querySelector('.remove')
    removeButton.addEventListener('click', function() {
        document.body.remove(displayCart)
        window.location.href = 'https://www.amazon.com'
    })

