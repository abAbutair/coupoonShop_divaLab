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

//