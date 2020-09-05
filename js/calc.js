$(() => {
    let mouseCatch = false; //зажат ли бугунок
    let clickOffset = 0; //смещение точки клика по бегунку от центра бегунка
    let mouseX; //координата курсора мыши
    let moverX; //текущее смещение центра бегунка от начала координат
    let R = $('.calc__scale-mover').innerWidth() / 2;
    moverX = $('.calc__scale-mover').offset().left + R;
    let moverY = $('.calc__scale-mover').offset().top; //координата Y бегунка = const
    let startScale = $('.calc__scale-main').offset().left; //координата X начала школы
    let endScale = startScale + $('.calc__scale-main').innerWidth(); //координата X конца школы
    //console.log('startScale = ' + startScale);

    $('.calc__scale-mover').offset({
        top: moverY,
        left: startScale - R
    });


    $('.calc__scale-mover').on('mousedown', function () {
        if (mouseCatch == false) {
            clickOffset = mouseX - $('.calc__scale-mover').offset().left - R;
            //console.log('clickOffset = ' + clickOffset);
        }

        mouseCatch = true;
        //console.log(mouseCatch);

    });

    $(window).on('mouseup', function () {
        if (mouseCatch == true) {
            mouseCatch = false;

        }


    });

    $(window).on('mousemove', function (e) {
        mouseX = e.pageX;

        if (mouseCatch == true) {
            if (mouseX - clickOffset >= startScale && mouseX - clickOffset <= endScale) {
                $('.calc__scale-mover').offset({
                    top: moverY,
                    left: mouseX - clickOffset - R
                });

                $('.calc__scale-info').offset({
                    top: $('.calc__scale-info').offset().top,
                    left: mouseX - clickOffset
                });

                let currentInfo = Math.round((mouseX - clickOffset - startScale) * 100 / 760);

                $('.calc__scale-info').html(currentInfo);
                $('.calc__square-number').html(currentInfo);
                calculate();

            }
        }

    });

    //////////////////////////////
    function calculate() {
        let arrVal = [];
        for (let i = 0; i < 5; i++) {
            arrVal[i] = $(`.calc__select-item select:eq(${i})`).val();
        }
        let square = $('.calc__scale-info').html();
        let result = Math.round(arrVal[0] * arrVal[1] * arrVal[2] * arrVal[3] * arrVal[4] * square);
        $('.calc__footer-number1').html(result);
        console.log(result);

    }


    $('.calc__select-item select').on('change', calculate);
    console.log($('.calc__select-item select:eq(0)').val());

});