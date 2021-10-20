$('.js-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: true,
    nextArrow: '<button id="next" type="button" class="slick-next slick-arrow"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_b_48:369)">\n' +
        '<rect x="70" y="70" width="70" height="70" rx="17" transform="rotate(180 70 70)" fill="white" fill-opacity="0.05"/>\n' +
        '</g>\n' +
        '<path d="M42.5 34.634C43.1667 35.0189 43.1667 35.9811 42.5 36.366L32.75 41.9952C32.0833 42.3801 31.25 41.899 31.25 41.1292L31.25 29.8708C31.25 29.101 32.0833 28.6199 32.75 29.0048L42.5 34.634Z" fill="white"/>\n' +
        '<defs>\n' +
        '<filter id="filter0_b_48:369" x="-60" y="-60" width="190" height="190" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feGaussianBlur in="BackgroundImage" stdDeviation="30"/>\n' +
        '<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_48:369"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_48:369" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg></button>',
    prevArrow: '<button id="prev" type="button" class="slick-prev slick-arrow"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_b_48:370)">\n' +
        '<rect width="70" height="70" rx="17" fill="white" fill-opacity="0.05"/>\n' +
        '</g>\n' +
        '<path d="M28.5 36.366C27.8333 35.9811 27.8333 35.0189 28.5 34.634L38.25 29.0048C38.9167 28.6199 39.75 29.101 39.75 29.8708L39.75 41.1292C39.75 41.899 38.9167 42.3801 38.25 41.9952L28.5 36.366Z" fill="white"/>\n' +
        '<defs>\n' +
        '<filter id="filter0_b_48:370" x="-60" y="-60" width="190" height="190" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feGaussianBlur in="BackgroundImage" stdDeviation="30"/>\n' +
        '<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_48:370"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_48:370" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: false
            }
        }
    ]
})

$('#change-theme').change(function () {
    if ($(this).is(':checked')) {
        $('body').addClass('dark')
        $('body').removeClass('light')
    }
    else {
        $('body').addClass('light')
        $('body').removeClass('dark')
    }
})

if ($(document).width() > 768 && $('.js-slider-programs').hasClass('slick-initialized')) {
    $('.js-slider-programs').slick('unslick')
}
else if($(document).width() <= 768 && $('.js-slider-programs').not('.slick-initialized')) {
    $('.js-slider-programs').slick({
        dots: false,
        centerMode: false,
        variableWidth: true,
        infinite: true,
        arrows: false
    })
}

if ($(document).width() > 768 && $('.js-slider-news').hasClass('slick-initialized')) {
    $('.js-slider-news').slick('unslick')
}
else if($(document).width() <= 768 && $('.js-slider-news').not('.slick-initialized')) {
    $('.js-slider-news').slick({
        dots: false,
        centerMode: false,
        variableWidth: true,
        infinite: true,
        arrows: false
    })
}
if ($(document).width() < 768 && $('.js-slider-tracks').hasClass('slick-initialized')) {
    $('.js-slider-tracks').slick('unslick')
}
else if($(document).width() >= 768 && $('.js-slider-tracks').not('.slick-initialized')) {
    $('.js-slider-tracks').slick({
        dots: false,
        centerMode: false,
        variableWidth: true,
        infinite: true,
        arrows: true,
        nextArrow: '<button id="next" type="button" class="slick-next slick-arrow"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g filter="url(#filter0_b_48:369)">\n' +
            '<rect x="70" y="70" width="70" height="70" rx="17" transform="rotate(180 70 70)" fill="white" fill-opacity="0.05"/>\n' +
            '</g>\n' +
            '<path d="M42.5 34.634C43.1667 35.0189 43.1667 35.9811 42.5 36.366L32.75 41.9952C32.0833 42.3801 31.25 41.899 31.25 41.1292L31.25 29.8708C31.25 29.101 32.0833 28.6199 32.75 29.0048L42.5 34.634Z" fill="white"/>\n' +
            '<defs>\n' +
            '<filter id="filter0_b_48:369" x="-60" y="-60" width="190" height="190" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feGaussianBlur in="BackgroundImage" stdDeviation="30"/>\n' +
            '<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_48:369"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_48:369" result="shape"/>\n' +
            '</filter>\n' +
            '</defs>\n' +
            '</svg></button>',
        prevArrow: '<button id="prev" type="button" class="slick-prev slick-arrow"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g filter="url(#filter0_b_48:370)">\n' +
            '<rect width="70" height="70" rx="17" fill="white" fill-opacity="0.05"/>\n' +
            '</g>\n' +
            '<path d="M28.5 36.366C27.8333 35.9811 27.8333 35.0189 28.5 34.634L38.25 29.0048C38.9167 28.6199 39.75 29.101 39.75 29.8708L39.75 41.1292C39.75 41.899 38.9167 42.3801 38.25 41.9952L28.5 36.366Z" fill="white"/>\n' +
            '<defs>\n' +
            '<filter id="filter0_b_48:370" x="-60" y="-60" width="190" height="190" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feGaussianBlur in="BackgroundImage" stdDeviation="30"/>\n' +
            '<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_48:370"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_48:370" result="shape"/>\n' +
            '</filter>\n' +
            '</defs>\n' +
            '</svg></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: false
                }
            }
        ]
    })
}

const userIsDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

$(document).ready(function () {
    if(userIsDark) {
        $('body').addClass('dark')
    }
    else {
        $('body').addClass('light')
    }
})

$('.js-slider-videos').slick({
    dots: false,
    centerMode: false,
    variableWidth: true,
    infinite: true,
    arrows: true,
    nextArrow: '<button id="next" type="button" class="slick-next slick-arrow"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_b_48:369)">\n' +
        '<rect x="70" y="70" width="70" height="70" rx="17" transform="rotate(180 70 70)" fill="white" fill-opacity="0.05"/>\n' +
        '</g>\n' +
        '<path d="M42.5 34.634C43.1667 35.0189 43.1667 35.9811 42.5 36.366L32.75 41.9952C32.0833 42.3801 31.25 41.899 31.25 41.1292L31.25 29.8708C31.25 29.101 32.0833 28.6199 32.75 29.0048L42.5 34.634Z" fill="white"/>\n' +
        '<defs>\n' +
        '<filter id="filter0_b_48:369" x="-60" y="-60" width="190" height="190" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feGaussianBlur in="BackgroundImage" stdDeviation="30"/>\n' +
        '<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_48:369"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_48:369" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg></button>',
    prevArrow: '<button id="prev" type="button" class="slick-prev slick-arrow"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_b_48:370)">\n' +
        '<rect width="70" height="70" rx="17" fill="white" fill-opacity="0.05"/>\n' +
        '</g>\n' +
        '<path d="M28.5 36.366C27.8333 35.9811 27.8333 35.0189 28.5 34.634L38.25 29.0048C38.9167 28.6199 39.75 29.101 39.75 29.8708L39.75 41.1292C39.75 41.899 38.9167 42.3801 38.25 41.9952L28.5 36.366Z" fill="white"/>\n' +
        '<defs>\n' +
        '<filter id="filter0_b_48:370" x="-60" y="-60" width="190" height="190" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feGaussianBlur in="BackgroundImage" stdDeviation="30"/>\n' +
        '<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_48:370"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_48:370" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: false
            }
        }
    ]
})

$('.js-slider-new').slick({
    dots: false,
    centerMode: false,
    variableWidth: true,
    infinite: true,
    arrows: true,
    nextArrow: '<button id="next" type="button" class="slick-next slick-arrow"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_b_48:369)">\n' +
        '<rect x="70" y="70" width="70" height="70" rx="17" transform="rotate(180 70 70)" fill="white" fill-opacity="0.05"/>\n' +
        '</g>\n' +
        '<path d="M42.5 34.634C43.1667 35.0189 43.1667 35.9811 42.5 36.366L32.75 41.9952C32.0833 42.3801 31.25 41.899 31.25 41.1292L31.25 29.8708C31.25 29.101 32.0833 28.6199 32.75 29.0048L42.5 34.634Z" fill="white"/>\n' +
        '<defs>\n' +
        '<filter id="filter0_b_48:369" x="-60" y="-60" width="190" height="190" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feGaussianBlur in="BackgroundImage" stdDeviation="30"/>\n' +
        '<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_48:369"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_48:369" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg></button>',
    prevArrow: '<button id="prev" type="button" class="slick-prev slick-arrow"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_b_48:370)">\n' +
        '<rect width="70" height="70" rx="17" fill="white" fill-opacity="0.05"/>\n' +
        '</g>\n' +
        '<path d="M28.5 36.366C27.8333 35.9811 27.8333 35.0189 28.5 34.634L38.25 29.0048C38.9167 28.6199 39.75 29.101 39.75 29.8708L39.75 41.1292C39.75 41.899 38.9167 42.3801 38.25 41.9952L28.5 36.366Z" fill="white"/>\n' +
        '<defs>\n' +
        '<filter id="filter0_b_48:370" x="-60" y="-60" width="190" height="190" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feGaussianBlur in="BackgroundImage" stdDeviation="30"/>\n' +
        '<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_48:370"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_48:370" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: false
            }
        }
    ]
})

if ($('.news__content').length) {
    if ($(document).width() > 768) {
        const top = $('.news__wrapper').position().top
        const bottom = $('.news__wrapper').height()
        $(document).scroll(function (e) {
            const s = $(window).scrollTop()
            if (s > top && s < bottom) {
                $('.news__banner').css('top', s - top - 200)
            }
        })
    }

}