const cardWraper = document.querySelector('.cart-wrapper')

window.addEventListener('click', function(event){
    // Проверяю если клию юыл совершен на кнопку + в корзину
    if(event.target.hasAttribute('data-cart')) {

        // Нохожу карточку с товаром внутри каторый был совершен клик
        const card = event.target.closest('.card');

		
        
        // Союераю данные с товара и добовляю из в обьект
        var productInfo = {
            id: card.dataset.id,
            img: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        }
		
		// Проверяем если ли такой товар уже в корзину
		var itemInCart = cardWraper.querySelector(`[data-id="${productInfo.id}"]`);

		if (itemInCart) {

		const counterElement = itemInCart.querySelector('[data-counter]')

		counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter) 
		} else {

        var cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.img}" alt="${productInfo.title}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>`;

        cardWraper.insertAdjacentHTML('beforeend', cartItemHTML)
    }

	card.querySelector('[data-counter]').innerText = '1'

	// Отоброжения статуса корзины пустая либо полная
	toggleCartStatus()

	// Пересчет общей стоймости заказа
	calcCartPrice()
}
})
