$(function () {
    if (localStorage.address) {
        var address = JSON.parse(localStorage.address);
        $('#adresa').val(address.address);
        $('#mesto').val(address.mesto);
        $('#psc').val(address.psc);
        $('#tel-cislo').val(address.telephone);
    }

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
