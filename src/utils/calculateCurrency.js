import { api_url } from '../constants/url'

const calculateCurrency = async (currencyOne, currencyTwo, inputOneValue) => {
  const res = await fetch(`${api_url}${currencyOne}`);
  const data = await res.json();
  const curr2Rate = data.rates[currencyTwo];
  const rateStr = `1 ${currencyOne} = ${curr2Rate} ${currencyTwo}`;
  const valueTwo = (Number(inputOneValue) * curr2Rate).toFixed(2)
  return {
    rateStr,
    valueTwo
  }
};

export default calculateCurrency;