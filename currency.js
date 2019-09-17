const exchangeRate = 23000;

function convertUsdToVnd(usd) {
  return usd * exchangeRate;
}

function convertVndToUsd(vnd){
  return vnd/exchangeRate
}

console.log(convertUsdToVnd(500));
console.log(convertVndToUsd(200000));
let amountVnd= 200000