$(document).ready(function() {
    $(function() {
        $('td').each( (index, item) => {
            if ( parseInt( $(item).css("width") ) > 350 )
                $(item).css("background-color", 'green');
        });

        $('td').each( (index, item) => {
            if ( !((index + 1) % 3))
                $(item).css("width", '80px');
        });
        let h = $('tr[height]').attr('height');
        $('tr[height]').nextAll('tr').attr('height', h)

        $('#circle')
        .animate({opacity: 0}, 10000)
        .animate({left: "-=50"}, 0)
        .animate({opacity: 1}, 1000)
        .animate({width: '+=500px', height: '+=500px'}, 'slow')
        .animate({top: "+=100"}, 1000)
        .animate({backgroundColor: "green"}, 1000)
        .animate({opacity: 0}, 2000)
})
})