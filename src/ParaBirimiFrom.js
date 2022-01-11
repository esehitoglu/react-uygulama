import React, { Component } from 'react';

export default function ParaBirimiFrom(props) {

    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount,
        selectedToCurrency,
        onChangeToCurrency,
        onChangeToAmount,
        amountTo,
        t
    } = props


    return (
        <div>
            <h3 className="baslik">{t("description.parabirimi")}  </h3>

            <input type="number" value={amount} onChange={onChangeAmount} className="input"></input>
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {
                    currencyOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))
                }

            </select>
            <h3>=</h3>
            
            <input type="number" value={amountTo} onChange={onChangeToAmount} className="input"></input>
            <select value={selectedToCurrency} onChange={onChangeToCurrency}>
                {
                    currencyOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))
                }

            </select>
            {/* <h3> ilk selectden seçilen birim {selectedCurrency} </h3>
            <h3> ilk selectden seçilen değer {selectedToCurrency} </h3> */}
        </div >
    );
}