$('.js-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    swipe: true,
    swipeToSlide: true,
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
    } else {
        $('body').addClass('light')
        $('body').removeClass('dark')
    }
})

if ($(document).width() > 768 && $('.js-slider-programs').hasClass('slick-initialized')) {
    $('.js-slider-programs').slick('unslick')
} else if ($(document).width() <= 768 && $('.js-slider-programs').not('.slick-initialized')) {
    $('.js-slider-programs').slick({
        dots: false,
        centerMode: false,
        variableWidth: true,
        swipe: true,
        swipeToSlide: true,
        infinite: true,
        arrows: false
    })
}

if ($(document).width() > 768 && $('.js-slider-news').hasClass('slick-initialized')) {
    $('.js-slider-news').slick('unslick')
} else if ($(document).width() <= 768 && $('.js-slider-news').not('.slick-initialized')) {
    $('.js-slider-news').slick({
        dots: false,
        centerMode: false,
        variableWidth: true,
        infinite: true,
        swipe: true,
        swipeToSlide: true,
        arrows: false
    })
}
if ($(document).width() < 768 && $('.js-slider-tracks').hasClass('slick-initialized')) {
    $('.js-slider-tracks').slick('unslick')
} else if ($(document).width() >= 768 && $('.js-slider-tracks').not('.slick-initialized')) {
    $('.js-slider-tracks').slick({
        dots: false,
        centerMode: false,
        variableWidth: true,
        infinite: true,
        arrows: true,
        swipe: true,
        swipeToSlide: true,
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
    if (userIsDark) {
        $('body').addClass('dark')
    } else {
        $('body').addClass('light')
    }
})

$('.js-slider-videos').slick({
    dots: false,
    centerMode: false,
    variableWidth: true,
    infinite: true,
    arrows: true,
    swipe: true,
    swipeToSlide: true,
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
    swipe: true,
    swipeToSlide: true,
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

if ($(document).width() > 768) {
    var top = 124
    $(document).scroll(function () {
        const s = $(window).scrollTop()
        var isScroll = top - s
        if (isScroll > 0) {
            $('.radio').css('top', isScroll)
        } else {
            $('.radio').css('top', 0)
        }
    })
}

const radio = {
    el: $('#audio')[0],
    audios: [],
    settings: {
        play: false,
        volume: 1,
        radioLink: 'https://live.arshin.ru:8444/discovery',
        mute: false,
        onPlay: '<svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M9.88075 4.08234C10.6843 4.43027 10.6843 5.56973 9.88075 5.91766L1.39736 9.59108C0.737077 9.87699 4.99384e-07 9.39294 5.30836e-07 8.67342L8.51976e-07 1.32659C8.83428e-07 0.607058 0.737078 0.123011 1.39736 0.408922L9.88075 4.08234Z" fill="white"/>\n' +
            '</svg>',
        onPause: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16">\n' +
            '  <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>\n' +
            '</svg>',
        volumeOff: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">\n' +
            '  <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>\n' +
            '  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>\n' +
            '  <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>\n' +
            '</svg>',
        volumeOn: ' <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '                            <path d="M8.65569 0.103125C8.77746 0.161787 8.88023 0.253598 8.95218 0.368019C9.02414 0.48244 9.06238 0.614833 9.0625 0.75V12.25C9.06231 12.3852 9.02396 12.5177 8.95186 12.6321C8.87977 12.7466 8.77685 12.8383 8.65493 12.8969C8.53302 12.9554 8.39706 12.9784 8.26267 12.9631C8.12829 12.9479 8.00094 12.895 7.89525 12.8106L4.49844 10.0938H1.15625C0.965626 10.0938 0.782809 10.018 0.648017 9.88323C0.513225 9.74844 0.4375 9.56562 0.4375 9.375V3.625C0.4375 3.43438 0.513225 3.25156 0.648017 3.11677C0.782809 2.98198 0.965626 2.90625 1.15625 2.90625H4.49844L7.89525 0.189374C8.00101 0.104832 8.1285 0.0518821 8.26303 0.0366229C8.39757 0.0213637 8.53368 0.0444159 8.65569 0.103125ZM18.9151 3.11612C18.9821 3.18289 19.0352 3.26221 19.0714 3.34953C19.1076 3.43685 19.1263 3.53046 19.1263 3.625C19.1263 3.71954 19.1076 3.81315 19.0714 3.90047C19.0352 3.98779 18.9821 4.06711 18.9151 4.13387L16.5476 6.5L18.9151 8.86612C19.0501 9.00109 19.1259 9.18413 19.1259 9.375C19.1259 9.56586 19.0501 9.74891 18.9151 9.88387C18.7802 10.0188 18.5971 10.0947 18.4062 10.0947C18.2154 10.0947 18.0323 10.0188 17.8974 9.88387L15.5312 7.51631L13.1651 9.88387C13.0302 10.0188 12.8471 10.0947 12.6562 10.0947C12.4654 10.0947 12.2823 10.0188 12.1474 9.88387C12.0124 9.74891 11.9366 9.56586 11.9366 9.375C11.9366 9.18413 12.0124 9.00109 12.1474 8.86612L14.5149 6.5L12.1474 4.13387C12.0805 4.06705 12.0275 3.98771 11.9914 3.9004C11.9552 3.81309 11.9366 3.71951 11.9366 3.625C11.9366 3.53049 11.9552 3.43691 11.9914 3.3496C12.0275 3.26229 12.0805 3.18295 12.1474 3.11612C12.2823 2.98116 12.4654 2.90534 12.6562 2.90534C12.7508 2.90534 12.8443 2.92396 12.9317 2.96012C13.019 2.99629 13.0983 3.0493 13.1651 3.11612L15.5312 5.48369L17.8974 3.11612C17.9641 3.04919 18.0435 2.99608 18.1308 2.95985C18.2181 2.92362 18.3117 2.90497 18.4062 2.90497C18.5008 2.90497 18.5944 2.92362 18.6817 2.95985C18.769 2.99608 18.8484 3.04919 18.9151 3.11612Z" fill="white"/>\n' +
            '                            </svg>'
    },
    init() {
        if (this.settings.play) {
            if (this.el.src === this.settings.radioLink) {
                this.el.play()
            }
        }
        this.changePlayHtml()
        this.changeMuteHtml()
        this.isRadio()
    },
    pause() {
        this.el.pause()
    },
    isRadio() {
      if (this.el.src === this.settings.radioLink) {
          $('#backToRadio').hide()
      }
      else {
          $('#backToRadio').show()
      }
    },
    changeAudioStatus() {
        if (this.el.src === this.settings.radioLink) {
            if (this.settings.play) {
                this.el.pause()
                this.settings.play = false
            } else {
                this.audios.map(item => {
                    item.audio.pause()
                    $('.efir__play').removeClass('play')
                })
                this.el.play()
                this.settings.play = true
            }
        }
        else {
            if (this.settings.play) {
                this.audios.map(item => {
                    item.audio.pause()
                    $('.efir__play').removeClass('play')
                })
            }
            else {
                this.audios[this.el.getAttribute('data-id')].audio.play()
            }

            this.settings.play = !this.settings.play
        }

        this.changePlayHtml()
    },
    changeAudio(elem, index) {
        this.el.pause()
        this.settings.play = true
        this.el.src = elem.attr('src')
        this.el.setAttribute('data-id', index)
        this.el.setAttribute('data-radio', false)
        //this.changePlayHtml()
        $('#radioName').text(elem.closest('.efir').find('.efir__name').text())
        $('#radioAuthor').text(elem.closest('.efir').find('.efir__author').text())
        this.changeMuteHtml()
        this.changePlayHtml()
        this.isRadio()
        //this.init()
    },
    changePlayHtml() {
        if (this.settings.play) {
            $('.radio__play').html(this.settings.onPause)
        } else {
            $('.radio__play').html(this.settings.onPlay)
        }
    },
    changeMute() {
        this.settings.mute = !this.settings.mute
        if (this.settings.mute) {
            this.el.volume = 0
            this.audios.map(item => {
                item.audio.setVolume(0)
            })
        } else {
            this.el.volume = this.settings.volume
            this.audios.map(item => {
                item.audio.setVolume(this.settings.volume)
            })
        }
        this.changeMuteHtml()
    },
    changeVolume(val) {
        this.settings.volume = val
        this.el.volume = val
        if (val == 0) {
            this.settings.mute = true
        }
        if (val > 0) {
            this.settings.mute = false
        }
        this.audios.map(item => {
            item.audio.setVolume(val)
        })
        this.changeMuteHtml()
    },
    goToRadio() {
        this.el.src = this.settings.radioLink
        this.settings.play = true
        this.el.setAttribute('data-radio', true)
        this.el.setAttribute('data-id', undefined)
        this.audios.map(item => {
            $('.efir__play').removeClass('play')
            item.audio.pause()
        })
        this.init()
    },
    changeMuteHtml() {
        if (this.settings.mute) {
            $('.radio__mute').html(this.settings.volumeOff)
            $('#rangeAudio').val(0)
        } else {
            $('.radio__mute').html(this.settings.volumeOn)
            if (this.settings.volume == 0) {
                this.settings.volume = 1
            }
            $('#rangeAudio').val(this.settings.volume)
        }
    }
}


$(document).ready(function () {
    radio.init()
    $('.efir__music').each(function () {
        const index =  radio.audios.length
        const audio = $(this)
        const container = $(this).closest('.efir').find('.efir__bars')[0]
        let wavesurfer = WaveSurfer.create({
            container: container,
            barWidth: 4,
            barHeight: 1,
            height: 40,
            skipLength: 0,
            progressColor: '#733CF5',
            waveColor: userIsDark ? '#EEEEEE' : '#BABABA',
            backend: 'MediaElement',
            barRadius: 2,
            mediaType:'audio',
            cursorWidth: 0
        });
        wavesurfer.on('ready', function () {
            const timer = wavesurfer.getDuration()
            var date = new Date(0);
            date.setSeconds(timer);
            audio.closest('.efir').find('.efir__time').text(date.toISOString().substr(14, 5))
        })
        wavesurfer.on('finish', function () {
            audio.closest('.efir').find('.efir__play').removeClass('play')
            const findAudio = radio.audios[index + 1]
            if (findAudio) {
                findAudio.el.closest('.efir').find('.efir__play').addClass('play')
                findAudio.audio.play()
                radio.changeAudio(findAudio.el, findAudio.index)
            }
        })
        radio.audios.push({audio: wavesurfer, el: $(this), index: index})
        wavesurfer.load($(this).attr('src'));
        $(this).closest('.efir').find('.efir__play').click(function () {
            if ($(this).hasClass('play')) {
                $(this).removeClass('play')
                wavesurfer.pause()
            }
            else {
                $('.efir__play').removeClass('play')
                $(this).addClass('play')
                radio.changeAudio(audio, index)
                radio.audios.map(item => {
                    item.audio.pause()
                })
                wavesurfer.play()
            }

        })
    })
})

$('.video__image').click(function () {
    const src = $(this).attr('data-frame')
    $(this).parent().find('iframe').attr('src', src)
    $(this).hide()
})
$('.radio__play').click(function () {
    radio.changeAudioStatus()
})
$('.radio__mute').click(function () {
    radio.changeMute()
})
$('#rangeAudio').change(function (e) {
    radio.changeVolume(e.target.value)
})
$('#backToRadio').click(function (e) {
    e.preventDefault()
    radio.goToRadio()
    return false
})