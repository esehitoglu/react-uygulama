import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FormattedDate, FormattedMessage, FormattedNumber, FormattedTime, IntlProvider} from "react-intl";



/**
* @author
* @class Kategori
**/

class Kategori extends Component {

    state = {
        kategoriler: []
    }

    getKategoriler = () => {
        fetch("http://localhost:3004/categories")
            .then(response => response.json())
            .then(veri => this.setState({ kategoriler: veri }))
    }

    componentDidMount() {
        this.getKategoriler()
    }

    render() {
       
        return (
            <IntlProvider>
            <div>
                <h3 className="baslik">
                    {/* <FormattedMessage id="kategori" /> */}
                    {this.props.t("description.kategori")}    
                </h3>
                <ListGroup>
                    {this.state.kategoriler.map(veriler => (
                        <ListGroupItem className="categoryName"
                            key={veriler.id}
                            onClick={() => this.props.changeKategori(veriler)}
                            active={veriler.categoryName === this.props.donenKategori ? true : false}
                        >
                            {veriler.categoryName}
                            {/* {this.props.t("description.Beverages")} */}
                        </ListGroupItem>
                    ))}
                </ListGroup>
                {/* <h4> {this.props.donenKategori} </h4> */}
            </div>
            </IntlProvider>
        )
    }
}


Kategori.propTypes = {}
export default Kategori