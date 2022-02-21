import './Inforequest.css';
import React, { Component } from 'react';




class Inforequest extends Component{
    render(){
        return(
                <div className='Info-request-Div'>
                    <div>
                        <div className='bloc-request'>
                            <p>54 <br />
                            blocked Requests
                            </p>
                            <strong className='valeur'>0,03%</strong>
                        </div>
                    </div>

                    <div className='allow-request'>
                        <p>
                        18201k <br />
                        Allowed Requests
                        </p>
                        <strong className='valeur'>
                            99,7%
                        </strong>
                    </div>
                </div>
        );
    }
}

export default Inforequest;