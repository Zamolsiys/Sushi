function calcCartPrice () {
   const cartItems = document.querySelectorAll('.cart-item');
   const totalPeiceFinal = document.querySelector('.total-price');
   const deliveryCost = document.querySelector('.delivery-cost')
   const cartDelivery = document.querySelector('[data-cart-delivery]')

   let totalPrice = 0;

   cartItems.forEach(function (item) {

   const emauntEl = item.querySelector('[data-counter]')
   const priceEl = item.querySelector('.price__currency')

   const curentPrice = parseInt(emauntEl.innerText) * parseInt(priceEl.innerText)

   totalPrice += curentPrice;
   })

   totalPeiceFinal.innerText = totalPrice;

   if (totalPrice > 0) {
      cartDelivery.classList.remove('none')
   } else {
      cartDelivery.classList.add('none')
   }

   if (totalPrice >= 1600) {
      deliveryCost.classList.add('free');
      deliveryCost.innerText = 'Бесплатно'
   } else {
      deliveryCost.classList.remove('free');
      deliveryCost.innerText = "1600 ₽";
   }
}

