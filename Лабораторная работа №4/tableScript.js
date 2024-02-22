$(document).ready(function() {
    $(function() {
        $('td').each( (index, item) => {
            if ( parseInt( $(item).css("width") ) > 350 )
                $(item).css("background-color", 'green');
        });

        $('td').each( (index, item) => {
            if ( !((index + 1) % 3))
                $(item).css("width", '100px');
        });//Изменить ширину у каждого 3его столбца
})
})