let unit = 20
let meterToFoot = unit * 3.280
let mtfr = meterToFoot.toFixed(3)
let footToMeter = unit / 3.280
let ftmr = footToMeter.toFixed(3)
let litersToGallons = unit * 0.264
let ltgr = litersToGallons.toFixed(3)
let gallonsToLiters = unit / 0.264
let gtlr = gallonsToLiters.toFixed(3)
let kilogramToPounds = unit * 2.204
let ktpr = kilogramToPounds.toFixed(3)
let poundsToKilograms = unit / 2.204
let ptkr = poundsToKilograms.toFixed(3)
let lengthEl = document.getElementById('length-el');
let volumeEl = document.getElementById('volume-el');
let massEl = document.getElementById('mass-el');
let input = document.getElementById('input'); 


function convert(){
    lengthEl.textContent = unit + ' Meters = ' + mtfr + ' feet | ' + unit + ' Feet  = ' + ftmr + ' Meters'

    volumeEl.textContent = unit + ' Liters = ' + ltgr + ' Gallons | ' + unit + ' Gallons  = ' + gtlr+ ' Liters'

    massEl.textContent = unit + ' Kilos = ' + ktpr + ' Pounds | ' + unit + ' Pounds  = ' + ptkr + ' Kilos'
    console.log(convert)
}
