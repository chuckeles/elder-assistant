var app = new Vue({
    el: '#food-week-container',
    data: {
        selectedDay: 'monday',
        selected: {
            monday: {
                name: 'Pondelok',
                food: []
            },
            tuesday: {
                name: 'Utorok',
                food: []
            },
            wednesday: {
                name: 'Streda',
                food: []
            },
            thursday: {
                name: 'Štvrtok',
                food: []
            },
            friday: {
                name: 'Piatok',
                food: []
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
        addFromMenu: function (i) {
            switch (i) {
                case 0:
                    this.add({
                        name: 'Slepačia polievka',
                        price: .8
                    }, this.selectedDay);
                    break;
                case 1:
                    this.add({
                        name: 'Kuracie na prírodno s ryžou',
                        price: 1.5
                    }, this.selectedDay);
                    break;
                case 2:
                    this.add({
                        name: 'Palacinky',
                        price: 1
                    }, this.selectedDay);
                    break;
            }
        },
        add: function (food, day) {
            this.selected[day].food.push({
                name: food.name,
                price: food.price,
                amount: 1
            });
        },
        remove: function (food, day) {
            this.selected[day].food.splice(this.selected[day].food.indexOf(food), 1);
        },
        saveSelection: function () {
            localStorage.setItem('selectedFoodWeek', JSON.stringify(this.selected));
        }
    },
    filters: {
        price: function (number) {
            return Math.round(number * 100) / 100;
        }
    }
});
