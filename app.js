function squareNumber(a){
    return a ** 2;
}
const squareNumber1=squareNumber(4);
console.log(squareNumber1)

function saleProduct(b, c){
    const salePercent = (b * c) / 100;
    const salePrice= b - salePercent;
    return salePrice;
}
const saleProduct1=saleProduct(900, 20)
console.log(saleProduct1)

function randomNumber(){
    const randomNumber1= Math.random() * 100;
    return Math.floor(randomNumber1);
}
console.log(randomNumber())

const someString="some string i have created"
function myString(d) {
    return d.length;
  }
console.log(myString(someString));


const currencies = [
	{
		code: "AED",
		quantity: 10,
		rateFormated: "6.8886",
		diffFormated: "0.0082",
		rate: 6.8886,
		name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
		diff: -0.0082,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.4869",
		diffFormated: "0.0334",
		rate: 6.4869,
		name: "სომხური დრამი",
		diff: -0.0334,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "CZK",
		quantity: 10,
		rateFormated: "1.1820",
		diffFormated: "0.0010",
		rate: 1.182,
		name: "ჩეხური კრონა",
		diff: 0.001,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "EUR",
		quantity: 1,
		rateFormated: "2.7599",
		diffFormated: "0.0056",
		rate: 2.7599,
		name: "ევრო",
		diff: -0.0056,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
];


function minimumRate(currencies) {
    let minimumRate1 = currencies[0];
    currencies.forEach(function(x) {
      if (x.rate < minimumRate1.rate) {
        minimumRate1 = x;
      }
    });
    return minimumRate1;
  }
  console.log(minimumRate(currencies));
