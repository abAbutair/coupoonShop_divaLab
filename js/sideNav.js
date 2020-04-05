/**************************
 * dropdown
 */
document.addEventListener("DOMContentLoaded", function(event) {

    (function () {
        let hoverDropdown = document.querySelectorAll('.hover-dropdown');
        let dropdownClass = document.querySelectorAll('.side-nav');
        let dropdownBtn = document.querySelectorAll('.side-nav__btn');
        let closeBtn = document.querySelectorAll('.close-nav');
        let headerClass = document.querySelectorAll('.side-nav__header');
        let menuClass = document.querySelectorAll('.side-nav__menu');


        let tab_window = window.matchMedia("(min-width: 992px)");
        if (tab_window.matches) {
// click on body except the drop will close the drop
            document.addEventListener("click", function (event) {
                // If user clicks inside the element, do nothing
                if (event.target.closest(".side-nav")) return;

                // If user clicks outside the element, hide it!
                for (let h = 0; h < headerClass.length; h++) {
                    headerClass[h].classList.remove('visible');
                }
                for (let h = 0; h < menuClass.length; h++) {
                    menuClass[h].classList.remove('visible');
                }
            });
        }


// click on the dropdown btn will open the dropdown and close other dropdown
        for (let g = 0; g < dropdownBtn.length; g++) {
            dropdownBtn[g].addEventListener("click", function () {
                let btnID = this.id;
                let overlayMenu = document.querySelector(".search-overlay__menu");
                overlayMenu.classList.remove('o-fixed');

                for (let h = 0; h < menuClass.length; h++) {
                    let menuAtr = menuClass[h].getAttribute('aria-labelledby');
                    if (menuAtr === btnID) {
                        menuClass[h].classList.toggle('visible');
                        this.closest('.side-nav__header').classList.toggle('visible');
                    }
                }
            });
        }


// close button
        for (let u = 0; u < closeBtn.length; u++) {
            closeBtn[u].addEventListener('click', function () {
                this.closest('.side-nav__menu').classList.remove('visible');
                for (let h = 0; h < headerClass.length; h++) {
                    headerClass[h].classList.remove('visible');
                }
            });
        }

// hover-dropdown closes ctm-dropdown
        for (let k = 0; k < hoverDropdown.length; k++) {
            hoverDropdown[k].addEventListener('mouseover', function () {
                for (let l = 0; l < dropdownClass.length; l++) {
                    for (let h = 0; h < headerClass.length; h++) {
                        headerClass[h].classList.remove('visible');
                    }
                    for (let h = 0; h < menuClass.length; h++) {
                        menuClass[h].classList.remove('visible');
                    }
                }
            });
        }
    })();
});