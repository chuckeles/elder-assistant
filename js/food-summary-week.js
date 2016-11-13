var app = new Vue({
    el: '#food-summary-day-container',
    data: {

        selectedDay: 'monday',
        selected: {
            monday: {
                name: 'Pondelok',
                food: JSON.parse(localStorage.selectedFoodWeek).monday.food
            },
            tuesday: {
                name: 'Utorok',
                food: JSON.parse(localStorage.selectedFoodWeek).tuesday.food
            },
            wednesday: {
                name: 'Streda',
                food: JSON.parse(localStorage.selectedFoodWeek).wednesday.food
            },
            thursday: {
                name: 'Štvrtok',
                food: JSON.parse(localStorage.selectedFoodWeek).thursday.food
            },
            friday: {
                name: 'Piatok',
                food: JSON.parse(localStorage.selectedFoodWeek).friday.food
            }
        }
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
        },
        selectedDayName: function () {
            return this.selected[this.selectedDay].name;
        }
    },
    methods: {
        selectDay: function (day) {
            this.selectedDay = day;
        },
        remove: function (food, day) {
            this.selected[day].food.splice(this.selected[day].food.indexOf(food), 1);
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
