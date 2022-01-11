import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loading from "./components/Loading"
import { useState, useEffect } from 'react'
import logo from '../src/logo.png'

/**
* @author
* @class HakkındaSolBar
**/

class HakkindaSolBar extends Component {
 state = {}
 render() {
  return(
   <div>
      <img src={logo} className="logoSolBar" alt="logo" />
   </div>
    )
   }
 }


 HakkindaSolBar.propTypes = {}
export default HakkindaSolBar