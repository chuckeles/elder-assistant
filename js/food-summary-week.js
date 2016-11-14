var app = new Vue({
    el: '#food-summary-week-container',
    data: {
        selected: JSON.parse(localStorage.selectedFoodWeek),
        address: JSON.parse(localStorage.address)
    },
    computed: {
        totalSelected: function () {
            var self = this;
            return Object.keys(self.selected).reduce(function (sum, day) {
                return sum + self.selected[day].food.length;
            }, 0);
        },
        totalPrice: function () {
            var self = this;
            return Object.keys(self.selected).reduce(function (sum, day) {
                return sum + self.selected[day].food.reduce(function (priceSum, food) {
                        return priceSum + food.price * food.amount;
                    }, 0);
            }, 0);
        }
    },
    filters: {
        price: function (number) {
            return Math.round(number * 100) / 100;
        }
    }
});
