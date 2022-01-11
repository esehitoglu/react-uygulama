import React from 'react';
import "./Hakkinda.css"


class Hakkinda extends React.Component {

    render() {
        return (
            <div>

                <div className="wrap">
                    <h3>
                        {this.props.t("description.hakkimizda")}
                    </h3>
                    <div className="box">
                        <p>
                            {this.props.t("description.hakkındaParagraf")}
                        </p> 
                     
                    </div>
                </div>
            </div>
        );
    }
}

export default Hakkinda;