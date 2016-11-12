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
        addFromMenu: function (i) {
            switch (i) {
                case 0:
                    this.add({
                        name: 'Slepačia polievka',
                        price: .8
                    });
                    break;
                case 1:
                    this.add({
                        name: 'Kuracie na prírodno s ryžou',
                        price: 1.5
                    });
                    break;
                case 2:
                    this.add({
                        name: 'Palacinky',
                        price: 1
                    });
                    break;
            }
        },
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
