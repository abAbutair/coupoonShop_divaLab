// dropdown
let dropdownOpt = document.querySelectorAll('.dropdown-option');
let dropdownClass = document.querySelectorAll('.ctm-dropdown');
let dropdownBtn = document.querySelectorAll('.dropdown-button');

// click on body except the drop will close the drop
document.addEventListener("click", function(event) {
    // If user clicks inside the element, do nothing
    if (event.target.closest(".ctm-dropdown")) return;

    // If user clicks outside the element, hide it!
    for (let h = 0; h < dropdownClass.length; h++) {
        dropdownClass[h].classList.remove('show');
    }
});

// click on the dropdown btn will open the dropdown and close other dropdown
for (let g = 0; g < dropdownBtn.length; g++) {
    dropdownBtn[g].addEventListener("click", function () {
        let btnID = this.id;
        let menuClass = document.querySelectorAll('.ctm-dropdown__menu');

        this.closest('.ctm-dropdown').classList.toggle('show');
        for (let h = 0; h < menuClass.length; h++) {
            let menuAtr = menuClass[h].getAttribute('aria-labelledby');
            if (menuAtr !== btnID) {
                menuClass[h].closest('.ctm-dropdown').classList.remove('show');
            }
        }
    });
}

// click on drop option close the drop and set attribute with the option
for (let i = 0; i < dropdownOpt.length; i++) {
    dropdownOpt[i].addEventListener('click', function () {
        let dropdownValue = this.innerHTML;
        this.closest('.ctm-dropdown').setAttribute('dropdown-value', dropdownValue);
        this.closest('.ctm-dropdown').classList.remove('show');
    });
}