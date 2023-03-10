const Currency = ({currencies, currency, handleSelectOnChange, handleInputOnChange,inputRef = null, input}) => {

  return (
    <div className="currency">
      <select id="currency-one" value={currency} onChange={handleSelectOnChange}>
        {currencies.map((currency) => (
          <option key={currency.value} value={currency.value}>{currency.value}</option>
        ))}
      </select>
      <input type="number" id="amount-one" value={inputRef.current ? inputRef.current : input} ref={inputRef && inputRef} onChange={handleInputOnChange} placeholder="0" />
    </div>
  );
};

export default Currency;