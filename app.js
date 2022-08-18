function getpin() {
    const pin = genereatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;

    } else {
        // console.log('pin not', pin);
        return getpin();
    }

}


function genereatePin() {
    const random = Math.round(Math.random() * 10000)
    return random;
}
document.getElementById('generate-pin').addEventListener('click', function() {
    const pin = getpin()
        //console.log(pin)
    const displayField = document.getElementById('disply-pin');
    displayField.value = pin;
})
document.getElementById('calculetor').addEventListener('click', function(event) {
    const number = event.target.innerText
    const typeNumberField = document.getElementById('type-number')
    const priviousTypeNUmber = typeNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        } else if (number == '<') {
            const digits = priviousTypeNUmber.split('');
            digits.pop();
            const remaingdigits = digits.join('');
            typeNumberField.value = remaingdigits;
        }

    } else {


        const newTypeNumber = priviousTypeNUmber + number;
        typeNumberField.value = newTypeNumber;
    }
    //console.log(number)

})
document.getElementById('verify-pin').addEventListener('click', function() {
    const displayField = document.getElementById('disply-pin')
    const currentPin = displayField.value;
    const typeNumberField = document.getElementById('type-number')
    const typeNumber = typeNumberField.value;
    const pinMasses = document.getElementById('pin-success')
    const inncorrectPin = document.getElementById('pin-failuer')
    if (typeNumber === currentPin) {

        pinMasses.style.display = 'block';
        inncorrectPin.style.display = 'none'
    } else {
        // const inncorrectPin = document.getElementById('pin-failuer')
        inncorrectPin.style.display = 'block'
        pinMasses.style.display = 'none'
    }
})