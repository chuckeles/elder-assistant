$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover().click(function (e) {
        e.preventDefault();
    });

    $('#text-resize-popover').on('shown.bs.popover', function () {
        $('#text-plus').click(function () {
            var $html = $('html');
            var fontSize = $html.css('font-size');
            $html.css('font-size', (parseInt(fontSize) + 2) + 'px');
        });

        $('#text-minus').click(function () {
            var $html = $('html');
            var fontSize = $html.css('font-size');
            $html.css('font-size', (parseInt(fontSize) - 2) + 'px');
        });
    });
});
