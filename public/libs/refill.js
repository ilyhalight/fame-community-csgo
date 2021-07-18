const btnQIWI = document.getElementById('refill-qiwi')
const btnYoomoney = document.getElementById('refill-yoomoney')
const btnCards = document.getElementById('refill-cards')
const btnAdvCash = document.getElementById('refill-advcash')
const btnPayeer = document.getElementById('refill-payeer')

const btnLink = document.getElementById('refill-link')

function addClass(element, ecn) {
    if (!hasClass(element, ecn)) element.className += " " + ecn;
}

function hasClass(element, ecn) {
    return element.className.match(new RegExp('(\\s|^)' + ecn + '(\\s|$)'))
}

function removeClass(element, ecn) {
    if (hasClass(element, ecn)) {
        var reg = new RegExp('(\\s|^)' + ecn + '(\\s|$)');
        element.className = element.className.replace(reg, ' ');
    }
}

function removeAllClass() {
    if(hasClass(btnQIWI, "border border-primary")) {
        removeClass(btnQIWI, "border border-primary")
    }
    if(hasClass(btnYoomoney, "border border-primary")) {
        removeClass(btnYoomoney, "border border-primary")
    }
    if(hasClass(btnCards, "border border-primary")) {
        removeClass(btnCards, "border border-primary")
    }
    if(hasClass(btnAdvCash, "border border-primary")) {
        removeClass(btnAdvCash, "border border-primary")
    }
    if(hasClass(btnPayeer, "border border-primary")) {
        removeClass(btnPayeer, "border border-primary")
    }
}

function addActiveClass(element) {
    if(!hasClass(element, "border border-primary")) {
        addClass(element, "border border-primary")
    }
}
btnQIWI.onclick = () => {
    removeAllClass()
    addActiveClass(btnQIWI)

    btnLink.setAttribute('href', 'https://www.qiwi.com/n/ILYHALIGHT')
}

btnYoomoney.onclick = () => {
    removeAllClass()
    addActiveClass(btnYoomoney)

    btnLink.setAttribute('href', 'https://www.yoomoney.ru/to/410018063704641')
}

btnCards.onclick = () => {
    removeAllClass()
    addActiveClass(btnCards)

    btnLink.setAttribute('href', 'https://www.yoomoney.ru/to/410018063704641')
}

btnAdvCash.onclick = () => {
    removeAllClass()
    addActiveClass(btnAdvCash)

    btnLink.setAttribute('href', 'refill/advcash')
}

btnPayeer.onclick = () => {
    removeAllClass()
    addActiveClass(btnPayeer)

    btnLink.setAttribute('href', 'refill/payeer')
}
