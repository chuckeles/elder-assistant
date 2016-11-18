new Vue({
    el: '#medicine-summary-container',
    data: {
        shoppingCart: JSON.parse(localStorage.selectedMedicine),
        address: JSON.parse(localStorage.address)
    },
    computed: {
        totalPrice: function () {
            return this.shoppingCart.reduce(function (a, b) {
                return a + b.price * b.amount;
            }, 0);
        }
    },
    filters: {
        price: function (number) {
            return Math.round(number * 100) / 100;
        }
    }
});
