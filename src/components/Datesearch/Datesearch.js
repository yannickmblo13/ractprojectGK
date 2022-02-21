import React, { Component } from 'react';
import './Datesearch.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class Datesearch extends Component {
    render() {
      return (
         <div className=' col-lg-3 bloc-datesearch'>
             <input type="date" className="form-control custom-control-input"/>
         </div>
      );
    }
  }


  

export default Datesearch;