import React, { Component } from 'react';
import './Search.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class Search extends Component {
    render() {
      return (
        <div class="bloc-search">
  
        
        <div className="form-group has-search">
          <span className="fa fa-search form-control-feedback"></span>
          <input type="text" className="form-control" placeholder="Search"/>
        </div>
        
      </div>
      );
    }
  }


  

export default Search;