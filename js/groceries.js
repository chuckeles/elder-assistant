var app = new Vue({
    el: '#groceries-container',
    data: {
        shoppingCart: [],
        shop: [{
            name: 'Jablko',
            price: 0.4
        }, {
            name: 'Pomaranč',
            price: 0.45
        }, {
            name: 'Jahoda',
            price: 0.15
        }, {
            name: 'Banán',
            price: 0.6
        }, {
            name: 'Lieskové orechy',
            price: 2.3
        }, {
            name: 'Saláma Nitran',
            price: 1.99
        }, {
            name: 'Tvaroh',
            price: 3
        }, {
            name: 'Bryndza',
            price: 2.8
        }, {
            name: 'Vajcia',
            price: 3.2
        }, {
            name: 'Miešaný šalád',
            price: 3.6
        }, {
            name: 'Karička',
            price: 2.22
        }, {
            name: 'Rohlík',
            price: 0.05
        }, {
            name: 'Chlieb čierny',
            price: 2.4
        }, {
            name: 'Chlieb biely',
            price: 2.92
        }, {
            name: 'Maslo',
            price: 1.26
        }]
    }
});
