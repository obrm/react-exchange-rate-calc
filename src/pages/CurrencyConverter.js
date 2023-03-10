import img from '../assets/images/money.png'

/* eslint-disable react-hooks/exhaustive-deps */
import { useCurrencyConverterGlobalContext } from '../context/CurrencyConverterContext';

import { CURRENCIES_1, CURRENCIES_2 } from '../constants/currencies';
import {Button} from './../components';

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
  } = useCurrencyConverterGlobalContext();

  return (
    <>
    <img src={img} alt="money-img" className="money-img"/>
      <h1>מחשבון המרת מטבע</h1>      
      <p>יש לבחור את המטבע ואת הסכום כדי לקבל את ערך ההמרה</p>
      
      <div className="container">
        
        <div className="currency">
          <select id="currency-one" value={currencyOne} onChange={handleCurrencyOneChange}>
            {CURRENCIES_1.map((currency) => (
              <option key={currency.value} value={currency.value}>{currency.value}</option>
            ))}
          </select>
          <input type="number" id="amount-one" value={inputOneRef.current} ref={inputOneRef} onChange={handleAmountOneChange} placeholder="0" />
        </div>

        <div className="swap-rate-container">
          <Button clickHandler={handleSwapClick}>
            החלפה
          </Button>          
          <div className="rate" id="rate" dir="ltr">{rate}</div>
        </div>

        <div className="currency">
          <select id="currency-two" value={currencyTwo} onChange={(e) => setCurrencyTwo(e.target.value)}>
            {CURRENCIES_2.map((currency) => (
              <option key={currency.value} value={currency.value}>{currency.value}</option>
            ))}
          </select>
          <input type="number" id="amount-two" value={inputTwo} onChange={handleAmountTwoChange} placeholder="0" />
        </div>
        <Button className={`btn-transparent ${show && 'show'}`} clickHandler={handleClearClick} >ניקוי</Button>        
      </div>
      </>
  )
}

export default CurrencyConverter