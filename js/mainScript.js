// Diva-Lab @2020 Main Script
////////////////////////////////////////


// CSS vh(viewport height) reset
let jvh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--jvh', `${jvh}px`);

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

// dropdown
let dropdownEl = document.querySelectorAll('.dropdown-option');
let dropdownClass = document.querySelectorAll('.ctm-dropdown');

let dropdownBtn = document.querySelectorAll('.ddd');
// let elementID = this.closest('.ctm-dropdown').id;

//     if (dropdownID.classList.contains('show')){
//     }else {
//     }

document.addEventListener("click", function(event) {
    // If user clicks inside the element, do nothing
    if (event.target.closest(".ctm-dropdown")) return;

    // If user clicks outside the element, hide it!
    for (let h = 0; h < dropdownClass.length; h++) {
        dropdownClass[h].classList.remove('show');
    }

});

for (let g = 0; g < dropdownBtn.length; g++) {
    dropdownBtn[g].addEventListener("click", function () {
        let btnID = this.id;
        this.closest('.ctm-dropdown').classList.toggle('show');
        let menuAtrr = document.querySelectorAll('.ctm-dropdown__menu');
        for (let h = 0; h < menuAtrr.length; h++) {
            let cc = menuAtrr[h].getAttribute('aria-labelledby');
            if (cc !== btnID) {
                menuAtrr[h].closest('.ctm-dropdown').classList.remove('show');
            }
        }

        // let ff = document.querySelectorAll('.ctm-dropdown__menu');
        // for (let h = 0; h < ff.length; h++) {
        //     ff[h].classList.toggle('show');
        // }


        //
        // let menuLabel = document.querySelectorAll('.ctm-dropdown__menu');
        // for (let q = 0; q < menuLabel.length; q++) {
        //     if(btnID === menuLabel[q]) {
        //     }else {
        //         // let ctmDropdownSib = getSiblings(this.closest('.ctm-dropdown'));
        //         console.log('mmmmm')
        //     }
        //
        // }




        // dropdownID.classList.add('show');

        // document.querySelectorAll('.ctm-dropdown').classList.remove('show')
        // for (let h = 0; h < dropdownClass.length; h++) {
        //     dropdownClass[h].classList.remove('show');
        // }
    });
}

for (let i = 0; i < dropdownEl.length; i++) {
    dropdownEl[i].addEventListener('click', function () {
        let dropdownValue = this.innerHTML;
        this.closest('.ctm-dropdown').setAttribute('dropdown-value', dropdownValue);
        this.closest('.ctm-dropdown').classList.remove('show');
    });
}