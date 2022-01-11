import React, { Component } from 'react'
import { Container, Row, Col } from "reactstrap"
import './App.css';
import Loading from "./components/Loading"
import Loading2 from "./components/Loading2"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { useState, useEffect } from 'react'
import AnaSayfa from './AnaSayfa'
import { IntlProvider } from "react-intl"
import { render } from '@testing-library/react';
import { Trans, useTranslation } from "react-i18next"
import HakkindaSolBar from "./HakkindaSolBar"
import ParaBirimiFrom from './ParaBirimiFrom'
import ParaBirimiTo from './ParaBirimiTo'

const paraBirimiUrl = "http://api.exchangeratesapi.io/v1/latest?access_key=c36a24eba015a694422e1cad89963056&format=1"


function App() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [isLoading, setisLoading] = useState(true)

    const [currencyOptions, setCurrencyOptions] = useState([])
    const [fromCurrency, setFromCurrency] = useState()
    const [toCurrency, setToCurrency] = useState()
    const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
    const [urunlerdeGelen, setUrunlerdeGelen] = useState(true)

    console.log("seçilen birim değeri: " , exchangeRate)

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    }, 2500);
  })

  let toAmount, fromAmount
    if (amountInFromCurrency) {
      fromAmount = amount
      toAmount = amount * exchangeRate
    } else {
      toAmount = amount
      fromAmount = amount / exchangeRate
    }



    useEffect(() => {
  
      fetch(paraBirimiUrl)
      .then(res => res.json())
      .then(data => { 
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions( [data.base , ...Object.keys(data.rates)] )
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
        console.log(data.rates[firstCurrency])
      })
    },[])

  useEffect(() => {
    if(fromCurrency != null &&  toCurrency != null ){
    fetch(`${paraBirimiUrl}?base=${fromCurrency}&symbols=${toCurrency}`)
      .then(res => res.json())
      .then(data =>
        setExchangeRate(data.rates[toCurrency])
      )
    }
  }, [fromCurrency, toCurrency])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }


  return (
    <Container >
      {/* <button onClick={() => changeLanguage("tr")}>TR</button>
      <button onClick={() => changeLanguage("en")}>EN</button> */}
      {/* <hr /> */}
      {/* <Trans i18nKey="description.anasayfa">
        To get started, edit <code>src/App.js</code> and save to reload.
      </Trans>
      <div>{t("description.hakkinda")}</div> */}

      {isLoading == true ?
        <Loading /> :
        (

          <AnaSayfa changeLanguage={changeLanguage} t={t}         
          
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
            onChangeCurrency={e => setFromCurrency(e.target.value)}
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount} 
          
            selectedToCurrency={toCurrency}
            onChangeToCurrency={e => setToCurrency(e.target.value)}
            onChangeToAmount={handleToAmountChange}
            amountTo={toAmount} 

            exchangeRate={exchangeRate}
          
          />
        )
      }

    </Container>

  )

}


App.propTypes = {}
export default App
