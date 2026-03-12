        let cart = [];

        function addToCart(productName, price) {
            cart.push({ name: productName, price: price });
            updateCart();
        }

        function updateCart() {
            let total = 0;
            let itemCount = {};

            cart.forEach(item => {
                total += item.price;
                itemCount[item.name] = (itemCount[item.name] || 0) + 1;
            });

            let cartHTML = '';
            for (let name in itemCount) {
                cartHTML += `<p>${name} x${itemCount[name]} = $${itemCount[name] * cart.find(item => item.name === name).price}</p>`;
            }

            document.getElementById('cartItems').innerHTML = cartHTML;
            document.getElementById('totalPrice').textContent = '$' + total;
        }

        function clearCart() {
            cart = [];
            updateCart();
        }

