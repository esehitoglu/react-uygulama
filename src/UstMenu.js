import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import KartOzeti from './KartOzeti';
import { Link } from "react-router-dom"
//import Animate from 'animate.css-react'
import 'animate.css/animate.css'
import './App.css'
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'
import $ from 'jquery'
import { Trans, useTranslation } from "react-i18next"

// const links = [
//   { href: '#/', text: 'Ana Sayfa' },
//   { href: '#hakkinda', text: 'Hakkında' },
// ];

// const createNavItem = ({ href, text, className }) => (
//   <NavItem>
//     <NavLink href={href} className={className}>{text}</NavLink>
//   </NavItem>
// );



// Locale messages
let langConfig = {
  tr: {
    "app.hello": "Merhaba {name}",
    "anasayfa": "ANA SAYFA",
    "hakkinda": "HAKKINDA",
    "sepetbos": "SEPET BOŞ",
    "sepet": "SEPET"
  },
  en: {
    "app.hello": "Hello {name}",
    "anasayfa": "HOME PAGE",
    "hakkinda": "ABOUT",
    "sepetbos": "BASKET IS EMPTY",
    "sepet": "BASKET"
  },
  ja: {
    "app.hello": "こんにちは {name}"
  }
};


class UstMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocale: "tr",
      currentMessages: langConfig["tr"],
      isOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }

  changeLocale(language) {
    this.setState({
      currentLocale: language,
      currentMessages: langConfig[language]
    });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let { currentLocale, currentMessages } = this.state;
    return (
      <IntlProvider locale={currentLocale} messages={currentMessages}>
        <div>
          <Navbar light expand="md">
            <NavbarBrand href="/" className="navtext"><p>React App</p></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar> 
              {/* {links.map(createNavItem)} */}
              {/* className="mr-auto" */}
                <NavItem>
                  <NavLink>
                    <Link className="pushable" to="/"><span className="front">
                      {/* <FormattedMessage id="anasayfa" /> */}
                      {this.props.t("description.anasayfa")}
                    </span></Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link className="pushable" to="/hakkinda">
                      <span className="front">
                        {/* <FormattedMessage id="hakkinda" /> */}
                        {this.props.t("description.hakkinda")}
                      </span></Link>
                  </NavLink>
                </NavItem>
                <KartOzeti  
                t={this.props.t}
                karttanSil={this.props.karttanSil} kart={this.props.kart} />
                {/* <NavItem>
                  <NavLink>
                    <Link className="pushable" to="/parabirimi">
                      <span className="front">
                        {this.props.t("description.parabirimi")}
                      </span></Link>
                  </NavLink>
                </NavItem> */}
                <NavItem className="dilSenecekleri">
                  {/* <select className="dilSecenegi"
                    value={currentLocale}
                    onChange={(e) => this.changeLocale(e.target.value)}>
                    {
                      Object
                        .keys(langConfig)
                        .map(e => <option key={e} label={e} value={e} />)
                    }
                  </select> */}
                  <button className="dilButton" onClick={() => this.props.changeLanguage("tr")}>TR</button>
                  <button className="dilButton" onClick={() => this.props.changeLanguage("en")}>EN</button>
                </NavItem>
             
              </Nav>
            </Collapse>

          </Navbar>

        </div>
      </IntlProvider>
    );

  }
}



UstMenu.propTypes = {}
export default UstMenu