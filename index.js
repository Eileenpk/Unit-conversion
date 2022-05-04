let input = document.getElementById('input')
let inputArr = []
const meterToFeet = document.getElementById("meter-to-feet")
const literToGallons = document.getElementById("liters-to-gallons")
const kiloToPounds = document.getElementById("kilo-to-pounds")
const convertBtn = document.getElementById('convert-btn') 

convertBtn.addEventListener('click', function(){
    inputArr.pop()
    inputArr.push(input.value)
    metersToFeet()
    feetToMeters()
    litersToGallons ()
    gallonsToLiters()
    kilosToPounds()
    poundsToKilos()
    render(meterToFeet, 'meters', 'feet', feetOutPut, meterOutPut)
    render(literToGallons, 'liters', 'gallons', gallonOutPut, literOutPut )
    render(kiloToPounds, 'kilos', 'pounds', poundOutPut, kiloOutPut)
})

// render input to output el
function render(container,unit1, unit2, outPut1, outPut2) {
    container.textContent = `${inputArr} ${unit1} = ${outPut1} ${unit2} | ${inputArr} ${unit2} = ${outPut2} ${unit1}`
}

// // calc meters to feet
function metersToFeet() {
   fop = input.value * 3.281 
  feetOutPut = fop.toFixed(3)
}
//calc feet to meters
function feetToMeters() {
    mop = input.value / 3.281
    meterOutPut = mop.toFixed(3)
}
// calc liters to gallons
function litersToGallons () {
   gop = input.value / 3.785
    gallonOutPut = gop.toFixed(3)
}
// calc gallons to liters
function gallonsToLiters() {
   lop = input.value * 3.785
   literOutPut = lop.toFixed(3)
}
// calc kilos to pounds
function kilosToPounds() {
   pop = input.value * 2.205
   poundOutPut = pop.toFixed(3)
}
// calc pounds to kilos
function poundsToKilos() {
   kop = input.value / 2.205
   kiloOutPut = kop.toFixed(3)
}


