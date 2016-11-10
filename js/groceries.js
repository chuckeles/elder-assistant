var shoppingCart = [];
var shop = [
    { name: 'Jablko', price: 0.4 },
    { name: 'Pomaranč', price: 0.45 },
    { name: 'Jahoda', price: 0.15 },
    { name: 'Banán', price: 0.6 },
    { name: 'Lieskové orechy', price: 2.3 },
    { name: 'Saláma Nitran', price: 1.99 },
    { name: 'Tvaroh', price: 3 },
    { name: 'Bryndza', price: 2.8 },
    { name: 'Vajcia', price: 3.2 },
    { name: 'Miešaný šalád', price: 3.6 },
    { name: 'Karička', price: 2.22 },
    { name: 'Rohlík', price: 0.05 },
    { name: 'Chlieb čierny', price: 2.4 },
    { name: 'Chlieb biely', price: 2.92 },
    { name: 'Maslo', price: 1.26 }
];

var app = new Vue({
    el: '#groceries-container',
    data: {
        shoppingCart: shoppingCart,
        shop: shop,
        filter: ''
    },
    computed: {
        filteredShop: function () {
            if (this.filter === '') {
                return shop;
            }

            var regex = new RegExp(this.filter, 'i');
            return this.shop.filter(function (product) {
                return regex.test(product.name);
            });
        },
        totalPrice: function () {
            return this.shoppingCart.reduce(function (a, b) {
                return a + b.price * b.amount;
            }, 0);
        }
    },
    methods: {
        addToCart: function (product) {
            this.shoppingCart.push({
                name: product.name,
                price: product.price,
                amount: 1
            })
        },
        removeFromCart: function (product) {
            this.shoppingCart.splice(this.shoppingCart.indexOf(product), 1);
        }
    },
    filters: {
        price: function (number) {
            return Math.round(number * 100) / 100;
        }
    }
});
