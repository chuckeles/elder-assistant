var app = new Vue({
    el: '#food-summary-day-container',
    data: {
        selected: JSON.parse(localStorage.selectedFoodTomorrow),
        address: JSON.parse(localStorage.address)
    },
    computed: {
        totalPrice: function () {
            return this.selected.reduce(function (a, b) {
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
