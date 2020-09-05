$(() => {

    $('.reviews__item-read').click(function () {
        $(this).hide();
        $(this).parent().find('.text-divider').hide();
        $(this).parent().find('.text-after').show(300);
    });

})