var app = new Vue({
    el: '#food-summary-day-container',
    data: {
        selected: JSON.parse(localStorage.selectedFoodTomorrow)
    },
    computed: {
        totalPrice: function () {
            return this.selected.reduce(function (a, b) {
                return a + b.price * b.amount;
            }, 0);
        }
    },
    methods: {
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

$( document ).ready(function() {
    $('#city-input').val(JSON.parse(localStorage.getItem('address')).mesto);
    $('#psc-input').val(JSON.parse(localStorage.getItem('address')).psc);
    $('#address-input').val(JSON.parse(localStorage.getItem('address')).address);
    $('#tel-input').val(JSON.parse(localStorage.getItem('address')).telephone);
});
