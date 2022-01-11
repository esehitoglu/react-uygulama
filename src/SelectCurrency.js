import React, { Component } from 'react'
import PropTypes from "prop-types"

const SelectCurrency = ({ paraBirimleri, onSelectCurrency }) => {
  return
  <select onChange={ (e)=> onSelectCurrency(e.target.value) }>
    {
      paraBirimleri.map( (c,i) => {
        return <option key={i} value={c}>{c}</option>
      })
    }
  </select>
}


SelectCurrency.PropTypes = {
  paraBirimleri : PropTypes.array.isRequired,
  onSelectCurrency : PropTypes.func.isRequired,
}

export default SelectCurrency