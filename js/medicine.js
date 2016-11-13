var shoppingCart = [];
var shop = [
    { name: 'Levocetirizín', price: 0.0 },
    { name: 'Desloratadín', price: 0.45 },
    { name: 'Rupafín', price: 1.15 },
    { name: 'Ibalgin', price: 3.65 },
    { name: 'Maltofex', price: 2.3 },
    { name: 'Trifed', price: 1.99 },
    { name: 'Dorithricin', price: 3 },
    { name: 'Relevar', price: 2.8 },
    { name: 'Glimbar', price: 3.2 },
    { name: 'Helicid', price: 3.6 },
    { name: 'Endiex', price: 2.22 },
    { name: 'Kabiven', price: 5.6 },
    { name: 'Strepsils med a citrón', price: 3.8 },
    { name: 'Ventolin', price: 2.98 },
    { name: 'Fixit', price: 3.26 }
];

var app = new Vue({
    el: '#medicine-container',
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
