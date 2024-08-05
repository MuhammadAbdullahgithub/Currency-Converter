import { useEffect, useState } from 'react';

const useCurrencyInfo = (baseCurrency) => {
  const [currencyInfo, setCurrencyInfo] = useState({});
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchCurrencyInfo = async () => {
      try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        const result = await response.json();
        setCurrencyInfo(result.rates);
        setOptions(Object.keys(result.rates));  // Set available currencies
      } catch (error) {
        console.error('Failed to fetch currency data:', error);
      }
    };

    fetchCurrencyInfo();
  }, [baseCurrency]);

  return { currencyInfo, options };
};

export default useCurrencyInfo;









