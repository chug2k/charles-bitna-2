const exchangeRate = 23000;

function convertUsdToVnd(usd) {
  return usd * exchangeRate;
}

console.log(convertUsdToVnd(500));