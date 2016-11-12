var app = new Vue({
    el: '#food-day-container',
    data: {
        selected: []
    },
    computed: {
        totalPrice: function () {
            return this.selected.reduce(function (a, b) {
                return a + b.price * b.amount;
            }, 0);
        }
    },
    methods: {
        add: function (food) {
            this.selected.push({
                name: food.name,
                price: food.price,
                amount: 1
            });
        },
        remove: function (food) {
            this.selected.splice(this.selected.indexOf(food), 1);
        }
    },
    filters: {
        price: function (number) {
            return Math.round(number * 100) / 100;
        }
    }
});
