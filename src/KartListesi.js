import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Button } from "reactstrap"

/**
* @author
* @class KartListesi
**/

class KartListesi extends Component {

  renderKart() {
    return (
      
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>categoryId</th>
            <th>productName</th>
            <th>unitPrice</th>
            <th>quantityPerUnit</th>
            <th>unitsInStock</th>
            <th>adet</th>
          </tr>
        </thead>
        <tbody>
          {this.props.kart.map(veriler => (
            <tr key={veriler.id}>
              <th scope="row">{veriler.parametre.id}</th>
              <td>{veriler.parametre.categoryId}</td>
              <td>{veriler.parametre.productName}</td>
              <td>{veriler.parametre.unitPrice}</td>
              <td>{veriler.parametre.quantityPerUnit}</td>
              <td>{veriler.parametre.unitsInStock}</td>
              <td>{veriler.artir}</td>
              <td><Button 
              onClick={() => this.props.karttanSil(veriler.parametre)} 
              outline color="danger">
              {this.props.t("description.sil")}  
              </Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }


  render() {
    return (
      <div>{this.renderKart()} </div>
      
    )
  }
}


KartListesi.propTypes = {}
export default KartListesi