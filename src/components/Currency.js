import { CurrenciesList } from './';

const Currency = ({ currencies, currency, handleSelectOnChange, handleInputOnChange, inputRef = null, value }) => {
  return (
    <div className="currency">

      <CurrenciesList
        currency={currency}
        handleChange={handleSelectOnChange}
        currencies={currencies}
      />

      <input type="number" value={value} ref={inputRef && inputRef} onChange={handleInputOnChange} placeholder="0" />
    </div>
  );
};

export default Currency;