// Diva-Lab @2020 Main Script
////////////////////////////////////////


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

// toggle sidebar
$('.side-toggle').on('click', function () {
    $(this).closest('aside').toggleClass('opened')
});

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
$(function () {

    var  mainNavTopPosition = $('.main-nav').position().top;

    $(window).scroll(function() {
        if( $(this).scrollTop() >= mainNavTopPosition ) {
            $(".header ").addClass('fixed');

            var  headerHeight = $('.header').height();

            $('main').css('margin-top',headerHeight * 2 )
        } else {
            $(".header").removeClass('fixed');
            $('main').css('margin-top', 0 )
        }
    });
})