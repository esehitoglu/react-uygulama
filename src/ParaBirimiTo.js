import React, { Component } from 'react';

export default function ParaBirimiTo(props) {

    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount,
        selectedToCurrency,
        onChangeToCurrency,
        onChangeToAmount,
        amountTo
    } = props

    return (
        <div>
            <h3 className="baslik">Para Birimi</h3>

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

        </div >
    );
}