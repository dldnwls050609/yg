$(function () {
    $('.header .menu').mouseenter(function () {
        $('header').stop().animate({
            height: '392px',
        }, 200)
        $('header, header .menu > ul> li > a').addClass('on')
        $('.logo, .logo > a > img').addClass('w')
        $('.right .language li .ko').addClass('wc')
        $('.right .language li .ko').addClass('wc')
        $('.right .language li img').addClass('wb')
    })

    $('header').hover(function () {
        $('header').stop().animate({
            height: '100px',
        }, 200)
        $('header, header .menu > ul> li > a').removeClass('on')
        $('.logo, .logo > a > img').removeClass('w')
        $('.right .language li .ko').removeClass('wc')
        $('.right .language li img').removeClass('wb')

    })

    $('.bp3 .t').mouseenter(function () {
        $('.bg').toggleClass('t')
        $('.bp2 h3, .bp1 h3').css({
            opacity: '0.7'
        })
    })

    $('.bp3').mouseleave(function () {

        $('.bg').toggleClass('t')
        $('.bp2 h3, .bp1 h3').css({
            opacity: '1'
        })
    })

    $('.bp2 .t').mouseenter(function () {
        $('.bg').toggleClass('t1')
        $('.bp3 h3, .bp1 h3').css({
            opacity: '0.7'
        })
    })
    $('.bp2').mouseleave(function () {
        $('.bg').toggleClass('t1')
        $('.bp3 h3, .bp1 h3').css({
            opacity: '1'
        })
    })

    $('.bp1 .t').mouseenter(function () {
        $('.bg').toggleClass('t2')
        $('.bp2 h3, .bp3 h3').css({
            opacity: '0.7'
        })
    })
    $('.bp1').mouseleave(function () {
        $('.bg').toggleClass('t2')
        $('.bp2 h3, .bp3 h3').css({
            opacity: '1'
        })
    })
})
