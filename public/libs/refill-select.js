const btnAutoQIWI = document.getElementById('auto-refill-qiwi')
const btnAutoYooMoney = document.getElementById('auto-refill-yoomoney')
const btnAutoYooMoneyCard = document.getElementById('auto-refill-yoomoney-card')
const btnManual = document.getElementById('manual-refill')

const btnLink = document.getElementById('refill-link')

function updateBtnLink() {
    var donateMoney = getUrlParam('money')

    btnLink.setAttribute('href', `/refill-select?money=${donateMoney}`)
}

updateBtnLink()

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
    if(hasClass(btnAutoQIWI, "border border-primary")) {
        removeClass(btnAutoQIWI, "border border-primary")
    }
    if(hasClass(btnAutoYooMoney, "border border-primary")) {
        removeClass(btnAutoYooMoney, "border border-primary")
    }
    if(hasClass(btnAutoYooMoneyCard, "border border-primary")) {
        removeClass(btnAutoYooMoneyCard, "border border-primary")
    }
    if(hasClass(btnManual, "border border-primary")) {
        removeClass(btnManual, "border border-primary")
    }
}

function addActiveClass(element) {
    if(!hasClass(element, "border border-primary")) {
        addClass(element, "border border-primary")
    }
}

function getUrlParam(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
       return decodeURIComponent(name[1]);
}

btnAutoQIWI.onclick = () => {
    removeAllClass()
    addActiveClass(btnAutoQIWI)
    var donateMoney = getUrlParam('money')

    btnLink.setAttribute('href', `/autodonate/qiwi?price=${donateMoney}`)
}

btnAutoYooMoney.onclick = () => {
    removeAllClass()
    addActiveClass(btnAutoYooMoney)
    var donateMoney = getUrlParam('money')

    btnLink.setAttribute('href', `/autodonate/yoomoney?price=${donateMoney}`)
}

btnAutoYooMoneyCard.onclick = () => {
    removeAllClass()
    addActiveClass(btnAutoYooMoneyCard)
    var donateMoney = getUrlParam('money')

    btnLink.setAttribute('href', `/autodonate/yoomoney_card?price=${donateMoney}`)
}

btnManual.onclick = () => {
    removeAllClass()
    addActiveClass(btnManual)
    var donateMoney = getUrlParam('money')

    btnLink.setAttribute('href', `/refill-manual?money=${donateMoney}`)
}
