const data = WORLDBANK;
const year = "";

function listToPrint(indicatorCode,data){
let printData=[];  
year = Object.keys(WORLDBANK.CHL.indicators.data);

year.forEach((element) => {

let filterPer = data.filterData(data.PER.indicators,indicatorCode);
let filterMex = data.filterData(data.MEX.indicators,indicatorCode);
let filterChl = data.filterData(data.CHL.indicators,indicatorCode);
let filterBra = data.filterData(data.BRA.indicators,indicatorCode);

printData.push([element, parseFloat(filterPer[0].data[element]), parseFloat(filterMex[0].data[element]),
                         parseFloat(filterChl[0].data[element]), parseFloat(filterBra[0].data[element]),
])
})

return printData;

}

function vistaBacan() {
    const select = "";
    data.CHL.indicators.forEach((element) => {
        select = `option value="${element.indicatorCode}">${element.indicatorName}</option> `
    })

document.getElementById('root').innerHTML += `
<select id="select" class="select"
<option value="option">Seleccionar indicador</option>
${select}
</select>
`
}





// for(let i=0; i<data.length; i++){
//    document.getElementById('root').innerHTML +=` <select name="indicators" id="indicators">
//    <option value="${data[i].indicatorName}">${data[i].indicatorName}</option>
//  </select>`
// };