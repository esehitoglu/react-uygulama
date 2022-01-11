import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Button } from "reactstrap"
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'
import currencyunit from "./components/data/currencyunit"
import curunit from "./components/data/curunit"
import { useState, useEffect } from 'react'

// Locale messages
let langConfig = {
  TR: {

  },
  EN: {

  }
};


const paraBirimiUrl = "http://api.exchangeratesapi.io/v1/latest?access_key=c36a24eba015a694422e1cad89963056&format=1"


class Urunler extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentLocale: "",
  //     currentMessages: langConfig[""],
  //     para: []
  //   }
  // }

  // changeLocale(language) {
  //   this.setState({
  //     currentLocale: language,
  //     currentMessages: langConfig[language]
  //   });
  // }

  state = {
    paraBirimi: []
  }

  componentDidMount() {
      this.getParaBirimi()
  }

  getParaBirimi = () => {
      fetch(paraBirimiUrl)
          .then(response => response.json())
          .then(veri => this.setState({ paraBirimi: veri }))
  }

  
  
  render() {
    let { currentLocale, currentMessages } = this.state;
    let { paraBirimi } = this.state;

  
    return (

      <IntlProvider locale={currentLocale} messages={currentMessages}>
        <div>
          <h3 className="urunlerH3 baslik">
            {/* <h3> {this.state.paraBirimi.name} </h3> */}
            {/* <FormattedMessage id="urunler" /> */}
            {this.props.t("description.urunler")}
          </h3>
          <div className="paraBirimiBlok">
            <h4 className="paraBirimiH4 baslik">
              {this.props.t("description.paraBirimi")}
            </h4>
            <input type="number" placeholder="değer : " value={this.props.exchangeRate} onChange={this.props.onChangeAmount} className="input"></input>
            <select value={this.props.selectedToCurrency} onChange={this.props.onChangeToCurrency}>
                {
                    this.props.currencyOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))
                }

            </select>
            
            {/* <h3> {this.state.parabirimi.name} </h3> */}
          </div>
          <Table className="urunlerTable">
            <thead>
              <tr>
                <th>#</th>
                <th>
                  {/* <FormattedMessage id="urunAdi" /> */}
                  {this.props.t("description.urunAdi")}
                </th>
                <th>
                  {/* <FormattedMessage id="birimFiyat" /> */}
                  {this.props.t("description.birimFiyat")}
                </th>
                <th>
                  {/* <FormattedMessage id="birimBasinaMiktar" /> */}
                  {this.props.t("description.birimBasinaMiktar")}
                </th>
                <th>
                  {/* <FormattedMessage id="stokdakiBirimler" /> */}
                  {this.props.t("description.stokdakiBirimler")}
                </th>
              </tr>
            </thead>
            <tbody>
              {this.props.urunler.map(veriler => (
                <tr key={veriler.id}>
                  <th scope="row">{veriler.id}</th>
                  <td>{veriler.productName}</td>
                  <td>
                    {/* <FormattedNumber value={veriler.unitPrice}
                    style="currency"
                    currency="TRY"/> */}
                    {veriler.unitPrice * this.props.exchangeRate}
                  </td>
                  <td>{veriler.quantityPerUnit}</td>
                  <td>{veriler.unitsInStock}</td>
                  <td><Button onClick={() => this.props.kartaEkle(veriler)} outline color="info">
                    {this.props.t("description.ekle")}
                  </Button></td>
                </tr>
              ))}
            </tbody>
          </Table>

        </div>
      </IntlProvider>
    )
  }
}


Urunler.propTypes = {}
export default Urunler