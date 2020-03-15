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
    let z = document.querySelectorAll('.grid .grid__column');
    for (let n = 0; n < z.length; n++) {
        if (z.length === 2 ) {
            z[n].classList.add('grid__column--ending6');
        } else if(z.length === 1) {
            z[n].classList.add('grid__column--ending12');
        }

        let y = z[n].children;
        for (let o = 0; o < y.length; o++) {
            if (y.length === 2 ) {
                y[o].classList.add('grid__item--span6');
            } else if(y.length === 3) {
                y[o].classList.add('grid__item--span4');
            }
        }

    }
})();