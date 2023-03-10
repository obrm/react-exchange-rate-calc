import React from 'react';

const CurrenciesList = ({currency, handleChange, currencies}) => {
  return (
    <select value={currency} onChange={handleChange}>
      {currencies.map((currency) => (
        <option key={currency.value} value={currency.value}>{currency.value}</option>
      ))}
    </select>
  );
};

export default CurrenciesList;