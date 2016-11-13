$( document ).ready(function() {
    $('#saveSelection').click(function () {
        addressJSON = {
            address: $('#adresa').val(),
            mesto: $('#mesto').val(),
            psc: $('#psc').val(),
            telephone: $('#tel-cislo').val()
        };
        localStorage.setItem('address', JSON.stringify(addressJSON));
    });
});
