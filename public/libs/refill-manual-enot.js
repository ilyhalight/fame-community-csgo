const inputM = document.getElementById('form-input-m')
const inputOA = document.getElementById('form-input-oa')
const inputO = document.getElementById('form-input-o')
const inputS = document.getElementById('form-input-s')
const inputC = document.getElementById('form-input-c')
const inputSubmit = document.getElementById('form-input-submit')

let date = new Date();
var shopID = 20076
var purpose = 'Покупка привилегии на серверах Fame'

function update(shopID, purpose) {

    var donateMoney = getUrlParam('money')
    var paymentID = date.getTime()
    var secret_word = inputS.getAttribute('value')
    var sign = generateKey(shopID, donateMoney, secret_word, paymentID)

    inputM.setAttribute('value', `${shopID}`)
    inputOA.setAttribute('value', `${donateMoney}`)
    inputO.setAttribute('value', `${paymentID}`)
    inputS.setAttribute('value', `${sign}`)
    inputC.setAttribute('value', `${purpose}`)

    redirectToEnot(shopID, donateMoney, paymentID, sign, purpose)
}

update(shopID, purpose)


function getUrlParam(name) {
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
       return decodeURIComponent(name[1]);
}

function generateKey(shopID, money, secret_word, paymentID) {

    var sign = CryptoJS.MD5(shopID + ':' + money + ':' + secret_word + ':' + paymentID)
    return sign
}

function redirectToEnot (shopID, donateMoney, paymentID, sign, purpose) {
    window.location.href = `https://enot.io/pay?m=${shopID}&oa=${donateMoney}&o=${paymentID}&s=${sign}&c=${purpose}`
}