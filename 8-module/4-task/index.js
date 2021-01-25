import createElement from '../../assets/lib/create-element.js';
import escapeHtml from '../../assets/lib/escape-html.js';

import Modal from '../../7-module/2-task/index.js';

// export default class Cart {
// 	cartItems = []; // [product: {...}, count: N]

// 	constructor(cartIcon) {
// 		this.cartIcon = cartIcon;

// 		this.addEventListeners();

// 		this.modal = new Modal();
// 	}

// 	addProduct(product) {
// 		// ваш код

// 		if ((this.cartItems.some(item => item.product.id == product.id))) {

// 			this.cartItems.some((item) => {
// 				if (item.product.id == product.id) {
// 					item.count++;
// 					// console.log(item);
// 				}
// 			});

// 		} else {
// 			this.cartItems.push({ product, count: 1 });
// 			// console.log(this.cartItems);
// 		}

// 		this.onProductUpdate(this.cartItems);
// 	}

// 	updateProductCount(productId, amount) {
// 		// ваш код
// 		// console.log(productId, amount);

// 		if (!this.isEmpty(this.cartItems)) {
// 			this.cartItems.some((item, i) => {

// 				if (item.product.id == productId) {

// 					if (amount == 1) {
// 						item.count++;
// 						// this.getTotalCount();
// 						// console.log(item, i, "== индекс");
// 					} else {
// 						item.count--;
// 						// console.log(item, i, "== индекс");
// 						// this.getTotalCount();
// 					}

// 					if (item.count == 0) {
// 						this.deleteItem = this.cartItems.splice(i, 1);
// 					}
// 				}
// 			});
// 		}

// 		this.onProductUpdate(this.cartItems);
// 	}

// 	isEmpty() {
// 		// ваш код
// 		for (let key in this.cartItems) {
// 			return false;
// 		}
// 		return true;
// 	}

// 	getTotalCount() {
// 		// ваш код
// 		let sum = 0;

// 		if (!this.isEmpty()) {
// 			this.cartItems.forEach(item => {
// 				sum += item.count;

// 			});

// 			// console.log("количество", sum);
// 		}

// 		return sum;
// 	}

// 	getTotalPrice() {
// 		// ваш код
// 		let sum = 0;

// 		if (!this.isEmpty()) {
// 			this.cartItems.forEach(item => {
// 				sum += item.product.price * item.count;
// 				// console.log("item = ", item.count)

// 			});
// 			// console.log("сумма", sum);
// 		}

// 		return sum;
// 	}

// 	renderProduct(product, count) {
// 		console.log(product)
// 		return createElement(`
// 			<div class="cart-product" data-product-id="${product.id}">
// 				<div class="cart-product__img">
// 					<img src="/assets/images/products/${product.image}" alt="product">
// 				</div>
// 				<div class="cart-product__info">
// 					<div class="cart-product__title">${product.name}</div>
// 					<div class="cart-product__price-wrap">
// 					<div class="cart-counter">
// 						<button type="button" class="cart-counter__button cart-counter__button_minus">
// 						<img src="/assets/images/icons/square-minus-icon.svg" alt="minus">
// 						</button>
// 						<span class="cart-counter__count">${count}</span>
// 						<button type="button" class="cart-counter__button cart-counter__button_plus">
// 						<img src="/assets/images/icons/square-plus-icon.svg" alt="plus">
// 						</button>
// 					</div>
// 					<div class="cart-product__price">€${product.price.toFixed(2)}</div>
// 					</div>
// 				</div>
// 			</div>`);
// 	}

// 	renderOrderForm() {
// 		return createElement(`<form class="cart-form">
// 				<h5 class="cart-form__title">Delivery</h5>
// 				<div class="cart-form__group cart-form__group_row">
// 					<input name="name" type="text" class="cart-form__input" placeholder="Name" required value="Santa Claus">
// 					<input name="email" type="email" class="cart-form__input" placeholder="Email" required value="john@gmail.com">
// 					<input name="tel" type="tel" class="cart-form__input" placeholder="Phone" required value="+1234567">
// 				</div>
// 				<div class="cart-form__group">
// 					<input name="address" type="text" class="cart-form__input" placeholder="Address" required value="North, Lapland, Snow Home">
// 				</div>
// 				<div class="cart-buttons">
// 					<div class="cart-buttons__buttons btn-group">
// 					<div class="cart-buttons__info">
// 						<span class="cart-buttons__info-text">total</span>
// 						<span class="cart-buttons__info-price">€${this.getTotalPrice().toFixed(2)}</span>
// 					</div>
// 					<button type="submit" class="cart-buttons__button btn-group__button button">order</button>
// 					</div>
// 				</div>
// 			</form>`);
// 	}

// 	renderModal() {
// 		// ...ваш код
// 		let template = createElement(`<div></div>`);
// 		console.log("array: ", this.cartItems)
// 		for (let prop of this.cartItems) {
// 			console.log("prop: ", prop)
// 			template.insertAdjacentElement("beforeend", this.renderProduct(prop.product, prop.count))
// 		}

// 		template.insertAdjacentElement("beforeend", this.renderOrderForm())

// 		this.modal.setTitle("Your order");
// 		this.modal.setBody(template)
// 		this.modal.open()

// 		document.addEventListener("click", this.click);
// 		document.addEventListener("submit", this.onSubmit);
// 	}

// 	click = event => {
// 		let check = event.target.closest(".cart-counter__button");
// 		if (check) {
// 			this.product = event.target.closest(".cart-counter__button").closest(".cart-product");
// 			this.dataId = this.product.dataset.productId;
// 			this.counter = this.product.querySelector(".cart-counter__count");
// 			this.price = this.product.querySelector(".cart-product__price");

// 			if (event.target.closest(".cart-counter__button_plus")) {
// 				this.updateProductCount(this.dataId, 1);
// 			}

// 			if (event.target.closest(".cart-counter__button_minus")) {
// 				this.updateProductCount(this.dataId, -1);
// 			}
// 		}

// 	}

// 	onProductUpdate(cartItems) {
// 		// ...ваш код

// 		if (document.body.classList.contains("is-modal-open")) {

// 			cartItems.find(item => {
// 				if (item.product.id == this.dataId) {
// 					this.counter.innerHTML = item.count;
// 					this.price.innerHTML = `€${(item.product.price * item.count).toFixed(2)}`;
// 				}
// 			})

// 			// this.price.innerHTML = `€${}`;

// 			if (this.deleteItem != undefined) {

// 				if (this.dataId == this.deleteItem[0].product.id) {
// 					this.product.remove();
// 					this.deleteItem = undefined;

// 					let cartProduct = document.querySelectorAll(".cart-product").length;
// 					if (cartProduct == 0) {
// 						this.modal.close();
// 					}
// 				}
// 			}
// 		}

// 		this.cartIcon.update(this);
// 	}

// 	onSubmit(event) {
// 		// ...ваш код

// 		if (event.target.closest(".cart-form")) {

// 			event.preventDefault();
// 			let button = event.target.querySelector(".cart-buttons__button")
// 			button.classList.add("is-loading");

// 			fetch("https://httpbin.org/post", {
// 				method: "POST",
// 				body: new FormData(event.target)
// 			}).then(() => {

// 				setTimeout(() => {
// 					let modalTitle = document.querySelector(".modal__title");
// 					let modalBody = document.querySelector(".modal__body div");
// 					modalTitle.innerHTML = "Success!";
// 					let template = `
// 					<div>
// 						<div class="modal__body-inner">
// 							<p>
// 								Order successful! Your order is being cooked :) <br>
// 								We’ll notify you about delivery time shortly.<br>
// 								<img src="/assets/images/delivery.gif">
// 							</p>
// 						</div>
// 					</div>`;
// 					modalBody.innerHTML = template;

// 				}, 2000)
// 			})
// 		}

// 	};

// 	addEventListeners() {
// 		this.cartIcon.elem.onclick = () => this.renderModal();
// 	}
// }

export default class Cart {
	cartItems = []; // [product: {...}, count: N]

	constructor(cartIcon) {
		this.cartIcon = cartIcon;

		this.addEventListeners();
	}

	addProduct(product) {
		let cartItem = this.cartItems.find(
			item => item.product.id == product.id
		);
		if (!cartItem) {
			cartItem = {
				product,
				count: 1
			};
			this.cartItems.push(cartItem);
		} else {
			cartItem.count++;
		}

		this.onProductUpdate(cartItem);
	}

	updateProductCount(productId, amount) {
		let cartItem = this.cartItems.find(item => item.product.id == productId);
		cartItem.count += amount;

		if (cartItem.count == 0) {
			this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
		}

		this.onProductUpdate(cartItem);
	}

	isEmpty() {
		return this.cartItems.length === 0;
	}

	getTotalCount() {
		return this.cartItems.reduce((sum, item) => sum + item.count, 0);
	}

	getTotalPrice() {
		return this.cartItems.reduce(
			(sum, item) => sum + item.product.price * item.count,
			0
		);
	}

	renderProduct(product, count) {
		return createElement(`
    <div class="cart-product" data-product-id="${product.id
			}">
      <div class="cart-product__img">
        <img src="/assets/images/products/${product.image}" alt="product">
      </div>
      <div class="cart-product__info">
        <div class="cart-product__title">${escapeHtml(product.name)}</div>
        <div class="cart-product__price-wrap">
          <div class="cart-counter">
            <button type="button" class="cart-counter__button cart-counter__button_minus">
              <img src="/assets/images/icons/square-minus-icon.svg" alt="minus">
            </button>
            <span class="cart-counter__count">${count}</span>
            <button type="button" class="cart-counter__button cart-counter__button_plus">
              <img src="/assets/images/icons/square-plus-icon.svg" alt="plus">
            </button>
          </div>
          <div class="cart-product__price">€${product.price.toFixed(2)}</div>
        </div>
      </div>
    </div>`);
	}

	renderOrderForm() {
		return createElement(`<form class="cart-form">
      <h5 class="cart-form__title">Delivery</h5>
      <div class="cart-form__group cart-form__group_row">
        <input name="name" type="text" class="cart-form__input" placeholder="Name" required value="Santa Claus">
        <input name="email" type="email" class="cart-form__input" placeholder="Email" required value="john@gmail.com">
        <input name="tel" type="tel" class="cart-form__input" placeholder="Phone" required value="+1234567">
      </div>
      <div class="cart-form__group">
        <input name="address" type="text" class="cart-form__input" placeholder="Address" required value="North, Lapland, Snow Home">
      </div>
      <div class="cart-buttons">
        <div class="cart-buttons__buttons btn-group">
          <div class="cart-buttons__info">
            <span class="cart-buttons__info-text">total</span>
            <span class="cart-buttons__info-price">€${this.getTotalPrice().toFixed(
			2
		)}</span>
          </div>
          <button type="submit" class="cart-buttons__button btn-group__button button">order</button>
        </div>
      </div>
    </form>`);
	}

	renderModal() {
		this.modal = new Modal();

		this.modal.setTitle("Your order");

		this.modalBody = document.createElement(`div`);

		for (let { product, count } of this.cartItems) {
			this.modalBody.append(this.renderProduct(product, count));
		}

		this.modalBody.append(this.renderOrderForm());

		this.modalBody.addEventListener("click", this.onModalBodyClick);

		this.modalBody.querySelector("form").onsubmit = (event) => this.onSubmit(event);

		this.modal.setBody(this.modalBody);

		// when modal is closed, we forget about it, don't update it any more
		this.modal.elem.addEventListener('modal-close', () => {
			this.modal = null;
			this.modalBody = null;
		});

		this.modal.open();
	}

	onModalBodyClick = (event) => {
		if (event.target.closest(".cart-counter__button")) {
			let productElem = event.target.closest("[data-product-id]");
			let productId = productElem.dataset.productId;
			this.updateProductCount(
				productId,
				event.target.closest(".cart-counter__button_plus") ? 1 : -1
			);
		}
	};

	onProductUpdate({ product, count }) {
		this.cartIcon.update(this);

		if (!this.modal || !document.body.classList.contains('is-modal-open')) {
			return;
		}

		if (this.cartItems.length == 0) {
			// No products, close the modal
			this.modal.close();
			return;
		}

		if (count == 0) {
			this.modalBody.querySelector(`[data-product-id="${product.id}"]`).remove();
		} else {
			this.modalBody.querySelector(`[data-product-id="${product.id}"] .cart-counter__count`).innerHTML = count;

			this.modalBody.querySelector(`[data-product-id="${product.id}"] .cart-product__price`).innerHTML = '€' + (count * product.price).toFixed(2);
		}

		this.modalBody.querySelector(`.cart-buttons__info-price`).innerHTML = '€' + this.getTotalPrice().toFixed(2);
	}

	async onSubmit(event) {
		event.preventDefault();

		this.modalBody
			.querySelector('button[type="submit"]')
			.classList.add("is-loading");
		let form = this.modalBody.querySelector('.cart-form');
		let userData = new FormData(form);

		await fetch('https://httpbin.org/post', { method: 'POST', body: userData });

		this.modal.setTitle("Success!");
		this.modalBody
			.querySelector('button[type="submit"]')
			.classList.remove("is-loading");

		this.cartItems = [];
		this.cartIcon.update(this);

		this.modalBody.innerHTML = `
      <div class="modal__body-inner">
        <p>
          Order successful! Your order is being cooked :) <br>
          We’ll notify you about delivery time shortly.<br>
          <img src="/assets/images/delivery.gif">
        </p>
      </div>
      `;
	};

	addEventListeners() {
		this.cartIcon.elem.onclick = () => this.renderModal();
	}
}