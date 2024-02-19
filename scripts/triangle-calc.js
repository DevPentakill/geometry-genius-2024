// console.log('hellow triangle');

function calculateTriangle() {

    const triangleBase = document.getElementById('triangle-base');
    // console.log(triangleBase);
    let triangleBaseValue = triangleBase.value;
    // console.log(typeof triangleBaseValue);
    const base = parseFloat(triangleBaseValue);
    // console.log(typeof base);

    const triangleHeight = document.getElementById('triangle-height');
    let triangleHeightValue = triangleHeight.value;
    const height = parseFloat(triangleHeightValue);

    const triangleArea = 0.5 * base * height;

    document.getElementById('triangle-area').innerText= triangleArea;
    // triangleBaseValue = 0;
    // triangleHeightValue = 0;

}