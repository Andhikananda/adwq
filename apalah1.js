function jquery_onload() {
    $('html, body').animate({
        'scrollTop': $('#welcome').offset().top
    }, 0), $('html, body').animate({
        'scrollLeft': $('#welcome').offset().left
    }, 0), $(document).on('click', 'a[href*="#about"]', function (_0x4ae5cc) {
        _0x4ae5cc.preventDefault(), $('html, body').animate({
            'scrollLeft': $('#about').offset().left
        }, 400);
    }), $(document).on('click', 'a[href*="#loop"]', function (_0x2c7597) {
        _0x2c7597.preventDefault(), $('html, body').animate({
            'scrollTop': $('#loop').offset().top
        }, 200);
    }), $(document).on('click', 'a[href*="#contact"]', function (_0x5bb07e) {
        _0x5bb07e.preventDefault(), $('html, body').animate({
            'scrollLeft': $('#contact').offset().left
        }, 400);
    }), $(document).on('click', 'a[href*="#welcome"]', function (_0x3866dd) {
        _0x3866dd.preventDefault(), $('html, body').animate({
            'scrollTop': $('#welcome').offset().top
        }, 200);
    }), lazyload();
}
function lazyload() {
    $('[data-src]').each(function () {
        var $(this) = $(this),
            data_src = $(this).attr('data-src'),
            andhikaa = $(this).prop('tagName').toLowerCase(),
            ananda = $(this).offset().top,
            sayang = $(window).height() * Number2;
        ananda < sayang && (andhikaa == 'img' || andhikaa == 'iframe' ? ($(this).attr('src', data_src), $(this).on('load', function () {
            $(this).addClass('loaded'), setTimeout(function () {
                $(this).removeClass('loaded').removeAttr('data-src');
            }, 100);
        })) : $('<img/>').attr('src', data_src).on('load', function () {
            $(this).remove(), $(this).css('background-image', 'url(' + data_src + ')'), $(this).addClass('loaded'), setTimeout(function () {
                $(this).removeClass('loaded').removeAttr('data-src');
            }, 100);
        }));
    }), $(window).on('scroll', function () {
        $('[data-src]').each(function () {
            var dfd = $(this),
                data_src = $(this).attr('data-src'),
                fgf = $(this).prop('tagName').toLowerCase(),
                fgfggd = $(this).offset().top;
            if (data_src) {
                var aew = $(window).height(),
                    heh = $(window).scrollTop();
                heh + aew > fgfggd && (fgf == 'img' || fgf == 'iframe' ? (dfd.attr('src', data_src), dfd.on('load', function () {
                    dfd.addClass('loaded'), setTimeout(function () {
                        dfd.removeClass('loaded').removeAttr('data-src');
                    }, 100);
                })) : $('<img/>').attr('src', data_src).on('load', function () {
                    $(this).remove(), dfd.css('background-image', 'url(' + data_src + ')'), dfd.addClass('loaded'), setTimeout(function () {
                        dfd.removeClass('loaded').removeAttr('data-src');
                    }, 100);
                }));
            }
        });
    });
}
