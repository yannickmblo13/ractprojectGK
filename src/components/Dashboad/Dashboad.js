import React, { Component } from 'react';
import { useState } from 'react';
import Dateseartch from '../Datesearch/Datesearch'
import Inforequest from '../Inforequest/Inforequest'
import Search from '../Search/Search'
import { Modal, Button, Form } from 'react-bootstrap'

import './Dashboad.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Dashboad () {

  const [openModal, setOpenModal] = useState([
    {show:false}
  ]);


   const handleModal = () => {
    const newOpenModal = [...openModal];
    newOpenModal.show = true;
    setOpenModal(newOpenModal);

  }

  const closeModal = () => {
    const newOpenModal = [...openModal];
    newOpenModal.show = false;
    setOpenModal(newOpenModal);
  }



  const [datatable, setdatatable] = useState([
    {
      events: 'Events',
      path: 'Mark',
      ip: '12',
      DateTime: '12h20'
    },
    {
      events: 'Path',
      path: 'yann',
      ip: '32',
      DateTime: '11h20'
    },
    {
      events: 'Ip',
      path: 'juff',
      ip: '92',
      DateTime: '2h20'
    },
    {
      events: 'Date time',
      path: 'juff',
      ip: '92',
      DateTime: '2h20'
    },
    
  ])


      return (
          <div className='bloc-dashboad'>
                <div id='bloc-dashbord-2'>

                              <div className='' >
                              <div>
                                <h1>Current monitoring view</h1>
                                <hr />
                                <Inforequest/>
                                <div className="col-lg-3 dropdown Dashboad-dropdown">
                                <Form.Select  aria-label="Default select example">
                                    <option>Choisir un domaine</option>
                                    <option value="1">Domaine1</option>
                                    <option value="2">DOmaine2</option>
                                    <option value="3">Domaine3</option>
                                </Form.Select>
                                </div>

                                <div className='Dashboad-div-search'>
                                    <Dateseartch/>
                                    <Search/>
                                </div>
                              </div>
                              


                                  <div className='Dashbord-table'>
                                    <table className="table table-striped Dashbord-table ">
                                      <thead className="bg-dark text-white text-align-left rounded">
                                        <tr>
                                        <th onClick={() => handleModal()} scope="row"></th>
                                            {
                                              datatable.map((items) => {
                                                return(
                                                  <th  scope="col">{items.events}</th>
                                                )
                                              })
                                          }
                                            
                                        </tr>
                                      </thead>

                                      <tbody>
                                      <tr>
                                      <th onClick={() => handleModal()} scope="row">1</th>
                                      {
                                              datatable.map((items) => {
                                                return(
                                                  <th>{items.path}</th>
                                                )
                                              })
                                          }
                                      </tr>
                                      <tr>
                                      <th onClick={() => handleModal()} scope="row">2</th>
                                      {
                                              datatable.map((items) => {
                                                return(
                                                  <th>{items.ip}</th>
                                                )
                                              })
                                          }
                                      </tr>
                                      <tr>
                                      <th onClick={() => handleModal()} scope="row">3</th>
                                          {
                                              datatable.map((items) => {
                                                return(
                                                  <th>{items.DateTime}</th>
                                                )
                                              })
                                          }
                                      </tr>
                                  </tbody>
                                          
                                    </table>
                                  </div>

                                  <div>
                                    
                                    <Modal show={openModal.show}>
                                      <Modal.Header> <strong>Request Summary</strong> </Modal.Header>
                                      <Modal.Body>
                                        <p>Blocking Reason : </p>
                                        <hr />
                                        <p>Ressource Path:</p>
                                        <hr />
                                        <p>Ip Adress: </p>
                                        <hr />
                                        <p>Reverse Ip</p>
                                        <hr />
                                        <p>Request Methode : </p>
                                        <hr />
                                        <p>Http protocol: </p>
                                        <hr />
                                        <p>Http Status : </p>
                                        <hr />
                                        <p>HTTP referer : </p>
                                        <hr />
                                        <p>HTTP Users Agent: </p>
                                        <hr />
                                        <p>Date time (GMT) : </p>
                                      </Modal.Body>
                                      
                                      <Modal.Footer>
                                          <Button onClick={() => closeModal()}>Fermer</Button>
                                        </Modal.Footer>
                                    </Modal>
                                  </div>
                      </div>

                </div>
          </div>
      );
    }


  

export default Dashboad;