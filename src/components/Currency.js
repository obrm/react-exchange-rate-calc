import { CurrenciesList } from './';

const Currency = ({ currencies, currency, handleSelectOnChange, handleInputOnChange, inputRef = null, value, isDisabled }) => {
  return (
    <div className="currency">

      <CurrenciesList
        currency={currency}
        handleChange={handleSelectOnChange}
        currencies={currencies}
      />

      <input type="number" value={value} ref={inputRef && inputRef} onChange={handleInputOnChange} placeholder="0" disabled={isDisabled} />
    </div>
  );
};

export default Currency;