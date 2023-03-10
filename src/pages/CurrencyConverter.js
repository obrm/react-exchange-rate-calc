import img from '../assets/images/money.png';

import useCurrencyConverter from './../hooks/use-currency-converter';

import { CURRENCIES_1, CURRENCIES_2 } from '../constants/currencies';

import { Button, Currency } from './../components';

const CurrencyConverter = () => {
  const {
    currencyOne,
    currencyTwo,
    inputTwo,
    rate,
    show,
    inputOneRef,
    setCurrencyTwo,
    handleAmountOneChange,
    handleAmountTwoChange,
    handleCurrencyOneChange,
    handleSwapClick,
    handleClearClick,
  } = useCurrencyConverter();

  return (
    <>
      <img src={img} alt="money-img" className="money-img" />
      <h1>מחשבון המרת מטבע</h1>
      <p>יש לבחור את המטבע ואת הסכום כדי לקבל את ערך ההמרה</p>

      <div className="container">
        <Currency
          currencies={CURRENCIES_1}
          currency={currencyOne}
          handleSelectOnChange={handleCurrencyOneChange}
          value={inputOneRef.current}
          inputRef={inputOneRef}
          handleInputOnChange={handleAmountOneChange}
        />

        <div className="swap-rate-container">
          <Button clickHandler={handleSwapClick}>
            החלפה
          </Button>
          <div className="rate" id="rate" dir="ltr">{rate}</div>
        </div>

        <Currency
          currency={currencyTwo}
          handleSelectOnChange={(e) => setCurrencyTwo(e.target.value)}
          currencies={CURRENCIES_2}
          value={inputTwo}
          handleInputOnChange={handleAmountTwoChange}
        />
        
        <Button className={`btn-transparent ${show && 'show'}`} clickHandler={handleClearClick} >ניקוי</Button>
      </div>
    </>
  );
};

export default CurrencyConverter;