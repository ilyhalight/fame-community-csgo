const btnQIWI = document.getElementById('refill-qiwi')
const btnYoomoney = document.getElementById('refill-yoomoney')
const btnCards = document.getElementById('refill-cards')
// const btnAdvCash = document.getElementById('refill-advcash')
const btnPayeer = document.getElementById('refill-payeer')
const btnDonationAlerts = document.getElementById('refill-donationalerts')
const btnDonatePay = document.getElementById('refill-donatepay')

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
    // if(hasClass(btnAdvCash, "border border-primary")) {
    //     removeClass(btnAdvCash, "border border-primary")
    // }
    if(hasClass(btnPayeer, "border border-primary")) {
        removeClass(btnPayeer, "border border-primary")
    }
    if(hasClass(btnDonationAlerts, "border border-primary")) {
        removeClass(btnDonationAlerts, "border border-primary")
    }
    if(hasClass(btnDonatePay, "border border-primary")) {
        removeClass(btnDonatePay, "border border-primary")
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

btnQIWI.onclick = () => {
    removeAllClass()
    addActiveClass(btnQIWI)
    var donateMoney = getUrlParam('money')

    btnLink.setAttribute('href', `https://qiwi.com/payment/form/99999?extra['accountType']=nickname&extra['account']=ILYHALIGHT&extra['comment']=Привилегия на сервере&blocked[0]=account&blocked[0]=comment&amountInteger=${donateMoney}&amountFraction=0`)
}

btnYoomoney.onclick = () => {
    removeAllClass()
    addActiveClass(btnYoomoney)
    var donateMoney = getUrlParam('money')

    btnLink.setAttribute('href', `https://www.yoomoney.ru/to/410018063704641/${donateMoney}`)
}

btnCards.onclick = () => {
    removeAllClass()
    addActiveClass(btnCards)
    var donateMoney = getUrlParam('money')

    btnLink.setAttribute('href', `https://www.yoomoney.ru/to/410018063704641/${donateMoney}`)
}

// btnAdvCash.onclick = () => {
//     removeAllClass()
//     addActiveClass(btnAdvCash)

//     btnLink.setAttribute('href', 'refill/advcash')
// }

btnPayeer.onclick = () => {
    removeAllClass()
    addActiveClass(btnPayeer)

    btnLink.setAttribute('href', 'refill/payeer')
}

btnDonationAlerts.onclick = () => {
    removeAllClass()
    addActiveClass(btnDonationAlerts)

    btnLink.setAttribute('href', 'https://www.donationalerts.com/r/famesrv')
}

btnDonatePay.onclick = () => {
    removeAllClass()
    addActiveClass(btnDonatePay)
    var donateMoney = getUrlParam('money')

    btnLink.setAttribute('href', `https://new.donatepay.ru/@fame?amount=${donateMoney}&message=Привилегия на сервере. Ссылка на профиль стима: `)
}