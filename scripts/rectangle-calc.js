//We wil create some functions that will be universal

function calculateRectangle() {

    const areaRect = getInputText('rectangle-width') * getInputText('rectangle-length');
    // console.log(areaRect);
    setAreaValue('rectangle-area', areaRect);
}

function getInputText(elem) {

    const givenText = document.getElementById(elem).value;
    const textNumber = parseFloat(givenText);
    return textNumber;

}

function setAreaValue(spanID, areaValue) {

    document.getElementById(spanID).innerText = areaValue;
}