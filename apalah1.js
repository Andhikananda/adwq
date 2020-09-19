function jquery_onload() {
    $('html, body').animate({
        'scrollTop': $('#welcome').offset().top
    }, 0), $('html, body').animate({
        'scrollLeft': $('#welcome').offset().left
    }, 0), $(document).on('click', 'a[href*="#about"]', function (h) {
        h.preventDefault(), $('html, body').animate({
            'scrollLeft': $('#about').offset().left
        }, 400);
    }), $(document).on('click', 'a[href*="#loop"]', function (c) {
        c.preventDefault(), $('html, body').animate({
            'scrollTop': $('#loop').offset().top
        }, 200);
    }), $(document).on('click', 'a[href*="#contact"]', function (b) {
        b.preventDefault(), $('html, body').animate({
            'scrollLeft': $('#contact').offset().left
        }, 400);
    }), $(document).on('click', 'a[href*="#welcome"]', function (e) {
        e.preventDefault(), $('html, body').animate({
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
            var ad = $(this).offset().top;
            if ($(this).attr('data-src')) {
                var af = $(window).height(),
                    ae = $(window).scrollTop();
                ae + af > ad && ($(this).prop('tagName').toLowerCase() == 'img' || $(this).prop('tagName').toLowerCase() == 'iframe' ? ($(this).attr('src', $(this).attr('data-src')), $(this).on('load', function () {
                    $(this).addClass('loaded'), setTimeout(function () {
                        $(this).removeClass('loaded').removeAttr('data-src');
                    }, 100);
                })) : $('<img/>').attr('src', $(this).attr('data-src')).on('load', function () {
                    $(this).remove(), $(this).css('background-image', 'url(' + $(this).attr('data-src') + ')'), $(this).addClass('loaded'), setTimeout(function () {
                        $(this).removeClass('loaded').removeAttr('data-src');
                    }, 100);
                }));
            }
        });
    });
}
