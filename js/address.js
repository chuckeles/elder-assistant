$(function () {
    $('#food-address-form').submit(function (e) {
        e.preventDefault();
        var addressJSON = {
            address: $('#adresa').val(),
            mesto: $('#mesto').val(),
            psc: $('#psc').val(),
            telephone: $('#tel-cislo').val()
        };
        localStorage.setItem('address', JSON.stringify(addressJSON));
        window.location.href = $('#submit').attr('href');
    });
});
