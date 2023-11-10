
window.addEventListener('click', function(event){
    // Проверка клика только по кнопкам
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    var counterWraper = event.target.closest('.counter-wrapper');
    var counter = counterWraper.querySelector('[data-counter]');


    }
    if(event.target.dataset.action === 'plus'){
        counter.innerText = ++ counter.innerText;
    }

    if(event.target.dataset.action === 'minus'){
        if(parseInt(counter.innerText) > 1) {
            counter.innerText = -- counter.innerText;
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            event.target.closest('.cart-item').remove()

            // Отоброжения статуса корзины пустая либо полная
	        toggleCartStatus()

            // Пересчет общей стоймости заказа
	        calcCartPrice()
        }
    }

          // Проверка если нажат + иле - в корзине
          if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
            
            // Пересчет общей стоймости заказа
	        calcCartPrice()
        }
})
