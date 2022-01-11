import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Badge,
    NavItem,
    NavLink
} from 'reactstrap';
import { Link } from "react-router-dom"
import "./App.css"
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'


/**
* @author
* @class kartOzeti
**/

class kartOzeti extends Component {
    renderOzet() {
        return (

            <UncontrolledDropdown nav inNavbar className="pushable">
                <DropdownToggle nav caret>
                    <span className="front">
                    {/* <FormattedMessage id="sepet" /> */}
                    {this.props.t("description.sepet")}
                    </span>
                </DropdownToggle>
                <DropdownMenu right>
                    {this.props.kart.map(kartItem => (
                        <DropdownItem key={kartItem.parametre.id}>
                            {kartItem.parametre.productName}
                            <Badge color="success">
                                {kartItem.artir}</Badge>
                            <Badge color="danger"
                                onClick={() => this.props.karttanSil(kartItem.parametre)}
                            >X</Badge>
                        </DropdownItem>
                    ))}


                    <DropdownItem divider />
                    <DropdownItem>
                        <Link className="link" to="cart">
                        {this.props.t("description.kartaGit")}
                        </Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>

        )
    }

    renderBosKart() {
        return (
            <NavItem>
                <NavLink>
                    <Link className="pushable">
                        <span className="front">
                            {/* <FormattedMessage id="sepetbos" /> */}
                            {this.props.t("description.sepetbos")}
                        </span>
                    </Link>
                </NavLink>
            </NavItem>
        )
    }
    render() {
        return <div> {this.props.kart.length > 0 ? this.renderOzet() : this.renderBosKart()} </div>
    }
}


kartOzeti.propTypes = {}
export default kartOzeti