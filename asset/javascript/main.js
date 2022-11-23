const Header_main_nav_bar_background = document.querySelector('.js-header-main__nav-bar-background')
const Header_main_nav_bar_btn_open = document.querySelector('.js-header-main__nav-bar-btn-open')
const Header_main_nav_bar_btn_close = document.querySelector('.js-header-main__nav-bar-btn-close')
const Header_main_nav_bar_menu = document.querySelector('.js-header-main__nav-bar-menu')
const header_main_nav_bar_menu_wrap = document.querySelector('.js-header-main__nav-bar-menu-wrap')
const js_menu_mobile_child_1 = document.querySelector('.js-menu-mobile-child-1')
const js_menu_child_btn_enter_1s = document.querySelector('.js-menu-child-btn-enter-1')
const js_menu_child_btn_back_1 = document.querySelector('.js-menu-child-btn-back-1')
const js_menu_mobile_child_2 = document.querySelector('.js-menu-mobile-child-2')
const js_menu_child_btn_enter_2 = document.querySelector('.js-menu-child-btn-enter-2')
const js_menu_child_btn_back_2 = document.querySelector('.js-menu-child-btn-back-2')
const wall1 = document.querySelector('.header-main__nav-bar-menu-list')
const header__navbar_wrap = document.querySelector('.header__navbar-wrap')
const header_main__category_list = document.querySelector('.js-header-main__category-list')
const header_main__link_nb1 = document.querySelector('.header-main__link-nb1')
const header_main__link_nb2 = document.querySelector('.header-main__link-nb2')
const header_main_cancel_btn = document.querySelector('.header-main_cancel-btn')
const focus_search_input = document.querySelector('.js-focus-search-input')
const header_main = document.querySelector('.header-main')
const header_main__input_box = document.querySelector('.header-main__input-box')
const header_main__input_top_search_list = document.querySelector('.header-main__input-top-search-list')
const header_main_container = document.querySelector('.header-main-container')
const header_main__input_box_wrap = document.querySelector('.header-main__input-box-wrap')
const header_main__input_top_search_title = document.querySelector('.header-main__input-top-search-title')
const header_main__category_itemss = document.querySelectorAll('.header-main__category-items ')
const header_main__input_box_icon = document.querySelector('.header-main__input-box-icon')
const header_main__logo_box = document.querySelector('.header-main__logo-box')
const header_main__wrap = document.querySelector('.header-main__wrap')
const header_main__category_menu = document.querySelector('.header-main__category-menu')
const category_2__wrap = document.querySelector('.category-2__wrap')
const category_2__list_2s = document.querySelectorAll('.category-2__list-2')
const get_help_menu = document.querySelector('.js-get-help-menu')
const about_nike_menu = document.querySelector('.js-about-nike-menu')
const get_help_btn = document.querySelector('.js-get-help-btn')
const about_nike_btn = document.querySelector('.js-about-nike-btn')
const get_help_icon_plus = document.querySelector('.js-get-help-icon-plus')
const get_help_icon_minus = document.querySelector('.js-get-help-icon-minus')
const about_nike_icon_plus = document.querySelector('.js-about-nike-icon-plus')
const about_nike_icon_minus = document.querySelector('.js-about-nike-icon-minus')
const footer__about_nike_btn_close_get_help = document.querySelector('.footer__about-nike-btn-close-get-help')
const footer__about_nike_btn_close = document.querySelector('.footer__about-nike-btn-close')
let footer__contact_nike_guides_wall = document.querySelector('.js-footer__contact-nike-guides-wall')
const menu_guides = document.querySelector('.footer__contact-nike-guides-menu')
const footer__contact_nike_guides_menu_btn = document.querySelector('.js-footer__contact-nike-guides-menu-btn')
const footer__contact_nike_guides_menu_close_btn = document.querySelector('.footer__contact-nike-guides-menu-close-btn')
const category_2__title_1 = document.querySelector('.category-2__title--1')
const category_2__title_2 = document.querySelector('.category-2__title--2')
const category_2__title_3 = document.querySelector('.category-2__title--3')
const category_2__title_4 = document.querySelector('.category-2__title--4')
const category_2__title_5 = document.querySelector('.category-2__title--5')
const category_2__title_close_btn_walls = document.querySelectorAll('.category-2__title-close-btn')
const category_2__title_close_btn_1 = document.querySelector('.category-2__title-close-btn--1')
const category_2__title_close_btn_2 = document.querySelector('.category-2__title-close-btn--2')
const category_2__title_close_btn_3 = document.querySelector('.category-2__title-close-btn--3')
const category_2__title_close_btn_4 = document.querySelector('.category-2__title-close-btn--4')
const category_2__title_close_btn_5 = document.querySelector('.category-2__title-close-btn--5')
const category_2_walls = document.querySelectorAll('.category-2__wall')

Header_main_nav_bar_btn_open.addEventListener('click', Header_main_nav_bar_open)
Header_main_nav_bar_menu.addEventListener('click', function (event) { event.stopImmediatePropagation() })
wall1.addEventListener('click', function (event) { event.stopImmediatePropagation() })
Header_main_nav_bar_btn_close.addEventListener('click', Header_main_nav_bar_close)
Header_main_nav_bar_background.addEventListener('click', Header_main_nav_bar_close)
Header_main_nav_bar_background.addEventListener('click', close_focus_search_input)
js_menu_child_btn_enter_1s.addEventListener('click', enter_menu_child_1)
js_menu_child_btn_back_1.addEventListener('click', back_menu_child_1)
js_menu_child_btn_enter_2.addEventListener('click', enter_menu_child_2)
js_menu_child_btn_back_2.addEventListener('click', back_menu_child_2)
focus_search_input.addEventListener('click', open_focus_search_input)
header_main__input_box_icon.addEventListener('click', open_focus_search_input)
header_main_cancel_btn.addEventListener('click', close_focus_search_input);
get_help_btn.addEventListener('click', show_menu_get_help)
get_help_icon_plus.addEventListener('click', show_menu_get_help)
about_nike_btn.addEventListener('click', show_menu_about_nike)
about_nike_icon_plus.addEventListener('click', show_menu_about_nike)
footer__about_nike_btn_close_get_help.addEventListener('click', hide_menu_get_help)
footer__about_nike_btn_close.addEventListener('click', hide_menu_about_nike)
footer__contact_nike_guides_menu_btn.addEventListener('mouseout', hide_menu_guides)
footer__contact_nike_guides_menu_btn.addEventListener('mouseover', show_menu_guides)
menu_guides.addEventListener('mouseout', hide_menu_guides_2)
menu_guides.addEventListener('mouseover', show_menu_guides_2)
footer__contact_nike_guides_wall.addEventListener('mouseout', hide_menu_guides3)
footer__contact_nike_guides_menu_close_btn.addEventListener('click', hide_menu_guides)
category_2__title_1.addEventListener('click', show_category_2__title_1)
category_2__title_2.addEventListener('click', show_category_2__title_2)
category_2__title_3.addEventListener('click', show_category_2__title_3)
category_2__title_4.addEventListener('click', show_category_2__title_4)
category_2__title_close_btn_1.addEventListener('click', hide_category_2__title_1)
category_2__title_close_btn_2.addEventListener('click', hide_category_2__title_2)
category_2__title_close_btn_3.addEventListener('click', hide_category_2__title_3)
category_2__title_close_btn_4.addEventListener('click', hide_category_2__title_4)
Header_main_nav_bar_background.addEventListener('mouseover', hide_category_menu)
header_main__logo_box.addEventListener('mouseover', hide_category_menu)
header_main__input_box_wrap.addEventListener('mouseover', hide_category_menu)
for (const category_2_wall of category_2_walls) {
    category_2_wall.addEventListener('click', function (event) { event.stopImmediatePropagation() })
}
// for (const header_main__category_items of header_main__category_itemss) {
//     header_main__category_items.addEventListener('mouseover', show_category_menu)
// }

function show_category_menu() {
    Header_main_nav_bar_background.classList.add('module-category_menu--show-ds');
    setTimeout(function () {
        Header_main_nav_bar_background.classList.add('module-category_menu--show-op');
        header_main_container.classList.add('fly')
        header_main__category_menu.classList.remove('hide')
    }, 100);
}
function hide_category_menu() {
    setTimeout(() => {
        header_main_container.classList.remove('fly')
        header_main__category_menu.classList.add('hide')
        Header_main_nav_bar_background.classList.remove('module-category_menu--show-ds');
        Header_main_nav_bar_background.classList.remove('module-category_menu--show-op');
    }, 100);
}

function Header_main_nav_bar_open() {
    header_main_nav_bar_menu_wrap.classList.add('show');
    Header_main_nav_bar_background.classList.remove('hide');
    setTimeout(function () {
        Header_main_nav_bar_background.classList.add('show');
    }, 200)
}
function Header_main_nav_bar_close() {
    Header_main_nav_bar_background.classList.add('hide');
    header_main_nav_bar_menu_wrap.classList.remove('show');
    Header_main_nav_bar_menu.classList.remove('hide');
    js_menu_mobile_child_1.classList.add('hide');
    js_menu_mobile_child_2.classList.add('hide');
    Header_main_nav_bar_background.classList.remove('show');
}

function enter_menu_child_1() {
    header_main_nav_bar_menu_wrap.classList.remove('show')
    setTimeout(function () {
        Header_main_nav_bar_menu.classList.add('hide');
        js_menu_mobile_child_1.classList.remove('hide');
        header_main_nav_bar_menu_wrap.classList.add('show');
    }, 200)
}

function back_menu_child_1() {
    header_main_nav_bar_menu_wrap.classList.remove('show');
    setTimeout(function () {
        js_menu_mobile_child_1.classList.add('hide');
        Header_main_nav_bar_menu.classList.remove('hide');
        header_main_nav_bar_menu_wrap.classList.add('show');
    }, 200)
}
function enter_menu_child_2() {
    header_main_nav_bar_menu_wrap.classList.remove('show')
    setTimeout(function () {
        js_menu_mobile_child_1.classList.add('hide');
        js_menu_mobile_child_2.classList.remove('hide');
        header_main_nav_bar_menu_wrap.classList.add('show');
    }, 200)
}
function back_menu_child_2() {
    header_main_nav_bar_menu_wrap.classList.remove('show')
    setTimeout(function () {
        js_menu_mobile_child_2.classList.add('hide');
        js_menu_mobile_child_1.classList.remove('hide');
        header_main_nav_bar_menu_wrap.classList.add('show');
    }, 200)
}

function open_focus_search_input() {
    stopShowHeader = "stop"
    header_main_container.classList.add('focus-search-input')
    header__navbar_wrap.classList.add('focus-search-input')
    Header_main_nav_bar_background.classList.remove('hide');
    header_main__input_box.classList.add('focus-search-input')
    focus_search_input.classList.add('show-mobile-tablet')
    Header_main_nav_bar_btn_open.classList.add('hide-mobile-tablet')
    header_main__logo_box.classList.add('hide-mobile-tablet')
    header_main__link_nb1.classList.add('hide')
    header_main__link_nb2.classList.add('hide')
    setTimeout(function () {
        header_main__input_box_wrap.classList.add('focus-search-input')
        header_main__category_list.classList.add('visibility-hide')
        focus_search_input.classList.add('focus-search-input')
        header_main_container.classList.add('module')
        header_main.classList.add('focus-search-input')
    }, 100)
    setTimeout(() => {
        Header_main_nav_bar_background.classList.add('show');
    }, 100)
    setTimeout(function () {
        header_main__input_top_search_title.classList.add('focus-search-input')
    }, 360)
    setTimeout(function () {
        header_main_cancel_btn.classList.remove('hide')
        header_main__input_top_search_list.classList.add('focus-search-input')
    }, 400)
    setTimeout(function () {
        header_main__input_top_search_list.classList.add('focus-search-input')
        header_main__category_list.classList.add('opacity-0')
        header_main__link_nb1.classList.add('opacity-0')
        header_main__link_nb2.classList.add('opacity-0')
    }, 600)
}

function close_focus_search_input() {
    stopShowHeader = "run"
    header_main_container.classList.remove('focus-search-input')
    Header_main_nav_bar_background.classList.remove('show');
    Header_main_nav_bar_background.classList.add('hide');
    header_main__input_top_search_title.classList.remove('focus-search-input')
    header_main__input_top_search_list.classList.remove('focus-search-input')
    header_main__link_nb1.classList.remove('hide')
    header_main__link_nb2.classList.remove('hide')
    header_main__input_box.classList.remove('module')
    header_main_cancel_btn.classList.add('hide')
    header__navbar_wrap.classList.remove('focus-search-input')
    focus_search_input.classList.remove('focus-search-input')
    header_main__input_box.classList.add('no-focus-search-input')
    header_main__wrap.classList.add('visibility-hide-mobile-tablet')
    header_main__wrap.classList.add('no-focus-mobile-tablet')
    focus_search_input.classList.add('no-focus-search-input')
    header_main.classList.add('no-focus-search-input')
    focus_search_input.classList.remove('show-mobile-tablet')
    Header_main_nav_bar_btn_open.classList.remove('hide-mobile-tablet')
    header_main__logo_box.classList.remove('hide-mobile-tablet')

    setTimeout(function () {
        header_main__input_box.classList.remove('focus-search-input')
    }, 100)
    setTimeout(function () {
        header_main__input_box_wrap.classList.remove('focus-search-input')
        header_main.classList.remove('no-focus-search-input')
    }, 200)
    setTimeout(function () {
        header_main.classList.remove('focus-search-input')
        header_main__input_box.classList.add('module')
        focus_search_input.classList.remove('no-focus-search-input')
    }, 250)
    setTimeout(function () {
        header_main__category_list.classList.remove('visibility-hide')
        header_main__category_list.classList.remove('opacity-0')
        header_main__link_nb1.classList.remove('opacity-0')
        header_main__link_nb2.classList.remove('opacity-0')
        header_main__input_box.classList.remove('no-focus-search-input')
        header_main__wrap.classList.remove('no-focus-mobile-tablet')
        header_main__wrap.classList.remove('visibility-hide-mobile-tablet')
    }, 400)
}

function show_items_cetegory() {
    Header_main_nav_bar_background.classList.remove('hide');
    setTimeout(function () {
        Header_main_nav_bar_background.classList.add('show');
    }, 200)
}

function show_menu_get_help() {
    about_nike_menu.classList.add('hide-mobile')
    get_help_menu.classList.remove('hide-mobile')
    get_help_icon_plus.classList.add('hide')
    get_help_icon_minus.classList.remove('hide')
    footer__about_nike_btn_close_get_help.classList.remove('hide')
    footer__about_nike_btn_close.classList.add('hide')
    about_nike_icon_plus.classList.remove('hide')
    about_nike_icon_minus.classList.add('hide')

    setTimeout(function () {
        get_help_menu.classList.add('animation-in')
        get_help_menu.classList.remove('opacity-0-mobile')
        about_nike_menu.classList.remove('animation-in')
        about_nike_menu.classList.add('opacity-0-mobile')
    }, 1);
}

function show_menu_about_nike() {
    get_help_menu.classList.add('hide-mobile')
    about_nike_menu.classList.remove('hide-mobile')
    about_nike_icon_plus.classList.add('hide')
    about_nike_icon_minus.classList.remove('hide')
    footer__about_nike_btn_close.classList.remove('hide')
    footer__about_nike_btn_close_get_help.classList.add('hide')
    get_help_icon_plus.classList.remove('hide')
    get_help_icon_minus.classList.add('hide')

    setTimeout(function () {
        get_help_menu.classList.remove('animation-in')
        get_help_menu.classList.add('opacity-0-mobile')
        about_nike_menu.classList.add('animation-in')
        about_nike_menu.classList.remove('opacity-0-mobile')
    }, 1);
}

function hide_menu_get_help() {
    get_help_menu.classList.add('opacity-0-mobile')
    setTimeout(function () {
        get_help_menu.classList.add('animation-out')
    }, 250);
    setTimeout(function () {
        get_help_menu.classList.remove('animation-in')
        get_help_menu.classList.add('hide-mobile')
        get_help_icon_plus.classList.remove('hide')
        get_help_icon_minus.classList.add('hide')
        footer__about_nike_btn_close_get_help.classList.add('hide')
        get_help_menu.classList.remove('animation-out')
    }, 400);
}

function hide_menu_about_nike() {
    about_nike_menu.classList.add('opacity-0-mobile')
    setTimeout(function () {
        about_nike_menu.classList.add('animation-out')
    }, 250);
    setTimeout(function () {
        about_nike_menu.classList.add('hide-mobile')
        about_nike_icon_plus.classList.remove('hide')
        about_nike_icon_minus.classList.add('hide')
        footer__about_nike_btn_close.classList.add('hide')
        about_nike_menu.classList.remove('animation-in')
        about_nike_menu.classList.remove('animation-out')
    }, 400);
}

function show_menu_guides() {
    menu_guides.classList.remove('hide-mobile')
    menu_guides.classList.remove('module')
    menu_guides.classList.remove('hide')
    setTimeout(function () {
        menu_guides.classList.remove('hide-guides-menu')
        footer__contact_nike_guides_menu_close_btn.classList.remove('hide')
    }, 1)
    setTimeout(function () {
        footer__contact_nike_guides_menu_btn.classList.add('focus')
    }, 2)
}

function show_menu_guides_2() {
    menu_guides.classList.remove('module')
    menu_guides.classList.remove('hide')
    setTimeout(function () {
        menu_guides.classList.remove('hide-guides-menu')
        footer__contact_nike_guides_menu_btn.classList.add('focus-pc')
    }, 2)
}
function hide_menu_guides() {
    menu_guides.classList.add('hide-guides-menu')
    setTimeout(function () {
        footer__contact_nike_guides_menu_close_btn.classList.add('hide')
    }, 1)
    setTimeout(function () {
        footer__contact_nike_guides_menu_btn.classList.remove('focus')
    }, 2)

}

function hide_menu_guides_2() {
    footer__contact_nike_guides_menu_btn.classList.remove('focus-pc')
    menu_guides.classList.add('hide-mobile')
    setTimeout(function () {
        menu_guides.classList.add('hide-guides-menu')
    }, 1)

}

function hide_menu_guides3() {
    setTimeout(function () {
        menu_guides.classList.add('module')
    }, 2)
}

function show_category_2__title_1() {
    category_2__title_1.classList.add('show')
    category_2__title_close_btn_1.classList.add('show')
    category_2__title_2.classList.remove('show')
    category_2__title_close_btn_2.classList.remove('show')
    category_2__title_3.classList.remove('show')
    category_2__title_close_btn_3.classList.remove('show')
    category_2__title_4.classList.remove('show')
    category_2__title_close_btn_4.classList.remove('show')
}
function show_category_2__title_2() {
    category_2__title_2.classList.add('show')
    category_2__title_close_btn_2.classList.add('show')
    category_2__title_1.classList.remove('show')
    category_2__title_close_btn_1.classList.remove('show')
    category_2__title_3.classList.remove('show')
    category_2__title_close_btn_3.classList.remove('show')
    category_2__title_4.classList.remove('show')
    category_2__title_close_btn_4.classList.remove('show')

}
function show_category_2__title_3() {
    category_2__title_3.classList.add('show')
    category_2__title_close_btn_3.classList.add('show')
    category_2__title_1.classList.remove('show')
    category_2__title_close_btn_1.classList.remove('show')
    category_2__title_2.classList.remove('show')
    category_2__title_close_btn_2.classList.remove('show')
    category_2__title_4.classList.remove('show')
    category_2__title_close_btn_4.classList.remove('show')
}
function show_category_2__title_4() {
    category_2__title_4.classList.add('show')
    category_2__title_close_btn_4.classList.add('show')
    category_2__title_1.classList.remove('show')
    category_2__title_close_btn_1.classList.remove('show')
    category_2__title_2.classList.remove('show')
    category_2__title_close_btn_2.classList.remove('show')
    category_2__title_3.classList.remove('show')
    category_2__title_close_btn_3.classList.remove('show')
}

function hide_category_2__title_1() {
    category_2__title_1.classList.remove('show')
    category_2__title_close_btn_1.classList.remove('show')
}
function hide_category_2__title_2() {
    category_2__title_2.classList.remove('show')
    category_2__title_close_btn_2.classList.remove('show')
}
function hide_category_2__title_3() {
    category_2__title_3.classList.remove('show')
    category_2__title_close_btn_3.classList.remove('show')
}
function hide_category_2__title_4() {
    category_2__title_4.classList.remove('show')
    category_2__title_close_btn_4.classList.remove('show')
}
///////////////////////////////////

/***** Slide - Sub-header-content *****/
let slideContainer = document.querySelector('.sub-header-content-slide-items')
slide()
function slide() {
    let stringTitle = [
        'Save Up to 40%',
        'Hello Nike App',
        'Free Delivery',
    ];
    let stringContent = [
        '',
        'Download the app to access everything Nike.',
        'Applies to orders of 5.000.000₫ or more.',
    ];
    let stringLink = [
        'Shop All Our New Markdowns',
        'View details',
        'Get Your Great',
    ]
    let numberTitle = 0;
    let numberContent = 0;
    let numberLink = 0;

    setTimeout(slideIn1, 5000)
    function slideIn1() {
        slideContainer.classList.remove('animation-start')
        setTimeout(function () {
            slideContainer.classList.add('animation-in')
            document.getElementById("sub-header-content__title").innerHTML =
                stringTitle[numberTitle++];

            document.getElementById("sub-header-content__text").innerHTML =
                stringContent[numberContent++];

            document.getElementById("sub-header-content__link").innerHTML =
                stringLink[numberLink++];
            setTimeout(function () {
                slideContainer.classList.remove('animation-in')
            }, 5000)
            if (numberTitle < stringTitle.length - 1) {
                setTimeout(slideIn2, 5100)
            }
            else {
                setTimeout(slideOut1, 4100)
                numberTitle = 0;
                numberContent = 0;
                numberLink = 0;
            }
        }, 300)
    }

    function slideIn2() {
        slideContainer.classList.add('animation-in')
        document.getElementById("sub-header-content__title").innerHTML =
            stringTitle[numberTitle++];

        document.getElementById("sub-header-content__text").innerHTML =
            stringContent[numberContent++];

        document.getElementById("sub-header-content__link").innerHTML =
            stringLink[numberLink++];
        setTimeout(function () {
            slideContainer.classList.remove('animation-in')
        }, 5000)
        if (numberTitle < stringTitle.length - 1) {
            setTimeout(slideIn1, 5100)
        }
        else {
            setTimeout(slideOut1, 4100)
            numberTitle = 0;
            numberContent = 0;
            numberLink = 0;
        }
    }

    function slideOut1() {
        slideContainer.classList.add('animation-out')
        document.getElementById("sub-header-content__title").innerHTML =
            stringTitle[numberTitle++];

        document.getElementById("sub-header-content__text").innerHTML =
            stringContent[numberContent++];

        document.getElementById("sub-header-content__link").innerHTML =
            stringLink[numberLink++];
        setTimeout(function () {
            slideContainer.classList.remove('animation-out')
        }, 300)
        if (numberTitle < stringTitle.length) {
            setTimeout(slideOut2, 320)
        }
        else {
            numberTitle = 0;
            numberContent = 0;
            numberLink = 0;
            slideContainer.classList.add('animation-end')
            setTimeout(slideIn1, 5100)
            setTimeout(function () {
                slideContainer.classList.remove('animation-end')
                slideContainer.classList.add('animation-start')
            }, 600)
        }
    } function slideOut2() {
        slideContainer.classList.add('animation-out')
        document.getElementById("sub-header-content__title").innerHTML =
            stringTitle[numberTitle++];

        document.getElementById("sub-header-content__text").innerHTML =
            stringContent[numberContent++];

        document.getElementById("sub-header-content__link").innerHTML =
            stringLink[numberLink++];
        setTimeout(function () {
            slideContainer.classList.remove('animation-out')
        }, 300)
        if (numberTitle < stringTitle.length) {
            setTimeout(slideOut1, 320)
        }
        else {
            numberTitle = 0;
            numberContent = 0;
            numberLink = 0;
            slideContainer.classList.add('animation-end')
            setTimeout(slideIn1, 5100)
            setTimeout(function () {
                slideContainer.classList.remove('animation-end')
                slideContainer.classList.add('animation-start')
            }, 600)
        }
    }

}

/***** Pause/muted Video - Gear-up *****/
let gearUpVideo = document.getElementById('gear-up__video');
gearUpVideo.addEventListener('click', Play_PauseVideo);
function Play_PauseVideo() {
    if (gearUpVideo.paused) {
        gearUpVideo.play();
    }
    else {
        gearUpVideo.pause();
    };
};

let videoControlsBtn = document.querySelector(".gear-up__video-controls-btn")
function mutedVideo() {
    if (gearUpVideo.muted) {
        gearUpVideo.muted = false
        videoControlsBtn.classList.add('fa-volume-low')
        videoControlsBtn.classList.remove('fa-volume-xmark')
    }
    else {
        gearUpVideo.muted = true
        videoControlsBtn.classList.add('fa-volume-xmark')
        videoControlsBtn.classList.remove('fa-volume-low')
    };
};

/***** Scroll bar Stall *****/
let scrollBarSp = document.querySelectorAll('.stall__product-item-sp'),
    scrollBars = document.querySelectorAll('.stall__product-list'),
    btnLeft = document.querySelectorAll('.btn-circle-left'),
    btnRight = document.querySelectorAll('.btn-circle-right'),
    beforeValue,
    afterValue,
    scrollbarActive,
    distanceValue = 400

function checkElementActive(value) {
    for (let index of value) {
        let position = index.getBoundingClientRect()
        if (position.top <= document.documentElement.clientHeight && position.top >= 0) {
            return index
        }
    }
}

function activeButton() {
    let btnRightActive = checkElementActive(btnRight),
        btnLeftActive = checkElementActive(btnLeft)
    afterValue = beforeValue === checkElementActive(scrollBars).scrollLeft
    // console.log(beforeValue)
    // console.log(checkElementActive(scrollBars).scrollLeft)
    // console.log(afterValue)
    if (afterValue) {
        // btnRightActive.classList.remove('active')
        checkElementActive(scrollBars).scrollLeft = 0
    }
    else {
        // btnRightActive.classList.add('active')
    }
    if (checkElementActive(scrollBars).scrollLeft > 0) {
        // btnLeftActive.classList.add('active')
    }
    else {
        // btnLeftActive.classList.remove('active')
    }

    if (beforeValue < 0) {
        checkElementActive(scrollBars).scrollLeft = 9e6
    }
}

function clickRight(scrollbarActive) {
    scrollbarActive = checkElementActive(scrollBars)
    beforeValue = scrollbarActive.scrollLeft
    scrollbarActive.scrollLeft =
        (scrollbarActive.scrollLeft + ++distanceValue);
    setTimeout(() => { activeButton() }, 400)
}

function clickLeft(scrollbarActive) {
    scrollbarActive = checkElementActive(scrollBars)
    beforeValue = --scrollbarActive.scrollLeft;
    scrollbarActive.scrollLeft =
        (scrollbarActive.scrollLeft - distanceValue);
    setTimeout(() => { activeButton() }, 400)
}

for (let item of scrollBarSp) {
    item.addEventListener('mouseover', hoverScroll)
}

function hoverScroll() {
    setTimeout(() => { activeButton() }, 400)
}

/***** Scroll show header *****/
let oldScrollY = window.scrollY,
    stopShowHeader = "run",
    subHeaderActive = document.querySelector('.sub-header-content-slide')

window.onscroll = function () {
    let position = subHeaderActive.getBoundingClientRect()
    if (stopShowHeader === "stop") { return }
    if (position.top < document.documentElement.clientHeight && position.top > 0) {
        header_main_container.classList.remove('fly-aimation')
    }
    else {
        if (oldScrollY < window.scrollY) {
            header_main_container.classList.remove('module')
            header_main_container.classList.add('fly-aimation-out')
            setTimeout(() => {
                header_main_container.classList.remove('fly-aimation')
                header_main_container.classList.add('module')
            }, 100)
        } else {
            header_main_container.classList.remove('module')
            header_main_container.classList.add('fly-aimation')
            header_main_container.classList.remove('fly-aimation-out')
        }
        oldScrollY = window.scrollY;
    }
}
