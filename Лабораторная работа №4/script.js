$(document).ready(function() {
    //Первое задание:

    //Изменение цвета текста у всех параграфов
    $("p").css("color", "#FF0000");
    //Изменение класса у первого пункта списка
    let book = $('.book');
    book.attr('class', 'books');
    //Изменение цвета у пунктов меню с четными номерами.
    $(".navigation li a").filter( index => index % 2 == 0 ? 1 : 0 ).css('color', 'purple');
    //Изменение класса у элемента по атрибуту
    $('li').find('p[align="right"]').parent().addClass('type')
    

})
