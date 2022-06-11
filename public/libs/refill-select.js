const btnAutoQIWI = document.getElementById('auto-refill-qiwi')
const btnAutoYooMoney = document.getElementById('auto-refill-yoomoney')
// const btnAutoLava = document.getElementById('auto-refill-lava')
const btnAutoCrystalPay = document.getElementById('auto-refill-crystalpay')
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
    // if(hasClass(btnAutoLava, "border border-primary")) {
    //     removeClass(btnAutoLava, "border border-primary")
    // }
    if(hasClass(btnAutoCrystalPay, "border border-primary")) {
        removeClass(btnAutoCrystalPay, "border border-primary")
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

// btnAutoLava.onclick = () => {
//     removeAllClass()
//     addActiveClass(btnAutoLava)
//     var donateMoney = getUrlParam('money')

//     btnLink.setAttribute('href', `/autodonate/yoomoney_card?price=${donateMoney}`)
// }

btnAutoCrystalPay.onclick = () => {
    removeAllClass()
    addActiveClass(btnAutoCrystalPay)
    var donateMoney = getUrlParam('money')

    btnLink.setAttribute('href', `/autodonate/crystalpay?price=${donateMoney}`)
}

btnManual.onclick = () => {
    removeAllClass()
    addActiveClass(btnManual)
    var donateMoney = getUrlParam('money')

    btnLink.setAttribute('href', `/refill-manual?money=${donateMoney}`)
}
