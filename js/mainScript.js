// Diva-Lab @2020 Main Script
////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function(event) {

// menu swipe open
    $(function () {
        $("body").swipe({
            //Generic swipe handler for all directions
            swipeRight: function (event, direction, distance, duration, fingerCount, fingerData) {
                $("#sideCollapse").addClass('visible');
                $(".search-overlay__menu").removeClass('o-fixed');
            },
            swipeLeft: function (event, direction, distance, duration, fingerCount, fingerData) {
                $("#sideCollapse").removeClass('visible');
                $(".search-overlay__menu").removeClass('o-fixed');
            },
            allowPageScroll: "vertical",
            excludedElements: ".carousel, .menu-swipe",
            threshold: 100,
        });

        $("#metroSlider").swipe({
            //Generic swipe handler for all directions
            swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                if (direction == 'left') $(this).carousel('next');
                if (direction == 'right') $(this).carousel('prev');
            },
            allowPageScroll: "vertical",
            threshold: 10,
        });
    });


// CSS vh(viewport height) reset
    let jvh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--jvh', `${jvh}px`);

// get element siblings
    let getSiblings = function (elem) {
        // Setup siblings array and get the first sibling
        let siblings = [];
        let sibling = elem.parentNode.firstChild;

        // Loop through each sibling and push to the array
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== elem) {
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling
        }
        return siblings;
    };

// intro section metro function
    (function () {
        let metroGrd = document.querySelectorAll('.grid');
        metroMaker(metroGrd);

        function metroMaker(grdCol) {
            // loop .grid
            for (let t = 0; t < grdCol.length; t++) {

                // loop .grid__column
                let metroColumns = metroGrd[t].children;
                for (let n = 0; n < metroColumns.length; n++) {
                    if (metroColumns.length === 2) {
                        metroColumns[n].classList.add('grid__column--ending6');
                    } else if (metroColumns.length === 1) {
                        metroColumns[n].classList.add('grid__column--ending12');
                    }

                    // loop .grid__item
                    let metroBlocks = metroColumns[n].children;
                    for (let o = 0; o < metroBlocks.length; o++) {
                        if (metroBlocks.length === 2) {
                            metroBlocks[o].classList.add('grid__item--span6');
                        } else if (metroBlocks.length === 3) {
                            metroBlocks[o].classList.add('grid__item--span4');
                        }
                    }
                }
            }
        }
    })();


// divide one list to multi columns
    (function ($) {
        let initialContainer = $('.columns'),
            columnItems = $('.columns li'),
            columns = null,
            column = 1; // account for initial column

        function setupColumns() {
            columnItems.detach();
            while (column++ < initialContainer.data('columns')) {
                initialContainer.clone().insertBefore(initialContainer);
                column++;
            }
            columns = $('.columns');
        }

        function updateColumns() {
            column = 0;
            columnItems.each(function (idx, el) {
                if (idx !== 0 && idx >= (columnItems.length / columns.length) + (column * idx)) {
                    column += 1;
                }
                $(columns.get(column)).append(el);
            });
        }

        $(function () {
            setupColumns();
            updateColumns();
        });
    })(jQuery);

    /* *****************************************************************
                            sticky nav script
    ****************************************************************** */
    (function () {
        let header = document.querySelector(".header");
        let header1 = header.offsetHeight;
        let medHeader = document.querySelector(".med").offsetHeight;
        let header2 = header1 - medHeader;


        let main = document.querySelector("main");
        main.style.paddingTop = header1 + 'px';


        window.addEventListener('scroll', function () {
            let windowPos = window.scrollY > 0;
            if (windowPos) {
                header.classList.add('fixed');
                let desktop_window = window.matchMedia("(min-width: 992px)");
                if (desktop_window.matches) {
                    main.style.paddingTop = header2 + 'px';
                }

            } else {
                header.classList.remove('fixed');
                main.style.paddingTop = header1 + 'px';
            }
        });
    })();


    /* *****************************************************************
                           search overlay
    ****************************************************************** */
    (function () {
        let overlayBtn = document.querySelector(".search-overlay__btn");
        let overlayClose = document.querySelector(".close-overlay");
        let overlayMenu = document.querySelector(".search-overlay__menu");
        let sideMenu = document.querySelector(".header__bottom .side-nav__menu");
        // let navBtn = document.querySelector("#openNav");

        let topHeader = document.querySelector(".header__top").offsetHeight;

        // function disabledBtn() {
        //     if (overlayMenu.classList.contains('o-fixed')) {
        //         navBtn.setAttribute('disabled', "");
        //     } else {
        //         navBtn.removeAttribute('disabled');
        //     }
        // }

        overlayMenu.style.top = topHeader + 'px';
        overlayMenu.style.height = 'calc( 100% - ' + topHeader + 'px )';

        let tab_window = window.matchMedia("(max-width: 992px)");
        if (tab_window.matches) {
            sideMenu.style.top = topHeader + 'px';
            sideMenu.style.height = 'calc( 100% - ' + topHeader + 'px )';
        }

        overlayBtn.addEventListener('click', function () {
            overlayMenu.classList.toggle('o-fixed');
            sideMenu.classList.remove('visible');
            // disabledBtn();
        });

        overlayClose.addEventListener('click', function () {
            overlayMenu.classList.remove('o-fixed');
            // disabledBtn();
        });
    })();

});

