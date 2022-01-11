import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner"
import logo from '../../src/logo.png';

import "../../src/App.css"

const Loading = () => {
    return (
        <div align="center">
            
            <div className="logoLoading">
                <h2 className="logoLoadingText" data-content="Yükleniyor...">Yükleniyor...</h2>
            </div>
    
            

            <Loader
                type="Hearts"
                color="#d3002a"
                height={100}
                width={100}
                timeout={3000} //3 secs
                className="animasyon"
            /> 
        </div>
    )
}

export default Loading
