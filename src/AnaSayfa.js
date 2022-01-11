import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from "reactstrap"
import { Route, Switch } from "react-router-dom"
import KartListesi from "./KartListesi"
import SayfaBulunamadi from './SayfaBulunamadi'
import Kategori from './Kategori'
import Urunler from './Urunler'
import UstMenu from "./UstMenu"
import alertify from "alertifyjs"
import Hakkinda from './Hakkinda'
import { FormattedDate, FormattedMessage, FormattedNumber, FormattedTime, IntlProvider } from "react-intl";
import { Trans, useTranslation } from "react-i18next"
import HakkindaSolBar from "./HakkindaSolBar"
import ParaBirimiFrom from "./ParaBirimiFrom"
import ParaBirimiTo from "./ParaBirimiTo"
import "./styles.css"

class AnaSayfa extends Component {

    state = { donenKategori: "", urunler: [], kart: [], }


    componentDidMount() {
        this.getUrunler()
    }

    changeKategori = (x) => {
        this.setState({ donenKategori: x.categoryName })
        this.getUrunler(x.id)
    }

    getUrunler = categoryId => {
        let url = "http://localhost:3004/products"
        if (categoryId) {
            url += "?categoryId=" + categoryId
        }
        fetch(url)
            .then(response => response.json())
            .then(veri => this.setState({ urunler: veri }));;
    }



    kartaEkle = (parametre) => {
        let yeniKart = this.state.kart
        var ekliNesne = yeniKart.find(c => c.parametre.id === parametre.id)
        if (ekliNesne) {
            ekliNesne.artir += 1
        } else {
            yeniKart.push({ parametre: parametre, artir: 1 })
        }
        this.setState({ kart: yeniKart })
        alertify.success(parametre.productName + " karta eklendi", 2)
    }

    karttanSil = (parametre) => {
        let yeniKart = this.state.kart.filter(c => c.parametre.id !== parametre.id)
        this.setState({ kart: yeniKart })
        alertify.error(parametre.productName + " karttan silindi", 2)
    }



    render() {
        let kategoriBaslik = { baslik: "Kategori", aaa: "ensar" }
        let urunBaslik = { baslik: "Ürünler" }
        return (

            <div>

                <Row xs="12">
                    <UstMenu
                        changeLocale={this.changeLocale}
                        langConfig={this.langConfig}
                        karttanSil={this.karttanSil}
                        kart={this.state.kart}
                        changeLanguage={this.props.changeLanguage}
                        t={this.props.t}
                    />
                </Row>
                <Row>
                    <Col xs="3">
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={props => (
                                    <Kategori
                                        {...props}
                                        changeLocale={this.changeLocale}
                                        changeKategori={this.changeKategori}
                                        donenKategori={this.state.donenKategori}
                                        bilgi={kategoriBaslik}
                                        changeLanguage={this.props.changeLanguage}
                                        t={this.props.t}
                                    />
                                )} />
                            <Route
                                exact
                                path="/hakkinda"
                                render={props => (
                                    <HakkindaSolBar
                                        {...props}
                                    />
                                )} />
                            <Route
                                exact
                                path="/cart"
                                render={props => (
                                    <HakkindaSolBar
                                        {...props}
                                    />
                                )} />
                        </Switch>
                    </Col>
                    <Col xs="9">
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={props => (
                                    <Urunler
                                        {...props}
                                        changeLocale={this.changeLocale}
                                        urunler={this.state.urunler}
                                        kartaEkle={this.kartaEkle}
                                        donenKategori={this.state.donenKategori} bilgi={urunBaslik}
                                        changeLanguage={this.props.changeLanguage}
                                        t={this.props.t}

                                        currencyOptions={this.props.currencyOptions}
                                        selectedCurrency={this.props.selectedCurrency}
                                        onChangeCurrency={this.props.onChangeCurrency}
                                        onChangeAmount={this.props.onChangeAmount}
                                        amount={this.props.amount}

                                        selectedToCurrency={this.props.selectedToCurrency}
                                        onChangeToCurrency={this.props.onChangeToCurrency}
                                        onChangeToAmount={this.props.onChangeToAmount}
                                        amountTo={this.props.amountTo}

                                        exchangeRate={this.props.exchangeRate}
                                    />
                                )} />
                            <Route
                                exact
                                path="/cart"
                                render={props => (
                                    <KartListesi
                                        {...props}
                                        changeLocale={this.changeLocale}
                                        kart={this.state.kart}
                                        karttanSil={this.karttanSil}
                                        changeLanguage={this.props.changeLanguage}
                                        t={this.props.t}
                                    />
                                )} />
                            <Route
                                exact
                                path="/hakkinda"
                                render={props => (
                                    <Hakkinda
                                        {...props}
                                        changeLocale={this.changeLocale}
                                        changeLanguage={this.props.changeLanguage}
                                        t={this.props.t}
                                    />
                                )} />

                            <Route
                                exact
                                path="/parabirimi"
                                render={props => (
                                    <ParaBirimiFrom
                                        {...props}

                                        changeLanguage={this.props.changeLanguage}
                                        t={this.props.t}

                                        currencyOptions={this.props.currencyOptions}
                                        selectedCurrency={this.props.selectedCurrency}
                                        onChangeCurrency={this.props.onChangeCurrency}
                                        onChangeAmount={this.props.onChangeAmount}
                                        amount={this.props.amount}

                                        selectedToCurrency={this.props.selectedToCurrency}
                                        onChangeToCurrency={this.props.onChangeToCurrency}
                                        onChangeToAmount={this.props.onChangeToAmount}
                                        amountTo={this.props.amountTo}

                                    />

                                )} />

                            <Route
                                exact
                                path="/parabirimito"
                                render={props => (
                                    <ParaBirimiTo
                                        {...props}

                                        changeLanguage={this.props.changeLanguage}
                                        t={this.props.t}

                                        

                                    />

                                )} />
                            <Route
                                component={SayfaBulunamadi}
                            />
                        </Switch>
                    </Col>
                </Row>
            </div>
        )
    }
}


AnaSayfa.propTypes = {}
export default AnaSayfa