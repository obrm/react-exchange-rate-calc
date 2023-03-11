/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react';

import { API_URL } from '../constants/api_url'

const useCurrencyConverter = () => {
  const [currencyOne, setCurrencyOne] = useState('USD');
  const [currencyTwo, setCurrencyTwo] = useState('ILS');
  const [inputTwo, setInputTwo] = useState('');
  const [rate, setRate] = useState('');
  const [show, setShow] = useState(false);

  const inputOneRef = useRef('');

  useEffect(() => {
    inputOneRef.current.focus();
  }, []);

  useEffect(() => {
    calculate();
  }, [currencyOne, currencyTwo]);

  const handleAmountOneChange = (event) => {
    inputOneRef.current = event.target.value;
    calculate();
    setShow(true);
  };

  const handleAmountTwoChange = (event) => {
    setInputTwo(event.target.value);
  };

  const handleCurrencyOneChange = (event) => {
    setCurrencyOne(event.target.value);
  };

  const handleSwapClick = () => {
    setCurrencyOne(currencyTwo);
    setCurrencyTwo(inputOneRef.current === '' ? 'ILS' : currencyOne);
    inputOneRef.current = inputTwo === '' ? '' : inputTwo;
    calculate();
  };

  const handleClearClick = () => {
    inputOneRef.current = '';
    setInputTwo('');
    setShow(false);
  };

  const calculate = async () => {
    const res = await fetch(`${API_URL}${currencyOne}`);
    const data = await res.json();
    const curr2Rate = data.rates[currencyTwo];
    setRate(`1 ${currencyOne} = ${curr2Rate} ${currencyTwo}`);
    setInputTwo((Number(inputOneRef.current) * curr2Rate).toFixed(2));
  };

  return {
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
  };
};

export default useCurrencyConverter;